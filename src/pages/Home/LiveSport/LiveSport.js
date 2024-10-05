import React from 'react'
import liveSportImage from '../../../assets/wp-content/uploads/2019/09/live-sport.png';
import { Link } from 'react-router-dom';

export const LiveSport = () => {
  return (
    <section className="vc_section text-align-center-sm-ms container" style={{margin: '0 auto'}}>
    <div className="vc_row wpb_row vc_row-fluid">
        <div className="wpb_column vc_column_container vc_col-sm-12">
            <div className="vc_column-inner">
                <div className="wpb_wrapper">
                    <div className="es-resp">
                        <div className="visible-xl" style={{ height: "100px" }}></div>
                        <div className="hidden-xl hidden-md hidden-sm hidden-ms hidden-xs"
                            style={{ height: "100px" }}></div>
                        <div className="visible-md" style={{ height: "32px" }}></div>
                        <div className="visible-sm" style={{ height: "32px" }}></div>
                        <div className="visible-ms" style={{ height: "32px" }}></div>
                        <div className="visible-xs" style={{ height: "32px" }}></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="vc_row wpb_row vc_row-fluid container">
        <div className="wpb_column vc_column_container vc_col-sm-12 vc_col-md-6">
            <div className="vc_column-inner">
                <div className="wpb_wrapper">
                    <div className="heading default align-left subcolor-main transform-default icon-type-hidden heading-tag-h2">
                        <h2 className="header ltx-sr-id-like_sc_header_1134095794910325918 ltx-sr ltx-sr-effect-fade_in ltx-sr-el-block ltx-sr-delay-0 ltx-sr-duration-1000 ltx-sr-sequences-0">
                            <span>Live Sport</span> and TV-shows for best friends
                        </h2>
                    </div>
                    <div className="ltx-content-width col-align-left" style={{ maxWidth: "600px" }}>
                        <div className="ltx-wrapper">
                            <div className="wpb_text_column wpb_content_element">
                                <div className="wpb_wrapper">
                                    <p>
                                        Etiam euismod eros in nisl iaculis venenatis. Aenean venenatis turpis et gravida interdum. Nulla facilisi. Pellentesque imperdiet, sem et commodo interdum, justo velit sagittis metus erat sed purus.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <ul className="ltx-block-icon icons-count-2 align-left ltx-icon-color-main ltx-icon-size-default ltx-header-color-default ltx-icon-type-circle ltx-bg-color-transparent layout-inline ltx-icon-h-right">
                        <li>
                            <div>
                                <span className="ltx-icon ltx-icon-text bg-transparent">4K</span>
                                <div className="block-right">
                                    <h6 className="header">Ultra HD Quality</h6>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div>
                                <span className="ltx-icon ltx-icon-text bg-transparent">200+</span>
                                <div className="block-right">
                                    <h6 className="header">Online Channels</h6>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <div className="btn-wrap">
                        <Link to="#" className="btn btn-lg btn-main color-hover-default">Read more</Link>
                    </div>
                </div>
            </div>
        </div>
        <div className="wpb_column vc_column_container vc_col-sm-12 vc_col-md-6">
            <div className="vc_column-inner">
                <div className="wpb_wrapper">
                    <div className="wpb_single_image wpb_content_element vc_align_center">
                        <figure className="wpb_wrapper vc_figure">
                            <div className="vc_single_image-wrapper vc_box_border_grey">
                                <img
                                    width="687"
                                    height="623"
                                    src={liveSportImage}
                                    className="vc_single_image-img attachment-full"
                                    alt="Live Sport"
                                    srcSet={`
            ${liveSportImage} 687w, 
            ${liveSportImage.replace('.png', '-300x272.png')} 300w, 
            ${liveSportImage.replace('.png', '-360x326.png')} 360w, 
            ${liveSportImage.replace('.png', '-600x544.png')} 600w, 
            ${liveSportImage.replace('.png', '-550x499.png')} 550w
        `}
                                    sizes="(max-width: 687px) 100vw, 687px"
                                />
                            </div>
                        </figure>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="vc_row wpb_row vc_row-fluid">
        <div className="wpb_column vc_column_container vc_col-sm-12">
            <div className="vc_column-inner">
                <div className="wpb_wrapper">
                    <div className="es-resp">
                        <div className="visible-xl" style={{ height: "80px" }}></div>
                        <div className="hidden-xl hidden-md hidden-sm hidden-ms hidden-xs"
                            style={{ height: "80px" }}></div>
                        <div className="visible-md" style={{ height: "80px" }}></div>
                        <div className="visible-sm" style={{ height: "80px" }}></div>
                        <div className="visible-ms" style={{ height: "32px" }}></div>
                        <div className="visible-xs" style={{ height: "32px" }}></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}
