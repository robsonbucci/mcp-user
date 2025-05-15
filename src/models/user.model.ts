import { Schema, model, Document } from 'mongoose';

export interface IUser extends Document {
  firstName: string;
}

const userSchema = new Schema<IUser>(
  {
    firstName: {
      type: String,
      required: [true, 'First name is required'],
      trim: true
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
);

const User = model<IUser>('User', userSchema);

export default User; 