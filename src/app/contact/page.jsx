import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contact Us | UrbanEstate",
  description:
    "Get in touch with UrbanEstate for any inquiries about properties.",
};

export default function Contact() {
  return (
    <div>
      <main className="main pt-5 mt-5">
        {/* Page Title */}
        <div className="page-title">
          <div className="heading">
            <div className="container">
              <div className="row d-flex justify-content-center text-center">
                <div className="col-lg-8">
                  <h1 className="heading-title">Contact</h1>
                  <p className="mb-0">
                    Reach out to UrbanEstate for property inquiries, visits, or
                    expert advice. We’re here to help you take the next step
                    with confidence.
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
                <li className="current">Contact</li>
              </ol>
            </div>
          </nav>
        </div>
        {/* End Page Title */}
        {/* Contact 2 Section */}
        <section id="contact-2" className="contact-2 section">
          <div className="container" data-aos="fade-up" data-aos-delay={100}>
            {/* Contact Info Boxes */}
            <div className="row gy-4 mb-5">
              <div className="col-lg-4" data-aos="fade-up" data-aos-delay={100}>
                <div className="contact-info-box">
                  <div className="icon-box">
                    <i className="bi bi-geo-alt" />
                  </div>
                  <div className="info-content">
                    <h4>Our Address</h4>
                    <p>1842 Maple Avenue, Portland, Oregon 97204</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4" data-aos="fade-up" data-aos-delay={200}>
                <div className="contact-info-box">
                  <div className="icon-box">
                    <i className="bi bi-envelope" />
                  </div>
                  <div className="info-content">
                    <h4>Email Address</h4>
                    <p>info@example.com</p>
                    <p>contact@example.com</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4" data-aos="fade-up" data-aos-delay={300}>
                <div className="contact-info-box">
                  <div className="icon-box">
                    <i className="bi bi-headset" />
                  </div>
                  <div className="info-content">
                    <h4>Hours of Operation</h4>
                    <p>Sunday-Fri: 9 AM - 6 PM</p>
                    <p>Saturday: 9 AM - 4 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Google Maps (Full Width) */}
          <div className="map-section" data-aos="fade-up" data-aos-delay={200}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d48389.78314118045!2d-74.006138!3d40.710059!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a22a3bda30d%3A0xb89d1fe6bc499443!2sDowntown%20Conference%20Center!5e0!3m2!1sen!2sus!4v1676961268712!5m2!1sen!2sus"
              width="100%"
              height={500}
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          {/* Contact Form Section (Overlapping) */}
          <div className="container form-container-overlap">
            <div
              className="row justify-content-center"
              data-aos="fade-up"
              data-aos-delay={300}
            >
              <div className="col-lg-10">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
        {/* /Contact 2 Section */}
      </main>
    </div>
  );
}
