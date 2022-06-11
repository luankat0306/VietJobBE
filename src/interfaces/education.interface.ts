import { Types } from 'mongoose';

export interface Education {
  _id: Types.ObjectId;
  candidate: Types.ObjectId;
  name: string;
  dateStart: string;
  dateEnd: string;
  description: string;
}
