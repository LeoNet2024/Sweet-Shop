import express from 'express';
import Product from '../models/Product.js';

const router = express.Router();

// GET /api/products  -> the menu, available items only, in menu order
router.get('/', async (req, res, next) => {
  try {
    const filter = { available: true };
    if (req.query.category && req.query.category !== 'all') {
      filter.category = req.query.category;
    }
    const products = await Product.find(filter).sort({ order: 1, name: 1 }).lean();
    res.json(products);
  } catch (err) {
    next(err);
  }
});

// GET /api/products/:id -> single item
router.get('/:id', async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id).lean();
    if (!product) return res.status(404).json({ error: 'Product not found' });
    res.json(product);
  } catch (err) {
    next(err);
  }
});

export default router;
