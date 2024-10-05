import React from 'react';
import { Link } from 'react-router-dom'; // Adjust based on your routing setup
import image1 from '../../../assets/wp-content/uploads/2017/02/05-1-460x680.jpg'
import image2 from '../../../assets/wp-content/uploads/2017/02/04-1-460x680.jpg'
import image3 from '../../../assets/wp-content/uploads/2017/02/03-1-460x680.jpg'
import image4 from '../../../assets/wp-content/uploads/2017/02/07-1-460x680.jpg'
import image5 from '../../../assets/wp-content/uploads/2017/02/06-1-460x680.jpg'
import image6 from '../../../assets/wp-content/uploads/2017/02/13-460x680.jpg'
import image7 from '../../../assets/wp-content/uploads/2017/02/12-460x680.jpg'
import image8 from '../../../assets/wp-content/uploads/2017/02/11-460x680.jpg'
import image9 from '../../../assets/wp-content/uploads/2017/02/10-460x680.jpg'
import image10 from '../../../assets/wp-content/uploads/2017/02/09-1-460x680.jpg'
import image11 from '../../../assets/wp-content/uploads/2017/02/08-1-460x680.jpg'
import image12 from '../../../assets/wp-content/uploads/2017/02/17-460x680.jpg'

const FeaturedShowsSection = () => {
    const shows = [
        { link: "/shows/bambi", img: image1, title: "Bambi", year: "2012", comments: "1", rate: "8.4" },
        { link: "/shows/m-25", img: image2, title: "M-25", year: "2014", comments: "1", rate: "7.7" },
        { link: "/shows/scream-2", img: image3, title: "Scream", year: "2016", comments: "0", rate: "8.7" },
        { link: "/shows/the-lovers", img: image4, title: "The Lovers", year: "2014", comments: "3", rate: "8.2" },
        { link: "/shows/afganistan", img: image5, title: "Afganistan", year: "2017", comments: "1", rate: "7.7" },
        { link: "/shows/road-to-the-mountains", img: image6, title: "Road to the Mountains", year: "2016", comments: "3", rate: "7.1" },
        { link: "/shows/crazy-valenite", img: image7, title: "Crazy Valenite", year: "2011", comments: "8", rate: "8.4" },
        { link: "/shows/summer-party", img: image8, title: "Summer Party", year: "2002", comments: "0", rate: "7.2" },
        { link: "/shows/last-bullet", img: image9, title: "Last Bullet", year: "2005", comments: "0", rate: "8.3" },
        { link: "/shows/doctor-d", img: image10, title: "Doctor D.", year: "2017", comments: "0", rate: "8.6" },
        { link: "/shows/womens-day", img: image11, title: "Women's Day", year: "2018", comments: "3", rate: "9.2" },
        { link: "/shows/best-friends", img: image12, title: "Best Friends", year: "2013", comments: "0", rate: "6.7" },
    ];

    return (
        <section className="vc_section bg-color-black">
            <div className="vc_row wpb_row vc_row-fluid">
                <div className="wpb_column vc_column_container vc_col-sm-12">
                    <div className="vc_column-inner">
                        <div className="wpb_wrapper">
                            <div className="es-resp">
                                {/* Responsive spacing */}
                            </div>
                            <div className="ltx-content-width col-align-center" style={{ maxWidth: "1000px" }}>
                                <div className="ltx-wrapper">
                                    <div className="heading header-subheader align-center subcolor-main transform-default has-subheader theme-icon-second icon-type-hidden heading-tag-h2">
                                        <h6 className="subheader">Interesting</h6>
                                        <h2 className="header">Featured Shows</h2>
                                    </div>
                                    <div className="wpb_text_column wpb_content_element">
                                        <div className="wpb_wrapper">
                                            <p style={{ textAlign: "center" }}>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin bibendum, est ac faucibus hendrerit, mauris ante viverra urna, in elementum urna est ut ligula.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="ltx-swiper-slider-wrapper">
                                <div className="ltx-swiper-slider swiper-container ltx-portfolio-sc ltx-slider layout-slider">
                                    <div className="swiper-wrapper">
                                        {shows.map((show, index) => (
                                            <article className="ltx-item swiper-slide" key={index}>
                                                <Link to={show.link} className="photo">
                                                    <img
                                                        width="460"
                                                        height="680"
                                                        src={show.img}
                                                        className="attachment-mirasat-portfolio size-mirasat-portfolio wp-post-image"
                                                        alt={`Poster of ${show.title}`}
                                                    />
                                                </Link>
                                                <div className="ltx-description">
                                                    <Link to={show.link}>
                                                        <h6 className="header">{show.title}</h6>
                                                    </Link>
                                                    <span className="year">{show.year}</span>
                                                    <span className="comments">{show.comments}</span>
                                                    <span className="rate">{show.rate}</span>
                                                </div>
                                            </article>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="es-resp">
                                {/* Responsive spacing */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturedShowsSection;
