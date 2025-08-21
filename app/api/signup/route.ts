import { NextResponse } from "next/server";
import { connectDb } from "@/lib/dbConnect";
import User from "@/models/user";
import bcrypt from "bcryptjs"; 

export async function POST(req: Request) {
  try {
    const { firstName, lastName, email, password } = await req.json();

    if (!firstName || !lastName || !email || !password) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    await connectDb();

    const exists = await User.findOne({ email });
    if (exists) {
      return NextResponse.json({ error: "Email already in use" }, { status: 409 });
    }

    const passwordHash = await bcrypt.hash(password, 10);
    const user = await User.create({ firstName, lastName, email, passwordHash });

    // Return safe fields only
    return NextResponse.json(
      { id: user._id, firstName: user.firstName, lastName: user.lastName, email: user.email },
      { status: 201 }
    );
  } catch (err) {
    console.error("Signup error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
