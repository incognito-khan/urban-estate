import Link from "next/link";
import { agents } from "@/data/agents";

export const metadata = {
  title: "Our Agents | UrbanEstate",
  description: "Meet our professional real estate agents.",
};

export default function Agents() {
  const featuredAgent = agents.find((agent) => agent.isFeatured);
  const otherAgents = agents.filter((agent) => !agent.isFeatured);

  return (
    <div>
      <main className="main pt-5 mt-5">
        {/* Page Title */}
        <div className="page-title">
          <div className="heading">
            <div className="container">
              <div className="row d-flex justify-content-center text-center">
                <div className="col-lg-8">
                  <h1 className="heading-title">Our Agents</h1>
                  <p className="mb-0">
                    Meet our team of dedicated professionals who are committed
                    to helping you navigate the real estate market with
                    confidence.
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
                <li className="current">Agents</li>
              </ol>
            </div>
          </nav>
        </div>
        {/* End Page Title */}

        {/* Agents Section */}
        <section id="agents" className="agents section">
          <div className="container" data-aos="fade-up" data-aos-delay={100}>
            {featuredAgent && (
              <div className="row mb-5">
                <div
                  className="col-lg-6"
                  data-aos="fade-right"
                  data-aos-delay={200}
                >
                  <div className="featured-agent">
                    <div className="agent-image">
                      <img
                        src={featuredAgent.image}
                        alt={featuredAgent.name}
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
                    <h3>{featuredAgent.name}</h3>
                    <span className="position">{featuredAgent.role}</span>
                    <div className="specialties">
                      {featuredAgent.specialties?.map((spec, index) => (
                        <span key={index} className="badge">
                          {spec}
                        </span>
                      ))}
                    </div>
                    <blockquote>"{featuredAgent.description}"</blockquote>
                    <div className="stats">
                      <div className="stat-item">
                        <span className="number">
                          {featuredAgent.stats?.propertiesSold}
                        </span>
                        <span className="label">Properties Sold</span>
                      </div>
                      <div className="stat-item">
                        <span className="number">
                          {featuredAgent.stats?.totalSales}
                        </span>
                        <span className="label">Total Sales</span>
                      </div>
                      <div className="stat-item">
                        <span className="number">
                          {featuredAgent.stats?.experience}
                        </span>
                        <span className="label">Experience</span>
                      </div>
                    </div>
                    <div className="contact-info">
                      <div className="contact-item">
                        <i className="bi bi-telephone" />
                        <span>{featuredAgent.contact.phone}</span>
                      </div>
                      <div className="contact-item">
                        <i className="bi bi-envelope" />
                        <span>{featuredAgent.contact.email}</span>
                      </div>
                      <div className="contact-item">
                        <i className="bi bi-geo-alt" />
                        <span>{featuredAgent.contact.location}</span>
                      </div>
                    </div>
                    <div className="social-links">
                      {Object.keys(featuredAgent.socials).map((key) => (
                        <a
                          key={key}
                          href={featuredAgent.socials[key]}
                          className="social-link"
                        >
                          <i className={`bi bi-${key}`} />
                        </a>
                      ))}
                    </div>
                    <div className="cta-buttons">
                      <Link
                        href={`/agents/${featuredAgent.id}`}
                        className="btn btn-primary"
                      >
                        View Profile
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )}

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
              {otherAgents.map((agent) => (
                <div
                  key={agent.id}
                  className="col-lg-3 col-md-6"
                  data-aos="zoom-in"
                  data-aos-delay={100}
                >
                  <div className="agent-card">
                    <div className="agent-photo">
                      <img
                        src={agent.image}
                        alt={agent.name}
                        className="img-fluid"
                      />
                      {agent.status && (
                        <div
                          className={`agent-status ${
                            agent.status === "Verified" ? "verified" : "new"
                          }`}
                        >
                          {agent.status}
                        </div>
                      )}
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
                      <h5>{agent.name}</h5>
                      <span className="role">{agent.role}</span>
                      <div className="location">
                        <i className="bi bi-geo-alt" />
                        <span>{agent.contact.location}</span>
                      </div>
                      <div className="languages">
                        {/* Placeholder for languages if not in data yet, or use specialties if appropriate */}
                        <span className="lang-tag">Eng</span>
                      </div>
                      <Link
                        href={`/agents/${agent.id}`}
                        className="view-listings"
                      >
                        View Profile
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* /Agents Section */}
      </main>
    </div>
  );
}
