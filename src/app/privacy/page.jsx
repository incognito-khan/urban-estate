export const metadata = {
  title: "Privacy Policy | UrbanEstate",
  description: "Our privacy policy and data protection practices.",
};

import Link from "next/link";

export default function Privacy() {
  return (
    <div>
      <main className="main pt-5 mt-5">
        {/* Page Title */}
        <div className="page-title">
          <div className="heading">
            <div className="container">
              <div className="row d-flex justify-content-center text-center">
                <div className="col-lg-8">
                  <h1 className="heading-title">Privacy Policy</h1>
                  <p className="mb-0">
                    Your privacy is important to us. This policy explains how we
                    collect, use, and protect your personal information.
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
                <li className="current">Privacy Policy</li>
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
                      <strong>Last updated:</strong> February 2025
                    </p>
                  </div>
                  <div
                    className="privacy-section"
                    data-aos="fade-up"
                    data-aos-delay={300}
                  >
                    <h3>Information We Collect</h3>
                    <p>
                      We collect information you provide directly to us, such as
                      when you create an account, subscribe to our newsletter,
                      request customer support, or otherwise communicate with
                      us.
                    </p>
                    <h4>Personal Information</h4>
                    <ul>
                      <li>Name, email address, password, and phone number</li>
                      <li>
                        Payment information (processed securely by third-party
                        providers)
                      </li>
                      <li>Property preferences and search history</li>
                      <li>Communications and correspondence with our agents</li>
                    </ul>
                    <h4>Usage Data</h4>
                    <p>
                      We automatically collect certain information when you
                      access or use our Services. This information does not
                      reveal your specific identity (like your name or contact
                      information) but may include device and usage information,
                      such as your IP address, browser and device
                      characteristics, operating system, language preferences,
                      referring URLs, device name, country, location,
                      information about how and when you use our Services, and
                      other technical information.
                    </p>
                  </div>
                  <div
                    className="privacy-section"
                    data-aos="fade-up"
                    data-aos-delay={400}
                  >
                    <h3>How We Use Your Information</h3>
                    <p>We use the information we collect or receive:</p>
                    <div className="info-box">
                      <h4>Primary Uses</h4>
                      <ol>
                        <li>
                          To facilitate account creation and logon process.
                        </li>
                        <li>
                          To send you marketing and promotional communications.
                        </li>
                        <li>To send administrative information to you.</li>
                        <li>
                          To fulfill and manage your orders and property
                          inquiries.
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
                      We may share information we have collected about you in
                      certain situations. Your information may be disclosed as
                      follows:
                    </p>
                    <div
                      className="highlight-box"
                      data-aos="fade-up"
                      data-aos-delay={600}
                    >
                      <i className="bi bi-shield-check" />
                      <h4>We Never Sell Your Data</h4>
                      <p>
                        We do not sell, rent, or trade your personal information
                        to third parties for their marketing purposes without
                        your consent.
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
                      We use administrative, technical, and physical security
                      measures to help protect your personal information. While
                      we have taken reasonable steps to secure the personal
                      information you provide to us, please be aware that
                      despite our efforts, no security measures are perfect or
                      impenetrable, and no method of data transmission can be
                      guaranteed against any interception or other type of
                      misuse.
                    </p>
                  </div>
                  <div
                    className="contact-section"
                    data-aos="fade-up"
                    data-aos-delay={1300}
                  >
                    <h3>Contact Us</h3>
                    <p>
                      If you have questions or comments about this policy, you
                      may contact us at:
                    </p>
                    <div className="contact-info">
                      <div className="contact-item">
                        <i className="bi bi-envelope" />
                        <span>privacy@urbanestate.com</span>
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
    </div>
  );
}
