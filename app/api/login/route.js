import { NextResponse } from "next/server";
import { connectDb } from "@/lib/dbConnect";
import User from "@/models/user";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export async function POST(req) {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    await connectDb();
    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.passwordHash);
    if (!isPasswordCorrect) {
      return NextResponse.json({ error: "Password is incorrect" }, { status: 401 });
    }

    // 🔑 Generate JWT
    const token = jwt.sign(
      {
        id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
      },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    // ✅ Return token in JSON (easier to handle on frontend)
    return NextResponse.json(
      {
        message: "User logged in successfully",
        token, // return token directly
      },
      { status: 200 }
    );
  } catch (err) {
    console.error("login error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
