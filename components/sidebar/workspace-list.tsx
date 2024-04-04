
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { folder, workspace } from "@/db/schema"
import React from "react"
import Link from "next/link"
import { getFolders } from "@/db/queries"
import { Folder } from "./folder"
import { FolderForm } from "../shared/form-folder"


type Props = {
    data: workspace
    folderId: string
}


export const File = async ({ data, folderId }: Props) => {
    const foldersData = getFolders(folderId)
    const [folders] = await Promise.all([foldersData])

    if (!folders) {
        return (
            <h1>
                No folders
            </h1>
        )
    }``

    return (

        <Accordion type="multiple">
            <AccordionItem value="item-1">
                <AccordionTrigger className="pl-2 w-full hover:bg-neutral-100 rounded-xl">
                    <div className="flex items-center justify-between gap-1 w-full ">
                        <Link href={`/dashboard/${data.id}`} className="font-medium flex gap-1 text-sm text-neutral-500 cursor-pointer">

                            🍇 {data.icon}
                            <span>
                                {data.title}
                            </span>
                        </Link>

                        <div className="flex items-center gap-1 justify-center">

                            <FolderForm
                                workspaceId={data.id}
                            />
                        </div>


                    </div>
                </AccordionTrigger>
                <AccordionContent className="pl-2">


                    {folders.length === 0 && (
                        <h1 className="pl-4 font-medium text-xs text-zinc-500">
                            No page inside
                        </h1>
                    )}

                    {folders.map((folder) => (
                        <Folder
                            key={folder.id}
                            id={folder.id}
                            title={folder.title}
                            icon={folder.icon!}
                        />
                    ))}

                </AccordionContent>
            </AccordionItem>
        </Accordion>



    )
}

