import { SkillPost } from '@interfaces/skillPost.interface';
import { Document, model, Schema } from 'mongoose';

const skillPostSchema: Schema = new Schema({
  post: {
    type: Schema.Types.ObjectId,
    ref: 'Post',
  },
  skill: {
    type: Schema.Types.ObjectId,
    ref: 'Skill',
  },
  description: {
    type: String,
  },
});

const skillPostModel = model<SkillPost & Document>('SkillPost', skillPostSchema);

export default skillPostModel;
