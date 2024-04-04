"use client"
import Image from 'next/image'
import loading from '../public/loading.gif'
import { Progress } from './ui/progress'
import { useState } from 'react'

export const LoadingPage = () => {

    const [progress, setProgress] = useState(12)
    return (
        <div className='flex items-center justify-center h-full max-w-[60vw] mx-auto w-full '>
            <div className='flex flex-col items-center'>
                <Image
                    src={loading}
                    alt='loding'
                    width={350}
                    height={350}

                />
                <Progress value={progress} className='w-full mt-2' />
                <h1 className='text-xl mt-2'>
                    Loading...
                </h1>
            </div>
        </div>
    )
}
