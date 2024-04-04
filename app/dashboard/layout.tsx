
import Example from "@/components/sidebar/example"
import { Navbar } from "@/components/sidebar/header"
import { Navigation } from "@/components/sidebar/sidebar"
import { File } from "@/components/sidebar/workspace-list"
import { getFolders, getWorspaces } from "@/db/queries"
import { currentUser } from "@clerk/nextjs"
import { redirect } from "next/navigation"





type Props = {
    children: React.ReactNode
}



export default async function DashboardLayout({ children }: Props) {

    const user = await currentUser()
    if (!user) {
        redirect('/dashboard')
    }
    const workspaceData = getWorspaces(user.id)
    const [workspace] = await Promise.all([workspaceData])




    return (

        <main className="h-full flex dark:bg-[#1f1f1f]">

            <Navigation data={workspace} />
            <div className="flex-1 overflow-auto h-full">
                {children}
            </div>


        </main>
    )
}
