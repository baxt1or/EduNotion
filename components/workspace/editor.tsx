"use client"


import "@blocknote/core/fonts/inter.css";
import { BlockNoteView, useCreateBlockNote } from "@blocknote/react";
import "@blocknote/react/style.css";

type Props = {
    onChange?: () => void
    content: string | null
    editable?: boolean
}

export const Editor = ({ onChange, content, editable }: Props) => {

    const editor = useCreateBlockNote()


    return (
        <BlockNoteView editor={editor} />
    )
}
