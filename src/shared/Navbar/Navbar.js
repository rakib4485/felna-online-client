import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/wp-content/uploads/2017/02/logo_1x.png';

const Navbar = () => {
    return (
            <div className="header-wrapper header-h1 header-parallax wrapper-navbar-layout-transparent ltx-pageheader-disabled">
                <div id="nav-wrapper" className="navbar-layout-transparent">
                    <nav className="navbar" data-spy="affix" data-offset-top="0">
                        <div className="container">
                            <div className="navbar-logo">
                                <Link to="/" className="logo">
                                    <img src={logo} alt="Mirasat" />
                                </Link>
                            </div>
                            <div id="navbar" className="navbar-collapse collapse" data-mobile-screen-width="1200">
                                <div className="toggle-wrap">
                                    <Link to="/" className="logo">
                                        <img
                                            src={logo}
                                            alt="Mirasat"
                                        />
                                    </Link>
                                    <button type="button" className="navbar-toggle collapsed" aria-label="Toggle navigation">
                                        <span className="close">&times;</span>
                                    </button>
                                    <div className="clearfix"></div>
                                </div>
                                <ul id="menu-main-menu" className="nav navbar-nav">
                                    <li className="menu-item current-menu-ancestor current-menu-parent">
                                        <Link to="/"><span>Home</span></Link>
                                    </li>
                                    <li className="menu-item">
                                        <Link to="/about"><span>About us</span></Link>
                                    </li>
                                    <li className="menu-item">
                                        <Link to="/product"><span>Products</span></Link>
                                    </li>
                                    <li className="menu-item">
                                        <Link to="/blog"><span>Blog</span></Link>
                                    </li>
                                    <li className="menu-item">
                                        <Link to="/contact"><span>Contacts</span></Link>
                                    </li>
                                    <li className="menu-item menu-item-has-mega-menu">
                                        <Link to="#"><span>Pages</span></Link>
                                    </li>
                                    <li className="menu-item">
                                        <Link to="#"><span>Get Started</span></Link>
                                    </li>
                                </ul>
                                <div className="ltx-navbar-icons">
                                    <ul>
                                        <li className="ltx-fa-icon ltx-nav-profile">
                                            <Link to="/my-account" aria-label="My Account">
                                                <span className="fa fa-user"></span>
                                            </Link>
                                        </li>
                                        <li className="ltx-fa-icon ltx-nav-cart">
                                            <div className="cart-navbar">
                                                <Link to="/cart" className="ltx-cart cart shop_table" title="View your shopping cart" aria-label="Shopping Cart">
                                                    <span className="cart-contents header-cart-count count">0</span>
                                                    <i className="fa fa-shopping-basket" aria-hidden="true"></i>
                                                </Link>
                                            </div>
                                        </li>
                                        <li className="ltx-fa-icon ltx-nav-search">
                                            <div className="top-search">
                                                <Link to="#" className="top-search-ico fa fa-search" aria-hidden="true" aria-label="Search"></Link>
                                                <Link to="#" className="top-search-ico-close" aria-hidden="true">&times;</Link>
                                                <input placeholder="Search" type="text" />
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="mobile-controls">
                                    <ul>
                                        <li className="ltx-fa-icon ltx-nav-profile">
                                            <Link to="/my-account" aria-label="My Account">
                                                <span className="fa fa-user"></span>
                                            </Link>
                                        </li>
                                        <li className="ltx-fa-icon ltx-nav-cart">
                                            <div className="cart-navbar">
                                                <Link to="/cart" className="ltx-cart cart shop_table" title="View your shopping cart" aria-label="Shopping Cart">
                                                    <span className="cart-contents header-cart-count count">0</span>
                                                    <i className="fa fa-shopping-basket" aria-hidden="true"></i>
                                                </Link>
                                            </div>
                                        </li>
                                        <li className="ltx-fa-icon ltx-nav-search">
                                            <div className="top-search">
                                                <Link to="#" className="top-search-ico fa fa-search" aria-hidden="true" aria-label="Search"></Link>
                                                <input placeholder="Search" type="text" />
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="navbar-controls">
                                <button type="button" className="navbar-toggle collapsed" aria-label="Toggle navigation">
                                    <span className="icon-bar top-bar"></span>
                                    <span className="icon-bar middle-bar"></span>
                                    <span className="icon-bar bottom-bar"></span>
                                </button>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
    );
};

export default Navbar;
