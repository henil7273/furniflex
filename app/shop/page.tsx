"use client"

import { useState, useEffect } from "react";
import Image from "next/image"
import { ToastContainer, toast } from 'react-toastify';


export default function Shop() {

  const [products, setProducts] = useState([]);
  const [user, setUser] = useState(null)

  useEffect(() => {
    fetch("/api/shop")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data)
        console.log("data", data)
      });
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log(token);

    if (!token) {
      console.warn("No token found in localStorage");
      return;
    }

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
      .catch((err) => {
        console.error("Error fetching user:", err);
        setUser(null);
      });
  }, []);

  const handleaddtocart = (prod) => {
    if (!user?.id) {
      console.error("User not logged in");
      return;
    }

    fetch(`/api/shop`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userId: user.id,
        productId: prod._id,
        quantity: 1,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Cart updated:", data)
        
        // Faster toast
        toast.success("Added to cart", {
          autoClose: 1000, // 1000ms = 1 second
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });

      })
      .catch((err) => console.error("Error adding to cart:", err));
  };

  return (
    <div><ToastContainer />
      <div className="bg-[#3b5d50] h-80 items-center flex pl-36 text-4xl text-white">
        Shop
      </div>

     <div>
  <div className="flex text-black px-2 sm:px-6 py-24 md:px-16 lg:px-32 xl:px-52 justify-center">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">

      {products.map((product) => (
        <div
          key={product._id}
          className="relative group text-center p-8 overflow-visible w-full flex flex-col items-center 
                     sm:m-4 m-0" // <-- Only add margin on sm+ screens
        >
          {/* Image Container */}
          <div className="mb-4 h-64 w-full flex items-center justify-center relative z-10 transform transition-all duration-300 group-hover:-translate-y-4">
            <Image
              src={product.image}
              alt={product.name}
              width={320}
              height={320}
              className="object-contain max-h-full max-w-full"
            />
          </div>

          {/* Text */}
          <div className="relative z-10">
            <p className="mb-2 font-medium">{product.name}</p>
            <span className="text-xl font-semibold">${product.price}</span>
          </div>

          {/* Cross Icon */}
          <div className="absolute bottom-2 left-1/2 z-20 transform -translate-x-1/2 transition-all duration-500 
            opacity-0 group-hover:opacity-100 group-hover:translate-y-[90%] cursor-pointer ">
            <button className="cursor-pointer" onClick={() => handleaddtocart(product)}>
              <Image
                src="/icon/cross.svg"
                alt="close"
                width={24}
                height={24}
                className="bg-black p-1 rounded-full"
              />
            </button>
          </div>

          {/* Overlay */}
          <div className="absolute inset-0 z-0 before:absolute before:bottom-0 before:left-0 before:w-full before:h-0 before:bg-[#dce5e4] before:transition-all before:duration-500 group-hover:before:h-full before:content-['']"></div>
        </div>
      ))}

    </div>
  </div>
</div>


    </div>
  )
}
