import { UploadImage } from "@/components/shared/upload-image";
import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
    return (
        <div className='max-w-5xl mx-auto bg-white rounded-2xl flex flex-col   mt-8'>

            <div className='max-w-4xl mx-auto flex gap-x-4 p-4 flex-col   mt-12   '>
                <h1 className='font-medium  text-xs  px-4' />
                <div className='flex  gap-2'>
                    <Skeleton className='relative rounded-xl mt-6 mb-2 ml-2 h-[150px] w-[150px]' />
                    <Skeleton className='relative rounded-xl mt-6 mb-2 ml-2 h-[150px] w-[150px]' />
                    <Skeleton className='relative rounded-xl mt-6 mb-2 ml-2 h-[150px] w-[150px]' />
                    <Skeleton className='relative rounded-xl mt-6 mb-2 ml-2 h-[150px] w-[150px]' />
                    <Skeleton className='relative rounded-xl mt-6 mb-2 ml-2 h-[150px] w-[150px]' />
                    <Skeleton className='relative rounded-xl mt-6 mb-2 ml-2 h-[150px] w-[150px]' />
                </div>
            </div>


            <UploadImage id="hee"/>
        </div>
    )
}