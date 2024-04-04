"use client"

import { Clock, Ellipsis, Menu, MessageCircle, MessageSquareText, Star, User } from "lucide-react"



type Props = {
    title: string
    icon: string | null
}



export const Navbar = ({ title, icon }: Props) => {
    return (
        <header className='w-full  h-12 px-4'>
            <nav className='lg:max-w-7xl mx-auto flex items-center justify-between h-full'>
                <h1 className="font-normal text-center text-zinc-900 flex items-center gap-2">
                    {icon}
                    <span>
                        {title}
                    </span>
                </h1>
                <div className="flex items-center flex-row gap-4 font-normal text-sm text-zinc-900">
                    <h1 className="font-normal text-center text-zinc-400 text-sm">Edited at Mar 24</h1>
                    <h1 >Share</h1>
                    <MessageSquareText className="h-5 w-5" />
                    <Clock className="w-5 h-5" />
                    <Star className="w-5 h-5" />
                    <Ellipsis />

                </div>
            </nav>
        </header>
    )
}
