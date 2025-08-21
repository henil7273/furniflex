"use client"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';


export default function blog() {
    return (
        <div>
            <div className='mb-24 '>
                <div className='flex flex-col md:flex-row px-6 pt-20 md:px-16 lg:px-32 xl:px-72 mx-auto gap-12'>
                    <div className='text-4xl'>Recent Blog</div>
                </div>
                <div className='flex flex-col md:flex-row px-6 py-16 md:px-16 lg:px-32 xl:px-72 mx-auto gap-12 '>
                    <div>
                        <div><img src="/images/post-1.jpg" alt="" className='rounded-2xl' /></div>
                        <p className='m-1 font-bold'>First Time Home Owner Ideas</p>
                        <span className='m-1'>by <span className='font-bold'>Kristin Watson</span> on Dec 19, 2021</span>
                    </div>
                    <div>
                        <div><img src="/images/post-2.jpg" alt="" className='rounded-2xl' /></div>
                        <p className='m-1 font-bold'>First Time Home Owner Ideas</p>
                        <span className='m-1'>by <span className='font-bold'>Kristin Watson</span> on Dec 19, 2021</span>
                    </div>
                    <div>
                        <div><img src="/images/post-3.jpg" className='rounded-2xl' alt="" /></div>
                        <p className='m-1 font-bold'>First Time Home Owner Ideas</p>
                        <span className='m-1'>by <span className='font-bold'>Kristin Watson</span> on Dec 19, 2021</span>
                    </div>
                </div>
                <div className='flex flex-col md:flex-row px-6 py-16 md:px-16 lg:px-32 xl:px-72 mx-auto gap-12 '>
                    <div>
                        <div><img src="/images/post-2.jpg" alt="" className='rounded-2xl' /></div>
                        <p className='m-1 font-bold'>First Time Home Owner Ideas</p>
                        <span className='m-1'>by <span className='font-bold'>Kristin Watson</span> on Dec 19, 2021</span>
                    </div>
                    <div>
                        <div><img src="/images/post-3.jpg" alt="" className='rounded-2xl' /></div>
                        <p className='m-1 font-bold'>First Time Home Owner Ideas</p>
                        <span className='m-1'>by <span className='font-bold'>Kristin Watson</span> on Dec 19, 2021</span>
                    </div>
                    <div>
                        <div><img src="/images/post-1.jpg" className='rounded-2xl' alt="" /></div>
                        <p className='m-1 font-bold'>First Time Home Owner Ideas</p>
                        <span className='m-1'>by <span className='font-bold'>Kristin Watson</span> on Dec 19, 2021</span>
                    </div>
                </div>
                <div className='flex flex-col md:flex-row px-6 py-16 md:px-16 lg:px-32 xl:px-72 mx-auto gap-12 '>
                    <div>
                        <div><img src="/images/post-3.jpg" alt="" className='rounded-2xl' /></div>
                        <p className='m-1 font-bold'>First Time Home Owner Ideas</p>
                        <span className='m-1'>by <span className='font-bold'>Kristin Watson</span> on Dec 19, 2021</span>
                    </div>
                    <div>
                        <div><img src="/images/post-1.jpg" alt="" className='rounded-2xl' /></div>
                        <p className='m-1 font-bold'>First Time Home Owner Ideas</p>
                        <span className='m-1'>by <span className='font-bold'>Kristin Watson</span> on Dec 19, 2021</span>
                    </div>
                    <div>
                        <div><img src="/images/post-2.jpg" className='rounded-2xl' alt="" /></div>
                        <p className='m-1 font-bold'>First Time Home Owner Ideas</p>
                        <span className='m-1'>by <span className='font-bold'>Kristin Watson</span> on Dec 19, 2021</span>
                    </div>
                </div>
            </div>

            <div className='mb-30'>
                <h1 className="text-4xl text-center py-4 ">Testimonials</h1>

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