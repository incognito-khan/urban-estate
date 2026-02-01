import Link from "next/link";

export const metadata = {
  title: "About Us | UrbanEstate",
  description:
    "Learn more about UrbanEstate, your trusted and experienced real estate partner since 2010.",
};

export default function About() {
  return (
    <div>
      <main className="main pt-5 mt-5">
        {/* Page Title */}
        <div className="page-title">
          <div className="heading">
            <div className="container">
              <div className="row d-flex justify-content-center text-center">
                <div className="col-lg-8">
                  <h1 className="heading-title">About Us</h1>
                  <p className="mb-0">
                    At UrbanEstate, we don't just sell properties; we help you
                    find your place in the world. With over a decade of
                    experience, we are dedicated to making your real estate
                    journey seamless and successful.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <nav className="breadcrumbs">
            <div className="container">
              <ol>
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li className="current">About</li>
              </ol>
            </div>
          </nav>
        </div>
        {/* End Page Title */}
        {/* About Section */}
        <section id="about" className="about section">
          <div className="container" data-aos="fade-up" data-aos-delay={100}>
            <div className="row align-items-center mb-5">
              <div className="col-lg-7">
                <div
                  className="intro-content"
                  data-aos="fade-right"
                  data-aos-delay={200}
                >
                  <div className="section-badge">
                    <i className="bi bi-house-heart" />
                    <span>Your Trusted Real Estate Partner</span>
                  </div>
                  <h2>Building Dreams, Creating Homes Since 2010</h2>
                  <p className="lead-text">
                    Founded on the principles of integrity, transparency, and
                    purely client-centric service, UrbanEstate has grown from a
                    small local agency to a regional leader in residential and
                    commercial real estate.
                  </p>
                  <p>
                    Our mission is simple: to empower our clients with the
                    knowledge and resources they need to make informed
                    decisions. Whether you are buying your first home, seeking a
                    lucrative investment, or selling a cherished property, we
                    are here to guide you every step of the way. We believe in
                    building lasting relationships, not just closing deals.
                  </p>
                  <div
                    className="founder-highlight"
                    data-aos="fade-up"
                    data-aos-delay={300}
                  >
                    <div className="founder-image">
                      <img
                        src="assets/img/person/person-m-7.webp"
                        alt="Founder"
                        className="img-fluid"
                      />
                    </div>
                    <div className="founder-info">
                      <blockquote>
                        "Real estate is more than just transactions; it's about
                        people, their dreams, and the communities we build
                        together."
                      </blockquote>
                      <div className="founder-details">
                        <h5>Michael Thompson</h5>
                        <span>Founder &amp; CEO</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-5">
                <div
                  className="visual-section"
                  data-aos="fade-left"
                  data-aos-delay={250}
                >
                  <div className="main-image">
                    <img
                      src="assets/img/real-estate/property-exterior-7.webp"
                      alt="Luxury Development"
                      className="img-fluid"
                    />
                    <div className="experience-badge">
                      <div className="badge-number">14+</div>
                      <div className="badge-text">Years of Excellence</div>
                    </div>
                  </div>
                  <div className="overlay-image">
                    <img
                      src="assets/img/real-estate/property-interior-6.webp"
                      alt="Interior Design"
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div
              className="achievements-grid"
              data-aos="fade-up"
              data-aos-delay={350}
            >
              <div className="row text-center">
                <div className="col-lg-3 col-md-6 mb-4">
                  <div
                    className="achievement-item"
                    data-aos="zoom-in"
                    data-aos-delay={400}
                  >
                    <div className="achievement-icon">
                      <i className="bi bi-key" />
                    </div>
                    <div className="achievement-number">
                      <span
                        data-purecounter-start={0}
                        data-purecounter-end={2850}
                        data-purecounter-duration={2}
                        className="purecounter"
                      />
                      2,850+
                    </div>
                    <div className="achievement-label">Properties Sold</div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 mb-4">
                  <div
                    className="achievement-item"
                    data-aos="zoom-in"
                    data-aos-delay={450}
                  >
                    <div className="achievement-icon">
                      <i className="bi bi-heart-fill" />
                    </div>
                    <div className="achievement-number">
                      <span
                        data-purecounter-start={0}
                        data-purecounter-end={98}
                        data-purecounter-duration={2}
                        className="purecounter"
                      />
                      98%
                    </div>
                    <div className="achievement-label">Client Satisfaction</div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 mb-4">
                  <div
                    className="achievement-item"
                    data-aos="zoom-in"
                    data-aos-delay={500}
                  >
                    <div className="achievement-icon">
                      <i className="bi bi-geo-alt" />
                    </div>
                    <div className="achievement-number">
                      <span
                        data-purecounter-start={0}
                        data-purecounter-end={35}
                        data-purecounter-duration={2}
                        className="purecounter"
                      />
                      35+
                    </div>
                    <div className="achievement-label">Cities Covered</div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 mb-4">
                  <div
                    className="achievement-item"
                    data-aos="zoom-in"
                    data-aos-delay={550}
                  >
                    <div className="achievement-icon">
                      <i className="bi bi-award" />
                    </div>
                    <div className="achievement-number">
                      <span
                        data-purecounter-start={0}
                        data-purecounter-end={127}
                        data-purecounter-duration={2}
                        className="purecounter"
                      />
                      127
                    </div>
                    <div className="achievement-label">Industry Awards</div>
                  </div>
                </div>
              </div>
            </div>
            {/* End Achievements Grid */}
            <div
              className="timeline-section"
              data-aos="fade-up"
              data-aos-delay={400}
            >
              <div className="row justify-content-center">
                <div className="col-lg-10">
                  <div className="section-header text-center mb-5">
                    <h3>Our Journey of Excellence</h3>
                    <p>
                      From our humble beginnings to becoming a market leader,
                      every milestone represents our commitment to you.
                    </p>
                  </div>
                  <div className="timeline">
                    <div
                      className="timeline-item"
                      data-aos="fade-right"
                      data-aos-delay={450}
                    >
                      <div className="timeline-year">2010</div>
                      <div className="timeline-content">
                        <h4>Company Founded</h4>
                        <p>
                          UrbanEstate was established with a vision to redefine
                          property services through transparency and innovation.
                        </p>
                      </div>
                    </div>
                    <div
                      className="timeline-item"
                      data-aos="fade-left"
                      data-aos-delay={500}
                    >
                      <div className="timeline-year">2015</div>
                      <div className="timeline-content">
                        <h4>1000th Property Milestone</h4>
                        <p>
                          Detailed market analysis and dedicated service led us
                          to successfully close our 1000th property deal.
                        </p>
                      </div>
                    </div>
                    <div
                      className="timeline-item"
                      data-aos="fade-right"
                      data-aos-delay={550}
                    >
                      <div className="timeline-year">2020</div>
                      <div className="timeline-content">
                        <h4>Digital Innovation Launch</h4>
                        <p>
                          We launched our state-of-the-art digital platform,
                          making property search and management easier than
                          ever.
                        </p>
                      </div>
                    </div>
                    <div
                      className="timeline-item"
                      data-aos="fade-left"
                      data-aos-delay={600}
                    >
                      <div className="timeline-year">2024</div>
                      <div className="timeline-content">
                        <h4>Regional Expansion</h4>
                        <p>
                          Expanded our operations to 5 new major cities,
                          bringing UrbanEstate's premium service to a wider
                          audience.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End Timeline Section */}
            <div
              className="team-preview"
              data-aos="fade-up"
              data-aos-delay={450}
            >
              <div className="row justify-content-center">
                <div className="col-lg-8 text-center">
                  <h3>Meet Our Expert Team</h3>
                  <p className="team-description">
                    Our team of seasoned professionals is passionate about real
                    estate and dedicated to achieving the best results for our
                    clients.
                  </p>
                  <div className="team-grid">
                    <div className="row justify-content-center">
                      <div className="col-lg-4 col-md-6 mb-4">
                        <div
                          className="team-member"
                          data-aos="flip-up"
                          data-aos-delay={500}
                        >
                          <div className="member-image">
                            <img
                              src="assets/img/real-estate/agent-5.webp"
                              alt="Team Member"
                              className="img-fluid"
                            />
                          </div>
                          <div className="member-info">
                            <h5>Sarah Martinez</h5>
                            <span>Senior Property Advisor</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 mb-4">
                        <div
                          className="team-member"
                          data-aos="flip-up"
                          data-aos-delay={550}
                        >
                          <div className="member-image">
                            <img
                              src="assets/img/real-estate/agent-2.webp"
                              alt="Team Member"
                              className="img-fluid"
                            />
                          </div>
                          <div className="member-info">
                            <h5>David Chen</h5>
                            <span>Investment Specialist</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Link href="/agents" className="view-team-btn">
                    View Full Team
                  </Link>
                </div>
              </div>
            </div>
            {/* End Team Preview */}
          </div>
        </section>
        {/* /About Section */}
      </main>
    </div>
  );
}
