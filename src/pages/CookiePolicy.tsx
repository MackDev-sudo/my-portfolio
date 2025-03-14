import { motion } from "framer-motion";

const CookiePolicy = () => {
  return (
    <div className="pt-16">
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="heading mb-12">Cookie Policy</h1>
            <div className="prose prose-invert max-w-none">
              <div className="bg-tertiary p-6 rounded-lg mb-8">
                <p className="text-textSecondary mb-2">
                  <strong className="text-secondary">Last Updated:</strong>{" "}
                  {new Date().toLocaleDateString()}
                </p>
                <p className="text-textSecondary italic">
                  This Cookie Policy explains how Mackdev Inc. uses cookies and
                  similar technologies to recognize you when you visit our
                  website. It explains what these technologies are and why we
                  use them, as well as your rights to control our use of them.
                </p>
              </div>

              <div className="space-y-8">
                <section>
                  <h2 className="text-xl font-bold text-secondary mb-4">
                    What are Cookies?
                  </h2>
                  <div className="space-y-4">
                    <p className="text-textSecondary">
                      Cookies are small data files that are placed on your
                      computer or mobile device when you visit a website. They
                      are widely used by website owners to make their websites
                      work, or work more efficiently, as well as to provide
                      reporting information.
                    </p>
                    <div className="bg-tertiary/50 p-4 rounded-lg">
                      <h3 className="text-lg font-semibold text-secondary mb-2">
                        Key Points About Cookies:
                      </h3>
                      <ul className="list-disc list-inside text-textSecondary space-y-1">
                        <li>Cookies are stored on your device</li>
                        <li>They remember your preferences and actions</li>
                        <li>They help improve your browsing experience</li>
                        <li>You can control and delete them at any time</li>
                      </ul>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-secondary mb-4">
                    How We Use Cookies
                  </h2>
                  <div className="space-y-4">
                    <p className="text-textSecondary mb-4">
                      We use cookies for the following purposes:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-tertiary/50 p-4 rounded-lg">
                        <h3 className="text-lg font-semibold text-secondary mb-2">
                          Essential Cookies
                        </h3>
                        <p className="text-textSecondary">
                          Required for basic website functionality. These
                          cookies ensure our website works properly and cannot
                          be disabled.
                        </p>
                      </div>
                      <div className="bg-tertiary/50 p-4 rounded-lg">
                        <h3 className="text-lg font-semibold text-secondary mb-2">
                          Analytics Cookies
                        </h3>
                        <p className="text-textSecondary">
                          Help us understand how visitors interact with our
                          website. This data is used solely for website
                          improvement.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-secondary mb-4">
                    Types of Cookies We Use
                  </h2>
                  <div className="space-y-4">
                    <div className="bg-tertiary/50 p-4 rounded-lg mb-4">
                      <h3 className="text-lg font-semibold text-secondary mb-2">
                        Session Cookies
                      </h3>
                      <p className="text-textSecondary">
                        Temporary cookies that expire when you close your
                        browser. They help us track your movements from page to
                        page so you don't have to repeatedly enter the same
                        information.
                      </p>
                    </div>
                    <div className="bg-tertiary/50 p-4 rounded-lg">
                      <h3 className="text-lg font-semibold text-secondary mb-2">
                        Persistent Cookies
                      </h3>
                      <p className="text-textSecondary">
                        Remain on your device for a set period or until manually
                        deleted. They help us remember your preferences and
                        improve your user experience.
                      </p>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-secondary mb-4">
                    Cookie Data Collection
                  </h2>
                  <div className="space-y-4">
                    <p className="text-textSecondary mb-4">
                      <strong className="text-secondary">
                        Important Privacy Notice:
                      </strong>{" "}
                      We do not share any cookie data with third parties for
                      marketing or commercial purposes. The data collected
                      through cookies is used exclusively for:
                    </p>
                    <ul className="list-disc list-inside text-textSecondary ml-4 space-y-2">
                      <li>Improving website functionality and performance</li>
                      <li>
                        Understanding user behavior to enhance user experience
                      </li>
                      <li>Detecting and preventing security issues</li>
                      <li>Analyzing website traffic patterns</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-secondary mb-4">
                    Managing Cookies
                  </h2>
                  <div className="space-y-4">
                    <p className="text-textSecondary mb-4">
                      You have the right to decide whether to accept or reject
                      cookies. You can exercise your cookie preferences through
                      your browser settings.
                    </p>
                    <div className="bg-tertiary/50 p-4 rounded-lg">
                      <h3 className="text-lg font-semibold text-secondary mb-2">
                        How to Control Cookies:
                      </h3>
                      <ul className="list-disc list-inside text-textSecondary space-y-2">
                        <li>Access your browser's privacy settings</li>
                        <li>Clear existing cookies</li>
                        <li>Set preferences for future cookies</li>
                        <li>Enable "Do Not Track" features</li>
                      </ul>
                    </div>
                    <p className="text-textSecondary text-sm italic">
                      Note: Blocking some types of cookies may impact your
                      experience of our website and the services we offer.
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-secondary mb-4">
                    Updates to Cookie Policy
                  </h2>
                  <p className="text-textSecondary mb-4">
                    We may update this Cookie Policy from time to time to
                    reflect changes in technology, legislation, or our data
                    practices. Any changes will become effective when we post
                    the revised policy on our website.
                  </p>
                  <div className="bg-tertiary/50 p-4 rounded-lg">
                    <p className="text-textSecondary">
                      We encourage you to periodically review this page to stay
                      informed about our use of cookies.
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-secondary mb-4">
                    Contact Information
                  </h2>
                  <div className="bg-tertiary/50 p-4 rounded-lg">
                    <p className="text-textSecondary mb-4">
                      If you have any questions about our use of cookies, please
                      contact us:
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
                    Your Consent
                  </h2>
                  <p className="text-textSecondary">
                    By continuing to use our website, you consent to the use of
                    cookies as described in this Cookie Policy. You can withdraw
                    your consent at any time by adjusting your browser settings
                    or contacting us directly.
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

export default CookiePolicy;
