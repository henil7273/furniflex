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

        // ✅ Generate JWT
        const token = jwt.sign(
            { id: user._id, firstName: user.firstName, lastName: user.lastName, email: user.email },
            process.env.JWT_SECRET,     // store in .env
            { expiresIn: "7d" }
        );

        const response = NextResponse.json(
            {
                message: "User logged in successfully",
                user: {
                    id: user._id,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    email: user.email,
                },
            },
            { status: 200 }
        );

        response.cookies.set("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production", // true in prod
            sameSite: "strict",
            path: "/",
            maxAge: 7 * 24 * 60 * 60, // 7 days
        });

        return response;

    } catch (err) {
        console.error("login error:", err);
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
}
