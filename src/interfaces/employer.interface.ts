import { Types } from 'mongoose';

export interface Employer {
  _id: Types.ObjectId;
  user: Types.ObjectId;
  description?: string;
  website?: string;
  scale?: string;
}
