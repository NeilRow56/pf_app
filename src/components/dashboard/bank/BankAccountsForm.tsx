"use client";

import React, { useState } from "react";

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
import { SubmitHandler, useForm } from "react-hook-form";
import { Loader2 } from "lucide-react";
import { BankSchema } from "@/schemas/bank";
import { z } from "zod";
import CurrencyInput from "@/components/CurrencyInput";
import { Label } from "@/components/ui/label";

export default function BankAccountsForm() {
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);

  const form = useForm<z.infer<typeof BankSchema>>({
    resolver: zodResolver(BankSchema),
    defaultValues: {
      accountNumber: "",
    },
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<z.infer<typeof BankSchema>> = (
    values: z.infer<typeof BankSchema>
  ) => {
    console.log(values);
    setIsDialogOpen(false);
  };

  return (
    <Dialog open={isDialogOpen} onOpenChange={(open) => setIsDialogOpen(open)}>
      <DialogTrigger asChild>
        <Button size="sm">Add</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Create new bank account</DialogTitle>
          <DialogDescription>
            This will create a new account in the database.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form className="space-y-4">
            <FormField
              name="accountNumber"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <Label>Account Number</Label>
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
                  <Label>Balance</Label>
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
          <Button
            type="button"
            disabled={!form.formState.isValid}
            onClick={form.handleSubmit(onSubmit)}
          >
            {/* {<Loader2 className="mr-2 h-4 w-4 animate-spin" />} */}
            Confirm
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
