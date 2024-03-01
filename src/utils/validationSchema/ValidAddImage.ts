import z from 'zod';

export const AddImageSchema = z.object({
  link: z
    .string()
    .url('Это должна быть ссылка')
    .min(5, 'Поле должено содержать не менее 5 символов')
    .max(1024, 'Поле должено содержать не более 1024 символов')
    .optional()
    .or(z.literal('')),
});
