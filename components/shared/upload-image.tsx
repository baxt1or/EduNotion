"use client"

import { updateFolder, updateWorkspace } from "@/actions/workspace"
import { Loader2 } from "lucide-react"
import { useEffect, useState, useTransition } from "react"
import { Input } from "../ui/input"
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog"
import { Button } from "../ui/button"

type Props = {
    id: string
}

export const UploadImage = ({ id }: Props) => {
    const [pending, setIsPending] = useTransition()

    const onSubmit = () => {

        setIsPending(() => {

        })
    }
    return (
        <div>

            <Dialog>
                <DialogTrigger>Change cover</DialogTrigger>

                <DialogContent className="flex">
                    <form action={updateFolder} className="flex flex-col gap-y-4">

                        <Input type="file" name="imageUrl" />
                        <input type="text" name="id" hidden value={id} />


                        <Button type="submit">
                            Upload
                        </Button>

                    </form>
                </DialogContent>
            </Dialog>

        </div>
    )
}
