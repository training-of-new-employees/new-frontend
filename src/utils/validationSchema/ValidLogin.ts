import z from 'zod';
import { regexEmail, regexPassword } from './ValidRegex';

export const LoginSchema = z
  .object({
    emailLogin: z
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
    passwordLogin: z
      .string({ required_error: 'Заполните это поле' })
      .trim()
      .max(30, 'Пароль должен содержать не более 30 символов')
      .min(6, 'Длина пароля не менее 6 символов')
      .regex(
        regexPassword,
        'Пароль должен содержать большую букву, маленькую букву, цифру и спецсимвол'
      ),
    rememberMe: z.boolean().optional(),
  })
  .required({ emailLogin: true, passwordLogin: true });
