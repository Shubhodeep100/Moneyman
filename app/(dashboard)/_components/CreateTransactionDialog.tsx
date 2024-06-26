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
import CategoryPicker from "./CategoryPicker";

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
                                        <Input defaultValue={""} {...field} />
                                    </FormControl>
                                    <FormDescription>Transaction Description (optional)</FormDescription>
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="amount"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Amount</FormLabel>
                                    <FormControl>
                                        <Input defaultValue={0} type="number" {...field} />
                                    </FormControl>
                                    <FormDescription>Transaction Amount (required)</FormDescription>
                                </FormItem>
                            )}
                        />
                        <button type="submit">Submit</button>
                    </form>

                    <div className="flex items-center justify-between gap-2" >
                        <FormField
                            control={form.control}
                            name="category"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Category</FormLabel>
                                    <FormControl>
                                        <CategoryPicker type={type}/>
                                    </FormControl>
                                    <FormDescription>Select a category for this transaction</FormDescription>
                                </FormItem>
                            )}
                        />
                    </div>
                </FormProvider>
            </DialogContent>
        </Dialog>
    );
}

export default CreateTransactionDialog;
