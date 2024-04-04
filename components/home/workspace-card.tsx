"use client"

import Image from "next/image"
import Link from "next/link"
import avatar from '@/public/man.jpg'

type Props = {
    id: string
    title: string
    imageUrl: string | null
    icon: string | null

}
export const WorkspaceCard = ({ id, title, imageUrl, icon }: Props) => {
    return (
        <Link
            href={`/dashboard/${id}`}
            className='relative rounded-xl mt-6 mb-2 ml-2 bg-white hover:opacity-60 hover:translate-y-[-2px] transition  h-[150px] w-[150px] flex flex-col  ring-1 ring-zinc-900/5'>
            <Image
                src={`https://vvbrvusffcjmdqsfnemd.supabase.co/storage/v1/object/public/images/${imageUrl}`}
                alt='imageUrl'
                width={170}
                height={80}
                className='rounded-t-xl object-cover w-full h-[80px]'
            />
            <div className='flex items-center justify-start pt-2'>
                <h1 className='flex  font-medium text-sm text-neutral-900 px-3'>
                    {title}
                </h1>
            </div>


            {/* Date */}
            <div className='flex items-center justify-start pl-2 gap-1 pt-3'>
                <Image
                    src={avatar}
                    alt='avatar'
                    width={15}
                    height={15}
                    className='rounded-full object-cover aspect-square'
                />
                <h1 className='text-sm text-zinc-500 font-normal'>
                    1d
                </h1>
            </div>
        </Link>
    )
}
