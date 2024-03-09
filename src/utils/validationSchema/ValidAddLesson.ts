import z from 'zod';
import { regexNameCourse } from './ValidRegex';

export const AddLessonSchema = z
  .object({
    name: z
      .string({
        required_error: 'Заполните это поле',
      })
      .trim()
      .min(1, 'Заполните это поле')
      .max(256, 'Поле должно содержать не более 256 символов')
      .regex(regexNameCourse, 'Символы *, # не допускаются'),
    description: z
      .string()
      .min(10, 'Поле должно содержать не менее 10 символов')
      .max(1024, 'Поле должно содержать не более 1024 символов')
      .optional()
      .or(z.literal('')),
  })
  .required({ name: true });
