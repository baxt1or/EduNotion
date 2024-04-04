import { Skeleton } from "@/components/ui/skeleton";



export default function Loader() {
    return (
        <div className='max-w-7xl mx-auto flex flex-col w-full '>
            <div className='items-center w-full h-[200px] relative '>
                <Skeleton className="w-full h-full object-cover" />
            </div>

            <div className="flex flex-col mt-1 ml-32 gap-y-3">
                <Skeleton className="w-[80px] h-[80px] rounded-lg " />
                <Skeleton className="w-[200px] h-[40px] rounded-sm " />
            </div>
        </div>
    )
}