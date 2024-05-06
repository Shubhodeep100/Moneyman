import { cn } from '@/lib/utils';
import React, { ReactNode } from 'react'
import { Skeleton } from './ui/skeleton';

function SkeletonWrapper({
    children,
    isLoading,
    fullWidth = true
}: {
    children: ReactNode;
    isLoading: boolean;
    fullWidth?: boolean
}) {
    if (!isLoading) return children;
    return <Skeleton className={cn(fullWidth && "w-full")}>

    </Skeleton>
}

export default SkeletonWrapper
