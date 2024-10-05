import React from 'react';

const IconSection = () => {
    const icons = [
        {
            iconClass: "icon-wifi-router",
            title: "Broadband",
            description: "Unlimited high speed internet for the whole family and devices",
            price: "$24.99",
        },
        {
            iconClass: "icon-satellite-dish",
            title: "Satellite TV",
            description: "Over 200 entertainment channels with movies, cartoons, sport, and shows",
            price: "$18",
        },
        {
            iconClass: "icon-phone",
            title: "Mobility",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin bibendum.",
            price: "$29.99",
        },
    ];
    return (
        <div
            className="vc_row wpb_row vc_row-fluid vc_custom_1567540620755 vc_row-has-fill bg-color-gray displaced-top container"
            style={{ margin: "0 auto" }}
        >
            <div className="wpb_column vc_column_container vc_col-sm-12 vc_col-has-fill bg-color-gray">
                <div className="vc_column-inner vc_custom_1567540725852">
                    <div className="wpb_wrapper">
                        {/* Icon List */}
                        <ul
                            className="ltx-block-icon has-descr icons-count-3 align-left ltx-icon-color-black ltx-icon-size-xl ltx-header-color-default ltx-icon-type-circle ltx-bg-color-transparent layout-cols3 ltx-icon-ht-right row centered"
                            id="like_sc_block_icon_1137114034"
                        >
                            {icons.map((icon, index) => (
                                <li className="col-lg-4 col-md-4 col-sm-4 col-ms-4 col-xs-12">
                                    <div className="in">
                                        <span className={`ltx-icon ${icon.iconClass} bg-transparent`}></span>
                                        <div className="block-right">
                                            <h4 className="header">{icon.title}</h4>
                                            <div className="descr">
                                                {icon.description} <span>from {icon.price}</span>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IconSection;