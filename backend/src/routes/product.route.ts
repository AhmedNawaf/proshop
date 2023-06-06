import express from 'express';
import asyncHandler from '../middleware/asyncHandler.middleware.js';
import {
  getProducts,
  getProductById,
} from '../controllers/product.controller.js';

const router = express.Router();

router.get('/', asyncHandler(getProducts));

router.get('/:id', asyncHandler(getProductById));

export default router;
