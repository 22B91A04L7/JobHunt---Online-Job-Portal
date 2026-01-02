import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './config/db.js';
import * as Sentry from "@sentry/node";
import { clerkWebhooks } from './controllers/webhooks.js';
import companyRoutes from './routes/companyRoutes.js'
import connectCloudinary from './config/cloudinary.js';
import jobRoutes from './routes/jobRoutes.js';
import userRoutes from './routes/userRoutes.js';
import {clerkMiddleware} from '@clerk/express';

// Initialize the Express application
const app = express();

// Connect to MongoDB
await connectDB();
// connect to Cloudinary
await connectCloudinary();


// Middleware to parse JSON bodies
app.use(cors());
app.use(express.json());
app.use(clerkMiddleware());

// Routes for vercel
app.get('/', (req, res) => 
  res.send('Welcome to the API!'));
// Initialize Sentry for error tracking
app.get("/debug-sentry", function mainHandler(req, res) {
  throw new Error("My first Sentry error!");
});

// for clerk webhooks
app.post('/webhooks',clerkWebhooks);
// Company routes
app.use('/api/company',companyRoutes)
// for job routes
app.use('/api/jobs', jobRoutes)
// user routes
app.use('/api/users', userRoutes)



Sentry.setupExpressErrorHandler(app);
export default app;

// Port configuration
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
