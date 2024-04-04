import Image from "next/image"
import home from '@/public/home_icon.svg'
import { currentUser } from "@clerk/nextjs"
import { redirect } from "next/navigation"
import { WorkspaceForm } from "../shared/workspace-form"


export const UserNavigation = async () => {

    const user = await currentUser()

    if (!user) {
        redirect('/dashbaord')
    }

    const firstname = user.firstName
    const lastname = user.lastName


    const fullName = `${firstname} ${lastname}`



    return (
        <div className='flex items-center gap-2  pl-2 w-full hover:bg-neutral-100 justify-between'>

            <div className="flex items-center gap-2">
                <div className='aspect-square bg-orange-100 relative h-5 w-5 p-1 flex items-center'>
                    <Image
                        src={home}
                        alt='home'
                        width={4}
                        height={4}
                        className='h-3 w-3 object-cover'
                    />

                </div>
                <h1 className='font-medium text-md text-neutral-600 tracking-tighter'>
                    {fullName}
                </h1>

            </div>




            <WorkspaceForm />
        </div>
    )
}
