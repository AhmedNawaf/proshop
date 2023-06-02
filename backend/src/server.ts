import express from 'express';
import products from './data/products.js';
import 'dotenv/config.js';
import cors from 'cors';

const app = express();
const port = process.env.PORT || 3800;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hello from backend 2');
});

app.get('/api/products', (req, res) => {
  res.send(products);
});

app.get('/api/products/:id', (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  res.send(product);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
