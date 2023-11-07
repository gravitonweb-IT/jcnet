import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { BsArrowUp } from "react-icons/bs";
import "./home.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CountUp from "react-countup";
import { AiOutlineArrowRight } from "react-icons/ai";
import { BiSolidTimeFive } from "react-icons/bi";
import { Tabs, Tab } from "react-bootstrap";




const Home = () => {
  const [end, setEnd] = useState(0);
  const [count, setCount] = useState(0);
  const [activeTab, setActiveTab] = useState("monthly");
  const [key, setKey] = useState("all");
  const handleTabSelect = (tabKey) => {
    setActiveTab(tabKey);
  };

  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1000,
  };

  useEffect(() => {
    // Get the last counted value from localStorage
    const lastCount = parseInt(localStorage.getItem("lastCount"), 10) || 0;

    if (lastCount < 500) {
      // Increment the count and store it in localStorage
      const interval = setInterval(() => {
        const newCount = end + 1;
        setEnd(newCount);
        localStorage.setItem("lastCount", newCount.toString());
        if (newCount === 500) {
          clearInterval(interval);
        }
      }, 1000);

      return () => clearInterval(interval);
    } else {
      setEnd(500);
    }
  }, [end]);
  useEffect(() => {
    // Get the last counted value from localStorage
    const lastCount = parseInt(localStorage.getItem("lastCount"), 10) || 0;

    if (lastCount < 280) {
      // Increment the count and store it in localStorage
      const interval = setInterval(() => {
        const newCount = count + 1;
        setCount(newCount);
        localStorage.setItem("lastCount", newCount.toString());
        if (newCount === 280) {
          clearInterval(interval);
        }
      }, 1000);

      return () => clearInterval(interval);
    } else {
      setCount(280);
    }
  }, [count]);

  return (
    <div>
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

      <div className="offcanvas-overlay" />

      <div
        data-elementor-type="wp-page"
        data-elementor-id={74}
        className="elementor elementor-74"
      >
        <section
          className="elementor-section elementor-top-section elementor-element elementor-element-067ec98 elementor-section-full_width elementor-section-height-default elementor-section-height-default"
          data-id="067ec98"
          data-element_type="section"
        >
          <div className="elementor-container elementor-column-gap-no">
            <div
              className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-906c9ed"
              data-id="906c9ed"
              data-element_type="column"
            >
              <div className="elementor-widget-wrap elementor-element-populated">
                <div
                  className="elementor-element elementor-element-d6137a8 elementor-widget elementor-widget-hero-creative"
                  data-id="d6137a8"
                  data-element_type="widget"
                  data-widget_type="hero-creative.default"
                >
                  <div className="elementor-widget-container">
                    <section className="hero__area-2 fix p-relative">
                      <div className="hero__shape-2">
                        <img
                          decoding="async"
                          className="hero2-s-1"
                          src="https://thememaster.net/wp/maxdi/wp-content/themes/maxdi/assets/images/shape/hero2/hero2-s-1.png"
                          alt="image"
                        />
                        <img
                          decoding="async"
                          className="hero2-s-2"
                          src="https://thememaster.net/wp/maxdi/wp-content/themes/maxdi/assets/images/shape/hero2/hero2-s-2.png"
                          alt="image"
                        />
                        <img
                          decoding="async"
                          className="hero2-s-3 d-none d-xl-block"
                          src="https://thememaster.net/wp/maxdi/wp-content/themes/maxdi/assets/images/shape/hero2/hero2-s-3.png"
                          alt="image"
                        />
                        <img
                          decoding="async"
                          className="hero2-s-4 d-none d-lg-block"
                          src="https://thememaster.net/wp/maxdi/wp-content/themes/maxdi/assets/images/shape/hero2/hero2-s-4.png"
                          alt="image"
                        />
                        <img
                          decoding="async"
                          className="hero2-s-5 wow zoomIn"
                          data-wow-delay=".8s"
                          src="https://thememaster.net/wp/maxdi/wp-content/themes/maxdi/assets/images/shape/hero2/hero2-s-5.png"
                          alt="image"
                        />
                        <img
                          decoding="async"
                          className="hero2-s-6 wow zoomIn"
                          data-wow-delay="1.7s"
                          src="https://thememaster.net/wp/maxdi/wp-content/themes/maxdi/assets/images/shape/hero2/hero2-s-6.png"
                          alt="image"
                        />
                      </div>
                      <div className="hero__height hero__pt d-flex align-items-center">
                        <div className="container">
                          <div className="row align-items-center ">
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-10">
                              <div className="hero__content-2">
                                <h4
                                  className="section__sub-title wow fadeInUp "
                                  data-wow-delay=".2s"
                                  style={{ textAlign: "left" }}
                                >
                                  Let’s Create Great Things{" "}
                                </h4>
                                <h2
                                  className="hero__title hero__title-2 wow fadeInUp"
                                  data-wow-delay=".3s"
                                  style={{ textAlign: "left" }}
                                >
                                  <span className="first_title">
                                    Digital product
                                  </span>
                                  <span className="second_title">
                                    design agency
                                  </span>
                                </h2>
                                <p
                                  className="wow fadeInUp flex items-center text-left"
                                  data-wow-delay=".6s"
                                  style={{ textAlign: "left" }}
                                >
                                  The carbon in our apple pies extraordinary
                                  claims require extra evidence permanence of
                                  the stars energy.
                                </p>
                                <a
                                  href="https://thememaster.net/wp/maxdi/contact"
                                  className="m-btn mt-35 wow fadeInUp "
                                  style={{ textAlign: "left", float: "left" }}
                                  data-wow-delay=".6s"
                                >
                                  Get Started
                                </a>
                              </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-10">
                              <div className="hero__thumb-2 text-end">
                                <div className="hero__thumb-2-image">
                                  <img
                                    decoding="async"
                                    src="https://thememaster.net/wp/maxdi/wp-content/uploads/2022/07/hero-img-2.png"
                                    alt="image"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="hero__services "
                        style={{ textAlign: "left" }}
                      >
                        <div className="container">
                          <div className="row mb-55">
                            <div className="col-xl-6">
                              <div className="services__title">
                                <h4
                                  className="section__sub-title wow fadeInUp"
                                  data-wow-delay=".2s"
                                >
                                  Services{" "}
                                </h4>
                                <h2
                                  className="section__title wow fadeInUp"
                                  data-wow-delay=".3s"
                                >
                                  <span>What we do</span>
                                </h2>
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-xl-4 col-lg-4 col-md-6">
                              <div className="single__bg single__bg-pink">
                                <div className="single__service single__service-2">
                                  <div className="single__service-icon single__service-icon-pink">
                                    <img
                                      decoding="async"
                                      src="https://thememaster.net/wp/maxdi/wp-content/uploads/2022/07/s2-icon-1.png"
                                      alt="icon"
                                    />
                                  </div>
                                  <div className="single__service-content single__service-content-2">
                                    <h3>UI/UX Design</h3>
                                    <p>
                                      Beautiful and Influential websites &amp;
                                      apps that are mobile friendly quick to
                                      load and help drive sales giving you a
                                      solid presence online.
                                    </p>
                                  </div>
                                  <div className="single__service-link">
                                    <a
                                      href="https://thememaster.net/wp/maxdi/ourservices/web-development"
                                      className="s-btn s-btn-pink"
                                    >
                                      Find Out More
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6">
                              <div className="single__bg single__bg-yellow">
                                <div className="single__service single__service-2">
                                  <div className="single__service-icon single__service-icon-yellow">
                                    <img
                                      decoding="async"
                                      src="https://thememaster.net/wp/maxdi/wp-content/uploads/2022/07/s2-icon-2.png"
                                      alt="icon"
                                    />
                                  </div>
                                  <div className="single__service-content single__service-content-2">
                                    <h3>Web Development</h3>
                                    <p>
                                      Beautiful and Influential websites &amp;
                                      apps that are mobile friendly quick to
                                      load and help drive sales giving you a
                                      solid presence online.
                                    </p>
                                  </div>
                                  <div className="single__service-link">
                                    <a
                                      href="https://thememaster.net/wp/maxdi/ourservices/web-development"
                                      className="s-btn s-btn-yellow"
                                    >
                                      Find Out More
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6">
                              <div className="single__bg single__bg-green">
                                <div className="single__service single__service-2">
                                  <div className="single__service-icon single__service-icon-green">
                                    <img
                                      decoding="async"
                                      src="https://thememaster.net/wp/maxdi/wp-content/uploads/2022/07/s2-icon-3.png"
                                      alt="icon"
                                    />
                                  </div>
                                  <div className="single__service-content single__service-content-2">
                                    <h3>App Development</h3>
                                    <p>
                                      Beautiful and Influential websites &amp;
                                      apps that are mobile friendly quick to
                                      load and help drive sales giving you a
                                      solid presence online.
                                    </p>
                                  </div>
                                  <div className="single__service-link">
                                    <a
                                      href="https://thememaster.net/wp/maxdi/ourservices/web-development"
                                      className="s-btn s-btn-green"
                                    >
                                      Find Out More
                                    </a>
                                  </div>
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
          className="elementor-section elementor-top-section elementor-element elementor-element-3719bdf elementor-section-full_width elementor-section-height-default elementor-section-height-default"
          data-id="3719bdf"
          data-element_type="section"
        >
          <div className="elementor-container elementor-column-gap-no">
            <div
              className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-acce20d"
              data-id="acce20d"
              data-element_type="column"
            >
              <div className="elementor-widget-wrap elementor-element-populated">
                <div
                  className="elementor-element elementor-element-a127077 elementor-widget elementor-widget-maxdi"
                  data-id="a127077"
                  data-element_type="widget"
                  data-widget_type="maxdi.default"
                >
                  <div className="elementor-widget-container">
                    <section className="maxdi__area fix p-relative pt-115 pb-145">
                      <div className="maxdi__shape">
                        <img
                          decoding="async"
                          className="m-shape-1 d-none d-sm-block"
                          src="https://thememaster.net/wp/maxdi/wp-content/themes/maxdi/assets/images/shape/testimonials/t-shape-1.png"
                          alt="image"
                        />
                        <img
                          decoding="async"
                          className="m-shape-2"
                          src="https://thememaster.net/wp/maxdi/wp-content/themes/maxdi/assets/images/shape/testimonials/t-shape-2.png"
                          alt="image"
                        />
                        <img
                          decoding="async"
                          className="m-shape-3"
                          src="https://thememaster.net/wp/maxdi/wp-content/themes/maxdi/assets/images/shape/testimonials/t-shape-3.png"
                          alt="image"
                        />
                        <img
                          decoding="async"
                          className="m-shape-4"
                          src="https://thememaster.net/wp/maxdi/wp-content/themes/maxdi/assets/images/shape/testimonials/t-shape-4.png"
                          alt="image"
                        />
                      </div>
                      <div className="container">
                        <div className="row mb-110">
                          <div className="col-xl-12">
                            <div className="maxdi__title text-center">
                              <h4
                                className="section__sub-title wow fadeInUp"
                                data-wow-delay=".2s"
                              >
                                We Are Maxdi
                              </h4>
                              <h2
                                className="section__title wow fadeInUp"
                                data-wow-delay=".4s"
                              >
                                <span>We work to help your brand success</span>
                              </h2>
                              <p className="wow fadeInUp" data-wow-delay=".6s">
                                Draw a line in the sand quick win. My capacity
                                is full. Keep it lean gain alignment we need to
                                future-proof this plan.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-xl-12">
                            <div className="maxdi__counter">
                              <div className="maxdi__counter-content text-center">
                                <h2>
                                  <CountUp end={end} duration={5} />
                                </h2>
                                <p>Happy Clients</p>
                              </div>
                            </div>
                            <div className="maxdi__counter maxdi__counter-2">
                              <div className="maxdi__counter-content maxdi__counter-content-2 text-center">
                                <h2>
                                  <CountUp
                                    start={0}
                                    end={count}
                                    duration={5}
                                    useEasing={true}
                                  />
                                </h2>
                                <p>Project Delivered</p>
                              </div>
                            </div>
                            <div className="maxdi__content d-flex">
                              <div className="maxdi__thumb-1">
                                <img
                                  decoding="async"
                                  src="https://thememaster.net/wp/maxdi/wp-content/uploads/2022/07/maxdi-img-1.jpg"
                                  alt="image"
                                />
                              </div>
                              <div className="maxdi__thumb-2">
                                <img
                                  decoding="async"
                                  src="https://thememaster.net/wp/maxdi/wp-content/uploads/2022/07/maxdi-img-2.jpg"
                                  alt="image"
                                />
                              </div>
                              <div className="maxdi__thumb-3">
                                <img
                                  decoding="async"
                                  src="https://thememaster.net/wp/maxdi/wp-content/uploads/2022/07/maxdi-img-3.jpg"
                                  alt="image"
                                />
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
        {/* tabs */}
        <section
          className="elementor-section elementor-top-section elementor-element elementor-element-8f5e084 elementor-section-full_width elementor-section-height-default elementor-section-height-default"
          data-id="8f5e084"
          data-element_type="section"
        >
          <div className="elementor-container elementor-column-gap-no">
            <div
              className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-b009c32"
              data-id="b009c32"
              data-element_type="column"
            >
              <div className="elementor-widget-wrap elementor-element-populated">
                <div
                  className="elementor-element elementor-element-f03ba21 elementor-widget elementor-widget-portfolio"
                  data-id="f03ba21"
                  data-element_type="widget"
                  data-settings='{"design_style":"style_2","portfolio_style":"square"}'
                  data-widget_type="portfolio.default"
                >
                  <div className="elementor-widget-container">
                    <section className="portfolio__area fix p-relative pb-90">
                      <div className="portfolio__shape-2">
                        <img
                          decoding="async"
                          className="p-s-1  d-none d-sm-block"
                          src="https://thememaster.net/wp/maxdi/wp-content/themes/maxdi/assets/images/shape/portfolio/p-s-1.png"
                          alt="img"
                        />
                        <img
                          decoding="async"
                          className="p-s-2"
                          src="https://thememaster.net/wp/maxdi/wp-content/themes/maxdi/assets/images/shape/portfolio/p-s-2.png"
                          alt="img"
                        />
                        <img
                          decoding="async"
                          className="p-s-3 d-none d-sm-block"
                          src="https://thememaster.net/wp/maxdi/wp-content/themes/maxdi/assets/images/shape/portfolio/p-s-3.png"
                          alt="img"
                        />
                        <img
                          decoding="async"
                          className="p-s-4"
                          src="https://thememaster.net/wp/maxdi/wp-content/themes/maxdi/assets/images/shape/portfolio/p-s-4.png"
                          alt="img"
                        />
                        <img
                          decoding="async"
                          className="p-s-5 d-none d-xxl-block"
                          src="https://thememaster.net/wp/maxdi/wp-content/themes/maxdi/assets/images/shape/portfolio/p-s-5.png"
                          alt="img"
                        />
                      </div>
                      <div className="container">
                        <div className="row">
                          <div className="col-xl-12">
                            <div className="portfolio__title-2 text-center">
                              <h4
                                className="section__sub-title animated animatedFadeInUp fadeInUp"
                                data-wow-delay=".2s"
                                style={{
                                  visibility: "visible",
                                  animationDelay: "0.2s",
                                  animationName:
                                    "animated animatedFadeInUp fadeInUp",
                                }}
                              >
                                Portfolio{" "}
                              </h4>

                              <h2
                                className="section__title animated animatedFadeInUp fadeInUp"
                                data-wow-delay=".3s"
                                style={{
                                  visibility: "visible",
                                  animationDelay: "0.3s",
                                  animationName:
                                    "animated animatedFadeInUp fadeInUp",
                                }}
                              >
                                <span>Some of our amazing works</span>
                              </h2>
                            </div>
                            <div
                              className="portfolio__menu portfolio__menu-2 text-center animated animatedFadeInUp fadeInUp"
                              data-wow-delay=".5s"
                            >
                              <Tabs
                                id="tabbed-content"
                                activeKey={key}
                                onSelect={(k) => setKey(k)}
                              >
                                <Tab eventKey="all" title="Show All">
                                  <div className="row grid mt-70">
                                    <div className="col-xl-6 col-lg-6 grid-item marketing ui-ux-design mt-10">
                                      <div className="portfolio__item-2 mb-30">
                                        <div className="portfolio__image-2">
                                          <img
                                            decoding="async"
                                            src="https://thememaster.net/wp/maxdi/wp-content/uploads/2022/07/portfolio-1.jpg"
                                            alt="portfolio"
                                          />
                                        </div>
                                        <div className="portfolio__text-2">
                                          <h3>
                                            <a href="https://thememaster.net/wp/maxdi/ourportfolio/digital-agency/">
                                              Digital Agency
                                            </a>
                                          </h3>
                                          <p />
                                          <p>
                                            Draw a line in the sand quick win.
                                            My capacity is full. Keep it lean
                                            gain alignment we need to
                                            future-proof this plan.
                                          </p>
                                          <p />
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 grid-item development">
                                      <div className="portfolio__item-2 mb-30">
                                        <div className="portfolio__image-2">
                                          <img
                                            decoding="async"
                                            src="https://thememaster.net/wp/maxdi/wp-content/uploads/2022/07/portfolio-6-800x800.jpg"
                                            alt="portfolio"
                                          />
                                        </div>
                                        <div className="portfolio__text-2">
                                          <h3>
                                            <a href="https://thememaster.net/wp/maxdi/ourportfolio/creative-home/">
                                              Creative Home
                                            </a>
                                          </h3>
                                          <p />
                                          <p>
                                            Draw a line in the sand quick win.
                                            My capacity is full. Keep it lean
                                            gain alignment we need to
                                            future-proof this plan.
                                          </p>
                                          <p />
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 grid-item marketing ui-ux-design">
                                      <div className="portfolio__item-2 mb-30">
                                        <div className="portfolio__image-2">
                                          <img
                                            decoding="async"
                                            src="https://thememaster.net/wp/maxdi/wp-content/uploads/2022/07/p-3.jpg"
                                            alt="portfolio"
                                          />
                                        </div>
                                        <div className="portfolio__text-2">
                                          <h3>
                                            <a href="https://thememaster.net/wp/maxdi/ourportfolio/marketing/">
                                              Marketing
                                            </a>
                                          </h3>
                                          <p />
                                          <p>
                                            Draw a line in the sand quick win.
                                            My capacity is full. Keep it lean
                                            gain alignment we need to
                                            future-proof this plan.
                                          </p>
                                          <p />
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 grid-item branding development">
                                      <div className="portfolio__item-2 mb-30">
                                        <div className="portfolio__image-2">
                                          <img
                                            decoding="async"
                                            src="https://thememaster.net/wp/maxdi/wp-content/uploads/2022/07/p-1.jpg"
                                            alt="portfolio"
                                          />
                                        </div>
                                        <div className="portfolio__text-2">
                                          <h3>
                                            <a href="https://thememaster.net/wp/maxdi/ourportfolio/alisha-finance/">
                                              Alisha Finance
                                            </a>
                                          </h3>
                                          <p />
                                          <p>
                                            Draw a line in the sand quick win.
                                            My capacity is full. Keep it lean
                                            gain alignment we need to
                                            future-proof this plan.
                                          </p>
                                          <p />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </Tab>
                                <Tab eventKey="branding" title="Branding">
                                  <div className="row grid mt-70">
                                    <div className="col-xl-6 col-lg-6 grid-item branding development mt-10">
                                      <div className="portfolio__item-2 mb-30">
                                        <div className="portfolio__image-2">
                                          <img
                                            decoding="async"
                                            src="https://thememaster.net/wp/maxdi/wp-content/uploads/2022/07/p-1.jpg"
                                            alt="portfolio"
                                          />
                                        </div>
                                        <div className="portfolio__text-2">
                                          <h3>
                                            <a href="https://thememaster.net/wp/maxdi/ourportfolio/alisha-finance/">
                                              Alisha Finance
                                            </a>
                                          </h3>
                                          <p />
                                          <p>
                                            Draw a line in the sand quick win.
                                            My capacity is full. Keep it lean
                                            gain alignment we need to
                                            future-proof this plan.
                                          </p>
                                          <p />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </Tab>
                                <Tab eventKey="development" title="Development">
                                  <div className="row grid mt-70">
                                    <div className="col-xl-6 col-lg-6 grid-item branding development mt-10">
                                      <div className="portfolio__item-2 mb-30">
                                        <div className="portfolio__image-2">
                                          <img
                                            decoding="async"
                                            src="https://thememaster.net/wp/maxdi/wp-content/uploads/2022/07/p-1.jpg"
                                            alt="portfolio"
                                          />
                                        </div>
                                        <div className="portfolio__text-2">
                                          <h3>
                                            <a href="https://thememaster.net/wp/maxdi/ourportfolio/alisha-finance/">
                                              Alisha Finance
                                            </a>
                                          </h3>
                                          <p />
                                          <p>
                                            Draw a line in the sand quick win.
                                            My capacity is full. Keep it lean
                                            gain alignment we need to
                                            future-proof this plan.
                                          </p>
                                          <p />
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 grid-item development">
                                      <div className="portfolio__item-2 mb-30">
                                        <div className="portfolio__image-2">
                                          <img
                                            decoding="async"
                                            src="https://thememaster.net/wp/maxdi/wp-content/uploads/2022/07/portfolio-6-800x800.jpg"
                                            alt="portfolio"
                                          />
                                        </div>
                                        <div className="portfolio__text-2">
                                          <h3>
                                            <a href="https://thememaster.net/wp/maxdi/ourportfolio/creative-home/">
                                              Creative Home
                                            </a>
                                          </h3>
                                          <p />
                                          <p>
                                            Draw a line in the sand quick win.
                                            My capacity is full. Keep it lean
                                            gain alignment we need to
                                            future-proof this plan.
                                          </p>
                                          <p />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </Tab>

                                <Tab eventKey="marketing" title="Marketing">
                                  <div className="row grid mt-70">
                                    <div className="col-xl-6 col-lg-6 grid-item marketing ui-ux-design mt-10">
                                      <div className="portfolio__item-2 mb-30">
                                        <div className="portfolio__image-2">
                                          <img
                                            decoding="async"
                                            src="https://thememaster.net/wp/maxdi/wp-content/uploads/2022/07/portfolio-1.jpg"
                                            alt="portfolio"
                                          />
                                        </div>
                                        <div className="portfolio__text-2">
                                          <h3>
                                            <a href="https://thememaster.net/wp/maxdi/ourportfolio/digital-agency/">
                                              Digital Agency
                                            </a>
                                          </h3>
                                          <p />
                                          <p>
                                            Draw a line in the sand quick win.
                                            My capacity is full. Keep it lean
                                            gain alignment we need to
                                            future-proof this plan.
                                          </p>
                                          <p />
                                        </div>
                                      </div>
                                    </div>

                                    <div className="col-xl-6 col-lg-6 grid-item marketing ui-ux-design">
                                      <div className="portfolio__item-2 mb-30">
                                        <div className="portfolio__image-2">
                                          <img
                                            decoding="async"
                                            src="https://thememaster.net/wp/maxdi/wp-content/uploads/2022/07/p-3.jpg"
                                            alt="portfolio"
                                          />
                                        </div>
                                        <div className="portfolio__text-2">
                                          <h3>
                                            <a href="https://thememaster.net/wp/maxdi/ourportfolio/marketing/">
                                              Marketing
                                            </a>
                                          </h3>
                                          <p />
                                          <p>
                                            Draw a line in the sand quick win.
                                            My capacity is full. Keep it lean
                                            gain alignment we need to
                                            future-proof this plan.
                                          </p>
                                          <p />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </Tab>
                                <Tab
                                  eventKey="ui-ux-design"
                                  title="UI/UX Design"
                                >
                                  <div className="row row grid mt-70">
                                    <div className="col-xl-6 col-lg-6 grid-item marketing ui-ux-design mt-10">
                                      <div className="portfolio__item-2 mb-30">
                                        <div className="portfolio__image-2">
                                          <img
                                            decoding="async"
                                            src="https://thememaster.net/wp/maxdi/wp-content/uploads/2022/07/portfolio-1.jpg"
                                            alt="portfolio"
                                          />
                                        </div>
                                        <div className="portfolio__text-2">
                                          <h3>
                                            <a href="https://thememaster.net/wp/maxdi/ourportfolio/digital-agency/">
                                              Digital Agency
                                            </a>
                                          </h3>
                                          <p />
                                          <p>
                                            Draw a line in the sand quick win.
                                            My capacity is full. Keep it lean
                                            gain alignment we need to
                                            future-proof this plan.
                                          </p>
                                          <p />
                                        </div>
                                      </div>
                                    </div>

                                    <div className="col-xl-6 col-lg-6 grid-item marketing ui-ux-design">
                                      <div className="portfolio__item-2 mb-30">
                                        <div className="portfolio__image-2">
                                          <img
                                            decoding="async"
                                            src="https://thememaster.net/wp/maxdi/wp-content/uploads/2022/07/p-3.jpg"
                                            alt="portfolio"
                                          />
                                        </div>
                                        <div className="portfolio__text-2">
                                          <h3>
                                            <a href="https://thememaster.net/wp/maxdi/ourportfolio/marketing/">
                                              Marketing
                                            </a>
                                          </h3>
                                          <p />
                                          <p>
                                            Draw a line in the sand quick win.
                                            My capacity is full. Keep it lean
                                            gain alignment we need to
                                            future-proof this plan.
                                          </p>
                                          <p />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </Tab>
                              </Tabs>
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
        {/* tabs */}
        <section
          className="elementor-section elementor-top-section elementor-element elementor-element-ffcefef elementor-section-full_width elementor-section-height-default elementor-section-height-default"
          data-id="ffcefef"
          data-element_type="section"
        >
          <div className="elementor-container elementor-column-gap-no">
            <div
              className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-6408c30"
              data-id="6408c30"
              data-element_type="column"
            >
              <div className="elementor-widget-wrap elementor-element-populated">
                <div
                  className="elementor-element elementor-element-f14f06e elementor-widget elementor-widget-project"
                  data-id="f14f06e"
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

        {/* testmoinial */}
        <section className="testimonials__area-2 fix p-relative pt-120 pb-120">
          <div className="testimonials__shape">
            <img
              decoding="async"
              className="t-shape-1 d-none d-sm-block"
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
            <img
              decoding="async"
              className="t-shape-5 d-none d-lg-block"
              src="https://thememaster.net/wp/maxdi/wp-content/themes/maxdi/assets/images/shape/testimonials/t-shape-5.png"
              alt="image"
            />
          </div>
          <div className="container">
            <div className="row mb-65">
              <div className="col-xl-12">
                <div className="testimonials__title text-center">
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
                    Testimonials{" "}
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
                    <span>What people say</span>
                  </h2>
                  <p
                    className="wow fadeInUp"
                    data-wow-delay=".5s"
                    style={{
                      visibility: "visible",
                      "-webkit-animation-delay": "0.5s",
                      "animation-delay": "0.5s",
                      "-webkit-animation-name": "_fadeInUp",
                      "animation-name": "_fadeInUp",
                    }}
                  >
                    Draw a line in the sand quick win. My capacity is full. Keep
                    it lean gain alignment we need to future-proof this plan.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-12">
                <div className="swiper testimonials__slider swiper-initialized swiper-horizontal swiper-pointer-events swiper-backface-hidden">
                  <div
                    className="swiper-wrapper"
                    id="swiper-wrapper-b145fada383110790"
                    aria-live="polite"
                    style={{
                      "-webkit-transform": "translate3d(-1520px, 0px, 0px)",
                      "-ms-transform": "translate3d(-1520px, 0px, 0px)",
                      transform: "translate3d(-1520px, 0px, 0px)",
                      "-webkit-transition-duration": "0ms",
                      "transition-duration": "0ms",
                    }}
                  >
                    <div
                      className="testimonials__item swiper-slide swiper-slide-duplicate swiper-slide-duplicate-prev"
                      data-swiper-slide-index={0}
                      style={{ width: "350px", "margin-right": "30px" }}
                      role="group"
                      aria-label="1 / 3"
                    >
                      <div className="testimonials__item-content">
                        <div className="testimonials__logo">
                          <img
                            decoding="async"
                            src="https://thememaster.net/wp/maxdi/wp-content/uploads/2022/07/google.png"
                            alt="image"
                          />
                        </div>
                        <div className="testimonials__text">
                          <p>
                            Big data run it up the flag pole core competencies
                            bench mark. Three martini lunch we need to dialog
                            around your choice of work attire data-point. Show
                            pony after I ran into realized two projects crank
                            this out.
                          </p>
                        </div>
                        <div className="testimonials__client d-flex align-items-center">
                          <div className="testimonials__client-thumb">
                            <img
                              decoding="async"
                              src="https://thememaster.net/wp/maxdi/wp-content/uploads/2022/07/t-client-1.png"
                              alt="image"
                            />
                          </div>
                          <div className="testimonials__client-text">
                            <h4>Alima Alisha</h4>
                            <span>CEO</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="testimonials__item swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active"
                      data-swiper-slide-index={1}
                      style={{ width: "350px", "margin-right": "30px" }}
                      role="group"
                      aria-label="2 / 3"
                    >
                      <div className="testimonials__item-content">
                        <div className="testimonials__logo">
                          <img
                            decoding="async"
                            src="https://thememaster.net/wp/maxdi/wp-content/uploads/2022/07/payoneer.png"
                            alt="image"
                          />
                        </div>
                        <div className="testimonials__text">
                          <p>
                            Big data run it up the flag pole core competencies
                            bench mark. Three martini lunch we need to dialog
                            around your choice of work attire data-point. Show
                            pony after I ran into realized two projects crank
                            this out.
                          </p>
                        </div>
                        <div className="testimonials__client d-flex align-items-center">
                          <div className="testimonials__client-thumb">
                            <img
                              decoding="async"
                              src="https://thememaster.net/wp/maxdi/wp-content/uploads/2022/07/t-client-2.png"
                              alt="image"
                            />
                          </div>
                          <div className="testimonials__client-text">
                            <h4>David Clark</h4>
                            <span>Marketing Manager</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="testimonials__item swiper-slide swiper-slide-duplicate swiper-slide-duplicate-next"
                      data-swiper-slide-index={2}
                      style={{ width: "350px", "margin-right": "30px" }}
                      role="group"
                      aria-label="3 / 3"
                    >
                      <div className="testimonials__item-content">
                        <div className="testimonials__logo">
                          <img
                            decoding="async"
                            src="https://thememaster.net/wp/maxdi/wp-content/uploads/2022/07/instagram.png"
                            alt="image"
                          />
                        </div>
                        <div className="testimonials__text">
                          <p>
                            Big data run it up the flag pole core competencies
                            bench mark. Three martini lunch we need to dialog
                            around your choice of work attire data-point. Show
                            pony after I ran into realized two projects crank
                            this out.
                          </p>
                        </div>
                        <div className="testimonials__client d-flex align-items-center">
                          <div className="testimonials__client-thumb">
                            <img
                              decoding="async"
                              src="https://thememaster.net/wp/maxdi/wp-content/uploads/2022/07/t-client-3.png"
                              alt="image"
                            />
                          </div>
                          <div className="testimonials__client-text">
                            <h4>Moran Sham</h4>
                            <span>Team Leader</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="testimonials__item swiper-slide swiper-slide-prev"
                      data-swiper-slide-index={0}
                      style={{ width: "350px", "margin-right": "30px" }}
                      role="group"
                      aria-label="1 / 3"
                    >
                      <div className="testimonials__item-content">
                        <div className="testimonials__logo">
                          <img
                            decoding="async"
                            src="https://thememaster.net/wp/maxdi/wp-content/uploads/2022/07/google.png"
                            alt="image"
                          />
                        </div>
                        <div className="testimonials__text">
                          <p>
                            Big data run it up the flag pole core competencies
                            bench mark. Three martini lunch we need to dialog
                            around your choice of work attire data-point. Show
                            pony after I ran into realized two projects crank
                            this out.
                          </p>
                        </div>
                        <div className="testimonials__client d-flex align-items-center">
                          <div className="testimonials__client-thumb">
                            <img
                              decoding="async"
                              src="https://thememaster.net/wp/maxdi/wp-content/uploads/2022/07/t-client-1.png"
                              alt="image"
                            />
                          </div>
                          <div className="testimonials__client-text">
                            <h4>Alima Alisha</h4>
                            <span>CEO</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="testimonials__item swiper-slide swiper-slide-active"
                      data-swiper-slide-index={1}
                      style={{ width: "350px", "margin-right": "30px" }}
                      role="group"
                      aria-label="2 / 3"
                    >
                      <div className="testimonials__item-content">
                        <div className="testimonials__logo">
                          <img
                            decoding="async"
                            src="https://thememaster.net/wp/maxdi/wp-content/uploads/2022/07/payoneer.png"
                            alt="image"
                          />
                        </div>
                        <div className="testimonials__text">
                          <p>
                            Big data run it up the flag pole core competencies
                            bench mark. Three martini lunch we need to dialog
                            around your choice of work attire data-point. Show
                            pony after I ran into realized two projects crank
                            this out.
                          </p>
                        </div>
                        <div className="testimonials__client d-flex align-items-center">
                          <div className="testimonials__client-thumb">
                            <img
                              decoding="async"
                              src="https://thememaster.net/wp/maxdi/wp-content/uploads/2022/07/t-client-2.png"
                              alt="image"
                            />
                          </div>
                          <div className="testimonials__client-text">
                            <h4>David Clark</h4>
                            <span>Marketing Manager</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="testimonials__item swiper-slide swiper-slide-next"
                      data-swiper-slide-index={2}
                      style={{ width: "350px", "margin-right": "30px" }}
                      role="group"
                      aria-label="3 / 3"
                    >
                      <div className="testimonials__item-content">
                        <div className="testimonials__logo">
                          <img
                            decoding="async"
                            src="https://thememaster.net/wp/maxdi/wp-content/uploads/2022/07/instagram.png"
                            alt="image"
                          />
                        </div>
                        <div className="testimonials__text">
                          <p>
                            Big data run it up the flag pole core competencies
                            bench mark. Three martini lunch we need to dialog
                            around your choice of work attire data-point. Show
                            pony after I ran into realized two projects crank
                            this out.
                          </p>
                        </div>
                        <div className="testimonials__client d-flex align-items-center">
                          <div className="testimonials__client-thumb">
                            <img
                              decoding="async"
                              src="https://thememaster.net/wp/maxdi/wp-content/uploads/2022/07/t-client-3.png"
                              alt="image"
                            />
                          </div>
                          <div className="testimonials__client-text">
                            <h4>Moran Sham</h4>
                            <span>Team Leader</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="testimonials__item swiper-slide swiper-slide-duplicate swiper-slide-duplicate-prev"
                      data-swiper-slide-index={0}
                      style={{ width: "350px", "margin-right": "30px" }}
                      role="group"
                      aria-label="1 / 3"
                    >
                      <div className="testimonials__item-content">
                        <div className="testimonials__logo">
                          <img
                            decoding="async"
                            src="https://thememaster.net/wp/maxdi/wp-content/uploads/2022/07/google.png"
                            alt="image"
                          />
                        </div>
                        <div className="testimonials__text">
                          <p>
                            Big data run it up the flag pole core competencies
                            bench mark. Three martini lunch we need to dialog
                            around your choice of work attire data-point. Show
                            pony after I ran into realized two projects crank
                            this out.
                          </p>
                        </div>
                        <div className="testimonials__client d-flex align-items-center">
                          <div className="testimonials__client-thumb">
                            <img
                              decoding="async"
                              src="https://thememaster.net/wp/maxdi/wp-content/uploads/2022/07/t-client-1.png"
                              alt="image"
                            />
                          </div>
                          <div className="testimonials__client-text">
                            <h4>Alima Alisha</h4>
                            <span>CEO</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="testimonials__item swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active"
                      data-swiper-slide-index={1}
                      style={{ width: "350px", "margin-right": "30px" }}
                      role="group"
                      aria-label="2 / 3"
                    >
                      <div className="testimonials__item-content">
                        <div className="testimonials__logo">
                          <img
                            decoding="async"
                            src="https://thememaster.net/wp/maxdi/wp-content/uploads/2022/07/payoneer.png"
                            alt="image"
                          />
                        </div>
                        <div className="testimonials__text">
                          <p>
                            Big data run it up the flag pole core competencies
                            bench mark. Three martini lunch we need to dialog
                            around your choice of work attire data-point. Show
                            pony after I ran into realized two projects crank
                            this out.
                          </p>
                        </div>
                        <div className="testimonials__client d-flex align-items-center">
                          <div className="testimonials__client-thumb">
                            <img
                              decoding="async"
                              src="https://thememaster.net/wp/maxdi/wp-content/uploads/2022/07/t-client-2.png"
                              alt="image"
                            />
                          </div>
                          <div className="testimonials__client-text">
                            <h4>David Clark</h4>
                            <span>Marketing Manager</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="testimonials__item swiper-slide swiper-slide-duplicate swiper-slide-duplicate-next"
                      data-swiper-slide-index={2}
                      style={{ width: "350px", "margin-right": "30px" }}
                      role="group"
                      aria-label="3 / 3"
                    >
                      <div className="testimonials__item-content">
                        <div className="testimonials__logo">
                          <img
                            decoding="async"
                            src="https://thememaster.net/wp/maxdi/wp-content/uploads/2022/07/instagram.png"
                            alt="image"
                          />
                        </div>
                        <div className="testimonials__text">
                          <p>
                            Big data run it up the flag pole core competencies
                            bench mark. Three martini lunch we need to dialog
                            around your choice of work attire data-point. Show
                            pony after I ran into realized two projects crank
                            this out.
                          </p>
                        </div>
                        <div className="testimonials__client d-flex align-items-center">
                          <div className="testimonials__client-thumb">
                            <img
                              decoding="async"
                              src="https://thememaster.net/wp/maxdi/wp-content/uploads/2022/07/t-client-3.png"
                              alt="image"
                            />
                          </div>
                          <div className="testimonials__client-text">
                            <h4>Moran Sham</h4>
                            <span>Team Leader</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <span
                    className="swiper-notification"
                    aria-live="assertive"
                    aria-atomic="true"
                  />
                </div>
                <div className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal">
                  <span
                    className="swiper-pagination-bullet"
                    tabIndex={0}
                    role="button"
                    aria-label="Go to slide 1"
                  />
                  <span
                    className="swiper-pagination-bullet swiper-pagination-bullet-active"
                    tabIndex={0}
                    role="button"
                    aria-label="Go to slide 2"
                    aria-current="true"
                  />
                  <span
                    className="swiper-pagination-bullet"
                    tabIndex={0}
                    role="button"
                    aria-label="Go to slide 3"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* testmoinal */}
        <Slider {...settings}>
          <section
            className="elementor-section elementor-top-section elementor-element elementor-element-36bd487 elementor-section-full_width elementor-section-height-default elementor-section-height-default"
            data-id="36bd487"
            data-element_type="section"
          >
            <div className="elementor-container elementor-column-gap-no">
              <div
                className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-388c09d"
                data-id="388c09d"
                data-element_type="column"
              >
                <div className="elementor-widget-wrap elementor-element-populated">
                  <div
                    className="elementor-element elementor-element-d0e640c elementor-widget elementor-widget-pricing"
                    data-id="d0e640c"
                    data-element_type="widget"
                    data-widget_type="pricing.default"
                  >
                    <div className="elementor-widget-container">
                      <section className="pricing__area fix p-relative mt-105 pt-120 pb-90">
                        <div className="pricing__shape">
                          <img
                            decoding="async"
                            className="p-shape-1"
                            src="https://thememaster.net/wp/maxdi/wp-content/themes/maxdi/assets/images/shape/pricing/p-s-1.png"
                            alt="image"
                          />
                          <img
                            decoding="async"
                            className="p-shape-2 d-none d-sm-block"
                            src="https://thememaster.net/wp/maxdi/wp-content/themes/maxdi/assets/images/shape/pricing/p-s-2.png"
                            alt="image"
                          />
                          <img
                            decoding="async"
                            className="p-shape-3 wow zoomIn"
                            data-wow-delay=".8s"
                            src="https://thememaster.net/wp/maxdi/wp-content/themes/maxdi/assets/images/shape/pricing/p-s-3.png"
                            alt="image"
                          />
                          <img
                            decoding="async"
                            className="p-shape-4 d-none d-sm-block"
                            src="https://thememaster.net/wp/maxdi/wp-content/themes/maxdi/assets/images/shape/pricing/p-s-4.png"
                            alt="image"
                          />
                          <img
                            decoding="async"
                            className="p-shape-5"
                            src="https://thememaster.net/wp/maxdi/wp-content/themes/maxdi/assets/images/shape/pricing/p-s-5.png"
                            alt="image"
                          />
                        </div>
                        <div
                          className="container"
                          style={{ textAlign: "left" }}
                        >
                          <div className="row">
                            <div className="col-xl-6 offset-xl-3 col-md-8 offset-md-2 col-sm-12">
                              <div className="pricing__title text-center">
                                <h4
                                  className="section__sub-title wow fadeInUp"
                                  data-wow-delay=".2s"
                                >
                                  Pricing Plan{" "}
                                </h4>
                                <h2
                                  className="section__title wow fadeInUp"
                                  data-wow-delay=".3s"
                                >
                                  <span>Find the Right Plan</span>
                                </h2>
                                <p
                                  className="wow fadeInUp"
                                  data-wow-delay=".5s"
                                >
                                  Draw a line in the sand quick win. My capacity
                                  is full. Keep it lean gain alignment we need
                                  to future-proof this plan.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="pricing__tab">
                            <div className="pricing__button text-center">
                              <ul
                                className="nav nav-tabs pricing__nav mb-40"
                                id="myTab"
                                role="tablist"
                              >
                                <li className="nav-item">
                                  <button
                                    className={`nav-link ${
                                      activeTab === "monthly" ? "active" : ""
                                    }`}
                                    id="home-tab"
                                    data-bs-toggle="tab"
                                    data-bs-target="#home1"
                                    role="tab"
                                    aria-controls="home1"
                                    aria-selected="false"
                                    onClick={() => handleTabSelect("monthly")}
                                  >
                                    Monthly
                                  </button>
                                </li>
                                <li className="nav-item">
                                  <button
                                    className={`nav-link ${
                                      activeTab === "yearly" ? "active" : ""
                                    }`}
                                    id="profile-tab"
                                    data-bs-toggle="tab"
                                    data-bs-target="#profile"
                                    role="tab"
                                    aria-controls="profile"
                                    aria-selected="true"
                                    onClick={() => handleTabSelect("yearly")}
                                  >
                                    Yearly
                                  </button>
                                </li>
                              </ul>
                            </div>
                            <div className="tab-content" id="myTabContent">
                              <div
                                className={`tab-pane ${
                                  activeTab === "monthly" ? "active" : ""
                                }`}
                                id="monthly"
                              >
                                <div className="row">
                                  <div className="col-xl-4 col-lg-4 col-md-6">
                                    <div className="pricing__box mb-30">
                                      <div className="pricing__header">
                                        <h3>Professional</h3>
                                        <p>A beautiful, simple website</p>
                                      </div>
                                      <div className="pricing__amount">
                                        <h2>
                                          $25.00<span>/monthly</span>
                                        </h2>
                                      </div>
                                      <div className="pricing__item">
                                        <ul>
                                          <li>
                                            10 Pages Responsive Website
                                            <FontAwesomeIcon
                                              icon={faCheck}
                                              className="custom-icon"
                                            />
                                          </li>
                                          <li>
                                            5 PPC Campaigns
                                            <FontAwesomeIcon
                                              icon={faCheck}
                                              className="custom-icon"
                                            />
                                          </li>
                                          <li>
                                            10 SEO Keywords
                                            <FontAwesomeIcon
                                              icon={faCheck}
                                              className="custom-icon"
                                            />
                                          </li>
                                          <li>
                                            5 Facebook Campaigns
                                            <FontAwesomeIcon
                                              icon={faCheck}
                                              className="custom-icon"
                                            />
                                          </li>
                                          <li>
                                            2 Video Campaigns
                                            <FontAwesomeIcon
                                              icon={faCheck}
                                              className="custom-icon"
                                            />
                                          </li>
                                        </ul>
                                      </div>
                                      <div className="pricing__link">
                                        <a className="m-btn" href="">
                                          Purchase Now
                                        </a>
                                      </div>
                                    </div>
                                  </div>

                                  <div className="col-xl-4 col-lg-4 col-md-6">
                                    <div className="pricing__box active mb-30">
                                      <div className="pricing__header">
                                        <h3>Standard</h3>
                                        <p>Creative design, premium website</p>
                                      </div>
                                      <div className="pricing__amount">
                                        <h2>
                                          $35.00<span>/monthly</span>
                                        </h2>
                                      </div>
                                      <div className="pricing__item">
                                        <ul>
                                          <li>
                                            20 Pages Responsive Website
                                            <FontAwesomeIcon
                                              icon={faCheck}
                                              className="custom-icon1"
                                            />
                                          </li>
                                          <li>
                                            10 PPC Campaigns
                                            <FontAwesomeIcon
                                              icon={faCheck}
                                              className="custom-icon1"
                                            />
                                          </li>
                                          <li>
                                            20 SEO Keywords
                                            <FontAwesomeIcon
                                              icon={faCheck}
                                              className="custom-icon1"
                                            />
                                          </li>
                                          <li>
                                            10 Facebook Campaigns
                                            <FontAwesomeIcon
                                              icon={faCheck}
                                              className="custom-icon1"
                                            />
                                          </li>
                                          <li>
                                            5 Video Campaigns
                                            <FontAwesomeIcon
                                              icon={faCheck}
                                              className="custom-icon1"
                                            />
                                          </li>
                                        </ul>
                                      </div>
                                      <div className="pricing__link">
                                        <a className="m-btn" href="">
                                          Purchase Now
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-xl-4 col-lg-4 col-md-6">
                                    <div className="pricing__box mb-30">
                                      <div className="pricing__header">
                                        <h3>Ultimate</h3>
                                        <p>Dynamic website exclusive design</p>
                                      </div>
                                      <div className="pricing__amount">
                                        <h2>
                                          $60.00<span>/monthly</span>
                                        </h2>
                                      </div>
                                      <div className="pricing__item">
                                        <ul>
                                          <li>
                                            50 Pages Responsive Website
                                            <FontAwesomeIcon
                                              icon={faCheck}
                                              className="custom-icon"
                                            />
                                          </li>
                                          <li>
                                            Unlimited Campaigns
                                            <FontAwesomeIcon
                                              icon={faCheck}
                                              className="custom-icon"
                                            />
                                          </li>
                                          <li>
                                            50 SEO Keywords
                                            <FontAwesomeIcon
                                              icon={faCheck}
                                              className="custom-icon"
                                            />
                                          </li>
                                          <li>
                                            100 Facebook Campaigns
                                            <FontAwesomeIcon
                                              icon={faCheck}
                                              className="custom-icon"
                                            />
                                          </li>
                                          <li>
                                            20 Video Campaigns
                                            <FontAwesomeIcon
                                              icon={faCheck}
                                              className="custom-icon"
                                            />
                                          </li>
                                        </ul>
                                      </div>
                                      <div className="pricing__link">
                                        <a className="m-btn" href="">
                                          Purchase Now
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                className={`tab-pane ${
                                  activeTab === "yearly" ? "active" : ""
                                }`}
                                id="yearly"
                              >
                                <div
                                  className="tab-pane"
                                  id="profile"
                                  role="tabpanel"
                                  aria-labelledby="profile-tab"
                                >
                                  <div className="row">
                                    <div className="col-xl-4 col-lg-4 col-md-6">
                                      <div className="pricing__box  mb-30">
                                        <div className="pricing__header">
                                          <h3>Professional</h3>
                                          <p>A beautiful, simple website</p>
                                        </div>
                                        <div className="pricing__amount">
                                          <h2>
                                            $125.00<span>/yearly</span>
                                          </h2>
                                        </div>
                                        <div className="pricing__item">
                                          <ul>
                                            <li>10 Pages Responsive Website</li>
                                            <li>5 PPC Campaigns</li>
                                            <li>10 SEO Keywords</li>
                                            <li>5 Facebook Campaigns</li>
                                            <li>2 Video Campaigns</li>
                                          </ul>
                                        </div>
                                        <div className="pricing__link">
                                          <a className="m-btn" href>
                                            Purchase Now
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-xl-4 col-lg-4 col-md-6">
                                      <div className="pricing__box active mb-30">
                                        <div className="pricing__header">
                                          <h3>Professional</h3>
                                          <p>A beautiful, simple website</p>
                                        </div>
                                        <div className="pricing__amount">
                                          <h2>
                                            $135.00<span>/yearly</span>
                                          </h2>
                                        </div>
                                        <div className="pricing__item">
                                          <ul>
                                            <li>20 Pages Responsive Website</li>
                                            <li>10 PPC Campaigns</li>
                                            <li>20 SEO Keywords</li>
                                            <li>10 Facebook Campaigns</li>
                                            <li>5 Video Campaigns</li>
                                          </ul>
                                        </div>
                                        <div className="pricing__link">
                                          <a className="m-btn" href>
                                            Purchase Now
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-xl-4 col-lg-4 col-md-6">
                                      <div className="pricing__box  mb-30">
                                        <div className="pricing__header">
                                          <h3>Professional</h3>
                                          <p>A beautiful, simple website</p>
                                        </div>
                                        <div className="pricing__amount">
                                          <h2>
                                            $499.00<span>/yearly</span>
                                          </h2>
                                        </div>
                                        <div className="pricing__item">
                                          <ul>
                                            <li>50 Pages Responsive Website</li>
                                            <li>Unlimited Campaigns</li>
                                            <li>50 SEO Keywords</li>
                                            <li>100 Facebook Campaigns</li>
                                            <li>20 Video Campaigns</li>
                                          </ul>
                                        </div>
                                        <div className="pricing__link">
                                          <a className="m-btn" href>
                                            Purchase Now
                                          </a>
                                        </div>
                                      </div>
                                    </div>
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
        </Slider>

        {/* tabs */}
        <section
          className="elementor-section elementor-top-section elementor-element elementor-element-9a05075 elementor-section-full_width elementor-section-height-default elementor-section-height-default"
          data-id="9a05075"
          data-element_type="section"
        >
          <div className="elementor-container elementor-column-gap-no">
            <div
              className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-f23b67d"
              data-id="f23b67d"
              data-element_type="column"
            >
              <div className="elementor-widget-wrap elementor-element-populated">
                <div
                  className="elementor-element elementor-element-6e06275 elementor-widget elementor-widget-customers"
                  data-id="6e06275"
                  data-element_type="widget"
                  data-widget_type="customers.default"
                >
                  <div className="elementor-widget-container">
                    <section className="customers__area fix p-relative pt-120 pb-60">
                      <div className="customers__shape">
                        <img
                          decoding="async"
                          className="c-s-1"
                          src="https://thememaster.net/wp/maxdi/wp-content/themes/maxdi/assets/images/shape/customers/c-s-1.png"
                          alt="image"
                        />
                        <img
                          decoding="async"
                          className="c-s-2"
                          src="https://thememaster.net/wp/maxdi/wp-content/themes/maxdi/assets/images/shape/customers/c-s-2.png"
                          alt="image"
                        />
                      </div>
                      <div className="container">
                        <div className="row">
                          <div className="col-xl-12">
                            <div className="customers__title text-center">
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
                                Creative Customers{" "}
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
                                <span>Our beloved partners</span>
                              </h2>
                            </div>
                            <div className="customers__container">
                              <div className="swiper brand__slider swiper-initialized swiper-horizontal swiper-pointer-events">
                                <div
                                  className="swiper-wrapper"
                                  id="swiper-wrapper-84b9c6f35113c86e"
                                  aria-live="polite"
                                  style={{
                                    "-webkit-transform":
                                      "translate3d(-2137.5px, 0px, 0px)",
                                    "-ms-transform":
                                      "translate3d(-2137.5px, 0px, 0px)",
                                    transform:
                                      "translate3d(-2137.5px, 0px, 0px)",
                                    "-webkit-transition-duration": "0ms",
                                    "transition-duration": "0ms",
                                  }}
                                >
                                  <div
                                    className="brand__item swiper-slide text-center swiper-slide-duplicate"
                                    data-swiper-slide-index={1}
                                    style={{
                                      width: "207.5px",
                                      "margin-right": "30px",
                                    }}
                                    role="group"
                                    aria-label="2 / 5"
                                  >
                                    <img
                                      decoding="async"
                                      src="https://thememaster.net/wp/maxdi/wp-content/uploads/2022/07/logo-2.png"
                                      alt="image"
                                    />
                                  </div>
                                  <div
                                    className="brand__item swiper-slide text-center swiper-slide-duplicate"
                                    data-swiper-slide-index={2}
                                    style={{
                                      width: "207.5px",
                                      "margin-right": "30px",
                                    }}
                                    role="group"
                                    aria-label="3 / 5"
                                  >
                                    <img
                                      decoding="async"
                                      src="https://thememaster.net/wp/maxdi/wp-content/uploads/2022/07/logo-3.png"
                                      alt="image"
                                    />
                                  </div>
                                  <div
                                    className="brand__item swiper-slide text-center swiper-slide-duplicate"
                                    data-swiper-slide-index={3}
                                    style={{
                                      width: "207.5px",
                                      "margin-right": "30px",
                                    }}
                                    role="group"
                                    aria-label="4 / 5"
                                  >
                                    <img
                                      decoding="async"
                                      src="https://thememaster.net/wp/maxdi/wp-content/uploads/2022/07/logo-4.png"
                                      alt="image"
                                    />
                                  </div>
                                  <div
                                    className="brand__item swiper-slide text-center swiper-slide-duplicate swiper-slide-duplicate-prev"
                                    data-swiper-slide-index={4}
                                    style={{
                                      width: "207.5px",
                                      "margin-right": "30px",
                                    }}
                                    role="group"
                                    aria-label="5 / 5"
                                  >
                                    <img
                                      decoding="async"
                                      src="https://thememaster.net/wp/maxdi/wp-content/uploads/2022/07/logo-5.png"
                                      alt="image"
                                    />
                                  </div>
                                  <div
                                    className="brand__item swiper-slide text-center swiper-slide-duplicate-active"
                                    data-swiper-slide-index={0}
                                    style={{
                                      width: "207.5px",
                                      "margin-right": "30px",
                                    }}
                                    role="group"
                                    aria-label="1 / 5"
                                  >
                                    <img
                                      decoding="async"
                                      src="https://thememaster.net/wp/maxdi/wp-content/uploads/2022/07/logo-1.png"
                                      alt="image"
                                    />
                                  </div>
                                  <div
                                    className="brand__item swiper-slide text-center swiper-slide-duplicate-next"
                                    data-swiper-slide-index={1}
                                    style={{
                                      width: "207.5px",
                                      "margin-right": "30px",
                                    }}
                                    role="group"
                                    aria-label="2 / 5"
                                  >
                                    <img
                                      decoding="async"
                                      src="https://thememaster.net/wp/maxdi/wp-content/uploads/2022/07/logo-2.png"
                                      alt="image"
                                    />
                                  </div>
                                  <div
                                    className="brand__item swiper-slide text-center"
                                    data-swiper-slide-index={2}
                                    style={{
                                      width: "207.5px",
                                      "margin-right": "30px",
                                    }}
                                    role="group"
                                    aria-label="3 / 5"
                                  >
                                    <img
                                      decoding="async"
                                      src="https://thememaster.net/wp/maxdi/wp-content/uploads/2022/07/logo-3.png"
                                      alt="image"
                                    />
                                  </div>
                                  <div
                                    className="brand__item swiper-slide text-center"
                                    data-swiper-slide-index={3}
                                    style={{
                                      width: "207.5px",
                                      "margin-right": "30px",
                                    }}
                                    role="group"
                                    aria-label="4 / 5"
                                  >
                                    <img
                                      decoding="async"
                                      src="https://thememaster.net/wp/maxdi/wp-content/uploads/2022/07/logo-4.png"
                                      alt="image"
                                    />
                                  </div>
                                  <div
                                    className="brand__item swiper-slide text-center swiper-slide-prev"
                                    data-swiper-slide-index={4}
                                    style={{
                                      width: "207.5px",
                                      "margin-right": "30px",
                                    }}
                                    role="group"
                                    aria-label="5 / 5"
                                  >
                                    <img
                                      decoding="async"
                                      src="https://thememaster.net/wp/maxdi/wp-content/uploads/2022/07/logo-5.png"
                                      alt="image"
                                    />
                                  </div>
                                  <div
                                    className="brand__item swiper-slide text-center swiper-slide-duplicate swiper-slide-active"
                                    data-swiper-slide-index={0}
                                    style={{
                                      width: "207.5px",
                                      "margin-right": "30px",
                                    }}
                                    role="group"
                                    aria-label="1 / 5"
                                  >
                                    <img
                                      decoding="async"
                                      src="https://thememaster.net/wp/maxdi/wp-content/uploads/2022/07/logo-1.png"
                                      alt="image"
                                    />
                                  </div>
                                  <div
                                    className="brand__item swiper-slide text-center swiper-slide-duplicate swiper-slide-next"
                                    data-swiper-slide-index={1}
                                    style={{
                                      width: "207.5px",
                                      "margin-right": "30px",
                                    }}
                                    role="group"
                                    aria-label="2 / 5"
                                  >
                                    <img
                                      decoding="async"
                                      src="https://thememaster.net/wp/maxdi/wp-content/uploads/2022/07/logo-2.png"
                                      alt="image"
                                    />
                                  </div>
                                  <div
                                    className="brand__item swiper-slide text-center swiper-slide-duplicate"
                                    data-swiper-slide-index={2}
                                    style={{
                                      width: "207.5px",
                                      "margin-right": "30px",
                                    }}
                                    role="group"
                                    aria-label="3 / 5"
                                  >
                                    <img
                                      decoding="async"
                                      src="https://thememaster.net/wp/maxdi/wp-content/uploads/2022/07/logo-3.png"
                                      alt="image"
                                    />
                                  </div>
                                  <div
                                    className="brand__item swiper-slide text-center swiper-slide-duplicate"
                                    data-swiper-slide-index={3}
                                    style={{
                                      width: "207.5px",
                                      "margin-right": "30px",
                                    }}
                                    role="group"
                                    aria-label="4 / 5"
                                  >
                                    <img
                                      decoding="async"
                                      src="https://thememaster.net/wp/maxdi/wp-content/uploads/2022/07/logo-4.png"
                                      alt="image"
                                    />
                                  </div>
                                </div>
                                <span
                                  className="swiper-notification"
                                  aria-live="assertive"
                                  aria-atomic="true"
                                />
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
                              High turnaround rate and loop back vec but we want
                              to empower the team with the right tools and
                              guidance.
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
                                  Delivering the best digital marketing solution
                                  creative team{" "}
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

export default Home;
