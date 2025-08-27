"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

type User = {
  firstName: string;
  lastName?: string;
  email?: string;
};

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) return;

    fetch("/api/protected/me", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => {
        if (!res.ok) throw new Error("Unauthorized");
        return res.json();
      })
      .then((data) => {
        if (data.user) setUser(data.user);
      })
      .catch(() => setUser(null));
  }, []);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/shop", label: "Shop" },
    { href: "/aboutus", label: "About Us" },
    { href: "/services", label: "Services" },
    { href: "/blog", label: "Blog" },
    { href: "/contactus", label: "Contact Us" },
  ];

  return (
    <section className="bg-[#3b5d50] px-4 md:px-16 lg:px-52">
      <header className="bg-[#3b5d50] sticky top-0 z-50">
        <div className="flex items-center py-2">
          {/* Logo */}
          <Link href="/home" className="flex-shrink-0">
            <Image
              src="/images/furniflex.png"
              alt="Logo"
              width={150}
              height={50}
              className="object-contain"
              priority
            />
          </Link>

          {/* Hamburger (Mobile) */}
          <div className="md:hidden ml-auto">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle Menu"
            >
              <Image src="/icon/menu.png" alt="Menu" width={24} height={24} />
            </button>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex ml-auto items-center gap-10">
            <ul className="flex gap-6 text-sm font-semibold">
              {navItems.map((item) => (
                <li key={item.href} className="relative">
                  <Link
                    href={item.href}
                    className="hover:text-white text-gray-300 transition-all 
                      before:content-[''] before:absolute before:-bottom-1 
                      before:left-0 before:w-0 before:h-[4px] 
                      before:bg-[#f9bf29] before:transition-all 
                      hover:before:w-full"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Auth / Cart */}
            <div className="flex items-center gap-4">
              {user ? (
                <Link
                  href={`/cart/${user.id}`}
                  className="flex items-center gap-2"
                >
                  <Image src="/icon/cart.png" alt="Cart" width={20} height={20} />
                </Link>
              ) : (
                <div className="flex gap-2 text-xl text-white font-semibold">
                  <Link href="/login" className="hover:underline">
                    Login
                  </Link>
                  <span>/</span>
                  <Link href="/signup" className="hover:underline">
                    Signup
                  </Link>
                </div>
              )}

              {user && (
                <Link
                  href="/userdashboard"
                  className="flex items-center text-white"
                >
                  <Image
                    src="/icon/user.png"
                    alt="User"
                    width={28}
                    height={28}
                    className="mr-2"
                  />
                  {user.firstName}
                </Link>
              )}
            </div>
          </nav>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out text-center
            ${menuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}
          `}
        >
          <ul className="flex flex-col gap-4 text-base font-semibold py-4">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="hover:text-white text-gray-400 transition-all"
                  onClick={() => setMenuOpen(false)} // close menu on click
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Auth / Cart / User Section */}
          <div className="flex justify-between gap-4 py-4 mt-2 bg-gray-700 rounded-lg shadow-lg w-11/12 mx-auto text-center">
            {user ? (
              <Link
                href={`/cart/${user.id}`}
                className="flex items-center gap-2 justify-center text-gray-200 ml-10"
              >
                <Image src="/icon/cart.png" alt="Cart" width={20} height={20} />
                Cart
              </Link>
            ) : (
              <div className="flex gap-3 justify-center text-base font-semibold text-gray-200">
                <Link href="/login" className="hover:underline">
                  Login
                </Link>
                <span>/</span>
                <Link href="/signup" className="hover:underline">
                  Signup
                </Link>
              </div>
            )}

            {user && (
              <Link
                href="/userdashboard"
                className="flex items-center gap-2 justify-center text-gray-200 mr-10"
              >
                <Image src="/icon/user.png" alt="User" width={20} height={20} />
                {user.firstName}
              </Link>
            )}
          </div>
        </div>
      </header>
    </section>
  );
}
