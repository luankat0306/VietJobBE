import { Types } from 'mongoose';

export interface User {
  _id: Types.ObjectId;
  email: string;
  password: string;
  avatar?: string;
  name: string;
  gender: number;
  birthDay?: Date;
  phoneNumber?: string;
  role: number;
}
