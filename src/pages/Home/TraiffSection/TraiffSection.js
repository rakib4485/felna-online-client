import React from 'react';
import { Link } from 'react-router-dom';

const TariffSection = () => {
    const tariffs = [
        {
            id: 'like_sc_tariff_611684794',
            type: 'Internet',
            title: 'Easy Surfing',
            features: ['Up to 50Mbps', 'Night Turbo-Speed', 'WiFi router', 'Unlimited devices'],
            price: 24.99,
            icon: 'icon-wifi-router'
        },
        {
            id: 'like_sc_tariff_187052827',
            type: 'TV',
            title: 'Impression',
            features: ['200+ channels', '5 adult channels', 'TV-Box', 'Unlimited rooms'],
            price: 18.00,
            icon: 'icon-satellite-dish'
        },
        {
            id: 'like_sc_tariff_197661299',
            type: 'Internet + TV',
            title: 'Home Comfort',
            features: ['Up to 100Mbps', '200+ channels', 'WiFi router', 'Unlimited devices'],
            price: 37.99,
            icon: 'icon-wifi-router icon-satellite-dish',
            label: 'popular'
        },
        {
            id: 'like_sc_tariff_1069505141',
            type: 'Internet + TV + Phone',
            title: 'Premium Plan',
            features: ['Up to 1000Mbps', '250+ channels', 'WiFi router and TV Box', 'Phone'],
            price: 49.00,
            icon: 'icon-wifi-router icon-satellite-dish icon-phone'
        }
    ];

    return (
        <section className="vc_section bg-color-black" data-vc-full-width="true" data-vc-full-width-init="false">
            <div className="vc_row wpb_row vc_row-fluid">
                <div className="wpb_column vc_column_container vc_col-sm-12">
                    <div className="vc_column-inner">
                        <div className="wpb_wrapper">
                            <div className="heading header-subheader align-center subcolor-main">
                                <h6 className="subheader">Tariffs</h6>
                                <h2 className="header">Choose your plan</h2>
                            </div>
                            <div className="ltx-content-width col-align-center" style={{ maxWidth: '1000px' }}>
                                <div className="wpb_text_column wpb_content_element">
                                    <p style={{ textAlign: 'center' }}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin bibendum, est ac faucibus hendrerit, mauris ante viverra urna, in elementum urna est ut ligula.
                                    </p>
                                </div>
                            </div>

                            <div className="vc_row wpb_row vc_inner vc_row-fluid container" style={{margin: '0 auto'}}>
                                {tariffs.map(tariff => (
                                    <div key={tariff.id} className="wpb_column vc_column_container vc_col-sm-12 vc_col-lg-3 vc_col-md-6">
                                        <div className="vc_column-inner">
                                            <div className="wpb_wrapper">
                                                <div className={`tariff-item item layout-default ${tariff.label ? 'vip' : ''}`} id={tariff.id}>
                                                    <div className="ltx-header-wrapper">
                                                        {tariff.label && <span className="label-vip">{tariff.label}<span className="ltx-triangle"></span></span>}
                                                        <h6 className="subheader">{tariff.type}</h6>
                                                        <h4 className="header">{tariff.title}</h4>
                                                        <ul className="ltx-tariff-icons">
                                                            <li><span className={`ltx-icon ${tariff.icon}`}></span></li>
                                                        </ul>
                                                    </div>
                                                    <ul className="ltx-tariff-list">
                                                        {tariff.features.map((feature, index) => (
                                                            <li key={index}>{feature}</li>
                                                        ))}
                                                    </ul>
                                                    <div className="price">${tariff.price.toFixed(2)} <span> | month </span></div>
                                                    <div>
                                                        <Link to="#" className="btn btn-lg btn-main">Get started</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            
                            <div className="vc_row wpb_row vc_inner vc_row-fluid">
                                <div className="wpb_column vc_column_container vc_col-sm-12">
                                    <div className="vc_column-inner">
                                        <div className="wpb_wrapper">
                                            {/* Spacer Div */}
                                            <div style={{ height: '130px' }}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TariffSection;
