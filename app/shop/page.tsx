"use client"

export default function shop() {
    return (
        <div>
            <div className="bg-[#3b5d50] h-80 items-center flex pl-36 text-4xl text-white">
                Shop
            </div>

            <div>
                <div className="flex  text-black px-6 py-24 md:px-16 lg:px-32 xl:px-52 justify-center pb-50 ">


                    <div className=" grid grid-cols-4 ">
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

                        {/* Card 4 */}
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

                    </div>

                </div>
            </div>
        </div>
    )
}