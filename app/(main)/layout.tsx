import { Navbar } from "@/components/navbar/navbar";
import { Chicle } from "next/font/google";
import { Children } from "react";

type Props = {
    children: React.ReactNode
}

export default function Home({ children }: Props) {
    return (
        <>
            <Navbar />
            <main>
                {children}
            </main>

        </>
    )
}