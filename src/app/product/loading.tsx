import { Skeleton } from '@/components/ui/skeleton'
import React from 'react'

const Loading = () => {
    return (
        <div className='p-10 w-full flex flex-col lg:flex-row items-center lg:items-start justify-center space-x-4 mx-auto space-y-4 lg:space-y-0'>
            <div className="flex space-x-4">
                <div className="hidden space-y-4 lg:inline">
                    <Skeleton className='w-[100px] h-[100px] rounded-md' />
                    <Skeleton className='w-[100px] h-[100px] rounded-md' />
                    <Skeleton className='w-[100px] h-[100px] rounded-md' />
                </div>
                <Skeleton className='w-[200px] h-[200px] rounded-md inline lg:hidden' />
                <Skeleton className='w-[200px] h-[200px] rounded-md inline lg:hidden' />
            </div>
            <div className="w-[400px] h-[500px] sm:w-[520px] sm:h-[780px] rounded-md space-y-2 border p-2 animate-pulse">
                <Skeleton className='w-[380px] h-[40px] rounded-md sm:w-[500px]' />
                <Skeleton className='w-[300px] h-[40px] rounded-md sm:w-[500px]' />
                <Skeleton className='w-[380px] h-[385px] sm:h-[650px] rounded-md sm:w-[500px]' />
            </div>
        </div>
    )
}

export default Loading