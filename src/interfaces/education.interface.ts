import { Types } from 'mongoose';

export interface Education {
  _id: Types.ObjectId;
  candidate: Types.ObjectId;
  title: string;
  dateStart: string;
  dateEnd: string;
  description: string;
}
