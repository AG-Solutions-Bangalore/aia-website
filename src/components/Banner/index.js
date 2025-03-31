import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation } from 'swiper/modules';
import ModalVideo from 'react-modal-video';
import { useVideoContext } from '../../context/VideoContext';
import SingleBanner from './SingleBanner';

import sliderImg1 from '../../assets/img/slider/banner/banner10.jpg';
import sliderImg2 from '../../assets/img/slider/banner/banner11.jpg';
import sliderImg3 from '../../assets/img/slider/banner/banner2.jpg';
import sliderImg4 from '../../assets/img/slider/banner/banner4.jpg';
import sliderImg5 from '../../assets/img/slider/banner/banner7.jpg';
import sliderImg6 from '../../assets/img/slider/banner/banner8.png';
import sliderImg7 from '../../assets/img/slider/banner/home_bgsection1.jpg';
import sliderImg8 from '../../assets/img/slider/banner/home_slider_bg.jpg';

const BannerSlider = () => {
  const { swiperRef, isOpen, setOpen, videoId, startAutoplay, stopAutoplay } =
    useVideoContext();

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.autoplay.start();
    }
  }, [swiperRef]);

  const sliderOption = {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 4000,
    },
    navigation: {
      nextEl: '.slider-next',
      prevEl: '.slider-prev',
    },
    effect: 'fade',
  };

  return (
    <div className="swiper-container ed-slider-3-active">
      <ModalVideo
        channel="youtube"
        isOpen={isOpen}
        videoId={videoId}
        onClose={() => {
          setOpen(false);
          startAutoplay();
        }}
      />
      <Swiper
        ref={swiperRef}
        modules={[Autoplay, Navigation, EffectFade]}
        {...sliderOption}
        className="swiper-wrapper"
        onSlideChange={() => {
          stopAutoplay();
        }}
        onSlideChangeTransitionEnd={() => {
          startAutoplay();
        }}
      >
        <SwiperSlide className="swiper-slide">
          <SingleBanner sliderImage={sliderImg1}  altText="AIA Shining Stars - Academy of Internal Audit"  />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <SingleBanner sliderImage={sliderImg2} altText="Worried about revising 2000 pages book before exam? Academy of Internal Audit
" />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <SingleBanner sliderImage={sliderImg3} title="ENRICH YOUR PROFESSIONAL SKILL" altText="Enrich Your Professional skills - Academy of Internal Audit" />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <SingleBanner sliderImage={sliderImg4} title="WORRIED ABOUT REVISING 2000 PAGES BOOK BEFORE EXAM" altText="Worried about revising 2000 pages book before exam? Academy of Internal Audit
" />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <SingleBanner sliderImage={sliderImg5} altText="Worried about revising 2000 pages book before exam? Academy of Internal Audit
" />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <SingleBanner sliderImage={sliderImg6} altText="Worried about revising 2000 pages book before exam? Academy of Internal Audit
" />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <SingleBanner sliderImage={sliderImg7} title=" BECOME CERTIFIED FRAUD EXAMINER IN JUST 30 DAYS" altText="Become cfe in just 30 days - Academy of Internal Audit
" />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <SingleBanner sliderImage={sliderImg8} title="GO THROUGH OUR SHORT NOTES" altText="Go through our short notes - Academy of Internal Audit
" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default BannerSlider;
