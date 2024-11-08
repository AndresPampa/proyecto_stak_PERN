import {z} from 'zod';

export const createTareasSchema = z.object({
    titulo: z.string().min(1).max(255),
    descripcion: z.string().min(1).max(255),
});

createTareasSchema.parse({titulo: 'titulo', descripcion: 'descripcion'}); //OK
