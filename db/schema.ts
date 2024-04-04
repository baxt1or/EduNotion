import { relations } from "drizzle-orm";
import { boolean, pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";


export const workspace = pgTable("workspace", {
    id: text("id").primaryKey(),
    userId: text("userId").notNull(),
    title: text("title").notNull(),
    content: text("content"),
    isPrivate: boolean("isPrivate").default(false),
    icon: text("icon"),
    imageUrl: text("imageUrl"),
    createdAt: timestamp("createdAt").defaultNow(),
    updatedAt: timestamp("updatedAt").defaultNow()
})

export const workspaceRelation = relations(workspace, ({ many }) => ({
    folders: many(folder)
}))


export type workspace = typeof workspace.$inferSelect



export const folder = pgTable("folder", {
    id: text("id").primaryKey(),
    title: text("title").notNull(),
    workspaceId: text("workspaceId").notNull(),
    content: text("content"),
    imageUrl: text("imageUrl"),
    icon: text("icon"),
    createdAt: timestamp("createdAt").defaultNow(),
    updatedAt: timestamp("updatedAt").defaultNow()
})


export const folderRelation = relations(folder, ({ one, many }) => ({
    workspace: one(workspace, {
        fields: [folder.workspaceId],
        references: [workspace.id]
    }),
    // files: many(file)
}))


export type folder = typeof folder.$inferSelect



// export const file = pgTable("file", {
//     id: text("id").primaryKey(),
//     title: text("title").notNull(),
//     imageUrl: text("imageUrl"),
//     icon: text("icon"),
//     folderId: text("folderId").references(() => folder.id),
//     createdAt: timestamp("createdAt").defaultNow(),
//     updatedAt: timestamp("updatedAt").defaultNow()
// })

// export type file = typeof file.$inferSelect

// export const fileRelation = relations(file, ({ one }) => ({
//     workspace: one(folder, {
//         fields: [file.folderId],
//         references: [folder.id]
//     })
// }))


