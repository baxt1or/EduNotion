

import { getFolders } from "@/db/queries"
import { Folder } from "./folder"

type Props = {
    folderId: string
}

const Example = async ({ folderId }: Props) => {
    const foldersData = getFolders(folderId)
    const [folders] = await Promise.all([foldersData])

    if (!folders) {
        return (
            <h1>
                No folders
            </h1>
        )
    }
    return (
        <>
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

        </>
    )
}

export default Example