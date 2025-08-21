"use client"
// import { useParams } from "next/navigation";
import Image from "next/image";

export default function CartPage() {
    // const { username } = useParams();

    return (
        <div className="">
            <div className="bg-[#3b5d50] h-80 items-center flex pl-36 text-4xl text-white">
                Shop
            </div>

            <div className="text-black px-6  md:px-16 lg:px-32 xl:px-52 justify-center pb-50">
                <div className=" p-10">
                    <div className="overflow-x-auto">
                        <table className="min-w-full  border-gray-200 ">
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
                                <tr className="border-b">
                                    <td className="px-4 py-2">
                                        <Image
                                            src="/images/products/product-1.png"
                                            alt="Product 1"
                                            width={160}
                                            height={160}
                                            className="w-40 h-40 object-contain"
                                        />
                                    </td>
                                    <td className="px-4 py-2">
                                        <h2 className="font-semibold text-gray-800">Product 1</h2>
                                    </td>
                                    <td className="px-4 py-2">$49.00</td>
                                    <td className="px-4 py-2">
                                        <div className="flex items-center justify-center rounded-md ">
                                            <button className="px-2 py-1 text-lg font-bold text-gray-600 hover:text-black">−</button>
                                            <input
                                                type="text"
                                                value="1"
                                                readOnly
                                                className="w-10 text-center border p-2 outline-none"
                                            />
                                            <button className="px-2 py-1 text-lg font-bold text-gray-600 hover:text-black">+</button>
                                        </div>
                                    </td>
                                    <td className="px-4 py-2">$49.00</td>
                                    <td className="px-4 py-2 text-center">
                                        <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">X</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="flex p-10">
                    <div className="w-1/3">
                        <div className="w-full">
                            <label htmlFor="coupon" className="text-black text-xl font-semibold">
                                Coupon
                            </label>
                            <p className="text-gray-600 mb-2">Enter your coupon code if you have one.</p>

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

                    <div className="w-1/2 ml-auto">
                        <div className="flex justify-end">
                            <div className="w-full md:w-7/12 bg-white p-6 rounded-lg shadow">
                                {/* Header */}
                                <div className="border-b pb-3 mb-5 text-right">
                                    <h3 className="text-black text-xl font-semibold uppercase">
                                        Cart Totals
                                    </h3>
                                </div>

                                {/* Subtotal */}
                                <div className="flex justify-between mb-3">
                                    <span className="text-gray-700">Subtotal</span>
                                    <strong className="text-black">$230.00</strong>
                                </div>

                                {/* Total */}
                                <div className="flex justify-between mb-5">
                                    <span className="text-gray-700">Total</span>
                                    <strong className="text-black">$230.00</strong>
                                </div>

                                {/* Checkout Button */}
                                <div>
                                    <button
                                        onClick={() => (window.location.href = "/checkout")}
                                        className="w-full bg-black text-white py-3 text-lg font-medium rounded-lg hover:bg-gray-800 transition"
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
