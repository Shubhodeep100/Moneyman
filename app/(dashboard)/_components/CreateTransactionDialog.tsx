"use client"

import { Dialog, DialogContent, DialogHeader, DialogTrigger } from "@/components/ui/dialog";
import { TransactionType } from "@/lib/types";
import { cn } from "@/lib/utils";
import { CreateTransactionSchema, CreateTrasactionScemaType } from "@/schema/Transaction";
import { DialogTitle } from "@radix-ui/react-dialog";
import { ReactNode } from "react";

interface Props {
    trigger: ReactNode;
    type: TransactionType;
}

import React from "react"
import { useForm } from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";

function CreateTransactionDialog({ trigger, type }: Props) {
    const from = useForm<CreateTrasactionScemaType>({
        resolver: zodResolver(CreateTransactionSchema),
        defaultValues:{
            type,
            date: new Date(),
        }
    })
    return (
        <Dialog>
            <DialogTrigger asChild>
                {trigger}
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Create a new <span className={cn("m-1", type === "income" ? "text-emerald-500" : "text-red-500")}>{type}</span></DialogTitle>
                </DialogHeader>
            </DialogContent>
        </Dialog >
    );
}

export default CreateTransactionDialog;