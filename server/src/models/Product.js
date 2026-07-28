import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    description: { type: String, default: '', trim: true },

    // Category shown as a filter tab on the site.
    category: {
      type: String,
      enum: ['cakes', 'cookies', 'desserts'],
      default: 'cakes',
    },

    // Price in shekels. null = not set yet -> the site shows "Ask for price".
    price: { type: Number, default: null, min: 0 },

    // What the price is per: 'unit', 'kg', 'dozen'...
    priceUnit: { type: String, default: 'unit', trim: true },

    image: { type: String, default: '' },
    available: { type: Boolean, default: true },

    // Lower number = shown earlier in the menu.
    order: { type: Number, default: 0 },
  },
  { timestamps: true }
);

export default mongoose.model('Product', productSchema);
