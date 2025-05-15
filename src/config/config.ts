import dotenv from 'dotenv';
import path from 'path';

// Try to load environment variables from .env file if it exists
try {
  dotenv.config({ path: path.join(process.cwd(), '.env') });
} catch (error) {
  console.log('No .env file found, using default values');
}

// Port can't be 4000, 3000-3007 (as per requirements)
const port = process.env.PORT || 5000;

const config = {
  port,
  mongodbUri: process.env.MONGODB_URI || 'mongodb://localhost:27018/usersdb'
};

export default config; 