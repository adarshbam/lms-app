import mongoose from "mongoose";

await mongoose.connect(
  "mongodb://adarsh:adarsh@192.168.31.10:27017/lms-app?replicaSet=myReplicaSet",
);

console.log("Mongoose Connected✅");
