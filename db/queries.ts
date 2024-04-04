import { cache } from "react";
import db from "./db";
import { folder, workspace } from "./schema";
import { eq } from "drizzle-orm";





export const getWorspaces = cache(async (userId: string) => {

    const data = await db.query.workspace.findMany({
        where: eq(workspace.userId, userId),
        with: {
            folders: true
        }
    })

    return data
})

export const getWorkspacesById = cache(async (workspaceId: string) => {
    const data = await db.query.workspace.findFirst({
        where: eq(workspace.id, workspaceId),
        with: {
            folders: true
        }
    })
    return data
})



export const getFolders = cache(async (workspaceId: string) => {
    const data = await db.query.folder.findMany({
        where: eq(folder.workspaceId, workspaceId)
    })
    return data
})

export const getFolderById = cache(async (folderId: string) => {
    const data = await db.query.folder.findFirst({
        where: eq(folder.id, folderId)
    })
    return data
})