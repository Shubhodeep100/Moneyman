import { z } from "zod";

export const CreateTransactionSchema = z.object({
  amount: z.coerce.number().positive().multipleOf(0.01),
  description: z.string(),
  date: z.coerce.date(),
  category: z.string(),
  type: z.union([
    z.literal("inconome"),
    z.literal("expense")
  ]),
});
