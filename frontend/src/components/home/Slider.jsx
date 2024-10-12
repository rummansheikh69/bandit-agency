import React, { useRef } from "react";
import { Pagination, Scrollbar, A11y } from "swiper/modules";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function Slider() {
  const images = [
    { id: 1, src: "/p1.jpeg", alt: "Image 1" },
    { id: 2, src: "/p2.jpeg", alt: "Image 2" },
    { id: 3, src: "/p3.jpeg", alt: "Image 3" },
    { id: 3, src: "/p4.jpeg", alt: "Image 3" },
    { id: 3, src: "/p5.jpeg", alt: "Image 3" },
    { id: 3, src: "/p6.jpeg", alt: "Image 3" },
    { id: 3, src: "/p7.jpeg", alt: "Image 3" },
    { id: 3, src: "/p8.jpg", alt: "Image 3" },
    { id: 3, src: "/p9.jpg", alt: "Image 3" },
    { id: 3, src: "/p10.jpg", alt: "Image 3" },
    { id: 3, src: "/p11.jpg", alt: "Image 3" },
    { id: 3, src: "/p12.jpg", alt: "Image 3" },
    { id: 3, src: "/p13.jpg", alt: "Image 3" },
    { id: 3, src: "/p14.jpg", alt: "Image 3" },
  ];

  // Create refs for swiper instance and navigation buttons
  const swiperRef = useRef(null);

  return (
    <div className="relative w-full rounded-md overflow-hidden">
      <Swiper
        modules={[Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => (swiperRef.current = swiper)} // Get Swiper instance
        className="w-full h-full"
      >
        {images.map((image) => (
          <SwiperSlide key={image.id} className="w-full h-[410px]">
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Previous Button */}
      <button
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-gray-300 p-2 rounded-full"
        onClick={() => swiperRef.current.slidePrev()} // Slide to previous
      >
        <FiChevronLeft className="text-black text-2xl" />
      </button>

      {/* Custom Next Button */}
      <button
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-gray-300 p-2 rounded-full"
        onClick={() => swiperRef.current.slideNext()} // Slide to next
      >
        <FiChevronRight className="text-black text-2xl" />
      </button>
    </div>
  );
}

export default Slider;
