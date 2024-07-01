import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://detol3953:rlacksgh9848@ecommerce.2irkjbe.mongodb.net/ecommerce"
    )
    .then(() => console.log("DB Connected"));
};
