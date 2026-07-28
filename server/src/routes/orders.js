import express from 'express';
import Order from '../models/Order.js';
import Product from '../models/Product.js';

const router = express.Router();

// POST /api/orders -> a customer sent the order form
router.post('/', async (req, res, next) => {
  try {
    const { customerName, phone, email, message, productId, date } = req.body;

    if (!customerName || !String(customerName).trim()) {
      return res.status(400).json({ error: 'Please enter your name' });
    }
    if (!phone || !String(phone).trim()) {
      return res.status(400).json({ error: 'Please enter your phone number' });
    }

    // If the customer came from a specific item, store its name too so the
    // order stays readable even if the menu changes later.
    let productName = '';
    let validProductId = null;
    if (productId) {
      const product = await Product.findById(productId).lean();
      if (product) {
        validProductId = product._id;
        productName = product.name;
      }
    }

    const order = await Order.create({
      customerName,
      phone,
      email,
      message,
      date,
      productId: validProductId,
      productName,
    });

    res.status(201).json({ ok: true, id: order._id });
  } catch (err) {
    next(err);
  }
});

// GET /api/orders -> newest first. For the shop owner.
// NOTE: this is open. Before putting the site online, protect it
// (see the "Going live" section in README.md).
router.get('/', async (req, res, next) => {
  try {
    const orders = await Order.find().sort({ createdAt: -1 }).lean();
    res.json(orders);
  } catch (err) {
    next(err);
  }
});

export default router;
