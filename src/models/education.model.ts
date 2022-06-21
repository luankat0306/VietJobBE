import { Education } from '@interfaces/education.interface';
import { model, Schema } from 'mongoose';

const educationSchema = new Schema<Education>({
  candidate: {
    type: Schema.Types.ObjectId,
    ref: 'Candidate',
  },
  title: {
    type: String,
  },
  isCurrent: {
    type: Boolean,
    default: false,
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

const educationModel = model<Education>('Education', educationSchema);

export default educationModel;
