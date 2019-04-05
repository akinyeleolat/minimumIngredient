import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import router from './routes';

const app = express();
dotenv.config();
const PORT = 8080;
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.get('/', (req, res) => {
  res.status(200).json({
    success: 'true',
    message: 'Welcome to minimumIngredients landing page',
  });
});
app.use('/api/', router);
app.use((req, res, next) => {
  const error = new Error('requested resources not found');
  error.status = 404;
  res.status(error.status).send({
    status: error.status,
    error: error.message,
  });
  next();
});
app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Running on port ${PORT}...`);
});
export default app;
