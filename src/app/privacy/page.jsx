import React from "react";

export default function Privacy() {
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
                    <a href="terms.html">Terms</a>
                  </li>
                  <li>
                    <a href="privacy.html" className="active">
                      Privacy
                    </a>
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
                  <h1 className="heading-title">Privacy</h1>
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
                <li className="current">Privacy</li>
              </ol>
            </div>
          </nav>
        </div>
        {/* End Page Title */}
        {/* Privacy Section */}
        <section id="privacy" className="privacy section">
          <div className="container" data-aos="fade-up" data-aos-delay={100}>
            <div className="row">
              <div className="col-lg-8 mx-auto">
                <div className="privacy-content">
                  <div
                    className="last-updated"
                    data-aos="fade-up"
                    data-aos-delay={200}
                  >
                    <p>
                      <strong>Last updated:</strong> December 15, 2024
                    </p>
                  </div>
                  <div
                    className="privacy-section"
                    data-aos="fade-up"
                    data-aos-delay={300}
                  >
                    <h3>Information We Collect</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <h4>Personal Information</h4>
                    <ul>
                      <li>
                        Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum
                      </li>
                      <li>
                        Excepteur sint occaecat cupidatat non proident sunt in
                        culpa
                      </li>
                      <li>
                        Qui officia deserunt mollitia animi id est laborum
                      </li>
                      <li>
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem
                      </li>
                    </ul>
                    <h4>Usage Data</h4>
                    <p>
                      Accusantium doloremque laudantium, totam rem aperiam eaque
                      ipsa quae ab illo inventore veritatis et quasi architecto
                      beatae vitae dicta sunt explicabo. Nemo enim ipsam
                      voluptatem quia voluptas sit aspernatur.
                    </p>
                  </div>
                  <div
                    className="privacy-section"
                    data-aos="fade-up"
                    data-aos-delay={400}
                  >
                    <h3>How We Use Your Information</h3>
                    <p>
                      At vero eos et accusamus et iusto odio dignissimos ducimus
                      qui blanditiis praesentium voluptatum deleniti atque
                      corrupti quos dolores et quas molestias excepturi sint
                      occaecati cupiditate non provident.
                    </p>
                    <div className="info-box">
                      <h4>Primary Uses</h4>
                      <ol>
                        <li>
                          Similique sunt in culpa qui officia deserunt mollitia
                        </li>
                        <li>
                          Et harum quidem rerum facilis est et expedita
                          distinctio
                        </li>
                        <li>
                          Nam libero tempore cum soluta nobis est eligendi
                        </li>
                        <li>
                          Temporibus autem quibusdam et aut officiis debitis
                        </li>
                      </ol>
                    </div>
                  </div>
                  <div
                    className="privacy-section"
                    data-aos="fade-up"
                    data-aos-delay={500}
                  >
                    <h3>Information Sharing and Disclosure</h3>
                    <p>
                      Neque porro quisquam est qui dolorem ipsum quia dolor sit
                      amet consectetur adipisci velit sed quia non numquam eius
                      modi tempora incidunt ut labore et dolore magnam aliquam
                      quaerat voluptatem.
                    </p>
                    <div
                      className="highlight-box"
                      data-aos="fade-up"
                      data-aos-delay={600}
                    >
                      <i className="bi bi-shield-check" />
                      <h4>We Never Sell Your Data</h4>
                      <p>
                        Ut enim ad minima veniam, quis nostrum exercitationem
                        ullam corporis suscipit laboriosam nisi ut aliquid ex ea
                        commodi consequatur.
                      </p>
                    </div>
                  </div>
                  <div
                    className="privacy-section"
                    data-aos="fade-up"
                    data-aos-delay={700}
                  >
                    <h3>Data Security</h3>
                    <p>
                      Quis autem vel eum iure reprehenderit qui in ea voluptate
                      velit esse quam nihil molestiae consequatur vel illum qui
                      dolorem eum fugiat quo voluptas nulla pariatur.
                    </p>
                    <div className="security-measures">
                      <div className="row">
                        <div
                          className="col-md-6"
                          data-aos="fade-right"
                          data-aos-delay={800}
                        >
                          <div className="measure-item">
                            <i className="bi bi-lock-fill" />
                            <h5>Encryption</h5>
                            <p>
                              Excepteur sint occaecat cupidatat non proident
                              sunt in culpa qui officia deserunt.
                            </p>
                          </div>
                        </div>
                        <div
                          className="col-md-6"
                          data-aos="fade-left"
                          data-aos-delay={900}
                        >
                          <div className="measure-item">
                            <i className="bi bi-server" />
                            <h5>Secure Storage</h5>
                            <p>
                              Mollitia animi id est laborum et dolorum fuga et
                              harum quidem rerum facilis.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="privacy-section"
                    data-aos="fade-up"
                    data-aos-delay={1000}
                  >
                    <h3>Your Rights</h3>
                    <p>
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium totam rem
                      aperiam eaque ipsa quae ab illo inventore veritatis.
                    </p>
                    <div className="rights-list">
                      <div className="right-item">
                        <i className="bi bi-eye" />
                        <div>
                          <h5>Right to Access</h5>
                          <p>
                            Et quasi architecto beatae vitae dicta sunt
                            explicabo nemo enim ipsam voluptatem.
                          </p>
                        </div>
                      </div>
                      <div className="right-item">
                        <i className="bi bi-pencil" />
                        <div>
                          <h5>Right to Rectification</h5>
                          <p>
                            Quia voluptas sit aspernatur aut odit aut fugit sed
                            quia consequuntur magni.
                          </p>
                        </div>
                      </div>
                      <div className="right-item">
                        <i className="bi bi-trash" />
                        <div>
                          <h5>Right to Erasure</h5>
                          <p>
                            Dolores eos qui ratione voluptatem sequi nesciunt
                            neque porro quisquam est.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="privacy-section"
                    data-aos="fade-up"
                    data-aos-delay={1100}
                  >
                    <h3>Cookies and Tracking</h3>
                    <p>
                      Qui dolorem ipsum quia dolor sit amet consectetur adipisci
                      velit sed quia non numquam eius modi tempora incidunt ut
                      labore et dolore magnam aliquam quaerat voluptatem.
                    </p>
                    <div className="cookie-types">
                      <h4>Types of Cookies We Use</h4>
                      <div className="table-responsive">
                        <table className="table">
                          <thead>
                            <tr>
                              <th>Cookie Type</th>
                              <th>Purpose</th>
                              <th>Duration</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>Essential</td>
                              <td>Ut enim ad minima veniam quis nostrum</td>
                              <td>Session</td>
                            </tr>
                            <tr>
                              <td>Analytics</td>
                              <td>Exercitationem ullam corporis suscipit</td>
                              <td>2 Years</td>
                            </tr>
                            <tr>
                              <td>Marketing</td>
                              <td>Laboriosam nisi ut aliquid ex ea commodi</td>
                              <td>1 Year</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                  <div
                    className="privacy-section"
                    data-aos="fade-up"
                    data-aos-delay={1200}
                  >
                    <h3>Changes to This Privacy Policy</h3>
                    <p>
                      Quis autem vel eum iure reprehenderit qui in ea voluptate
                      velit esse quam nihil molestiae consequatur vel illum qui
                      dolorem eum fugiat quo voluptas nulla pariatur.
                    </p>
                  </div>
                  <div
                    className="contact-section"
                    data-aos="fade-up"
                    data-aos-delay={1300}
                  >
                    <h3>Contact Us</h3>
                    <p>
                      Excepteur sint occaecat cupidatat non proident sunt in
                      culpa qui officia deserunt mollitia animi id est laborum
                      sed ut perspiciatis unde omnis.
                    </p>
                    <div className="contact-info">
                      <div className="contact-item">
                        <i className="bi bi-envelope" />
                        <span>privacy@example.com</span>
                      </div>
                      <div className="contact-item">
                        <i className="bi bi-geo-alt" />
                        <span>1234 Privacy Street, Legal City, LC 12345</span>
                      </div>
                      <div className="contact-item">
                        <i className="bi bi-telephone" />
                        <span>+1 (555) 123-4567</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* /Privacy Section */}
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
