import mongoose from "mongoose";

async function dbConnect() {
  mongoose.connect(
    "mongodb+srv://admin:abc123**@cluster0.qr26mtf.mongodb.net/livraria?retryWrites=true&w=majority&appName=Cluster0"
  );

  return mongoose.connection;
};

export default dbConnect;
