import { Schema, model } from "mongoose";

// 1. Create an interface representing a document in MongoDB.
interface User {
  name: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  lol: any;
  email: string;
  avatar?: string;
}

// 2. Create a Schema corresponding to the document interface.
const schema = new Schema<User>({
  name: { type: String, required: true },
  lol: {
    type: [
      {
        name: String,
        expires: "1m",
      },
    ],
    required: true,
  },
  email: { type: String, required: true },
  avatar: String,
});

// 3. Create a Model.
const UserModel = model<User>("User", schema);

export default UserModel;
