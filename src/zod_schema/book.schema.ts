import {z} from 'zod';

export const bookSchema = z.object({
    body: z.object({
       name: z.string({required_error: 'Name is required'}),
       genre: z.string({required_error: 'Genre is required'}) 
    })
});