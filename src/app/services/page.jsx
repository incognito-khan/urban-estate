import Link from "next/link";
import { services } from "@/data/services";

export const metadata = {
  title: "Our Services | UrbanEstate",
  description: "Explore the real estate services offered by UrbanEstate.",
};

export default function Services() {
  return (
    <div>
      <main className="main pt-5 mt-5">
        {/* Page Title */}
        <div className="page-title">
          <div className="heading">
            <div className="container">
              <div className="row d-flex justify-content-center text-center">
                <div className="col-lg-8">
                  <h1 className="heading-title">Our Services</h1>
                  <p className="mb-0">
                    Comprehensive real estate solutions tailored to your needs.
                    From buying and selling to property management and
                    investment advice.
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
                <li className="current">Services</li>
              </ol>
            </div>
          </nav>
        </div>
        {/* End Page Title */}

        {/* Services Section */}
        <section
          className="real-estate-services-3 services section"
          id="services"
        >
          <div className="container" data-aos="fade-up" data-aos-delay={100}>
            {/* Featured Services (Top 2) */}
            <div className="row gy-4">
              {services.slice(0, 2).map((service, index) => (
                <div key={service.id} className="col-lg-6 col-md-12">
                  <div
                    className="service-block"
                    data-aos={index === 0 ? "fade-right" : "fade-left"}
                    data-aos-delay={200}
                  >
                    <div className="service-content">
                      <div className="icon">
                        <i className={`bi ${service.icon}`} />
                      </div>
                      <h3>{service.title}</h3>
                      <p>{service.shortDescription}</p>
                      <ul className="list-unstyled mt-3 mb-4">
                        {service.features.slice(0, 2).map((feature, idx) => (
                          <li key={idx} className="mb-2">
                            <i className="bi bi-check2 text-primary me-2" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <Link
                        href={`/services/${service.id}`}
                        className="btn-service"
                      >
                        Learn More <i className="bi bi-arrow-right" />
                      </Link>
                    </div>
                    <div className="service-image">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="img-fluid"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Other Services Grid */}
            <div className="row gy-4 mt-4">
              {services.slice(2).map((service, index) => (
                <div key={service.id} className="col-lg-4 col-md-6">
                  <div
                    className="service-card"
                    data-aos="zoom-in"
                    data-aos-delay={100 + index * 100}
                  >
                    <div className="card-icon">
                      <i className={`bi ${service.icon}`} />
                    </div>
                    <h4>{service.title}</h4>
                    <p>{service.shortDescription}</p>
                    <div className="feature-list">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <div key={idx} className="feature-item">
                          <i className="bi bi-check2" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Link
                      href={`/services/${service.id}`}
                      className="service-link"
                    >
                      Learn More <i className="bi bi-arrow-right" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Section */}
            <div
              className="cta-section"
              data-aos="fade-up"
              data-aos-delay={400}
            >
              <div className="row align-items-center">
                <div className="col-lg-8">
                  <h3>Ready to Take the Next Step?</h3>
                  <p>
                    Whether you are buying, selling, or looking for property
                    management, our team is here to help you achieve your real
                    estate goals.
                  </p>
                </div>
                <div className="col-lg-4 text-lg-end">
                  <Link href="/contact" className="btn btn-cta">
                    Get Free Consultation
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* /Services Section */}
      </main>
    </div>
  );
}
