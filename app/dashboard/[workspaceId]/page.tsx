


import { updateWorkspace } from '@/actions/workspace'
import { UploadImage } from '@/components/shared/upload-work-image'

import { Navbar } from '@/components/sidebar/header'
import { WorkspaceTable } from '@/components/workspace/workspace-table'
import { getFolders, getWorkspacesById } from '@/db/queries'
import exampleImage from '@/public/avatar.jpg'
import { Ellipsis } from 'lucide-react'
import Image from 'next/image'
import { redirect } from 'next/navigation'

const WorkIdPage = async ({ params }: { params: { workspaceId: string } }) => {

    const workspaceByIdData = getWorkspacesById(params.workspaceId)
    const [workspaceById] = await Promise.all([workspaceByIdData])

    if (!workspaceById) {
        redirect('/dashboard')
    }

    const folders = await getFolders(workspaceById.id)

    if (!folders) {
        redirect('/dashboard')
    }

    return (
        <>
            <Navbar title={workspaceById.title} icon={workspaceById.icon} />
            <div className='max-w-7xl mx-auto flex flex-col'>
                <div className='items-center w-full h-[200px] relative'>

                    {workspaceById.imageUrl ? (
                        <Image
                            src={`https://vvbrvusffcjmdqsfnemd.supabase.co/storage/v1/object/public/images/${workspaceById.imageUrl}`}
                            alt='image'
                            fill
                            className='w-full h-full object-cover'
                        />
                    ) : (
                        <UploadImage
                            id={workspaceById.id}
                        />
                    )}

                </div>

                <div className='mx-auto max-w-5xl bg-white p-12 h-full w-full'>
                    {/* <div className="mt-0 flex flex-col">
                        <div className="flex items-center justify-start">
                            <h1 className="flex items-center gap-2 text-4xl font-semibold">
                                🍇 {workspaceById.title}
                            </h1>
                        </div>

                        <div className='flex flex-col items-start justify-start mt-6 ml-6 gap-y-2'>
                            {folders.map((folder) => (
                                <div
                                    key={folder.id}
                                    className='flex w-full bg-white h-[30px] max-w-2xl rounded-sm items-center justify-between  hover:bg-zinc-100 px-2'>
                                    <h1 className='flex gap-1 items-center text-md '>
                                        🍏
                                        <span className='text-zinc-900 font-semibold'>
                                            {folder.title}
                                        </span>

                                    </h1>

                                    <Ellipsis className='opacity-0 hover:opacity-75' />
                                </div>
                            ))}
                        </div>
                    </div> */}

                    <WorkspaceTable
                        data={workspaceById}
                        folders={workspaceById.folders}
                    />

                </div>
            </div>
        </>
    )
}

export default WorkIdPage




