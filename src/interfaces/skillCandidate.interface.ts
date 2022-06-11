import { Types } from 'mongoose';

export interface SkillCandidate {
  _id: Types.ObjectId;
  candidate: Types.ObjectId;
  skill: Types.ObjectId;
  name: string;
  description: string;
  dateStart: string;
  dateEnd: string;
}
