import React from "react";

export default function Agents() {
  return (
    <div>
      <header
        id="header"
        className="header d-flex align-items-center fixed-top"
      >
        <div className="header-container container-fluid container-xl position-relative d-flex align-items-center justify-content-between">
          <a
            href="index.html"
            className="logo d-flex align-items-center me-auto me-xl-0"
          >
            {/* Uncomment the line below if you also wish to use an image logo */}
            {/* <img src="assets/img/logo.webp" alt=""> */}
            <h1 className="sitename">TheProperty</h1>
          </a>
          <nav id="navmenu" className="navmenu">
            <ul>
              <li>
                <a href="index.html">Home</a>
              </li>
              <li>
                <a href="about.html">About</a>
              </li>
              <li>
                <a href="properties.html">Properties</a>
              </li>
              <li>
                <a href="services.html">Services</a>
              </li>
              <li>
                <a href="agents.html" className="active">
                  Agents
                </a>
              </li>
              <li>
                <a href="blog.html">Blog</a>
              </li>
              <li className="dropdown">
                <a href="#">
                  <span>More Pages</span>{" "}
                  <i className="bi bi-chevron-down toggle-dropdown" />
                </a>
                <ul>
                  <li>
                    <a href="property-details.html">Property Details</a>
                  </li>
                  <li>
                    <a href="service-details.html">Service Details</a>
                  </li>
                  <li>
                    <a href="agent-profile.html">Agent Profile</a>
                  </li>
                  <li>
                    <a href="blog-details.html">Blog Details</a>
                  </li>
                  <li>
                    <a href="terms.html">Terms</a>
                  </li>
                  <li>
                    <a href="privacy.html">Privacy</a>
                  </li>
                  <li>
                    <a href="404.html">404</a>
                  </li>
                </ul>
              </li>
              <li className="dropdown">
                <a href="#">
                  <span>Dropdown</span>{" "}
                  <i className="bi bi-chevron-down toggle-dropdown" />
                </a>
                <ul>
                  <li>
                    <a href="#">Dropdown 1</a>
                  </li>
                  <li className="dropdown">
                    <a href="#">
                      <span>Deep Dropdown</span>{" "}
                      <i className="bi bi-chevron-down toggle-dropdown" />
                    </a>
                    <ul>
                      <li>
                        <a href="#">Deep Dropdown 1</a>
                      </li>
                      <li>
                        <a href="#">Deep Dropdown 2</a>
                      </li>
                      <li>
                        <a href="#">Deep Dropdown 3</a>
                      </li>
                      <li>
                        <a href="#">Deep Dropdown 4</a>
                      </li>
                      <li>
                        <a href="#">Deep Dropdown 5</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Dropdown 2</a>
                  </li>
                  <li>
                    <a href="#">Dropdown 3</a>
                  </li>
                  <li>
                    <a href="#">Dropdown 4</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="contact.html">Contact</a>
              </li>
            </ul>
            <i className="mobile-nav-toggle d-xl-none bi bi-list" />
          </nav>
          <a className="btn-getstarted" href="properties.html">
            Get Started
          </a>
        </div>
      </header>
      <main className="main">
        {/* Page Title */}
        <div className="page-title">
          <div className="heading">
            <div className="container">
              <div className="row d-flex justify-content-center text-center">
                <div className="col-lg-8">
                  <h1 className="heading-title">Agents</h1>
                  <p className="mb-0">
                    Odio et unde deleniti. Deserunt numquam exercitationem.
                    Officiis quo odio sint voluptas consequatur ut a odio
                    voluptatem. Sit dolorum debitis veritatis natus dolores.
                    Quasi ratione sint. Sit quaerat ipsum dolorem.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <nav className="breadcrumbs">
            <div className="container">
              <ol>
                <li>
                  <a href="index.html">Home</a>
                </li>
                <li className="current">Agents</li>
              </ol>
            </div>
          </nav>
        </div>
        {/* End Page Title */}
        {/* Agents Section */}
        <section id="agents" className="agents section">
          <div className="container" data-aos="fade-up" data-aos-delay={100}>
            <div className="row">
              <div
                className="col-lg-6"
                data-aos="fade-right"
                data-aos-delay={200}
              >
                <div className="featured-agent">
                  <div className="agent-image">
                    <img
                      src="assets/img/real-estate/agent-1.webp"
                      alt="Featured Agent"
                      className="img-fluid"
                    />
                    <div className="agent-badge">Top Seller</div>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-6"
                data-aos="fade-left"
                data-aos-delay={200}
              >
                <div className="featured-content">
                  <h3>Emily Rodriguez</h3>
                  <span className="position">Senior Real Estate Advisor</span>
                  <div className="specialties">
                    <span className="badge">Luxury Homes</span>
                    <span className="badge">Investment Properties</span>
                    <span className="badge">First-Time Buyers</span>
                  </div>
                  <blockquote>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation."
                  </blockquote>
                  <div className="stats">
                    <div className="stat-item">
                      <span className="number">150+</span>
                      <span className="label">Properties Sold</span>
                    </div>
                    <div className="stat-item">
                      <span className="number">$45M</span>
                      <span className="label">Total Sales</span>
                    </div>
                    <div className="stat-item">
                      <span className="number">5</span>
                      <span className="label">Years Experience</span>
                    </div>
                  </div>
                  <div className="contact-info">
                    <div className="contact-item">
                      <i className="bi bi-telephone" />
                      <span>+1 (555) 234-5678</span>
                    </div>
                    <div className="contact-item">
                      <i className="bi bi-envelope" />
                      <span>emily.rodriguez@example.com</span>
                    </div>
                    <div className="contact-item">
                      <i className="bi bi-geo-alt" />
                      <span>Downtown Miami Office</span>
                    </div>
                  </div>
                  <div className="social-links">
                    <a href="#" className="social-link">
                      <i className="bi bi-linkedin" />
                    </a>
                    <a href="#" className="social-link">
                      <i className="bi bi-facebook" />
                    </a>
                    <a href="#" className="social-link">
                      <i className="bi bi-instagram" />
                    </a>
                    <a href="#" className="social-link">
                      <i className="bi bi-twitter" />
                    </a>
                  </div>
                  <div className="cta-buttons">
                    <a href="#" className="btn btn-primary">
                      View My Listings
                    </a>
                    <a href="#" className="btn btn-outline">
                      Schedule Consultation
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-5">
              <div className="col-12" data-aos="fade-up" data-aos-delay={300}>
                <h4 className="section-subtitle">Our Expert Team</h4>
                <p className="section-description">
                  Meet our dedicated professionals who are committed to helping
                  you find your perfect home or sell your property at the best
                  value.
                </p>
              </div>
            </div>
            <div className="row gy-4">
              <div
                className="col-lg-3 col-md-6"
                data-aos="zoom-in"
                data-aos-delay={100}
              >
                <div className="agent-card">
                  <div className="agent-photo">
                    <img
                      src="assets/img/real-estate/agent-2.webp"
                      alt="Agent"
                      className="img-fluid"
                    />
                    <div className="hover-overlay">
                      <div className="contact-actions">
                        <a href="#" className="action-btn" title="Call">
                          <i className="bi bi-telephone" />
                        </a>
                        <a href="#" className="action-btn" title="Email">
                          <i className="bi bi-envelope" />
                        </a>
                        <a href="#" className="action-btn" title="WhatsApp">
                          <i className="bi bi-whatsapp" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="agent-info">
                    <h5>Michael Chen</h5>
                    <span className="role">Property Consultant</span>
                    <div className="location">
                      <i className="bi bi-geo-alt" />
                      <span>Brooklyn Heights</span>
                    </div>
                    <div className="languages">
                      <span className="lang-tag">English</span>
                      <span className="lang-tag">Mandarin</span>
                    </div>
                    <a href="#" className="view-listings">
                      View Listings
                    </a>
                  </div>
                </div>
              </div>
              {/* End Agent Card */}
              <div
                className="col-lg-3 col-md-6"
                data-aos="zoom-in"
                data-aos-delay={200}
              >
                <div className="agent-card">
                  <div className="agent-photo">
                    <img
                      src="assets/img/real-estate/agent-3.webp"
                      alt="Agent"
                      className="img-fluid"
                    />
                    <div className="agent-status verified">Verified</div>
                    <div className="hover-overlay">
                      <div className="contact-actions">
                        <a href="#" className="action-btn" title="Call">
                          <i className="bi bi-telephone" />
                        </a>
                        <a href="#" className="action-btn" title="Email">
                          <i className="bi bi-envelope" />
                        </a>
                        <a href="#" className="action-btn" title="WhatsApp">
                          <i className="bi bi-whatsapp" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="agent-info">
                    <h5>Sarah Johnson</h5>
                    <span className="role">Commercial Specialist</span>
                    <div className="location">
                      <i className="bi bi-geo-alt" />
                      <span>Manhattan</span>
                    </div>
                    <div className="languages">
                      <span className="lang-tag">English</span>
                      <span className="lang-tag">Spanish</span>
                    </div>
                    <a href="#" className="view-listings">
                      View Listings
                    </a>
                  </div>
                </div>
              </div>
              {/* End Agent Card */}
              <div
                className="col-lg-3 col-md-6"
                data-aos="zoom-in"
                data-aos-delay={300}
              >
                <div className="agent-card">
                  <div className="agent-photo">
                    <img
                      src="assets/img/real-estate/agent-4.webp"
                      alt="Agent"
                      className="img-fluid"
                    />
                    <div className="hover-overlay">
                      <div className="contact-actions">
                        <a href="#" className="action-btn" title="Call">
                          <i className="bi bi-telephone" />
                        </a>
                        <a href="#" className="action-btn" title="Email">
                          <i className="bi bi-envelope" />
                        </a>
                        <a href="#" className="action-btn" title="WhatsApp">
                          <i className="bi bi-whatsapp" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="agent-info">
                    <h5>David Martinez</h5>
                    <span className="role">Luxury Home Advisor</span>
                    <div className="location">
                      <i className="bi bi-geo-alt" />
                      <span>Upper East Side</span>
                    </div>
                    <div className="languages">
                      <span className="lang-tag">English</span>
                      <span className="lang-tag">French</span>
                    </div>
                    <a href="#" className="view-listings">
                      View Listings
                    </a>
                  </div>
                </div>
              </div>
              {/* End Agent Card */}
              <div
                className="col-lg-3 col-md-6"
                data-aos="zoom-in"
                data-aos-delay={400}
              >
                <div className="agent-card">
                  <div className="agent-photo">
                    <img
                      src="assets/img/real-estate/agent-5.webp"
                      alt="Agent"
                      className="img-fluid"
                    />
                    <div className="agent-status new">New Agent</div>
                    <div className="hover-overlay">
                      <div className="contact-actions">
                        <a href="#" className="action-btn" title="Call">
                          <i className="bi bi-telephone" />
                        </a>
                        <a href="#" className="action-btn" title="Email">
                          <i className="bi bi-envelope" />
                        </a>
                        <a href="#" className="action-btn" title="WhatsApp">
                          <i className="bi bi-whatsapp" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="agent-info">
                    <h5>Lisa Thompson</h5>
                    <span className="role">Residential Specialist</span>
                    <div className="location">
                      <i className="bi bi-geo-alt" />
                      <span>Queens</span>
                    </div>
                    <div className="languages">
                      <span className="lang-tag">English</span>
                    </div>
                    <a href="#" className="view-listings">
                      View Listings
                    </a>
                  </div>
                </div>
              </div>
              {/* End Agent Card */}
            </div>
          </div>
        </section>
        {/* /Agents Section */}
      </main>
      <footer id="footer" className="footer position-relative">
        <div className="container">
          <div className="row gy-5">
            <div className="col-lg-4">
              <div className="footer-content">
                <a
                  href="index.html"
                  className="logo d-flex align-items-center mb-4"
                >
                  <span className="sitename">TheProperty</span>
                </a>
                <p className="mb-4">
                  Vestibulum ante ipsum primis in faucibus orci luctus et
                  ultrices posuere cubilia curae. Donec velit neque auctor sit
                  amet aliquam vel ullamcorper sit amet ligula.
                </p>
                <div className="newsletter-form">
                  <h5>Stay Updated</h5>
                  <form
                    action="forms/newsletter.php"
                    method="post"
                    className="php-email-form"
                  >
                    <div className="input-group">
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        placeholder="Enter your email"
                        required=""
                      />
                      <button type="submit" className="btn-subscribe">
                        <i className="bi bi-send" />
                      </button>
                    </div>
                    <div className="loading">Loading</div>
                    <div className="error-message" />
                    <div className="sent-message">
                      Thank you for subscribing!
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-6">
              <div className="footer-links">
                <h4>Company</h4>
                <ul>
                  <li>
                    <a href="#">
                      <i className="bi bi-chevron-right" /> About
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="bi bi-chevron-right" /> Careers
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="bi bi-chevron-right" /> Press
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="bi bi-chevron-right" /> Blog
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="bi bi-chevron-right" /> Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-6">
              <div className="footer-links">
                <h4>Solutions</h4>
                <ul>
                  <li>
                    <a href="#">
                      <i className="bi bi-chevron-right" /> Digital Strategy
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="bi bi-chevron-right" /> Cloud Computing
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="bi bi-chevron-right" /> Data Analytics
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="bi bi-chevron-right" /> AI Solutions
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="bi bi-chevron-right" /> Cybersecurity
                    </a>
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
                    <strong className="px-1 sitename">MyWebsite</strong>{" "}
                    <span>All Rights Reserved</span>
                  </p>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="footer-bottom-links">
                  <a href="#">Privacy Policy</a>
                  <a href="#">Terms of Service</a>
                  <a href="#">Cookie Policy</a>
                </div>
                <div className="credits">
                  {/* All the links in the footer should remain intact. */}
                  {/* You can delete the links only if you've purchased the pro version. */}
                  {/* Licensing information: https://bootstrapmade.com/license/ */}
                  {/* Purchase the pro version with working PHP/AJAX contact form: [buy-url] */}
                  Designed by{" "}
                  <a href="https://bootstrapmade.com/">BootstrapMade</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
