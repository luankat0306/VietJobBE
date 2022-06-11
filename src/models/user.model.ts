import { User } from '@interfaces/users.interface';
import { model, Schema } from 'mongoose';

const userSchema = new Schema<User>({
  email: {
    type: String,
    require: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
  },
  avatar: {
    type: String,
  },
  name: {
    type: String,
    require: true,
  },
  gender: {
    type: Number,
    default: 0,
  },
  birthDay: {
    type: Date,
  },
  phoneNumber: {
    type: String,
  },
  role: {
    type: Number,
    default: 0,
  },
});

const userModel = model<User>('User', userSchema);

export default userModel;
