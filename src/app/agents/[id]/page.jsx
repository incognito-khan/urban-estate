import Link from "next/link";
import { notFound } from "next/navigation";
import { agents } from "@/data/agents";

export async function generateMetadata({ params }) {
  const { id } = await params;
  const agent = agents.find((a) => a.id === parseInt(id));

  if (!agent) {
    return {
      title: "Agent Not Found | UrbanEstate",
    };
  }

  return {
    title: `${agent.name} - ${agent.role} | UrbanEstate`,
    description: `Learn more about ${agent.name}, a ${agent.role} at UrbanEstate.`,
  };
}

export async function generateStaticParams() {
  return agents.map((agent) => ({
    id: agent.id.toString(),
  }));
}

export default async function AgentDetails({ params }) {
  const { id } = await params;
  const agent = agents.find((a) => a.id === parseInt(id));

  if (!agent) {
    notFound();
  }

  return (
    <div>
      <main className="main pt-5 mt-5">
        {/* Page Title */}
        <div className="page-title">
          <div className="heading">
            <div className="container">
              <div className="row d-flex justify-content-center text-center">
                <div className="col-lg-8">
                  <h1 className="heading-title">Agent Profile</h1>
                  <p className="mb-0">
                    Get to know our experienced team members who make your real
                    estate goals a reality.
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
                <li>
                  <Link href="/agents">Agents</Link>
                </li>
                <li className="current">{agent.name}</li>
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
                  src="/assets/img/real-estate/property-exterior-4.webp"
                  alt="Background"
                  className="profile-bg-image"
                />
              </div>
              <div className="profile-content">
                <div className="agent-avatar">
                  <img
                    src={agent.image}
                    alt={agent.name}
                    className="avatar-image"
                  />
                  <div className="status-indicator">
                    <i className="bi bi-circle-fill" />
                    <span>Available</span>
                  </div>
                </div>
                <div className="agent-header">
                  <h1 className="agent-name">{agent.name}</h1>
                  <div className="agent-credentials">
                    <span className="title">{agent.role}</span>
                    {agent.status === "Verified" && (
                      <div className="verification-badge">
                        <i className="bi bi-patch-check-fill" />
                        <span>Verified Agent</span>
                      </div>
                    )}
                  </div>
                  <div className="quick-stats">
                    <div className="quick-stat">
                      <span className="stat-value">
                        {agent.stats?.satisfaction || "5.0"}
                      </span>
                      <div className="star-rating">
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                      </div>
                    </div>
                    {agent.stats?.propertiesSold && (
                      <div className="quick-stat">
                        <span className="stat-value">
                          {agent.stats.propertiesSold}
                        </span>
                        <span className="stat-label">Properties Sold</span>
                      </div>
                    )}
                    {agent.stats?.experience && (
                      <div className="quick-stat">
                        <span className="stat-value">
                          {agent.stats.experience}
                        </span>
                        <span className="stat-label">Years Experience</span>
                      </div>
                    )}
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
                  <p>{agent.description}</p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                  <div className="highlight-box">
                    <h4>
                      "My mission is to transform property transactions into
                      seamless experiences that exceed expectations."
                    </h4>
                  </div>
                </div>

                {/* Service Areas - reusing existing classes/structure from original static file basically */}
                <div className="service-areas">
                  <h3>Specialties &amp; Expertise</h3>
                  <div className="areas-grid">
                    {agent.specialties?.map((spec, index) => (
                      <div key={index} className="area-item">
                        <i className="bi bi-building" />
                        <div>
                          <h5>{spec}</h5>
                          <p>Expert service</p>
                        </div>
                      </div>
                    ))}
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
                      href={`tel:${agent.contact.phone}`}
                      className="contact-method primary"
                    >
                      <i className="bi bi-telephone-fill" />
                      <div>
                        <span className="method-label">Call Now</span>
                        <span className="method-value">
                          {agent.contact.phone}
                        </span>
                      </div>
                    </a>
                    <a
                      href={`mailto:${agent.contact.email}`}
                      className="contact-method"
                    >
                      <i className="bi bi-envelope-fill" />
                      <div>
                        <span className="method-label">Email</span>
                        <span className="method-value">
                          {agent.contact.email}
                        </span>
                      </div>
                    </a>
                  </div>
                  <div className="social-connect">
                    <h5>Follow Me</h5>
                    <div className="social-links">
                      {agent.socials &&
                        Object.keys(agent.socials).map((key) => (
                          <a key={key} href={agent.socials[key]}>
                            <i className={`bi bi-${key}`} />
                          </a>
                        ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* /Agent Profile Section */}
      </main>
    </div>
  );
}
