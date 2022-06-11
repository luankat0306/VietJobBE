import { Types } from 'mongoose';

export interface SkillPost {
  _id: Types.ObjectId;
  post: Types.ObjectId;
  skill: Types.ObjectId;
  description: string;
}
