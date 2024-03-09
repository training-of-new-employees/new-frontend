import z from 'zod';
import { regexNameCourse } from './ValidRegex';

export const UpdateLessonSchema = z.object({
  nameUpdateLesson: z
    .string({
      required_error: 'Заполните это поле',
    })
    .trim()
    .min(1, 'Заполните это поле')
    .max(256, 'Поле должно содержать не более 256 символов')
    .regex(regexNameCourse, 'Символы *, # не допускаются'),
  descriptionUpdateLesson: z
    .string()
    .min(10, 'Поле должно содержать не менее 10 символов')
    .max(1024, 'Поле должно содержать не более 1024 символов')
    .optional()
    .or(z.literal('')),
  link: z
    .string()
    .url('Это должна быть ссылка')
    .min(5, 'Поле должено содержать не менее 5 символов')
    .max(1024, 'Поле должено содержать не более 1024 символов')
    .optional()
    .or(z.literal('')),
});
