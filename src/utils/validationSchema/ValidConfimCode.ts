import z from 'zod';

export const ConfimCodeSchema = z
  .object({
    number1: z
      .number({
        required_error: 'Заполните это полее',
      })
      .min(1, 'Минимум 1 цифра'),
    number2: z
      .number({
        required_error: 'Заполните это полее',
      })
      .min(1, 'Минимум 1 цифра'),
    number3: z
      .number({
        required_error: 'Заполните это полее',
      })
      .min(1, 'Минимум 1 цифра'),
    number4: z
      .number({
        required_error: 'Заполните это полее',
      })
      .min(1, 'Минимум 1 цифра'),
  })
  .required({ number1: true, number2: true, number3: true, number4: true });
