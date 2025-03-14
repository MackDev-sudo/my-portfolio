import { motion } from "framer-motion";

const PrivacyPolicy = () => {
  return (
    <div className="pt-16">
      <section className="py-20 bg-theme-bg-primary-light dark:bg-theme-bg-primary-dark">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="heading mb-12">Privacy Policy</h1>
            <div className="prose prose-invert max-w-none">
              <div className="bg-theme-bg-secondary-light dark:bg-theme-bg-secondary-dark p-6 rounded-lg mb-8">
                <p className="text-theme-text-secondary-light dark:text-theme-text-secondary-dark mb-2">
                  <strong className="text-theme-secondary-light dark:text-theme-secondary-dark">
                    Last Updated:
                  </strong>{" "}
                  {new Date().toLocaleDateString()}
                </p>
                <p className="text-theme-text-secondary-light dark:text-theme-text-secondary-dark italic">
                  This Privacy Policy describes how we collect, use, and handle
                  your personal information when you use our website.
                </p>
              </div>

              <div className="space-y-8">
                <section>
                  <h2 className="text-xl font-bold text-theme-secondary-light dark:text-theme-secondary-dark mb-4">
                    Information We Collect
                  </h2>
                  <div className="space-y-4">
                    <p className="text-theme-text-secondary-light dark:text-theme-text-secondary-dark">
                      We collect information that you provide directly to us,
                      including:
                    </p>
                    <ul className="list-disc list-inside text-theme-text-secondary-light dark:text-theme-text-secondary-dark space-y-2">
                      <li>Name and contact information</li>
                      <li>Account credentials</li>
                      <li>Communication preferences</li>
                      <li>Usage data and analytics</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-theme-secondary-light dark:text-theme-secondary-dark mb-4">
                    How We Use Your Information
                  </h2>
                  <div className="space-y-4">
                    <p className="text-theme-text-secondary-light dark:text-theme-text-secondary-dark">
                      We use the collected information for various purposes:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-theme-bg-secondary-light dark:bg-theme-bg-secondary-dark p-4 rounded-lg">
                        <h3 className="text-lg font-semibold text-theme-secondary-light dark:text-theme-secondary-dark mb-2">
                          Service Provision
                        </h3>
                        <p className="text-theme-text-secondary-light dark:text-theme-text-secondary-dark">
                          To operate, maintain, and improve our website and
                          services.
                        </p>
                      </div>
                      <div className="bg-theme-bg-secondary-light dark:bg-theme-bg-secondary-dark p-4 rounded-lg">
                        <h3 className="text-lg font-semibold text-theme-secondary-light dark:text-theme-secondary-dark mb-2">
                          Communication
                        </h3>
                        <p className="text-theme-text-secondary-light dark:text-theme-text-secondary-dark">
                          To send you updates, newsletters, and marketing
                          materials.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-theme-secondary-light dark:text-theme-secondary-dark mb-4">
                    Data Security
                  </h2>
                  <div className="bg-theme-bg-secondary-light dark:bg-theme-bg-secondary-dark p-4 rounded-lg">
                    <p className="text-theme-text-secondary-light dark:text-theme-text-secondary-dark">
                      We implement appropriate security measures to protect your
                      personal information. However, no method of transmission
                      over the Internet is 100% secure.
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-theme-secondary-light dark:text-theme-secondary-dark mb-4">
                    Your Rights
                  </h2>
                  <div className="space-y-4">
                    <p className="text-theme-text-secondary-light dark:text-theme-text-secondary-dark">
                      You have certain rights regarding your personal
                      information:
                    </p>
                    <ul className="list-disc list-inside text-theme-text-secondary-light dark:text-theme-text-secondary-dark space-y-2">
                      <li>Access your personal data</li>
                      <li>Request data correction</li>
                      <li>Request data deletion</li>
                      <li>Object to processing</li>
                      <li>Data portability</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-theme-secondary-light dark:text-theme-secondary-dark mb-4">
                    Contact Us
                  </h2>
                  <div className="bg-theme-bg-secondary-light dark:bg-theme-bg-secondary-dark p-4 rounded-lg">
                    <p className="text-theme-text-secondary-light dark:text-theme-text-secondary-dark mb-4">
                      If you have any questions about this Privacy Policy,
                      please contact us:
                    </p>
                    <ul className="space-y-2">
                      <li>
                        <strong className="text-theme-secondary-light dark:text-theme-secondary-dark">
                          Email:
                        </strong>{" "}
                        <a
                          href="mailto:privacy@example.com"
                          className="text-theme-secondary-light dark:text-theme-secondary-dark hover:underline"
                        >
                          privacy@example.com
                        </a>
                      </li>
                      <li>
                        <strong className="text-theme-secondary-light dark:text-theme-secondary-dark">
                          Address:
                        </strong>{" "}
                        <span className="text-theme-text-secondary-light dark:text-theme-text-secondary-dark">
                          123 Privacy Street, Security City, 12345
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

export default PrivacyPolicy;
