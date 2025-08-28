import mongoose from "mongoose";
import Product from "./product";
import { type } from "os";

const cartSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    items: [
      {
        productId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
          min: 1,
        },
        price: {
          type: Number,
          required: true, // snapshot product price
        },
      },
    ],
    bill: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  { timestamps: true }
);

// ✅ Use ES module export to match Product
export default mongoose.models.Cart || mongoose.model("Cart", cartSchema);
