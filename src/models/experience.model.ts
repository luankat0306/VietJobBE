import { Experience } from '@interfaces/experience.interface';
import { model, Schema } from 'mongoose';

const experienceSchema = new Schema<Experience>({
  candidate: {
    type: Schema.Types.ObjectId,
    ref: 'Candidate',
  },
  title: {
    type: String,
  },
  dateStart: {
    type: Date,
  },
  dateEnd: {
    type: Date,
  },
  description: {
    type: String,
  },
});

const experienceModel = model<Experience>('Experience', experienceSchema);

export default experienceModel;
