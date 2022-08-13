import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

import indexRoutes from './routes/index.routes';
import taskRoutes from './routes/task.routes';

const app = express();

app.set('port', 4000);

// Middleware
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

// Routes
app.use('/', indexRoutes);
app.use('/api/tasks', taskRoutes);

export default app;
