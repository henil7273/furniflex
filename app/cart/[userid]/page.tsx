"use client";
import { useEffect, useState } from "react";
import { useParams, useRouter} from "next/navigation";
import { ToastContainer, toast } from 'react-toastify';

import Image from "next/image";

export default function CartPage() {
  const router = useRouter();
  const { userid } = useParams();
  const [cart, setCart] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!userid) return;
    const fetchCart = async () => {
      try {
        const res = await fetch(`/api/cart/${userid}`);
        if (!res.ok) {
          throw new Error(`Error ${res.status}: ${res.statusText}`);
        }
        const data = await res.json();
        console.log("Fetched cart:", data.cart);
        setCart(data.cart);
      } catch (err) {
        console.error("Failed to fetch cart:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchCart();
  }, [userid]);

  const updateQuantity = async (productId: string, action: "increase" | "decrease") => {
    try {
      const res = await fetch(`/api/cart/${userid}/update`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productId, action }),
      });

      if (!res.ok) throw new Error("Failed to update cart");

      const data = await res.json();
      setCart(data.cart); // ✅ update state without reload
    } catch (err) {
      console.error(err);
    }
  };

  const removeItem = async (productId: string) => {
    try {
      const res = await fetch(`/api/cart/${userid}?productId=${productId}`, {
        method: "DELETE",
      });
      if (!res.ok) throw new Error("Failed to remove item");
      const data = await res.json();
      setCart(data.cart); // update state without reload
      toast.warn("item deleted !")
    } catch (error) {
      console.error("Remove item error:", error);
    }
  };

  if (loading) {
    return <p className="p-10 text-center text-lg">Loading cart...</p>;
  }

  // ✅ Calculate totals
  const subtotal =
    cart?.items?.reduce(
      (sum: number, item: any) => sum + item.productId?.price * item.quantity,
      0
    ) || 0;

  return (
    <div><ToastContainer/>
      {/* Banner */}
      <div className="bg-[#3b5d50] h-80 flex items-center pl-36 text-4xl text-white">
        Cart
      </div>

      <div className="text-black px-6 md:px-16 lg:px-32 xl:px-52 justify-center pb-20">
        <div className="p-10">
          {cart && cart.items?.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="min-w-full border-gray-200">
                <thead className="border-b-2 text-gray-700">
                  <tr>
                    <th className="px-4 py-4 text-left">Image</th>
                    <th className="px-4 py-4 text-left">Product</th>
                    <th className="px-4 py-4 text-left">Price</th>
                    <th className="px-4 py-4 text-center">Quantity</th>
                    <th className="px-4 py-4 text-left">Total</th>
                    <th className="px-4 py-4 text-center">Remove</th>
                  </tr>
                </thead>
                <tbody>
                  {cart.items.map((item: any, i: number) => (
                    <tr key={i} className="border-b">
                      <td className="px-4 py-2">
                        <Image
                          src={item.productId?.image || "/images/default.png"}
                          alt={item.productId?.name || "Product"}
                          width={100}
                          height={100}
                          className="object-contain w-24 h-24"
                        />
                      </td>
                      <td className="px-4 py-2 font-semibold text-gray-800">
                        {item.productId?.name}
                      </td>
                      <td className="px-4 py-2">${item.productId?.price}</td>
                      <td className="px-4 py-2">
                        <div className="flex items-center justify-center rounded-md">
                          <button className="px-2 py-1 text-lg font-bold text-gray-600 hover:text-black"
                            onClick={() => updateQuantity(item.productId._id, "decrease")}>
                            −
                          </button>
                          <input
                            type="text"
                            value={item.quantity}
                            readOnly
                            className="w-10 text-center border p-2 outline-none"
                          />
                          <button className="px-2 py-1 text-lg font-bold text-gray-600 hover:text-black"
                            onClick={() => updateQuantity(item.productId._id, "increase")}>
                            +
                          </button>
                        </div>
                      </td>
                      <td className="px-4 py-2">
                        ${item.productId?.price * item.quantity}
                      </td>
                      <td className="px-4 py-2 text-center">
                        <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                          onClick={() => removeItem(item.productId._id)}>
                          X
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <p className="text-gray-600">Your cart is empty.</p>
          )}
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row gap-10 p-10">
          {/* Coupon */}
          <div className="w-full md:w-1/3">
            <div className="w-full">
              <label
                htmlFor="coupon"
                className="text-black text-xl font-semibold"
              >
                Coupon
              </label>
              <p className="text-gray-600 mb-2">
                Enter your coupon code if you have one.
              </p>
              <div className="flex flex-col md:flex-row gap-3">
                <input
                  type="text"
                  id="coupon"
                  placeholder="Coupon Code"
                  className="w-full md:w-2/3 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <button className="w-full md:w-1/3 bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition">
                  Apply Coupon
                </button>
              </div>
            </div>
          </div>

          {/* Totals */}
          <div className="w-full md:w-1/2 ml-auto">
            <div className="flex justify-end">
              <div className="w-full md:w-7/12 bg-white p-6 rounded-lg shadow">
                <div className="border-b pb-3 mb-5 text-right">
                  <h3 className="text-black text-xl font-semibold uppercase">
                    Cart Totals
                  </h3>
                </div>

                <div className="flex justify-between mb-3">
                  <span className="text-gray-700">Subtotal</span>
                  <strong className="text-black">${cart.bill}</strong>
                </div>

                <div className="flex justify-between mb-5">
                  <span className="text-gray-700">Total</span>
                  <strong className="text-black">${subtotal.toFixed(2)}</strong>
                </div>

                <div>

                  <button
                    onClick={() =>
                      router.push(`/checkout/${userid}`, { state: { cart } }) // ✅ pass cart state
                    }
                    className="w-full bg-black text-white py-3 text-lg font-medium rounded-lg hover:bg-gray-800 transition cursor-pointer"
                  >
                    Proceed To Checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
