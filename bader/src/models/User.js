import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ["user", "admin", "volunteer"], default: "user" }, // تحديد دور المستخدم
  profilePicture: { type: String, default: "" }, // صورة المستخدم
  address: { type: String },
  profession: { type: String },
  experience: { type: String },
  age:{type: Number},
  registrationDate: { type: Date, default: Date.now },
  
});

export default mongoose.models.User || mongoose.model("User", userSchema);
