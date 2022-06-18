import { Application } from '@interfaces/application.interface';
import { Document, model, Schema } from 'mongoose';

const applicationSchema: Schema = new Schema({
  candidate: {
    type: Schema.Types.ObjectId,
    ref: 'Candidate',
  },
  post: {
    type: Schema.Types.ObjectId,
    ref: 'Post',
  },
  status: {
    type: Number,
    default: 0,
  },
  createAt: {
    type: Date,
    default: Date.now(),
  },
});

const applicationModel = model<Application & Document>('Application', applicationSchema);

export default applicationModel;
