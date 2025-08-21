"use client"
import Link from "next/link"

// import { useSelector } from "react-redux"
import { useState, useEffect } from "react"

export default function Page() {

  const [menuOpen, setMenuOpen] = useState(false)
  const [user, setUser] = useState<unknown>(null)

  useEffect(() => {
    async function fetchUser() {
      try {
        const res = await fetch("/api/token",);
        if (res.ok) {
          const data = await res.json();
          setUser(data.user);
          console.log(data.user)
        }
      } catch (err) {
        console.error("Error fetching user:", err);
      }
    }
    fetchUser();
  }, []);

  return (
    <section className="bg-[#3b5d50] px-12 md:px-16 lg:px-52 ">
      <header className="bg-[#3b5d50] sticky top-0 z-50 ">
        <div className="flex items-center px-4 py-2  ">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/home">
              <img src="/images/furniflex.png" alt="Logo" className="w-50 object-contain" />
            </Link>
          </div>

          {/* Hamburger Icon (Mobile) */}
          <div className="md:hidden items-center ml-auto">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              <img src="/icon/menu.png" alt="Menu" className="w-6 h-6" />
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex ml-auto items-center gap-10 ">
            <ul className="flex gap-6 text-sm font-semibold">
              <li className="relative">
                <Link
                  href="/"
                  className="hover:text-white text-gray-300 transition-all 
                 before:content-[''] before:absolute before:-bottom-1 
                 before:left-0 before:w-0 before:h-[4px] 
                 before:bg-[#f9bf29] before:transition-all 
                 hover:before:w-full"
                >
                  Home
                </Link>
              </li>
              <li className="relative">
                <Link
                  href="/shop"
                  className="hover:text-white text-gray-300 transition-all 
                 before:content-[''] before:absolute before:-bottom-1 
                 before:left-0 before:w-0 before:h-[4px] 
                 before:bg-[#f9bf29] before:transition-all 
                 hover:before:w-full"
                >
                  Shop
                </Link>
              </li>
              <li className="relative">
                <Link
                  href="/aboutus"
                  className="hover:text-white text-gray-300 transition-all 
                 before:content-[''] before:absolute before:-bottom-1 
                 before:left-0 before:w-0 before:h-[4px] 
                 before:bg-[#f9bf29] before:transition-all 
                 hover:before:w-full"
                >
                  About Us
                </Link>
              </li>
              <li className="relative">
                <Link
                  href="/services"
                  className="hover:text-white text-gray-300 transition-all 
                 before:content-[''] before:absolute before:-bottom-1 
                 before:left-0 before:w-0 before:h-[4px] 
                 before:bg-[#f9bf29] before:transition-all 
                 hover:before:w-full"
                >
                  Services
                </Link>
              </li>
              <li className="relative">
                <Link
                  href="/blog"
                  className="hover:text-white text-gray-300 transition-all 
                 before:content-[''] before:absolute before:-bottom-1 
                 before:left-0 before:w-0 before:h-[4px] 
                 before:bg-[#f9bf29] before:transition-all 
                 hover:before:w-full"
                >
                  Blog
                </Link>
              </li>
              <li className="relative">
                <Link
                  href="/contactus"
                  className="hover:text-white text-gray-300 transition-all 
                 before:content-[''] before:absolute before:-bottom-1 
                 before:left-0 before:w-0 before:h-[4px] 
                 before:bg-[#f9bf29] before:transition-all 
                 hover:before:w-full"
                >
                  Contact Us
                </Link>
              </li>
            </ul>




            {/* Auth / Cart */}
            <div className="flex items-center gap-4">
              {user ? (
                <Link href="/cart" className="flex items-center gap-2">
                  <img src="/icon/cart.png" alt="Cart" className="w-7" />
                </Link>
              ) : (
                <div className="flex gap-2 text-xl text-white font-semibold">
                  <Link href="/login" className="hover:underline">Login</Link>
                  <span>/</span>
                  <Link href="/signup" className="hover:underline">Signup</Link>
                </div>
              )}

              {user && (
                <Link href="/userdashboard" className="flex items-center text-white ">
                  <img src="/icon/user.png" className="w-7 mr-2 " />
                  {user.firstName}
                </Link>
              )}
            </div>
          </nav>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden px-4 pb-4 space-y-4">
            <ul className="flex gap-6 text-base font-semibold">
              <li className="relative">
                <Link
                  href="/home"
                  className="hover:text-white text-gray-400 transition-all 
                 before:content-[''] before:absolute before:-bottom-1 
                 before:left-0 before:w-0 before:h-[4px] 
                 before:bg-[#f9bf29] before:transition-all 
                 hover:before:w-full"
                >
                  Home
                </Link>
              </li>
              <li className="relative">
                <Link
                  href="/shop"
                  className="hover:text-white text-gray-400 transition-all 
                 before:content-[''] before:absolute before:-bottom-1 
                 before:left-0 before:w-0 before:h-[4px] 
                 before:bg-[#f9bf29] before:transition-all 
                 hover:before:w-full"
                >
                  Shop
                </Link>
              </li>
              <li className="relative">
                <Link
                  href="/aboutus"
                  className="hover:text-white text-gray-400 transition-all 
                 before:content-[''] before:absolute before:-bottom-1 
                 before:left-0 before:w-0 before:h-[4px] 
                 before:bg-[#f9bf29] before:transition-all 
                 hover:before:w-full"
                >
                  About Us
                </Link>
              </li>
              <li className="relative">
                <Link
                  href="/services"
                  className="hover:text-white text-gray-400 transition-all 
                 before:content-[''] before:absolute before:-bottom-1 
                 before:left-0 before:w-0 before:h-[4px] 
                 before:bg-[#f9bf29] before:transition-all 
                 hover:before:w-full"
                >
                  Services
                </Link>
              </li>
              <li className="relative">
                <Link
                  href="/blog"
                  className="hover:text-white text-gray-400 transition-all 
                 before:content-[''] before:absolute before:-bottom-1 
                 before:left-0 before:w-0 before:h-[4px] 
                 before:bg-[#f9bf29] before:transition-all 
                 hover:before:w-full"
                >
                  Blog
                </Link>
              </li>
              <li className="relative">
                <Link
                  href="/contactus"
                  className="hover:text-white text-gray-400 transition-all 
                 before:content-[''] before:absolute before:-bottom-1 
                 before:left-0 before:w-0 before:h-[4px] 
                 before:bg-[#f9bf29] before:transition-all 
                 hover:before:w-full"
                >
                  Contact Us
                </Link>
              </li>
            </ul>

            {/* Auth / Cart (Mobile) */}
            <div className="pt-2">
              {user ? (
                <Link href="/cart" className="flex items-center gap-2">
                  <img src="/icon/cart.png" alt="Cart" className="w-5 h-5" />
                </Link>
              ) : (
                <div className="flex gap-3 text-base font-semibold">
                  <Link href="/login" className="hover:underline">Login</Link>
                  <span>/</span>
                  <Link href="/signup" className="hover:underline">Signup</Link>
                </div>
              )}
            </div>

            {user && (
              <Link href="/userdashboard" className="flex items-center">
                <img src="/icon/user.png" className="w-5 mr-2" />
                {user.firstName}
              </Link>
            )}
          </div>
        )}
      </header>
    </section>


  )
}
