import React from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import "./about.css";
import { AiOutlineArrowRight } from "react-icons/ai";
import { BiSolidTimeFive } from "react-icons/bi";
// For react-icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { BiLogoFacebook } from "react-icons/bi";
import { GrTwitter } from "react-icons/gr";
import { BsInstagram } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { BsTelephoneFill } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";
import { BsArrowUp } from "react-icons/bs";
import { MdArrowForward } from "react-icons/md";
import CountUp from 'react-countup';
import {AiFillPlayCircle} from "react-icons/ai";
// For react-fontawesome
// import { FaTelegramPlane } from 'react-fontawesome/fa';

const About = () => {
  return (
    <div>
      {/* preloader area end */}
      {/* back to top start */}
      <div className="progress-arrow-container">
        <div className="progress-wrap active-progress">
          <svg
            className="progress-circle svg-content"
            width="100%"
            height="100%"
            viewBox="-1 -1 102 102"
          >
            <path
              d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
              style={{
                "-webkit-transition": "stroke-dashoffset 10ms linear 0s",
                transition: "stroke-dashoffset 10ms linear 0s",
                "stroke-dasharray": "307.919, 307.919",
                "stroke-dashoffset": "252.45",
              }}
            />
          </svg>
          <div className="custom-icon5 animate-bounce">
            {/* Your custom icon SVG code goes here */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              className="iconsuparrow"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="12" y1="5" x2="12" y2="19" />
              <polyline points="19 12 12 19 5 12" />
            </svg>
          </div>
        </div>
      </div>
      {/* back to top end */}
      {/* header start */}
      {/* header start */}
      <header>
        <div
          id="header-sticky"
          className="header__area header__transparent header__white"
        >
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xxl-3 col-xl-3 col-lg-5 col-md-6 col-6">
                <div className="logo">
                  <a
                    className="standard-logo"
                    href="https://thememaster.net/wp/maxdi/"
                  >
                    <img
                      src="https://thememaster.net/wp/maxdi/wp-content/themes/maxdi/assets/images/logo/logo.svg"
                      alt="logo"
                    />
                  </a>
                </div>
              </div>
              <div className="col-xxl-7 col-xl-6 d-none d-xl-block">
                <div className="main-menu main-menu-3 text-end">
                  <nav id="mobile-menu">
                    <ul id="menu-main-menu" className>
                      <li
                        itemScope="itemscope"
                        itemType="https://www.schema.org/SiteNavigationElement"
                        id="menu-item-111"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home menu-item-has-children dropdown menu-item-111 nav-items"
                      >
                        <a
                          title="Home"
                          href="https://thememaster.net/wp/maxdi/"
                          className="nav-link"
                        >
                          Home
                        </a>
                        <ul className="submenu" role="menu">
                          <li
                            itemScope="itemscope"
                            itemType="https://www.schema.org/SiteNavigationElement"
                            id="menu-item-92"
                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home menu-item-92 nav-items"
                          >
                            <a
                              title="Digital Agency"
                              href="https://thememaster.net/wp/maxdi/"
                              className="dropdown-items"
                            >
                              Digital Agency
                            </a>
                          </li>
                          <li
                            itemScope="itemscope"
                            itemType="https://www.schema.org/SiteNavigationElement"
                            id="menu-item-96"
                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-96 nav-items"
                          >
                            <a
                              title="Creative Agency"
                              href="https://thememaster.net/wp/maxdi/creative-agency/"
                              className="dropdown-items"
                            >
                              Creative Agency
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li
                        itemScope="itemscope"
                        itemType="https://www.schema.org/SiteNavigationElement"
                        id="menu-item-94"
                        className="menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-80 current_page_item active menu-item-94 nav-items"
                      >
                        <a
                          title="About"
                          href="https://thememaster.net/wp/maxdi/about/"
                          className="nav-link"
                        >
                          About
                        </a>
                      </li>
                      <li
                        itemScope="itemscope"
                        itemType="https://www.schema.org/SiteNavigationElement"
                        id="menu-item-112"
                        className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children dropdown menu-item-112 nav-items"
                      >
                        <a title="Pages" href="#" className="nav-link">
                          Pages
                        </a>
                        <ul className="submenu" role="menu">
                          <li
                            itemScope="itemscope"
                            itemType="https://www.schema.org/SiteNavigationElement"
                            id="menu-item-95"
                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-95 nav-items"
                          >
                            <a
                              title="Contact"
                              href="https://thememaster.net/wp/maxdi/contact/"
                              className="dropdown-items"
                            >
                              Contact
                            </a>
                          </li>
                          <li
                            itemScope="itemscope"
                            itemType="https://www.schema.org/SiteNavigationElement"
                            id="menu-item-93"
                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-93 nav-items"
                          >
                            <a
                              title="Blog"
                              href="https://thememaster.net/wp/maxdi/blog/"
                              className="dropdown-items"
                            >
                              Blog
                            </a>
                          </li>
                          <li
                            itemScope="itemscope"
                            itemType="https://www.schema.org/SiteNavigationElement"
                            id="menu-item-113"
                            className="menu-item menu-item-type-post_type menu-item-object-post menu-item-113 nav-items"
                          >
                            <a
                              title="Blog Details"
                              href="https://thememaster.net/wp/maxdi/delivering-the-best-digital-marketing-solution-creative-team/"
                              className="dropdown-items"
                            >
                              Blog Details
                            </a>
                          </li>
                          <li
                            itemScope="itemscope"
                            itemType="https://www.schema.org/SiteNavigationElement"
                            id="menu-item-99"
                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-99 nav-items"
                          >
                            <a
                              title="Team"
                              href="https://thememaster.net/wp/maxdi/team/"
                              className="dropdown-items"
                            >
                              Team
                            </a>
                          </li>
                          <li
                            itemScope="itemscope"
                            itemType="https://www.schema.org/SiteNavigationElement"
                            id="menu-item-100"
                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-100 nav-items"
                          >
                            <a
                              title="Team Details"
                              href="https://thememaster.net/wp/maxdi/team-details/"
                              className="dropdown-items"
                            >
                              Team Details
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li
                        itemScope="itemscope"
                        itemType="https://www.schema.org/SiteNavigationElement"
                        id="menu-item-98"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children dropdown menu-item-98 nav-items"
                      >
                        <a
                          title="Services"
                          href="https://thememaster.net/wp/maxdi/services/"
                          className="nav-link"
                        >
                          Services
                        </a>
                        <ul className="submenu" role="menu">
                          <li
                            itemScope="itemscope"
                            itemType="https://www.schema.org/SiteNavigationElement"
                            id="menu-item-114"
                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-114 nav-items"
                          >
                            <a
                              title="Services"
                              href="https://thememaster.net/wp/maxdi/services/"
                              className="dropdown-items"
                            >
                              Services
                            </a>
                          </li>
                          <li
                            itemScope="itemscope"
                            itemType="https://www.schema.org/SiteNavigationElement"
                            id="menu-item-247"
                            className="menu-item menu-item-type-post_type menu-item-object-alimasha-services menu-item-247 nav-items"
                          >
                            <a
                              title="Services Details"
                              href="https://thememaster.net/wp/maxdi/ourservices/web-development/"
                              className="dropdown-items"
                            >
                              Services Details
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li
                        itemScope="itemscope"
                        itemType="https://www.schema.org/SiteNavigationElement"
                        id="menu-item-97"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children dropdown menu-item-97 nav-items"
                      >
                        <a
                          title="Portfolio"
                          href="https://thememaster.net/wp/maxdi/portfolio/"
                          className="nav-link"
                        >
                          Portfolio
                        </a>
                        <ul className="submenu" role="menu">
                          <li
                            itemScope="itemscope"
                            itemType="https://www.schema.org/SiteNavigationElement"
                            id="menu-item-115"
                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-115 nav-items"
                          >
                            <a
                              title="Portfolio"
                              href="https://thememaster.net/wp/maxdi/portfolio/"
                              className="dropdown-items"
                            >
                              Portfolio
                            </a>
                          </li>
                          <li
                            itemScope="itemscope"
                            itemType="https://www.schema.org/SiteNavigationElement"
                            id="menu-item-246"
                            className="menu-item menu-item-type-post_type menu-item-object-alimasha-portfolio menu-item-246 nav-items"
                          >
                            <a
                              title="Portfolio Details"
                              href="https://thememaster.net/wp/maxdi/ourportfolio/digital-agency/"
                              className="dropdown-items"
                            >
                              Portfolio Details
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>{" "}
                  </nav>
                </div>
              </div>
              <div className="col-xxl-2 col-xl-3 col-lg-7 col-md-6 col-6">
                <div className="header__right text-end d-flex align-items-center justify-content-end">
                  <div className="d-none d-md-block">
                    <a
                      className="m-btn"
                      href="https://thememaster.net/wp/maxdi/contact"
                    >
                      Get A Quote
                    </a>
                  </div>
                  <div className="side-menu-icon d-xl-none">
                    <button className="side-toggle">
                      <i className="fa-solid fa-bars" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* header end */}
      {/* side info start */}
      {/* mobile menu sidebar start */}
      <div className="fix">
        <div className="side-info">
          <button className="side-info-close">
            <i className="fas fa-times" />
          </button>
          <div className="side-info-content">
            <div className="mobile-menu" />
            <div className="sidebar__contact mb-30">
              <div className="contact-list mb-30">
                <ul>
                  <li>
                    <i className="fas fa-map-marker-alt" />
                    66 Broklyn Street, New York United States of America{" "}
                  </li>
                  <li>
                    <i className="far fa-paper-plane" />
                    <a href="mailto:http://info@example.com">
                      info@example.com
                    </a>
                  </li>
                  <li>
                    <i className="fas fa-phone" />
                    <a href="tel:http://+00%2066%2044%2022%2011">
                      +00 66 44 22 11
                    </a>
                  </li>
                </ul>
                <div className="sidebar__social">
                  <a href="#">
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a href="#">
                    <i className="fab fa-twitter" />
                  </a>
                  <a href="#">
                    <i className="fab fa-instagram" />
                  </a>
                  <a href="#">
                    <i className="fab fa-google" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* side info end */}
      <div className="offcanvas-overlay" />
      {/* mobile menu sidebar end */}
      {/* header end */}
      {/* wrapper-box start */}
      {/* page-title area start */}
      <section className="page__title-area page__title-height fix d-flex align-items-center p-relative  ">
        <div className="page__title-shape">
          <img
            className="page-title-s-1 d-none d-md-block"
            src="https://thememaster.net/wp/maxdi/wp-content/themes/maxdi/assets/images/shape/page-title/page-title-s-1.png"
            alt="image"
          />
          <img
            className="page-title-s-3"
            src="https://thememaster.net/wp/maxdi/wp-content/themes/maxdi/assets/images/shape/page-title/page-title-s-3.png"
            alt="image"
          />
          <img
            className="page-title-s-4"
            src="https://thememaster.net/wp/maxdi/wp-content/themes/maxdi/assets/images/shape/page-title/page-title-s-4.png"
            alt="image"
          />
          <img
            className="page-title-s-5 wow fadeInDown"
            data-wow-delay="1s"
            src="https://thememaster.net/wp/maxdi/wp-content/themes/maxdi/assets/images/shape/page-title/page-title-s-5.png"
            alt="image"
          />
          <img
            className="page-title-s-6 wow fadeInUp"
            data-wow-delay=".6s"
            src="https://thememaster.net/wp/maxdi/wp-content/themes/maxdi/assets/images/shape/page-title/page-title-s-6.png"
            alt="image"
          />
          <img
            className="page-title-s-7 d-none d-md-block"
            src="https://thememaster.net/wp/maxdi/wp-content/themes/maxdi/assets/images/shape/page-title/page-title-s-7.png"
            alt="image"
          />
        </div>
        <div className="container " style={{ textAlign: "left" }}>
          <div className="row align-items-center">
            <div className="col-xxl-12">
              <div className="page__title-wrapper">
                <h2 className="page__title-heading">About </h2>
                <nav
                  aria-label="Breadcrumbs"
                  className="breadcrumb-trail breadcrumbs"
                >
                  <ul
                    className="trail-items"
                    itemScope
                    itemType="http://schema.org/BreadcrumbList"
                  >
                    <li
                      itemProp="itemListElement"
                      itemScope
                      itemType="http://schema.org/ListItem"
                      className="trail-item trail-begin"
                    >
                      <a
                        href="https://thememaster.net/wp/maxdi/"
                        rel="home"
                        itemProp="item"
                      >
                        <span itemProp="name">Home</span>
                      </a>
                      {/* <meta itemProp="position" content={1} /> */}
                      <MdKeyboardDoubleArrowRight className="icons-content1" />
                    </li>
                    <li className="trail-item trail-end">
                      <span>About</span>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* page-title area end */}
      <div
        data-elementor-type="wp-page"
        data-elementor-id={80}
        className="elementor elementor-80"
      >
        <section
          className="elementor-section elementor-top-section elementor-element elementor-element-8230c5f elementor-section-full_width elementor-section-height-default elementor-section-height-default"
          data-id="8230c5f"
          data-element_type="section"
        >
          <div className="elementor-container elementor-column-gap-no">
            <div
              className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-f9bf95d"
              data-id="f9bf95d"
              data-element_type="column"
            >
              <div className="elementor-widget-wrap elementor-element-populated">
                <div
                  className="elementor-element elementor-element-e45b375 elementor-widget elementor-widget-about"
                  data-id="e45b375"
                  data-element_type="widget"
                  data-widget_type="about.default"
                >
                  <div className="elementor-widget-container">
                    <section className="about__area fix p-relative pt-120 pb-120 about__pb">
                      <div className="container" style={{ textAlign: "left" }}>
                        <div className="row">
                          <div className="col-xxl-7 col-xl-8 col-lg-10 col-md-10">
                            <div className="about__title mb-80">
                              <h4
                                className="section__sub-title wow fadeInUp"
                                data-wow-delay=".2s"
                              >
                                About us{" "}
                              </h4>
                              <h2
                                className="section__title wow fadeInUp"
                                data-wow-delay=".3s"
                              >
                                <span className="first_title">
                                  We are here to make your
                                </span>
                                <span className="second_title">
                                  product look more elegant and stylish
                                </span>
                              </h2>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-xl-6 col-lg-6">
                            <div className="about__thumb">
                              <div className="about__thumb-shape">
                                <img
                                  decoding="async"
                                  className="about-s-1 d-none d-lg-block"
                                  src="https://thememaster.net/wp/maxdi/wp-content/themes/maxdi/assets/images/shape/about/about-s-1.png"
                                  alt="image"
                                />
                                <img
                                  decoding="async"
                                  className="about-s-2 d-none d-md-block wow zoomIn"
                                  data-wow-delay=".8s"
                                  src="https://thememaster.net/wp/maxdi/wp-content/themes/maxdi/assets/images/shape/about/about-s-2.png"
                                  alt="image"
                                />
                              </div>
                              <div className="about__thumb-image">
                                <img
                                  decoding="async"
                                  src="https://thememaster.net/wp/maxdi/wp-content/uploads/2022/07/about-img.jpg"
                                  alt="image"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-5 offset-xl-1 col-lg-6">
                            <div
                              className="about__content wow fadeInUp"
                              data-wow-delay=".2s"
                            >
                              <p>
                                Kindling the energy hidden in matter the only
                                home we've ever known radio telescope
                                decipherment descended from astronomers rogue.
                                Prime number network of wormholes take root.
                              </p>
                              <ul className="icon-list">
                                <li>
                                  <div className="icon-circle">
                                    <MdArrowForward />
                                  </div>
                                  Sea of Tranquility dispassionate observer
                                  dream.
                                </li>
                                <li>
                                  <div className="icon-circle">
                                    <MdArrowForward />
                                  </div>
                                  Muse about as a patch of light brain is the
                                  seed of intelligence.
                                </li>
                                <li>
                                  <div className="icon-circle">
                                    <MdArrowForward />
                                  </div>
                                  The only home we've ever known dream of the
                                  mind's eye.
                                </li>
                              </ul>
                            </div>
                            <div className="about__counter-bg d-none d-sm-block">
      <div className="about__counter-content d-flex">
        <div className="about__counter-text text-center">
          <h2>
            <CountUp end={280} duration={5} />+
          </h2>
          <p>Project Delivered</p>
        </div>
        <div className="about__counter-text text-center">
          <h2>
            <CountUp end={500} duration={5} />+
          </h2>
          <p>Happy Clients</p>
        </div>
        <div className="about__counter-text text-center">
          <h2>
            <CountUp end={3500} duration={5} />+
          </h2>
          <p>Total Coffees</p>
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
            </div>
          </div>
        </section>
        <section
          className="elementor-section elementor-top-section elementor-element elementor-element-1ebcf95 elementor-section-full_width elementor-section-height-default elementor-section-height-default"
          data-id="1ebcf95"
          data-element_type="section"
        >
          <div className="elementor-container elementor-column-gap-no">
            <div
              className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-c6b8b80"
              data-id="c6b8b80"
              data-element_type="column"
            >
              <div className="elementor-widget-wrap elementor-element-populated">
                <div
                  className="elementor-element elementor-element-f3760b8 elementor-widget elementor-widget-experience"
                  data-id="f3760b8"
                  data-element_type="widget"
                  data-widget_type="experience.default"
                >
                  <div className="elementor-widget-container">
                    <section className="experience__area fix p-relative pt-120 pb-120">
                      <div className="experience__shape">
                        <img
                          decoding="async"
                          className="experience-s-1"
                          src="https://thememaster.net/wp/maxdi/wp-content/themes/maxdi/assets/images/shape/experience/experience-s-1.png"
                          alt="img"
                        />
                        <img
                          decoding="async"
                          className="experience-s-2"
                          src="https://thememaster.net/wp/maxdi/wp-content/themes/maxdi/assets/images/shape/experience/experience-s-2.png"
                          alt="img"
                        />
                        <img
                          decoding="async"
                          className="experience-s-3 d-none d-lg-block"
                          src="https://thememaster.net/wp/maxdi/wp-content/themes/maxdi/assets/images/shape/experience/experience-s-3.png"
                          alt="img"
                        />
                        <img
                          decoding="async"
                          className="experience-s-4"
                          src="https://thememaster.net/wp/maxdi/wp-content/themes/maxdi/assets/images/shape/experience/experience-s-4.png"
                          alt="img"
                        />
                      </div>
                      <div className="container" style={{ textAlign: "left" }}>
                        <div className="row align-items-center">
                          <div className="col-xl-5 col-lg-6 col-md-9 col-sm-10">
                            <div className="experience__content">
                              <h4
                                className="section__sub-title wow fadeInUp"
                                data-wow-delay=".2s"
                              >
                                25 Years Of Experience{" "}
                              </h4>
                              <h2
                                className="section__title wow fadeInUp"
                                data-wow-delay=".3s"
                              >
                                <span className="first_title">
                                  Ready to get our
                                </span>
                                <span className="second_title">
                                  digital services?
                                </span>
                              </h2>
                              <p className="wow fadeInUp" data-wow-delay=".4s">
                                That's not on the roadmap losing these latest
                                prospects is like putting socks on an octopus to
                                give you a heads-up.
                              </p>
                              <a
                                href="https://thememaster.net/wp/maxdi/contact"
                                className="m-btn mt-35 wow fadeInUp"
                                data-wow-delay=".6s"
                              >
                                Start a Project
                              </a>
                            </div>
                          </div>
                          <div className="col-xl-7 col-lg-6 col-md-9">
                            <div className="experience__video-btn">
                              <a
                                href="https://www.youtube.com/watch?v=yJg-Y5byMMw"
                                className="popup-video"
                              >
                                <AiFillPlayCircle/>
                              </a>
                            </div>
                            <div className="experience__thumb text-end">
                              <img
                                decoding="async"
                                src="https://thememaster.net/wp/maxdi/wp-content/uploads/2022/07/experience-img.png"
                                alt="image"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          className="elementor-section elementor-top-section elementor-element elementor-element-f63fc53 elementor-section-full_width elementor-section-height-default elementor-section-height-default"
          data-id="f63fc53"
          data-element_type="section"
        >
          <div className="elementor-container elementor-column-gap-no">
            <div
              className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-dfee495"
              data-id="dfee495"
              data-element_type="column"
            >
              <div className="elementor-widget-wrap elementor-element-populated">
                <div
                  className="elementor-element elementor-element-0299f20 elementor-widget elementor-widget-team"
                  data-id="0299f20"
                  data-element_type="widget"
                  data-widget_type="team.default"
                >
                  <div className="elementor-widget-container">
                    <section className="team__area fix p-relative pt-115 pb-80 mb-150">
                      <div className="team__shape">
                        <img
                          decoding="async"
                          className="t-shape-1"
                          src="https://thememaster.net/wp/maxdi/wp-content/themes/maxdi/assets/images/shape/testimonials/t-shape-1.png"
                          alt="image"
                        />
                        <img
                          decoding="async"
                          className="t-shape-2"
                          src="https://thememaster.net/wp/maxdi/wp-content/themes/maxdi/assets/images/shape/testimonials/t-shape-2.png"
                          alt="image"
                        />
                        <img
                          decoding="async"
                          className="t-shape-3"
                          src="https://thememaster.net/wp/maxdi/wp-content/themes/maxdi/assets/images/shape/testimonials/t-shape-3.png"
                          alt="image"
                        />
                        <img
                          decoding="async"
                          className="t-shape-4"
                          src="https://thememaster.net/wp/maxdi/wp-content/themes/maxdi/assets/images/shape/testimonials/t-shape-4.png"
                          alt="image"
                        />
                      </div>
                      <div className="container" style={{ textAlign: "left" }}>
                        <div className="row mb-65">
                          <div className="col-xl-12">
                            <div className="team__heading text-center">
                              <h4
                                className="section__sub-title wow fadeInUp"
                                data-wow-delay=".2s"
                              >
                                Team Members{" "}
                              </h4>
                              <h2
                                className="section__title wow fadeInUp"
                                data-wow-delay=".3s"
                              >
                                <span>Our beloved creative team</span>
                              </h2>
                              <p className="wow fadeInUp" data-wow-delay=".4s">
                                Draw a line in the sand quick win. My capacity
                                is full. Keep it lean gain alignment we need to
                                future-proof this plan.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-xl-3 col-lg-3 col-md-6 mb-40">
                            <div className="team__thumb">
                              <img
                                decoding="async"
                                src="https://thememaster.net/wp/maxdi/wp-content/uploads/2022/07/member-1.jpg"
                                alt="image"
                              />
                            </div>
                            <div className="team__content text-center">
                              <a href="https://thememaster.net/wp/maxdi/team-details">
                                <h3 className="team__title">John Smith</h3>
                              </a>
                              <span className="team__position">
                                Web Developer
                              </span>
                            </div>
                          </div>
                          <div className="col-xl-3 col-lg-3 col-md-6 mb-40">
                            <div className="team__thumb">
                              <img
                                decoding="async"
                                src="https://thememaster.net/wp/maxdi/wp-content/uploads/2022/07/member-2.jpg"
                                alt="image"
                              />
                            </div>
                            <div className="team__content text-center">
                              <a href="https://thememaster.net/wp/maxdi/team-details">
                                <h3 className="team__title">Alisha Alima</h3>
                              </a>
                              <span className="team__position">
                                Product Designer
                              </span>
                            </div>
                          </div>
                          <div className="col-xl-3 col-lg-3 col-md-6 mb-40">
                            <div className="team__thumb">
                              <img
                                decoding="async"
                                src="https://thememaster.net/wp/maxdi/wp-content/uploads/2022/07/member-3.jpg"
                                alt="image"
                              />
                            </div>
                            <div className="team__content text-center">
                              <a href="https://thememaster.net/wp/maxdi/team-details">
                                <h3 className="team__title">David Park</h3>
                              </a>
                              <span className="team__position">
                                UI/UX Designer
                              </span>
                            </div>
                          </div>
                          <div className="col-xl-3 col-lg-3 col-md-6 mb-40">
                            <div className="team__thumb">
                              <img
                                decoding="async"
                                src="https://thememaster.net/wp/maxdi/wp-content/uploads/2022/07/member-4.jpg"
                                alt="image"
                              />
                            </div>
                            <div className="team__content text-center">
                              <a href="https://thememaster.net/wp/maxdi/team-details">
                                <h3 className="team__title">Tailor Milan</h3>
                              </a>
                              <span className="team__position">
                                Marketing Manager
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          className="elementor-section elementor-top-section elementor-element elementor-element-28d22ad elementor-section-full_width elementor-section-height-default elementor-section-height-default"
          data-id="28d22ad"
          data-element_type="section"
        >
          <div className="elementor-container elementor-column-gap-no">
            <div
              className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-e0efee9"
              data-id="e0efee9"
              data-element_type="column"
            >
              <div className="elementor-widget-wrap elementor-element-populated">
                <div
                  className="elementor-element elementor-element-15b74ad elementor-widget elementor-widget-project"
                  data-id="15b74ad"
                  data-element_type="widget"
                  data-widget_type="project.default"
                >
                  <div className="elementor-widget-container">
                    <section className="project__area p-relative pt-130">
                      <div className="project__shape">
                        <img
                          decoding="async"
                          className="project-s-1"
                          src="https://thememaster.net/wp/maxdi/wp-content/themes/maxdi/assets/images/shape/project/p-s-1.png"
                          alt="image"
                        />
                        <img
                          decoding="async"
                          className="project-s-2"
                          src="https://thememaster.net/wp/maxdi/wp-content/themes/maxdi/assets/images/shape/project/p-s-2.png"
                          alt="image"
                        />
                        <img
                          decoding="async"
                          className="project-s-3"
                          src="https://thememaster.net/wp/maxdi/wp-content/themes/maxdi/assets/images/shape/project/p-s-3.png"
                          alt="image"
                        />
                        <img
                          decoding="async"
                          className="project-s-4 d-none d-lg-block wow zoomIn"
                          data-wow-delay=".8s"
                          src="https://thememaster.net/wp/maxdi/wp-content/themes/maxdi/assets/images/shape/project/p-s-4.png"
                          alt="image"
                        />
                      </div>
                      <div className="container">
                        <div className="row">
                          <div className="col-xl-9 col-lg-10">
                            <div className="project__thumb d-sm-flex">
                              <div className="project__thumb-1">
                                <img
                                  decoding="async"
                                  src="https://thememaster.net/wp/maxdi/wp-content/uploads/2022/07/project-img-1.jpg"
                                  alt="image"
                                />
                              </div>
                              <div className="project__thumb-2">
                                <img
                                  decoding="async"
                                  src="https://thememaster.net/wp/maxdi/wp-content/uploads/2022/07/project-img-2.jpg"
                                  alt="image"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-7 offset-xl-5 col-lg-9 offset-lg-3 col-md-10 offset-md-2 col-sm-11">
                            <div
                              className="project__wrapper"
                              style={{ textAlign: "left" }}
                            >
                              <div className="project__content">
                                <div className="project__title">
                                  <h4
                                    className="section__sub-title wow fadeInUp"
                                    data-wow-delay=".2s"
                                  >
                                    25 Years Of Experience{" "}
                                  </h4>
                                  <h2
                                    className="section__title wow fadeInUp"
                                    data-wow-delay=".3s"
                                  >
                                    <span className="first_title">
                                      Like what you see with
                                    </span>
                                    <span className="second_title">
                                      our online products?
                                    </span>
                                  </h2>
                                  <p
                                    className="wow fadeInUp"
                                    data-wow-delay=".4s"
                                  >
                                    That's not on the roadmap losing these
                                    latest prospects is like putting socks on an
                                    octopus to give you a heads-up.
                                  </p>
                                  <a
                                    href="https://thememaster.net/wp/maxdi/contact"
                                    className="m-btn mt-35"
                                  >
                                    Start a Project
                                  </a>
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
            </div>
          </div>
        </section>

        {/* cards */}
        <section
          className="elementor-section elementor-top-section elementor-element elementor-element-463d3b5 elementor-section-full_width elementor-section-height-default elementor-section-height-default"
          data-id="463d3b5"
          data-element_type="section"
        >
          <div className="elementor-container elementor-column-gap-no">
            <div
              className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-3cdfe88"
              data-id="3cdfe88"
              data-element_type="column"
            >
              <div className="elementor-widget-wrap elementor-element-populated">
                <div
                  className="elementor-element elementor-element-ab06277 elementor-widget elementor-widget-blog"
                  data-id="ab06277"
                  data-element_type="widget"
                  data-widget_type="blog.default"
                >
                  <div className="elementor-widget-container">
                    <section className="blog__area fix p-relative pt-60 pb-80">
                      <div className="blog__shape">
                        <img
                          decoding="async"
                          className="blog-shape-1"
                          src="https://thememaster.net/wp/maxdi/wp-content/themes/maxdi/assets/images/shape/blog/blog-s-1.png"
                          alt="image"
                        />
                        <img
                          decoding="async"
                          className="blog-shape-2"
                          src="https://thememaster.net/wp/maxdi/wp-content/themes/maxdi/assets/images/shape/blog/blog-s-2.png"
                          alt="image"
                        />
                        <img
                          decoding="async"
                          className="blog-shape-3 d-none d-sm-block"
                          src="https://thememaster.net/wp/maxdi/wp-content/themes/maxdi/assets/images/shape/blog/blog-s-3.png"
                          alt="image"
                        />
                        <img
                          decoding="async"
                          className="blog-shape-4"
                          src="https://thememaster.net/wp/maxdi/wp-content/themes/maxdi/assets/images/shape/blog/blog-s-4.png"
                          alt="image"
                        />
                        <img
                          decoding="async"
                          className="blog-shape-5 d-none d-sm-block"
                          src="https://thememaster.net/wp/maxdi/wp-content/themes/maxdi/assets/images/shape/blog/blog-s-5.png"
                          alt="image"
                        />
                      </div>
                      <div className="container">
                        <div className="row mb-65">
                          <div className="col-xl-12">
                            <div className="blog__title text-center">
                              <h4
                                className="section__sub-title wow fadeInUp"
                                data-wow-delay=".2s"
                                style={{
                                  visibility: "visible",
                                  "-webkit-animation-delay": "0.2s",
                                  "animation-delay": "0.2s",
                                  "-webkit-animation-name": "_fadeInUp",
                                  "animation-name": "_fadeInUp",
                                }}
                              >
                                Our Blog{" "}
                              </h4>
                              <h2
                                className="section__title wow fadeInUp"
                                data-wow-delay=".3s"
                                style={{
                                  visibility: "visible",
                                  "-webkit-animation-delay": "0.3s",
                                  "animation-delay": "0.3s",
                                  "-webkit-animation-name": "_fadeInUp",
                                  "animation-name": "_fadeInUp",
                                }}
                              >
                                <span>Our latest updates</span>
                              </h2>
                              <p
                                className="wow fadeInUp"
                                data-wow-delay=".6s"
                                style={{
                                  visibility: "visible",
                                  "-webkit-animation-delay": "0.6s",
                                  "animation-delay": "0.6s",
                                  "-webkit-animation-name": "_fadeInUp",
                                  "animation-name": "_fadeInUp",
                                }}
                              >
                                High turnaround rate and loop back vec but we
                                want to empower the team with the right tools
                                and guidance.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-xl-4 col-lg-4 col-md-6">
                            <div className="blog__item mb-40">
                              <div className="blog__thumb">
                                <a href="https://thememaster.net/wp/maxdi/everything-you-need-to-know-and-branding-web-design/">
                                  <img
                                    decoding="async"
                                    src="https://thememaster.net/wp/maxdi/wp-content/uploads/2022/07/blog-4.jpg"
                                    alt="blog"
                                  />
                                </a>
                              </div>
                              <div className="blog__content">
                                <div className="blog__date d-flex align-items-center justify content-between">
                                  <BiSolidTimeFive style={{ color: "black" }} />
                                  &nbsp;&nbsp;&nbsp;
                                  <p>19 Jul, 2022</p>
                                  <a
                                    href="https://thememaster.net/wp/maxdi/category/development/"
                                    className="m-btn blog-btn"
                                  >
                                    Development{" "}
                                  </a>
                                </div>
                                <h3>
                                  <a href="https://thememaster.net/wp/maxdi/everything-you-need-to-know-and-branding-web-design/">
                                    Everything you need to know and branding web
                                    design{" "}
                                  </a>
                                </h3>
                                <div className="blog__link">
                                  <a
                                    href="https://thememaster.net/wp/maxdi/everything-you-need-to-know-and-branding-web-design/"
                                    className="arrow-btn"
                                  >
                                    Continue Reading&nbsp;&nbsp;&nbsp;
                                    <AiOutlineArrowRight
                                      style={{ color: "black" }}
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-4 col-lg-4 col-md-6">
                            <div className="blog__item mb-40">
                              <div className="blog__thumb">
                                <a href="https://thememaster.net/wp/maxdi/delivering-the-best-digital-marketing-solution-creative-team/">
                                  <img
                                    decoding="async"
                                    src="https://thememaster.net/wp/maxdi/wp-content/uploads/2022/07/blog-img-2.jpg"
                                    alt="blog"
                                  />
                                </a>
                              </div>
                              <div className="blog__content">
                                <div className="blog__date d-flex align-items-center justify content-between">
                                  <BiSolidTimeFive style={{ color: "black" }} />{" "}
                                  &nbsp;&nbsp;
                                  <p>01 Jul, 2022</p>
                                  <a
                                    href="https://thememaster.net/wp/maxdi/category/development/"
                                    className="m-btn blog-btn"
                                  >
                                    Development{" "}
                                  </a>
                                </div>
                                <h3>
                                  <a href="https://thememaster.net/wp/maxdi/delivering-the-best-digital-marketing-solution-creative-team/">
                                    Delivering the best digital marketing
                                    solution creative team{" "}
                                  </a>
                                </h3>
                                <div className="blog__link">
                                  <a
                                    href="https://thememaster.net/wp/maxdi/delivering-the-best-digital-marketing-solution-creative-team/"
                                    className="arrow-btn"
                                  >
                                    Continue Reading&nbsp;&nbsp;
                                    <AiOutlineArrowRight
                                      style={{ color: "black" }}
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-4 col-lg-4 col-md-6">
                            <div className="blog__item mb-40">
                              <div className="blog__thumb">
                                <a href="https://thememaster.net/wp/maxdi/post-launch-creative-shower-initiative-take-root-over-mart/">
                                  <img
                                    decoding="async"
                                    src="https://thememaster.net/wp/maxdi/wp-content/uploads/2022/07/blog-img-1.jpg"
                                    alt="blog"
                                  />
                                </a>
                              </div>
                              <div className="blog__content">
                                <div className="blog__date d-flex align-items-center justify content-between">
                                  <BiSolidTimeFive style={{ color: "black" }} />
                                  &nbsp;&nbsp;
                                  <p>01 Jul, 2022</p>
                                  <a
                                    href="https://thememaster.net/wp/maxdi/category/branding/"
                                    className="m-btn blog-btn"
                                  >
                                    Branding{" "}
                                  </a>
                                </div>
                                <h3>
                                  <a href="https://thememaster.net/wp/maxdi/post-launch-creative-shower-initiative-take-root-over-mart/">
                                    Post launch creative shower initiative take
                                    root over mart{" "}
                                  </a>
                                </h3>
                                <div className="blog__link">
                                  <a
                                    href="https://thememaster.net/wp/maxdi/post-launch-creative-shower-initiative-take-root-over-mart/"
                                    className="arrow-btn"
                                  >
                                    Continue Reading&nbsp;&nbsp;
                                    <AiOutlineArrowRight
                                      style={{ color: "black" }}
                                    />
                                  </a>
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
            </div>
          </div>
        </section>
        {/* cards */}
      </div>
      {/* lets-work area start */}
      <section className="lets-work__area p-relative pt-165 pb-160">
        <div className="lets-work__shape">
          <img
            className="lets-work-shape-1 d-none d-lg-block"
            src="https://thememaster.net/wp/maxdi/wp-content/themes/maxdi/assets/images/shape/lets-work/lets-work-s-1.png"
            alt="image"
          />
          <img
            className="lets-work-shape-2 d-none d-lg-block"
            src="https://thememaster.net/wp/maxdi/wp-content/themes/maxdi/assets/images/shape/lets-work/lets-work-s-2.png"
            alt="image"
          />
          <img
            className="lets-work-shape-3 d-none d-sm-block"
            src="https://thememaster.net/wp/maxdi/wp-content/themes/maxdi/assets/images/shape/lets-work/lets-work-s-3.png"
            alt="image"
          />
          <img
            className="lets-work-shape-4 d-none d-sm-block"
            src="https://thememaster.net/wp/maxdi/wp-content/themes/maxdi/assets/images/shape/lets-work/lets-work-s-4.png"
            alt="image"
          />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="lets-work__title text-center">
                <h4
                  className="section__sub-title wow fadeInUp"
                  data-wow-delay=".2s"
                >
                  Let’s Work Together{" "}
                </h4>
                <h2
                  className="section__title wow fadeInUp"
                  data-wow-delay=".3s"
                >
                  <span>Need a successful</span>
                  project?{" "}
                </h2>
                <a
                  className="m-btn mt-35 wow fadeInUp"
                  data-wow-delay=".6s"
                  href="https://thememaster.net/wp/maxdi/contact"
                >
                  Estimate Project
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* lets-work area end */}
      {/* footer area start */}
      <footer>
        <div
          className="footer__area fix p-relative "
          style={{ textAlign: "left" }}
        >
          <div className="footer__shape">
            <img
              className="footer-shape-1 wow fadeInDown"
              data-wow-delay="1s"
              src="https://thememaster.net/wp/maxdi/wp-content/themes/maxdi/assets/images/shape/footer/footer-s-1.png"
              alt="image"
            />
            <img
              className="footer-shape-2 wow fadeInUp"
              data-wow-delay="1.6s"
              src="https://thememaster.net/wp/maxdi/wp-content/themes/maxdi/assets/images/shape/footer/footer-s-2.png"
              alt="image"
            />
          </div>
          <div className="footer__top pt-200 pb-40">
            <div className="container">
              <div className="row mb-145">
                <div className="col-xxl-6 col-xl-7 col-lg-8 col-md-10">
                  <div className="footer__newsletter">
                    <h4
                      className="section__sub-title wow fadeInUp"
                      data-wow-delay=".2s"
                    >
                      join our community{" "}
                    </h4>
                    <h2
                      className="section__title wow fadeInUp"
                      data-wow-delay=".4s"
                    >
                      <span>Subscribe for newsletter</span>
                    </h2>
                  </div>
                </div>
                <div className="col-xxl-5 offset-xxl-1 col-xl-5 col-lg-4 col-md-4">
                  <div className="widget_text footer__widget footer__widget-link">
                    <div className="textwidget custom-html-widget">
                      <div className="footer__subscribe">
                        <form action="#">
                          <div className="footer__subscribe-input">
                            <div className="form-group">
                              <input
                                type="email"
                                className="form-control"
                                placeholder="Email address"
                              />
                            </div>
                            <button type="submit">Subscribe</button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>{" "}
                </div>
              </div>
              <div className="row">
                <div className="col-xl-4 col-lg-4 col-md-10 col-sm-10">
                  <div
                    className="footer__widget wow fadeIn"
                    data-wow-delay=".5s"
                  >
                    <div className="footer__widget-logo">
                      <img
                        src="https://thememaster.net/wp/maxdi/wp-content/uploads/2022/07/Logo-footer.svg"
                        alt="logo"
                      />
                      <p>
                        Core object made kolor adipisci elit sed diam nonummy
                        nibh euismod tincidunt laoreet dolore magna grinjon.
                      </p>
                    </div>
                    <div className="footer__widget-social">
                      <a href="#">
                        <BiLogoFacebook />
                      </a>
                      <a href="#">
                        <GrTwitter />
                      </a>
                      <a href="#">
                        <BsInstagram />
                      </a>
                      <a href="#">
                        <BsYoutube />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-xl-2 col-lg-2 col-md-4 col-sm-6">
                  <div
                    className="footer__widget wow fadeIn"
                    data-wow-delay=".7s"
                  >
                    <div className="footer__widget-link">
                      <div className="footer__widget-title">
                        <h5>Our Services</h5>
                      </div>
                      <div className="menu-footer-menu-1-container">
                        <ul id="menu-footer-menu-1" className="menu">
                          <li
                            id="menu-item-101"
                            className="menu-item menu-item-type-custom menu-item-object-custom menu-item-101"
                          >
                            <a href="#">Development</a>
                          </li>
                          <li
                            id="menu-item-102"
                            className="menu-item menu-item-type-custom menu-item-object-custom menu-item-102"
                          >
                            <a href="#">Marketing</a>
                          </li>
                          <li
                            id="menu-item-103"
                            className="menu-item menu-item-type-custom menu-item-object-custom menu-item-103"
                          >
                            <a href="#">UI/UX Design</a>
                          </li>
                          <li
                            id="menu-item-104"
                            className="menu-item menu-item-type-custom menu-item-object-custom menu-item-104"
                          >
                            <a href="#">E-Commerce</a>
                          </li>
                          <li
                            id="menu-item-105"
                            className="menu-item menu-item-type-custom menu-item-object-custom menu-item-105"
                          >
                            <a href="#">Content Writing</a>
                          </li>
                        </ul>
                      </div>
                    </div>{" "}
                  </div>
                </div>
                <div className="col-xl-2 col-lg-2 col-md-4 col-sm-6">
                  <div
                    className="footer__widget footer__widget-mt-2 wow fadeIn"
                    data-wow-delay=".9s"
                  >
                    <div className="footer__widget-link">
                      <div className="footer__widget-title">
                        <h5>Company</h5>
                      </div>
                      <div className="menu-footer-menu-2-container">
                        <ul id="menu-footer-menu-2" className="menu">
                          <li
                            id="menu-item-106"
                            className="menu-item menu-item-type-custom menu-item-object-custom menu-item-106"
                          >
                            <a href="#">About us</a>
                          </li>
                          <li
                            id="menu-item-107"
                            className="menu-item menu-item-type-custom menu-item-object-custom menu-item-107"
                          >
                            <a href="#">Portfolio</a>
                          </li>
                          <li
                            id="menu-item-108"
                            className="menu-item menu-item-type-custom menu-item-object-custom menu-item-108"
                          >
                            <a href="#">Our Team</a>
                          </li>
                          <li
                            id="menu-item-109"
                            className="menu-item menu-item-type-custom menu-item-object-custom menu-item-109"
                          >
                            <a href="#">Contact</a>
                          </li>
                          <li
                            id="menu-item-110"
                            className="menu-item menu-item-type-custom menu-item-object-custom menu-item-110"
                          >
                            <a href="#">Faqs</a>
                          </li>
                        </ul>
                      </div>
                    </div>{" "}
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-10">
                  <div
                    className="footer__widget footer__widget-mt wow fadeIn"
                    data-wow-delay="1.2s"
                  >
                    <div className="widget_text footer__widget-link">
                      <div className="footer__widget-title">
                        <h5>Stay Connected</h5>
                      </div>
                      <div className="textwidget custom-html-widget">
                        <div className="footer__widget-info">
                          <div className="footer__widget-address">
                            <p>
                              66 Broklyn Street, New York United States of
                              America
                            </p>
                          </div>
                          <div className="footer__widget-phone d-flex align-items-center">
                            <BsTelephoneFill
                              style={{ color: "#c5f617", fontSize: "20px" }}
                            />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <p>
                              <a href="tel:+1166442200">+11 66 44 22 00</a>
                            </p>
                          </div>
                          <div className="footer__widget-email d-flex align-items-center">
                            <FaTelegramPlane
                              style={{ color: "#7432ff", fontSize: "26px" }}
                            />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <p>
                              <a href="mailto:info@example.com">
                                info@example.com
                              </a>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer__bottom">
            <div className="container">
              <div className="row">
                <div className="col-xl-12">
                  <div className="footer__copyright">
                    <p>Copyright © 2023 ThemeMaster</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* footer area end */}
    </div>
  );
};

export default About;
