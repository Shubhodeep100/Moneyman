import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { currentUser } from '@clerk/nextjs/server';
import { Separator } from '@radix-ui/react-dropdown-menu';
import { redirect } from 'next/navigation';
import React from 'react'

async function page() {
    const user = await currentUser();
    if (!user) {
        redirect("/sign-in");
    }
    return (
        <div className='conatiner flex max-w-2xl flex-col items-center justify-between gap-4'>
            <div>

                <h1 className='text-center text-3xl cursor-default'>
                    Welcome, <span className='ml-2 font-name'>{user.firstName}! 🙌🏻</span>
                </h1>
                <h2 className='mt-4 text-center text-base text-muted-foreground'>
                    Let&apos;s get started by setting up your currency.
                </h2>
                <h3 className='mt-2 text-center text-sm text-muted-foreground'>
                    You can change these settings at an time.
                </h3>
                <Separator />
                <Card className="w-full">
                    <CardHeader>
                        <CardTitle>Currency</CardTitle>
                        <CardDescription>Set your default currency for transactions</CardDescription>
                    </CardHeader>
                </Card>
            </div>
        </div>
    )
}

export default page
