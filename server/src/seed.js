/**
 * Loads the menu from src/data/products.js into MongoDB.
 *
 *   npm run seed
 *
 * Safe to run again after every menu edit: it matches items by name,
 * so editing a price updates the existing item instead of duplicating it.
 * Items you deleted from the file are removed from the database too.
 */
import 'dotenv/config';
import mongoose from 'mongoose';
import Product from './models/Product.js';
import { products } from './data/products.js';

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/sweet-shop';

async function seed() {
  await mongoose.connect(MONGODB_URI);
  console.log('MongoDB connected');

  for (const product of products) {
    await Product.findOneAndUpdate({ name: product.name }, product, {
      upsert: true,
      new: true,
      setDefaultsOnInsert: true,
    });
  }

  // Drop anything that is no longer in the file.
  const names = products.map((p) => p.name);
  const { deletedCount } = await Product.deleteMany({ name: { $nin: names } });

  const withoutPrice = products.filter((p) => p.price == null).length;

  console.log(`Menu saved: ${products.length} items (${deletedCount} removed)`);
  if (withoutPrice > 0) {
    console.log(`Note: ${withoutPrice} item(s) have no price yet - they show "Ask for price".`);
    console.log('Set them in server/src/data/products.js and run "npm run seed" again.');
  }

  await mongoose.disconnect();
}

seed().catch((err) => {
  console.error(err);
  process.exit(1);
});
