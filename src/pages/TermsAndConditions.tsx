import { motion } from "framer-motion";

const TermsAndConditions = () => {
  return (
    <div className="pt-16">
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="heading mb-12">Terms and Conditions</h1>
            <div className="prose prose-invert max-w-none">
              <div className="bg-tertiary p-6 rounded-lg mb-8">
                <p className="text-textSecondary mb-2">
                  <strong className="text-secondary">Last Updated:</strong>{" "}
                  {new Date().toLocaleDateString()}
                </p>
                <p className="text-textSecondary italic">
                  Please read these Terms and Conditions carefully before using
                  our website or services. These terms constitute a legally
                  binding agreement between you and Mackdev Inc.
                </p>
              </div>

              <div className="space-y-8">
                <section>
                  <h2 className="text-xl font-bold text-secondary mb-4">
                    1. Acceptance of Terms
                  </h2>
                  <p className="text-textSecondary mb-4">
                    By accessing and using this website (www.mackdev.com) and
                    our services, you acknowledge that you have read,
                    understood, and agree to be bound by these Terms and
                    Conditions, our Privacy Policy, and any other policies
                    referenced herein.
                  </p>
                  <div className="bg-tertiary/50 p-4 rounded-lg">
                    <p className="text-textSecondary text-sm">
                      <strong className="text-secondary">
                        Important Notice:
                      </strong>{" "}
                      If you do not agree with any part of these terms, you must
                      immediately discontinue use of our website and services.
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-secondary mb-4">
                    2. Service Description
                  </h2>
                  <div className="space-y-4">
                    <p className="text-textSecondary">
                      Mackdev Inc. provides professional IT consulting,
                      enterprise storage solutions, and web development
                      services. Our services include but are not limited to:
                    </p>
                    <ul className="list-disc list-inside text-textSecondary ml-4 space-y-2">
                      <li>
                        Enterprise storage infrastructure design and
                        implementation
                      </li>
                      <li>Web application development and maintenance</li>
                      <li>IT consulting and technical advisory services</li>
                      <li>System integration and optimization</li>
                      <li>Technical support and maintenance</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-secondary mb-4">
                    3. Intellectual Property Rights
                  </h2>
                  <div className="space-y-4">
                    <p className="text-textSecondary">
                      All content on this website, including but not limited to
                      text, graphics, logos, images, audio clips, digital
                      downloads, data compilations, and software, is the
                      exclusive property of Mackdev Inc. and is protected by
                      international copyright laws.
                    </p>
                    <div className="bg-tertiary/50 p-4 rounded-lg">
                      <h3 className="text-lg font-semibold text-secondary mb-2">
                        Protected Elements Include:
                      </h3>
                      <ul className="list-disc list-inside text-textSecondary space-y-1">
                        <li>Website design and layout</li>
                        <li>Source code and software</li>
                        <li>Company logo and branding elements</li>
                        <li>Documentation and technical content</li>
                        <li>Blog posts and articles</li>
                      </ul>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-secondary mb-4">
                    4. User Responsibilities and Conduct
                  </h2>
                  <div className="space-y-4">
                    <p className="text-textSecondary mb-4">
                      When using our website and services, you agree to:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-tertiary/50 p-4 rounded-lg">
                        <h3 className="text-lg font-semibold text-secondary mb-2">
                          Required Actions
                        </h3>
                        <ul className="list-disc list-inside text-textSecondary space-y-1">
                          <li>Provide accurate and complete information</li>
                          <li>Maintain confidentiality of your account</li>
                          <li>Comply with applicable laws and regulations</li>
                          <li>Report any security vulnerabilities</li>
                        </ul>
                      </div>
                      <div className="bg-tertiary/50 p-4 rounded-lg">
                        <h3 className="text-lg font-semibold text-secondary mb-2">
                          Prohibited Activities
                        </h3>
                        <ul className="list-disc list-inside text-textSecondary space-y-1">
                          <li>Unauthorized access attempts</li>
                          <li>Distribution of malware</li>
                          <li>Data scraping or harvesting</li>
                          <li>Interference with service operation</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-secondary mb-4">
                    5. Service Modifications and Availability
                  </h2>
                  <p className="text-textSecondary mb-4">
                    Mackdev Inc. reserves the right to modify, suspend, or
                    discontinue any aspect of our services at any time without
                    prior notice. We do not guarantee uninterrupted access to
                    our website or services and may restrict access to parts or
                    all of the website without notice.
                  </p>
                  <div className="bg-tertiary/50 p-4 rounded-lg">
                    <p className="text-textSecondary text-sm">
                      <strong className="text-secondary">
                        Service Availability Notice:
                      </strong>{" "}
                      While we strive to maintain high availability, we are not
                      liable for any website downtime, service interruptions, or
                      data losses that may occur.
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-secondary mb-4">
                    6. Payment Terms and Refunds
                  </h2>
                  <div className="space-y-4">
                    <p className="text-textSecondary">
                      For paid services, the following terms apply:
                    </p>
                    <ul className="list-disc list-inside text-textSecondary ml-4 space-y-2">
                      <li>
                        All fees are quoted in US dollars unless otherwise
                        specified
                      </li>
                      <li>
                        Payment is required before service delivery unless
                        otherwise agreed
                      </li>
                      <li>Refunds are handled on a case-by-case basis</li>
                      <li>Disputed charges must be reported within 30 days</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-secondary mb-4">
                    7. Limitation of Liability
                  </h2>
                  <div className="bg-tertiary/50 p-4 rounded-lg mb-4">
                    <p className="text-textSecondary">
                      To the maximum extent permitted by law, Mackdev Inc. and
                      its affiliates shall not be liable for any indirect,
                      incidental, special, consequential, or punitive damages,
                      including without limitation, loss of profits, data, use,
                      goodwill, or other intangible losses.
                    </p>
                  </div>
                  <p className="text-textSecondary">
                    Our total liability for any claims under these terms shall
                    not exceed the amount you paid to us for the applicable
                    service.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-secondary mb-4">
                    8. Indemnification
                  </h2>
                  <p className="text-textSecondary">
                    You agree to indemnify and hold harmless Mackdev Inc., its
                    officers, directors, employees, and agents from any claims,
                    damages, losses, liabilities, and expenses (including legal
                    fees) arising from your use of our website and services or
                    violation of these terms.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-secondary mb-4">
                    9. Governing Law and Jurisdiction
                  </h2>
                  <p className="text-textSecondary mb-4">
                    These terms are governed by and construed in accordance with
                    the laws of the United States. Any disputes shall be subject
                    to the exclusive jurisdiction of the courts in California.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-secondary mb-4">
                    10. Changes to Terms
                  </h2>
                  <p className="text-textSecondary mb-4">
                    We reserve the right to modify these terms at any time.
                    Changes will be effective immediately upon posting to the
                    website. Your continued use of our services following any
                    changes indicates your acceptance of the modified terms.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-secondary mb-4">
                    11. Contact Information
                  </h2>
                  <div className="bg-tertiary/50 p-4 rounded-lg">
                    <p className="text-textSecondary mb-4">
                      For any questions regarding these terms, please contact
                      us:
                    </p>
                    <ul className="text-textSecondary space-y-2">
                      <li>
                        <strong className="text-secondary">Email:</strong>{" "}
                        <a
                          href="mailto:contact@mackdev.com"
                          className="text-secondary hover:underline"
                        >
                          contact@mackdev.com
                        </a>
                      </li>
                      <li>
                        <strong className="text-secondary">Address:</strong>{" "}
                        Silicon Valley, CA 94025
                      </li>
                    </ul>
                  </div>
                </section>

                <div className="bg-tertiary p-6 rounded-lg mt-8">
                  <h2 className="text-xl font-bold text-secondary mb-4">
                    Final Agreement
                  </h2>
                  <p className="text-textSecondary">
                    These Terms and Conditions constitute the entire agreement
                    between you and Mackdev Inc. regarding your use of our
                    website and services. If any provision of these terms is
                    found to be invalid or unenforceable, the remaining
                    provisions shall remain in full force and effect.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default TermsAndConditions;
