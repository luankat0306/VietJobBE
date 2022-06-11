import { Certificate } from '@interfaces/certificate.interface';
import { Document, model, Schema } from 'mongoose';

const certificateSchema: Schema = new Schema({
  candidate: {
    type: Schema.Types.ObjectId,
    ref: 'Candidate',
  },
  name: {
    type: String,
  },
  image: {
    type: String,
  },
  description: {
    type: String,
  },
});

const certificateModel = model<Certificate & Document>('Certificate', certificateSchema);

export default certificateModel;
