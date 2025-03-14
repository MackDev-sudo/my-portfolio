import { motion } from "framer-motion";
import { useState } from "react";
import {
  EnvelopeIcon,
  ClockIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    consent: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const response = await fetch("http://localhost:3002/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message:
            "Message sent successfully! Check your email for confirmation.",
        });
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
          consent: false,
        });
      } else {
        throw new Error(data.error || "Failed to send message");
      }
    } catch (err: unknown) {
      const errorMessage =
        err instanceof Error ? err.message : "Failed to send message";
      setSubmitStatus({
        type: "error",
        message: "Failed to send message. Please try again later.",
      });
      console.error("Error sending message:", errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    const checked =
      type === "checkbox" ? (e.target as HTMLInputElement).checked : null;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <div className="pt-16">
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="heading text-center mb-4">Get in Touch</h1>
            <p className="text-textSecondary text-center max-w-2xl mx-auto mb-12">
              Whether you have a project in mind, want to explore collaboration
              opportunities, or simply wish to connect, I'm here to help turn
              your ideas into reality.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div className="space-y-8">
                <h2 className="text-2xl font-bold text-secondary mb-6">
                  Contact Information
                </h2>
                <div className="space-y-6">
                  {/* Primary Contact */}
                  <div className="bg-tertiary/50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-textPrimary mb-4">
                      Primary Contact Methods
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <EnvelopeIcon className="h-6 w-6 text-secondary mt-1" />
                        <div>
                          <h4 className="text-lg font-semibold text-textPrimary mb-1">
                            Email
                          </h4>
                          <a
                            href="mailto:mackdev1990@gmail.com"
                            className="text-textSecondary hover:text-secondary transition-colors duration-300"
                          >
                            mackdev1990@gmail.com
                          </a>
                          <p className="text-sm text-textSecondary mt-1">
                            For project inquiries and collaborations
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-3">
                        <ClockIcon className="h-6 w-6 text-secondary mt-1" />
                        <div>
                          <h4 className="text-lg font-semibold text-textPrimary mb-1">
                            Availability
                          </h4>
                          <p className="text-textSecondary">
                            Monday - Friday: 10 AM to 5 PM (IST)
                          </p>
                          <p className="text-sm text-textSecondary mt-1">
                            Response time: Within 24-48 hours
                          </p>
                          <p className="text-sm text-textSecondary mt-1">
                            Available for urgent consultations by appointment
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Location & Availability */}
                  <div className="bg-tertiary/50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-textPrimary mb-4">
                      Location & Work Preferences
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <MapPinIcon className="h-6 w-6 text-secondary mt-1" />
                        <div>
                          <h4 className="text-lg font-semibold text-textPrimary mb-1">
                            Based In
                          </h4>
                          <p className="text-textSecondary">
                            Kolkata, West Bengal, India
                          </p>
                          <div className="mt-2 space-y-1">
                            <p className="text-sm text-textSecondary">
                              • Available for remote work worldwide
                            </p>
                            <p className="text-sm text-textSecondary">
                              • Open to relocation for the right opportunity
                            </p>
                            <p className="text-sm text-textSecondary">
                              • Flexible scheduling across time zones
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Connect With Me */}
                  <div className="bg-tertiary/50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-textPrimary mb-4">
                      Connect With Me
                    </h3>
                    <div className="flex items-center space-x-6">
                      <a
                        href="https://www.linkedin.com/in/atanu-kumar-paul-57b0ba115/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-textSecondary hover:text-secondary transform hover:scale-110 transition-all duration-300"
                        title="Connect on LinkedIn"
                      >
                        <svg
                          className="h-6 w-6"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                      </a>
                      <a
                        href="https://github.com/yourusername"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-textSecondary hover:text-secondary transform hover:scale-110 transition-all duration-300"
                        title="View GitHub Projects"
                      >
                        <svg
                          className="h-6 w-6"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                      </a>
                      <a
                        href="https://twitter.com/yourusername"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-textSecondary hover:text-secondary transform hover:scale-110 transition-all duration-300"
                        title="Follow on Twitter"
                      >
                        <svg
                          className="h-6 w-6"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-tertiary p-8 rounded-lg">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-textPrimary mb-2"
                    >
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      className="w-full px-4 py-2 bg-primary border border-textSecondary rounded-lg focus:outline-none focus:border-secondary text-textPrimary"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-textPrimary mb-2"
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email address"
                      className="w-full px-4 py-2 bg-primary border border-textSecondary rounded-lg focus:outline-none focus:border-secondary text-textPrimary"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-textPrimary mb-2"
                    >
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="What is your message about?"
                      className="w-full px-4 py-2 bg-primary border border-textSecondary rounded-lg focus:outline-none focus:border-secondary text-textPrimary"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-textPrimary mb-2"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Write your message here..."
                      rows={4}
                      className="w-full px-4 py-2 bg-primary border border-textSecondary rounded-lg focus:outline-none focus:border-secondary text-textPrimary"
                      required
                    />
                  </div>

                  {submitStatus.type && (
                    <div
                      className={`p-4 rounded-lg ${
                        submitStatus.type === "success"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {submitStatus.message}
                    </div>
                  )}

                  <div className="space-y-4">
                    <div className="flex items-start">
                      <input
                        type="checkbox"
                        id="consent"
                        name="consent"
                        checked={formData.consent}
                        onChange={handleChange}
                        className="mt-1 mr-2"
                        required
                      />
                      <label
                        htmlFor="consent"
                        className="text-sm text-textSecondary"
                      >
                        I consent to processing of my personal data entered
                        above for Mackdev Inc to contact me. *
                      </label>
                    </div>
                    <p className="text-xs text-textSecondary/80">
                      For further details on how your personal data will be
                      processed and how your consent can be managed, refer to
                      the{" "}
                      <a
                        href="/privacy"
                        className="text-secondary hover:text-secondary/80 underline transition-colors duration-300"
                      >
                        Mackdev Inc Privacy Notice
                      </a>
                      .
                    </p>
                    <p className="text-xs text-textSecondary/80">
                      * Mandatory fields
                    </p>
                  </div>
                  <button
                    type="submit"
                    className={`btn w-full ${
                      formData.consent && !isSubmitting
                        ? "btn-primary hover:bg-secondary/90"
                        : "bg-gray-500 cursor-not-allowed"
                    } transition-colors duration-300`}
                    disabled={!formData.consent || isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                </form>
              </div>
            </div>

            {/* Additional Information - Full Width */}
            <div className="mt-12">
              <div className="bg-tertiary/50 p-8 rounded-lg">
                <h3 className="text-xl font-semibold text-textPrimary mb-6">
                  Additional Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold text-secondary mb-3">
                        Freelance & Consulting Services
                      </h4>
                      <p className="text-textSecondary leading-relaxed">
                        Available for freelance projects and consulting
                        engagements in enterprise storage solutions,
                        infrastructure optimization, and system integration.
                        Offering expertise in designing and implementing
                        scalable storage architectures, data migration
                        strategies, and performance optimization. Specialized in
                        HPE, Dell EMC, and other enterprise storage platforms.
                      </p>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-secondary mb-3">
                        Enterprise Storage Solutions
                      </h4>
                      <p className="text-textSecondary leading-relaxed">
                        Providing comprehensive consultation and administration
                        services for enterprise storage solutions. Expertise
                        includes storage architecture design, implementation of
                        high-availability solutions, disaster recovery planning,
                        and performance optimization. Specialized in HPE 3PAR,
                        HPE Alletra, Dell EMC PowerStore, Pure Storage, and
                        various other enterprise storage platforms.
                      </p>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold text-secondary mb-3">
                        Career Opportunities
                      </h4>
                      <p className="text-textSecondary leading-relaxed">
                        Open to exciting opportunities with forward-thinking
                        organizations that offer challenging work in enterprise
                        storage, cloud infrastructure, or technical leadership
                        roles. Seeking positions that combine technical
                        expertise with strategic planning and team leadership.
                        Interested in roles that drive innovation and digital
                        transformation initiatives.
                      </p>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-secondary mb-3">
                        Technical Mentoring
                      </h4>
                      <p className="text-textSecondary leading-relaxed">
                        Passionate about sharing knowledge and mentoring in
                        storage technologies and services. Offering structured
                        mentoring programs covering enterprise storage
                        fundamentals, advanced administration, best practices,
                        and emerging technologies. Topics include storage
                        virtualization, data protection strategies, performance
                        tuning, and modern storage architectures. Available for
                        both individual and team training sessions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
