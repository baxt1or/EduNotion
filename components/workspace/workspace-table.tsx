"use client"

import { folder, workspace } from "@/db/schema"
import { Ellipsis } from "lucide-react"
import Link from "next/link"
import { Editor } from "./editor"
import { updateWorkspace } from "@/actions/workspace"


type Props = {
    data: workspace
    folders: folder[]
}

export const WorkspaceTable = ({ data, folders }: Props) => {

    return (
        <div className="mt-0 flex flex-col">
            <div className="flex items-center justify-start">
                <h1 className="flex items-center gap-2 text-4xl font-extrabold">
                    🍇 {data.title}
                </h1>
            </div>

            <div className='flex flex-col items-start justify-start mt-6 ml-6 gap-y-2'>
                {folders.map((folder) => (
                    <Link
                        href={`/dashboard/folder/${folder.id}`}
                        key={folder.id}
                        className='flex w-full bg-white h-[30px] max-w-2xl rounded-sm items-center justify-between  hover:bg-zinc-100 px-2'
                    >
                        <h1 className='flex gap-1 items-center text-md '>
                            {folder.icon}
                            <span className='text-zinc-900 font-semibold'>
                                {folder.title}
                            </span>

                        </h1>



                        <Ellipsis className='opacity-0 hover:opacity-75' />
                    </Link>
                ))}
            </div>

            
            <Editor
                // onChange={() => { }}
                content={data.content}
            />



        </div >
    )
}
