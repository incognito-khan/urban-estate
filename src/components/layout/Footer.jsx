"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import {
  subscribeToNewsletter,
  resetNewsletterStatus,
} from "@/redux/slices/newsletterSlice";

export default function Footer() {
  const dispatch = useDispatch();
  const {
    loading,
    success,
    error,
    message: reduxMessage,
  } = useSelector((state) => state.newsletter);
  const [email, setEmail] = useState("");

  useEffect(() => {
    return () => {
      dispatch(resetNewsletterStatus());
    };
  }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    dispatch(subscribeToNewsletter(email));
  };

  useEffect(() => {
    if (success) {
      setEmail("");
      const timer = setTimeout(() => {
        dispatch(resetNewsletterStatus());
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [success, dispatch]);
  return (
    <>
      <footer id="footer" className="footer position-relative">
        <div className="container">
          <div className="row gy-5">
            <div className="col-lg-4">
              <div className="footer-content">
                <Link
                  href="/"
                  className="logo d-flex align-items-center mb-4 text-decoration-none"
                >
                  <span className="sitename">UrbanEstate</span>
                </Link>
                <p className="mb-4">
                  UrbanEstate helps you discover the perfect property with ease.
                  Browse verified listings, explore detailed property insights,
                  and schedule visits directly through our platform. Whether
                  you’re buying, renting, or investing, we make your property
                  search simple, transparent, and reliable.
                </p>
                <div className="newsletter-form">
                  <h5>Stay Updated</h5>
                  <form onSubmit={handleSubmit} className="php-email-form">
                    <div className="input-group">
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        placeholder="Enter your email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        disabled={loading}
                      />
                      <button
                        type="submit"
                        className="btn-subscribe"
                        disabled={loading}
                      >
                        {loading ? (
                          <span
                            className="spinner-border spinner-border-sm"
                            role="status"
                            aria-hidden="true"
                          ></span>
                        ) : (
                          <i className="bi bi-send" />
                        )}
                      </button>
                    </div>
                    {loading && (
                      <div className="loading d-block">Subscribing...</div>
                    )}
                    {error && (
                      <div className="error-message d-block">{error}</div>
                    )}
                    {success && (
                      <div className="sent-message d-block">{reduxMessage}</div>
                    )}
                  </form>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-6 d-flex justify-content-center">
              <div className="footer-links text-center">
                <h4>Company</h4>
                <ul>
                  <li>
                    <Link href="/about">
                      <i className="bi bi-chevron-right" /> About
                    </Link>
                  </li>
                  <li>
                    <Link href="/properties">
                      <i className="bi bi-chevron-right" /> Properties
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact">
                      <i className="bi bi-chevron-right" /> Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="footer-contact">
                <h4>Get in Touch</h4>
                <div className="contact-item">
                  <div className="contact-icon">
                    <i className="bi bi-geo-alt" />
                  </div>
                  <div className="contact-info">
                    <p>
                      2847 Maple Avenue
                      <br />
                      Los Angeles, CA 90210
                      <br />
                      United States
                    </p>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">
                    <i className="bi bi-telephone" />
                  </div>
                  <div className="contact-info">
                    <p>+1 (555) 987-6543</p>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">
                    <i className="bi bi-envelope" />
                  </div>
                  <div className="contact-info">
                    <p>contact@example.com</p>
                  </div>
                </div>
                <div className="social-links">
                  <a href="#">
                    <i className="bi bi-facebook" />
                  </a>
                  <a href="#">
                    <i className="bi bi-twitter-x" />
                  </a>
                  <a href="#">
                    <i className="bi bi-linkedin" />
                  </a>
                  <a href="#">
                    <i className="bi bi-youtube" />
                  </a>
                  <a href="#">
                    <i className="bi bi-github" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="copyright">
                  <p>
                    © <span>Copyright</span>{" "}
                    <strong className="px-1 sitename">UrbanEstate</strong>{" "}
                    <span>All Rights Reserved</span>
                  </p>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="footer-bottom-links">
                  <Link href="/privacy">Privacy Policy</Link>
                  <Link href="/terms">Terms of Service</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <a
        href="#"
        id="scroll-top"
        className="scroll-top d-flex align-items-center justify-content-center"
      >
        <i className="bi bi-arrow-up-short" />
      </a>
    </>
  );
}
