import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema(
  {
    customerName: { type: String, required: true, trim: true },
    phone: { type: String, required: true, trim: true },
    email: { type: String, default: '', trim: true, lowercase: true },

    // Free text: what the customer wants, for how many people, etc.
    message: { type: String, default: '', trim: true },

    // The item the customer clicked "Order" on (optional).
    productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', default: null },
    productName: { type: String, default: '', trim: true },

    // Requested date for the order (optional).
    date: { type: String, default: '' },

    status: {
      type: String,
      enum: ['new', 'contacted', 'done', 'cancelled'],
      default: 'new',
    },
  },
  { timestamps: true }
);

export default mongoose.model('Order', orderSchema);
