import React from 'react'
import {MdKeyboardDoubleArrowRight} from "react-icons/md"
import {GoLocation} from "react-icons/go";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { BiLogoFacebook } from "react-icons/bi";
import { GrTwitter } from "react-icons/gr";
import { BsInstagram } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { BsTelephoneFill } from "react-icons/bs";
import {BsFillTelephoneFill} from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";
import { BsArrowUp } from "react-icons/bs";
import { MdArrowForward } from "react-icons/md";
import CountUp from 'react-countup';
import {AiFillPlayCircle} from "react-icons/ai";
import {AiOutlineArrowDown} from "react-icons/ai";

const Contact = () => {
  return (
    <div>
    {/* preloader area start */}
    
    {/* preloader area end */}
    {/* back to top start */}
    <div className="progress-wrap active-progress">
      <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
        <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" style={{"-webkit-transition":"stroke-dashoffset 10ms linear 0s","transition":"stroke-dashoffset 10ms linear 0s","stroke-dasharray":"307.919, 307.919","stroke-dashoffset":"272.873"}} />
      </svg>
    </div>
    {/* back to top end */}
    {/* header start */}
    {/* header start */}
    {/* <header>
      <div id="header-sticky" className="header__area header__transparent header__white sticky">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xxl-3 col-xl-3 col-lg-5 col-md-6 col-6">
              <div className="logo">
                <a className="standard-logo" href="https://thememaster.net/wp/maxdi/">
                  <img src="https://thememaster.net/wp/maxdi/wp-content/themes/maxdi/assets/images/logo/logo.svg" alt="logo" />
                </a>
              </div>
            </div>
            <div className="col-xxl-7 col-xl-6 d-none d-xl-block">
              <div className="main-menu main-menu-3 text-end">
                <nav id="mobile-menu" style={{"display":"block"}}>
                  <ul id="menu-main-menu" className><li itemScope="itemscope" itemType="https://www.schema.org/SiteNavigationElement" id="menu-item-111" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home menu-item-has-children dropdown menu-item-111 nav-items"><a title="Home" href="https://thememaster.net/wp/maxdi/" className="nav-link">Home</a>
                      <ul className="submenu" role="menu">
                        <li itemScope="itemscope" itemType="https://www.schema.org/SiteNavigationElement" id="menu-item-92" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home menu-item-92 nav-items"><a title="Digital Agency" href="https://thememaster.net/wp/maxdi/" className="dropdown-items">Digital Agency</a></li>
                        <li itemScope="itemscope" itemType="https://www.schema.org/SiteNavigationElement" id="menu-item-96" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-96 nav-items"><a title="Creative Agency" href="https://thememaster.net/wp/maxdi/creative-agency/" className="dropdown-items">Creative Agency</a></li>
                      </ul>
                    </li>
                    <li itemScope="itemscope" itemType="https://www.schema.org/SiteNavigationElement" id="menu-item-94" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-94 nav-items"><a title="About" href="https://thememaster.net/wp/maxdi/about/" className="nav-link">About</a></li>
                    <li itemScope="itemscope" itemType="https://www.schema.org/SiteNavigationElement" id="menu-item-112" className="menu-item menu-item-type-custom menu-item-object-custom current-menu-ancestor current-menu-parent menu-item-has-children dropdown active menu-item-112 nav-items"><a title="Pages" href="#" className="nav-link">Pages</a>
                      <ul className="submenu" role="menu">
                        <li itemScope="itemscope" itemType="https://www.schema.org/SiteNavigationElement" id="menu-item-95" className="menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-82 current_page_item active menu-item-95 nav-items"><a title="Contact" href="https://thememaster.net/wp/maxdi/contact/" className="dropdown-items">Contact</a></li>
                        <li itemScope="itemscope" itemType="https://www.schema.org/SiteNavigationElement" id="menu-item-93" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-93 nav-items"><a title="Blog" href="https://thememaster.net/wp/maxdi/blog/" className="dropdown-items">Blog</a></li>
                        <li itemScope="itemscope" itemType="https://www.schema.org/SiteNavigationElement" id="menu-item-113" className="menu-item menu-item-type-post_type menu-item-object-post menu-item-113 nav-items"><a title="Blog Details" href="https://thememaster.net/wp/maxdi/delivering-the-best-digital-marketing-solution-creative-team/" className="dropdown-items">Blog Details</a></li>
                        <li itemScope="itemscope" itemType="https://www.schema.org/SiteNavigationElement" id="menu-item-99" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-99 nav-items"><a title="Team" href="https://thememaster.net/wp/maxdi/team/" className="dropdown-items">Team</a></li>
                        <li itemScope="itemscope" itemType="https://www.schema.org/SiteNavigationElement" id="menu-item-100" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-100 nav-items"><a title="Team Details" href="https://thememaster.net/wp/maxdi/team-details/" className="dropdown-items">Team Details</a></li>
                      </ul>
                    </li>
                    <li itemScope="itemscope" itemType="https://www.schema.org/SiteNavigationElement" id="menu-item-98" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children dropdown menu-item-98 nav-items"><a title="Services" href="https://thememaster.net/wp/maxdi/services/" className="nav-link">Services</a>
                      <ul className="submenu" role="menu">
                        <li itemScope="itemscope" itemType="https://www.schema.org/SiteNavigationElement" id="menu-item-114" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-114 nav-items"><a title="Services" href="https://thememaster.net/wp/maxdi/services/" className="dropdown-items">Services</a></li>
                        <li itemScope="itemscope" itemType="https://www.schema.org/SiteNavigationElement" id="menu-item-247" className="menu-item menu-item-type-post_type menu-item-object-alimasha-services menu-item-247 nav-items"><a title="Services Details" href="https://thememaster.net/wp/maxdi/ourservices/web-development/" className="dropdown-items">Services Details</a></li>
                      </ul>
                    </li>
                    <li itemScope="itemscope" itemType="https://www.schema.org/SiteNavigationElement" id="menu-item-97" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children dropdown menu-item-97 nav-items"><a title="Portfolio" href="https://thememaster.net/wp/maxdi/portfolio/" className="nav-link">Portfolio</a>
                      <ul className="submenu" role="menu">
                        <li itemScope="itemscope" itemType="https://www.schema.org/SiteNavigationElement" id="menu-item-115" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-115 nav-items"><a title="Portfolio" href="https://thememaster.net/wp/maxdi/portfolio/" className="dropdown-items">Portfolio</a></li>
                        <li itemScope="itemscope" itemType="https://www.schema.org/SiteNavigationElement" id="menu-item-246" className="menu-item menu-item-type-post_type menu-item-object-alimasha-portfolio menu-item-246 nav-items"><a title="Portfolio Details" href="https://thememaster.net/wp/maxdi/ourportfolio/digital-agency/" className="dropdown-items">Portfolio Details</a></li>
                      </ul>
                    </li>
                  </ul>                              </nav>                            
              </div>
            </div>
            <div className="col-xxl-2 col-xl-3 col-lg-7 col-md-6 col-6">
              <div className="header__right text-end d-flex align-items-center justify-content-end">
                <div className="d-none d-md-block">
                  <a className="m-btn" href="https://thememaster.net/wp/maxdi/contact">Get A Quote</a>
                </div>
                <div className="side-menu-icon d-xl-none">
                  <button className="side-toggle"><i className="fa-solid fa-bars" /></button>
                </div>
              </div>
            </div>                    
          </div>
        </div>
      </div>
    </header> */}
    {/* header end */}
    {/* side info start */}
    {/* mobile menu sidebar start */}
    <div className="fix">
      <div className="side-info">
        <button className="side-info-close"><i className="fas fa-times" /></button>
        <div className="side-info-content">
          <div className="mobile-menu" />
          <div className="sidebar__contact mb-30">
            <div className="contact-list mb-30">
              <ul>
                <li>
                  <i className="fas fa-map-marker-alt" />
                  66 Broklyn Street, New York United States of America                              </li>
                <li>
                  <i className="far fa-paper-plane" />
                  <a href="mailto:http://info@example.com">info@example.com</a>
                </li>
                <li>
                  <BsTelephoneFill />
                  <a href="tel:http://+00%2066%2044%2022%2011">+00 66 44 22 11</a>
                </li>
              </ul>
              <div className="sidebar__social">
                <a href="#"><i className="fab fa-facebook-f" /></a>
                <a href="#"><i className="fab fa-twitter" /></a>
                <a href="#"><i className="fab fa-instagram" /></a>
                <a href="#"><i className="fab fa-google" /></a>
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
        <img className="page-title-s-1 d-none d-md-block" src="https://thememaster.net/wp/maxdi/wp-content/themes/maxdi/assets/images/shape/page-title/page-title-s-1.png" alt="image" />
        <img className="page-title-s-3" src="https://thememaster.net/wp/maxdi/wp-content/themes/maxdi/assets/images/shape/page-title/page-title-s-3.png" alt="image" />
        <img className="page-title-s-4" src="https://thememaster.net/wp/maxdi/wp-content/themes/maxdi/assets/images/shape/page-title/page-title-s-4.png" alt="image" />
        <img className="page-title-s-5 wow fadeInDown" data-wow-delay="1s" src="https://thememaster.net/wp/maxdi/wp-content/themes/maxdi/assets/images/shape/page-title/page-title-s-5.png" alt="image" style={{"visibility":"visible","-webkit-animation-delay":"1s","animation-delay":"1s","-webkit-animation-name":"_fadeInDown","animation-name":"_fadeInDown"}} />
        <img className="page-title-s-6 wow fadeInUp" data-wow-delay=".6s" src="https://thememaster.net/wp/maxdi/wp-content/themes/maxdi/assets/images/shape/page-title/page-title-s-6.png" alt="image" style={{"visibility":"visible","-webkit-animation-delay":"0.6s","animation-delay":"0.6s","-webkit-animation-name":"_fadeInUp","animation-name":"_fadeInUp"}} />
        <img className="page-title-s-7 d-none d-md-block" src="https://thememaster.net/wp/maxdi/wp-content/themes/maxdi/assets/images/shape/page-title/page-title-s-7.png" alt="image" />
      </div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xxl-12">
          <div className="container " style={{ textAlign: "left" }}>
          <div className="row align-items-center">
            <div className="col-xxl-12">
              <div className="page__title-wrapper">
                <h2 className="page__title-heading">Contact </h2>
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
                      <span>Contact</span>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
          </div>
        </div>
      </div>
    </section>
    {/* page-title area end */}
    <div data-elementor-type="wp-page" data-elementor-id={82} className="elementor elementor-82">
      <section className="elementor-section elementor-top-section elementor-element elementor-element-784cbbb elementor-section-full_width elementor-section-height-default elementor-section-height-default" data-id="784cbbb" data-element_type="section">
        <div className="elementor-container elementor-column-gap-no">
          <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-3dfd40c" data-id="3dfd40c" data-element_type="column">
            <div className="elementor-widget-wrap elementor-element-populated">
              <div className="elementor-element elementor-element-ca02ded elementor-widget elementor-widget-contact-info" data-id="ca02ded" data-element_type="widget" data-widget_type="contact-info.default">
                <div className="elementor-widget-container">
                  <section className="contact__area fix p-relative pt-120 pb-190">
                    <div className="container" style={{textAlign:"left"}}>
                      <div className="row align-items-center">
                        <div className="col-xl-6 col-lg-7 col-md-8">
                          <div className="contact__info">
                            <div className="contact__info-content d-flex mb-30">
                              <div className="contact__info-icon white">
                                <GoLocation className='text-white text-3xl'/>
                              </div>
                              <div className="contact__info-title">
                                <h5>Office Address</h5>
                                <p>66 Broklyn Street, New York United States of America</p>
                              </div>
                            </div>
                            <div className="contact__info-content d-flex mb-30">
                              <div className="contact__info-icon green">
                                <BsFillTelephoneFill  style={{color:"#c5f617"}}/>
                              </div>
                              <div className="contact__info-title">
                                <h5>Phone</h5>
                                <p><a href="tel:+0066442211">+00 66 44 22 11</a>
                                </p><p><a href="tel:+0066442211">+00 66 44 22 11</a></p><p />
                              </div>
                            </div>
                            <div className="contact__info-content d-flex mb-30">
                              <div className="contact__info-icon blue">
                                <FaTelegramPlane style={{    color: "#7432ff"}}/>
                              </div>
                              <div className="contact__info-title">
                                <h5>Email us</h5>
                                <p><a href="mailto:info@example.com">info@example.com</a>
                                </p><p><a href="mailto:info@example.com">info@example.com</a></p><p />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-5 offset-xl-1 col-lg-5 col-md-4">
                          <div className="contact__title">
                            <h2 className="section__title">
                              <span className="first_title">Ready to get our</span>
                              <span className="second_title">marketing services</span>
                            </h2>
                            <div className="contact__title-icon">
                              <a href="#contact"><AiOutlineArrowDown /></a>
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
      <section className="elementor-section elementor-top-section elementor-element elementor-element-0cf72f2 elementor-section-full_width elementor-section-height-default elementor-section-height-default" data-id="0cf72f2" data-element_type="section">
        <div className="elementor-container elementor-column-gap-no">
          <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-2b61a75" data-id="2b61a75" data-element_type="column">
            <div className="elementor-widget-wrap elementor-element-populated">
              <div className="elementor-element elementor-element-11c1434 elementor-widget elementor-widget-contact-form" data-id="11c1434" data-element_type="widget" data-widget_type="contact-form.default">
                <div className="elementor-widget-container">
                  <section id="contact" className="project__area project__area-2 p-relative pt-130 mb-120">
                    <div className="project__shape contact__shape">
                      <img decoding="async" className="project-s-1 c-s-1" src="https://thememaster.net/wp/maxdi/wp-content/themes/maxdi/assets/images/shape/project/p-s-1.png" alt="image" />
                      <img decoding="async" className="project-s-2 c-s-2" src="https://thememaster.net/wp/maxdi/wp-content/themes/maxdi/assets/images/shape/project/p-s-2.png" alt="image" />
                      <img decoding="async" className="project-s-3 c-s-3" src="https://thememaster.net/wp/maxdi/wp-content/themes/maxdi/assets/images/shape/project/p-s-3.png" alt="image" />
                      <img decoding="async" className="project-s-4 c-s-4 d-none d-lg-block" src="https://thememaster.net/wp/maxdi/wp-content/themes/maxdi/assets/images/shape/project/p-s-4.png" alt="image" />
                    </div>
                    <div className="container">
                      <div className="row">
                        <div className="col-xl-9 col-lg-10">
                          <div className="project__thumb d-sm-flex">
                            <div className="project__thumb-1">
                              <img decoding="async" src="https://thememaster.net/wp/maxdi/wp-content/uploads/2022/07/project-img-1.jpg" alt="image" />
                            </div>
                            <div className="project__thumb-2 project__thumb-3 d-none d-sm-block">
                              <img decoding="async" src="https://thememaster.net/wp/maxdi/wp-content/uploads/2022/07/project-img-2.jpg" alt="image" />
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-7 offset-xl-5 col-lg-8 offset-lg-4 col-md-10 offset-md-2">
                          <div className="contact__form contact__form-2">
                            <div className="contact__form-title mb-40">
                              <h4>
                                Send us a message                              </h4>
                            </div>
                            <div className="contact__form-content">
                              <div className="wpcf7 js" id="wpcf7-f10-p82-o1" lang="en-US" dir="ltr">
                                <div className="screen-reader-response"><p role="status" aria-live="polite" aria-atomic="true" /> <ul /></div>
                                <form action="/wp/maxdi/contact/#wpcf7-f10-p82-o1" method="post" className="wpcf7-form init" aria-label="Contact form" noValidate="novalidate" data-status="init">
                                  <div style={{"display":"none"}}>
                                    <input type="hidden" name="_wpcf7" defaultValue={10} />
                                    <input type="hidden" name="_wpcf7_version" defaultValue="5.8" />
                                    <input type="hidden" name="_wpcf7_locale" defaultValue="en_US" />
                                    <input type="hidden" name="_wpcf7_unit_tag" defaultValue="wpcf7-f10-p82-o1" />
                                    <input type="hidden" name="_wpcf7_container_post" defaultValue={82} />
                                    <input type="hidden" name="_wpcf7_posted_data_hash" defaultValue />
                                  </div>
                                  <div className="field-format d-sm-flex justify-content-between mb-40">
                                    <div className="form-group pr-10 form-group-2">
                                      <p><span className="wpcf7-form-control-wrap" data-name="name"><input size={40} className="wpcf7-form-control wpcf7-text form-control" id="name" aria-invalid="false" placeholder="Your Name" defaultValue type="text" name="name" /></span>
                                      </p>
                                    </div>
                                    <div className="form-group pl-10">
                                      <p><span className="wpcf7-form-control-wrap" data-name="email"><input size={40} className="wpcf7-form-control wpcf7-email wpcf7-text wpcf7-validates-as-email form-control" id="email" aria-invalid="false" placeholder="Email Address" defaultValue type="email" name="email" /></span>
                                      </p>
                                    </div>
                                  </div>
                                  <div className="form-group mb-40">
                                    <p><span className="wpcf7-form-control-wrap" data-name="subject"><input size={40} className="wpcf7-form-control wpcf7-text form-control" id="subject" aria-invalid="false" placeholder="Subject Here" defaultValue type="text" name="subject" /></span>
                                    </p>
                                  </div>
                                  <div className="form-group mb-50">
                                    <p><span className="wpcf7-form-control-wrap" data-name="message"><textarea cols={40} rows={10} className="wpcf7-form-control wpcf7-textarea form-control" id="message" aria-invalid="false" placeholder="Your Message" name="message" defaultValue={""} /></span>
                                    </p>
                                  </div>
                                  <p><button type="submit" className="m-btn">Send to us</button>
                                  </p><div className="wpcf7-response-output" aria-hidden="true" />
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
          </div>
        </div>
      </section>
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
    <span id="elementor-device-mode" className="elementor-screen-only" />
  </div>
  )
}

export default Contact