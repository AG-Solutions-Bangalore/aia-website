import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation } from 'swiper/modules'
import SectionTitleTwo from '../../components/SectionTitle/SectionTitleTwo'
import PrevArrow from '../../components/SVG/PrevArrow'
import NextArrow from '../../components/SVG/NextArrow'
import SingleTeamThree from '../../components/Team/SingleTeamThree'
import BaseUrl, { ImageChannel } from '../../utils/BaseUrl'

const YoutubeChanel = () => {
    const [youtubeChannels, setYoutubeChannels] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchYoutubeChannels = async () => {
            try {
                const response = await fetch(`${BaseUrl}/api/web-fetch-youtubeChannel`)
                
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`)
                }
                
                const data = await response.json()
                setYoutubeChannels(data.youtubeChannel)
                setLoading(false)
            } catch (error) {
                console.error('Error fetching YouTube channels:', error)
                setError(error.message)
                setLoading(false)
            }
        }

        fetchYoutubeChannels()
    }, [])

    const handleChannelClick = (url) => {
        window.open(url, '_blank') // Opens in new tab
        // Alternatively: window.location.href = url (opens in same tab)
    }

    const sliderOption = {
        speed: 1500,
        loop: true,
        slidesPerView: '4',
        spaceBetween: 50,
        autoplay: {
          delay: 5000,
        },
        breakpoints: {
          1400: {
            slidesPerView: 4,
          },
          992: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          0: {
            slidesPerView: 1,
          },
        },
        navigation: {
          prevEl: '.slider-prev',
          nextEl: '.slider-next',
        },
    }

    return (
        <div
            id="it-team"
            className="ed-team-area grey-bg-4 p-relative fix z-index pt-110 pb-90"
        >
            <div className="container">
                <div className="it-team-title-wrap mb-40">
                    <div className="row align-items-center">
                        <div className="col-xl-6">
                            <SectionTitleTwo
                                itemClass="it-team-title-box"
                                subtitleClass="it-section-subtitle-5 orange"
                                icon="fa-light fa-book"
                                subtitle="YouTube"
                                titleClass="ed-section-title"
                                title="Our YouTube Channel"
                            />
                        </div>
                        <div className="col-xl-6">
                            <div  className="ed-team-arrow-box text-end">
                                <button className="slider-prev">
                                    <PrevArrow />
                                </button>
                                <button className="slider-next">
                                    <NextArrow />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ed-team-wrapper">
                    {loading ? (
                        <div className="text-center">Loading YouTube channels...</div>
                    ) : error ? (
                        <div className="text-center text-danger">Error: {error}</div>
                    ) : (
                        <div className="swiper-container ed-team-active">
                            <Swiper
                                modules={[Autoplay, Navigation]}
                                {...sliderOption}
                                className="swiper-wrapper"
                            >
                                {youtubeChannels.map((channel) => (
                                    <SwiperSlide 
                                        key={channel.id} 
                                        className="swiper-slide"
                                        onClick={() => handleChannelClick(channel.channel_link)}
                                        style={{ cursor: 'pointer' , }}
                                    >
                                        <SingleTeamThree
                                            teamImage={`${ImageChannel}/${channel.channel_img}`}
                                            // authorName={channel.channel_img_alt.replace('YouTube Video - AIA', '').trim()}
                                            // designation="YouTube Video"
                                          
                                        />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default YoutubeChanel