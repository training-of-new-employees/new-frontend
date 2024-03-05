import z from 'zod';
import { regexEmail, regexName } from './ValidRegex';

export const UpdateUserSchema = z
  .object({
    name: z
      .string({
        required_error: 'Заполните это поле',
      })
      .trim()
      .min(1, 'Заполните это поле')
      .max(128, 'Поле должно содержать не более 128 символов')
      .regex(regexName, 'Введите имя как в паспорте'),
    surname: z
      .string({
        required_error: 'Заполните это поле',
      })
      .trim()
      .min(1, 'Заполните это поле')
      .max(128, 'Поле должно содержать не более 128 символов')
      .regex(regexName, 'Введите фамилию как в паспорте'),
    patronymic: z
      .string({
        required_error: 'Заполните это поле',
      })
      .trim()
      .min(2, 'Поле должно содержать не менее 2 символа')
      .max(128, 'Поле должно содержать не более 128 символов')
      .regex(regexName, 'Введите отечество как в паспорте')
      .optional()
      .or(z.literal('')),

    email: z
      .string({
        required_error: 'Это поле обязательно',
      })
      .email({
        message: 'Это поле тип почты: you@email.ru',
      })
      .trim()
      .regex(regexEmail, 'Это поле тип почты: you@email.ru')
      .max(50, 'E-mail должен содержать не более 50 символов')
      .min(7, 'E-mail должен содержать не менее 7 символов'),
    position: z
      .string({
        required_error: 'Это поле обязательно',
      })
      .trim()
      .regex(regexName, 'Символы *, # не допускаются')
      .max(256, 'Поле должно содержать не более 256 символов'),
  })
  .required({ name: true, surname: true, email: true, position: true });
