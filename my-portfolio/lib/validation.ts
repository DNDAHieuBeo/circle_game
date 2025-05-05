import {z} from 'zod'
export const ContactFormSchema = z.object({
    email: z.string().min(2).email(),
    mobile:z.number().min(2).max(15),
    message:z.string().min(2).max(255),

})