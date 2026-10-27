import { Link } from "react-router-dom";

export function TermsOfServicePage() {
  return (
    <>
      <title>Terms of Service — Bubblegom</title>
      <meta
        name="description"
        content="Terms of Service for Bubblegom. Read the terms governing use of our website and engagement with our web development and digital product services."
      />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://bubblegom.in/terms-of-service" />

      <main className="legal-page">
        <div className="legal-container">
          <nav className="legal-nav">
            <Link to="/" className="legal-back-link">
              ← Back to Bubblegom
            </Link>
          </nav>

          <header className="legal-header">
            <h1>Terms of Service</h1>
            <p className="legal-effective-date">
              Effective Date: October 22, 2026
            </p>
          </header>

          <div className="legal-body">
            <section>
              <h2>1. Acceptance of Terms</h2>
              <p>
                By accessing or using the website <strong>bubblegom.in</strong>{" "}
                (the "Site"), you agree to be bound by these Terms of Service. If
                you do not agree with any part of these terms, you must not use
                the Site.
              </p>
            </section>

            <section>
              <h2>2. About Bubblegom</h2>
              <p>
                Bubblegom is a web development and digital product studio that
                designs and builds custom websites, web applications, mobile
                applications, desktop software, and custom digital solutions for
                businesses.
              </p>
            </section>

            <section>
              <h2>3. Use of This Site</h2>
              <p>
                This Site is provided for informational purposes and to allow
                prospective clients to learn about our services and make contact.
                You agree to use the Site only for lawful purposes. You must not:
              </p>
              <ul>
                <li>
                  Use the Site in any way that violates any applicable law or
                  regulation
                </li>
                <li>
                  Attempt to gain unauthorized access to any part of the Site or
                  its infrastructure
                </li>
                <li>
                  Transmit any unsolicited or unauthorized advertising or
                  promotional material
                </li>
                <li>
                  Engage in any conduct that restricts or inhibits anyone's use or
                  enjoyment of the Site
                </li>
              </ul>
            </section>

            <section>
              <h2>4. Intellectual Property</h2>
              <p>
                All content on this Site — including but not limited to text,
                design, graphics, logos, icons, and code — is the property of
                Bubblegom and is protected by applicable intellectual property
                laws. You may not reproduce, distribute, or create derivative
                works from any content on this Site without our express written
                permission.
              </p>
            </section>

            <section>
              <h2>5. Client Projects & Engagements</h2>
              <p>
                These Terms of Service govern the use of this website only.
                Separate written agreements govern any client project engagements,
                deliverables, timelines, payment terms, and intellectual property
                transfers. Those project-specific agreements take precedence for
                all matters related to commissioned work.
              </p>
            </section>

            <section>
              <h2>6. Disclaimer of Warranties</h2>
              <p>
                This Site is provided on an "as is" and "as available" basis
                without any warranties of any kind, either express or implied,
                including but not limited to implied warranties of merchantability,
                fitness for a particular purpose, or non-infringement. We do not
                warrant that the Site will be uninterrupted, error-free, or free
                of viruses or other harmful components.
              </p>
            </section>

            <section>
              <h2>7. Limitation of Liability</h2>
              <p>
                To the fullest extent permitted by applicable law, Bubblegom shall
                not be liable for any indirect, incidental, special, consequential,
                or punitive damages arising from your use of, or inability to use,
                this Site or its content.
              </p>
            </section>

            <section>
              <h2>8. Third-Party Links</h2>
              <p>
                This Site may contain links to third-party websites (such as our
                social media profiles). These links are provided for convenience
                only. We have no control over the content of those sites and
                accept no responsibility for them or for any loss or damage that
                may arise from your use of them.
              </p>
            </section>

            <section>
              <h2>9. Governing Law</h2>
              <p>
                These Terms of Service shall be governed by and construed in
                accordance with the laws of India. Any disputes arising in
                connection with these terms shall be subject to the exclusive
                jurisdiction of the courts of India.
              </p>
            </section>

            <section>
              <h2>10. Changes to These Terms</h2>
              <p>
                We reserve the right to modify these Terms of Service at any time.
                Changes are effective immediately upon posting to the Site. Your
                continued use of the Site following any changes constitutes your
                acceptance of the revised terms.
              </p>
            </section>

            <section>
              <h2>11. Contact</h2>
              <p>
                If you have any questions about these Terms of Service, please
                contact us:
              </p>
              <p>
                <strong>Bubblegom</strong>
                <br />
                <a href="mailto:hello@bubblegom.in">hello@bubblegom.in</a>
              </p>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}
