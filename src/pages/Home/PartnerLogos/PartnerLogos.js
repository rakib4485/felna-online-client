import React from 'react';
import { Link } from 'react-router-dom';

const PartnerLogos = () => {
    const partners = [
        { src: "wp-content/uploads/2019/09/partners-1-1.png", alt: "Partner 1" },
        { src: "wp-content/uploads/2019/09/partners-2.png", alt: "Partner 2" },
        { src: "wp-content/uploads/2019/09/partners-3.png", alt: "Partner 3" },
        { src: "wp-content/uploads/2019/09/partners-4.png", alt: "Partner 4" },
        { src: "wp-content/uploads/2019/09/partners-5.png", alt: "Partner 5" },
        { src: "wp-content/uploads/2019/09/partners-6.png", alt: "Partner 6" },
    ];

    return (
        <div className="vc_row wpb_row vc_row-fluid">
            <div className="wpb_column vc_column_container vc_col-sm-12">
                <div className="vc_column-inner">
                    <div className="wpb_wrapper">
                        <div className="es-resp">
                            <div className="visible-xl" style={{ height: "200px" }}></div>
                            <div className="hidden-xl hidden-md hidden-sm hidden-ms hidden-xs" style={{ height: "200px" }}></div>
                            <div className="visible-md" style={{ height: "185px" }}></div>
                            <div className="visible-sm" style={{ height: "185px" }}></div>
                            <div className="visible-ms" style={{ height: "140px" }}></div>
                            <div className="visible-xs" style={{ height: "140px" }}></div>
                        </div>
                        <div className="ltx-partners ltx-hover-logos layout-ltx-logos-6" id="like_sc_header_421300295">
                            <div className="row centered">
                                {partners.map((partner, index) => (
                                    <div className="col-md-2 col-ms-6 col-xs-6 col-sm-4 partners-wrap center-flex" key={index}>
                                        <div className="partners-item item center-flex">
                                            <Link to="#">
                                                <img src={partner.src} className="image" alt={partner.alt} />
                                            </Link>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="es-resp">
                            <div className="visible-xl" style={{ height: "90px" }}></div>
                            <div className="hidden-xl hidden-md hidden-sm hidden-ms hidden-xs" style={{ height: "90px" }}></div>
                            <div className="visible-md" style={{ height: "64px" }}></div>
                            <div className="visible-sm" style={{ height: "64px" }}></div>
                            <div className="visible-ms" style={{ height: "32px" }}></div>
                            <div className="visible-xs" style={{ height: "32px" }}></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PartnerLogos;
