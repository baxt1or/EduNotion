

import { currentUser } from '@clerk/nextjs'
import { redirect } from 'next/navigation'
import { getWorspaces } from '@/db/queries'
import { WorkspaceCard } from '@/components/home/workspace-card'

const HomePage = async () => {

    const user = await currentUser()

    if (!user) {
        redirect('/dashboard')
    }

    const workspacesData = getWorspaces(user.id)
    const [worspaces] = await Promise.all([workspacesData])

    return (
        <div className='max-w-5xl mx-auto bg-white rounded-2xl flex flex-col mt-8'>
            <div className='max-w-4xl mx-auto flex gap-x-4 p-4 flex-col rounded-xl  mt-12  shadow-sm border '>
                <h1 className='font-medium text-zinc-500 text-xs  px-4'>Recently visited</h1>
                <div className='flex  gap-2'>
                    {worspaces.map((data) => (
                        <WorkspaceCard
                            key={data.id}
                            id={data.id}
                            title={data.title}
                            imageUrl={data.imageUrl}
                            icon={data.icon}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default HomePage