"use server"

import { datas } from "@/constants"
import db from "@/db/db"
import { folder, workspace } from "@/db/schema"
import { supabase } from "@/db/supabase"
import { auth } from "@clerk/nextjs"
import { eq } from "drizzle-orm"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

export const createWorkspace = async (formData: Omit<FormData, "id">) => {

    const { userId } = await auth()

    if (!userId) {
        return null
    }


    const title = formData.get("title") as string
    const id = formData.get("id") as string


    await db.insert(workspace).values({
        userId: userId,
        title: title,
        id: id
    })



  
    revalidatePath('/dashboard')
    revalidatePath(`/dashboard/${id}`)
    redirect(`/dashboard/${id}`)
}


export const updateWorkspace = async (formData: Omit<FormData, "id">) => {
    const { userId } = await auth()

    if (!userId) {
        redirect('/dashboard')
    }


    const imageUrl = formData.get("imageUrl") as File
    const id = formData.get("id") as string


    const { data: imageData } = await supabase.storage
        .from("images")
        .upload(`${imageUrl.name}-${new Date()}`, imageUrl,
            {
                cacheControl: "2592000",
                contentType: "image/png",
            });


    const data = await db.update(workspace).set({ imageUrl: imageData?.path }).where(eq(workspace.id, id))

    
    revalidatePath('/dashboard')
    revalidatePath(`/dashboard/${id}`)
    return data
}



export const createFolder = async (formData: Omit<FormData, "id">) => {
    const title = formData.get("title") as string
    const workspaceId = formData.get("workspaceId") as string
    const id = formData.get("id") as string

    await db.insert(folder).values({
        title: title,
        workspaceId: workspaceId,
        id: id
    })


    
    revalidatePath('/dashboard')
    revalidatePath('/dashboard/folder')
    revalidatePath(`/dashboard/folder/${id}`)
    redirect(`/dashboard/folder/${id}`)
}


export const updateFolder = async (formData: Omit<FormData, "id">) => {
    const { userId } = await auth()

    if (!userId) {
        redirect('/dashboard')
    }


    const imageUrl = formData.get("imageUrl") as File
    const id = formData.get("id") as string


    const { data: imageData } = await supabase.storage
        .from("images")
        .upload(`${imageUrl.name}-${new Date()}`, imageUrl,
            {
                cacheControl: "2592000",
                contentType: "image/png",
            });


    const data = await db.update(folder).set({ imageUrl: imageData?.path }).where(eq(folder.id, id))

    
    revalidatePath('/dashboard')
    revalidatePath('/dashboard')
    revalidatePath(`/dashboard/folder/${id}`)
    return data
}


