import { Link } from "react-router-dom";

export function PrivacyPolicyPage() {
  return (
    <>
      <title>Privacy Policy — Bubblegom</title>
      <meta
        name="description"
        content="Privacy Policy for Bubblegom. Learn how we collect, use, and protect your information when you use our website and services."
      />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://bubblegom.in/privacy-policy" />

      <main className="legal-page">
        <div className="legal-container">
          <nav className="legal-nav">
            <Link to="/" className="legal-back-link">
              ← Back to Bubblegom
            </Link>
          </nav>

          <header className="legal-header">
            <h1>Privacy Policy</h1>
            <p className="legal-effective-date">
              Effective Date: October 22, 2026
            </p>
          </header>

          <div className="legal-body">
            <section>
              <h2>1. Overview</h2>
              <p>
                Bubblegom ("we", "us", or "our") operates the website{" "}
                <strong>bubblegom.in</strong> (the "Site"). This Privacy Policy
                explains what information we collect when you visit our Site, how
                we use it, and the choices you have regarding your information.
              </p>
              <p>
                We do not sell, trade, or rent your personal information to third
                parties.
              </p>
            </section>

            <section>
              <h2>2. Information We Collect</h2>
              <h3>2.1 Information You Provide</h3>
              <p>
                When you contact us via email at{" "}
                <a href="mailto:hello@bubblegom.in">hello@bubblegom.in</a> or
                through any contact form on this Site, we may collect:
              </p>
              <ul>
                <li>Your name</li>
                <li>Email address</li>
                <li>
                  Any other information you choose to include in your message
                </li>
              </ul>

              <h3>2.2 Automatically Collected Information</h3>
              <p>
                When you visit our Site, we may automatically receive standard
                technical information that your browser sends to every website,
                such as your IP address, browser type, operating system, referring
                URL, and pages visited. This information is used solely for
                operating and improving the Site.
              </p>
            </section>

            <section>
              <h2>3. How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul>
                <li>Respond to your enquiries and project requests</li>
                <li>Improve and maintain the Site</li>
                <li>Comply with legal obligations</li>
              </ul>
              <p>
                We do not use your information for unsolicited marketing
                communications.
              </p>
            </section>

            <section>
              <h2>4. Data Retention</h2>
              <p>
                We retain your personal information only for as long as necessary
                to fulfil the purposes described in this policy, or as required by
                law. Email communications are retained for as long as the business
                relationship or enquiry remains active.
              </p>
            </section>

            <section>
              <h2>5. Third-Party Services</h2>
              <p>
                Our Site is hosted on <strong>Vercel</strong> and uses{" "}
                <strong>Google Fonts</strong> to display typography. These
                third-party services may collect standard web request information
                as described in their own privacy policies. We do not use
                third-party analytics tracking or advertising scripts on this
                Site.
              </p>
            </section>

            <section>
              <h2>6. Cookies</h2>
              <p>
                This Site does not use tracking cookies or third-party advertising
                cookies. The Site may use essential browser storage (such as
                session storage) strictly for navigation functionality. No
                personal data is stored in this manner.
              </p>
            </section>

            <section>
              <h2>7. Your Rights</h2>
              <p>
                Depending on your location, you may have rights under applicable
                data protection laws, including the right to access, correct, or
                request deletion of your personal data. To exercise any of these
                rights, please contact us at{" "}
                <a href="mailto:hello@bubblegom.in">hello@bubblegom.in</a>.
              </p>
            </section>

            <section>
              <h2>8. Children's Privacy</h2>
              <p>
                This Site is not directed to individuals under the age of 13. We
                do not knowingly collect personal information from children.
              </p>
            </section>

            <section>
              <h2>9. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. Changes will
                be reflected by updating the effective date at the top of this
                page. We encourage you to review this policy periodically.
              </p>
            </section>

            <section>
              <h2>10. Contact</h2>
              <p>
                If you have any questions about this Privacy Policy, please
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
