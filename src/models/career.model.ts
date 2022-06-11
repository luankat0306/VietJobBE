import { Career } from '@interfaces/career.interface';
import { model, Schema } from 'mongoose';

const careerSchema = new Schema<Career>({
  name: {
    type: String,
    require: true,
  },
});

const careerModel = model<Career>('Career', careerSchema);

export default careerModel;
