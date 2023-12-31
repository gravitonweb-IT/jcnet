import React, { useEffect, useState } from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { Tabs, Tab } from "react-bootstrap";
import { Navbar, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
const portfolio = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [key, setKey] = useState("all");

  // scroll
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [isVisible, setIsVisible] = useState(false);

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

  // eslint-disable-next-line react-hooks/rules-of-hooks
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
      {/* back to top start */}
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
      {/* back to top end */}

      {/* side info end */}
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
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xxl-12">
              <div className="page__title-wrapper">
                <h2 className="page__title-heading">Portfolio </h2>
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
                      <span>Portfolio</span>
                    </li>
                  </ul>
                </nav>{" "}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* page-title area end */}
      <div
        data-elementor-type="wp-page"
        data-elementor-id={84}
        className="elementor elementor-84"
      >
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
                      <div className="container ">
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
                                  marginTop: "52px",
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
                                style={{
                                  border: "none",
                                  backgroundColor: "transparent",
                                  color: "#000",
                                  textAlign: "center",
                                  justifyContent: "center",
                                }}
                              >
                                <Tab
                                  eventKey="all"
                                  title="Show All"
                                  style={{
                                    border: "none",
                                    backgroundColor: "transparent",
                                    color: "#000",
                                  }}
                                >
                                  <div className="row grid mt-70">
                                    <div className="col-xl-6 col-lg-6 grid-item branding development mt-10">
                                      <div className="portfolio__item-2 mb-30">
                                        <div className="portfolio__image-2">
                                          <img
                                            decoding="async"
                                            src="https://cdn.pixabay.com/photo/2016/04/21/13/27/computer-1343393_640.jpg"
                                            alt="portfolio"
                                          />
                                        </div>
                                        <div className="portfolio__text-2">
                                          <h3>Web Development</h3>

                                          <p>
                                            Crafting digital experiences, our
                                            web development expertise ensures
                                            dynamic, user-friendly, and scalable
                                            websites that captivate audiences
                                            and drive success.
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 grid-item development">
                                      <div className="portfolio__item-2 mb-30">
                                        <div className="portfolio__image-2">
                                          <img
                                            decoding="async"
                                            src="https://staticlearn.shine.com/l/m/images/blog/business.jpg"
                                            alt="portfolio"
                                          />
                                        </div>
                                        <div className="portfolio__text-2">
                                          <h3>Business Development</h3>

                                          <p>
                                            Strategic growth catalysts, our
                                            business development initiatives
                                            foster innovation, cultivate
                                            partnerships, and propel
                                            organizations toward sustained
                                            success and expansion.
                                          </p>
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
                                          <h3>Marketing</h3>

                                          <p>
                                            Digital architects shaping online
                                            success. Our agency specializes in
                                            creative strategies, digital
                                            marketing, and technology to elevate
                                            brands in cyberspace.
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 grid-item branding development">
                                      <div className="portfolio__item-2 mb-30">
                                        <div className="portfolio__image-2">
                                          <img
                                            decoding="async"
                                            src="https://img.freepik.com/premium-photo/devices-connected-storage-data-center-tablet-phone-home-devices-with-online-cloud-technology-computing-generative-ai_771426-1180.jpg"
                                            alt="portfolio"
                                          />
                                        </div>
                                        <div className="portfolio__text-2">
                                          <h3>Network Audit</h3>

                                          <p>
                                            A network audit is a critical
                                            process that helps you understand
                                            the health and performance of your
                                            network. Whether you're a small
                                            business or a large enterprise, a
                                            network audit
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </Tab>

                                <Tab
                                  eventKey="Network "
                                  title="Network "
                                  style={{
                                    border: "none",
                                    backgroundColor: "transparent",
                                    color: "#000",
                                  }}
                                >
                                  <div className="row grid mt-70">
                                    <div className="col-xl-6 col-lg-6 grid-item branding development mt-10">
                                      <div className="portfolio__item-2 mb-30">
                                        <div className="portfolio__image-2">
                                          <img
                                            decoding="async"
                                            src="https://img.freepik.com/premium-photo/devices-connected-storage-data-center-tablet-phone-home-devices-with-online-cloud-technology-computing-generative-ai_771426-1180.jpg"
                                            alt="portfolio"
                                          />
                                        </div>
                                        <div className="portfolio__text-2">
                                          <h3>Network Audit</h3>

                                          <p>
                                            A network audit is a critical
                                            process that helps you understand
                                            the health and performance of your
                                            network. Whether you're a small
                                            business or a large enterprise, a
                                            network audit
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 grid-item branding development mt-10">
                                      <div className="portfolio__item-2 mb-30">
                                        <div className="portfolio__image-2">
                                          <img
                                            decoding="async"
                                            src="https://thumbs.dreamstime.com/b/consulting-expert-advice-support-service-business-concept-97202115.jpg"
                                            alt="portfolio"
                                          />
                                        </div>
                                        <div className="portfolio__text-2">
                                          <h3>Consultancy</h3>

                                          <p>
                                            We understand that success depends
                                            on making the right decisions and
                                            having access to the right
                                            expertise.
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </Tab>

                                <Tab
                                  eventKey="development"
                                  title="Development"
                                  style={{
                                    border: "none",
                                    backgroundColor: "transparent",
                                    color: "#000",
                                  }}
                                >
                                  <div className="row grid mt-70">
                                    <div className="col-xl-6 col-lg-6 grid-item branding development mt-10">
                                      <div className="portfolio__item-2 mb-30">
                                        <div className="portfolio__image-2">
                                          <img
                                            decoding="async"
                                            src="https://cdn.pixabay.com/photo/2016/04/21/13/27/computer-1343393_640.jpg"
                                            alt="portfolio"
                                          />
                                        </div>
                                        <div className="portfolio__text-2">
                                          <h3>Web Development</h3>

                                          <p>
                                            Crafting digital experiences, our
                                            web development expertise ensures
                                            dynamic, user-friendly, and scalable
                                            websites that captivate audiences
                                            and drive success.
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 grid-item development">
                                      <div className="portfolio__item-2 mb-30">
                                        <div className="portfolio__image-2">
                                          <img
                                            decoding="async"
                                            src="https://staticlearn.shine.com/l/m/images/blog/business.jpg"
                                            alt="portfolio"
                                          />
                                        </div>
                                        <div className="portfolio__text-2">
                                          <h3>Business Development</h3>

                                          <p>
                                            Strategic growth catalysts, our
                                            business development initiatives
                                            foster innovation, cultivate
                                            partnerships, and propel
                                            organizations toward sustained
                                            success and expansion.
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </Tab>

                                <Tab
                                  eventKey="marketing"
                                  title="Marketing"
                                  style={{
                                    border: "none",
                                    backgroundColor: "transparent",
                                    color: "#000",
                                  }}
                                >
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
                                          <h3>Digital Agency</h3>

                                          <p>
                                            Digital architects shaping online
                                            success. Our agency specializes in
                                            creative strategies, digital
                                            marketing, and technology to elevate
                                            brands in cyberspace
                                          </p>
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
                                          <h3>Marketing</h3>

                                          <p>
                                            Crafting compelling narratives, our
                                            marketing strategies drive
                                            engagement, build brand resonance,
                                            and propel businesses to new heights
                                            in today's digital landscape.
                                          </p>
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

export default portfolio;
