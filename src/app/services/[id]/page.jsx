import React from "react";

export default function ServiceDetails() {
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
                <a href="agents.html">Agents</a>
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
                    <a href="service-details.html" className="active">
                      Service Details
                    </a>
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
                  <h1 className="heading-title">Service Details</h1>
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
                <li className="current">Service Details</li>
              </ol>
            </div>
          </nav>
        </div>
        {/* End Page Title */}
        {/* Service Details Section */}
        <section id="service-details" className="service-details section">
          <div className="container" data-aos="fade-up" data-aos-delay={100}>
            <div className="row">
              <div className="col-lg-4 order-lg-2">
                <div className="service-sidebar">
                  <div
                    className="service-hero"
                    data-aos="zoom-in"
                    data-aos-delay={150}
                  >
                    <img
                      src="assets/img/real-estate/property-interior-5.webp"
                      alt="Property Investment Service"
                      className="img-fluid"
                    />
                    <div className="service-overlay">
                      <div className="service-badge">
                        <i className="bi bi-graph-up-arrow" />
                        <span>Premium Investment</span>
                      </div>
                    </div>
                  </div>
                  <div
                    className="quick-contact-card"
                    data-aos="slide-up"
                    data-aos-delay={200}
                  >
                    <div className="contact-header">
                      <h4>Start Your Investment Journey</h4>
                      <p>
                        Get personalized advice from our investment specialists
                        today.
                      </p>
                    </div>
                    <form
                      action="forms/contact.php"
                      method="post"
                      className="php-email-form"
                    >
                      <input
                        type="hidden"
                        name="subject"
                        defaultValue="Investment Consultation"
                      />
                      <div className="form-group">
                        <input
                          type="text"
                          name="name"
                          className="form-control"
                          placeholder="Full Name"
                          required=""
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="email"
                          name="email"
                          className="form-control"
                          placeholder="Email Address"
                          required=""
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="tel"
                          name="phone"
                          className="form-control"
                          placeholder="Phone Number"
                          required=""
                        />
                      </div>
                      <div className="form-group">
                        <select
                          name="budget"
                          className="form-control"
                          required=""
                        >
                          <option value="">Investment Budget Range</option>
                          <option value="100k-250k">$100k - $250k</option>
                          <option value="250k-500k">$250k - $500k</option>
                          <option value="500k-1m">$500k - $1M</option>
                          <option value="1m+">$1M+</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <textarea
                          name="message"
                          className="form-control"
                          rows={3}
                          placeholder="Investment goals or questions..."
                          defaultValue={""}
                        />
                      </div>
                      <div className="loading">Loading</div>
                      <div className="error-message" />
                      <div className="sent-message">
                        Your message has been sent. Thank you!
                      </div>
                      <button type="submit" className="btn-submit">
                        <span>Get Free Consultation</span>
                        <i className="bi bi-arrow-right" />
                      </button>
                    </form>
                  </div>
                  <div
                    className="expertise-highlights"
                    data-aos="fade-up"
                    data-aos-delay={250}
                  >
                    <h5>Why Choose Our Investment Services</h5>
                    <div className="highlight-list">
                      <div className="highlight-item">
                        <i className="bi bi-trophy" />
                        <span>20+ Years Market Experience</span>
                      </div>
                      <div className="highlight-item">
                        <i className="bi bi-graph-up" />
                        <span>15% Average ROI for Clients</span>
                      </div>
                      <div className="highlight-item">
                        <i className="bi bi-people" />
                        <span>500+ Successful Investments</span>
                      </div>
                      <div className="highlight-item">
                        <i className="bi bi-shield-check" />
                        <span>Licensed Investment Advisors</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-8 order-lg-1">
                <div className="service-main-content">
                  <div
                    className="content-header"
                    data-aos="fade-right"
                    data-aos-delay={150}
                  >
                    <div className="service-category">Investment Services</div>
                    <h1>Real Estate Investment Consulting</h1>
                    <p className="service-intro">
                      Vestibulum ante ipsum primis in faucibus orci luctus et
                      ultrices posuere cubilia curae; Donec velit neque, auctor
                      sit amet aliquam vel, ullamcorper sit amet ligula. Proin
                      eget tortor risus. Curabitur non nulla sit amet nisl
                      tempus convallis quis ac lectus.
                    </p>
                  </div>
                  <div
                    className="investment-types"
                    data-aos="fade-up"
                    data-aos-delay={200}
                  >
                    <h3>Investment Opportunities</h3>
                    <div className="types-grid">
                      <div className="type-card">
                        <div className="type-icon">
                          <i className="bi bi-building" />
                        </div>
                        <h4>Commercial Properties</h4>
                        <p>
                          Office buildings, retail spaces, and industrial
                          properties with stable rental income potential.
                        </p>
                        <div className="roi-indicator">
                          <span className="roi-label">Avg. ROI:</span>
                          <span className="roi-value">12-18%</span>
                        </div>
                      </div>
                      <div className="type-card">
                        <div className="type-icon">
                          <i className="bi bi-house-heart" />
                        </div>
                        <h4>Residential Rentals</h4>
                        <p>
                          Single-family homes and multi-unit properties in
                          high-demand residential markets.
                        </p>
                        <div className="roi-indicator">
                          <span className="roi-label">Avg. ROI:</span>
                          <span className="roi-value">8-14%</span>
                        </div>
                      </div>
                      <div className="type-card">
                        <div className="type-icon">
                          <i className="bi bi-hammer" />
                        </div>
                        <h4>Fix &amp; Flip Projects</h4>
                        <p>
                          Short-term investment opportunities with renovation
                          potential for quick returns.
                        </p>
                        <div className="roi-indicator">
                          <span className="roi-label">Avg. ROI:</span>
                          <span className="roi-value">20-35%</span>
                        </div>
                      </div>
                      <div className="type-card">
                        <div className="type-icon">
                          <i className="bi bi-geo-alt" />
                        </div>
                        <h4>Land Development</h4>
                        <p>
                          Raw land and development opportunities in emerging
                          growth corridors.
                        </p>
                        <div className="roi-indicator">
                          <span className="roi-label">Avg. ROI:</span>
                          <span className="roi-value">15-25%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="service-methodology"
                    data-aos="fade-up"
                    data-aos-delay={250}
                  >
                    <h3>Our Investment Process</h3>
                    <div className="methodology-timeline">
                      <div className="timeline-item">
                        <div className="timeline-marker">
                          <span className="step-num">01</span>
                        </div>
                        <div className="timeline-content">
                          <h5>Portfolio Assessment</h5>
                          <p>
                            Comprehensive review of your financial goals, risk
                            tolerance, and current investment portfolio to
                            develop a customized strategy.
                          </p>
                        </div>
                      </div>
                      <div className="timeline-item">
                        <div className="timeline-marker">
                          <span className="step-num">02</span>
                        </div>
                        <div className="timeline-content">
                          <h5>Market Research &amp; Analysis</h5>
                          <p>
                            Deep dive into local market conditions, growth
                            projections, and investment opportunities that align
                            with your criteria.
                          </p>
                        </div>
                      </div>
                      <div className="timeline-item">
                        <div className="timeline-marker">
                          <span className="step-num">03</span>
                        </div>
                        <div className="timeline-content">
                          <h5>Property Identification</h5>
                          <p>
                            Identification and evaluation of specific investment
                            properties with detailed financial projections and
                            risk assessments.
                          </p>
                        </div>
                      </div>
                      <div className="timeline-item">
                        <div className="timeline-marker">
                          <span className="step-num">04</span>
                        </div>
                        <div className="timeline-content">
                          <h5>Due Diligence &amp; Acquisition</h5>
                          <p>
                            Complete property inspections, legal review,
                            financing coordination, and seamless acquisition
                            process management.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="performance-metrics"
                    data-aos="fade-up"
                    data-aos-delay={300}
                  >
                    <h3>Client Success Metrics</h3>
                    <div className="metrics-container">
                      <div className="metric-box">
                        <div className="metric-value">
                          <span
                            data-purecounter-start={0}
                            data-purecounter-end={247}
                            data-purecounter-duration={2}
                            className="purecounter"
                          />
                          M
                        </div>
                        <div className="metric-label">
                          Total Investments Managed
                        </div>
                        <div className="metric-description">
                          Across all investment types
                        </div>
                      </div>
                      <div className="metric-box">
                        <div className="metric-value">
                          <span
                            data-purecounter-start={0}
                            data-purecounter-end={89}
                            data-purecounter-duration={2}
                            className="purecounter"
                          />
                          %
                        </div>
                        <div className="metric-label">
                          Client Satisfaction Rate
                        </div>
                        <div className="metric-description">
                          Based on annual surveys
                        </div>
                      </div>
                      <div className="metric-box">
                        <div className="metric-value">
                          <span
                            data-purecounter-start={0}
                            data-purecounter-end={156}
                            data-purecounter-duration={2}
                            className="purecounter"
                          />
                        </div>
                        <div className="metric-label">
                          Active Investment Projects
                        </div>
                        <div className="metric-description">
                          Currently under management
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="testimonial-section"
                    data-aos="fade-up"
                    data-aos-delay={350}
                  >
                    <h3>Client Success Stories</h3>
                    <div className="testimonial-grid">
                      <div className="testimonial-card">
                        <div className="quote-content">
                          <p>
                            "Thanks to their guidance, my real estate portfolio
                            has grown 340% in just three years. Their market
                            insights are invaluable."
                          </p>
                        </div>
                        <div className="client-info">
                          <img
                            src="assets/img/person/person-m-7.webp"
                            alt="Michael Chen"
                            className="client-photo"
                          />
                          <div className="client-details">
                            <h6>Michael Chen</h6>
                            <span>Portfolio Value: $2.8M</span>
                          </div>
                        </div>
                      </div>
                      <div className="testimonial-card">
                        <div className="quote-content">
                          <p>
                            "Professional, knowledgeable, and always available.
                            They found me three rental properties that
                            consistently outperform projections."
                          </p>
                        </div>
                        <div className="client-info">
                          <img
                            src="assets/img/person/person-f-12.webp"
                            alt="Jennifer Rodriguez"
                            className="client-photo"
                          />
                          <div className="client-details">
                            <h6>Jennifer Rodriguez</h6>
                            <span>Portfolio Value: $1.4M</span>
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
        {/* /Service Details Section */}
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
