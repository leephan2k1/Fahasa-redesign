'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import { useSwiper } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { MajesticonsChevronDownLine } from '../icons/chevron-down';

export default function BannerSlider() {
  return (
    <>
      <Swiper
        loop
        pagination={{
          clickable: true,
        }}
        navigation
        modules={[Navigation, Pagination]}
        className="h-full rounded-2xl overflow-hidden relative"
      >
        <NavigationSlider
          className="absolute left-4 top-1/2 rounded-full bg-white p-4 z-20"
          direction="next"
        />
        <NavigationSlider
          className="absolute right-4 top-1/2 rounded-full bg-white p-4 z-20"
          direction="prev"
        />

        <SwiperSlide>
          <figure className="relative full-size">
            <Image
              fill
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              src={
                'https://cdn0.fahasa.com/media/magentothem/banner7/McBooksT6V2_Slide_840x320_Ver1_1.jpg'
              }
              alt="banner"
              className="absolute inset-0 bg-center bg-no-repeat bg-cover"
            />
          </figure>
        </SwiperSlide>

        <SwiperSlide>
          <figure className="relative full-size">
            <Image
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              src={
                'https://cdn0.fahasa.com/media/magentothem/banner7/Fahasasalethu3_mainbanner_Bo1_Slider_840x320.jpg'
              }
              alt="banner"
              className="absolute"
            />
          </figure>
        </SwiperSlide>

        <SwiperSlide>
          <figure className="relative full-size">
            <Image
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              src={
                'https://cdn0.fahasa.com/media/magentothem/banner7/CTKMThang6__840x320.jpg'
              }
              alt="banner"
              className="absolute"
            />
          </figure>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

function NavigationSlider({
  className,
  direction,
}: {
  className?: string;
  direction: 'next' | 'prev';
}) {
  const swiper = useSwiper();

  const handleClick = () => {
    if (direction === 'next') {
      swiper.slideNext();
    } else {
      swiper.slidePrev();
    }
  };

  return (
    <button onClick={handleClick} className={className}>
      <MajesticonsChevronDownLine
        className={direction === 'next' ? 'rotate-90' : '-rotate-90'}
      />
    </button>
  );
}
