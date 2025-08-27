"use client"

import { useEffect, useState } from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

export default function Home() {

  return (
    <div>
      <div className="bg-[#3b5d50] px-6 py-8 md:px-16 lg:px-32 xl:px-52 ">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">

          {/* Left */}
          <div className="text-white text-center lg:text-left max-w-xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Modern Interior <br /> Design Studio
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
            <Image
              src="/images/couch.png"
              alt="Couch"
              width={800}
              height={600}
              className="w-[250px] sm:w-[400px] md:w-[500px] lg:w-[650px] xl:w-[800px] object-contain"
            />
          </div>
        </div>
      </div>

      <div>
        <div className="lg:flex md:block text-center text-black px-6 py-24 md:px-16 lg:px-32 xl:px-52 justify-center">
          <div className="mt-12">
            <h2 className="text-3xl mb-4 ">Crafted with <br /> excellent material.</h2>
            <p className="mb-4 text-gray-600 leading-medium">Donec vitae odio quis nisl dapibus malesuada.<br /> Nullam ac aliquet velit. Aliquam vulputate velit <br /> imperdiet dolor tempor tristique.</p>
            <button className="px-6 py-3 rounded-4xl bg-[#2f2f2f] text-white">Explore</button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="relative group items-center text-center m-4 rounded-lg p-8 overflow-visible">

              {/* Image */}
              <div className="mb-4 relative z-10 transform transition-all duration-300 group-hover:-translate-y-4 flex justify-center">
                <Image
                  src="/images/products/product-1.png"
                  alt="Nordic Chair"
                  width={320}
                  height={320}
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
                <Image
                  src="/icon/cross.svg"
                  alt="close"
                  width={24}
                  height={24}
                  className="w-6 bg-black p-1 rounded-full"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 z-0 before:absolute before:bottom-0 before:left-0 before:w-full before:h-0 before:bg-[#dce5e4] before:transition-all before:duration-500 group-hover:before:h-3/5 before:content-['']"></div>
            </div>

            {/* Card 2 */}
            <div className="relative group items-center text-center m-4 rounded-lg p-8 overflow-visible">

              {/* Image */}
              <div className="mb-4 relative z-10 transform transition-all duration-300 group-hover:-translate-y-4 flex justify-center">
                <Image
                  src="/images/products/product-2.png"
                  alt="Nordic Chair"
                  width={320}
                  height={320}
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
                <Image
                  src="/icon/cross.svg"
                  alt="close"
                  width={24}
                  height={24}
                  className="w-6 bg-black p-1 rounded-full"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 z-0 before:absolute before:bottom-0 before:left-0 before:w-full before:h-0 before:bg-[#dce5e4] before:transition-all before:duration-500 group-hover:before:h-3/5 before:content-['']"></div>
            </div>

            {/* Card 3 */}
            <div className="relative group items-center text-center m-4 rounded-lg p-8 overflow-visible">

              {/* Image */}
              <div className="mb-4 relative z-10 transform transition-all duration-300 group-hover:-translate-y-4 flex justify-center">
                <Image
                  src="/images/products/product-3.png"
                  alt="Nordic Chair"
                  width={320}
                  height={320}
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
                <Image
                  src="/icon/cross.svg"
                  alt="close"
                  width={24}
                  height={24}
                  className="w-6 bg-black p-1 rounded-full"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 z-0 before:absolute before:bottom-0 before:left-0 before:w-full before:h-0 before:bg-[#dce5e4] before:transition-all before:duration-500 group-hover:before:h-3/5 before:content-['']"></div>
            </div>
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
              <Image src="/icon/truck.svg" alt="Truck" width={32} height={32} className="mb-2 w-8 h-8" />
              <h4 className="font-medium">Fast & Free shipping</h4>
              <p className="text-gray-500">
                Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit.
              </p>
            </div>
            <div className="pt-2">
              <Image src="/icon/bag.svg" alt="Bag" width={32} height={32} className="mb-2 w-8 h-8" />
              <h4 className="font-medium">Secure Shopping</h4>
              <p className="text-gray-500">
                Aliquam vulputate velit imperdiet dolor tempor tristique.
              </p>
            </div>
            <div className="pt-2">
              <Image src="/icon/support.svg" alt="Support" width={32} height={32} className="mb-2 w-8 h-8" />
              <h4 className="font-medium">24/7 Support</h4>
              <p className="text-gray-500">
                Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit.
              </p>
            </div>
            <div className="pt-2">
              <Image src="/icon/return.svg" alt="Return" width={32} height={32} className="mb-2 w-8 h-8" />
              <h4 className="font-medium">Easy Returns</h4>
              <p className="text-gray-500">
                Aliquam vulputate velit imperdiet dolor tempor tristique.
              </p>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src="/images/sample-1.jpg"
            alt="Furniture"
            width={600}
            height={400}
            className="w-full md:w-2/3 rounded-2xl object-cover"
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row px-6 py-16 md:px-16 lg:px-32 xl:px-72 mx-auto gap-12">
        {/* Image grid */}
        <div className="grid grid-cols-2 gap-4 w-full md:w-2/3 relative">
          {/* Left big image */}
          <div className="row-span-2">
            <Image
              src="/images/img-grid-1.jpg"
              alt=""
              width={500}
              height={600}
              className="rounded-2xl w-full h-4/5 object-cover"
            />
          </div>

          {/* Right top image */}
          <div>
            <Image
              src="/images/img-grid-2.jpg"
              alt=""
              width={300}
              height={300}
              className="rounded-2xl w-full h-full object-cover"
            />
          </div>

          {/* Right bottom image overlapping left one */}
          <div className="-ml-10 relative z-20">
            <Image
              src="/images/img-grid-3.jpg"
              alt=""
              width={300}
              height={300}
              className="rounded-2xl w-full h-4/5 object-cover shadow-lg"
            />
          </div>
        </div>

        {/* Text section */}
        <div className="w-full md:w-1/2 flex flex-col">
          <h1 className="text-3xl md:text-4xl mb-6 leading-snug">
            We Help You Make Modern Interior Design
          </h1>
          <p className="leading-7 text-sm md:text-base mb-6">
            Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada.
            Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.
            Pellentesque habitant morbi tristique senectus et netus et malesuada
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div className="flex items-center">
              <Image src="/icon/dot.png" alt="" width={16} height={16} className="rounded-full w-4 h-4 mr-2" />
              <p className="text-sm">Donec vitae odio quis nisl dapibus malesuada</p>
            </div>
            <div className="flex items-center">
              <Image src="/icon/dot.png" alt="" width={16} height={16} className="rounded-full w-4 h-4 mr-2" />
              <p className="text-sm">Donec vitae odio quis nisl dapibus malesuada</p>
            </div>
            <div className="flex items-center">
              <Image src="/icon/dot.png" alt="" width={16} height={16} className="rounded-full w-4 h-4 mr-2" />
              <p className="text-sm">Donec vitae odio quis nisl dapibus malesuada</p>
            </div>
            <div className="flex items-center">
              <Image src="/icon/dot.png" alt="" width={16} height={16} className="rounded-full w-4 h-4 mr-2" />
              <p className="text-sm">Donec vitae odio quis nisl dapibus malesuada</p>
            </div>
          </div>

          <button className="px-6 py-3 rounded-full bg-black text-white w-fit">
            Explore
          </button>
        </div>
      </div>

      <div className="flex flex-wrap w-fit mx-auto m-2 p-3 pb-20">
        <div className="flex items-center mx-auto">
          <div>
            <div>
              <Image src="/images/products/product-1.png" alt="" width={144} height={144} className="w-36" />
            </div>
          </div>
          <div className="m-2">
            <h4 className="text-xl">Nordic chair</h4>
            <p className="text-sm">Donec facilisis quam ut purus <br />rutrum lobortis. Donec vitae odio</p>
            <a href="" className="text-sm">Read more</a>
          </div>
        </div>

        <div className="flex items-center m-2 p-3 mx-auto">
          <div>
            <div>
              <Image src="/images/products/product-2.png" alt="" width={144} height={144} className="w-36" />
            </div>
          </div>
          <div className="m-2">
            <h4 className="text-xl">Nordic chair</h4>
            <p className="text-sm">Donec facilisis quam ut purus <br /> rutrum lobortis. Donec vitae odio</p>
            <a href="" className="text-sm">Read more</a>
          </div>
        </div>

        <div className="flex items-center m-2 p-3 mx-auto">
          <div>
            <div>
              <Image src="/images/products/product-3.png" alt="" width={144} height={144} className="w-36" />
            </div>
          </div>
          <div className="m-2">
            <h4 className="text-xl">Nordic chair</h4>
            <p className="text-sm">Donec facilisis quam ut purus <br />rutrum lobortis. Donec vitae odio</p>
            <a href="" className="text-sm">Read more</a>
          </div>
        </div>
      </div>

      <div>
        <h1 className="text-4xl text-center py-4 ">Testimonials</h1>

        <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
          <SwiperSlide className='text-center mb-15'>
            <div className='mx-auto w-fit mb-4'>
              “Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. <br />
              Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor <br />
              tempor tristique. Pellentesque habitant morbi tristique senectus et netus et <br />
              malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque.”
            </div>
            <div className=''>
              <div className='w-fit mx-auto '>
                <Image src="/images/person-1.png" width={80} height={80} className='w-20 rounded-4xl ' alt="" />
              </div>
              <p>maria jones</p>
              <p>CEO. Co-founder,XYZ Inc.</p>
            </div>
          </SwiperSlide>

          <SwiperSlide className='text-center'>
            <div className='mx-auto w-fit mb-4'>
              “Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. <br />
              Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor <br />
              tempor tristique. Pellentesque habitant morbi tristique senectus et netus et <br />
              malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque.”
            </div>
            <div className=''>
              <div className='w-fit mx-auto '>
                <Image src="/images/person-1.png" width={80} height={80} className='w-20 rounded-4xl ' alt="" />
              </div>
              <p>maria jones</p>
              <p>CEO. Co-founder,XYZ Inc.</p>
            </div>
          </SwiperSlide>

          <SwiperSlide className='text-center'>
            <div className='mx-auto w-fit mb-4'>
              “Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. <br />
              Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor <br />
              tempor tristique. Pellentesque habitant morbi tristique senectus et netus et <br />
              malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque.”
            </div>
            <div className=''>
              <div className='w-fit mx-auto '>
                <Image src="/images/person-1.png" width={80} height={80} className='w-20 rounded-4xl ' alt="" />
              </div>
              <p>maria jones</p>
              <p>CEO. Co-founder,XYZ Inc.</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className='mb-44 '>
        <div className='flex flex-col md:flex-row px-6 pt-20 md:px-16 lg:px-32 xl:px-72 mx-auto gap-12'>
          <div className='text-4xl'>Recent Blog</div>
          <div className='ml-auto'><a href="">view all posts</a></div>
        </div>
        <div className='flex flex-col md:flex-row px-6 py-16 md:px-16 lg:px-32 xl:px-72 mx-auto gap-12 '>
          <div>
            <div>
              <Image src="/images/post-1.jpg" width={400} height={300} alt="" className='rounded-2xl w-full' />
            </div>
            <p className='m-1 font-bold'>First Time Home Owner Ideas</p>
            <span className='m-1'>by <span className='font-bold'>Kristin Watson</span> on Dec 19, 2021</span>
          </div>
          <div>
            <div>
              <Image src="/images/post-2.jpg" width={400} height={300} alt="" className='rounded-2xl w-full' />
            </div>
            <p className='m-1 font-bold'>First Time Home Owner Ideas</p>
            <span className='m-1'>by <span className='font-bold'>Kristin Watson</span> on Dec 19, 2021</span>
          </div>
          <div>
            <div>
              <Image src="/images/post-3.jpg" width={400} height={300} className='rounded-2xl w-full' alt="" />
            </div>
            <p className='m-1 font-bold'>First Time Home Owner Ideas</p>
            <span className='m-1'>by <span className='font-bold'>Kristin Watson</span> on Dec 19, 2021</span>
          </div>
        </div>
      </div>
    </div>
  )
} 