"use client"
import Image from "next/image"
import boy from '../../public/boy.svg'
import Link from "next/link"
import { cn } from "@/lib/utils"
import { Button, buttonVariants } from "@/components/ui/button"
import { useRouter } from "next/navigation"



const DashboarPage = () => {

    const router = useRouter()

    return (
        <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-12  mt-0">
            <div className="container flex max-w-5xl mx-auto flex-col  gap-4 ">

                <div>
                    <Image
                        src={boy}
                        alt="boy"
                        width={250}
                        height={250}
                    />
                </div>


                <div className="flex flex-col gap-y-4 max-w-3xl ">
                    <h1 className="text-6xl font-bold">Whats going on here?</h1>
                    <p className="text-md text-muted-foreground text-start ">I&apos;m building a web app with Next.js 14 and open sourcing
                        everything. Follow along as we figure this out together.
                    </p>

                    <div className="flex gap-2">


                        <Link href='/dashboard/home' className={cn(buttonVariants({ size: "lg" }))}>
                            Get Started
                        </Link>

                        <Button size='lg' variant='secondary'>
                            View code
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DashboarPage