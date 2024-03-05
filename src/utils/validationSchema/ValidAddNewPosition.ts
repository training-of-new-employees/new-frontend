import z from 'zod';
import { regexName } from './ValidRegex';

export const AddNewPositionSchema = z
  .object({
    position: z
      .string({
        required_error: 'Это поле обязательно',
      })
      .trim()
      .regex(regexName, 'Символы *, # не допускаются')
      .max(256, 'Поле должно содержать не более 256 символов'),
  })
  .required({ name: true, surname: true, email: true, position: true });
