import React from 'react';
import { Link } from 'react-router-dom'; // Adjust if you're using links

export const Footer = () => {
    return (
        <div className="ltx-footer-wrapper">
            <div className="subscribe-wrapper">
                <div className="container">
                    <div className="subscribe-block">
                        <section className="vc_section">
                            <div className="vc_row wpb_row vc_row-fluid vc_row-o-content-middle vc_row-flex">
                                <div className="wpb_column vc_column_container vc_col-sm-12 vc_col-lg-5">
                                    <div className="vc_column-inner">
                                        <div className="wpb_wrapper">
                                            <div className="heading header-subheader align-left color-white subcolor-second transform-default has-subheader theme-icon-second icon-type-hidden vc_custom_1567362398923 heading-tag-h4">
                                                <h6 className="subheader">
                                                    Want to know about our offers first?
                                                </h6>
                                                <h4 className="header">
                                                    Subscribe to our newsletter
                                                </h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="wpb_column vc_column_container vc_col-sm-12 vc_col-lg-7 text-align-center-md-sm-ms">
                                    <div className="vc_column-inner">
                                        <div className="wpb_wrapper">
                                            <div className="wpb_text_column wpb_content_element">
                                                <div className="wpb_wrapper">
                                                    <form id="mc4wp-form-1" className="mc4wp-form mc4wp-form-806" method="post" data-id="806" data-name="Subscribe Form">
                                                        <div className="mc4wp-form-fields">
                                                            <div className="input-group">
                                                                <input type="email" name="EMAIL" placeholder="Your email ..." required />
                                                                <span className="input-group-append">
                                                                    <button className="btn color-hover-second" type="submit">Get Started</button>
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <input type="hidden" name="_mc4wp_timestamp" value="1727945245" />
                                                        <input type="hidden" name="_mc4wp_form_id" value="806" />
                                                        <input type="hidden" name="_mc4wp_form_element_id" value="mc4wp-form-1" />
                                                        <div className="mc4wp-response"></div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
            <section id="ltx-widgets-footer" className="ltx-fw">
                <div className="container">
                    <div className="row row-center">
                        <div className="col-md-8 text-align-center clearfix">
                            <div className="footer-widget-area">
                                <div id="text-14" className="widget widget_text">
                                    <div className="textwidget">
                                        <p>
                                            <Link to="/"><img src="wp-content/uploads/2017/02/logo_1x.png" alt="Mirasat logo"  /></Link>
                                            <br />
                                            Integer maximus accumsan nunc, sit amet tempor lectus facilisis eu. Cras vel elit felis. Vestibulum convallis ipsum id aliquam varius.
                                        </p>
                                    </div>
                                </div>
                                <div id="text-15" className="widget widget_text">
                                    <div className="textwidget">
                                        <div className="ltx-social ltx-nav-second ltx-type-">
                                            <ul>
                                                <li><Link to="#" target="_self" rel="noopener noreferrer"><span className="fa fa-twitter"></span></Link></li>
                                                <li><Link to="#" target="_self" rel="noopener noreferrer"><span className="fa fa-facebook-f"></span></Link></li>
                                                <li><Link to="#" target="_self" rel="noopener noreferrer"><span className="fa fa-instagram"></span></Link></li>
                                                <li><Link to="#" target="_self" rel="noopener noreferrer"><span className="fa fa-youtube"></span></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <footer className="copyright-block copyright-layout-default">
                <div className="container">
                    <p>
                        <Link to="https://themeforest.net/user/like-themes">Like-themes</Link> © All Rights Reserved - 2019 - <Link to="https://themeforest.net/user/like-themes">Purchase</Link>
                    </p>
                </div>
            </footer>
        </div>
    );
};
