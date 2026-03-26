import mongoose from "mongoose";

const sessionSchema = new mongoose.Schema(
  {
    _id: String, // sessionId

    type: {
      type: String,
      enum: ["guest", "user"],
      required: true,
    },

    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      default: null,
    },

    devices: [
      {
        deviceId: String,
        userAgent: String,
        ip: String,
        lastActiveAt: {
          type: Date,
          default: Date.now,
        },
      },
    ],

    expiresAt: {
      type: Date,
      default: () => Date.now() + 7 * 24 * 60 * 60 * 1000,
      index: { expires: 0 }, // 🔥 auto delete expired sessions
    },
  },
  { timestamps: true },
);

export default mongoose.model("session", sessionSchema);
