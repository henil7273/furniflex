import { NextResponse } from "next/server";
import { connectDb } from "@/lib/dbConnect";
import Order from "@/models/orders";
import Cart from "@/models/cart";

export async function POST(req, { params }) {
    try {
        await connectDb();
        const body = await req.json();

        const { shippingDetails, items, totalAmount, coupon } = body;
        const { userid } = await params;   // 👈 lowercase "userid" from the folder

        console.log("userid  ", userid, "items length ", items)

        if (!userid || !items.length) {
            return NextResponse.json({ message: "Missing fields" }, { status: 400 });
        }

        const formattedItems = items.map(item => ({
            productId: item.productId || item._id,  // fallback if frontend sends `_id`
            quantity: item.quantity,
            price: item.price
        }));

        const order = await Order.create({
            userId: userid,
            shippingDetails,
            items: formattedItems,
            totalAmount,
            coupon,
        });


        // 🧹 Clear cart after order placed
        await Cart.findOneAndUpdate(
            { userId: userid },
            { $set: { items: [] } }
        );

        return NextResponse.json({ message: "Order created", order }, { status: 201 });
    } catch (err) {
        console.error(err);
        return NextResponse.json({ message: "Server error" }, { status: 500 });
    }
}
