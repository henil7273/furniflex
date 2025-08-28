import { NextResponse } from "next/server";
import { connectDb } from "@/lib/dbConnect";
import Cart from "@/models/cart";

// PATCH /api/cart/:userid/update
export async function PATCH(req, { params }) {
  try {
    await connectDb();
    const { userid } = params;
    const { productId, action } = await req.json();

    let cart = await Cart.findOne({ userId: userid }).populate("items.productId");
    if (!cart) {
      return NextResponse.json({ error: "Cart not found" }, { status: 404 });
    }

    const item = cart.items.find((i) => i.productId._id.toString() === productId);
    if (!item) {
      return NextResponse.json({ error: "Product not in cart" }, { status: 404 });
    }

    // 🔼 Increase or 🔽 Decrease
    if (action === "increase") {
      item.quantity += 1;
    } else if (action === "decrease") {
      item.quantity = Math.max(1, item.quantity - 1); // never below 1
    }

    // ✅ Recalculate bill after qty change
    cart.bill = cart.items.reduce(
      (acc, i) => acc + i.productId.price * i.quantity,
      0
    );

    await cart.save();

    // ✅ repopulate (if needed) to return latest product details
    const updatedCart = await Cart.findOne({ userId: userid }).populate("items.productId");

    return NextResponse.json({ cart: updatedCart });
  } catch (err) {
    console.error("Update Cart Error:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
