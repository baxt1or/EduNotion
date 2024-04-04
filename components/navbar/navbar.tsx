"use client"

import { Loader2, Menu, User } from "lucide-react"
import { Button } from "../ui/button"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { useScrollTop } from "@/hooks/use-scrroll-top"
import { ClerkLoaded, ClerkLoading } from "@clerk/nextjs"
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react"


export const Navbar = () => {
    const router = useRouter()
    const scroll = useScrollTop()
    return (
        <header className={cn('w-full border-b h-18 p-4 border-slate-200 px-4',
            scroll && 'w-full backdrop-blur-lg border-b'
        )}>

            <nav className='lg:max-w-7xl mx-auto flex items-center justify-between h-full'>
                <div className="flex items-center gap-8">
                    <Link href='/' className="text-lg font-bold">
                        EduNotion
                    </Link>

                    <div className="flex text-sm font-normal text-zinc-900 gap-4">
                        <h1>Features</h1>
                        <h1>Dashboard</h1>
                        <h1>Quiz</h1>
                        <h1>Price</h1>
                    </div>
                </div>


                <ClerkLoading>
                    <Loader2 className='h-5 w-5 text-muted-foreground animate-spin' />
                </ClerkLoading>

                <ClerkLoaded>
                    <SignedIn>

                        {/* <div className="flex rounded-3xl border p-2 items-center justify-center">
                           
                            <Menu />
                        </div> */}
                        <UserButton afterSignOutUrl='/' />
                    </SignedIn>


                    <SignedOut>
                        <SignInButton mode='modal' afterSignInUrl='/learn' afterSignUpUrl='/learn'>
                            <Button variant='default' size='lg'>
                                Login
                            </Button>
                        </SignInButton>
                    </SignedOut>
                </ClerkLoaded>
            </nav>
        </header>
    )
}
