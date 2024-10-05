import React from 'react';
import sofa from '../../../assets/wp-content/uploads/2019/09/sofa.png';
import popcorn from '../../../assets/wp-content/uploads/2019/09/sofa-popcorn.png';

const SofaSection = () => {
    return (
        <div data-vc-full-width="true" data-vc-full-width-init="false" className="vc_row wpb_row vc_row-fluid bg-color-black displaced-top">
            <div className="ltx-sofa wpb_column vc_column_container vc_col-sm-12">
                <div className="vc_column-inner">
                    <div className="wpb_wrapper">
                        <div className="wpb_single_image wpb_content_element vc_align_center ltx-sr ltx-sr-effect-fade_in ltx-sr-id-1767454322 ltx-sr-el-block ltx-sr-delay-200 ltx-sr-duration-500 ltx-sr-sequences-100">
                            <figure className="wpb_wrapper vc_figure">
                                <div className="vc_single_image-wrapper vc_box_border_grey">
                                    <img
                                        width="1245"
                                        height="487"
                                        src={sofa}
                                        className="vc_single_image-img attachment-full"
                                        alt="Stylish sofa in a modern living room"
                                        // srcSet="
                                        //     http://mirasat.like-themes.com/wp-content/uploads/2019/09/sofa.png 1245w,
                                        //     http://mirasat.like-themes.com/wp-content/uploads/2019/09/sofa-300x117.png 300w,
                                        //     http://mirasat.like-themes.com/wp-content/uploads/2019/09/sofa-768x300.png 768w,
                                        //     http://mirasat.like-themes.com/wp-content/uploads/2019/09/sofa-1024x401.png 1024w,
                                        //     http://mirasat.like-themes.com/wp-content/uploads/2019/09/sofa-360x141.png 360w,
                                        //     http://mirasat.like-themes.com/wp-content/uploads/2019/09/sofa-600x235.png 600w,
                                        //     http://mirasat.like-themes.com/wp-content/uploads/2019/09/sofa-800x313.png 800w,
                                        //     http://mirasat.like-themes.com/wp-content/uploads/2019/09/sofa-550x215.png 550w"
                                        // sizes="(max-width: 1245px) 100vw, 1245px"
                                    />
                                </div>
                            </figure>
                        </div>
                        <div className="wpb_single_image wpb_content_element vc_align_center ltx-popcorn ltx-sr ltx-sr-effect-slide_from_right ltx-sr-id-266354118 ltx-sr-el-block ltx-sr-delay-200 ltx-sr-duration-800 ltx-sr-sequences-100">
                            <figure className="wpb_wrapper vc_figure">
                                <div className="vc_single_image-wrapper vc_box_border_grey">
                                    <img
                                        width="212"
                                        height="167"
                                        src={popcorn}
                                        className="vc_single_image-img attachment-full"
                                        alt="Popcorn bowl on a stylish sofa"
                                    />
                                </div>
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SofaSection;
