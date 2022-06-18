import { Candidate } from '@interfaces/candidates.interface';
import { model, Schema } from 'mongoose';

const candidateSchema = new Schema<Candidate>({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    require: true,
    unique: true,
  },
  province: {
    type: Schema.Types.ObjectId,
    ref: 'Province',
  },
  address: {
    type: String,
  },
  appliedPosition: {
    type: String,
  },
  socialMedia: {
    type: [String],
  },
  hobby: {
    type: String,
  },
  careerGoals: {
    type: String,
  },
  wage: {
    type: String,
  },
  // skill: {
  //   type: String,
  // },
  // education: {
  //   type: String,
  // },
  // experience: {
  //   type: String,
  // },
  // certificate: {
  //   type: String,
  // },
  moreInfo: {
    type: String,
  },
});

const candidateModel = model<Candidate>('Candidate', candidateSchema);

export default candidateModel;
