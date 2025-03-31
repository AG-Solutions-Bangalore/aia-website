import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation } from 'swiper/modules'
import SectionTitleTwo from '../../components/SectionTitle/SectionTitleTwo'
import PrevArrow from '../../components/SVG/PrevArrow'
import NextArrow from '../../components/SVG/NextArrow'
import 'swiper/css'

const AlumniWork = () => {
    const alumniImages = [
        'https://aia.in.net/assets/images/alumni/alumni%20(1).jpg',
        'https://aia.in.net/assets/images/alumni/alumni%20(2).jpg',
        'https://aia.in.net/assets/images/alumni/alumni%20(3).jpg',
        'https://aia.in.net/assets/images/alumni/alumni%20(4).jpg',
        'https://aia.in.net/assets/images/alumni/alumni%20(5).jpg',
        'https://aia.in.net/assets/images/alumni/alumni%20(6).jpg',
        'https://aia.in.net/assets/images/alumni/alumni%20(7).jpg',
        'https://aia.in.net/assets/images/alumni/alumni%20(8).jpg',
        'https://aia.in.net/assets/images/alumni/alumni%20(9).jpg',
        'https://aia.in.net/assets/images/alumni/alumni%20(10).jpg',
        'https://aia.in.net/assets/images/alumni/alumni%20(11).jpg',
        'https://aia.in.net/assets/images/alumni/alumni%20(12).jpg',
        'https://aia.in.net/assets/images/alumni/alumni%20(13).jpg',
        'https://aia.in.net/assets/images/alumni/alumni%20(14).jpg',
        'https://aia.in.net/assets/images/alumni/alumni%20(15).jpg',
        'https://aia.in.net/assets/images/alumni1/alumni%20(16).jpg',
        'https://aia.in.net/assets/images/alumni1/alumni%20(17).jpg',
        'https://aia.in.net/assets/images/alumni1/alumni%20(18).jpg',
        'https://aia.in.net/assets/images/alumni1/alumni%20(19).jpg',
        'https://aia.in.net/assets/images/alumni1/alumni%20(20).jpg',
        'https://aia.in.net/assets/images/alumni1/alumni%20(21).jpg',
        'https://aia.in.net/assets/images/alumni1/alumni%20(22).jpg',
        'https://aia.in.net/assets/images/alumni1/alumni%20(23).jpg',
        'https://aia.in.net/assets/images/alumni1/alumni%20(24).jpg',
        'https://aia.in.net/assets/images/alumni1/alumni%20(25).jpg',
        'https://aia.in.net/assets/images/alumni1/alumni%20(26).jpg',
        'https://aia.in.net/assets/images/alumni1/alumni%20(27).jpg',
        'https://aia.in.net/assets/images/alumni1/alumni%20(28).jpg',
        'https://aia.in.net/assets/images/alumni1/alumni%20(29).jpg',
        'https://aia.in.net/assets/images/alumni1/alumni%20(30).jpg'
    ]

    const sliderOptions = {
        speed: 1500,
        loop: true,
        slidesPerView: 4,
        spaceBetween: 20,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        breakpoints: {
            1400: {
                slidesPerView: 4,
                spaceBetween: 25
            },
            1200: {
                slidesPerView: 3,
                spaceBetween: 20
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 15
            },
            576: {
                slidesPerView: 2,
                spaceBetween: 10
            },
            0: {
                slidesPerView: 1,
                spaceBetween: 10
            },
        }
    }

    return (
        <div className="ed-team-area grey-bg-4 p-relative fix z-index pt-110 pb-90">
            <div className="container">
                <div className="it-team-title-wrap mb-40">
                    <div className="row align-items-center">
                        <div className="col-xl-6">
                            <SectionTitleTwo
                                itemClass="it-team-title-box"
                                subtitleClass="it-section-subtitle-5 orange"
                                icon="fa-light fa-user-graduate"
                                subtitle="Our"
                                titleClass="ed-section-title"
                                title=" ALUMNI WORK FOR"
                            />
                        </div>
                    </div>
                </div>
                
                {/* Left to Right Slider with Dedicated Navigation */}
                <div className="position-relative mb-15 ">
                    <div className="d-flex justify-content-between align-items-center mb-1">
                        <h5 className="mb-0">Alumni Gallery</h5>
                        <div style={{
                          display: 'flex',
                        }} className="ed-team-arrow-box-alumini">
                            <button className="alumni-slider-prev-1 me-2">
                                <PrevArrow />
                            </button>
                            <button className="alumni-slider-next-1">
                                <NextArrow />
                            </button>
                        </div>
                    </div>
                    <Swiper
                        modules={[Autoplay, Navigation]}
                        {...sliderOptions}
                        navigation={{
                            prevEl: '.alumni-slider-prev-1',
                            nextEl: '.alumni-slider-next-1',
                        }}
                        autoplay={{
                            ...sliderOptions.autoplay,
                            reverseDirection: false
                        }}
                    >
                        {alumniImages.map((image, index) => (
                            <SwiperSlide key={`ltr-${index}`}>
                                <div className="alumni-img-container-alumni" style={{
                                    height: '150px',
                                    overflow: 'hidden',
                                    borderRadius: '8px',
                                    boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                                    position: 'relative'
                                }}>
                                    <img 
                                        src={image} 
                                        alt={`Alumni ${index + 1}`}
                                        loading="lazy"
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover',
                                            transition: 'transform 0.3s ease',
                                        }}
                                        className="img-hover-scale"
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                
                {/* Right to Left Slider with Dedicated Navigation */}
                <div className="position-relative">
                    <div className="d-flex justify-content-between align-items-center mb-1">
                        <h5 className="mb-0">More Alumni</h5>
                        <div style={{
                          display: 'flex',
                        }} className="ed-team-arrow-box-alumini">
                            <button className="alumni-slider-prev-2 me-2">
                                <PrevArrow />
                            </button>
                            <button className="alumni-slider-next-2">
                                <NextArrow />
                            </button>
                        </div>
                    </div>
                    <Swiper
                        modules={[Autoplay, Navigation]}
                        {...sliderOptions}
                        navigation={{
                            prevEl: '.alumni-slider-prev-2',
                            nextEl: '.alumni-slider-next-2',
                        }}
                        autoplay={{
                            ...sliderOptions.autoplay,
                            reverseDirection: true
                        }}
                    >
                        {[...alumniImages].reverse().map((image, index) => (
                            <SwiperSlide key={`rtl-${index}`}>
                                <div className="alumni-img-container-alumni" style={{
                                    height: '150px',
                                    overflow: 'hidden',
                                    borderRadius: '8px',
                                    boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                                    position: 'relative'
                                }}>
                                    <img 
                                        src={image} 
                                        alt={`Alumni ${index + 1}`}
                                        loading="lazy"
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover',
                                            transition: 'transform 0.3s ease',
                                        }}
                                        className="img-hover-scale"
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>

            {/* Add some CSS for better image rendering */}
            <style jsx>{`
                .alumni-img-container-alumni:hover .img-hover-scale {
                    transform: scale(1.05);
                }
                .ed-team-arrow-box-alumini button {
                    background: #fff;
                    border: 1px solid #ddd;
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: all 0.3s ease;
                }
                .ed-team-arrow-box-alumini button:hover {
                    background: var(--orange);
                    border-color: var(--orange);
                    color: #fff;
                }
                @media (max-width: 768px) {
                    .alumni-img-container-alumni {
                        height: 180px !important;
                    }
                }
                @media (max-width: 576px) {
                    .alumni-img-container-alumni {
                        height: 160px !important;
                    }
                    .ed-team-arrow-box-alumini button {
                        width: 35px;
                        height: 35px;
                    }
                }
            `}</style>
        </div>
    )
}

export default AlumniWork