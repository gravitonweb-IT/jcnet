import React from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { GoLocation } from "react-icons/go";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { BiLogoFacebook } from "react-icons/bi";
import { GrTwitter } from "react-icons/gr";
import { BsInstagram } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { BsTelephoneFill } from "react-icons/bs";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";
import { BsArrowUp } from "react-icons/bs";
import { MdArrowForward } from "react-icons/md";
import CountUp from "react-countup";
import { AiFillPlayCircle } from "react-icons/ai";
import { AiOutlineArrowDown } from "react-icons/ai";

const Contact = () => {
  return (
    <div>
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
              "stroke-dashoffset": "272.873",
            }}
          />
        </svg>
      </div>

      <div className="offcanvas-overlay" />

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
            style={{
              visibility: "visible",
              "-webkit-animation-delay": "1s",
              "animation-delay": "1s",
              "-webkit-animation-name": "_fadeInDown",
              "animation-name": "_fadeInDown",
            }}
          />
          <img
            className="page-title-s-6 wow fadeInUp"
            data-wow-delay=".6s"
            src="https://thememaster.net/wp/maxdi/wp-content/themes/maxdi/assets/images/shape/page-title/page-title-s-6.png"
            alt="image"
            style={{
              visibility: "visible",
              "-webkit-animation-delay": "0.6s",
              "animation-delay": "0.6s",
              "-webkit-animation-name": "_fadeInUp",
              "animation-name": "_fadeInUp",
            }}
          />
          <img
            className="page-title-s-7 d-none d-md-block"
            src="https://thememaster.net/wp/maxdi/wp-content/themes/maxdi/assets/images/shape/page-title/page-title-s-7.png"
            alt="image"
          />
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
                            <a href="#" rel="home" itemProp="item">
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

      <div
        data-elementor-type="wp-page"
        data-elementor-id={82}
        className="elementor elementor-82"
      >
        <section
          className="elementor-section elementor-top-section elementor-element elementor-element-784cbbb elementor-section-full_width elementor-section-height-default elementor-section-height-default"
          data-id="784cbbb"
          data-element_type="section"
        >
          <div className="elementor-container elementor-column-gap-no">
            <div
              className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-3dfd40c"
              data-id="3dfd40c"
              data-element_type="column"
            >
              <div className="elementor-widget-wrap elementor-element-populated">
                <div
                  className="elementor-element elementor-element-ca02ded elementor-widget elementor-widget-contact-info"
                  data-id="ca02ded"
                  data-element_type="widget"
                  data-widget_type="contact-info.default"
                >
                  <div className="elementor-widget-container">
                    <section className="contact__area fix p-relative pt-120 pb-190">
                      <div className="container" style={{ textAlign: "left" }}>
                        <div className="row align-items-center">
                          <div className="col-xl-6 col-lg-7 col-md-8">
                            <div className="contact__info">
                              <div className="contact__info-content d-flex mb-30">
                                <div className="contact__info-icon white">
                                  <GoLocation className="text-white text-3xl" />
                                </div>
                                <div className="contact__info-title">
                                  <h5>Office Address</h5>
                                  <p>
                                    66 Broklyn Street, New York United States of
                                    America
                                  </p>
                                </div>
                              </div>
                              <div className="contact__info-content d-flex mb-30">
                                <div className="contact__info-icon green">
                                  <BsFillTelephoneFill
                                    style={{ color: "#c5f617" }}
                                  />
                                </div>
                                <div className="contact__info-title">
                                  <h5>Phone</h5>
                                  <p>
                                    <a href="tel:+0066442211">
                                      +00 66 44 22 11
                                    </a>
                                  </p>
                                  <p>
                                    <a href="tel:+0066442211">
                                      +00 66 44 22 11
                                    </a>
                                  </p>
                                  <p />
                                </div>
                              </div>
                              <div className="contact__info-content d-flex mb-30">
                                <div className="contact__info-icon blue">
                                  <FaTelegramPlane
                                    style={{ color: "#7432ff" }}
                                  />
                                </div>
                                <div className="contact__info-title">
                                  <h5>Email us</h5>
                                  <p>
                                    <a href="mailto:info@example.com">
                                      info@example.com
                                    </a>
                                  </p>
                                  <p>
                                    <a href="mailto:info@example.com">
                                      info@example.com
                                    </a>
                                  </p>
                                  <p />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-5 offset-xl-1 col-lg-5 col-md-4">
                            <div className="contact__title">
                              <h2 className="section__title">
                                <span className="first_title">
                                  Ready to get our
                                </span>
                                <span className="second_title">
                                  marketing services
                                </span>
                              </h2>
                              <div className="contact__title-icon">
                                <a href="#contact">
                                  <AiOutlineArrowDown />
                                </a>
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
          className="elementor-section elementor-top-section elementor-element elementor-element-0cf72f2 elementor-section-full_width elementor-section-height-default elementor-section-height-default"
          data-id="0cf72f2"
          data-element_type="section"
        >
          <div className="elementor-container elementor-column-gap-no">
            <div
              className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-2b61a75"
              data-id="2b61a75"
              data-element_type="column"
            >
              <div className="elementor-widget-wrap elementor-element-populated">
                <div
                  className="elementor-element elementor-element-11c1434 elementor-widget elementor-widget-contact-form"
                  data-id="11c1434"
                  data-element_type="widget"
                  data-widget_type="contact-form.default"
                >
                  <div className="elementor-widget-container">
                    <section
                      id="contact"
                      className="project__area project__area-2 p-relative pt-130 mb-120"
                    >
                      <div className="project__shape contact__shape">
                        <img
                          decoding="async"
                          className="project-s-1 c-s-1"
                          src="https://thememaster.net/wp/maxdi/wp-content/themes/maxdi/assets/images/shape/project/p-s-1.png"
                          alt="image"
                        />
                        <img
                          decoding="async"
                          className="project-s-2 c-s-2"
                          src="https://thememaster.net/wp/maxdi/wp-content/themes/maxdi/assets/images/shape/project/p-s-2.png"
                          alt="image"
                        />
                        <img
                          decoding="async"
                          className="project-s-3 c-s-3"
                          src="https://thememaster.net/wp/maxdi/wp-content/themes/maxdi/assets/images/shape/project/p-s-3.png"
                          alt="image"
                        />
                        <img
                          decoding="async"
                          className="project-s-4 c-s-4 d-none d-lg-block"
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
                              <div className="project__thumb-2 project__thumb-3 d-none d-sm-block">
                                <img
                                  decoding="async"
                                  src="https://thememaster.net/wp/maxdi/wp-content/uploads/2022/07/project-img-2.jpg"
                                  alt="image"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-7 offset-xl-5 col-lg-8 offset-lg-4 col-md-10 offset-md-2">
                            <div className="contact__form contact__form-2">
                              <div className="contact__form-title mb-40">
                                <h4>Send us a message </h4>
                              </div>
                              <div className="contact__form-content">
                                <div
                                  className="wpcf7 js"
                                  id="wpcf7-f10-p82-o1"
                                  lang="en-US"
                                  dir="ltr"
                                >
                                  <div className="screen-reader-response">
                                    <p
                                      role="status"
                                      aria-live="polite"
                                      aria-atomic="true"
                                    />{" "}
                                    <ul />
                                  </div>
                                  <form
                                    action="/wp/maxdi/contact/#wpcf7-f10-p82-o1"
                                    method="post"
                                    className="wpcf7-form init"
                                    aria-label="Contact form"
                                    noValidate="novalidate"
                                    data-status="init"
                                  >
                                    <div style={{ display: "none" }}>
                                      <input
                                        type="hidden"
                                        name="_wpcf7"
                                        defaultValue={10}
                                      />
                                      <input
                                        type="hidden"
                                        name="_wpcf7_version"
                                        defaultValue="5.8"
                                      />
                                      <input
                                        type="hidden"
                                        name="_wpcf7_locale"
                                        defaultValue="en_US"
                                      />
                                      <input
                                        type="hidden"
                                        name="_wpcf7_unit_tag"
                                        defaultValue="wpcf7-f10-p82-o1"
                                      />
                                      <input
                                        type="hidden"
                                        name="_wpcf7_container_post"
                                        defaultValue={82}
                                      />
                                      <input
                                        type="hidden"
                                        name="_wpcf7_posted_data_hash"
                                        defaultValue
                                      />
                                    </div>
                                    <div className="field-format d-sm-flex justify-content-between mb-40">
                                      <div className="form-group pr-10 form-group-2">
                                        <p>
                                          <span
                                            className="wpcf7-form-control-wrap"
                                            data-name="name"
                                          >
                                            <input
                                              size={40}
                                              className="wpcf7-form-control wpcf7-text form-control"
                                              id="name"
                                              aria-invalid="false"
                                              placeholder="Your Name"
                                              type="text"
                                              name="name"
                                            />
                                          </span>
                                        </p>
                                      </div>
                                      <div className="form-group pl-10">
                                        <p>
                                          <span
                                            className="wpcf7-form-control-wrap"
                                            data-name="email"
                                          >
                                            <input
                                              size={40}
                                              className="wpcf7-form-control wpcf7-email wpcf7-text wpcf7-validates-as-email form-control"
                                              id="email"
                                              aria-invalid="false"
                                              placeholder="Email Address"
                                              type="email"
                                              name="email"
                                            />
                                          </span>
                                        </p>
                                      </div>
                                    </div>
                                    <div className="form-group mb-40">
                                      <p>
                                        <span
                                          className="wpcf7-form-control-wrap"
                                          data-name="subject"
                                        >
                                          <input
                                            size={40}
                                            className="wpcf7-form-control wpcf7-text form-control"
                                            id="subject"
                                            aria-invalid="false"
                                            placeholder="Subject Here"
                                            type="text"
                                            name="subject"
                                          />
                                        </span>
                                      </p>
                                    </div>
                                    <div className="form-group mb-50">
                                      <p>
                                        <span
                                          className="wpcf7-form-control-wrap"
                                          data-name="message"
                                        >
                                          <textarea
                                            cols={40}
                                            rows={10}
                                            className="wpcf7-form-control wpcf7-textarea form-control"
                                            id="message"
                                            aria-invalid="false"
                                            placeholder="Your Message"
                                            name="message"
                                            defaultValue={""}
                                          />
                                        </span>
                                      </p>
                                    </div>
                                    <p>
                                      <button type="submit" className="m-btn">
                                        Send to us
                                      </button>
                                    </p>
                                    <div
                                      className="wpcf7-response-output"
                                      aria-hidden="true"
                                    />
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
    </div>
  );
};

export default Contact;
