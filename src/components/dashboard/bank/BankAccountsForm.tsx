"use client";

import React from "react";

import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
  DialogHeader,
  DialogFooter,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { Loader2 } from "lucide-react";
import { BankSchema } from "@/schemas/bank";
import { z } from "zod";
import CurrencyInput from "@/components/CurrencyInput";

export default function BankAccountsForm() {
  const form = useForm<z.infer<typeof BankSchema>>({
    resolver: zodResolver(BankSchema),
    defaultValues: {
      accountNumber: "",
    },
    mode: "onChange",
  });

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="sm">Add</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Create new bank account</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form className="space-y-4" onSubmit={() => {}}>
            <FormField
              name="accountNumber"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Account Number</FormLabel>
                  <FormControl>
                    <Input placeholder="13719713158835300" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="balance"
              control={form.control}
              render={({ field: { value, onChange } }) => (
                <FormItem>
                  <FormLabel>Balance</FormLabel>
                  <FormControl>
                    <CurrencyInput
                      value={value}
                      onValueChange={(value) => onChange(value)}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </form>
        </Form>
        <DialogFooter>
          <Button type="button" onClick={() => {}}>
            {/* {<Loader2 className="mr-2 h-4 w-4 animate-spin" />} */}
            Confirm
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
