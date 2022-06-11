import { Province } from '@interfaces/province.interface';
import { model, Schema } from 'mongoose';

const provinceSchema = new Schema<Province>({
  name: {
    type: String,
    require: true,
  },
});

const provinceModel = model<Province>('Province', provinceSchema);

export default provinceModel;
