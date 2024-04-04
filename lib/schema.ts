
import * as z from 'zod'


export const quizSchema = z.object({
    topic: z.string().min(4),
    type: z.enum(['MSQ', 'OPEN_ENDED']),
   
})