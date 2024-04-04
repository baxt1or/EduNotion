


// import { cn } from '@/lib/utils'
// import { ArrowLeft, ArrowRight, ChevronLeft, ChevronsLeft, DumbbellIcon, Home, Inbox, MenuIcon, Plus, PlusCircle, Search, Settings } from 'lucide-react'
// import { usePathname, useRouter } from 'next/navigation'
// import React, { ElementRef, useEffect, useRef, useState } from 'react'
// import { File } from './item'

// import Link from 'next/link'
// import { Button } from '../ui/button'
// import { SideBarNaviagtion } from './sidebar-navigation'

// import { workspace } from '@/db/schema'
// import { WorkspaceForm } from '../shared/workspace-form'
// import { getWorkspacesPrivate } from '@/db/queries'
// import { WorkspaceFormPrivate } from '../shared/workspace-formPublic'





// type NavigationProps = {
//     data: workspace[]
// }

// export const Navigation = async ({ data }: NavigationProps) => {

//     const privateData = await getWorkspacesPrivate()


//     // const pathname = usePathname()


//     // const isMobile = useMediaQuery("(max-width: 768px)")

//     // const isResizingRef = useRef(false)
//     // const sidebarRef = useRef<ElementRef<"aside">>(null)
//     // const navbarRef = useRef<ElementRef<"div">>(null)


//     // const [isReseting, setIsReseting] = useState(false)
//     // const [isCollapsed, setIsCollapsed] = useState(isMobile)


//     // useEffect(() => {

//     //     if (isMobile) {
//     //         collapse()
//     //     } else {
//     //         resetWidth()
//     //     }
//     // }, [isMobile])


//     // useEffect(() => {
//     //     if (isMobile) {
//     //         collapse()
//     //     }
//     // }, [pathname, isMobile])



//     // const handleMousedown = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
//     //     e.preventDefault()
//     //     e.stopPropagation()

//     //     isResizingRef.current = true
//     //     document.addEventListener("mousemove", handleMouseMove)
//     //     document.addEventListener("mouseup", handleMouseUp)

//     // }

//     // const handleMouseMove = (e: MouseEvent) => {
//     //     if (!isResizingRef.current) {
//     //         return
//     //     }

//     //     let newWidth = e.clientX

//     //     if (newWidth < 240) {
//     //         newWidth = 240
//     //     }

//     //     if (newWidth > 480) {
//     //         newWidth = 480
//     //     }


//     //     if (sidebarRef.current && navbarRef.current) {
//     //         sidebarRef.current.style.width = `${newWidth}px`
//     //         navbarRef.current.style.setProperty("left", `${newWidth}px`)

//     //         navbarRef.current.style.setProperty("width", `calc(100%-${newWidth}px)`)
//     //     }
//     // }
//     // const router = useRouter()


//     // const handleMouseUp = () => {
//     //     isResizingRef.current = false


//     //     document.removeEventListener("mousemove", handleMouseMove)
//     //     document.removeEventListener("mouseup", handleMouseUp)
//     // }


//     // const resetWidth = () => {
//     //     if (sidebarRef.current && navbarRef.current) {
//     //         setIsCollapsed(false)
//     //         setIsReseting(true)



//     //         sidebarRef.current.style.width = isMobile ? "100%" : "240px"

//     //         navbarRef.current.style.setProperty("width", isMobile ? "0" : "calc(100%-240px)")

//     //         navbarRef.current.style.setProperty("left", isMobile ? "0" : "240px")

//     //         setTimeout(() => setIsReseting(false), 300)
//     //     }
//     // }


//     // const collapse = () => {
//     //     if (sidebarRef.current && navbarRef.current) {
//     //         setIsCollapsed(true);
//     //         setIsReseting(true);

//     //         sidebarRef.current.style.width = "0";
//     //         navbarRef.current.style.setProperty("width", "100%");
//     //         navbarRef.current.style.setProperty("left", "0");
//     //         setTimeout(() => setIsReseting(false), 300);
//     //     }
//     // }






//     return (
//         <>
//             <aside
//                 // ref={sidebarRef}
//                 className={cn('group/sidebar h-full bg-zinc-50 overflow-hidden relative flex w-60 flex-col z-[99999]',
//                     // isReseting && "transition-all ease-in-out duration-300",
//                     // isMobile && "w-0"
//                 )}>



//                 <div
//                     // onClick={collapse}
//                     role="button"
//                     className={cn(
//                         "h-6 w-6 text-muted-foreground rounded-sm hover:bg-neutral-300 dark:hover:bg-neutral-600 absolute top-3 right-2 opacity-0 group-hover/sidebar:opacity-100 transition",
//                         // isMobile && "opacity-100"
//                     )}
//                 >
//                     <ChevronsLeft className="h-6 w-6" />
//                 </div>


//                 <div className='flex flex-col'>
//                     {/* <div className='p-2'>
//                         <Link href='/' className={cn(buttonVariants({ variant: 'outline', size: "sm" }), 'border-gray-500 bg-white/80')}>
//                             <ArrowLeft className='h-4 w-4 mr-2' />
//                             Back to Home
//                         </Link>
//                     </div> */}

//                     <Link href='/' className='w-full'>
//                         <Button
//                             size='sm' variant='ghost' className='text-sm text-muted-foreground justify-start w-full'>
//                             <ChevronLeft className='h-5 w-5 hover:translate-x-[-1px] transition' /> Back
//                         </Button>
//                     </Link>

//                     <SideBarNaviagtion />

//                 </div>

//                 <div className='mt-4 px-3 flex flex-col'>

//                     <div className='flex items-center justify-between'>
//                         <h1 className='text-xs font-medium text-zinc-400 p-2'>
//                             Public
//                         </h1>

//                         <WorkspaceForm />
//                     </div>
//                     {data.map((item) => (

//                         <File
//                             key={item.id}
//                             data={item}
//                             folderId={item.id}
//                         />
//                     ))}

//                     <div className='flex items-center justify-between'>
//                         <h1 className='text-xs font-medium text-zinc-400 p-2'>
//                             Private
//                         </h1>

//                         <WorkspaceFormPrivate />
//                     </div>

//                     {/* {privateData.map((item) => {
//                         if (item.isPrivate = true) {
//                             return (
//                                 <File
//                                     key={item.id}
//                                     data={item}
//                                 />
//                             )
//                         }
//                     })} */}


//                 </div>

//                 <div
//                     // onMouseDown={handleMousedown}
//                     // onClick={resetWidth}
//                     className='opacity-0 group-hover/sidebar:opacity-100 
//                 transition cursor-ew-resize absolute h-full w-1 bg-primary/10 right-0 top-0' />
//             </aside>

//             <div
//                 // ref={navbarRef}
//                 className={cn(
//                     "absolute top-0 z-[99999] left-60 w-[calc(100%-240px)]",
//                     // isReseting && "transition-all ease-in-out duration-300",
//                     // isMobile && "left-0 w-full"
//                 )}
//             >
//                 <nav className="bg-transparent px-3 py-2 w-full">
//                     {/* {isCollapsed && <MenuIcon onClick={resetWidth} role="button" className="h-6 w-6 text-muted-foreground" />} */}
//                 </nav>
//             </div>
//         </>
//     )
// }
