import { NextResponse } from "next/server";
import { connectDb } from "@/lib/dbConnect";
import Cart from "@/models/cart";
import Product from "@/models/product"; // <-- make sure you created this schema

// GET all products
export async function GET() {
  try {
    await connectDb();

    const products = await Product.find({}); // get all products

    return NextResponse.json(products, { status: 200 });
  } catch (err) {
    console.error("❌ Error fetching products:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}


export async function POST(req) {
  try {
    await connectDb();

    const { userId, productId, quantity } = await req.json();

    if (!userId || !productId) {
      return NextResponse.json(
        { error: "userId and productId are required" },
        { status: 400 }
      );
    }

    // check if product exists
    const product = await Product.findById(productId);
    if (!product) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }

    // find user's cart
    let cart = await Cart.findOne({ userId });

    if (!cart) {
      // create new cart
      cart = await Cart.create({
        userId,
        items: [{ productId, quantity: quantity || 1 }],
      });
    } else {
      // check if product already exists in cart
      const itemIndex = cart.items.findIndex(
        (item) => item.productId.toString() === productId
      );

      if (itemIndex > -1) {
        // increment quantity
        cart.items[itemIndex].quantity += quantity || 1;
      } else {
        // add new item
        cart.items.push({ productId, quantity: quantity || 1 });
      }

      await cart.save();
    }

    const populatedCart = await cart.populate("items.productId");

    return NextResponse.json({ cart: populatedCart });
  } catch (error) {
    console.error("Add to cart error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}