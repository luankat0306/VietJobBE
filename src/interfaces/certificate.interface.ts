import { Types } from 'mongoose';

export interface Certificate {
  _id: Types.ObjectId;
  candidate: Types.ObjectId;
  title: string;
  image?: string;
  description?: string;
}
