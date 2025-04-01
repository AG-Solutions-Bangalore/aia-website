import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation } from 'swiper/modules'
import SectionTitleTwo from '../../components/SectionTitle/SectionTitleTwo'
import PrevArrow from '../../components/SVG/PrevArrow'
import NextArrow from '../../components/SVG/NextArrow'
import 'swiper/css'


// import local image 
import alumni1 from '../../assets/img/alumni/alumni (1).jpg'
import alumni2 from '../../assets/img/alumni/alumni (2).jpg'
import alumni3 from '../../assets/img/alumni/alumni (3).jpg'
import alumni4 from '../../assets/img/alumni/alumni (4).jpg'
import alumni5 from '../../assets/img/alumni/alumni (5).jpg'
import alumni6 from '../../assets/img/alumni/alumni (6).jpg'
import alumni7 from '../../assets/img/alumni/alumni (7).jpg'
import alumni8 from '../../assets/img/alumni/alumni (8).jpg'
import alumni9 from '../../assets/img/alumni/alumni (9).jpg'
import alumni10 from '../../assets/img/alumni/alumni (10).jpg'
import alumni11 from '../../assets/img/alumni/alumni (11).jpg'
import alumni12 from '../../assets/img/alumni/alumni (12).jpg'
import alumni13 from '../../assets/img/alumni/alumni (13).jpg'
import alumni14 from '../../assets/img/alumni/alumni (14).jpg'
import alumni15 from '../../assets/img/alumni/alumni (15).jpg'

const AlumniWork = () => {
    const alumniImages = [
        alumni1, alumni2, alumni3, alumni4, alumni5,
        alumni6, alumni7, alumni8, alumni9, alumni10,
        alumni11, alumni12, alumni13, alumni14, alumni15,
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
                slidesPerView: 6,
                spaceBetween: 25
            },
            1200: {
                slidesPerView: 6,
                spaceBetween: 20
            },
            768: {
                slidesPerView: 3,
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
                                    height: '110px',
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
                                            objectFit: 'contain',
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
                                    height: '110px',
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
                                            objectFit: 'contain',
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