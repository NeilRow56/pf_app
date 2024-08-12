import {
  convertCurrencyToNumber,
  isAmountWithinRange,
  MAX_VALUE,
} from "@/lib/utils";
import * as z from "zod";

export const BankSchema = z.object({
  accountNumber: z
    .string()
    .min(1, { message: "Account number is empty" })
    .max(50, {
      message: "Account number should be shorter than 50 characters",
    }),
  balance: z
    .string({
      required_error: "Balance is empty",
    })
    .refine(
      (value) => {
        return isAmountWithinRange(convertCurrencyToNumber(value));
      },
      { message: `Balance should be between -${MAX_VALUE} and ${MAX_VALUE}` }
    ),
});
