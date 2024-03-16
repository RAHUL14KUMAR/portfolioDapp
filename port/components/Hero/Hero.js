"use client";

import React, { useEffect } from 'react';
import Image from 'next/image';
import './style.css'; // Create a CSS file for custom styles
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const Hero = () => {

  
return (
  <>
  <Swiper
    slidesPerView={8}
    spaceBetween={30}
    pagination={{
      clickable: true,
      hoverable: true,
    }}
    modules={[Pagination]}
    loop={true}
    className="mySwiper bg-blue-100 p-2 flex justify-center items-center"
  >
    <SwiperSlide>
      <div className='border-4 border-blue-900 p-2 bg-blue-950 rounded-full swipe'>
      {/* <Image src="/express.png" alt="/logo.jpeg" width={20} height={20} className="nav rounded-full" /> */}
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div className='border-4 border-blue-900 p-2 bg-blue-950 rounded-full swipe'>
      {/* <Image src="/git.png" alt="/logo.jpeg" width={54} height={44} className="nav" /> */}
      </div>
    </SwiperSlide>
    <SwiperSlide><div  className='border-4 border-blue-900 p-2 bg-blue-950 rounded-full swipe'>
      {/* <Image src="/mern.jpg" alt="/logo.jpeg" width={54} height={44} className="nav" /> */}
      </div>
    </SwiperSlide>
    <SwiperSlide><div className='border-4 border-blue-900 p-2 bg-blue-950 rounded-full swipe'>
      {/* <Image src="/mongo.jpg" alt="/logo.jpeg" width={54} height={44} className="nav" /> */}
      </div>
    </SwiperSlide>
    <SwiperSlide><div className='border-4 border-blue-900 p-2 bg-blue-950 rounded-full swipe'>
      {/* <Image src="/next.svg" alt="/logo.jpeg" width={54} height={44} className="nav" /> */}
      </div>
    </SwiperSlide>
    <SwiperSlide><div className='border-4 border-blue-900 p-2 bg-blue-950 rounded-full swipe'>
      {/* <Image src="/node.png" alt="/logo.jpeg" width={54} height={44} className="nav" /> */}
      </div>
    </SwiperSlide>
    <SwiperSlide><div className='border-4 border-blue-900 p-2 bg-blue-950 rounded-full swipe'>
      {/* <Image src="/port.png" alt="/logo.jpeg" width={54} height={44} className="nav" /> */}
      </div>
    </SwiperSlide>
    <SwiperSlide><div className='border-4 border-blue-900 p-2 bg-blue-950 rounded-full swipe'>
      {/* <Image src="/prisma.png" alt="/logo.jpeg" width={54} height={44} className="nav" /> */}
      </div>
    </SwiperSlide>
    <SwiperSlide><div className='border-4 border-blue-900 p-2 bg-blue-950 rounded-full swipe'>
      {/* <Image src="/react.jpg" alt="/logo.jpeg" width={54} height={44} className="nav" /> */}
      </div>
    </SwiperSlide>
    <SwiperSlide><div className='border-4 border-blue-900 p-2 bg-blue-950 rounded-full swipe'>
      {/* <Image src="/redux.png" alt="/logo.jpeg" width={54} height={44} className="nav" /> */}
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div className='border-4 border-blue-900 p-2 bg-blue-950 rounded-full swipe'>
      {/* <Image src="/serverless.jpg" alt="/logo.jpeg" width={54} height={44} className="nav" /> */}
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div className='border-4 border-blue-900 p-2 bg-blue-950 rounded-full swipe'>
      {/* <Image src="/socket.jpg" alt="/logo.jpeg" width={54} height={44} className="nav" /> */}
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div className='border-4 border-blue-900 p-2 bg-blue-950 rounded-full swipe'>
      {/* <Image src="/solidity.png" alt="/logo.jpeg" width={54} height={44} className="nav" /> */}
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div className='border-4 border-blue-900 p-2 bg-blue-950 rounded-full swipe'>
      {/* <Image src="/typescr</div>ipt.png" alt="/logo.jpeg" width={54} height={44} className="nav" /> */}
      </div>
    </SwiperSlide>
  </Swiper>
</>
);
};

export default Hero;