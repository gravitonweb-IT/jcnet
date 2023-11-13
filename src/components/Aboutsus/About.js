import React, { useState, useEffect } from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import "./about.css";
import { AiOutlineArrowRight } from "react-icons/ai";
import { BiSolidTimeFive } from "react-icons/bi";

import { MdArrowForward } from "react-icons/md";
import CountUp from "react-countup";
import { AiFillPlayCircle } from "react-icons/ai";
import { Navbar, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
const About = () => {
  // scroll
  const [isVisible, setIsVisible] = useState(false);

  // Show the arrow when the user scrolls down
  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to the top of the page when the arrow is clicked
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const progressCircleStyle = {
    WebkitTransition: "stroke-dashoffset 10ms linear 0s",
    transition: "stroke-dashoffset 10ms linear 0s",
    strokeDasharray: "307.919, 307.919",
    strokeDashoffset: "252.45",
  };
  return (
    <div>
      <div className={`progress-arrow-container ${isVisible ? "visible" : ""}`}>
        <div className="progress-wrap active-progress" onClick={scrollToTop}>
          <svg
            className="progress-circle svg-content"
            width="100%"
            height="100%"
            viewBox="-1 -1 102 102"
          >
            <path
              d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
              style={{ strokeDashoffset: isVisible ? 0 : 308 }} // Adjust the value based on your circle's circumference
            />
          </svg>
          <div className="custom-icon5 animate-bounce">
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
                      <span itemProp="name">Home</span>

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
                                  Elevate Your Brand with Our Consultancy
                                  Expertise
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
                                we redefine elegance in consultancy. Our team is
                                dedicated to enhancing the sophistication and
                                style of your brand, providing expert guidance
                                that transcends the ordinary.
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
                              <h2
                                className="section__title wow fadeInUp"
                                data-wow-delay=".3s"
                              >
                                <span className="first_title">
                                  Explore Our Expert
                                </span>
                                <span className="second_title">
                                  Consultancy Services
                                </span>
                              </h2>
                              <p className="wow fadeInUp" data-wow-delay=".4s">
                                Unlock the full potential of your business with
                                our expert consultancy services , we're here to
                                guide you towards success. Explore the future of
                                your business with confidence, innovation, and a
                                trusted partner by your side.
                              </p>

                              <Nav.Link
                                as={Link}
                                to="/Contact"
                                className="m-btn mt-35 wow fadeInUp"
                                data-wow-delay=".6s"
                              >
                                Start a Project
                              </Nav.Link>
                            </div>
                          </div>
                          <div className="col-xl-7 col-lg-6 col-md-9">
                            <div className="experience__video-btn">
                              <Nav.Link
                                as={Link}
                                to="/"
                                className="popup-video"
                              >
                                <AiFillPlayCircle />
                              </Nav.Link>
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
                              <a href="#">
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
                              <a href="#">
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
                              <a href="#">
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
                              <a href="#">
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
                                  <h2
                                    className="section__title wow fadeInUp"
                                    data-wow-delay=".3s"
                                  >
                                    <span className="first_title">
                                      Transform with Our Online Consultancy
                                    </span>
                                    <span className="second_title">
                                      Solutions
                                    </span>
                                  </h2>
                                  <p
                                    className="wow fadeInUp"
                                    data-wow-delay=".4s"
                                  >
                                    Explore a world of transformative
                                    possibilities with our cutting-edge online
                                    consultancy services. Unlock unparalleled
                                    insights and solutions to propel your
                                    business forward.
                                  </p>
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
                        {/* <img
                          decoding="async"
                          className="blog-shape-5 d-none d-sm-block"
                          src="https://thememaster.net/wp/maxdi/wp-content/themes/maxdi/assets/images/shape/blog/blog-s-5.png"
                          alt="image"
                        /> */}
                      </div>
                      <div className="container">
                        <div className="row mb-65 mt-50">
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
                                <img
                                  decoding="async"
                                  src="https://thememaster.net/wp/maxdi/wp-content/uploads/2022/07/blog-4.jpg"
                                  alt="blog"
                                />
                              </div>
                              <div className="blog__content">
                                <div className="blog__date d-flex align-items-center justify content-between">
                                  <BiSolidTimeFive style={{ color: "black" }} />
                                  &nbsp;&nbsp;&nbsp;
                                  <p>19 Jul, 2022</p>
                                </div>
                                <h3>AI's Impact on the Hotel Experience</h3>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-4 col-lg-4 col-md-6">
                            <div className="blog__item mb-40">
                              <div className="blog__thumb">
                                <img
                                  decoding="async"
                                  src="https://thememaster.net/wp/maxdi/wp-content/uploads/2022/07/blog-img-2.jpg"
                                  alt="blog"
                                />
                              </div>
                              <div className="blog__content">
                                <div className="blog__date d-flex align-items-center justify content-between">
                                  <BiSolidTimeFive style={{ color: "black" }} />{" "}
                                  &nbsp;&nbsp;
                                  <p>01 Jul, 2022</p>
                                </div>
                                <h3>Essential Equipment and Machinery</h3>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-4 col-lg-4 col-md-6">
                            <div className="blog__item mb-40">
                              <div className="blog__thumb">
                                <img
                                  decoding="async"
                                  src="https://thememaster.net/wp/maxdi/wp-content/uploads/2022/07/blog-img-1.jpg"
                                  alt="blog"
                                />
                              </div>
                              <div className="blog__content">
                                <div className="blog__date d-flex align-items-center justify content-between">
                                  <BiSolidTimeFive style={{ color: "black" }} />
                                  &nbsp;&nbsp;
                                  <p>01 Jul, 2022</p>
                                </div>
                                <h3>Dynamic Power of NOC in Consultancy</h3>
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
                <Nav.Link
                  as={Link}
                  to="/Contact"
                  className="p-10 m-btn mt-35 wow fadeInUp"
                  data-wow-delay=".6s"
                >
                  {" "}
                  Estimate Project
                </Nav.Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* lets-work area end */}
    </div>
  );
};

export default About;
