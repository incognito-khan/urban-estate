export const metadata = {
  title: "Blog | UrbanEstate",
  description: "Read the latest news and articles about real estate.",
};

import React from "react";

export default function Blogs() {
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
                <a href="blog.html" className="active">
                  Blog
                </a>
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
                  <h1 className="heading-title">Blog</h1>
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
                <li className="current">Blog</li>
              </ol>
            </div>
          </nav>
        </div>
        {/* End Page Title */}
        {/* Blog Hero Section */}
        <section id="blog-hero" className="blog-hero section">
          <div className="container" data-aos="fade-up">
            <div className="row g-4">
              {/* Left Side Posts */}
              <div className="col-lg-3">
                <div className="side-posts">
                  {/* Side Post 1 */}
                  <article
                    className="post-item side-post"
                    data-aos="fade-right"
                    data-aos-delay={100}
                  >
                    <div className="post-img">
                      <img
                        src="assets/img/blog/blog-post-3.webp"
                        alt="Post Image"
                        className="img-fluid"
                        loading="lazy"
                      />
                      <span className="category entertainment">
                        Entertainment
                      </span>
                    </div>
                    <div className="post-content">
                      <h3 className="post-title">
                        <a href="#">
                          Maecenas tempus tellus eget condimentum rhoncus semper
                          quam
                        </a>
                      </h3>
                      <div className="post-meta">
                        <span>March 15, 2025</span>
                        <span className="dot">•</span>
                        <span>3 Comments</span>
                      </div>
                    </div>
                  </article>
                  {/* Side Post 2 */}
                  <article
                    className="post-item side-post"
                    data-aos="fade-right"
                    data-aos-delay={200}
                  >
                    <div className="post-img">
                      <img
                        src="assets/img/blog/blog-post-9.webp"
                        alt="Post Image"
                        className="img-fluid"
                        loading="lazy"
                      />
                      <span className="category technology">Technology</span>
                    </div>
                    <div className="post-content">
                      <h3 className="post-title">
                        <a href="#">
                          Donec pede justo fringilla vel aliquet nec vulputate
                          eget
                        </a>
                      </h3>
                      <div className="post-meta">
                        <span>March 14, 2025</span>
                        <span className="dot">•</span>
                        <span>5 Comments</span>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
              {/* Main Post */}
              <div className="col-lg-6">
                <article className="post-item main-post" data-aos="fade-up">
                  <div className="post-img">
                    <img
                      src="assets/img/blog/blog-post-7.webp"
                      alt="Post Image"
                      className="img-fluid"
                    />
                    <span className="category business">Business</span>
                  </div>
                  <div className="post-content">
                    <h2 className="post-title">
                      <a href="#">
                        Curabitur ullamcorper ultricies nisi nam eget dui etiam
                        rhoncus
                      </a>
                    </h2>
                    <p className="post-excerpt">
                      Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id,
                      lorem. Maecenas nec odio et ante tincidunt tempus. Donec
                      vitae sapien ut libero venenatis faucibus. Nullam quis
                      ante.
                    </p>
                    <div className="post-meta">
                      <span>March 16, 2025</span>
                      <span className="dot">•</span>
                      <span>8 Comments</span>
                    </div>
                  </div>
                </article>
              </div>
              {/* Right Side Posts */}
              <div className="col-lg-3">
                <div className="side-posts">
                  {/* Side Post 3 */}
                  <article
                    className="post-item side-post"
                    data-aos="fade-left"
                    data-aos-delay={100}
                  >
                    <div className="post-img">
                      <img
                        src="assets/img/blog/blog-post-6.webp"
                        alt="Post Image"
                        className="img-fluid"
                        loading="lazy"
                      />
                      <span className="category technology">Technology</span>
                    </div>
                    <div className="post-content">
                      <h3 className="post-title">
                        <a href="#">
                          Aenean vulputate eleifend tellus aenean leo ligula
                          porttitor
                        </a>
                      </h3>
                      <div className="post-meta">
                        <span>March 13, 2025</span>
                        <span className="dot">•</span>
                        <span>2 Comments</span>
                      </div>
                    </div>
                  </article>
                  {/* Side Post 4 */}
                  <article
                    className="post-item side-post"
                    data-aos="fade-left"
                    data-aos-delay={200}
                  >
                    <div className="post-img">
                      <img
                        src="assets/img/blog/blog-post-9.webp"
                        alt="Post Image"
                        className="img-fluid"
                        loading="lazy"
                      />
                      <span className="category lifestyle">Lifestyle</span>
                    </div>
                    <div className="post-content">
                      <h3 className="post-title">
                        <a href="#">
                          Etiam sit amet orci eget eros faucibus tincidunt duis
                          leo
                        </a>
                      </h3>
                      <div className="post-meta">
                        <span>March 12, 2025</span>
                        <span className="dot">•</span>
                        <span>4 Comments</span>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* /Blog Hero Section */}
        {/* Blog Posts Section */}
        <section id="blog-posts" className="blog-posts section">
          <div className="container" data-aos="fade-up" data-aos-delay={100}>
            <div className="row gy-4">
              <div className="col-lg-4">
                <article>
                  <div className="post-img">
                    <img
                      src="assets/img/blog/blog-post-1.webp"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                  <p className="post-category">Politics</p>
                  <h2 className="title">
                    <a href="blog-details.html">
                      Dolorum optio tempore voluptas dignissimos
                    </a>
                  </h2>
                  <div className="d-flex align-items-center">
                    <img
                      src="assets/img/person/person-f-12.webp"
                      alt=""
                      className="img-fluid post-author-img flex-shrink-0"
                    />
                    <div className="post-meta">
                      <p className="post-author">Maria Doe</p>
                      <p className="post-date">
                        <time dateTime="2022-01-01">Jan 1, 2022</time>
                      </p>
                    </div>
                  </div>
                </article>
              </div>
              {/* End post list item */}
              <div className="col-lg-4">
                <article>
                  <div className="post-img">
                    <img
                      src="assets/img/blog/blog-post-2.webp"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                  <p className="post-category">Sports</p>
                  <h2 className="title">
                    <a href="blog-details.html">
                      Nisi magni odit consequatur autem nulla dolorem
                    </a>
                  </h2>
                  <div className="d-flex align-items-center">
                    <img
                      src="assets/img/person/person-f-13.webp"
                      alt=""
                      className="img-fluid post-author-img flex-shrink-0"
                    />
                    <div className="post-meta">
                      <p className="post-author">Allisa Mayer</p>
                      <p className="post-date">
                        <time dateTime="2022-01-01">Jun 5, 2022</time>
                      </p>
                    </div>
                  </div>
                </article>
              </div>
              {/* End post list item */}
              <div className="col-lg-4">
                <article>
                  <div className="post-img">
                    <img
                      src="assets/img/blog/blog-post-3.webp"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                  <p className="post-category">Entertainment</p>
                  <h2 className="title">
                    <a href="blog-details.html">
                      Possimus soluta ut id suscipit ea ut in quo quia et soluta
                    </a>
                  </h2>
                  <div className="d-flex align-items-center">
                    <img
                      src="assets/img/person/person-m-10.webp"
                      alt=""
                      className="img-fluid post-author-img flex-shrink-0"
                    />
                    <div className="post-meta">
                      <p className="post-author">Mark Dower</p>
                      <p className="post-date">
                        <time dateTime="2022-01-01">Jun 22, 2022</time>
                      </p>
                    </div>
                  </div>
                </article>
              </div>
              {/* End post list item */}
              <div className="col-lg-4">
                <article>
                  <div className="post-img">
                    <img
                      src="assets/img/blog/blog-post-4.webp"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                  <p className="post-category">Sports</p>
                  <h2 className="title">
                    <a href="blog-details.html">
                      Non rem rerum nam cum quo minus olor distincti
                    </a>
                  </h2>
                  <div className="d-flex align-items-center">
                    <img
                      src="assets/img/person/person-f-14.webp"
                      alt=""
                      className="img-fluid post-author-img flex-shrink-0"
                    />
                    <div className="post-meta">
                      <p className="post-author">Lisa Neymar</p>
                      <p className="post-date">
                        <time dateTime="2022-01-01">Jun 30, 2022</time>
                      </p>
                    </div>
                  </div>
                </article>
              </div>
              {/* End post list item */}
              <div className="col-lg-4">
                <article>
                  <div className="post-img">
                    <img
                      src="assets/img/blog/blog-post-5.webp"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                  <p className="post-category">Politics</p>
                  <h2 className="title">
                    <a href="blog-details.html">
                      Accusamus quaerat aliquam qui debitis facilis consequatur
                    </a>
                  </h2>
                  <div className="d-flex align-items-center">
                    <img
                      src="assets/img/person/person-m-11.webp"
                      alt=""
                      className="img-fluid post-author-img flex-shrink-0"
                    />
                    <div className="post-meta">
                      <p className="post-author">Denis Peterson</p>
                      <p className="post-date">
                        <time dateTime="2022-01-01">Jan 30, 2022</time>
                      </p>
                    </div>
                  </div>
                </article>
              </div>
              {/* End post list item */}
              <div className="col-lg-4">
                <article>
                  <div className="post-img">
                    <img
                      src="assets/img/blog/blog-post-6.webp"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                  <p className="post-category">Entertainment</p>
                  <h2 className="title">
                    <a href="blog-details.html">
                      Distinctio provident quibusdam numquam aperiam aut
                    </a>
                  </h2>
                  <div className="d-flex align-items-center">
                    <img
                      src="assets/img/person/person-f-15.webp"
                      alt=""
                      className="img-fluid post-author-img flex-shrink-0"
                    />
                    <div className="post-meta">
                      <p className="post-author">Mika Lendon</p>
                      <p className="post-date">
                        <time dateTime="2022-01-01">Feb 14, 2022</time>
                      </p>
                    </div>
                  </div>
                </article>
              </div>
              {/* End post list item */}
            </div>
          </div>
        </section>
        {/* /Blog Posts Section */}
        {/* Pagination 2 Section */}
        <section id="pagination-2" className="pagination-2 section">
          <div className="container">
            <nav
              className="d-flex justify-content-center"
              aria-label="Page navigation"
            >
              <ul>
                <li>
                  <a href="#" aria-label="Previous page">
                    <i className="bi bi-arrow-left" />
                    <span className="d-none d-sm-inline">Previous</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="active">
                    1
                  </a>
                </li>
                <li>
                  <a href="#">2</a>
                </li>
                <li>
                  <a href="#">3</a>
                </li>
                <li className="ellipsis">...</li>
                <li>
                  <a href="#">8</a>
                </li>
                <li>
                  <a href="#">9</a>
                </li>
                <li>
                  <a href="#">10</a>
                </li>
                <li>
                  <a href="#" aria-label="Next page">
                    <span className="d-none d-sm-inline">Next</span>
                    <i className="bi bi-arrow-right" />
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </section>
        {/* /Pagination 2 Section */}
      </main>
    </div>
  );
}
