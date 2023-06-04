import express from 'express';
import 'dotenv/config.js';
import cors from 'cors';
import connectDB from './config/db.js';
import Product from './models/product/product.model.js';
const app = express();
const port = process.env.PORT || 3800;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hello from backend 2');
});

app.get('/api/products', async (req, res) => {
  const products = await Product.find({});
  res.send(products);
});

app.get('/api/products/:id', async (req, res) => {
  const product = await Product.findById(req.params.id);
  res.send(product);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
  connectDB();
});
