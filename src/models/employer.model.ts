import { Employer } from '@interfaces/employer.interface';
import { model, Schema } from 'mongoose';

const employerSchema = new Schema<Employer>({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  description: {
    type: String,
  },
  website: {
    type: String,
  },
  scale: {
    type: String,
  },
});

const employerModel = model<Employer>('Employer', employerSchema);

export default employerModel;
