import React from "react";
import Swiper from "swiper"; // You need to install swiper using npm: npm install swiper
import 'swiper/swiper-bundle.css'; // Correct import for Swiper CSS


const ProductSlider = () => {
  const products = [
    {
      id: 9248,
      title: "Dual Antenna Home Router",
      image: "wp-content/uploads/2017/02/item_01-360x360.jpg",
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium ...",
      price: 19.0,
    },
    {
      id: 9249,
      title: "Top TV box with Remote Control",
      image: "wp-content/uploads/2017/02/item_02-360x360.jpg",
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium ...",
      price: 32.0,
    },
    {
      id: 9247,
      title: "Virtual Reality Glasses",
      image: "wp-content/uploads/2017/02/item_03-360x360.jpg",
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium ...",
      price: 19.0,
    },
    {
      id: 9246,
      title: "Pocket Bluetooth Speaker",
      image: "wp-content/uploads/2017/02/item_04-360x360.jpg",
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium ...",
      oldPrice: 29.0,
      price: 19.0,
    },
    {
      id: 8073,
      title: "Smartphone Virtual Reality Glasses",
      image: "wp-content/uploads/2017/02/item_10-360x360.jpg",
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium ...",
      oldPrice: 29.0,
      price: 19.0,
    },
  ];

  React.useEffect(() => {
    new Swiper(".swiper-container", {
      loop: true,
      slidesPerView: 1,
      spaceBetween: 10,
      speed: 1000,
      autoplay: { delay: 5000 },
      breakpoints: {
        640: { slidesPerView: 1, spaceBetween: 20 },
        768: { slidesPerView: 2, spaceBetween: 30 },
        1024: { slidesPerView: 4, spaceBetween: 40 },
      },
    });
  }, []);

  return (
    <section className="vc_section bg-color-gray">
      <div className="vc_row vc_row-no-padding">
        <div className="vc_column_container vc_col-sm-12">
          <div className="vc_column-inner">
            <div className="wpb_wrapper">
              <div className="heading align-center subcolor-main">
                <h6 className="subheader">Online Store</h6>
                <h2>Popular Devices</h2>
              </div>
              <div className="ltx-swiper-slider-wrapper">
                <div
                  className="ltx-swiper-slider swiper-container"
                  data-loop="1"
                  data-speed="1000"
                  data-effect="coverflow"
                >
                  <ul className="products swiper-wrapper">
                    {products.map((product) => (
                      <li
                        key={product.id}
                        className="swiper-slide product"
                      >
                        <div className="item">
                          <div className="image">
                            <img
                              src={product.image}
                              alt={product.title}
                              width="360"
                              height="360"
                            />
                          </div>
                          <h2 className="woocommerce-loop-product__title">
                            {product.title}
                          </h2>
                          <div className="post_content entry-content">
                            {product.description}
                          </div>
                          <span className="price">
                            {product.oldPrice && (
                              <del>
                                <span>&#36;{product.oldPrice.toFixed(2)}</span>
                              </del>
                            )}
                            <ins>
                              <span>&#36;{product.price.toFixed(2)}</span>
                            </ins>
                          </span>
                          <button
                            className="button product_type_simple add_to_cart_button"
                            data-product_id={product.id}
                          >
                            Add to cart
                          </button>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div style={{ height: "120px" }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSlider;
