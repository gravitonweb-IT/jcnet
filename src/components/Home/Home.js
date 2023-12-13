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
import { Container, Row, Col, Card } from "react-bootstrap";
import { BsMicrosoft, BsAndroid2, BsFillNodeMinusFill } from "react-icons/bs";
import { SiCoinmarketcap, SiWebpack } from "react-icons/si";
import { GiTreeGrowth } from "react-icons/gi";
import payrol from "../../assests/Homepageimages/payrol.jpeg";
import ai from "../../assests/Homepageimages/ai.jpg";
import moniternoc from "../../assests/Homepageimages/moniternoc.jpeg";
import noc from "../../assests/Homepageimages/noc.jpeg";
import Homeblogimage1audit from "../../assests/Homepageimages/Homeblogimage1audit.png";
import fiberoptic from "../../assests/Homepageimages/fiberoptic.png";
import nontech from "../../assests/Homepageimages/nontech.jpg";
import tech from "../../assests/Homepageimages/tech.jpeg";
import route from "../../assests/Homepageimages/route.jpg";
import synoptics from "../../assests/Homepageimages/synoptics.jpg";
import landtlogo from "../../assests/Homepageimages/landtlogo.png";
import orchestra from "../../assests/Homepageimages/orchestra.png";
import { Navbar, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

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
  //
  const [slidesToShow, setSlidesToShow] = useState(3);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth <= 768) {
        setSlidesToShow(1);
      } else {
        setSlidesToShow(3);
      }
    }

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // google image SLICK SLIDER SETTINGS
  const settings2 = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  if (window.innerWidth < 768) {
    settings2.slidesToShow = 2;
  }

  window.addEventListener("resize", () => {
    if (window.innerWidth < 768) {
      settings2.slidesToShow = 2;
    } else {
      settings2.slidesToShow = 4;
    }
  });

  const settings1 = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
  };

  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
  // image
  // const images = [
  //   "https://thememaster.net/wp/maxdi/wp-content/uploads/2022/07/logo-1.png",
  //   "https://thememaster.net/wp/maxdi/wp-content/uploads/2022/07/logo-2.png",
  //   "https://thememaster.net/wp/maxdi/wp-content/uploads/2022/07/logo-3.png",
  //   "https://thememaster.net/wp/maxdi/wp-content/uploads/2022/07/logo-4.png",
  //   "https://thememaster.net/wp/maxdi/wp-content/uploads/2022/07/logo-5.png",
  // ];

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

  // Inline styles for the progress circle
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
              style={{ strokeDashoffset: isVisible ? 0 : 308 }}
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
      {/* banner start */}
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
                                    Unlock Your Potential with
                                  </span>
                                  <span className="second_title">
                                    Expert Consultancy Services
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
                                {/* <a
                                  href="/Contact"
                                  className="m-btn mt-35 wow fadeInUp "
                                  style={{ textAlign: "left", float: "left" }}
                                  data-wow-delay=".6s"
                                >
                                  Get Started
                                </a> */}
                                <Nav.Link
                                  as={Link}
                                  to="/Contact"
                                  className="m-btn mt-35 wow fadeInUp "
                                  data-wow-delay=".6s"
                                  style={{ textAlign: "left", float: "left" }}
                                >
                                  {" "}
                                  Get Started
                                </Nav.Link>
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
                                    <h3>Network Audit Services</h3>
                                    <p>
                                      A comprehensive network audit is the
                                      cornerstone of a robust and efficient
                                      network infrastructure. we provide
                                      professional network audit services to
                                      help you assess, optimize, and secure your
                                      network, ensuring it meets your business
                                      objectives and operates at its best.
                                    </p>
                                  </div>
                                  <div className="single__service-link">
                                    <Nav.Link
                                      as={Link}
                                      to="/"
                                      className="s-btn s-btn-pink"
                                    >
                                      Find Out More
                                    </Nav.Link>
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
                                    <h3>Artificial Intelligence</h3>
                                    <p>
                                      it's about empowering your consultancy
                                      with a transformative force that propels
                                      you into a future of unparalleled
                                      innovation and success. Partner with us to
                                      explore the limitless possibilities that
                                      AI brings to consultancy, where each
                                      challenge becomes an opportunity fo
                                    </p>
                                  </div>
                                  <div className="single__service-link">
                                    <Nav.Link
                                      as={Link}
                                      to="/"
                                      className="s-btn s-btn-yellow"
                                    >
                                      Find Out More
                                    </Nav.Link>
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
                                    <h3>
                                      Hire Resources: Technical and
                                      Non-Technical
                                    </h3>
                                    <p>
                                      we offer a comprehensive solution for
                                      sourcing and recruiting both technical and
                                      non-technical professionals. Whether
                                      you're seeking IT experts, engineers,
                                      marketing specialists, administrative
                                      staff, or any other talent, we have you
                                      covered.
                                    </p>
                                  </div>
                                  <div className="single__service-link">
                                    <Nav.Link
                                      as={Link}
                                      to="/"
                                      className="s-btn s-btn-green"
                                    >
                                      Find Out More
                                    </Nav.Link>
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

        {/* new section */}

        <div className="service_sectionwise  text-center ">
          <p className="section_paragraph">We Make Connections</p>
          <h1>
            We Provide Best{" "}
            <span className="service_spancite">
              <cite>Services</cite>
            </span>{" "}
          </h1>
          <p>
            Web designing in a powerful way of just not a profession, however,
            in a passion for our <br />
            Company. We have a tendency to believe the idea that smart looking.
          </p>
        </div>
        {/*  image cards*/}
        <div className="container  ">
          <div className="row">
            <div className="col-md-4 mb-3">
              <Card style={{ height: "500px", borderRadius: "8px" }}>
                <Card.Img
                  variant="top"
                  src={route}
                  style={{ height: "230px" }}
                />
                <Card.Body>
                  <Card.Title>
                    <h3> Router and Switch Firewall SDN</h3>
                  </Card.Title>
                  <Card.Text>
                    <p>
                      Our expertise ensures optimal performance, security, and
                      adaptability. Routers are finely tuned for seamless data
                      flow, switches for efficient traffic management, and
                      firewalls for robust security.
                    </p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>

            <div className="col-md-4 mb-3">
              <Card style={{ height: "500px" }}>
                <Card.Img
                  variant="top"
                  src={tech}
                  style={{ height: "250px" }}
                />
                <Card.Body>
                  <Card.Title>
                    <h3>Hire Resource for Technical </h3>
                  </Card.Title>
                  <Card.Text>
                    <p>
                      In the fast-paced world of technology, securing top-notch
                      technical talent is essential for staying ahead. we
                      streamline the hiring process, ensuring you have the right
                      technical talent to drive your projects forward.
                    </p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>

            <div className="col-md-4 ">
              <Card style={{ height: "500px" }}>
                <Card.Img
                  variant="top"
                  src={nontech}
                  style={{ height: "250px" }}
                />
                <Card.Body>
                  <Card.Title>
                    <h3>Hire Resource for Non-Techinical</h3>{" "}
                  </Card.Title>
                  <Card.Text>
                    <p>
                      Our non-technical recruitment solutions focus on
                      identifying and hiring individuals with the right mix of
                      soft skills leadership qualities, and cultural fit for
                      your organization.
                    </p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>

          <div className="row " style={{ marginTop: "20px" }}>
            <div className="col-md-4 mb-3">
              <Card style={{ height: "500px" }}>
                <Card.Img
                  variant="top"
                  src={fiberoptic}
                  style={{ height: "220px" }}
                />
                <Card.Body>
                  <Card.Title>
                    <h3>Fiber Optic</h3>
                  </Card.Title>
                  <Card.Text>
                    <p>
                      Fiber optics stands as the pinnacle of high-speed data
                      transmission. From internet connectivity to
                      telecommunication systems, fiber optics not only
                      accelerates data transfer but also enhances the stability
                      and efficiency of information exchange.
                    </p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>

            <div className="col-md-4 mb-3">
              <Card style={{ height: "500px" }}>
                <Card.Img
                  variant="top"
                  src={Homeblogimage1audit}
                  style={{ height: "220px" }}
                />
                <Card.Body>
                  <Card.Title>
                    <h3>Network Audit</h3>
                  </Card.Title>
                  <Card.Text>
                    <p>
                      {" "}
                      Our audit provides a roadmap for upgrades, cost savings,
                      and scalability, aligning your network with industry best
                      practices. To enhancing overall functionality, our network
                      audit is the key to a robust, secure, and future-ready
                      network architecture.
                    </p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>

            <div className="col-md-4">
              <Card style={{ height: "500px" }}>
                <Card.Img variant="top" src={noc} style={{ height: "250px" }} />
                <Card.Body>
                  <Card.Title>
                    <h4>Performance implement for NOC</h4>
                  </Card.Title>
                  <Card.Text>
                    <p>
                      Our solutions include real-time monitoring tools,
                      predictive analytics, and automation to streamline
                      workflows and proactively address issues. With a focus on
                      scalability and resilience we ensure your NOC is equipped
                      to handle evolving demands.
                    </p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>

          <div className="row" style={{ marginTop: "20px" }}>
            <div className="col-md-4 mb-3">
              <Card style={{ height: "500px" }}>
                <Card.Img
                  variant="top"
                  src={moniternoc}
                  style={{ height: "250px" }}
                />
                <Card.Body>
                  <Card.Title>
                    <h3>Monitoring resources for NOC</h3>
                  </Card.Title>
                  <Card.Text>
                    <p>
                      We've got a set of tools that act like super-smart
                      detectives, constantly watching over everything. If
                      there's anything fishy or if something's not working as
                      smoothly as it should, these tools send us a heads-up so
                      we can fix it before it causes any trouble.
                    </p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>

            <div className="col-md-4 mb-3">
              <Card style={{ height: "500px" }}>
                <Card.Img variant="top" src={ai} style={{ height: "250px" }} />
                <Card.Body>
                  <Card.Title>
                    <h3>Artificial Intelligence</h3>
                  </Card.Title>
                  <Card.Text>
                    <p>
                      {" "}
                      AI enables us to sift through complexities swiftly,
                      providing data-driven recommendations that inform
                      strategic decisions. From automating repetitive processes
                      to predicting our consultancy harnesses the power of AI.
                    </p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>

            <div className="col-md-4">
              <Card style={{ height: "500px" }}>
                <Card.Img
                  variant="top"
                  src={payrol}
                  style={{ height: "250px" }}
                />
                <Card.Body>
                  <Card.Title>
                    <h3>Payrollment</h3>
                  </Card.Title>
                  <Card.Text>
                    <p>
                      {" "}
                      Payroll is a critical aspect of any organization,
                      encompassing the financial disbursement of salaries,
                      wages, and bonuses to its employees. This multifaceted
                      process involves meticulous.
                    </p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
        {/* image cards */}

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
                        <div className="row mb-4">
                          <div className="col-xl-12">
                            <div className="maxdi__title text-center">
                              <h4
                                className="section__sub-title wow fadeInUp"
                                data-wow-delay=".2s"
                              >
                                We Are Jcnet
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
                        <div className="row d-flex">
                          <div className="col-xl-12 mb-4">
                            <div className="maxdi__counter">
                              <div className="maxdi__counter-content text-center">
                                <h2>
                                  <CountUp end={end} duration={5} />
                                </h2>
                                <p>Happy Clients</p>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-12 mb-4">
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
                          </div>
                          <div className="col-xl-12 mb-4">
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

        {/*  thirdtabs */}
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
                                            Crafting compelling narratives, our
                                            marketing strategies drive
                                            engagement, build brand resonance,
                                            and propel businesses to new heights
                                            in today's digital landscape
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
                                            brands in cyberspace.
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
        {/*  thirdtabs */}

        {/*  */}

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
        <section className=" testimonials__area-2 fix p-relative pt-120 pb-120 ">
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
              className="t-shape-5 d-none d-lg-block"
              src="https://thememaster.net/wp/maxdi/wp-content/themes/maxdi/assets/images/shape/testimonials/t-shape-5.png"
              alt="image"
            />
          </div>
          <div className="container mt-60">
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

            {/*  */}
            <div class="testimonials__container">
              <Slider {...settings1}>
                <div
                  className={`testimonials__item ${
                    isSmallScreen ? "small-screen" : ""
                  }`}
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
                        <img decoding="async" src={synoptics} alt="image" />
                      </div>
                      <div className="testimonials__text">
                        <p>
                          Synophic system company I'm worked him big experience
                          in company so nice company in word fully maintenance
                          work already done so I'm happy to experience in
                          synophic system company and thanks for synophic.
                        </p>
                      </div>
                      <div className="testimonials__client d-flex align-items-center">
                        <div className="testimonials__client-thumb"></div>
                        <div className="testimonials__client-text">
                          <h4>Alima Alisha</h4>
                          <span>CEO</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  {/* 1st */}
                  <div
                    className="testimonials__item swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active"
                    data-swiper-slide-index={1}
                    style={{ width: "350px", "margin-right": "30px" }}
                    role="group"
                    aria-label="2 / 3"
                  >
                    <div className="testimonials__item-content">
                      <div className="testimonials__logo">
                      <img decoding="async" src={orchestra} alt="image" />
                      </div>
                      <div className="testimonials__text">
                        <p>
                          Synophic system company I'm worked him big experience
                          in company so nice company in word fully maintenance
                          work already done so I'm happy to experience in
                          synophic system company and thanks for synophic.
                        </p>
                      </div>
                      <div className="testimonials__client d-flex align-items-center">
                        <div className="testimonials__client-thumb"></div>
                        <div className="testimonials__client-text">
                          <h4>Alima Alisha</h4>
                          <span>CEO</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* 2nd */}
                <div>
                  <div
                    className="testimonials__item swiper-slide swiper-slide-duplicate swiper-slide-duplicate-next"
                    data-swiper-slide-index={2}
                    style={{ width: "350px", "margin-right": "30px" }}
                    role="group"
                    aria-label="3 / 3"
                  >
                    <div className="testimonials__item-content">
                      <div className="testimonials__logo">
                      <img decoding="async" src={synoptics} alt="image" />
                      </div>
                      <div className="testimonials__text">
                        <p>
                          Very friendly attitude towards the client and his
                          problems - you can always ask for advice and help even
                          on related issues, and on top of that, high-quality
                          advice on inheritance issues. Never expected to get
                          such a powerful theme
                        </p>
                      </div>
                      <div className="testimonials__client d-flex align-items-center">
                        <div className="testimonials__client-thumb"></div>
                        <div className="testimonials__client-text">
                          <h4>Moran Sham</h4>
                          <span>Team Leader</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* 3rd */}
                {/* <div>
                  <div
                    className="testimonials__item swiper-slide swiper-slide-prev"
                    data-swiper-slide-index={0}
                    style={{ width: "350px", "margin-right": "30px" }}
                    role="group"
                    aria-label="1 / 3"
                  >
                    <div className="testimonials__item-content">
                      <div className="testimonials__logo">
                        <img decoding="async" src={synoptics} alt="image" />
                      </div>
                      <div className="testimonials__text">
                        <p>
                          Synophic system company I'm worked him big experience
                          in company so nice company in word fully maintenance
                          work already done so I'm happy to experience in
                          synophic system company and thanks for synophic.
                        </p>
                      </div>
                      <div className="testimonials__client d-flex align-items-center">
                        <div className="testimonials__client-thumb"></div>

                        <div className="testimonials__client-text">
                          <h4>Alima Alisha</h4>
                          <span>CEO</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}
                {/* 4th */}
                {/* <div>
                  <div
                    className="testimonials__item swiper-slide swiper-slide-active"
                    data-swiper-slide-index={1}
                    style={{ width: "350px", "margin-right": "30px" }}
                    role="group"
                    aria-label="2 / 3"
                  >
                    <div className="testimonials__item-content">
                      <div className="testimonials__logo">
                      <img decoding="async" src={synoptics} alt="image" />
                      </div>
                      <div className="testimonials__text">
                        <p>
                          Very friendly attitude towards the client and his
                          problems - you can always ask for advice and help even
                          on related issues, and on top of that, high-quality
                          advice on inheritance issues. Never expected to get
                          such a powerful theme
                        </p>
                      </div>
                      <div className="testimonials__client d-flex align-items-center">
                        <div className="testimonials__client-thumb"></div>
                        <div className="testimonials__client-text">
                          <h4>David Clark</h4>
                          <span>Marketing Manager</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}
                {/* 5th */}
                {/* <div>
                  <div
                    className="testimonials__item swiper-slide swiper-slide-next"
                    data-swiper-slide-index={2}
                    style={{ width: "350px", "margin-right": "30px" }}
                    role="group"
                    aria-label="3 / 3"
                  >
                    <div className="testimonials__item-content">
                      <div className="testimonials__logo">
                        <img decoding="async" src={orchestra} alt="image" />
                      </div>
                      <div className="testimonials__text">
                        <p>
                          Very friendly attitude towards the client and his
                          problems - you can always ask for advice and help even
                          on related issues, and on top of that, high-quality
                          advice on inheritance issues. Never expected to get
                          such a powerful theme
                        </p>
                      </div>
                      <div className="testimonials__client d-flex align-items-center">
                        <div className="testimonials__client-thumb"></div>
                        <div className="testimonials__client-text">
                          <h4>Moran Sham</h4>
                          <span>Team Leader</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}
              </Slider>
            </div>
            {/*  */}
          </div>
        </section>
        {/* testmoinal */}

        {/*  Pricing Plan*/}
        {/* <Slider {...settings}>
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
        </Slider> */}
        {/*  Pricing Plan*/}

        {/* tabs */}
        {/* <section
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
                              <Slider {...settings2}>
                                {images.map((image, index) => (
                                  <div
                                    key={index}
                                    className="brand__item swiper-slide text-center"
                                    style={{
                                      width: "207.5px",
                                    }}
                                  >
                                    <img
                                      src={image}
                                      alt={`Image ${index + 1}`}
                                    />
                                  </div>
                                ))}
                              </Slider>
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
                        className="blog-shape-4 d-none d-sm-block"
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

export default Home;
