import React from 'react';
import { Link } from 'react-router-dom';

const ServiceAvailability = () => {
    return (
        <div className="vc_row wpb_row vc_row-fluid vc_custom_1567457118460 vc_row-has-fill bg-color-theme_color bg-pos-center-center">
            <div className="wpb_column vc_column_container vc_col-sm-12">
                <div className="vc_column-inner">
                    <div className="wpb_wrapper">
                        {/* Spacer */}
                        <div className="es-resp">
                            <div style={{ height: '80px' }} className="visible-xl"></div>
                            <div style={{ height: '80px' }} className="hidden-xl hidden-md hidden-sm hidden-ms hidden-xs"></div>
                            <div style={{ height: '80px' }} className="visible-md"></div>
                            <div style={{ height: '80px' }} className="visible-sm"></div>
                            <div style={{ height: '64px' }} className="visible-ms"></div>
                            <div style={{ height: '64px' }} className="visible-xs"></div>
                        </div>
                        
                        <div className="ltx-content-width col-align-center" style={{ maxWidth: '850px' }}>
                            <div className="heading header-subheader align-center color-white subcolor-black">
                                <h2 className="header">
                                    <span> Check ability </span> to connect our services in your area
                                </h2>
                            </div>
                        </div>
                        
                        <div className="ltx-content-width col-align-center" style={{ maxWidth: '620px' }}>
                            <div className="ltx-contact-form-7 form-center form-transparent form-bg-transparent form-style- form-padding-none">
                                <div role="form" className="wpcf7" lang="en-US" dir="ltr">
                                    <form action="http://mirasat.like-themes.com/#wpcf7-f10403-p10393-o2" method="post" className="wpcf7-form" novalidate>
                                        <div style={{ display: 'none' }}>
                                            <input type="hidden" name="_wpcf7" value="10403" />
                                            <input type="hidden" name="_wpcf7_version" value="5.1.4" />
                                            <input type="hidden" name="_wpcf7_locale" value="en_US" />
                                            <input type="hidden" name="_wpcf7_unit_tag" value="wpcf7-f10403-p10393-o2" />
                                            <input type="hidden" name="_wpcf7_container_post" value="10393" />
                                        </div>
                                        <p>
                                            <span className="wpcf7-form-control-wrap your-address">
                                                <input
                                                    type="email"
                                                    name="your-address"
                                                    className="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email"
                                                    aria-required="true"
                                                    aria-invalid="false"
                                                    placeholder="Enter your address"
                                                    size="40"
                                                />
                                            </span>
                                            <span>
                                                <button type="submit" className="btn btn-lg btn-black color-hover-second">Get Started</button>
                                            </span>
                                        </p>
                                        <div className="wpcf7-response-output wpcf7-display-none"></div>
                                    </form>
                                </div>
                            </div>
                        </div>

                        {/* Spacer */}
                        <div className="es-resp">
                            <div style={{ height: '120px' }} className="visible-xl"></div>
                            <div style={{ height: '120px' }} className="hidden-xl hidden-md hidden-sm hidden-ms hidden-xs"></div>
                            <div style={{ height: '120px' }} className="visible-md"></div>
                            <div style={{ height: '120px' }} className="visible-sm"></div>
                            <div style={{ height: '90px' }} className="visible-ms"></div>
                            <div style={{ height: '90px' }} className="visible-xs"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceAvailability;
