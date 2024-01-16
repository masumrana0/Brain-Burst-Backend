import z from 'zod';
import {
  asianNationalityEnum,
  educationEnum,
  genderEnum,
  skillsEnum,
} from './user.constant';

const IName = z.object({
  firstName: z.string({ required_error: 'First name is required' }),
  lastName: z.string(),
});

const UserZodScehma = z.object({
  userName: z.string(),
  name: IName,
  email: z.string().email({ message: 'Invalid email format' }),
  gender: z
    .string()
    .refine(value => value === '' || genderEnum.includes(value), {
      message: 'Invalid gender value',
    }),

  dateOfBirth: z.date(),
  nationality: z.enum(['', ...asianNationalityEnum]).optional(),
  skills: z.enum(['', ...skillsEnum]).optional(),
  education: z.enum(['', ...educationEnum]).optional(),
  profilePicture: z.string().optional(),
});

export const userValidationZodSchema = {
  UserZodScehma,
};
