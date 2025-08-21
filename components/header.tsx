"use client"
import Link from "next/link"
import Image from "next/image"

// import { useSelector } from "react-redux"
import { useState, useEffect } from "react"

type User = {
  firstName: string;
  lastName?: string;
  email?: string;
  // add other properties if needed
}


export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [user, setUser] = useState<User | null>(null)

  
  useEffect(() => {
    async function fetchUser() {
      try {
        const res = await fetch("/api/token")
        if (res.ok) {
          const data = await res.json()
          setUser(data.user)
          console.log(data.user)
        }
      } catch (err) {
        console.error("Error fetching user:", err)
      }
    }
    fetchUser()
  }, [])

  return (
    <section className="bg-[#3b5d50] px-12 md:px-16 lg:px-52 ">
      <header className="bg-[#3b5d50] sticky top-0 z-50 ">
        <div className="flex items-center px-4 py-2  ">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/home">
              <Image
                src="/images/furniflex.png"
                alt="Logo"
                width={150}
                height={50}
                className="object-contain"
                priority
              />
            </Link>
          </div>

          {/* Hamburger Icon (Mobile) */}
          <div className="md:hidden items-center ml-auto">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              <Image
                src="/icon/menu.png"
                alt="Menu"
                width={24}
                height={24}
              />
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex ml-auto items-center gap-10 ">
            <ul className="flex gap-6 text-sm font-semibold">
              {[
                { href: "/", label: "Home" },
                { href: "/shop", label: "Shop" },
                { href: "/aboutus", label: "About Us" },
                { href: "/services", label: "Services" },
                { href: "/blog", label: "Blog" },
                { href: "/contactus", label: "Contact Us" },
              ].map((item) => (
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
                <Link href="/cart" className="flex items-center gap-2">
                  <Image src="/icon/cart.png" alt="Cart" width={28} height={28} />
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
                  <Image src="/icon/user.png" alt="User" width={28} height={28} className="mr-2" />
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
              {[
                { href: "/home", label: "Home" },
                { href: "/shop", label: "Shop" },
                { href: "/aboutus", label: "About Us" },
                { href: "/services", label: "Services" },
                { href: "/blog", label: "Blog" },
                { href: "/contactus", label: "Contact Us" },
              ].map((item) => (
                <li key={item.href} className="relative">
                  <Link
                    href={item.href}
                    className="hover:text-white text-gray-400 transition-all 
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

            {/* Auth / Cart (Mobile) */}
            <div className="pt-2">
              {user ? (
                <Link href="/cart" className="flex items-center gap-2">
                  <Image src="/icon/cart.png" alt="Cart" width={20} height={20} />
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
                <Image src="/icon/user.png" alt="User" width={20} height={20} className="mr-2" />
                {user.firstName}
              </Link>
            )}
          </div>
        )}
      </header>
    </section>
  )
}
