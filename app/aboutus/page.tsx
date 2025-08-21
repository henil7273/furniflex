"use client"

import Link from "next/link"

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';


export default function aboutus() {
    return (
        <div>
            <div className="bg-[#3b5d50] px-6 md:px-16 lg:px-32 xl:px-52 ">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-10">

                    {/* Left */}
                    <div className="text-white text-center lg:text-left max-w-xl">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                            About us
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

            <div className="flex flex-col md:flex-row items-center px-6 py-16 md:px-16 lg:px-32 xl:px-72 mx-auto gap-12">
                {/* Left Section */}
                <div className="w-full md:w-1/2">
                    <div className="mb-8">
                        <h1 className="text-3xl md:text-4xl font-semibold mb-2">Why choose Us</h1>
                        <p className="text-gray-500 text-sm md:text-base">
                            Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit.
                            Aliquam vulputate velit imperdiet dolor tempor tristique.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">
                        <div className="pt-2">
                            <img src="/icon/truck.svg" className="mb-2 w-8 h-8" />
                            <h4 className="font-medium">Fast & Free shipping</h4>
                            <p className="text-gray-500">
                                Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit.
                            </p>
                        </div>
                        <div className="pt-2">
                            <img src="/icon/bag.svg" className="mb-2 w-8 h-8" />
                            <h4 className="font-medium">Secure Shopping</h4>
                            <p className="text-gray-500">
                                Aliquam vulputate velit imperdiet dolor tempor tristique.
                            </p>
                        </div>
                        <div className="pt-2">
                            <img src="/icon/support.svg" className="mb-2 w-8 h-8" />
                            <h4 className="font-medium">24/7 Support</h4>
                            <p className="text-gray-500">
                                Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit.
                            </p>
                        </div>
                        <div className="pt-2">
                            <img src="/icon/return.svg" className="mb-2 w-8 h-8" />
                            <h4 className="font-medium">Easy Returns</h4>
                            <p className="text-gray-500">
                                Aliquam vulputate velit imperdiet dolor tempor tristique.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Right Section */}
                <div className="w-full md:w-1/2 flex justify-center">
                    <img
                        src="/images/sample-1.jpg"
                        className="w-full md:w-2/3 rounded-2xl object-cover"
                        alt="Furniture"
                    />
                </div>
            </div>

            <div className="px-6 py-16 md:px-16 lg:px-32 xl:px-72">
                <div>
                    <h1 className="text-center text-4xl my-10 mb-20">Our Team</h1>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12 ">

                    {/* Card 1 */}
                    <div className="bg-white rounded-lg shadow-md overflow-hidden ">
                        <img className="w-full" src="/images/person_1.jpg" alt="Person 1" />
                        <div className="p-4">
                            <h1 className="text-2xl font-semibold">Lawson Arnold</h1>
                            <p className="text-gray-600 mb-3">CEO, Founder, Atty.</p>
                            <p className="text-sm leading-6 mb-3">
                                Separated they live in. Separated they live in Bookmarksgrove right at
                                the coast of the Semantics, a large language ocean.
                            </p>
                            <Link href="/" className="text-sm underline">
                                Learn more
                            </Link>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white rounded-lg shadow-md overflow-hidden">
                        <img className="w-full" src="/images/person_2.jpg" alt="Person 2" />
                        <div className="p-4">
                            <h1 className="text-2xl font-semibold">Lawson Arnold</h1>
                            <p className="text-gray-600 mb-3">CEO, Founder, Atty.</p>
                            <p className="text-sm leading-6 mb-3">
                                Separated they live in. Separated they live in Bookmarksgrove right at
                                the coast of the Semantics, a large language ocean.
                            </p>
                            <Link href="/" className="text-sm underline">
                                Learn more
                            </Link>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white rounded-lg shadow-md overflow-hidden">
                        <img className="w-full" src="/images/person_3.jpg" alt="Person 3" />
                        <div className="p-4">
                            <h1 className="text-2xl font-semibold">Lawson Arnold</h1>
                            <p className="text-gray-600 mb-3">CEO, Founder, Atty.</p>
                            <p className="text-sm leading-6 mb-3">
                                Separated they live in. Separated they live in Bookmarksgrove right at
                                the coast of the Semantics, a large language ocean.
                            </p>
                            <Link href="/" className="text-sm underline">
                                Learn more
                            </Link>
                        </div>
                    </div>

                    {/* Card 4 */}
                    <div className="bg-white rounded-lg shadow-md overflow-hidden">
                        <img className="w-full" src="/images/person_4.jpg" alt="Person 4" />
                        <div className="p-4">
                            <h1 className="text-2xl font-semibold">Lawson Arnold</h1>
                            <p className="text-gray-600 mb-3">CEO, Founder, Atty.</p>
                            <p className="text-sm leading-6 mb-3">
                                Separated they live in. Separated they live in Bookmarksgrove right at
                                the coast of the Semantics, a large language ocean.
                            </p>
                            <Link href="/" className="text-sm underline">
                                Learn more
                            </Link>
                        </div>
                    </div>

                </div>
            </div>

            <div>
                <h1 className="text-4xl text-center py-15 ">Testimonials</h1>

                <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
                    <SwiperSlide className='text-center mb-15'>
                        <div className='mx-auto w-fit mb-4'>
                            “Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. <br /> Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor <br /> tempor tristique. Pellentesque habitant morbi tristique senectus et netus et <br /> malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque.”
                        </div>
                        <div className=''>
                            <div className='w-fit mx-auto '><img src="/images/person-1.png" className='w-20 rounded-4xl ' alt="" /></div>
                            <p>maria jones</p>
                            <p>CEO. Co-founder,XYZ Inc.</p>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className='text-center'>
                        <div className='mx-auto w-fit mb-4'>
                            “Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. <br /> Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor <br /> tempor tristique. Pellentesque habitant morbi tristique senectus et netus et <br /> malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque.”
                        </div>
                        <div className=''>
                            <div className='w-fit mx-auto '><img src="/images/person-1.png" className='w-20 rounded-4xl ' alt="" /></div>
                            <p>maria jones</p>
                            <p>CEO. Co-founder,XYZ Inc.</p>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className='text-center'>
                        <div className='mx-auto w-fit mb-4'>
                            “Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. <br /> Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor <br /> tempor tristique. Pellentesque habitant morbi tristique senectus et netus et <br /> malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque.”
                        </div>
                        <div className=''>
                            <div className='w-fit mx-auto '><img src="/images/person-1.png" className='w-20 rounded-4xl ' alt="" /></div>
                            <p>maria jones</p>
                            <p>CEO. Co-founder,XYZ Inc.</p>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>

        </div>
    )
}