import z from 'zod';
import { regexCompany, regexEmail, regexPassword } from './ValidRegex';

export const RegisterSchema = z
  .object({
    company: z
      .string({
        required_error: 'Это поле обязательно',
      })
      .trim()
      .regex(regexCompany, 'Не принимает символы: *,#.'),
    email: z
      .string({
        required_error: 'Это поле обязательно',
      })
      .email({
        message: 'Это поле тип почты: you@email.ru',
      })
      .regex(regexEmail, 'Это поле тип почты: you@email.ru')
      .max(50, 'E-mail должен содержать не более 50 символов')
      .min(7, { message: 'E-mail должен содержать не менее 7 символов' }),
    password: z
      .string({ required_error: 'Это поле обязательно' })
      .trim()
      .max(30, 'Пароль должен содержать не более 30 символов')
      .min(6, 'Длина пароля не менее 6 см')
      .regex(
        regexPassword,
        'Пароль должен содержать большую букву, маленькую букву, цифру и спец-символ'
      ),
    repeatPassword: z
      .string({
        required_error: 'Это поле обязательно',
      })
      .trim(),
    rememberMe: z.boolean().optional(),
  })
  .required({ email: true, password: true, repeatPassword: true, company: true })
  .refine((data) => data.password === data.repeatPassword, {
    message: 'Пароли не совпадают',
    path: ['repeatPassword'],
  });
