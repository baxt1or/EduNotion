import { folder } from "@/db/schema"
import Link from "next/link"

type Props = {
    id: string
    title: string
    icon: string | undefined
}


export const Folder = ({ id, title, icon }: Props) => {
    return (
        <Link href={`/dashboard/folder/${id}`} className="text-sm  font-medium text-neutral-500 pl-8 mt-2 cursor-pointer flex flex-col gap-y-1">
            <h1 className="flex items-center gap-2">
                {icon}
                <span>
                    {title}
                </span>
            </h1>
        </Link>
    )
}
