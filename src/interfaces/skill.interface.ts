import { Types } from 'mongoose';

export interface Skill {
  _id: Types.ObjectId;
  name: string;
  description?: string;
  icon?: string;
}
