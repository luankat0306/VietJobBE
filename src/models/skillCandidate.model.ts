import { SkillCandidate } from '@interfaces/skillCandidate.interface';
import { Document, model, Schema } from 'mongoose';

const skillCandidateSchema: Schema = new Schema({
  candidate: {
    type: Schema.Types.ObjectId,
    ref: 'Candidate',
  },
  skill: {
    type: Schema.Types.ObjectId,
    ref: 'Skill',
  },
  description: {
    type: String,
  },
});

const skillCandidateModel = model<SkillCandidate & Document>('SkillCandidate', skillCandidateSchema);

export default skillCandidateModel;
