"use client"

import { createFolder } from '@/actions/workspace'
import { Plus } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { v4 as uuidv4 } from 'uuid'

type Props = {
    workspaceId: string
}

export const FolderForm = ({ workspaceId }: Props) => {

   
    return (
        <form action={createFolder} >
            <div className="flex flex-col items-center justify-center">
                <input type="text" name="id" hidden value={uuidv4()}
                    onChange={() => { }}
                />

                <input type="text" name="title" hidden value={"Untitled"}
                    onChange={() => { }}
                />
                <input type="text" name="workspaceId" hidden value={workspaceId}
                    onChange={() => { }}
                />

            </div>
            <button type="submit">
                <Plus className='h-4 w-4 text-zinc-500 opacity-0 hover:opacity-100' />
            </button>
        </form>
    )
}