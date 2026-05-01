const mongoose = require('mongoose');

/**
 * Connects to MongoDB using the MONGO_URI environment variable.
 * If MONGO_URI is set to 'memory', uses mongodb-memory-server for local dev.
 * Exits the process if connection fails.
 */
const connectDB = async () => {
  try {
    let uri = process.env.MONGO_URI;

    // Use in-memory MongoDB for development if MONGO_URI is 'memory'
    if (uri === 'memory') {
      const { MongoMemoryServer } = require('mongodb-memory-server');
      const mongoServer = await MongoMemoryServer.create();
      uri = mongoServer.getUri();
      console.log('📦 Using in-memory MongoDB for development');
    }

    const conn = await mongoose.connect(uri);
    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`❌ MongoDB connection error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
