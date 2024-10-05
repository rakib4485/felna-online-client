import React, { useEffect } from 'react';
// import Swiper from 'swiper';
// import 'swiper/swiper-bundle.css';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import { Autoplay } from 'swiper/modules';

const testimonials = [
    {
        name: "Patric Stone",
        image: "wp-content/uploads/2017/02/01-110x110.jpg",
        text: "Nullam orci dui, dictum et magna sollicitudin, tempor blandit erat. Maecenas suscipit tellus sit amet augue placerat fringilla a id lacus. Morbi viverra volutpat ex, id pellentesque felis volutpat eu. Etiam mattis laoreet leo sed accumsan. Fusce tincidunt in leo lacinia condimentum."
    },
    {
        name: "Hugo James",
        image: "wp-content/uploads/2017/02/02-110x110.jpg",
        text: "Maecenas ultricies felis sit amet libero scelerisque, ut eleifend leo mattis. Aliquam porta facilisis metus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."
    },
    {
        name: "Stefanie Rashford",
        image: "wp-content/uploads/2017/02/03-110x110.jpg",
        text: "Morbi viverra volutpat ex, id pellentesque felis volutpat eu. Duis et tellus imperdiet, lacinia risus id, tincidunt ipsum. Integer euismod elit vel nibh commodo, at consequat nisl rhoncus. Etiam mattis laoreet leo sed accumsan. Aliquam tempor lorem odio, non aliquam nunc egestas in."
    },
    {
        name: "Cassie Carleton",
        image: "wp-content/uploads/2017/02/05-110x110.jpg",
        text: "Nullam orci dui, dictum et magna sollicitudin, tempor blandit erat. Maecenas suscipit tellus sit amet augue placerat fringilla a id lacus. Fusce tincidunt in leo lacinia condimentum. Donec placerat, orci vel consequat mattis, sapien lacus pretium mi, sed lacinia dolor nibh non mi."
    },
    {
        name: "Coby Sue",
        image: "wp-content/uploads/2017/02/06-110x110.jpg",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam facilisis at turpis eu faucibus. In dignissim, enim eu ornare aliquet, metus ex tempor neque, sit amet efficitur turpis lorem et odio."
    }
];

const TestimonialsSection = () => {
    // useEffect(() => {
    //     // Initialize Swiper
    //     const swiper = new Swiper('.ltx-swiper-slider', {
    //         slidesPerView: 1,
    //         slidesPerGroup: 1,
    //         loop: true,
    //         autoplay: {
    //             delay: 4000,
    //             disableOnInteraction: false,
    //         },
    //         speed: 1000,
    //         pagination: {
    //             el: '.swiper-pagination',
    //             clickable: true,
    //         },
    //     });

    //     return () => {
    //         if (swiper) swiper.destroy();
    //     };
    // }, []);
    return (
        <section className="vc_section" data-vc-full-width="true" data-vc-full-width-init="false" data-vc-stretch-content="true">
            <div className="vc_row wpb_row vc_row-fluid">
                <div className="wpb_column vc_column_container vc_col-sm-12">
                    <div className="vc_column-inner">
                        <div className="wpb_wrapper">
                            {/* Spacer */}
                            <div className="es-resp">
                                <div className="visible-xl" style={{ height: '48px' }}></div>
                                <div className="hidden-xl hidden-md hidden-sm hidden-ms hidden-xs" style={{ height: '48px' }}></div>
                                <div className="visible-md" style={{ height: '48px' }}></div>
                                <div className="visible-sm" style={{ height: '48px' }}></div>
                                <div className="visible-ms" style={{ height: '32px' }}></div>
                                <div className="visible-xs" style={{ height: '32px' }}></div>
                            </div>

                            {/* Header */}
                            <div className="heading header-subheader align-center subcolor-main transform-default has-subheader theme-icon-second">
                                <h6 className="subheader">Testimonials</h6>
                                <h2 className="header" data-text="What our clients say">What our clients say</h2>
                            </div>

                            {/* Testimonials Slider */}
                            <div className="ltx-swiper-slider-wrapper">
                                <div className="ltx-swiper-slider swiper-container ltx-testimonials-list layout- font-weight-bold" id="like_sc_testimonials_1567371945" data-arrows="sides" data-autoplay="4000" data-autoplay-interaction="1" data-loop="1" data-speed="1000" data-effect="slide" data-slides-per-group="1">
                                    <div className="swiper-wrapper">
                                        <Swiper
                                            spaceBetween={30}
                                            centeredSlides={true}
                                            autoplay={{
                                                delay: 2500,
                                            }}
                                            loop={true}
                                            modules={[Autoplay]}
                                            className="mySwiper"
                                        >
                                            {testimonials.map((testimonial, index) => (
                                                <SwiperSlide key={index}>
                                                    <div className="ltx-item swiper-slide" >
                                                        <div className="inner">
                                                            <div className="author">
                                                                <div className="image">
                                                                    <img width="110" height="110" src={testimonial.image} alt={testimonial.name} />
                                                                </div>
                                                                <div className="header">{testimonial.name}</div>
                                                            </div>
                                                            <div className="text">
                                                                <p>{testimonial.text}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>

                                            ))}
                                        </Swiper>

                                    </div>
                                </div>
                            </div>

                            {/* Spacer */}
                            <div className="es-resp">
                                <div className="visible-xl" style={{ height: '64px' }}></div>
                                <div className="hidden-xl hidden-md hidden-sm hidden-ms hidden-xs" style={{ height: '64px' }}></div>
                                <div className="visible-md" style={{ height: '64px' }}></div>
                                <div className="visible-sm" style={{ height: '64px' }}></div>
                                <div className="visible-ms" style={{ height: '32px' }}></div>
                                <div className="visible-xs" style={{ height: '32px' }}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
