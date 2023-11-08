import React,{useEffect, useState} from 'react'
import {MdKeyboardDoubleArrowRight} from "react-icons/md";
import {IoIosArrowForward} from "react-icons/io";
import {MdArrowForward} from "react-icons/md";
import "./Ourservices.css";
import {FaBriefcase} from "react-icons/fa";
import {HiLockOpen} from "react-icons/hi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { LuBarChartHorizontal } from "react-icons/lu";
import {HiDocumentReport } from "react-icons/hi"
const OurServices = () => {
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
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
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
   <>
   
   <div>

  {/* back to top start */}
  <div className={`progress-arrow-container ${isVisible ? 'visible' : ''}`}>
      <div className="progress-wrap active-progress" onClick={scrollToTop}>
        <svg
          className="progress-circle svg-content"
          width="100%"
          height="100%"
          viewBox="-1 -1 102 102"
        >
          <path
            d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
            style={progressCircleStyle}
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
  {/* mobile menu sidebar end */}
  
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
          <div className="page__title-wrapper">
            <h2 className="page__title-heading">
              Web Development                          </h2>
            <nav aria-label="Breadcrumbs" className="breadcrumb-trail breadcrumbs">
              <ul className="trail-items" itemScope itemType="http://schema.org/BreadcrumbList">
                <li itemProp="itemListElement" itemScope itemType="http://schema.org/ListItem" className="trail-item trail-begin"><a href="https://thememaster.net/wp/maxdi/" rel="home" itemProp="item"><span itemProp="name">Home</span></a><MdKeyboardDoubleArrowRight className="icons-content1" /> </li><li itemProp="itemListElement" itemScope itemType="http://schema.org/ListItem" className="trail-item"><a href="https://thememaster.net/wp/maxdi/ourservices/" itemProp="item"><span itemProp="name">Services</span></a><MdKeyboardDoubleArrowRight className="icons-content1" /></li><li className="trail-item trail-end"><span>Web Development</span></li></ul></nav>                      </div>
        </div>
      </div>
    </div>
  </section>
  {/* page-title area end */}
  <section className="services__details p-relative pt-120 pb-90">
    <div className="services__details-shape">
      <img className="s-details-s-1" src="https://thememaster.net/wp/maxdi/wp-content/themes/maxdi/assets/images/shape/services/s-details-s-1.png" alt="image" />
      <img className="s-details-s-2 d-none d-sm-block" src="https://thememaster.net/wp/maxdi/wp-content/themes/maxdi/assets/images/shape/services/s-details-s-2.png" alt="image" />
      <img className="s-details-s-3" src="https://thememaster.net/wp/maxdi/wp-content/themes/maxdi/assets/images/shape/services/s-details-s-3.png" alt="image" />
    </div>
    <div className="container">
      <div className="row">
        <div className="col-xl-4 col-lg-4">
          <div id="alimasha-services-cats-3" className="sidebar__widget sidebar__widget-2 mb-40 widget_alimasha-services-cats"><div className="sidebar__widget-title"><h3> 
                Services     	</h3></div>     	
            <div className="sidebar__widget-link">
              <ul>
                <li>
                  <a href="#">
                   <span>Digital Marketing </span>  <IoIosArrowForward style={{marginLeft: "52px"}}/>  </a>
                </li>
                <li>
                  <a href="#">
                    <span>Content Strategy   </span><IoIosArrowForward style={{marginLeft: "52px"}}/>                        </a>
                </li>
                <li>
                  <a href="#">
                    <span>E-commerce </span>  <IoIosArrowForward style={{marginLeft: "80px"}}/>  </a>
                </li>
                <li>
                  <a href="#">
                  <span> UI/UX Design</span>   <IoIosArrowForward style={{marginLeft: "80px"}}/>  </a>
                </li>
                <li>
                  <a href="#">
                  <span>  App Development </span> <IoIosArrowForward style={{marginLeft: "52px"}}/>  </a>
                </li>
                <li>
                  <a href="#">
                  <span> Web Development </span> <IoIosArrowForward style={{marginLeft: "52px"}}/>    </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-xl-8 col-lg-8">
          <div className="services__details-thumb mb-60">
            <img width={1200} height={722} src="https://thememaster.net/wp/maxdi/wp-content/uploads/2022/07/blog-5.jpg" className="attachment-post-thumbnail size-post-thumbnail wp-post-image" alt decoding="async" fetchpriority="high" srcSet="https://thememaster.net/wp/maxdi/wp-content/uploads/2022/07/blog-5.jpg 1200w, https://thememaster.net/wp/maxdi/wp-content/uploads/2022/07/blog-5-300x181.jpg 300w, https://thememaster.net/wp/maxdi/wp-content/uploads/2022/07/blog-5-1024x616.jpg 1024w, https://thememaster.net/wp/maxdi/wp-content/uploads/2022/07/blog-5-768x462.jpg 768w" sizes="(max-width: 1200px) 100vw, 1200px" />                  </div>
          <div className="services__details-content">
            <h2>Web Development</h2>
            <p>Kindling the energy hidden in matter the only home we’ve ever known radio telescope decipherment descended from astronomers rogue. Prime number network of wormholes take root. Kindling the energy hidden in matter the only home we’ve ever known radio telescope decipherment descended from astronomers rogue. Prime number network of wormholes take root. We’ve ever known radio telescope decipherment descended from astronomers rogue. Prime number network of wormholes take root.</p>
            <p>Kindling the energy hidden in matter the only home we’ve ever known radio telescope decipherment descended from astronomers rogue. Prime number network of wormholes take root. Matter the only home we’ve ever known radio telescope decipherment descended from astronomers rogue. Prime number network of wormholes take root. Kindling the energy hidden in matter the only home we’ve ever known radio telescope decipherment descended from astronomers rogue. Prime number network of wormholes take root. Matter the only home we’ve ever known radio telescope decipherment descended from astronomers rogue. Prime number network of wormholes take root.</p>
            <div className="key__factors">
              <div className="key__factors-title">
                <h3>Key Factors</h3>
              </div>
              <div className="key__factors-wrapper d-flex">
                <div className="key__factors-content mb-40 d-sm-flex">
                <div className="key__factors-icon key__factors-icon-1" style={{ marginRight: "13px"}}/>
                  <FaBriefcase style={{width:"50px", height:"50px",color:"#7432ff" }}/>
                  <div className="key__factors-text">
                    <h5>Business Automation</h5>
                    <p>Energy only home we’ve ever known deciphe scended from rogue.</p>
                  </div>
                </div>
                <div className="key__factors-content mb-40 d-sm-flex">
                  <div className="key__factors-icon key__factors-icon-2" style={{ marginRight: "13px"}} />
                  <LuBarChartHorizontal style={{width:"50px", height:"50px", color:"#7432ff" }}/>
                  <div className="key__factors-text">
                    <h5>Critical Analysis</h5>
                    <p>Energy only home we’ve ever known deciphe scended from rogue.</p>
                  </div>
                </div>
              </div>
              <div className="key__factors-wrapper d-flex">
                <div className="key__factors-content mb-40 d-sm-flex">
                  <div className="key__factors-icon key__factors-icon-3" style={{ marginRight: "13px"}}/>
                  <HiLockOpen style={{width:"50px", height:"50px", color:"#7432ff"}}/>
                  <div className="key__factors-text">
                    <h5>Risk Protection</h5>
                    <p>Energy only home we’ve ever known deciphe scended from rogue.</p>
                  </div>
                </div>
                <div className="key__factors-content mb-40 d-sm-flex">
                  <div className="key__factors-icon key__factors-icon-4" style={{ marginRight: "13px"}}/>
                  <HiDocumentReport style={{width:"50px", height:"50px", color:"#7432ff"}}/>
                  <div className="key__factors-text">
                    <h5>Annual Report</h5>
                    <p>Energy only home we’ve ever known deciphe scended from rogue.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="key__benefits">
              <div className="key__benefits-title">
                <h3>Key Benefits</h3>
              </div>
              <div className="key__benefits-content">
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
            </div>
            <p>Kindling the energy hidden in matter the only home we’ve ever known radio telescope decipherment descended from astronomers rogue. Prime number network of wormholes take root. Kindling the energy hidden in matter the only home we’ve ever known radio telescope decipherment descended.</p>
          </div>
        </div>                
      </div>
    </div>
  </section>
  {/* lets-work area start */}
  <section className="lets-work__area p-relative pt-165 pb-160">
    <div className="lets-work__shape">
      <img className="lets-work-shape-1 d-none d-lg-block" src="https://thememaster.net/wp/maxdi/wp-content/themes/maxdi/assets/images/shape/lets-work/lets-work-s-1.png" alt="image" />
      <img className="lets-work-shape-2 d-none d-lg-block" src="https://thememaster.net/wp/maxdi/wp-content/themes/maxdi/assets/images/shape/lets-work/lets-work-s-2.png" alt="image" />
      <img className="lets-work-shape-3 d-none d-sm-block" src="https://thememaster.net/wp/maxdi/wp-content/themes/maxdi/assets/images/shape/lets-work/lets-work-s-3.png" alt="image" />
      <img className="lets-work-shape-4 d-none d-sm-block" src="https://thememaster.net/wp/maxdi/wp-content/themes/maxdi/assets/images/shape/lets-work/lets-work-s-4.png" alt="image" />
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
              <h2 className="section__title wow fadeInUp" data-wow-delay=".3s">
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
   </>
  
  )
}

export default OurServices