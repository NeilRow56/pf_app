import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import BankAccountsForm from "@/components/dashboard/bank/BankAccountsForm";

export default function BankAccountsPage() {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Bank Accounts</CardTitle>
        <div className="flex justify-between">
          <div />
          <div className="flex-nowrap">
            <BankAccountsForm />
          </div>
        </div>
      </CardHeader>
      <CardContent>Submit Button</CardContent>
    </Card>
  );
}
