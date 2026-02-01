import Link from "next/link";
import { notFound } from "next/navigation";
import { services } from "@/data/services";

export async function generateMetadata({ params }) {
  const { id } = await params;
  const service = services.find((s) => s.id === parseInt(id));

  if (!service) {
    return {
      title: "Service Not Found | UrbanEstate",
    };
  }

  return {
    title: `${service.title} | UrbanEstate Services`,
    description: service.shortDescription,
  };
}

export async function generateStaticParams() {
  return services.map((service) => ({
    id: service.id.toString(),
  }));
}

export default async function ServiceDetails({ params }) {
  const { id } = await params;
  const service = services.find((s) => s.id === parseInt(id));

  if (!service) {
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
                  <h1 className="heading-title">{service.title}</h1>
                  <p className="mb-0">{service.shortDescription}</p>
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
                  <Link href="/services">Services</Link>
                </li>
                <li className="current">{service.title}</li>
              </ol>
            </div>
          </nav>
        </div>
        {/* End Page Title */}

        {/* Service Details Section */}
        <section id="service-details" className="service-details section">
          <div className="container" data-aos="fade-up" data-aos-delay={100}>
            <div className="row gy-5">
              <div
                className="col-lg-4"
                data-aos="fade-right"
                data-aos-delay={100}
              >
                <div className="service-box">
                  <h4>Services List</h4>
                  <div className="services-list">
                    {services.map((s) => (
                      <Link
                        key={s.id}
                        href={`/services/${s.id}`}
                        className={`d-flex align-items-center ${
                          s.id === service.id ? "active" : ""
                        }`}
                      >
                        <i className={`bi ${s.icon} me-3`}></i>
                        <span>{s.title}</span>
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="help-box mt-4">
                  <h4>Need Help?</h4>
                  <p>
                    Speak with a human to filling out a form? call corporate
                    office and we will connect you with a team member who can
                    help.
                  </p>
                  <div className="d-flex align-items-center mt-3">
                    <i className="bi bi-telephone-fill fs-4 text-primary me-3"></i>
                    <div>
                      <h5 className="mb-0">Call Us</h5>
                      <p className="mb-0">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  <div className="d-flex align-items-center mt-3">
                    <i className="bi bi-envelope-fill fs-4 text-primary me-3"></i>
                    <div>
                      <h5 className="mb-0">Email Us</h5>
                      <p className="mb-0">info@urbanestate.com</p>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="col-lg-8"
                data-aos="fade-left"
                data-aos-delay={200}
              >
                <div className="service-details-image mb-4">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="img-fluid rounded"
                    style={{
                      width: "100%",
                      height: "400px",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <h3>{service.title}</h3>
                <p>{service.fullDescription}</p>

                <div className="mt-4">
                  <h4>Key Features</h4>
                  <div className="row mt-3">
                    {service.features.map((feature, index) => (
                      <div key={index} className="col-md-6 mb-3">
                        <div className="d-flex align-items-center">
                          <i className="bi bi-check-circle-fill text-primary me-2"></i>
                          <span>{feature}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-5">
                  <div
                    className="cta-box p-4 rounded text-center text-white"
                    style={{
                      background: "linear-gradient(45deg, #2eca6a, #26b15d)",
                    }}
                  >
                    <h3>Interested in this service?</h3>
                    <p className="mb-4">
                      Contact us today to get started with our {service.title}{" "}
                      services.
                    </p>
                    <Link
                      href={service.link || "/contact"}
                      className="btn btn-light px-4 py-2 rounded-pill"
                    >
                      {service.cta || "Get Started"}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* /Service Details Section */}
      </main>
    </div>
  );
}
