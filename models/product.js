import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      min: [0, "Price cannot be negative"],
    },
  },
  { timestamps: true } 
)

export default mongoose.models.Product || mongoose.model("Product", ProductSchema);
