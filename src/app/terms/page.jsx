export const metadata = {
  title: "Terms of Service | UrbanEstate",
  description: "Terms and conditions for using our services.",
};

import Link from "next/link";

export default function Terms() {
  return (
    <div>
      <main className="main pt-5 mt-5">
        {/* Page Title */}
        <div className="page-title">
          <div className="heading">
            <div className="container">
              <div className="row d-flex justify-content-center text-center">
                <div className="col-lg-8">
                  <h1 className="heading-title">Terms of Service</h1>
                  <p className="mb-0">
                    Please read these terms of service carefully before using
                    our services.
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
                <li className="current">Terms of Service</li>
              </ol>
            </div>
          </nav>
        </div>
        {/* End Page Title */}
        {/* Terms Of Service Section */}
        <section id="terms-of-service" className="terms-of-service section">
          <div className="container" data-aos="fade-up">
            {/* Page Header */}
            <div className="tos-header text-center" data-aos="fade-up">
              <span className="last-updated">Last Updated: February 2025</span>
            </div>
            {/* Content */}
            <div
              className="tos-content"
              data-aos="fade-up"
              data-aos-delay={200}
            >
              {/* Agreement Section */}
              <div id="agreement" className="content-section">
                <h3>1. Agreement to Terms</h3>
                <p>
                  By accessing our website and services, you agree to be bound
                  by these Terms of Service and all applicable laws and
                  regulations. If you do not agree with any of these terms, you
                  are prohibited from using or accessing our services.
                </p>
              </div>
              {/* Intellectual Property */}
              <div id="intellectual-property" className="content-section">
                <h3>2. Intellectual Property Rights</h3>
                <p>
                  Our service and its original content, features, and
                  functionality are owned by us and are protected by
                  international copyright, trademark, patent, trade secret, and
                  other intellectual property laws.
                </p>
                <ul className="list-items">
                  <li>All content is our exclusive property</li>
                  <li>You may not copy or modify the content</li>
                  <li>Our trademarks may not be used without permission</li>
                  <li>Content is for personal, non-commercial use only</li>
                </ul>
              </div>
              {/* User Accounts */}
              <div id="user-accounts" className="content-section">
                <h3>3. User Accounts</h3>
                <p>
                  When you create an account with us, you must provide accurate,
                  complete, and current information. Failure to do so
                  constitutes a breach of the Terms, which may result in
                  immediate termination of your account.
                </p>
                <div className="alert-box">
                  <i className="bi bi-exclamation-triangle" />
                  <div className="alert-content">
                    <h5>Important Notice</h5>
                    <p>
                      You are responsible for safeguarding the password and for
                      all activities that occur under your account.
                    </p>
                  </div>
                </div>
              </div>
              {/* Prohibited Activities */}
              <div id="prohibited" className="content-section">
                <h3>4. Prohibited Activities</h3>
                <p>
                  You may not access or use the Service for any purpose other
                  than that for which we make it available.
                </p>
                <div className="prohibited-list">
                  <div className="prohibited-item">
                    <i className="bi bi-x-circle" />
                    <span>Systematic retrieval of data or content</span>
                  </div>
                  <div className="prohibited-item">
                    <i className="bi bi-x-circle" />
                    <span>Publishing malicious content</span>
                  </div>
                  <div className="prohibited-item">
                    <i className="bi bi-x-circle" />
                    <span>Engaging in unauthorized framing</span>
                  </div>
                </div>
              </div>
              {/* Disclaimers */}
              <div id="disclaimer" className="content-section">
                <h3>5. Disclaimers</h3>
                <p>
                  Your use of our service is at your sole risk. The service is
                  provided "AS IS" and "AS AVAILABLE" without warranties of any
                  kind, whether express or implied.
                </p>
              </div>
              {/* Limitation of Liability */}
              <div id="limitation" className="content-section">
                <h3>6. Limitation of Liability</h3>
                <p>
                  In no event shall we be liable for any indirect, punitive,
                  incidental, special, consequential, or exemplary damages
                  arising out of or in connection with your use of the service.
                </p>
              </div>
              {/* Changes */}
              <div id="changes" className="content-section">
                <h3>7. Changes to Terms</h3>
                <p>
                  We reserve the right to modify or replace these Terms at any
                  time. We will provide notice of any changes by posting the new
                  Terms on this page.
                </p>
              </div>
            </div>
            {/* Contact Section */}
            <div
              className="tos-contact"
              data-aos="fade-up"
              data-aos-delay={300}
            >
              <div className="contact-box">
                <div className="contact-icon">
                  <i className="bi bi-envelope" />
                </div>
                <div className="contact-content">
                  <h4>Questions About Terms?</h4>
                  <p>
                    If you have any questions about these Terms, please contact
                    us.
                  </p>
                  <Link href="/contact" className="contact-link">
                    Contact Support
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* /Terms Of Service Section */}
      </main>
    </div>
  );
}
