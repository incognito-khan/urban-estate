export default function Home() {
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
            {/* <img src="/assets/img/logo.webp" alt=""> */}
            <h1 className="sitename">TheProperty</h1>
          </a>
          <nav id="navmenu" className="navmenu">
            <ul>
              <li>
                <a href="index.html" className="active">
                  Home
                </a>
              </li>
              <li>
                <a href="/about">About</a>
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
        {/* Hero Section */}
        <section id="hero" className="hero section">
          <div className="container" data-aos="fade-up" data-aos-delay={100}>
            <div className="hero-content">
              <div className="row align-items-center">
                <div
                  className="col-lg-6 hero-text"
                  data-aos="fade-right"
                  data-aos-delay={200}
                >
                  <div className="hero-badge">
                    <i className="bi bi-star-fill" />
                    <span>Premium Properties</span>
                  </div>
                  <h1>Discover Your Perfect Home in the Heart of the City</h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Browse thousands of verified listings from trusted
                    agents.
                  </p>
                  <div
                    className="search-form"
                    data-aos="fade-up"
                    data-aos-delay={300}
                  >
                    <form action="">
                      <div className="row g-3">
                        <div className="col-12">
                          <div className="form-floating">
                            <input
                              type="text"
                              className="form-control"
                              id="location"
                              name="location"
                              required=""
                            />
                            <label htmlFor="location">Location</label>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-floating">
                            <select
                              className="form-select"
                              id="property-type"
                              name="property_type"
                              required=""
                            >
                              <option value="">Select Type</option>
                              <option value="house">House</option>
                              <option value="apartment">Apartment</option>
                              <option value="condo">Condo</option>
                              <option value="townhouse">Townhouse</option>
                              <option value="land">Land</option>
                            </select>
                            <label htmlFor="property-type">Property Type</label>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-floating">
                            <select
                              className="form-select"
                              id="price-range"
                              name="price_range"
                              required=""
                            >
                              <option value="">Price Range</option>
                              <option value="0-200000">Under $200K</option>
                              <option value="200000-500000">
                                $200K - $500K
                              </option>
                              <option value="500000-800000">
                                $500K - $800K
                              </option>
                              <option value="800000-1200000">
                                $800K - $1.2M
                              </option>
                              <option value="1200000+">Above $1.2M</option>
                            </select>
                            <label htmlFor="price-range">Price Range</label>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-floating">
                            <select
                              className="form-select"
                              id="bedrooms"
                              name="bedrooms"
                            >
                              <option value="">Bedrooms</option>
                              <option value={1}>1 Bedroom</option>
                              <option value={2}>2 Bedrooms</option>
                              <option value={3}>3 Bedrooms</option>
                              <option value={4}>4 Bedrooms</option>
                              <option value="5+">5+ Bedrooms</option>
                            </select>
                            <label htmlFor="bedrooms">Bedrooms</label>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-floating">
                            <select
                              className="form-select"
                              id="bathrooms"
                              name="bathrooms"
                            >
                              <option value="">Bathrooms</option>
                              <option value={1}>1 Bathroom</option>
                              <option value={2}>2 Bathrooms</option>
                              <option value={3}>3 Bathrooms</option>
                              <option value="4+">4+ Bathrooms</option>
                            </select>
                            <label htmlFor="bathrooms">Bathrooms</label>
                          </div>
                        </div>
                        <div className="col-12">
                          <button
                            type="submit"
                            className="btn btn-search w-100"
                          >
                            <i className="bi bi-search" />
                            Search Properties
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div
                    className="hero-stats"
                    data-aos="fade-up"
                    data-aos-delay={400}
                  >
                    <div className="row">
                      <div className="col-4">
                        <div className="stat-item">
                          <h3>
                            <span
                              data-purecounter-start={0}
                              data-purecounter-end={2847}
                              data-purecounter-duration={1}
                              className="purecounter"
                            />
                            +
                          </h3>
                          <p>Properties Listed</p>
                        </div>
                      </div>
                      <div className="col-4">
                        <div className="stat-item">
                          <h3>
                            <span
                              data-purecounter-start={0}
                              data-purecounter-end={156}
                              data-purecounter-duration={1}
                              className="purecounter"
                            />
                            +
                          </h3>
                          <p>Verified Agents</p>
                        </div>
                      </div>
                      <div className="col-4">
                        <div className="stat-item">
                          <h3>
                            <span
                              data-purecounter-start={0}
                              data-purecounter-end={98}
                              data-purecounter-duration={1}
                              className="purecounter"
                            />
                            %
                          </h3>
                          <p>Client Satisfaction</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End Hero Text */}
                <div
                  className="col-lg-6 hero-images"
                  data-aos="fade-left"
                  data-aos-delay={400}
                >
                  <div className="image-stack">
                    <div className="main-image">
                      <img
                        src="/assets/img/real-estate/property-exterior-3.webp"
                        alt="Luxury Property"
                        className="img-fluid"
                      />
                      <div className="property-tag">
                        <span className="price">$850,000</span>
                        <span className="type">Featured</span>
                      </div>
                    </div>
                    <div className="secondary-image">
                      <img
                        src="/assets/img/real-estate/property-interior-7.webp"
                        alt="Property Interior"
                        className="img-fluid"
                      />
                    </div>
                    <div className="floating-card">
                      <div className="agent-info">
                        <img
                          src="/assets/img/real-estate/agent-4.webp"
                          alt="Agent"
                          className="agent-avatar"
                        />
                        <div className="agent-details">
                          <h5>Sarah Johnson</h5>
                          <p>Top Real Estate Agent</p>
                          <div className="rating">
                            <i className="bi bi-star-fill" />
                            <i className="bi bi-star-fill" />
                            <i className="bi bi-star-fill" />
                            <i className="bi bi-star-fill" />
                            <i className="bi bi-star-fill" />
                            <span>4.9 (127 reviews)</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End Hero Images */}
              </div>
            </div>
          </div>
        </section>
        {/* /Hero Section */}
        {/* Home About Section */}
        <section id="home-about" className="home-about section">
          <div className="container" data-aos="fade-up" data-aos-delay={100}>
            <div className="row align-items-center gy-5">
              <div
                className="col-lg-6 order-lg-2"
                data-aos="fade-left"
                data-aos-delay={200}
              >
                <div className="image-section">
                  <div className="main-image-wrapper">
                    <img
                      src="/assets/img/real-estate/property-exterior-7.webp"
                      alt="Premium Property"
                      className="img-fluid main-image"
                    />
                    <div className="floating-card">
                      <div className="card-content">
                        <div className="icon">
                          <i className="bi bi-award" />
                        </div>
                        <div className="text">
                          <span className="number">
                            <span
                              data-purecounter-start={0}
                              data-purecounter-end={12}
                              data-purecounter-duration={1}
                              className="purecounter"
                            />
                            +
                          </span>
                          <span className="label">Awards Won</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="secondary-images">
                    <div className="small-image">
                      <img
                        src="/assets/img/real-estate/property-interior-8.webp"
                        alt="Interior Design"
                        className="img-fluid"
                      />
                    </div>
                    <div className="small-image">
                      <img
                        src="/assets/img/real-estate/agent-3.webp"
                        alt="Expert Agent"
                        className="img-fluid"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-6 order-lg-1"
                data-aos="fade-right"
                data-aos-delay={300}
              >
                <div className="content-wrapper">
                  <div className="section-badge">
                    <i className="bi bi-buildings" />
                    <span>Premium Real Estate</span>
                  </div>
                  <h2>Transforming Real Estate Dreams Into Reality</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipiscing elit sed
                    do eiusmod tempor incididunt ut labore dolore magna aliqua.
                    Enim ad minim veniam quis nostrud exercitation ullamco
                    laboris nisi ut aliquip consequat.
                  </p>
                  <div className="stats-grid">
                    <div
                      className="stat-item"
                      data-aos="zoom-in"
                      data-aos-delay={400}
                    >
                      <div className="stat-number">
                        <span
                          data-purecounter-start={0}
                          data-purecounter-end={2800}
                          data-purecounter-duration={2}
                          className="purecounter"
                        />
                        +
                      </div>
                      <div className="stat-label">Properties Listed</div>
                    </div>
                    <div
                      className="stat-item"
                      data-aos="zoom-in"
                      data-aos-delay={450}
                    >
                      <div className="stat-number">
                        <span
                          data-purecounter-start={0}
                          data-purecounter-end={95}
                          data-purecounter-duration={1}
                          className="purecounter"
                        />
                        %
                      </div>
                      <div className="stat-label">Success Rate</div>
                    </div>
                    <div
                      className="stat-item"
                      data-aos="zoom-in"
                      data-aos-delay={500}
                    >
                      <div className="stat-number">
                        <span
                          data-purecounter-start={0}
                          data-purecounter-end={24}
                          data-purecounter-duration={1}
                          className="purecounter"
                        />
                        /7
                      </div>
                      <div className="stat-label">Client Support</div>
                    </div>
                  </div>
                  <div className="features-list">
                    <div className="feature-item">
                      <i className="bi bi-check-circle" />
                      <span>Expert market analysis and pricing strategies</span>
                    </div>
                    <div className="feature-item">
                      <i className="bi bi-check-circle" />
                      <span>Personalized property matching services</span>
                    </div>
                    <div className="feature-item">
                      <i className="bi bi-check-circle" />
                      <span>Professional photography and virtual tours</span>
                    </div>
                  </div>
                  <div className="cta-wrapper">
                    <a href="about.html" className="btn-primary">
                      <span>Learn More About Us</span>
                      <i className="bi bi-arrow-right-circle" />
                    </a>
                    <div className="contact-quick">
                      <i className="bi bi-headset" />
                      <div className="contact-text">
                        <span>Need assistance?</span>
                        <a href="tel:+15559876543">+1 (555) 987-6543</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* /Home About Section */}
        {/* Featured Properties Section */}
        <section
          id="featured-properties"
          className="featured-properties section"
        >
          {/* Section Title */}
          <div className="container section-title" data-aos="fade-up">
            <h2>Featured Properties</h2>
            <p>
              Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
              consectetur velit
            </p>
          </div>
          {/* End Section Title */}
          <div className="container" data-aos="fade-up" data-aos-delay={100}>
            <div
              className="grid-featured"
              data-aos="zoom-in"
              data-aos-delay={150}
            >
              <article className="highlight-card">
                <div className="media">
                  <div className="badge-set">
                    <span className="flag featured">Featured</span>
                    <span className="flag premium">Premium</span>
                  </div>
                  <a href="property-details.html" className="image-link">
                    <img
                      src="/assets/img/real-estate/property-exterior-6.webp"
                      alt="Showcase Villa"
                      className="img-fluid"
                    />
                  </a>
                  <div className="quick-specs">
                    <span>
                      <i className="bi bi-door-open" /> 5 Beds
                    </span>
                    <span>
                      <i className="bi bi-droplet" /> 4 Baths
                    </span>
                    <span>
                      <i className="bi bi-aspect-ratio" /> 4,900 sq ft
                    </span>
                  </div>
                </div>
                <div className="content">
                  <div className="top">
                    <div>
                      <h3>
                        <a href="property-details.html">
                          Seaside Villa with Infinity Pool
                        </a>
                      </h3>
                      <div className="loc">
                        <i className="bi bi-geo-alt-fill" /> Coronado, CA 92118
                      </div>
                    </div>
                    <div className="price">$3,760,000</div>
                  </div>
                  <p className="excerpt">
                    Praesent commodo cursus magna, fusce dapibus tellus ac
                    cursus commodo, vestibulum id ligula porta felis euismod
                    semper.
                  </p>
                  <div className="cta">
                    <a href="property-details.html" className="btn-main">
                      Arrange Visit
                    </a>
                    <a href="property-details.html" className="btn-soft">
                      More Photos
                    </a>
                    <div className="meta">
                      <span className="status for-sale">For Sale</span>
                      <span className="listed">Listed 2 days ago</span>
                    </div>
                  </div>
                </div>
              </article>
              {/* End Highlight Card */}
              <div className="mini-list">
                <article
                  className="mini-card"
                  data-aos="fade-up"
                  data-aos-delay={200}
                >
                  <a href="property-details.html" className="thumb">
                    <img
                      src="/assets/img/real-estate/property-interior-2.webp"
                      alt="Loft Haven"
                      className="img-fluid"
                      loading="lazy"
                    />
                    <span className="label hot">
                      <i className="bi bi-lightning-charge-fill" /> Hot
                    </span>
                  </a>
                  <div className="mini-body">
                    <h4>
                      <a href="property-details.html">
                        Urban Loft with Skyline Views
                      </a>
                    </h4>
                    <div className="mini-loc">
                      <i className="bi bi-geo" /> Denver, CO 80203
                    </div>
                    <div className="mini-specs">
                      <span>
                        <i className="bi bi-door-open" /> 2
                      </span>
                      <span>
                        <i className="bi bi-droplet" /> 2
                      </span>
                      <span>
                        <i className="bi bi-rulers" /> 1,450 sq ft
                      </span>
                    </div>
                    <div className="mini-foot">
                      <div className="mini-price">$689,000</div>
                      <a href="property-details.html" className="mini-btn">
                        Details
                      </a>
                    </div>
                  </div>
                </article>
                {/* End Mini Card */}
                <article
                  className="mini-card"
                  data-aos="fade-up"
                  data-aos-delay={250}
                >
                  <a href="property-details.html" className="thumb">
                    <img
                      src="/assets/img/real-estate/property-exterior-3.webp"
                      alt="Suburban Home"
                      className="img-fluid"
                      loading="lazy"
                    />
                    <span className="label new">
                      <i className="bi bi-star-fill" /> New
                    </span>
                  </a>
                  <div className="mini-body">
                    <h4>
                      <a href="property-details.html">
                        Charming Suburban Retreat
                      </a>
                    </h4>
                    <div className="mini-loc">
                      <i className="bi bi-geo" /> Austin, TX 78745
                    </div>
                    <div className="mini-specs">
                      <span>
                        <i className="bi bi-door-open" /> 4
                      </span>
                      <span>
                        <i className="bi bi-droplet" /> 3
                      </span>
                      <span>
                        <i className="bi bi-rulers" /> 2,350 sq ft
                      </span>
                    </div>
                    <div className="mini-foot">
                      <div className="mini-price">$545,000</div>
                      <a href="property-details.html" className="mini-btn">
                        Details
                      </a>
                    </div>
                  </div>
                </article>
                {/* End Mini Card */}
                <article
                  className="mini-card"
                  data-aos="fade-up"
                  data-aos-delay={300}
                >
                  <a href="property-details.html" className="thumb">
                    <img
                      src="/assets/img/real-estate/property-interior-7.webp"
                      alt="Penthouse"
                      className="img-fluid"
                      loading="lazy"
                    />
                    <span className="label featured">
                      <i className="bi bi-gem" /> Featured
                    </span>
                  </a>
                  <div className="mini-body">
                    <h4>
                      <a href="property-details.html">
                        Glass-Roof Penthouse Suite
                      </a>
                    </h4>
                    <div className="mini-loc">
                      <i className="bi bi-geo" /> Miami, FL 33131
                    </div>
                    <div className="mini-specs">
                      <span>
                        <i className="bi bi-door-open" /> 3
                      </span>
                      <span>
                        <i className="bi bi-droplet" /> 3
                      </span>
                      <span>
                        <i className="bi bi-rulers" /> 2,120 sq ft
                      </span>
                    </div>
                    <div className="mini-foot">
                      <div className="mini-price">$1,290,000</div>
                      <a href="property-details.html" className="mini-btn">
                        Details
                      </a>
                    </div>
                  </div>
                </article>
                {/* End Mini Card */}
              </div>
              {/* End Mini List */}
            </div>
            <div className="row gy-4 mt-4">
              <div className="col-lg-4" data-aos="fade-up" data-aos-delay={300}>
                <article className="stack-card">
                  <figure className="stack-media">
                    <img
                      src="/assets/img/real-estate/property-exterior-8.webp"
                      alt="Modern Facade"
                      className="img-fluid"
                      loading="lazy"
                    />
                    <figcaption>
                      <span className="chip exclusive">Exclusive</span>
                    </figcaption>
                  </figure>
                  <div className="stack-body">
                    <h5>
                      <a href="property-details.html">
                        Modern Courtyard Residence
                      </a>
                    </h5>
                    <div className="stack-loc">
                      <i className="bi bi-geo-alt" /> Scottsdale, AZ 85251
                    </div>
                    <ul className="stack-specs">
                      <li>
                        <i className="bi bi-door-open" /> 4
                      </li>
                      <li>
                        <i className="bi bi-droplet" /> 3
                      </li>
                      <li>
                        <i className="bi bi-aspect-ratio" /> 2,980 sq ft
                      </li>
                    </ul>
                    <div className="stack-foot">
                      <span className="stack-price">$1,025,000</span>
                      <a href="property-details.html" className="stack-link">
                        View
                      </a>
                    </div>
                  </div>
                </article>
              </div>
              <div className="col-lg-4" data-aos="fade-up" data-aos-delay={350}>
                <article className="stack-card">
                  <figure className="stack-media">
                    <img
                      src="/assets/img/real-estate/property-interior-10.webp"
                      alt="Cozy Interior"
                      className="img-fluid"
                      loading="lazy"
                    />
                    <figcaption>
                      <span className="chip hot">Hot</span>
                    </figcaption>
                  </figure>
                  <div className="stack-body">
                    <h5>
                      <a href="property-details.html">
                        Cozy Lakeview Townhouse
                      </a>
                    </h5>
                    <div className="stack-loc">
                      <i className="bi bi-geo-alt" /> Madison, WI 53703
                    </div>
                    <ul className="stack-specs">
                      <li>
                        <i className="bi bi-door-open" /> 3
                      </li>
                      <li>
                        <i className="bi bi-droplet" /> 2
                      </li>
                      <li>
                        <i className="bi bi-aspect-ratio" /> 1,780 sq ft
                      </li>
                    </ul>
                    <div className="stack-foot">
                      <span className="stack-price">$429,000</span>
                      <a href="property-details.html" className="stack-link">
                        View
                      </a>
                    </div>
                  </div>
                </article>
              </div>
              <div className="col-lg-4" data-aos="fade-up" data-aos-delay={400}>
                <article className="stack-card">
                  <figure className="stack-media">
                    <img
                      src="/assets/img/real-estate/property-exterior-10.webp"
                      alt="Garden Home"
                      className="img-fluid"
                      loading="lazy"
                    />
                    <figcaption>
                      <span className="chip new">New</span>
                    </figcaption>
                  </figure>
                  <div className="stack-body">
                    <h5>
                      <a href="property-details.html">
                        Garden Home Near Downtown
                      </a>
                    </h5>
                    <div className="stack-loc">
                      <i className="bi bi-geo-alt" /> Raleigh, NC 27601
                    </div>
                    <ul className="stack-specs">
                      <li>
                        <i className="bi bi-door-open" /> 3
                      </li>
                      <li>
                        <i className="bi bi-droplet" /> 2
                      </li>
                      <li>
                        <i className="bi bi-aspect-ratio" /> 1,920 sq ft
                      </li>
                    </ul>
                    <div className="stack-foot">
                      <span className="stack-price">$512,000</span>
                      <a href="property-details.html" className="stack-link">
                        View
                      </a>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>
        {/* /Featured Properties Section */}
        {/* Featured Services Section */}
        <section id="featured-services" className="featured-services section">
          {/* Section Title */}
          <div className="container section-title" data-aos="fade-up">
            <h2>Featured Services</h2>
            <p>
              Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
              consectetur velit
            </p>
          </div>
          {/* End Section Title */}
          <div className="container" data-aos="fade-up" data-aos-delay={100}>
            <div className="row g-4 justify-content-center">
              <div
                className="col-lg-3 col-md-6"
                data-aos="zoom-in"
                data-aos-delay={200}
              >
                <div className="service-card">
                  <div className="service-header">
                    <div className="service-icon">
                      <i className="bi bi-search" />
                    </div>
                    <div className="service-number">01</div>
                  </div>
                  <div className="service-content">
                    <h3>
                      <a href="service-details.html">Property Search</a>
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipiscing elit sed
                      eiusmod tempor incididunt labore dolore magna
                    </p>
                    <ul className="service-features">
                      <li>
                        <i className="bi bi-check2" /> Advanced Search Filters
                      </li>
                      <li>
                        <i className="bi bi-check2" /> 360° Virtual Tours
                      </li>
                      <li>
                        <i className="bi bi-check2" /> Real-time Updates
                      </li>
                    </ul>
                  </div>
                  <div className="service-action">
                    <a href="service-details.html" className="service-btn">
                      <span>Explore Properties</span>
                      <i className="bi bi-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
              {/* End Service Item */}
              <div
                className="col-lg-3 col-md-6"
                data-aos="zoom-in"
                data-aos-delay={300}
              >
                <div className="service-card featured">
                  <div className="service-header">
                    <div className="service-icon">
                      <i className="bi bi-graph-up" />
                    </div>
                    <div className="service-number">02</div>
                  </div>
                  <div className="service-content">
                    <h3>
                      <a href="service-details.html">Market Analysis</a>
                    </h3>
                    <p>
                      Ut enim ad minim veniam quis nostrud exercitation ullamco
                      laboris nisi aliquip commodo consequat duis aute
                    </p>
                    <ul className="service-features">
                      <li>
                        <i className="bi bi-check2" /> Price Trend Reports
                      </li>
                      <li>
                        <i className="bi bi-check2" /> Investment Insights
                      </li>
                      <li>
                        <i className="bi bi-check2" /> Market Forecasting
                      </li>
                    </ul>
                  </div>
                  <div className="service-action">
                    <a href="service-details.html" className="service-btn">
                      <span>Get Analysis</span>
                      <i className="bi bi-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
              {/* End Service Item */}
              <div
                className="col-lg-3 col-md-6"
                data-aos="zoom-in"
                data-aos-delay={400}
              >
                <div className="service-card">
                  <div className="service-header">
                    <div className="service-icon">
                      <i className="bi bi-key" />
                    </div>
                    <div className="service-number">03</div>
                  </div>
                  <div className="service-content">
                    <h3>
                      <a href="service-details.html">Property Management</a>
                    </h3>
                    <p>
                      Excepteur sint occaecat cupidatat non proident sunt culpa
                      qui officia deserunt mollit anim laborum sed
                    </p>
                    <ul className="service-features">
                      <li>
                        <i className="bi bi-check2" /> Tenant Screening
                      </li>
                      <li>
                        <i className="bi bi-check2" /> Rental Collection
                      </li>
                      <li>
                        <i className="bi bi-check2" /> Maintenance Services
                      </li>
                    </ul>
                  </div>
                  <div className="service-action">
                    <a href="service-details.html" className="service-btn">
                      <span>Manage Now</span>
                      <i className="bi bi-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
              {/* End Service Item */}
              <div
                className="col-lg-3 col-md-6"
                data-aos="zoom-in"
                data-aos-delay={500}
              >
                <div className="service-card">
                  <div className="service-header">
                    <div className="service-icon">
                      <i className="bi bi-shield-check" />
                    </div>
                    <div className="service-number">04</div>
                  </div>
                  <div className="service-content">
                    <h3>
                      <a href="service-details.html">Legal Support</a>
                    </h3>
                    <p>
                      Sed ut perspiciatis unde omnis iste natus error voluptatem
                      accusantium doloremque laudantium totam rem aperiam
                    </p>
                    <ul className="service-features">
                      <li>
                        <i className="bi bi-check2" /> Contract Review
                      </li>
                      <li>
                        <i className="bi bi-check2" /> Title Verification
                      </li>
                      <li>
                        <i className="bi bi-check2" /> Legal Documentation
                      </li>
                    </ul>
                  </div>
                  <div className="service-action">
                    <a href="service-details.html" className="service-btn">
                      <span>Learn More</span>
                      <i className="bi bi-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
              {/* End Service Item */}
            </div>
            <div
              className="text-center"
              data-aos="fade-up"
              data-aos-delay={600}
            >
              <a href="services.html" className="btn-all-services">
                <span>Discover All Our Services</span>
                <i className="bi bi-arrow-up-right" />
              </a>
            </div>
          </div>
        </section>
        {/* /Featured Services Section */}
        {/* Featured Agents Section */}
        <section id="featured-agents" className="featured-agents section">
          {/* Section Title */}
          <div className="container section-title" data-aos="fade-up">
            <h2>Featured Agents</h2>
            <p>
              Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
              consectetur velit
            </p>
          </div>
          {/* End Section Title */}
          <div className="container" data-aos="fade-up" data-aos-delay={100}>
            <div className="row gy-5 justify-content-center">
              <div
                className="col-lg-6 col-xl-4"
                data-aos="fade-up"
                data-aos-delay={100}
              >
                <div className="agent-card">
                  <div className="agent-image">
                    <img
                      src="/assets/img/real-estate/agent-5.webp"
                      alt="Top Agent"
                      className="img-fluid"
                    />
                    <div className="agent-overlay">
                      <div className="contact-buttons">
                        <a
                          href="tel:+14159876543"
                          className="btn-contact"
                          title="Call Agent"
                        >
                          <i className="bi bi-telephone" />
                        </a>
                        <a
                          href="mailto:lisa.thompson@example.com"
                          className="btn-contact"
                          title="Email Agent"
                        >
                          <i className="bi bi-envelope" />
                        </a>
                        <a href="#" className="btn-contact" title="WhatsApp">
                          <i className="bi bi-whatsapp" />
                        </a>
                      </div>
                    </div>
                    <div className="status-badge top-agent">Top Agent</div>
                  </div>
                  <div className="agent-info">
                    <div className="agent-meta">
                      <h3 className="agent-name">Lisa Thompson</h3>
                      <p className="agent-title">Luxury Property Expert</p>
                    </div>
                    <div className="agent-stats">
                      <div className="stat-item">
                        <span className="stat-number">150+</span>
                        <span className="stat-label">Properties Sold</span>
                      </div>
                      <div className="stat-divider" />
                      <div className="stat-item">
                        <span className="stat-number">4.9</span>
                        <span className="stat-label">Rating</span>
                      </div>
                    </div>
                    <div className="location-tag">
                      <i className="bi bi-geo-alt" />
                      <span>Miami Beach</span>
                    </div>
                    <div className="specialties">
                      <span className="specialty-tag">Waterfront</span>
                      <span className="specialty-tag">High-Rise</span>
                    </div>
                    <a href="agent-profile.html" className="profile-link">
                      View Full Profile
                    </a>
                  </div>
                </div>
              </div>
              {/* End Agent Card */}
              <div
                className="col-lg-6 col-xl-4"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                <div className="agent-card">
                  <div className="agent-image">
                    <img
                      src="/assets/img/real-estate/agent-4.webp"
                      alt="Top Agent"
                      className="img-fluid"
                    />
                    <div className="agent-overlay">
                      <div className="contact-buttons">
                        <a
                          href="tel:+14159876544"
                          className="btn-contact"
                          title="Call Agent"
                        >
                          <i className="bi bi-telephone" />
                        </a>
                        <a
                          href="mailto:robert.chen@example.com"
                          className="btn-contact"
                          title="Email Agent"
                        >
                          <i className="bi bi-envelope" />
                        </a>
                        <a href="#" className="btn-contact" title="WhatsApp">
                          <i className="bi bi-whatsapp" />
                        </a>
                      </div>
                    </div>
                    <div className="status-badge certified">Certified</div>
                  </div>
                  <div className="agent-info">
                    <div className="agent-meta">
                      <h3 className="agent-name">Robert Chen</h3>
                      <p className="agent-title">Commercial Specialist</p>
                    </div>
                    <div className="agent-stats">
                      <div className="stat-item">
                        <span className="stat-number">90+</span>
                        <span className="stat-label">Commercial Sales</span>
                      </div>
                      <div className="stat-divider" />
                      <div className="stat-item">
                        <span className="stat-number">4.8</span>
                        <span className="stat-label">Rating</span>
                      </div>
                    </div>
                    <div className="location-tag">
                      <i className="bi bi-geo-alt" />
                      <span>Downtown</span>
                    </div>
                    <div className="specialties">
                      <span className="specialty-tag">Office Space</span>
                      <span className="specialty-tag">Retail</span>
                    </div>
                    <a href="agent-profile.html" className="profile-link">
                      View Full Profile
                    </a>
                  </div>
                </div>
              </div>
              {/* End Agent Card */}
              <div
                className="col-lg-6 col-xl-4"
                data-aos="fade-up"
                data-aos-delay={300}
              >
                <div className="agent-card">
                  <div className="agent-image">
                    <img
                      src="/assets/img/real-estate/agent-8.webp"
                      alt="Top Agent"
                      className="img-fluid"
                    />
                    <div className="agent-overlay">
                      <div className="contact-buttons">
                        <a
                          href="tel:+14159876545"
                          className="btn-contact"
                          title="Call Agent"
                        >
                          <i className="bi bi-telephone" />
                        </a>
                        <a
                          href="mailto:maria.gonzalez@example.com"
                          className="btn-contact"
                          title="Email Agent"
                        >
                          <i className="bi bi-envelope" />
                        </a>
                        <a href="#" className="btn-contact" title="WhatsApp">
                          <i className="bi bi-whatsapp" />
                        </a>
                      </div>
                    </div>
                    <div className="status-badge new-star">Rising Star</div>
                  </div>
                  <div className="agent-info">
                    <div className="agent-meta">
                      <h3 className="agent-name">Maria Gonzalez</h3>
                      <p className="agent-title">Residential Advisor</p>
                    </div>
                    <div className="agent-stats">
                      <div className="stat-item">
                        <span className="stat-number">75+</span>
                        <span className="stat-label">Happy Families</span>
                      </div>
                      <div className="stat-divider" />
                      <div className="stat-item">
                        <span className="stat-number">4.9</span>
                        <span className="stat-label">Rating</span>
                      </div>
                    </div>
                    <div className="location-tag">
                      <i className="bi bi-geo-alt" />
                      <span>Suburbs</span>
                    </div>
                    <div className="specialties">
                      <span className="specialty-tag">Family Homes</span>
                      <span className="specialty-tag">First-Time</span>
                    </div>
                    <a href="agent-profile.html" className="profile-link">
                      View Full Profile
                    </a>
                  </div>
                </div>
              </div>
              {/* End Agent Card */}
            </div>
            <div
              className="text-center mt-5"
              data-aos="fade-up"
              data-aos-delay={400}
            >
              <a href="agents.html" className="explore-agents-btn">
                <span>Explore All Our Agents</span>
                <i className="bi bi-arrow-right-circle" />
              </a>
            </div>
          </div>
        </section>
        {/* /Featured Agents Section */}
        {/* Testimonials Section */}
        <section
          id="testimonials"
          className="testimonials section light-background"
        >
          {/* Section Title */}
          <div className="container section-title" data-aos="fade-up">
            <h2>Testimonials</h2>
            <p>
              Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
              consectetur velit
            </p>
          </div>
          {/* End Section Title */}
          <div className="container" data-aos="fade-up" data-aos-delay={100}>
            <div className="testimonials-slider swiper init-swiper">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="testimonial-item">
                    <div className="row">
                      <div className="col-lg-8">
                        <h2>Sed ut perspiciatis unde omnis</h2>
                        <p>
                          Proin iaculis purus consequat sem cure digni ssim
                          donec porttitora entum suscipit rhoncus. Accusantium
                          quam, ultricies eget id, aliquam eget nibh et. Maecen
                          aliquam, risus at semper.
                        </p>
                        <p>
                          Beatae magnam dolore quia ipsum. Voluptatem totam et
                          qui dolore dignissimos. Amet quia sapiente laudantium
                          nihil illo et assumenda sit cupiditate. Nam
                          perspiciatis perferendis minus consequatur. Enim ut
                          eos quo.
                        </p>
                        <div className="profile d-flex align-items-center">
                          <img
                            src="/assets/img/person/person-m-7.webp"
                            className="profile-img"
                            alt=""
                          />
                          <div className="profile-info">
                            <h3>Saul Goodman</h3>
                            <span>Client</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 d-none d-lg-block">
                        <div className="featured-img-wrapper">
                          <img
                            src="/assets/img/person/person-m-7.webp"
                            className="featured-img"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End Testimonial Item */}
                <div className="swiper-slide">
                  <div className="testimonial-item">
                    <div className="row">
                      <div className="col-lg-8">
                        <h2>Nemo enim ipsam voluptatem</h2>
                        <p>
                          Export tempor illum tamen malis malis eram quae irure
                          esse labore quem cillum quid cillum eram malis quorum
                          velit fore eram velit sunt aliqua noster fugiat irure
                          amet legam anim culpa.
                        </p>
                        <p>
                          Dolorem excepturi esse qui amet maxime quibusdam aut
                          repellendus voluptatum. Corrupti enim a repellat
                          cumque est laborum fuga consequuntur. Dolorem nostrum
                          deleniti quas voluptatem iure dolorum rerum.
                          Repudiandae doloribus ut repellat harum vero aut. Modi
                          aut velit aperiam aspernatur odit ut vitae.
                        </p>
                        <div className="profile d-flex align-items-center">
                          <img
                            src="/assets/img/person/person-f-8.webp"
                            className="profile-img"
                            alt=""
                          />
                          <div className="profile-info">
                            <h3>Sara Wilsson</h3>
                            <span>Designer</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 d-none d-lg-block">
                        <div className="featured-img-wrapper">
                          <img
                            src="/assets/img/person/person-f-8.webp"
                            className="featured-img"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End Testimonial Item */}
                <div className="swiper-slide">
                  <div className="testimonial-item">
                    <div className="row">
                      <div className="col-lg-8">
                        <h2>Labore nostrum eos impedit</h2>
                        <p>
                          Fugiat enim eram quae cillum dolore dolor amet nulla
                          culpa multos export minim fugiat minim velit minim
                          dolor enim duis veniam ipsum anim magna sunt elit fore
                          quem dolore labore illum veniam.
                        </p>
                        <p>
                          Itaque ut explicabo vero occaecati est quam rerum sed.
                          Numquam tempora aut aut quaerat quia illum. Nobis quia
                          autem odit ipsam numquam. Doloribus sit sint corporis
                          eius totam fuga. Hic nostrum suscipit corrupti nam
                          expedita adipisci aut optio.
                        </p>
                        <div className="profile d-flex align-items-center">
                          <img
                            src="/assets/img/person/person-m-9.webp"
                            className="profile-img"
                            alt=""
                          />
                          <div className="profile-info">
                            <h3>Matt Brandon</h3>
                            <span>Freelancer</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 d-none d-lg-block">
                        <div className="featured-img-wrapper">
                          <img
                            src="/assets/img/person/person-m-9.webp"
                            className="featured-img"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End Testimonial Item */}
                <div className="swiper-slide">
                  <div className="testimonial-item">
                    <div className="row">
                      <div className="col-lg-8">
                        <h2>Impedit dolor facilis nulla</h2>
                        <p>
                          Enim nisi quem export duis labore cillum quae magna
                          enim sint quorum nulla quem veniam duis minim tempor
                          labore quem eram duis noster aute amet eram fore quis
                          sint minim.
                        </p>
                        <p>
                          Omnis aspernatur accusantium qui delectus praesentium
                          repellendus. Facilis sint odio aspernatur voluptas
                          commodi qui qui qui pariatur. Corrupti deleniti itaque
                          quaerat ipsum deleniti culpa tempora tempore. Et
                          consequatur exercitationem hic aspernatur nobis est
                          voluptatibus architecto laborum.
                        </p>
                        <div className="profile d-flex align-items-center">
                          <img
                            src="/assets/img/person/person-f-10.webp"
                            className="profile-img"
                            alt=""
                          />
                          <div className="profile-info">
                            <h3>Jena Karlis</h3>
                            <span>Store Owner</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 d-none d-lg-block">
                        <div className="featured-img-wrapper">
                          <img
                            src="/assets/img/person/person-f-10.webp"
                            className="featured-img"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End Testimonial Item */}
              </div>
              <div className="swiper-navigation w-100 d-flex align-items-center justify-content-center">
                <div className="swiper-button-prev" />
                <div className="swiper-button-next" />
              </div>
            </div>
          </div>
        </section>
        {/* /Testimonials Section */}
        {/* Why Us Section */}
        <section id="why-us" className="why-us section">
          {/* Section Title */}
          <div className="container section-title" data-aos="fade-up">
            <h2>Why Us</h2>
            <p>
              Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
              consectetur velit
            </p>
          </div>
          {/* End Section Title */}
          <div className="container" data-aos="fade-up" data-aos-delay={100}>
            <div className="row align-items-center gy-5">
              <div
                className="col-lg-5"
                data-aos="fade-right"
                data-aos-delay={200}
              >
                <div className="image-showcase">
                  <div className="main-image-wrapper">
                    <img
                      src="/assets/img/real-estate/property-exterior-3.webp"
                      alt="Premium Property"
                      className="img-fluid main-image"
                    />
                    <div className="image-overlay">
                      <a
                        href="https://www.youtube.com/watch?v=Y7f98aduVJ8"
                        className="glightbox"
                      >
                        <div className="overlay-content">
                          <i className="bi bi-play-circle-fill play-icon" />
                          <span>Watch Our Story</span>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="floating-stats">
                    <div className="stat-badge">
                      <span className="stat-number">15+</span>
                      <span className="stat-text">Years Excellence</span>
                    </div>
                    <div className="stat-badge">
                      <span className="stat-number">3.2K</span>
                      <span className="stat-text">Happy Clients</span>
                    </div>
                  </div>
                  <div className="experience-card">
                    <div className="card-icon">
                      <i className="bi bi-gem" />
                    </div>
                    <div className="card-content">
                      <h5>Premier Service</h5>
                      <p>Luxury real estate expertise since 2009</p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-7"
                data-aos="fade-left"
                data-aos-delay={300}
              >
                <div className="content-wrapper">
                  <div className="section-badge">
                    <i className="bi bi-star-fill me-2" />
                    Why Elite Properties
                  </div>
                  <h2>Your Gateway to Exceptional Real Estate Experiences</h2>
                  <p className="lead-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
                  </p>
                  <div className="benefits-grid">
                    <div
                      className="benefit-item"
                      data-aos="fade-up"
                      data-aos-delay={400}
                    >
                      <div className="benefit-icon">
                        <i className="bi bi-geo-alt-fill" />
                      </div>
                      <div className="benefit-content">
                        <h4>Prime Locations</h4>
                        <p>
                          Exclusive access to the most sought-after
                          neighborhoods and emerging markets.
                        </p>
                      </div>
                    </div>
                    <div
                      className="benefit-item"
                      data-aos="fade-up"
                      data-aos-delay={450}
                    >
                      <div className="benefit-icon">
                        <i className="bi bi-shield-fill-check" />
                      </div>
                      <div className="benefit-content">
                        <h4>Guaranteed Results</h4>
                        <p>
                          Our proven track record ensures successful
                          transactions and satisfied clients.
                        </p>
                      </div>
                    </div>
                    <div
                      className="benefit-item"
                      data-aos="fade-up"
                      data-aos-delay={500}
                    >
                      <div className="benefit-icon">
                        <i className="bi bi-clock-fill" />
                      </div>
                      <div className="benefit-content">
                        <h4>Fast Processing</h4>
                        <p>
                          Streamlined processes and expert negotiation to close
                          deals efficiently.
                        </p>
                      </div>
                    </div>
                    <div
                      className="benefit-item"
                      data-aos="fade-up"
                      data-aos-delay={550}
                    >
                      <div className="benefit-icon">
                        <i className="bi bi-people-fill" />
                      </div>
                      <div className="benefit-content">
                        <h4>Expert Team</h4>
                        <p>
                          Certified professionals with deep market knowledge and
                          client dedication.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="achievement-highlights"
                    data-aos="fade-up"
                    data-aos-delay={600}
                  >
                    <div className="highlight-item">
                      <span
                        className="highlight-number purecounter"
                        data-purecounter-start={0}
                        data-purecounter-end={94}
                        data-purecounter-duration={2}
                      />
                      %<span className="highlight-label">Success Rate</span>
                    </div>
                    <div className="highlight-divider" />
                    <div className="highlight-item">
                      <span
                        className="highlight-number purecounter"
                        data-purecounter-start={0}
                        data-purecounter-end={1800}
                        data-purecounter-duration={2}
                      />
                      +<span className="highlight-label">Properties Sold</span>
                    </div>
                    <div className="highlight-divider" />
                    <div className="highlight-item">
                      <span
                        className="highlight-number purecounter"
                        data-purecounter-start={0}
                        data-purecounter-end={24}
                        data-purecounter-duration={2}
                      />
                      /7
                      <span className="highlight-label">Support Available</span>
                    </div>
                  </div>
                  <div
                    className="action-buttons"
                    data-aos="fade-up"
                    data-aos-delay={650}
                  >
                    <a href="properties.html" className="btn btn-primary">
                      Explore Properties
                    </a>
                    <a href="contact.html" className="btn btn-outline">
                      Schedule Consultation
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* /Why Us Section */}
        {/* Recent Blog Posts Section */}
        <section id="recent-blog-posts" className="recent-blog-posts section">
          {/* Section Title */}
          <div className="container section-title" data-aos="fade-up">
            <h2>Recent Blog Posts</h2>
            <p>
              Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
              consectetur velit
            </p>
          </div>
          {/* End Section Title */}
          <div className="container">
            <div className="row gy-5">
              <div
                className="col-xl-4 col-md-6"
                data-aos="fade-up"
                data-aos-delay={100}
              >
                <div className="post-item position-relative h-100">
                  <div className="post-img position-relative overflow-hidden">
                    <img
                      src="/assets/img/blog/blog-post-1.webp"
                      className="img-fluid"
                      alt=""
                    />
                    <span className="post-date">December 12</span>
                  </div>
                  <div className="post-content d-flex flex-column">
                    <h3 className="post-title">
                      Eum ad dolor et. Autem aut fugiat debitis
                    </h3>
                    <a
                      href="blog-details.html"
                      className="readmore stretched-link"
                    >
                      <span>Read More</span>
                      <i className="bi bi-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
              {/* End post item */}
              <div
                className="col-xl-4 col-md-6"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                <div className="post-item position-relative h-100">
                  <div className="post-img position-relative overflow-hidden">
                    <img
                      src="/assets/img/blog/blog-post-2.webp"
                      className="img-fluid"
                      alt=""
                    />
                    <span className="post-date">July 17</span>
                  </div>
                  <div className="post-content d-flex flex-column">
                    <h3 className="post-title">
                      Et repellendus molestiae qui est sed omnis
                    </h3>
                    <a
                      href="blog-details.html"
                      className="readmore stretched-link"
                    >
                      <span>Read More</span>
                      <i className="bi bi-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
              {/* End post item */}
              <div
                className="col-xl-4 col-md-6"
                data-aos="fade-up"
                data-aos-delay={300}
              >
                <div className="post-item position-relative h-100">
                  <div className="post-img position-relative overflow-hidden">
                    <img
                      src="/assets/img/blog/blog-post-3.webp"
                      className="img-fluid"
                      alt=""
                    />
                    <span className="post-date">September 05</span>
                  </div>
                  <div className="post-content d-flex flex-column">
                    <h3 className="post-title">
                      Quia assumenda est et veritati tirana ploder
                    </h3>
                    <a
                      href="blog-details.html"
                      className="readmore stretched-link"
                    >
                      <span>Read More</span>
                      <i className="bi bi-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
              {/* End post item */}
            </div>
          </div>
        </section>
        {/* /Recent Blog Posts Section */}
        {/* Call To Action Section */}
        <section
          className="call-to-action-2 call-to-action section light-background"
          id="call-to-action"
        >
          <div className="container" data-aos="fade-up" data-aos-delay={100}>
            <div className="row align-items-center">
              <div
                className="col-lg-6 order-2 order-lg-1"
                data-aos="fade-right"
                data-aos-delay={200}
              >
                <div className="cta-content">
                  <div className="section-badge">
                    Your Property Journey Starts Here
                  </div>
                  <h2>Ready to Find Your Perfect Investment?</h2>
                  <p>
                    Vestibulum ante ipsum primis in faucibus orci luctus et
                    ultrices posuere cubilia curae; Mauris viverra veniam sit
                    amet lacus cursus. Sed ut perspiciatis unde omnis iste natus
                    error sit voluptatem.
                  </p>
                  <div className="benefits-list">
                    <div
                      className="benefit-item"
                      data-aos="fade-up"
                      data-aos-delay={300}
                    >
                      <i className="bi bi-check-circle-fill" />
                      <span>Expert market analysis and insights</span>
                    </div>
                    <div
                      className="benefit-item"
                      data-aos="fade-up"
                      data-aos-delay={350}
                    >
                      <i className="bi bi-check-circle-fill" />
                      <span>Personalized property recommendations</span>
                    </div>
                    <div
                      className="benefit-item"
                      data-aos="fade-up"
                      data-aos-delay={400}
                    >
                      <i className="bi bi-check-circle-fill" />
                      <span>End-to-end transaction support</span>
                    </div>
                  </div>
                  <div className="cta-actions">
                    <a href="contact.html" className="btn btn-primary">
                      <i className="bi bi-person-lines-fill" />
                      Get Free Consultation
                    </a>
                    <a href="contact.html" className="btn btn-secondary">
                      <i className="bi bi-telephone-fill" />
                      Call (555) 123-4567
                    </a>
                  </div>
                </div>
                {/* End CTA Content */}
              </div>
              {/* End Left Column */}
              <div
                className="col-lg-6 order-1 order-lg-2"
                data-aos="fade-left"
                data-aos-delay={250}
              >
                <div className="cta-visual">
                  <div className="main-image">
                    <img
                      src="/assets/img/real-estate/property-exterior-5.webp"
                      alt="Property Investment"
                      className="img-fluid"
                    />
                    <div className="overlay-badge">
                      <i className="bi bi-star-fill" />
                      <span>Trusted by 500+ Clients</span>
                    </div>
                  </div>
                  <div className="floating-stats">
                    <div
                      className="stat-card"
                      data-aos="zoom-in"
                      data-aos-delay={450}
                    >
                      <div className="stat-icon">
                        <i className="bi bi-house-heart-fill" />
                      </div>
                      <div className="stat-info">
                        <span className="stat-number">850+</span>
                        <span className="stat-label">Properties Sold</span>
                      </div>
                    </div>
                    <div
                      className="stat-card"
                      data-aos="zoom-in"
                      data-aos-delay={500}
                    >
                      <div className="stat-icon">
                        <i className="bi bi-trophy-fill" />
                      </div>
                      <div className="stat-info">
                        <span className="stat-number">15</span>
                        <span className="stat-label">Years Experience</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End CTA Visual */}
              </div>
              {/* End Right Column */}
            </div>
          </div>
        </section>
        {/* /Call To Action Section */}
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
      {/* Scroll Top */}
      <a
        href="#"
        id="scroll-top"
        className="scroll-top d-flex align-items-center justify-content-center"
      >
        <i className="bi bi-arrow-up-short" />
      </a>
      {/* Preloader */}
      {/* <div id="preloader" /> */}
      {/* Vendor JS Files */}
      {/* Main JS File */}
    </div>
  );
}
