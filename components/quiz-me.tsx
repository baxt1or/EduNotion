"use client"

import { Plus } from "lucide-react"
import { Button } from "./ui/button"
import { Card, CardContent } from "./ui/card"
import { useRouter } from "next/navigation"

const QuizMe = () => {
    const router = useRouter()
    return (
        <Card>
            <CardContent className="flex items-center justify-between p-4">

                <h1 className="text-2xl font-bold ">Quiz form</h1>

                <Button
                    onClick={() => router.push('/quiz')}
                    variant='secondary'
                >
                    <Plus className="h-4 w-4 mr-2" />
                    New Quiz
                </Button>

            </CardContent>
        </Card>
    )
}

export default QuizMe