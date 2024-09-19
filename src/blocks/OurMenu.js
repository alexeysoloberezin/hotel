import React from 'react';
import 'react-medium-image-zoom/dist/styles.css';
import 'swiper/css/navigation';
import useMediaQuery from "../hooks/useMediaQuery";
import {Autoplay, Navigation} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";

function OurMenu(props) {
    const isDesktop = useMediaQuery(false, '(min-width: 1340px)')
    const arr = [1, 1, 1, 1,1,1,1]

    return (
        <div className={"bg-dark lg:py-[200px] py-[100px]"}>
            <div className={"container lg:flex justify-between gap-[50px]"}>
                <div className={"flex flex-col max-w-[600px] gap-[30px] leading-normal"}>
                    <h2>Our Menu</h2>
                    <p>Begin your day with a revitalizing breakfast at Petal, where we offer an array of wholesome
                        options that
                        are as delicious as they are nutritious.</p>

                    <p> Our commitment to your well-being shines through in each carefully crafted dish, prepared with
                        the finest
                        ingredients to fuel your day ahead.</p>

                    <p> Our menu is an exquisite fusion of flavors, showcasing a dedication to freshness and innovation.
                        Indulge
                        in dishes that celebrate the season's finest ingredients, expertly prepared by our talented
                        culinary
                        team.</p>
                </div>
                <div className={" lg:w-[65%] lg:mt-0 mt-[30px] gap-[10px] shrink-0 defSwiper"}>
                    <Swiper
                        modules={[Autoplay, Navigation]}
                        navigation={true}
                        className={"!mb-[0px] mt-[0px]"}
                        loop={true}
                        autoplaySpeed={400}
                        autoplay={{
                            delay: 3500,
                            disableOnInteraction: false,
                        }}
                        slidesPerView={1}
                        spaceBetween={20}
                        breakpoints={{
                            1024: {
                                slidesPerView: 2,
                                spaceBetween: 20
                            },
                        }}
                    >
                        {arr.map((item, index) => (
                            <SwiperSlide key={index}>
                                <div className="slide-content min-h-[300px]">
                                    {isDesktop ? (
                                        <img src={`/menu/menu_${index + 1}.jpg`} className={""} alt="Menu 1"/>
                                    ) : (
                                        <img src={`/menu/menu_${index + 1}.jpg`} className={""} alt="Menu 1"/>
                                    )}

                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
}

export default OurMenu;