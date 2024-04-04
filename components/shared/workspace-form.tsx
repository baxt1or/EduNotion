"use client"

import { createWorkspace } from '@/actions/workspace'
import { Plus } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { v4 as uuidv4 } from 'uuid'


export const WorkspaceForm = () => {

    const router = useRouter()
    return (
        <form action={createWorkspace} >
            <div className="flex flex-col items-center justify-center">
                <input type="text" name="title" hidden value={"Untitled"}
                    onChange={() => { }}
                />
                <input type="text" name="id" hidden value={uuidv4()}
                    onChange={() => { }}
                />
            </div>
            <button type="submit">
                <Plus className='h-4 w-4 text-zinc-500 opacity-0 hover:opacity-100' />
            </button>
        </form>
    )
}
