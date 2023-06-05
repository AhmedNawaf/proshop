import { Request, Response } from 'express';
import Product from '../models/product/product.model.js';

// @desc    Fetch all products
// @route   GET /api/products
// @access  Public
export async function getProducts(req: Request, res: Response) {
  const products = await Product.find({});
  res.json(products);
}

// @desc    Fetch single product
// @route   GET /api/products/:id
// @access  Public
export async function getProductById(req: Request, res: Response) {
  const { id } = req.params;
  const product = await Product.findById(id);
  if (!product) {
    res.status(404);
    throw new Error('Product not found');
  }
  res.json(product);
}
