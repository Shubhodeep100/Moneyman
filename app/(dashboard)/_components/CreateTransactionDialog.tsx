"use client"

import { Dialog, DialogContent, DialogHeader, DialogTrigger } from "@/components/ui/dialog";
import { TransactionType } from "@/lib/types";
import { cn } from "@/lib/utils";
import { CreateTransactionSchema, CreateTrasactionScemaType } from "@/schema/transaction";
import { DialogTitle } from "@radix-ui/react-dialog";
import { ReactNode } from "react";

interface Props {
    trigger: ReactNode;
    type: TransactionType;
}

import React from "react"
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormControl, FormDescription, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

function CreateTransactionDialog({ trigger, type }: Props) {
    const form = useForm<CreateTrasactionScemaType>({
        resolver: zodResolver(CreateTransactionSchema),
        defaultValues: {
            type,
            date: new Date(),
        }
    });

    return (
        <Dialog>
            <DialogTrigger asChild>
                {trigger}
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Create a new <span className={cn("m-1", type === "income" ? "text-emerald-500" : "text-red-500")}>{type}</span></DialogTitle>
                </DialogHeader>
                <FormProvider {...form}>
                    <form className="space-y-4" onSubmit={form.handleSubmit((data) => console.log(data))}>
                        <FormField
                            control={form.control}
                            name="description"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Description</FormLabel>
                                    <FormControl>
                                        <Input {...field} />
                                    </FormControl>
                                    <FormDescription>Transaction Description (optional)</FormDescription>
                                </FormItem>
                            )}
                        />
                        <button type="submit">Submit</button>
                    </form>
                </FormProvider>
            </DialogContent>
        </Dialog>
    );
}

export default CreateTransactionDialog;
