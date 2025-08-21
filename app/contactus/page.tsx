"use client";

import { useState } from "react";

export default function Contactus() {

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLElement & { name: string; value: string }>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.ChangeEvent<HTMLElement & { name: string; value: string }>) => {
        e.preventDefault();
        console.log("Form Submitted:", formData);
        // You can send formData to backend here
    };

    return (
        <div className="pb-40">
            <div className="bg-[#3b5d50] px-6 md:px-16 lg:px-32 xl:px-52 ">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-10">

                    {/* Left */}
                    <div className="text-white text-center lg:text-left max-w-xl">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                            Contact us
                        </h1>
                        <p className="mt-4 text-gray-300 text-base sm:text-lg leading-relaxed">
                            Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit.
                            <br className="hidden sm:block" /> Aliquam vulputate velit imperdiet dolor tempor tristique.
                        </p>
                        <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <button className="bg-[#f9bf29] text-black font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:bg-[#e0a81f] transition">
                                Shop Now
                            </button>
                            <button className="border border-gray-400 font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-full text-white hover:border-white transition-all">
                                Explore
                            </button>
                        </div>
                    </div>

                    {/* Right */}
                    <div className="flex justify-center lg:justify-end">
                        <img
                            src="/images/couch.png"
                            alt="Couch"
                            className="w-[250px] sm:w-[400px] md:w-[500px] lg:w-[650px] xl:w-[800px] object-contain"
                        />
                    </div>
                </div>
            </div>

            <div className="flex mx-auto w-fit py-20">
                <div className="flex items-center m-4" >
                    <div><img className="p-3 bg-[#3b5d50] rounded-2xl" src="/icon/location-pin.png" alt="" /></div>
                    <div className="ml-2"><p>307, Tulsi arcade, mota varchha, surat</p></div>
                </div>

                <div className="flex items-center m-4" >
                    <div><img className="p-3 bg-[#3b5d50] rounded-2xl" src="/icon/email.png" alt="" /></div>
                    <div className="ml-2"><p>info@Furniflex.com</p></div>
                </div>

                <div className="flex items-center m-4">
                    <div><img className="p-3 bg-[#3b5d50] rounded-2xl" src="/icon/phone-call.png" alt="" /></div>
                    <div className="ml-2"><p>+1 294 3925 3939</p></div>
                </div>
            </div>

            <div className="flex justify-center ">
                <form
                    onSubmit={handleSubmit}
                    className=" rounded-2xl p-8 w-1/2"
                >

                    <div className="grid grid-cols-2 gap-4 mb-4">
                        <input
                            type="text"
                            name="firstName"
                            placeholder="First Name"
                            value={formData.firstName}
                            onChange={handleChange}
                            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-black"
                            required
                        />
                        <input
                            type="text"
                            name="lastName"
                            placeholder="Last Name"
                            value={formData.lastName}
                            onChange={handleChange}
                            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-black"
                            required
                        />
                    </div>

                    <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={handleChange}
                        className="border border-gray-300 rounded-lg p-3 w-full mb-4 focus:outline-none focus:ring-2 focus:ring-black"
                        required
                    />

                    <textarea
                        name="message"
                        placeholder="Your Message"
                        rows="4"
                        value={formData.message}
                        onChange={handleChange}
                        className="border border-gray-300 rounded-lg p-3 w-full mb-4 focus:outline-none focus:ring-2 focus:ring-black"
                        required
                    />

                    <button
                        type="submit"
                        className="w-full bg-[#3b5d50] text-white py-3 rounded-lg font-semibold hover:bg-black transition"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    )
}