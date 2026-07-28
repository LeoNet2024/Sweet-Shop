import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import productRoutes from './routes/products.js';
import orderRoutes from './routes/orders.js';
import { shop } from './data/products.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app = express();
const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/sweet-shop';

app.use(cors());
app.use(express.json());

// Shop name, phone, opening hours... used by the header and footer.
app.get('/api/shop', (req, res) => res.json(shop));

app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);

app.get('/api/health', (req, res) => {
  const states = ['disconnected', 'connected', 'connecting', 'disconnecting'];
  res.json({ ok: true, db: states[mongoose.connection.readyState] ?? 'unknown' });
});

// In production, serve the built React app from client/dist.
const clientDist = path.join(__dirname, '..', '..', 'client', 'dist');
app.use(express.static(clientDist));
app.get(/^\/(?!api).*/, (req, res) => {
  res.sendFile(path.join(clientDist, 'index.html'), (err) => {
    if (err) res.status(404).json({ error: 'Not found. Run "npm run build" in the client folder.' });
  });
});

// Error handler - keep last.
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: 'Something went wrong on the server' });
});

async function start() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('MongoDB connected');
  } catch (err) {
    console.error('MongoDB connection failed:', err.message);
    console.error('Check MONGODB_URI in server/.env');
    process.exit(1);
  }

  app.listen(PORT, () => console.log(`API running on http://localhost:${PORT}`));
}

start();
