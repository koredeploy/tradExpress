import React from 'react'
import slides from "../components/data";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Swipercarousel = () => {
return (
    <>
    <Swiper
    spaceBetween={30}
    centeredSlides={true}
    autoplay={{
        delay: 2500,
        disableOnInteraction: false,
    }}
    pagination={{
        clickable: true,
    }}
    navigation={true}
    modules={[Autoplay, Pagination, Navigation]}
    >
        {slides.map((slide)=>( <SwiperSlide key={slide.id}>
            <div>
                <img src={slide.image} alt="" />
            </div>
            </SwiperSlide>
        ))}
    </Swiper>

    
    </>
  )
}

export default Swipercarousel

