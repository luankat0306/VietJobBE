import { Types } from 'mongoose';

export interface Post {
  _id: Types.ObjectId;
  employer: Types.ObjectId;
  provinces: string[];
  careers: string[];
  address: string;
  title: string;
  description: string;
  required: string;
  benefit: string;
  wage: string;
  formality: string;
  gender: number;
  quantity: number;
  level: string;
  experience: string;
  createAt: Date;
  deadline: Date;
}
