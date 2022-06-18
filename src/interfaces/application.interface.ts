import { Types } from 'mongoose';

export interface Application {
  _id: Types.ObjectId;
  candidate: Types.ObjectId;
  post: Types.ObjectId;
  status: number;
  createAt: string;
  // updatedAt: string;
}
