import React from "react";

export default function AgentProfile() {
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
                    <a href="service-details.html">Service Details</a>
                  </li>
                  <li>
                    <a href="agent-profile.html" className="active">
                      Agent Profile
                    </a>
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
                  <h1 className="heading-title">Agent Profile</h1>
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
                <li className="current">Agent Profile</li>
              </ol>
            </div>
          </nav>
        </div>
        {/* End Page Title */}
        {/* Agent Profile Section */}
        <section id="agent-profile" className="agent-profile section">
          <div className="container" data-aos="fade-up" data-aos-delay={100}>
            {/* Agent Profile Card */}
            <div
              className="agent-profile-card"
              data-aos="zoom-in"
              data-aos-delay={150}
            >
              <div className="profile-background">
                <img
                  src="assets/img/real-estate/property-exterior-4.webp"
                  alt="Background"
                  className="profile-bg-image"
                />
              </div>
              <div className="profile-content">
                <div className="agent-avatar">
                  <img
                    src="assets/img/real-estate/agent-7.webp"
                    alt="Agent"
                    className="avatar-image"
                  />
                  <div className="status-indicator">
                    <i className="bi bi-circle-fill" />
                    <span>Available</span>
                  </div>
                </div>
                <div className="agent-header">
                  <h1 className="agent-name">Marcus Johnson</h1>
                  <div className="agent-credentials">
                    <span className="title">
                      Licensed Real Estate Professional
                    </span>
                    <div className="verification-badge">
                      <i className="bi bi-patch-check-fill" />
                      <span>Verified Agent</span>
                    </div>
                  </div>
                  <div className="quick-stats">
                    <div className="quick-stat">
                      <span className="stat-value">4.9</span>
                      <div className="star-rating">
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                      </div>
                    </div>
                    <div className="quick-stat">
                      <span className="stat-value">156</span>
                      <span className="stat-label">Properties Sold</span>
                    </div>
                    <div className="quick-stat">
                      <span className="stat-value">12+</span>
                      <span className="stat-label">Years Experience</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Main Content Grid */}
            <div
              className="main-content-grid"
              data-aos="fade-up"
              data-aos-delay={200}
            >
              {/* Left Content */}
              <div className="content-main">
                {/* About Section */}
                <div className="about-section">
                  <h3>Professional Summary</h3>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore veritatis et
                    quasi architecto beatae vitae dicta sunt explicabo. Nemo
                    enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                    aut fugit.
                  </p>
                  <p>
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                    qui blanditiis praesentium voluptatum deleniti atque
                    corrupti quos dolores et quas molestias excepturi sint
                    occaecati cupiditate non provident, similique sunt in culpa
                    qui officia deserunt mollitia animi.
                  </p>
                  <div className="highlight-box">
                    <h4>
                      "My mission is to transform property transactions into
                      seamless experiences that exceed expectations."
                    </h4>
                  </div>
                </div>
                {/* Experience Timeline */}
                <div className="experience-section">
                  <h3>Career Highlights</h3>
                  <div className="timeline">
                    <div className="timeline-item">
                      <div className="timeline-marker" />
                      <div className="timeline-content">
                        <div className="timeline-year">2023</div>
                        <h5>Top 3% Agent Recognition</h5>
                        <p>
                          Recognized as one of the top-performing agents in the
                          metropolitan area with $18M+ in sales volume.
                        </p>
                      </div>
                    </div>
                    <div className="timeline-item">
                      <div className="timeline-marker" />
                      <div className="timeline-content">
                        <div className="timeline-year">2021</div>
                        <h5>Luxury Market Specialist</h5>
                        <p>
                          Completed advanced certification in luxury property
                          marketing and client relations.
                        </p>
                      </div>
                    </div>
                    <div className="timeline-item">
                      <div className="timeline-marker" />
                      <div className="timeline-content">
                        <div className="timeline-year">2018</div>
                        <h5>Senior Agent Promotion</h5>
                        <p>
                          Promoted to senior agent position after consistently
                          exceeding sales targets and client satisfaction
                          scores.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Service Areas */}
                <div className="service-areas">
                  <h3>Service Areas &amp; Expertise</h3>
                  <div className="areas-grid">
                    <div className="area-item">
                      <i className="bi bi-building" />
                      <div>
                        <h5>Downtown District</h5>
                        <p>High-rise condos and urban lofts</p>
                      </div>
                    </div>
                    <div className="area-item">
                      <i className="bi bi-house-heart" />
                      <div>
                        <h5>Suburban Communities</h5>
                        <p>Family homes and neighborhoods</p>
                      </div>
                    </div>
                    <div className="area-item">
                      <i className="bi bi-gem" />
                      <div>
                        <h5>Luxury Properties</h5>
                        <p>Premium estates and waterfront homes</p>
                      </div>
                    </div>
                    <div className="area-item">
                      <i className="bi bi-graph-up-arrow" />
                      <div>
                        <h5>Investment Properties</h5>
                        <p>Commercial and rental opportunities</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Right Sidebar */}
              <div className="content-sidebar">
                {/* Contact Widget */}
                <div className="contact-widget">
                  <h4>Let's Connect</h4>
                  <div className="contact-methods">
                    <a
                      href="tel:+15556789012"
                      className="contact-method primary"
                    >
                      <i className="bi bi-telephone-fill" />
                      <div>
                        <span className="method-label">Call Now</span>
                        <span className="method-value">+1 (555) 678-9012</span>
                      </div>
                    </a>
                    <a
                      href="mailto:marcus.johnson@example.com"
                      className="contact-method"
                    >
                      <i className="bi bi-envelope-fill" />
                      <div>
                        <span className="method-label">Email</span>
                        <span className="method-value">
                          marcus.johnson@example.com
                        </span>
                      </div>
                    </a>
                    <a href="#" className="contact-method">
                      <i className="bi bi-whatsapp" />
                      <div>
                        <span className="method-label">WhatsApp</span>
                        <span className="method-value">Quick messaging</span>
                      </div>
                    </a>
                  </div>
                  <div className="social-connect">
                    <h5>Follow Me</h5>
                    <div className="social-links">
                      <a href="#">
                        <i className="bi bi-linkedin" />
                      </a>
                      <a href="#">
                        <i className="bi bi-instagram" />
                      </a>
                      <a href="#">
                        <i className="bi bi-facebook" />
                      </a>
                      <a href="#">
                        <i className="bi bi-youtube" />
                      </a>
                    </div>
                  </div>
                </div>
                {/* Quick Form */}
                <div className="quick-contact-form">
                  <h4>Quick Inquiry</h4>
                  <form
                    action="forms/contact.php"
                    method="post"
                    className="php-email-form"
                  >
                    <div className="mb-3">
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder="Your Name"
                        required=""
                      />
                    </div>
                    <div className="mb-3">
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        placeholder="Email Address"
                        required=""
                      />
                    </div>
                    <div className="mb-3">
                      <select
                        name="subject"
                        className="form-control"
                        required=""
                      >
                        <option value="">I'm interested in...</option>
                        <option value="Interested in buying Buying Property">
                          Buying Property
                        </option>
                        <option value="Interested in Selling Property">
                          Selling Property
                        </option>
                        <option value="Interested in Investment Opportunities">
                          Investment Opportunities
                        </option>
                        <option value="Interested in Free Consultatio">
                          Free Consultation
                        </option>
                      </select>
                    </div>
                    <div className="mb-3">
                      <textarea
                        name="message"
                        className="form-control"
                        rows={3}
                        placeholder="Brief message..."
                        defaultValue={""}
                      />
                    </div>
                    <div className="loading">Loading</div>
                    <div className="error-message" />
                    <div className="sent-message">
                      Your message has been sent. Thank you!
                    </div>
                    <button type="submit" className="btn btn-submit">
                      <i className="bi bi-send" />
                      Send Message
                    </button>
                  </form>
                </div>
                {/* Achievements */}
                <div className="achievements-widget">
                  <h4>Recent Achievements</h4>
                  <div className="achievement-list">
                    <div className="achievement-item">
                      <div className="achievement-icon">
                        <i className="bi bi-award-fill" />
                      </div>
                      <div className="achievement-text">
                        <h6>Excellence Award 2023</h6>
                        <span>Metropolitan Real Estate Board</span>
                      </div>
                    </div>
                    <div className="achievement-item">
                      <div className="achievement-icon">
                        <i className="bi bi-trophy-fill" />
                      </div>
                      <div className="achievement-text">
                        <h6>Top Sales Performance</h6>
                        <span>$18M+ Volume Last Year</span>
                      </div>
                    </div>
                    <div className="achievement-item">
                      <div className="achievement-icon">
                        <i className="bi bi-people-fill" />
                      </div>
                      <div className="achievement-text">
                        <h6>Client Satisfaction</h6>
                        <span>98% Positive Reviews</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Office Info */}
                <div className="office-info">
                  <h4>Office Location</h4>
                  <div className="office-details">
                    <div className="office-address">
                      <i className="bi bi-geo-alt-fill" />
                      <div>
                        <span>Premier Realty Group</span>
                        <span>
                          789 Business Plaza, Suite 200
                          <br />
                          Miami, FL 33101
                        </span>
                      </div>
                    </div>
                    <div className="office-hours">
                      <i className="bi bi-clock-fill" />
                      <div>
                        <span>Business Hours</span>
                        <span>
                          Mon - Fri: 9:00 AM - 7:00 PM
                          <br />
                          Weekends: By Appointment
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Performance Metrics */}
            <div
              className="performance-metrics"
              data-aos="fade-up"
              data-aos-delay={300}
            >
              <div className="metrics-grid">
                <div className="metric-card">
                  <div className="metric-icon">
                    <i className="bi bi-house-door-fill" />
                  </div>
                  <div className="metric-data">
                    <span className="metric-number">156</span>
                    <span className="metric-label">Properties Sold</span>
                  </div>
                </div>
                <div className="metric-card">
                  <div className="metric-icon">
                    <i className="bi bi-currency-dollar" />
                  </div>
                  <div className="metric-data">
                    <span className="metric-number">$45M+</span>
                    <span className="metric-label">Total Sales Volume</span>
                  </div>
                </div>
                <div className="metric-card">
                  <div className="metric-icon">
                    <i className="bi bi-heart-fill" />
                  </div>
                  <div className="metric-data">
                    <span className="metric-number">98%</span>
                    <span className="metric-label">Client Satisfaction</span>
                  </div>
                </div>
                <div className="metric-card">
                  <div className="metric-icon">
                    <i className="bi bi-speedometer2" />
                  </div>
                  <div className="metric-data">
                    <span className="metric-number">28</span>
                    <span className="metric-label">Avg. Days on Market</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* /Agent Profile Section */}
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
