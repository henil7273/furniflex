"use client"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';


export default function services() {
    return (
        <div>
            <div className="bg-[#3b5d50] px-6 md:px-16 lg:px-32 xl:px-52 ">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-10">

                    {/* Left */}
                    <div className="text-white text-center lg:text-left max-w-xl">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                            Services
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
                <div className="w-full ">


                    <div className="grid grid-cols-4 sm:grid-cols-4 gap-6 text-sm">
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
                        <div className="pt-2">
                            <img src="/icon/return.svg" className="mb-2 w-8 h-8" />
                            <h4 className="font-medium">Easy Returns</h4>
                            <p className="text-gray-500">
                                Aliquam vulputate velit imperdiet dolor tempor tristique.
                            </p>
                        </div>
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
                    </div>
                </div>


            </div>

            <div>
                <div className="flex  text-black px-6 py-24 md:px-16 lg:px-32 xl:px-52 justify-center">
                    <div className="mt-12">
                        <h2 className="text-3xl mb-4 ">Crafted with <br /> excellent material.</h2>
                        <p className="mb-4 text-gray-600 leading-medium">Donec vitae odio quis nisl dapibus malesuada.<br /> Nullam ac aliquet velit. Aliquam vulputate velit <br /> imperdiet dolor tempor tristique.</p>
                        <button className="px-6 py-3 rounded-4xl bg-[#2f2f2f] text-white">Explore</button>
                    </div>

                    <div className="flex">
                        {/* Card 1 */}
                        <div className="relative group items-center text-center m-4 rounded-lg p-8 overflow-visible">

                            {/* Image */}
                            <div className="mb-4 relative z-10 m-4 transform transition-all duration-300 group-hover:-translate-y-4">
                                <img
                                    src="/images/products/product-1.png"
                                    className="w-[320px] relative z-10"
                                />
                            </div>

                            {/* Text */}
                            <div className="relative z-10">
                                <p className="mb-2">Nordic Chair</p>
                                <span className="text-xl">$50.00</span>
                            </div>

                            {/* Cross Icon */}
                            <div className="absolute bottom-2 left-1/2 z-10 transform -translate-x-1/2 transition-all duration-500 
                opacity-0 group-hover:opacity-100 group-hover:translate-y-[90%]">
                                <img
                                    src="/icon/cross.svg"
                                    className="w-6 bg-black p-1 rounded-full"
                                    alt="close"
                                />
                            </div>

                            {/* Overlay */}
                            <div className="absolute inset-0 z-0 before:absolute before:bottom-0 before:left-0 before:w-full before:h-0 before:bg-[#dce5e4] before:transition-all before:duration-500 group-hover:before:h-3/5 before:content-['']"></div>
                        </div>

                        {/* Card 2 */}
                        <div className="relative group items-center text-center m-4 rounded-lg p-8 overflow-visible">

                            {/* Image */}
                            <div className="mb-4 relative z-10 m-4 transform transition-all duration-300 group-hover:-translate-y-4">
                                <img
                                    src="/images/products/product-2.png"
                                    className="w-[320px] relative z-10"
                                />
                            </div>

                            {/* Text */}
                            <div className="relative z-10">
                                <p className="mb-2">Nordic Chair</p>
                                <span className="text-xl">$50.00</span>
                            </div>

                            {/* Cross Icon */}
                            <div className="absolute bottom-2 left-1/2 z-10 transform -translate-x-1/2 transition-all duration-500 
                opacity-0 group-hover:opacity-100 group-hover:translate-y-[90%]">
                                <img
                                    src="/icon/cross.svg"
                                    className="w-6 bg-black p-1 rounded-full"
                                    alt="close"
                                />
                            </div>

                            {/* Overlay */}
                            <div className="absolute inset-0 z-0 before:absolute before:bottom-0 before:left-0 before:w-full before:h-0 before:bg-[#dce5e4] before:transition-all before:duration-500 group-hover:before:h-3/5 before:content-['']"></div>
                        </div>

                        {/* Card 3 */}
                        <div className="relative group items-center text-center m-4 rounded-lg p-8 overflow-visible">

                            {/* Image */}
                            <div className="mb-4 relative z-10 m-4 transform transition-all duration-300 group-hover:-translate-y-4">
                                <img
                                    src="/images/products/product-3.png"
                                    className="w-[320px] relative z-10"
                                />
                            </div>

                            {/* Text */}
                            <div className="relative z-10">
                                <p className="mb-2">Nordic Chair</p>
                                <span className="text-xl">$50.00</span>
                            </div>

                            {/* Cross Icon */}
                            <div className="absolute bottom-2 left-1/2 z-10 transform -translate-x-1/2 transition-all duration-500 
                opacity-0 group-hover:opacity-100 group-hover:translate-y-[90%]">
                                <img
                                    src="/icon/cross.svg"
                                    className="w-6 bg-black p-1 rounded-full"
                                    alt="close"
                                />
                            </div>

                            {/* Overlay */}
                            <div className="absolute inset-0 z-0 before:absolute before:bottom-0 before:left-0 before:w-full before:h-0 before:bg-[#dce5e4] before:transition-all before:duration-500 group-hover:before:h-3/5 before:content-['']"></div>
                        </div>
                    </div>

                </div>
            </div>

            <div className='pb-40'>
                <h1 className="text-4xl text-center py-4  ">Testimonials</h1>

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