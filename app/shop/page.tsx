"use client"

import Image from "next/image"

export default function Shop() {

  

  return (
    <div>
      <div className="bg-[#3b5d50] h-80 items-center flex pl-36 text-4xl text-white">
        Shop
      </div>

      <div>
        <div className="flex text-black px-6 py-24 md:px-16 lg:px-32 xl:px-52 justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">

            {/* Card 1 */}
            <div className="relative group text-center m-4 rounded-lg p-8 overflow-visible w-full flex flex-col items-center">
              {/* Image */}
              <div className="mb-4 relative z-10 transform transition-all duration-300 group-hover:-translate-y-4 flex justify-center">
                <Image
                  src="/images/products/product-1.png"
                  alt="Nordic Chair"
                  width={320}
                  height={320}
                  className="relative z-10"
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
                <Image
                  src="/icon/cross.svg"
                  alt="close"
                  width={24}
                  height={24}
                  className="bg-black p-1 rounded-full"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 z-0 before:absolute before:bottom-0 before:left-0 before:w-full before:h-0 before:bg-[#dce5e4] before:transition-all before:duration-500 group-hover:before:h-3/5 before:content-['']"></div>
            </div>

            <div className="relative group text-center m-4 rounded-lg p-8 overflow-visible w-full flex flex-col items-center">
              {/* Image */}
              <div className="mb-4 relative z-10 transform transition-all duration-300 group-hover:-translate-y-4 flex justify-center">
                <Image
                  src="/images/products/product-1.png"
                  alt="Nordic Chair"
                  width={320}
                  height={320}
                  className="relative z-10"
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
                <Image
                  src="/icon/cross.svg"
                  alt="close"
                  width={24}
                  height={24}
                  className="bg-black p-1 rounded-full"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 z-0 before:absolute before:bottom-0 before:left-0 before:w-full before:h-0 before:bg-[#dce5e4] before:transition-all before:duration-500 group-hover:before:h-3/5 before:content-['']"></div>
            </div>

            <div className="relative group text-center m-4 rounded-lg p-8 overflow-visible w-full flex flex-col items-center">
              {/* Image */}
              <div className="mb-4 relative z-10 transform transition-all duration-300 group-hover:-translate-y-4 flex justify-center">
                <Image
                  src="/images/products/product-1.png"
                  alt="Nordic Chair"
                  width={320}
                  height={320}
                  className="relative z-10"
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
                <Image
                  src="/icon/cross.svg"
                  alt="close"
                  width={24}
                  height={24}
                  className="bg-black p-1 rounded-full"
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
