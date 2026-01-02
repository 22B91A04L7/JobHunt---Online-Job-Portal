import app from '../server.js';
import connectDB from '../config/db.js';
import connectCloudinary from '../config/cloudinary.js';

// Initialize connections
let isConnected = false;

async function initializeConnections() {
  if (!isConnected) {
    await connectDB();
    await connectCloudinary();
    isConnected = true;
  }
}

export default async function handler(req, res) {
  await initializeConnections();
  return app(req, res);
}