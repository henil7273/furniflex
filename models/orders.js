import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    // 🏷️ Shipping Details (from FormData)
    shippingDetails: {
      country: { type: String, required: true },
      firstName: { type: String, required: true },
      lastName: { type: String, required: true },
      company: { type: String },
      address: { type: String, required: true },
      apartment: { type: String },
      state: { type: String, required: true },
      zip: { type: String, required: true },
      email: { type: String, required: true },
      phone: { type: String, required: true },
      notes: { type: String },
    },

    // 🎁 Coupon
    coupon: { type: String, default: "" },

    // 🛒 Cart Items
    items: [
      {
        productId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
          required: true,
        },
        quantity: { type: Number, required: true, min: 1 },
        priceL : { type: Number }
      },
    ],

    // 💰 Order Total
    totalAmount: {
      type: Number,
      required: true,
    },

    // 📦 Order Status
    status: {
      type: String,
      enum: ["pending", "processing", "shipped", "delivered", "cancelled"],
      default: "pending",
    },
  },
  { timestamps: true }
);

export default mongoose.models.Order || mongoose.model("Order", orderSchema);
