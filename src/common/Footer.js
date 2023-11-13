import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa"; // For Font Awesome icons
import { BiLogoFacebook } from "react-icons/bi"; // For Boxicons icons
import { BsTelephoneFill, BsInstagram, BsYoutube } from "react-icons/bs"; // For Bootstrap icons
import { FaTelegramPlane } from "react-icons/fa"; // For Font Awesome icons
import { GrTwitter } from "react-icons/gr";
import { Navbar, Nav, Button } from "react-bootstrap";
import {Link} from "react-router-dom";
import WhatsAppButton from "../components/WhatsAppButton"

function Footer() {
  return (
    <>
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
              className="footer-shape-2 animated animatedFadeInUp fadeInUp"
              data-wow-delay="1.6s"
              src="https://thememaster.net/wp/maxdi/wp-content/themes/maxdi/assets/images/shape/footer/footer-s-2.png"
              alt="image"
            />
          </div>
          <div className="footer__top pt-200 pb-20">
            <div className="container">
              <div className="row mb-80">
                <div className="col-xxl-6 col-xl-7 col-lg-8 col-md-10">
                  <div className="footer__newsletter">
                    <h4
                      className="section__sub-title animated animatedFadeInUp fadeInUp"
                      data-wow-delay=".2s"
                    >
                      join our community{" "}
                    </h4>
                    <h2
                      className="section__title animated animatedFadeInUp fadeInUp"
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
                    className="footer__widget animated animatedFadeInUp fadeInUp"
                    data-wow-delay=".5s"
                  >
                    <div className="footer__widget-logo">
                      <img
                        src="https://thememaster.net/wp/maxdi/wp-content/uploads/2022/07/Logo-footer.svg"
                        alt="logo"
                      />
                      <p>
                        Empower your journey with expert consultancy. Unlock
                        strategic insights, optimize operations, and achieve
                        excellence with our tailored solutions. Connect today!
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
                    className="footer__widget animated animatedFadeInUp fadeInUp"
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

                            <Nav.Link as={Link} to="/" className="p-0">Development</Nav.Link>
                          </li>
                          <li
                            id="menu-item-102"
                            className="menu-item menu-item-type-custom menu-item-object-custom menu-item-102"
                          >
                           <Nav.Link as={Link} to="/" className="p-0">NOC</Nav.Link>
                          </li>
                          <li
                            id="menu-item-103"
                            className="menu-item menu-item-type-custom menu-item-object-custom menu-item-103"
                          >
                             <Nav.Link as={Link} to="/" className="p-0">Network Audit</Nav.Link>
                          </li>
                          <li
                            id="menu-item-104"
                            className="menu-item menu-item-type-custom menu-item-object-custom menu-item-104"
                          >
                             <Nav.Link as={Link} to="/" className="p-0">Fiber Optic</Nav.Link>
                          </li>
                          <li
                            id="menu-item-105"
                            className="menu-item menu-item-type-custom menu-item-object-custom menu-item-105"
                          >
                             <Nav.Link as={Link} to="/" className="p-0">Firewall SDN</Nav.Link>
                          </li>
                        </ul>
                      </div>
                    </div>{" "}
                  </div>
                </div>
                <div className="col-xl-2 col-lg-2 col-md-4 col-sm-6">
                  <div
                    className="footer__widget footer__widget-mt-2 animated animatedFadeInUp fadeInUp"
                    data-wow-delay=".9s"
                  >
                    <div className="footer__widget-link">
                      <div className="footer__widget-title">
                        <h5>Quick Links</h5>
                      </div>
                      <div className="menu-footer-menu-2-container">
                        <ul id="menu-footer-menu-2" className="menu">
                          <li
                            id="menu-item-106"
                            className="menu-item menu-item-type-custom menu-item-object-custom menu-item-106"
                          >
                            <Nav.Link as={Link} to="/" className="p-0">Home</Nav.Link>
                          </li>
                          <li
                            id="menu-item-107"
                            className="menu-item menu-item-type-custom menu-item-object-custom menu-item-107"
                          >
                             <Nav.Link as={Link} to="/About" className="p-0">About</Nav.Link>
                          </li>
                          <li
                            id="menu-item-108"
                            className="menu-item menu-item-type-custom menu-item-object-custom menu-item-108"
                          >
                            <Nav.Link as={Link} to="/Services" className="p-0">Services</Nav.Link>
                          </li>
                          <li
                            id="menu-item-109"
                            className="menu-item menu-item-type-custom menu-item-object-custom menu-item-109"
                          >
                          <Nav.Link as={Link} to="/OurServices" className="p-0">OurServices</Nav.Link>
                          </li>
                          <li
                            id="menu-item-110"
                            className="menu-item menu-item-type-custom menu-item-object-custom menu-item-110"
                          >
                            <Nav.Link as={Link} to="/Contact" className="p-0">Contact</Nav.Link>
                          </li>
                        </ul>
                      </div>
                    </div>{" "}
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-10">
                  <div
                    className="footer__widget footer__widget-mt animated animatedFadeInUp fadeInUp"
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
                            Jabalpur, commercial networking and consultancy private limited
                            </p>
                          </div>
                          <div className="footer__widget-phone d-flex align-items-center">
                            <BsTelephoneFill
                              style={{ color: "#c5f617", fontSize: "20px" }}
                            />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <p>
                              <a href="tel:+1166442200"> 95138 99127</a>
                            </p>
                          </div>
                          <div className="footer__widget-email d-flex align-items-center">
                            <FaTelegramPlane
                              style={{ color: "#7432ff", fontSize: "26px" }}
                            />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <p>
                              <a href="mailto:admin@jcnet.co.in">
                              admin@jcnet.co.in
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
      
    </>
  );
}

export default Footer;
