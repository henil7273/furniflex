import { NextResponse } from "next/server";
import { connectDb } from "@/lib/dbConnect";
import Cart from "@/models/cart";
import Product from "@/models/product"; // ✅ ensures schema is registered
import mongoose from "mongoose";

// GET /api/cart/:userid
export async function GET(req, { params }) {
  try {
    await connectDb();

    const { userid } = await params;

    const cart = await Cart.findOne({ userId: new mongoose.Types.ObjectId(userid) })
      .populate("items.productId"); // ✅ now works

    if (!cart) {
      return NextResponse.json({ cart: { items: [] } });
    }

    return NextResponse.json({ cart });
  } catch (error) {
    console.error("Cart API Error:", error.message, error.stack);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// ✅ DELETE: remove one item from the cart
export async function DELETE(req, { params }) {
  try {
    await connectDb();
    const { userid } = params;
    const { searchParams } = new URL(req.url);
    const productId = searchParams.get("productId");

    if (!productId) {
      return NextResponse.json({ error: "ProductId required" }, { status: 400 });
    }

    // 1️⃣ Pull the item
    let cart = await Cart.findOneAndUpdate(
      { userId: userid },
      { $pull: { items: { productId } } },
      { new: true }
    ).populate("items.productId");

    if (!cart) {
      return NextResponse.json({ error: "Cart not found" }, { status: 404 });
    }

    // 2️⃣ Recalculate bill manually
    cart.bill = cart.items.reduce((acc, item) => acc + item.quantity * item.price, 0);

    // 3️⃣ Save updated cart (so pre-save won’t be skipped)
    await cart.save();

    return NextResponse.json({ cart });
  } catch (error) {
    console.error("Cart DELETE Error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

