import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa'; // For Font Awesome icons
import { BiLogoFacebook } from 'react-icons/bi'; // For Boxicons icons
import { BsTelephoneFill, BsInstagram, BsYoutube } from 'react-icons/bs'; // For Bootstrap icons
import { FaTelegramPlane } from 'react-icons/fa'; // For Font Awesome icons
import { GrTwitter } from 'react-icons/gr'; 
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
          <div className="footer__top pt-200 pb-40">
            <div className="container">
              <div className="row mb-145">
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
                    className="footer__widget footer__widget-mt-2 animated animatedFadeInUp fadeInUp"
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
   </>
  );
}

export default Footer;
