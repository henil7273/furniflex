import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function middleware(req) {
  const { pathname } = req.nextUrl;

  // Allow public routes
  if (pathname.startsWith("/api/login") || pathname.startsWith("/api/signup")) {
    return NextResponse.next();
  }

  const authHeader = req.headers.get("authorization");
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  const token = authHeader.split(" ")[1];
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const requestHeaders = new Headers(req.headers);
    requestHeaders.set("x-user", JSON.stringify(decoded));

    return NextResponse.next({ request: { headers: requestHeaders } });
  } catch (err) {
    return NextResponse.redirect(new URL("/login", req.url));
  }
}

export const config = {
  matcher: ["/api/protected/:path*"], // ✅ only protected APIs
};
