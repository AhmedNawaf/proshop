import express from 'express';
import 'dotenv/config.js';
import cors from 'cors';
import connectDB from './config/db.js';
import productRoutes from './routes/product.route.js';
import morgan from 'morgan';
import { errorHandler, notFound } from './middleware/error.middleware.js';

const app = express();
const port = process.env.PORT || 3800;

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/products', productRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
  connectDB();
});
