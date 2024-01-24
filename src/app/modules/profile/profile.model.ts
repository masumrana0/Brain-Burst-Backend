/**
 * Title: 'profile Schema define By Masum Rana'
 * Description: ''
 * Author: 'Masum Rana'
 * Date: 24-01-2024
 *
 */

import { Schema } from 'mongoose';
import { educationEnum, genderEnum, skillsEnum } from '../user/user.constant';

import { IProfile } from './profile.interface';

const profileSchema = new Schema<IProfile>({
  gender: {
    type: String,
    enum: genderEnum,
    required: true,
  },
  dateOfBirth: {
    type: Date,
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
