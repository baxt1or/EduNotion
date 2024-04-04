import { folder } from "@/db/schema"
import { Editor } from "../workspace/editor"


type Props = {
    data: folder
}

export const FolderTable = ({ data }: Props) => {
    
    return (
        <div className="mt-0 flex flex-col">
            <div className="flex items-center justify-start">
                <h1 className="flex items-center gap-2 text-4xl font-extrabold">
                    🍇 {data.title}
                </h1>
            </div>

            <div className="mt-6">
                <Editor
                    // onChange={() => { }}
                    content={data.content}
                />
            </div>

        </div>
    )
}
