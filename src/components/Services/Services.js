import React, { useState, useEffect } from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { BsArrowUp } from "react-icons/bs";
import CountUp from "react-countup";
import "./services.css";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { Navbar, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Services = () => {
  const [end, setEnd] = useState(0);
  const [count, setCount] = useState(0);
  const [activeTab, setActiveTab] = useState("monthly");
  const [key, setKey] = useState("all");
  const handleTabSelect = (tabKey) => {
    setActiveTab(tabKey);
  };

  useEffect(() => {
    const lastCount = parseInt(localStorage.getItem("lastCount"), 10) || 0;
    if (lastCount < 500) {
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
    const lastCount = parseInt(localStorage.getItem("lastCount"), 10) || 0;
    if (lastCount < 280) {
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
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      question: " What is the typical consultancy process?",
      answer:
        " Initial consultation, proposal, analysis, recommendations, and implementation collaboration.",
    },
    {
      question: "How do I know if my business needs consultancy?",
      answer:
        " Look for signs like stagnant growth, inefficiencies, or lacking in-house expertise.",
    },
    {
      question: "What types of consultancy services are common?",
      answer:
        "Management, financial, technology, and human resources consulting, among others.",
    },
    {
      question: "How can I measure the success of consultancy?",
      answer:
        " Metrics include improved efficiency, increased revenue, cost savings, and customer satisfaction",
    },
  ];

  const toggleAccordion = (index) => {
    if (index === activeIndex) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  // / scroll
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
    <>
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
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xxl-12">
              <div className="page__title-wrapper">
                <h2 className="page__title-heading">Services </h2>
                <nav
                  aria-label="Breadcrumbs"
                  className="breadcrumb-trail breadcrumbs"
                >
                  <ul
                    className="trail-items"
                    itemScope=""
                    itemType="http://schema.org/BreadcrumbList"
                  >
                    <li
                      itemProp="itemListElement"
                      itemScope=""
                      itemType="http://schema.org/ListItem"
                      className="trail-item trail-begin"
                    >
                      <span itemProp="name">Home</span>

                      <MdKeyboardDoubleArrowRight className="icons-content1" />
                    </li>
                    <li className="trail-item trail-end">
                      <span>Services</span>
                    </li>
                  </ul>
                </nav>{" "}
              </div>
            </div>
          </div>
        </div>
      </section>
      <div
        data-elementor-type="wp-page"
        data-elementor-id={86}
        className="elementor elementor-86"
      >
        <section
          className="elementor-section elementor-top-section elementor-element elementor-element-88cab54 elementor-section-full_width elementor-section-height-default elementor-section-height-default"
          data-id="88cab54"
          data-element_type="section"
        >
          <div className="elementor-container elementor-column-gap-no">
            <div
              className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-ba26466"
              data-id="ba26466"
              data-element_type="column"
            >
              <div className="elementor-widget-wrap elementor-element-populated">
                <div
                  className="elementor-element elementor-element-f5de2e6 elementor-widget elementor-widget-services"
                  data-id="f5de2e6"
                  data-element_type="widget"
                  data-widget_type="services.default"
                >
                  <div className="elementor-widget-container">
                    <section className="services__area p-relative fix  pt-120 pb-90">
                      <div className="services__shape">
                        <img
                          decoding="async"
                          className="services-s-1 wow fadeInDown"
                          data-wow-delay="1.2s"
                          src="https://thememaster.net/wp/maxdi/wp-content/themes/maxdi/assets/images/shape/services/services-s-1.png"
                          alt="image"
                        />
                        <img
                          decoding="async"
                          className="services-s-2"
                          src="https://thememaster.net/wp/maxdi/wp-content/themes/maxdi/assets/images/shape/services/services-s-2.png"
                          alt="image"
                        />
                        <img
                          decoding="async"
                          className="services-s-3"
                          src="https://thememaster.net/wp/maxdi/wp-content/themes/maxdi/assets/images/shape/services/services-s-3.png"
                          alt="image"
                        />
                      </div>
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
                          <div className="col-xl-4 col-lg-6 col-md-6">
                            <div className="single__bg">
                              <div className="single__service">
                                <div className="single__service-icon">
                                  <img
                                    decoding="async"
                                    src="https://thememaster.net/wp/maxdi/wp-content/uploads/2022/07/s-icon-1.png"
                                    alt="icon"
                                  />
                                </div>
                                <div className="single__service-content">
                                  <h3>Router and Switch Firewall SDN</h3>
                                  <p>
                                    Our expertise ensures optimal performance,
                                    security, and adaptability. Routers are
                                    finely tuned for seamless data flow,
                                    switches for efficient traffic management,
                                    and firewalls for robust security.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-4 col-lg-6 col-md-6">
                            <div className="single__bg">
                              <div className="single__service">
                                <div className="single__service-icon">
                                  <img
                                    decoding="async"
                                    src="https://thememaster.net/wp/maxdi/wp-content/uploads/2022/07/s-icon-2.png"
                                    alt="icon"
                                  />
                                </div>
                                <div className="single__service-content">
                                  <h3>Hire Resource for Technical</h3>
                                  <p>
                                    In the fast-paced world of technology,
                                    securing top-notch technical talent is
                                    essential for staying ahead. we streamline
                                    the hiring process, ensuring you have the
                                    right technical talent to drive your
                                    projects forward.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-4 col-lg-6 col-md-6">
                            <div className="single__bg">
                              <div className="single__service">
                                <div className="single__service-icon">
                                  <img
                                    decoding="async"
                                    src="https://thememaster.net/wp/maxdi/wp-content/uploads/2022/07/s-icon-3.png"
                                    alt="icon"
                                  />
                                </div>
                                <div className="single__service-content">
                                  <h3>Hire Resource for Non-Techinical</h3>
                                  <p>
                                    Our non-technical recruitment solutions
                                    focus on identifying and hiring individuals
                                    with the right mix of soft skills leadership
                                    qualities, and cultural fit for your
                                    organization
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-4 col-lg-6 col-md-6">
                            <div className="single__bg">
                              <div className="single__service">
                                <div className="single__service-icon">
                                  <img
                                    decoding="async"
                                    src="https://thememaster.net/wp/maxdi/wp-content/uploads/2022/07/s-icon-4.png"
                                    alt="icon"
                                  />
                                </div>
                                <div className="single__service-content">
                                  <h3>Fiber Optic</h3>
                                  <p>
                                    Fiber optics stands as the pinnacle of
                                    high-speed data transmission. From internet
                                    connectivity to telecommunication systems,
                                    fiber optics not only accelerates data
                                    transfer but also enhances the stability and
                                    efficiency of information exchange.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-4 col-lg-6 col-md-6">
                            <div className="single__bg">
                              <div className="single__service">
                                <div className="single__service-icon">
                                  <img
                                    decoding="async"
                                    src="https://thememaster.net/wp/maxdi/wp-content/uploads/2022/07/s-icon-5.png"
                                    alt="icon"
                                  />
                                </div>
                                <div className="single__service-content">
                                  <h3>Network Audit</h3>
                                  <p>
                                    Our audit provides a roadmap for upgrades,
                                    cost savings, and scalability, aligning your
                                    network with industry best practices. To
                                    enhancing overall functionality, our network
                                    audit is the key to a robust, secure, and
                                    future-ready network architecture.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-4 col-lg-6 col-md-6">
                            <div className="single__bg">
                              <div className="single__service">
                                <div className="single__service-icon">
                                  <img
                                    decoding="async"
                                    src="https://thememaster.net/wp/maxdi/wp-content/uploads/2022/07/s-icon-6.png"
                                    alt="icon"
                                  />
                                </div>
                                <div className="single__service-content">
                                  <h3>Performance implement for NOC</h3>
                                  <p>
                                    Our solutions include real-time monitoring
                                    tools, predictive analytics, and automation
                                    to streamline workflows and proactively
                                    address issues. With a focus on scalability
                                    and resilience to handle demands.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="col-xl-4 col-lg-6 col-md-6">
                            <div className="single__bg">
                              <div className="single__service">
                                <div className="single__service-icon">
                                  <img
                                    decoding="async"
                                    src="https://thememaster.net/wp/maxdi/wp-content/uploads/2022/07/s-icon-4.png"
                                    alt="icon"
                                  />
                                </div>
                                <div className="single__service-content">
                                  <h3>Monitoring resources for NOC</h3>
                                  <p>
                                    We've got a set of tools that act like
                                    super-smart detectives, constantly watching
                                    over everything. If there's anything fishy
                                    or if something's not working as smoothly as
                                    it should, these tools send us a heads-up so
                                    trouble.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-4 col-lg-6 col-md-6">
                            <div className="single__bg">
                              <div className="single__service">
                                <div className="single__service-icon">
                                  <img
                                    decoding="async"
                                    src="https://thememaster.net/wp/maxdi/wp-content/uploads/2022/07/s-icon-5.png"
                                    alt="icon"
                                  />
                                </div>
                                <div className="single__service-content">
                                  <h3>Artificial Intelligence</h3>
                                  <p>
                                    AI enables us to sift through complexities
                                    swiftly, providing data-driven
                                    recommendations that inform strategic
                                    decisions. From automating repetitive
                                    processes to predicting our consultancy
                                    harnesses the power of AI.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-4 col-lg-6 col-md-6">
                            <div className="single__bg">
                              <div className="single__service">
                                <div className="single__service-icon">
                                  <img
                                    decoding="async"
                                    src="https://thememaster.net/wp/maxdi/wp-content/uploads/2022/07/s-icon-6.png"
                                    alt="icon"
                                  />
                                </div>
                                <div className="single__service-content">
                                  <h3>Payrollment</h3>
                                  <p>
                                    Payroll is a critical aspect of any
                                    organization, encompassing the financial
                                    disbursement of salaries, wages, and bonuses
                                    to its employees. This multifaceted process
                                    involves meticulous. Experience seamless
                                    payroll management.
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
        <section
          className="elementor-section elementor-top-section elementor-element elementor-element-aae6078 elementor-section-full_width elementor-section-height-default elementor-section-height-default"
          data-id="aae6078"
          data-element_type="section"
        >
          <div className="elementor-container elementor-column-gap-no">
            <div
              className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-82a5673"
              data-id="82a5673"
              data-element_type="column"
            >
              <div className="elementor-widget-wrap elementor-element-populated">
                <div
                  className="elementor-element elementor-element-0f027de elementor-widget elementor-widget-faq"
                  data-id="0f027de"
                  data-element_type="widget"
                  data-widget_type="faq.default"
                >
                  <div className="elementor-widget-container">
                    <section className="faq__area fix p-relative pt-105 pb-60 faq__rs">
                      <div className="faq__shape">
                        <img
                          decoding="async"
                          className="faq-shape-1 d-none d-lg-block"
                          src="https://thememaster.net/wp/maxdi/wp-content/themes/maxdi/assets/images/shape/faq/faq-s-1.png"
                          alt="image"
                        />
                        <img
                          decoding="async"
                          className="faq-shape-2"
                          src="https://thememaster.net/wp/maxdi/wp-content/themes/maxdi/assets/images/shape/faq/faq-s-2.png"
                          alt="image"
                        />
                        <img
                          decoding="async"
                          className="faq-shape-3 d-none d-lg-block"
                          src="https://thememaster.net/wp/maxdi/wp-content/themes/maxdi/assets/images/shape/faq/faq-s-3.png"
                          alt="image"
                        />
                        <img
                          decoding="async"
                          className="faq-shape-4 d-none d-lg-block"
                          src="https://thememaster.net/wp/maxdi/wp-content/themes/maxdi/assets/images/shape/faq/faq-s-4.png"
                          alt="image"
                        />
                      </div>
                      <div className="container">
                        <div className="faq__bg">
                          <div className="row align-items-center">
                            <div className="col-xl-6 col-lg-5">
                              <div className="faq__thumb">
                                <div className="faq__thumb-image">
                                  <img
                                    src="https://thememaster.net/wp/maxdi/wp-content/uploads/2022/07/faq-img.jpg"
                                    alt="image"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="col-xl-6 col-lg-7 col-md-10">
                              <div className="faq__content">
                                <h4 className="section__sub-title">Faq</h4>
                                <h2 className="section__title">
                                  <span className="first_title">
                                    Frequently asked
                                  </span>
                                  <span className="second_title">
                                    questions
                                  </span>
                                </h2>
                                <div className="faq__wrapper">
                                  <div
                                    className="accordion"
                                    id="accordionExample"
                                  >
                                    {faqData.map((faq, index) => (
                                      <div
                                        className="accordion-content"
                                        key={index}
                                      >
                                        <h2
                                          className="accordion-header"
                                          id={`heading${index}`}
                                        >
                                          <button
                                            className={`accordion-button ${
                                              index === activeIndex
                                                ? ""
                                                : "collapsed"
                                            }`}
                                            type="button"
                                            onClick={() =>
                                              toggleAccordion(index)
                                            }
                                          >
                                            <span className="faq-question-text">
                                              {faq.question}
                                            </span>
                                            <FontAwesomeIcon
                                              icon={faPlus}
                                              className="plus-icon "
                                              style={{
                                                marginLeft: "127px",
                                              }}
                                            />
                                          </button>
                                        </h2>
                                        <div
                                          className={`accordion-collapse collapse ${
                                            index === activeIndex ? "show" : ""
                                          }`}
                                          aria-labelledby={`heading${index}`}
                                          data-bs-parent="#accordionExample"
                                        >
                                          <div className="accordion-body">
                                            <p>{faq.answer}</p>
                                          </div>
                                        </div>
                                      </div>
                                    ))}
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

        {/* <section
          className="elementor-section elementor-top-section elementor-element elementor-element-d1bad7a elementor-section-full_width elementor-section-height-default elementor-section-height-default"
          data-id="d1bad7a"
          data-element_type="section"
        >
          <div className="elementor-container elementor-column-gap-no">
            <div
              className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-db6d7c9"
              data-id="db6d7c9"
              data-element_type="column"
            >
              <div className="elementor-widget-wrap elementor-element-populated">
                <div
                  className="elementor-element elementor-element-a10207a elementor-widget elementor-widget-pricing"
                  data-id="a10207a"
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
                      <div className="container" style={{ textAlign: "left" }}>
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
                              <p className="wow fadeInUp" data-wow-delay=".5s">
                                Draw a line in the sand quick win. My capacity
                                is full. Keep it lean gain alignment we need to
                                future-proof this plan.
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
        </section> */}
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
    </>
  );
};

export default Services;
