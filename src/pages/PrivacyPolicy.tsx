import { motion } from "framer-motion";

const PrivacyPolicy = () => {
  return (
    <div className="pt-16">
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="heading mb-12">Privacy Policy</h1>
            <div className="prose prose-invert max-w-none">
              <div className="bg-tertiary p-6 rounded-lg mb-8">
                <p className="text-textSecondary mb-2">
                  <strong className="text-secondary">Last Updated:</strong>{" "}
                  {new Date().toLocaleDateString()}
                </p>
                <p className="text-textSecondary italic">
                  Your privacy is our highest priority. This comprehensive
                  privacy policy outlines our commitment to protecting your
                  personal information and ensuring transparency in our data
                  handling practices.
                </p>
              </div>

              <div className="space-y-8">
                <section>
                  <h2 className="text-xl font-bold text-secondary mb-4">
                    1. Introduction
                  </h2>
                  <p className="text-textSecondary mb-4">
                    Welcome to Mackdev Inc. This Privacy Policy is designed to
                    help you understand how we collect, use, protect, and handle
                    your personal information. We are committed to maintaining
                    the trust and confidence of our visitors and clients.
                  </p>
                  <div className="bg-tertiary/50 p-4 rounded-lg">
                    <p className="text-textSecondary text-sm">
                      <strong className="text-secondary">
                        Important Notice:
                      </strong>{" "}
                      By accessing and using our website, you acknowledge that
                      you have read, understood, and agree to be bound by all
                      terms of this Privacy Policy. If you do not agree with any
                      part of this policy, please refrain from using our website
                      or services.
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-secondary mb-4">
                    2. Information We Collect
                  </h2>
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-secondary">
                      2.1 Information You Provide
                    </h3>
                    <ul className="list-disc list-inside text-textSecondary ml-4 space-y-2">
                      <li>
                        Contact information (name, email address, phone number)
                      </li>
                      <li>
                        Professional information (company name, job title)
                      </li>
                      <li>Message content through our contact forms</li>
                      <li>Consultation requests and project requirements</li>
                      <li>Feedback and survey responses</li>
                    </ul>

                    <h3 className="text-lg font-semibold text-secondary">
                      2.2 Automatically Collected Information
                    </h3>
                    <ul className="list-disc list-inside text-textSecondary ml-4 space-y-2">
                      <li>
                        Device information (browser type, operating system)
                      </li>
                      <li>IP address and geographical location</li>
                      <li>Website usage patterns and preferences</li>
                      <li>Referral sources and page interaction statistics</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-secondary mb-4">
                    3. Our Data Protection Commitment
                  </h2>
                  <div className="bg-tertiary/50 p-4 rounded-lg mb-4">
                    <p className="text-textSecondary font-semibold mb-2">
                      Mackdev Inc. maintains a strict policy of not sharing,
                      selling, or renting your personal information to any third
                      parties for marketing or commercial purposes.
                    </p>
                  </div>
                  <p className="text-textSecondary mb-4">
                    Your data is exclusively used for:
                  </p>
                  <ul className="list-disc list-inside text-textSecondary ml-4 space-y-2">
                    <li>
                      Facilitating direct communication regarding your inquiries
                    </li>
                    <li>
                      Improving our website functionality and user experience
                    </li>
                    <li>
                      Enhancing our services based on collective user feedback
                    </li>
                    <li>
                      Sending relevant service updates and notifications (with
                      your consent)
                    </li>
                    <li>Legal compliance and regulatory requirements</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-secondary mb-4">
                    4. Data Security Measures
                  </h2>
                  <p className="text-textSecondary mb-4">
                    We implement robust security measures to protect your
                    information, including:
                  </p>
                  <ul className="list-disc list-inside text-textSecondary ml-4 space-y-2">
                    <li>SSL/TLS encryption for all data transmission</li>
                    <li>Regular security assessments and updates</li>
                    <li>Restricted access to personal information</li>
                    <li>Secure data storage with regular backups</li>
                    <li>Employee training on data protection practices</li>
                  </ul>
                  <div className="bg-tertiary/50 p-4 rounded-lg mt-4">
                    <p className="text-textSecondary text-sm">
                      <strong className="text-secondary">
                        Security Notice:
                      </strong>{" "}
                      While we implement the highest security standards, no
                      method of electronic storage or transmission is 100%
                      secure. We continuously update our security measures to
                      protect against emerging threats.
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-secondary mb-4">
                    5. Your Data Rights
                  </h2>
                  <p className="text-textSecondary mb-4">
                    You have comprehensive rights regarding your personal data:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-tertiary/50 p-4 rounded-lg">
                      <h3 className="text-lg font-semibold text-secondary mb-2">
                        Access & Control
                      </h3>
                      <ul className="list-disc list-inside text-textSecondary space-y-1">
                        <li>Request access to your personal data</li>
                        <li>Correct any inaccurate information</li>
                        <li>Request deletion of your data</li>
                        <li>Withdraw consent at any time</li>
                      </ul>
                    </div>
                    <div className="bg-tertiary/50 p-4 rounded-lg">
                      <h3 className="text-lg font-semibold text-secondary mb-2">
                        Additional Rights
                      </h3>
                      <ul className="list-disc list-inside text-textSecondary space-y-1">
                        <li>Object to data processing</li>
                        <li>Request data portability</li>
                        <li>Restrict processing</li>
                        <li>File a complaint</li>
                      </ul>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-secondary mb-4">
                    6. Data Retention
                  </h2>
                  <p className="text-textSecondary mb-4">
                    We retain your personal information only for as long as
                    necessary to fulfill the purposes outlined in this Privacy
                    Policy, comply with legal obligations, or resolve disputes.
                    When data is no longer required, it is securely deleted or
                    anonymized.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-secondary mb-4">
                    7. International Data Transfers
                  </h2>
                  <p className="text-textSecondary mb-4">
                    While our services are primarily operated within the United
                    States, your information may be processed in countries where
                    we maintain facilities or engage service providers. We
                    ensure appropriate safeguards are in place to protect your
                    information in accordance with this Privacy Policy.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-secondary mb-4">
                    8. Policy Updates
                  </h2>
                  <p className="text-textSecondary mb-4">
                    We may update this Privacy Policy periodically to reflect
                    changes in our practices or legal requirements. Significant
                    changes will be notified through:
                  </p>
                  <ul className="list-disc list-inside text-textSecondary ml-4 space-y-2">
                    <li>Website notifications</li>
                    <li>Email communications (for registered users)</li>
                    <li>Updated "Last Modified" date on this policy</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-secondary mb-4">
                    9. Contact Information
                  </h2>
                  <p className="text-textSecondary mb-4">
                    For any questions, concerns, or requests related to your
                    privacy or this policy, please contact our Data Protection
                    Officer:
                  </p>
                  <div className="bg-tertiary/50 p-4 rounded-lg">
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
                      <li>
                        <strong className="text-secondary">
                          Response Time:
                        </strong>{" "}
                        We strive to respond to all inquiries within 48 business
                        hours.
                      </li>
                    </ul>
                  </div>
                </section>

                <div className="bg-tertiary p-6 rounded-lg mt-8">
                  <h2 className="text-xl font-bold text-secondary mb-4">
                    Final Disclaimer
                  </h2>
                  <p className="text-textSecondary">
                    This Privacy Policy represents our commitment to protecting
                    your privacy while providing high-quality services. By
                    continuing to use our website and services, you acknowledge
                    and agree to the terms outlined in this policy. We encourage
                    you to review this policy periodically for any updates or
                    changes.
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

export default PrivacyPolicy;
