import { Currencies } from "@/lib/currencies";
import {z} from "zod";

export const UpdateUserCurrencySchema = z.object({
    currency: z.custom(value => {
        const found = Currencies.some((c) => c.value === value)
    })
})