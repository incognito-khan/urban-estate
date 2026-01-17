import React from "react";

export default function Terms() {
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
                    <a href="agent-profile.html">Agent Profile</a>
                  </li>
                  <li>
                    <a href="blog-details.html">Blog Details</a>
                  </li>
                  <li>
                    <a href="terms.html" className="active">
                      Terms
                    </a>
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
                  <h1 className="heading-title">Terms</h1>
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
                <li className="current">Terms</li>
              </ol>
            </div>
          </nav>
        </div>
        {/* End Page Title */}
        {/* Terms Of Service Section */}
        <section id="terms-of-service" className="terms-of-service section">
          <div className="container" data-aos="fade-up">
            {/* Page Header */}
            <div className="tos-header text-center" data-aos="fade-up">
              <span className="last-updated">
                Last Updated: February 27, 2025
              </span>
              <h2>Terms of Service</h2>
              <p>
                Please read these terms of service carefully before using our
                services
              </p>
            </div>
            {/* Content */}
            <div
              className="tos-content"
              data-aos="fade-up"
              data-aos-delay={200}
            >
              {/* Agreement Section */}
              <div id="agreement" className="content-section">
                <h3>1. Agreement to Terms</h3>
                <p>
                  By accessing our website and services, you agree to be bound
                  by these Terms of Service and all applicable laws and
                  regulations. If you do not agree with any of these terms, you
                  are prohibited from using or accessing our services.
                </p>
                <div className="info-box">
                  <i className="bi bi-info-circle" />
                  <p>
                    These terms apply to all users, visitors, and others who
                    access or use our services.
                  </p>
                </div>
              </div>
              {/* Intellectual Property */}
              <div id="intellectual-property" className="content-section">
                <h3>2. Intellectual Property Rights</h3>
                <p>
                  Our service and its original content, features, and
                  functionality are owned by us and are protected by
                  international copyright, trademark, patent, trade secret, and
                  other intellectual property laws.
                </p>
                <ul className="list-items">
                  <li>All content is our exclusive property</li>
                  <li>You may not copy or modify the content</li>
                  <li>Our trademarks may not be used without permission</li>
                  <li>Content is for personal, non-commercial use only</li>
                </ul>
              </div>
              {/* User Accounts */}
              <div id="user-accounts" className="content-section">
                <h3>3. User Accounts</h3>
                <p>
                  When you create an account with us, you must provide accurate,
                  complete, and current information. Failure to do so
                  constitutes a breach of the Terms, which may result in
                  immediate termination of your account.
                </p>
                <div className="alert-box">
                  <i className="bi bi-exclamation-triangle" />
                  <div className="alert-content">
                    <h5>Important Notice</h5>
                    <p>
                      You are responsible for safeguarding the password and for
                      all activities that occur under your account.
                    </p>
                  </div>
                </div>
              </div>
              {/* Prohibited Activities */}
              <div id="prohibited" className="content-section">
                <h3>4. Prohibited Activities</h3>
                <p>
                  You may not access or use the Service for any purpose other
                  than that for which we make it available.
                </p>
                <div className="prohibited-list">
                  <div className="prohibited-item">
                    <i className="bi bi-x-circle" />
                    <span>Systematic retrieval of data or content</span>
                  </div>
                  <div className="prohibited-item">
                    <i className="bi bi-x-circle" />
                    <span>Publishing malicious content</span>
                  </div>
                  <div className="prohibited-item">
                    <i className="bi bi-x-circle" />
                    <span>Engaging in unauthorized framing</span>
                  </div>
                  <div className="prohibited-item">
                    <i className="bi bi-x-circle" />
                    <span>Attempting to gain unauthorized access</span>
                  </div>
                </div>
              </div>
              {/* Disclaimers */}
              <div id="disclaimer" className="content-section">
                <h3>5. Disclaimers</h3>
                <p>
                  Your use of our service is at your sole risk. The service is
                  provided "AS IS" and "AS AVAILABLE" without warranties of any
                  kind, whether express or implied.
                </p>
                <div className="disclaimer-box">
                  <p>We do not guarantee that:</p>
                  <ul>
                    <li>The service will meet your requirements</li>
                    <li>The service will be uninterrupted or error-free</li>
                    <li>Results from using the service will be accurate</li>
                    <li>Any errors will be corrected</li>
                  </ul>
                </div>
              </div>
              {/* Limitation of Liability */}
              <div id="limitation" className="content-section">
                <h3>6. Limitation of Liability</h3>
                <p>
                  In no event shall we be liable for any indirect, punitive,
                  incidental, special, consequential, or exemplary damages
                  arising out of or in connection with your use of the service.
                </p>
              </div>
              {/* Indemnification */}
              <div id="indemnification" className="content-section">
                <h3>7. Indemnification</h3>
                <p>
                  You agree to defend, indemnify, and hold us harmless from and
                  against any claims, liabilities, damages, losses, and expenses
                  arising out of your use of the service.
                </p>
              </div>
              {/* Termination */}
              <div id="termination" className="content-section">
                <h3>8. Termination</h3>
                <p>
                  We may terminate or suspend your account immediately, without
                  prior notice or liability, for any reason whatsoever,
                  including without limitation if you breach the Terms.
                </p>
              </div>
              {/* Governing Law */}
              <div id="governing-law" className="content-section">
                <h3>9. Governing Law</h3>
                <p>
                  These Terms shall be governed by and construed in accordance
                  with the laws of [Your Country], without regard to its
                  conflict of law provisions.
                </p>
              </div>
              {/* Changes */}
              <div id="changes" className="content-section">
                <h3>10. Changes to Terms</h3>
                <p>
                  We reserve the right to modify or replace these Terms at any
                  time. We will provide notice of any changes by posting the new
                  Terms on this page.
                </p>
                <div className="notice-box">
                  <i className="bi bi-bell" />
                  <p>
                    By continuing to access or use our service after those
                    revisions become effective, you agree to be bound by the
                    revised terms.
                  </p>
                </div>
              </div>
            </div>
            {/* Contact Section */}
            <div
              className="tos-contact"
              data-aos="fade-up"
              data-aos-delay={300}
            >
              <div className="contact-box">
                <div className="contact-icon">
                  <i className="bi bi-envelope" />
                </div>
                <div className="contact-content">
                  <h4>Questions About Terms?</h4>
                  <p>
                    If you have any questions about these Terms, please contact
                    us.
                  </p>
                  <a href="#" className="contact-link">
                    Contact Support
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* /Terms Of Service Section */}
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
