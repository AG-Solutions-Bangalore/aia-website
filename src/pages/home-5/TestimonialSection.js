import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import SectionTitle from '../../components/SectionTitle';
import SingleTestimonialThree from '../../components/Testimonial/SingleTestimonialThree';
import BaseUrl, { ImageTestimonial } from '../../utils/BaseUrl';

const Testimonial = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await fetch(`${BaseUrl}/api/web-fetch-testimonials`);
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        setTestimonials(data.testimonials);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching testimonials:', error);
        setError(error.message);
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  const sliderOption = {
    speed: 1500,
    loop: true,
    slidesPerView: '3',
    spaceBetween: 50,
    autoplay: {
      delay: 5000,
    },
    breakpoints: {
      1400: {
        slidesPerView: 3,
      },
      992: {
        slidesPerView: 2,
      },
      0: {
        slidesPerView: 1,
      },
    },
  };

  return (
    <div className="it-testimonial-area ed-testimonial-style-2 pt-120 pb-120 fix p-relative">
      <div className="container">
        <div className="it-testimonial-title-wrap mb-65">
          <div className="row justify-content-center">
            <div className="col-xl-10">
              <SectionTitle
                itemClass="it-testimonial-title-box text-center"
                subTitleClass="ed-section-subtitle"
                subTitle="testimonial"
                titleClass="ed-section-title"
                title="What Our Students Say About Us"
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-12">
            <div className="ed-testimonial-wrapper">
              {loading ? (
                <div className="text-center">Loading testimonials...</div>
              ) : error ? (
                <div className="text-center text-danger">Error loading testimonials: {error}</div>
              ) : (
                <div className="swiper-container ed-testimonial-active">
                  <Swiper
                    modules={[Autoplay]}
                    {...sliderOption}
                    className="swiper-wrapper"
                  >
                    {testimonials.map((testimonial) => (
                      <SwiperSlide key={testimonial.id} className="swiper-slide">
                        <SingleTestimonialThree
                          description={`"${testimonial.testimonials_description}"`}
                          authorAvatar={`${ImageTestimonial}/${testimonial.testimonials_image}`}
                          authorName={testimonial.testimonials_name}
                          designation={testimonial.testimonials_education}
                          altText={testimonial.testimonials_image_alt}
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;