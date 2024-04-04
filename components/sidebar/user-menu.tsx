import { currentUser, UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import { redirect } from 'next/navigation'
import React, { use } from 'react'

export const UserMenu = async () => {

    const user = await currentUser()
    if (!user) {
        redirect('/')
    }

    return (
        <div className='flex items-center justify-between pl-2 w-full py-2'>

            <div className='flex items-center gap-1 h-[12px] w-[12px]  '>
                <UserButton afterSignOutUrl='/' />
            </div>
            <div>

            </div>
        </div>
    )
}
