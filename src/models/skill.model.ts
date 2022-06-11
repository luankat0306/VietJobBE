import { Skill } from '@interfaces/skill.interface';
import { Document, model, Schema } from 'mongoose';

const skillSchema: Schema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  icon: {
    type: String,
  },
});

const skillModel = model<Skill & Document>('Skill', skillSchema);

export default skillModel;
