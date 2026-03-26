import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    match: [/^\S+@\S+\.\S+$/, "Please enter a valid email"],
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
    minLength: 6,
  },
});

const User = mongoose.model("user", userSchema);

export default User;
