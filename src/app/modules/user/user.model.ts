import { Schema, model } from 'mongoose';
import { IUser } from './user.interface';
import {
  asianNationalityEnum,
  educationEnum,
  genderEnum,
  skillsEnum,
} from './user.constant';

const userSchema = new Schema<IUser>({
  userName: String,
  name: {
    type: {
      firstName: {
        type: String,
        required: true,
      },
      lastName: {
        type: String,
      },
    },
    required: true,
  },

  email: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    enum: genderEnum,
    required: true,
  },
  dateOfBirth: {
    type: Date,
    required: true,
  },
  nationality: {
    type: String,
    enum: asianNationalityEnum,
    required: true,
  },
  skills: [
    {
      type: String,
      enum: skillsEnum,
    },
  ],
  education: [
    {
      type: String,
      enum: educationEnum,
    },
  ],
  socialMediaLinks: [String],
  profilePicture: String,
});

export const User = model('User', userSchema);
