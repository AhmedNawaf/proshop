import mongoose from 'mongoose';

async function connectDB() {
  try {
    const dbConnection = await mongoose.connect(process.env.MONGO_URI || '');
    console.log(`MongoDB connected: ${dbConnection.connection.host}`);
  } catch (e) {
    const error = new Error('Error connecting to MongoDB');
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
}

export default connectDB;
