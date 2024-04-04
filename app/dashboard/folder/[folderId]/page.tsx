import { Navbar } from "@/components/sidebar/header"
import { getFolderById } from "@/db/queries"
import Image from "next/image"
import exampleImage from '@/public/pexels-elias-tigiser-2757549.jpg'
import { FolderTable } from "@/components/folder/folder-table"
import { redirect } from "next/navigation"
import { UploadImage } from "@/components/shared/upload-image"


const FolderIdPage = async ({ params }: { params: { folderId: string } }) => {
    const folderData = getFolderById(params.folderId)
    const [folder] = await Promise.all([folderData])

    if (!folder) {
        redirect('/dashboard')
    }

    return (
        <>
            <Navbar title={folder.title} icon={folder.icon} />
            <div className='max-w-7xl mx-auto flex flex-col'>
                <div className='items-center w-full h-[200px] relative'>
                    <Image
                        src={`https://vvbrvusffcjmdqsfnemd.supabase.co/storage/v1/object/public/images/${folder.imageUrl}`}
                        alt='image'
                        fill
                        className='w-full h-full object-cover'
                    />

                </div>

                <div className='mx-auto max-w-5xl bg-white p-12 h-full w-full'>
                    <FolderTable
                        data={folder!}
                    />
                </div>
            </div>
        </>
    )
}

export default FolderIdPage