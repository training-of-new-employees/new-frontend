import z from 'zod';
import { regexEmail } from './ValidRegex';

export const RecoveryPasswordSchema = z
  .object({
    emailRecovery: z
      .string({
        required_error: 'Заполните это поле',
      })
      .email({
        message: 'Это поле тип почты: you@email.ru',
      })
      .trim()
      .regex(regexEmail, 'Это поле тип почты: you@email.ru')
      .max(50, 'E-mail должен содержать не более 50 символов')
      .min(7, 'E-mail должен содержать не менее 7 символов'),
  })
  .required({ emailRecovery: true });
