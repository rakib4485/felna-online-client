import React from 'react'
import { Hero } from './Hero/Hero'
import { LiveSport } from './LiveSport/LiveSport'
import TariffSection from './TraiffSection/TraiffSection'
import ServiceAvailability from './ServiceAvailability/ServiceAvailability'
import TestimonialsSection from './TestimonialSection/TestimonialSection'
import TestInternetSection from './TestInternetSection/TestInternetSection'
import FeaturedShowsSection from './FeaturedShowsSection/FeaturedShowsSection'
import SofaSection from './SofaSection/SofaSection'
import PartnerLogos from './PartnerLogos/PartnerLogos'
import ProductSlider from './ProductSlide/ProductSlide'
import IconSection from './IconSection/IconSection'

export const Home = () => {
  return (
    <div class="main-wrapper">
            <div class="inner-page text-page margin-disabled">
                <div class="row centered">
                    <div class="col-xl-12 col-xs-12 text-page">
                        <article id="post-7925" class="post-7925 page type-page status-publish hentry">
                            <div class="entry-content clearfix" id="entry-div">
                                <Hero/>
                                <div class="vc_row-full-width vc_clearfix"></div>
                                <IconSection/>
                                <LiveSport />
                                <div class="vc_row-full-width vc_clearfix"></div>
                                <TariffSection />
                                <div class="vc_row-full-width vc_clearfix"></div>
                                <ServiceAvailability/>
                                <div class="vc_row-full-width vc_clearfix"></div>
                                <TestimonialsSection/>
                                <div class="vc_row-full-width vc_clearfix"></div>
                                <TestInternetSection/>
                                <div class="vc_row-full-width vc_clearfix"></div>
                                <FeaturedShowsSection/>
                                <div class="vc_row-full-width vc_clearfix"></div>
                                <SofaSection/>
                                <div class="vc_row-full-width vc_clearfix"></div>
                                <PartnerLogos/>
                                <ProductSlider/>
                                <div class="vc_row-full-width vc_clearfix"></div>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </div>
  )
}
