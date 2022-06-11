import { Types } from 'mongoose';

export interface Certificate {
  _id: Types.ObjectId;
  candidate: Types.ObjectId;
  name: string;
  image?: string;
  description?: string;
}
