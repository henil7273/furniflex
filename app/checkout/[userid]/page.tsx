"use client";

import { useForm } from "react-hook-form";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useRouter } from "next/router";
import "react-toastify/dist/ReactToastify.css";

type FormData = {
    country: string;
    firstName: string;
    lastName: string;
    company?: string;
    address: string;
    apartment?: string;
    state: string;
    zip: string;
    email: string;
    phone: string;
    notes?: string;
    coupon?: string;
};

type CartItem = {
    productId: { name: string };
    quantity: number;
    price: number;
};

type Cart = {
    items: CartItem[];
    bill: number;
};

export default function Checkout() {
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
    const router = useRouter();
    const { userid } = useParams();

    const [cartItems, setCartItems] = useState<Cart | null>(null);
    const [loading, setLoading] = useState(true);

    // Fetch cart for this user
    useEffect(() => {
        if (!userid) return;

        const fetchCart = async () => {
            try {
                const res = await fetch(`/api/cart/${userid}`);
                const data = await res.json();
                if (!res.ok) throw new Error(data.message || "Failed to fetch cart");
                setCartItems(data.cart);
            } catch (err) {
                console.error("❌ Error loading cart:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchCart();
    }, [userid]);

    const onSubmit = async (data: FormData) => {
        if (!cartItems) return;

        try {
            const res = await fetch(`/api/checkout/${userid}`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    shippingDetails: data,
                    items: cartItems.items,
                    totalAmount: cartItems.bill,
                    coupon: data.coupon,
                }),
            });

            const result = await res.json();

            if (!res.ok) throw new Error(result.message || "Failed to place order");

            toast.success("Order Placed Successfully ", {
                autoClose: 1000, // 1000ms = 1 second
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
            });

             router.push("/");


        } catch (error: any) {
            console.error("❌ Order error:", error);
            alert(error.message || "Something went wrong");
        }
    };

    if (loading) return <p className="text-center mt-10">Loading cart...</p>;

    return (
        <div>
            <ToastContainer />
            <div className="bg-[#3b5d50] h-80 flex items-center pl-36 text-4xl text-white">
                Checkout
            </div>

            <form
                onSubmit={handleSubmit(onSubmit)}
                className="text-black px-6 md:px-16 lg:px-32 xl:px-52 pb-50 pt-20"
            >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Billing Details */}
                    <div>
                        <h2 className="text-xl font-semibold mb-3 text-black">Billing Details</h2>
                        <div className="p-6 rounded-lg shadow-2xl bg-white">
                            {/* Country */}
                            <div className="mb-4">
                                <label htmlFor="c_country" className="block text-black mb-1">
                                    Country <span className="text-red-500">*</span>
                                </label>
                                <select
                                    id="c_country"
                                    {...register("country", { required: "Country is required" })}
                                    className="w-full shadow-lg bg-white rounded-lg px-3 py-2 focus:ring focus:ring-gray-300"
                                >
                                    <option value="">Select a country</option>
                                    <option value="Bangladesh">Bangladesh</option>
                                    <option value="Algeria">Algeria</option>
                                    <option value="Afghanistan">Afghanistan</option>
                                    <option value="Ghana">Ghana</option>
                                    <option value="Albania">Albania</option>
                                    <option value="Bahrain">Bahrain</option>
                                    <option value="Colombia">Colombia</option>
                                    <option value="Dominican Republic">Dominican Republic</option>
                                </select>
                                {errors.country && <p className="text-red-500 text-sm mt-1">{errors.country.message}</p>}
                            </div>

                            {/* First + Last Name */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                <div>
                                    <label className="block text-black mb-1">First Name <span className="text-red-500">*</span></label>
                                    <input
                                        {...register("firstName", { required: "First name is required" })}
                                        type="text"
                                        className="w-full bg-white shadow-lg rounded-lg px-3 py-2"
                                    />
                                    {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>}
                                </div>
                                <div>
                                    <label className="block text-black mb-1">Last Name <span className="text-red-500">*</span></label>
                                    <input
                                        {...register("lastName", { required: "Last name is required" })}
                                        type="text"
                                        className="w-full bg-white shadow-lg rounded-lg px-3 py-2"
                                    />
                                    {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName.message}</p>}
                                </div>
                            </div>

                            {/* Company */}
                            <div className="mb-4">
                                <label className="block text-black mb-1">Company Name</label>
                                <input {...register("company")} type="text" className="w-full bg-white shadow-lg rounded-lg px-3 py-2" />
                            </div>

                            {/* Address */}
                            <div className="mb-4">
                                <label className="block text-black mb-1">Address <span className="text-red-500">*</span></label>
                                <input
                                    {...register("address", { required: "Address is required" })}
                                    type="text"
                                    className="w-full bg-white shadow-lg rounded-lg px-3 py-2 mb-2"
                                    placeholder="Street address"
                                />
                                {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address.message}</p>}
                                <input
                                    {...register("apartment")}
                                    type="text"
                                    className="w-full bg-white shadow-lg rounded-lg px-3 py-2"
                                    placeholder="Apartment, suite, etc. (optional)"
                                />
                            </div>

                            {/* State + Zip */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                <div>
                                    <label className="block text-black mb-1">State / Country <span className="text-red-500">*</span></label>
                                    <input
                                        {...register("state", { required: "State is required" })}
                                        type="text"
                                        className="w-full bg-white shadow-lg rounded-lg px-3 py-2"
                                    />
                                    {errors.state && <p className="text-red-500 text-sm mt-1">{errors.state.message}</p>}
                                </div>
                                <div>
                                    <label className="block text-black mb-1">Postal / Zip <span className="text-red-500">*</span></label>
                                    <input
                                        {...register("zip", {
                                            required: "Postal/Zip is required",
                                            pattern: { value: /^[0-9]{4,10}$/, message: "Enter a valid zip code" },
                                        })}
                                        type="text"
                                        className="w-full bg-white shadow-lg rounded-lg px-3 py-2"
                                    />
                                    {errors.zip && <p className="text-red-500 text-sm mt-1">{errors.zip.message}</p>}
                                </div>
                            </div>

                            {/* Email + Phone */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                <div>
                                    <label className="block text-black mb-1">Email Address <span className="text-red-500">*</span></label>
                                    <input
                                        {...register("email", {
                                            required: "Email is required",
                                            pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Enter a valid email" },
                                        })}
                                        type="email"
                                        className="w-full bg-white shadow-lg rounded-lg px-3 py-2"
                                    />
                                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                                </div>
                                <div>
                                    <label className="block text-black mb-1">Phone <span className="text-red-500">*</span></label>
                                    <input
                                        {...register("phone", {
                                            required: "Phone number is required",
                                            pattern: { value: /^[0-9]{7,15}$/, message: "Enter a valid phone number" },
                                        })}
                                        type="text"
                                        className="w-full bg-white shadow-lg rounded-lg px-3 py-2"
                                    />
                                    {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
                                </div>
                            </div>

                            {/* Notes */}
                            <div className="mb-4">
                                <label className="block text-black mb-1">Order Notes</label>
                                <textarea
                                    {...register("notes")}
                                    className="w-full bg-white shadow-lg rounded-lg px-3 py-2"
                                    rows={4}
                                    placeholder="Write your notes here..."
                                />
                            </div>

                            <button type="submit" className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800">
                                Place Order
                            </button>
                        </div>
                    </div>

                    {/* Coupon + Order Summary */}
                    <div>
                        {/* Coupon */}
                        <div className="mb-6">
                            <h2 className="text-xl font-semibold mb-3 text-black">Coupon Code</h2>
                            <div className="p-6 rounded-lg shadow-2xl bg-white">
                                <label className="block text-black mb-2">Enter your coupon code if you have one</label>
                                <div className="flex">
                                    <input
                                        {...register("coupon")}
                                        type="text"
                                        className="flex-grow bg-white shadow-lg rounded-l-lg px-3 py-2"
                                        placeholder="Coupon Code"
                                    />
                                    <button
                                        type="button"
                                        className="bg-black text-white px-4 py-2 rounded-r-lg hover:bg-gray-800"
                                    >
                                        Apply
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Order Summary */}
                        <div>
                            <h2 className="text-xl font-semibold mb-3 text-black">Your Order</h2>
                            <div className="p-6 bg-white rounded-lg shadow-2xl">
                                <table className="w-full mb-5 border-b">
                                    <thead>
                                        <tr className="border-b text-left">
                                            <th className="py-2">Product</th>
                                            <th className="py-2">Qty</th>
                                            <th className="py-2">Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {cartItems?.items.length ? (
                                            cartItems.items.map((item, idx) => (
                                                <tr key={idx} className="border-b">
                                                    <td className="py-2">{item.productId?.name}</td>
                                                    <td className="py-2">x {item.quantity}</td>
                                                    <td className="py-2">${(item.price * item.quantity).toFixed(2)}</td>
                                                </tr>
                                            ))
                                        ) : (
                                            <tr>
                                                <td colSpan={3} className="text-center py-4 text-gray-500">
                                                    Your cart is empty
                                                </td>
                                            </tr>
                                        )}

                                        {/* Subtotal */}
                                        <tr className="border-b font-semibold text-black">
                                            <td className="py-2">Cart Subtotal</td>
                                            <td></td>
                                            <td className="py-2">${cartItems?.bill?.toFixed(2) ?? "0.00"}</td>
                                        </tr>

                                        {/* Total */}
                                        <tr className="font-bold text-black">
                                            <td className="py-2">Order Total</td>
                                            <td></td>
                                            <td className="py-2">${cartItems?.bill?.toFixed(2) ?? "0.00"}</td>
                                        </tr>
                                    </tbody>
                                </table>

                                <button
                                    type="submit"
                                    className="w-full bg-black text-white py-3 text-lg font-medium rounded-lg hover:bg-gray-800 transition"
                                >
                                    Place Order
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}
