"use client"
import { useForm } from "react-hook-form";

type FormData = {
    country: string;
    firstName: string;
    lastName: string;
    company: string;
    address: string;
    apartment: string;
    state: string;
    zip: string;
    email: string;
    phone: string;
    notes: string;
    coupon: string;
};

export default function Checkout() {
    const { register, handleSubmit } = useForm<FormData>();

    const onSubmit = (data: FormData) => {
        console.log("Form Submitted ✅", data);
    };

    return (
        <div>
            <div className="bg-[#3b5d50] h-80 items-center flex pl-36 text-4xl text-white">
                Checkout
            </div>

            <form
                onSubmit={handleSubmit(onSubmit)}
                className="text-black px-6 md:px-16 lg:px-32 xl:px-52 justify-center pb-50 pt-20"
            >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Billing Details */}
                    <div>
                        <h2 className="text-xl font-semibold mb-3 text-black">Billing Details</h2>
                        <div className="p-6 rounded-lg shadow-2xl">
                            {/* Country */}
                            <div className="mb-4">
                                <label htmlFor="c_country" className="block text-black mb-1">
                                    Country <span className="text-red-500">*</span>
                                </label>
                                <select
                                    id="c_country"
                                    {...register("country")}
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
                            </div>

                            {/* First + Last Name */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                <div>
                                    <label className="block text-black mb-1">First Name <span className="text-red-500">*</span></label>
                                    <input {...register("firstName")} type="text" className="w-full bg-white shadow-lg rounded-lg px-3 py-2" />
                                </div>
                                <div>
                                    <label className="block text-black mb-1">Last Name <span className="text-red-500">*</span></label>
                                    <input {...register("lastName")} type="text" className="w-full bg-white shadow-lg rounded-lg px-3 py-2" />
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
                                <input {...register("address")} type="text" className="w-full bg-white shadow-lg rounded-lg px-3 py-2 mb-2" placeholder="Street address" />
                                <input {...register("apartment")} type="text" className="w-full bg-white shadow-lg rounded-lg px-3 py-2" placeholder="Apartment, suite, etc. (optional)" />
                            </div>

                            {/* State + Zip */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                <div>
                                    <label className="block text-black mb-1">State / Country <span className="text-red-500">*</span></label>
                                    <input {...register("state")} type="text" className="w-full bg-white shadow-lg rounded-lg px-3 py-2" />
                                </div>
                                <div>
                                    <label className="block text-black mb-1">Postal / Zip <span className="text-red-500">*</span></label>
                                    <input {...register("zip")} type="text" className="w-full bg-white shadow-lg rounded-lg px-3 py-2" />
                                </div>
                            </div>

                            {/* Email + Phone */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                <div>
                                    <label className="block text-black mb-1">Email Address <span className="text-red-500">*</span></label>
                                    <input {...register("email")} type="email" className="w-full bg-white shadow-lg rounded-lg px-3 py-2" />
                                </div>
                                <div>
                                    <label className="block text-black mb-1">Phone <span className="text-red-500">*</span></label>
                                    <input {...register("phone")} type="text" className="w-full bg-white shadow-lg rounded-lg px-3 py-2" placeholder="Phone Number" />
                                </div>
                            </div>

                            {/* Order Notes */}
                            <div className="mb-4">
                                <label className="block text-black mb-1">Order Notes</label>
                                <textarea {...register("notes")} className="w-full bg-white shadow-lg rounded-lg px-3 py-2" rows={4} placeholder="Write your notes here..." />
                            </div>
                        </div>
                    </div>

                    {/* Coupon + Order */}
                    <div>
                        {/* Coupon */}
                        <div className="mb-6">
                            <h2 className="text-xl font-semibold mb-3 text-black">Coupon Code</h2>
                            <div className="p-6 rounded-lg shadow-2xl">
                                <label className="block text-black mb-2">Enter your coupon code if you have one</label>
                                <div className="flex">
                                    <input
                                        {...register("coupon")}
                                        type="text"
                                        className="flex-grow bg-white shadow-lg rounded-l-lg px-3 py-2"
                                        placeholder="Coupon Code"
                                    />
                                    <button type="button" className="bg-black text-white px-4 py-2 rounded-r-lg hover:bg-gray-800">
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
                                            <th className="py-2">Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="border-b">
                                            <td className="py-2">Top Up T-Shirt x 1</td>
                                            <td className="py-2">$250.00</td>
                                        </tr>
                                        <tr className="border-b">
                                            <td className="py-2">Polo Shirt x 1</td>
                                            <td className="py-2">$100.00</td>
                                        </tr>
                                        <tr className="border-b font-semibold text-black">
                                            <td className="py-2">Cart Subtotal</td>
                                            <td className="py-2">$350.00</td>
                                        </tr>
                                        <tr className="font-bold text-black">
                                            <td className="py-2">Order Total</td>
                                            <td className="py-2">$350.00</td>
                                        </tr>
                                    </tbody>
                                </table>

                                {/* Place Order */}
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
