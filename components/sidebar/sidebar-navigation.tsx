"use client"


import { Home, Inbox, PlusCircle, Search } from 'lucide-react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { createWorkspace } from '@/actions/workspace'
import { v4 as uuidv4 } from 'uuid'

export const SideBarNaviagtion = () => {

    const pathname = usePathname()
    const router = useRouter()

    return (
        <div className='flex flex-col gap-y-2 p-2  font-mediu'>


            <Link href='/dashboard/search' className='hover:bg-zinc-100 hover:text-zinc-900 w-full '>
                <button className='flex p-1 items-center justify-start text-zinc-500'>
                    <Search className='h-4 w-4 mr-2 ml-1' />
                    <h1 className='text-sm text-zinc-500 hover:text-zinc-900'>Search</h1>
                </button>
            </Link>
            <Link href='/dashboard/home' className='hover:bg-zinc-100 hover:text-zinc-900 w-full '>
                <button className='flex p-1 items-center justify-start text-zinc-500'>
                    <Home className='h-4 w-4 mr-2 ml-1' />
                    <h1 className='text-sm text-zinc-500 hover:text-zinc-900'>Home</h1>
                </button>
            </Link>
            <Link href='/search' className='hover:bg-zinc-100 hover:text-zinc-900 w-full '>
                <button className='flex p-1 items-center justify-start text-zinc-500'>
                    <Inbox className='h-4 w-4 mr-2 ml-1' />
                    <h1 className='text-sm text-zinc-500 hover:text-zinc-900'>Inbox</h1>
                </button>
            </Link>

            <form action={createWorkspace} >
                <div className="flex flex-col items-center justify-center">
                    <input
                        type="text"
                        name="title"
                        hidden
                        value={"Untitled"}
                        onChange={() => { }}
                    />
                    <input
                        type="text"
                        name="id"
                        hidden
                        value={uuidv4()}
                        onChange={() => { }}
                    />

                </div>
                <button type="submit" className='flex p-1 items-center font-semibold justify-start text-zinc-700 hover:bg-zinc-100 hover:text-zinc-900 w-full'>
                    <PlusCircle className='h-4 w-4 mr-2 ml-1 font-semibold' />
                    <span className='text-sm text-zinc-700 hover:text-zinc-900'>
                        New Page
                    </span>
                </button>
            </form>



        </div >



    )
}
