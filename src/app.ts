import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import userRoutes from './routes/user.routes';

const app: Application = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/users', userRoutes);

// Health check route
app.get('/health', (_req: Request, res: Response) => {
  res.status(200).json({ status: 'UP', message: 'Server is running' });
});

// Not found route
app.use((_req: Request, res: Response) => {
  res.status(404).json({ message: 'Not Found' });
});

export default app; 