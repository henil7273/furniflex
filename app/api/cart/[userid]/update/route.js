import { NextResponse } from "next/server";
import { connectDb } from "@/lib/dbConnect";
import Cart from "@/models/cart";
import Product from "@/models/product"; // ✅ make sure Product is imported

// PATCH /api/cart/:userid/update
export async function PATCH(req, { params }) {
  try {
    await connectDb();
    const { userid } = params;
    const { productId, action } = await req.json();

    const cart = await Cart.findOne({ userId: userid });
    if (!cart) {
      return NextResponse.json({ error: "Cart not found" }, { status: 404 });
    }

    const item = cart.items.find((i) => i.productId.toString() === productId);
    if (!item) {
      return NextResponse.json({ error: "Product not in cart" }, { status: 404 });
    }

    // 🔼 Increase or 🔽 Decrease
    if (action === "increase") {
      item.quantity += 1;
    } else if (action === "decrease") {
      item.quantity = Math.max(1, item.quantity - 1); // never below 1
    }

    await cart.save();

    // repopulate product details
    const updatedCart = await Cart.findOne({ userId: userid }).populate(
      "items.productId"
    );

    return NextResponse.json({ cart: updatedCart });
  } catch (err) {
    console.error("Update Cart Error:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
