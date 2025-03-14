import { motion } from "framer-motion";

const TermsAndConditions = () => {
  return (
    <div className="pt-16">
      <section className="py-20 bg-theme-bg-primary-light dark:bg-theme-bg-primary-dark">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="heading mb-12">Terms and Conditions</h1>
            <div className="prose prose-invert max-w-none">
              <div className="bg-theme-bg-secondary-light dark:bg-theme-bg-secondary-dark p-6 rounded-lg mb-8">
                <p className="text-theme-text-secondary-light dark:text-theme-text-secondary-dark mb-2">
                  <strong className="text-theme-secondary-light dark:text-theme-secondary-dark">
                    Last Updated:
                  </strong>{" "}
                  {new Date().toLocaleDateString()}
                </p>
                <p className="text-theme-text-secondary-light dark:text-theme-text-secondary-dark italic">
                  Please read these terms and conditions carefully before using
                  our website.
                </p>
              </div>

              <div className="space-y-8">
                <section>
                  <h2 className="text-xl font-bold text-theme-secondary-light dark:text-theme-secondary-dark mb-4">
                    Agreement to Terms
                  </h2>
                  <div className="bg-theme-bg-secondary-light dark:bg-theme-bg-secondary-dark p-4 rounded-lg">
                    <p className="text-theme-text-secondary-light dark:text-theme-text-secondary-dark">
                      By accessing or using our website, you agree to be bound
                      by these Terms and Conditions and our Privacy Policy. If
                      you disagree with any part of these terms, you may not
                      access the website.
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-theme-secondary-light dark:text-theme-secondary-dark mb-4">
                    Intellectual Property
                  </h2>
                  <div className="space-y-4">
                    <p className="text-theme-text-secondary-light dark:text-theme-text-secondary-dark">
                      The website and its original content, features, and
                      functionality are owned by us and are protected by
                      international copyright, trademark, patent, trade secret,
                      and other intellectual property laws.
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-theme-secondary-light dark:text-theme-secondary-dark mb-4">
                    User Responsibilities
                  </h2>
                  <div className="bg-theme-bg-secondary-light dark:bg-theme-bg-secondary-dark p-4 rounded-lg">
                    <ul className="list-disc list-inside text-theme-text-secondary-light dark:text-theme-text-secondary-dark space-y-2">
                      <li>Provide accurate and complete information</li>
                      <li>Maintain the security of your account</li>
                      <li>Comply with all applicable laws and regulations</li>
                      <li>Respect the rights of other users</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-theme-secondary-light dark:text-theme-secondary-dark mb-4">
                    Limitation of Liability
                  </h2>
                  <div className="bg-theme-bg-secondary-light dark:bg-theme-bg-secondary-dark p-4 rounded-lg">
                    <p className="text-theme-text-secondary-light dark:text-theme-text-secondary-dark">
                      We shall not be liable for any indirect, incidental,
                      special, consequential, or punitive damages resulting from
                      your access to or use of, or inability to access or use,
                      the website.
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-theme-secondary-light dark:text-theme-secondary-dark mb-4">
                    Changes to Terms
                  </h2>
                  <div className="bg-theme-bg-secondary-light dark:bg-theme-bg-secondary-dark p-4 rounded-lg">
                    <p className="text-theme-text-secondary-light dark:text-theme-text-secondary-dark">
                      We reserve the right to modify or replace these Terms at
                      any time. Changes will be effective immediately upon
                      posting to the website. Your continued use of the website
                      after any changes constitutes acceptance of those changes.
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-theme-secondary-light dark:text-theme-secondary-dark mb-4">
                    Contact Information
                  </h2>
                  <div className="bg-theme-bg-secondary-light dark:bg-theme-bg-secondary-dark p-4 rounded-lg">
                    <p className="text-theme-text-secondary-light dark:text-theme-text-secondary-dark mb-4">
                      If you have any questions about these Terms, please
                      contact us:
                    </p>
                    <ul className="space-y-2">
                      <li>
                        <strong className="text-theme-secondary-light dark:text-theme-secondary-dark">
                          Email:
                        </strong>{" "}
                        <a
                          href="mailto:terms@example.com"
                          className="text-theme-secondary-light dark:text-theme-secondary-dark hover:underline"
                        >
                          terms@example.com
                        </a>
                      </li>
                      <li>
                        <strong className="text-theme-secondary-light dark:text-theme-secondary-dark">
                          Address:
                        </strong>{" "}
                        <span className="text-theme-text-secondary-light dark:text-theme-text-secondary-dark">
                          123 Legal Street, Terms City, 12345
                        </span>
                      </li>
                    </ul>
                  </div>
                </section>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default TermsAndConditions;
