import { cn } from '@/lib/utils'
import { CalendarCheckIcon, ChevronLeft, ChevronsLeft, Trash } from 'lucide-react'
import { File } from './workspace-list'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { SideBarNaviagtion } from './sidebar-navigation'
import { workspace } from '@/db/schema'
import { WorkspaceForm } from '@/components/shared/workspace-form'
import { UserNavigation } from './user-naviagion'
import { redirect } from 'next/navigation'
import { Title } from './title'



type NavigationProps = {
    data: workspace[]
}

export const Navigation = ({ data }: NavigationProps) => {


    return (

        <aside className={cn('group/sidebar h-full bg-zinc-50 overflow-hidden relative flex w-60 flex-col z-[99999] ')}>

            <div
                role="button"
                className={cn(
                    "h-6 w-6 text-muted-foreground rounded-sm hover:bg-neutral-300 dark:hover:bg-neutral-600 absolute top-3 right-2 opacity-0 group-hover/sidebar:opacity-100 transition",

                )}
            >
                <ChevronsLeft className="h-6 w-6" />
            </div>


            <div className='flex flex-col'>

                <Link href='/' className='w-full'>
                    <Button
                        size='sm' variant='ghost' className='text-sm text-muted-foreground justify-start w-full'>
                        <ChevronLeft className='h-5 w-5 hover:translate-x-[-1px] transition' /> Back
                    </Button>
                </Link>

                <SideBarNaviagtion />

            </div>

            <div className='mt-4 px-3 flex flex-col'>

                <Title label='Public' />

                <UserNavigation />



                {data.map((data) => (
                    <File
                        key={data.id}
                        data={data}
                        folderId={data.id}
                    />
                ))}

                <Title label='Private' />



                <div className='flex items-start pl-2 flex-col pt-8 gap-y-2'>
                    <div className='flex items-center gap-2 text-neutral-500 hover:text-neutral-900'>
                        <CalendarCheckIcon className='w-4 h-4' />
                        <span className='text-sm font-medium'>Calendar</span>
                    </div>
                    <div className='flex items-center gap-2 text-neutral-500 hover:text-neutral-900'>
                        <Trash className='w-4 h-4' />
                        <span className='text-sm font-medium'>Trash</span>
                    </div>
                </div>

            </div>

            <div className='opacity-0 group-hover/sidebar:opacity-100  transition cursor-ew-resize absolute h-full w-1 bg-primary/10 right-0 top-0' />
        </aside>

    )
}
