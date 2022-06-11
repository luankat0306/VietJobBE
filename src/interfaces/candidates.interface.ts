import { Types } from 'mongoose';

export interface Candidate {
  _id: Types.ObjectId;
  user: Types.ObjectId;
  province: Types.ObjectId;
  address?: string;
  appliedPosition?: string;
  socialMedia: string[];
  hobby?: string;
  careerGoals?: string;
  // skill: string;
  // education: string;
  // experience: string;
  // certificate: string;
  moreInfo?: string;
}
