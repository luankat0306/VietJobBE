import { Post } from '@interfaces/post.interface';
import { model, Schema } from 'mongoose';

const postSchema = new Schema<Post>({
  employer: {
    type: Schema.Types.ObjectId,
    ref: 'Employer',
  },
  provinces: {
    type: [String],
  },
  careers: {
    type: [String],
  },
  address: {
    type: String,
  },
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  required: {
    type: String,
  },
  benefit: {
    type: String,
  },
  wage: {
    type: String,
  },
  formality: {
    type: String,
  },
  gender: {
    type: Number,
    default: 0,
  },
  quantity: {
    type: Number,
  },
  level: {
    type: String,
  },
  experience: {
    type: String,
  },
  createAt: {
    type: Date,
    default: Date.now(),
  },
  deadline: {
    type: Date,
  },
});

const postModel = model<Post>('Post', postSchema);

export default postModel;
