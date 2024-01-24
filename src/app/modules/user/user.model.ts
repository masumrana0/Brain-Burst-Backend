import { Schema, model } from 'mongoose';
import bcrypt from 'bcrypt';
import { IUser, UserModel } from './user.interface';
import { asianNationalityEnum } from './user.constant';
import config from '../../../config';
import generateUniqeAccountUserName from '../../../helper/generateUserName';

const UserSchema = new Schema<IUser, UserModel>({
  userName: {
    type: String,
  },
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

  nationality: {
    type: String,
    enum: asianNationalityEnum,
    required: true,
  },
  isEmailVerified: {
    type: Boolean,
    default: false,
  },
  isChangedPassword: {
    type: Boolean,
    default: false,
  },
  passwordChangedAt: {
    type: Date,
  },
});

UserSchema.pre('save', async function (next) {
  // hasning user password
  this.password = await bcrypt.hash(
    this.password,
    Number(config.bcrypt_salt_rounds),
  );
  if (this.isChangedPassword) {
    this.passwordChangedAt = new Date();
  }
  next();
});

// createing user Name
UserSchema.pre('save', async function (next) {
  if (this.userName) {
    return;
  }
  this.userName = generateUniqeAccountUserName(this.name);
  next();
});

// checking isUserExist
UserSchema.statics.isUserExist = async function (
  email: string,
): Promise<IUser | null> {
  return await User.findOne(
    { email: email },
    { _id: 1, password: 1, role: 1, email: 1, isEmailVerified: 1, userName: 1 },
  );
};

//password Matching
UserSchema.statics.isPasswordMatched = async function (
  givenPassword: string,
  savedPassword: string,
): Promise<boolean> {
  return await bcrypt.compare(givenPassword, savedPassword);
};

export const User = model<IUser, UserModel>('User', UserSchema);
