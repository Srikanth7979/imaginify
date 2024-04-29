import { model, models, Schema, Document } from "mongoose";

interface IUser extends Document {
  clerkId: string;
  userName: string;
  email: string;
  firstName?: string;
  lastName?: string;
  photoUrl: string;
  planId?: string;
  creditBalance: number;
  createdAt: Date;
  updatedAt: Date;
}

const UserSchema = new Schema({
  clerkId: { type: String, required: true, unique: true },
  userName: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  firstName: { type: String },
  lastName: { type: String },
  photoUrl: { type: String, required: true },
  planId: { type: Number, default: 1 },
  creditBalance: { type: Number, default: 10 },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const User = models?.User || model("User", UserSchema);

export default User;
