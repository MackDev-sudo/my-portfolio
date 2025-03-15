import { Link } from "react-router-dom";
import { EnvelopeIcon, MapPinIcon } from "@heroicons/react/24/outline";
import { useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import {
  getDatabase,
  ref,
  onValue,
  set,
  get,
  DataSnapshot,
} from "firebase/database";
import { logger } from "../utils/logger";
import NoteDialog from "./NoteDialog";

// Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};

let app;
try {
  app = initializeApp(firebaseConfig);
  logger.info("Firebase initialized successfully");
} catch (error) {
  logger.error("Error initializing Firebase:", error);
}

const database = getDatabase(app);

interface VisitorStats {
  total: number;
  today: number;
}

interface SocialLink {
  name: string;
  url: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface QuickLink {
  path: string;
  label: string;
}

const siteConfig = {
  description: "Empowering businesses through innovative solutions.",
  email: "connect@mackdev.com",
  location: "Newtown, Kolkata, West Bengal, India",
  copyright: "Mackdev Inc",
};

const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/MackDev-sudo",
    icon: ({ className }) => (
      <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/atanu-kumar-paul-57b0ba115/",
    icon: ({ className }) => (
      <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    ),
  },
  {
    name: "X",
    url: "https://x.com/AtanuKpall",
    icon: ({ className }) => (
      <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
];

const quickLinks: QuickLink[] = [
  { path: "/about", label: "About" },
  { path: "/services", label: "Expertise" },
  { path: "/projects", label: "Projects" },
  { path: "/contact", label: "Contact" },
];

const services: string[] = [
  "Storage Solutions",
  "Cloud Solutions",
  "Web & Mobile Development",
  "UI/UX Design",
];

// Add donation links array back
const donationLinks = [
  {
    name: "PayPal",
    url: "https://paypal.me/mackdev1990",
    icon: "/payment/paypal_icon.svg",
  },
  {
    name: "PayTM",
    url: "https://paytm.me/mackdev-coffee",
    icon: "/payment/paytm_icon.svg",
  },
];

const Footer = () => {
  const [visitorStats, setVisitorStats] = useState<VisitorStats>({
    total: 0,
    today: 0,
  });
  const [error, setError] = useState<string | null>(null);
  const [isNoteOpen, setIsNoteOpen] = useState(false);

  useEffect(() => {
    logger.debug("Setting up Firebase listeners...");
    const statsRef = ref(database, "visitorStats");
    const today = new Date().toISOString().split("T")[0];

    // Listen for real-time updates
    const unsubscribe = onValue(
      statsRef,
      (snapshot: DataSnapshot) => {
        try {
          logger.debug("Received Firebase update:", snapshot.val());
          const stats = snapshot.val() || { total: 0, daily: {} };
          const todayCount = stats.daily?.[today] || 0;
          logger.debug(
            "Processing stats - Today:",
            todayCount,
            "Total:",
            stats.total
          );
          setVisitorStats({
            total: stats.total || 0,
            today: todayCount,
          });
          setError(null);
        } catch (error) {
          logger.error("Error processing Firebase update:", error);
          setError("Failed to load visitor stats");
        }
      },
      (error) => {
        logger.error("Firebase onValue error:", error);
        setError("Failed to connect to visitor stats service");
      }
    );

    // Increment counts only once per session
    const incrementCounts = async () => {
      if (!sessionStorage.getItem("counted")) {
        try {
          logger.debug("Incrementing counts...");
          const snapshot = await get(statsRef);
          const stats = snapshot.val() || { total: 0, daily: {} };
          logger.debug("Current stats:", stats);

          // Update total count
          const newTotal = (stats.total || 0) + 1;

          // Update today's count
          const daily = stats.daily || {};
          daily[today] = (daily[today] || 0) + 1;

          // Save updated stats
          const updates = {
            total: newTotal,
            daily: daily,
          };
          logger.debug("Saving updates:", updates);

          await set(statsRef, updates);
          logger.info("Updates saved successfully");
          sessionStorage.setItem("counted", "true");
        } catch (error) {
          logger.error("Error incrementing counts:", error);
          setError("Failed to update visitor count");
        }
      } else {
        logger.debug("Session already counted");
      }
    };

    incrementCounts();

    // Cleanup subscription
    return () => {
      logger.debug("Cleaning up Firebase listener");
      unsubscribe();
    };
  }, []);

  return (
    <footer className="bg-theme-bg-primary-light dark:bg-theme-bg-primary-dark py-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* About Section */}
          <div>
            <h3 className="text-base font-bold text-theme-secondary-light dark:text-theme-secondary-dark mb-2">
              Mackdev Inc.
            </h3>
            <p className="text-sm text-theme-text-secondary-light dark:text-theme-text-secondary-dark mb-3">
              {siteConfig.description}
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-theme-text-secondary-light dark:text-theme-text-secondary-dark hover:text-theme-secondary-light dark:hover:text-theme-secondary-dark transition-colors duration-300"
                    aria-label={link.name}
                  >
                    <link.icon className="h-4 w-4" />
                  </a>
                ))}
                {error ? (
                  <span className="text-red-500 text-xs">Error</span>
                ) : (
                  <div className="flex items-center space-x-2 bg-theme-bg-secondary-light dark:bg-theme-bg-secondary-dark rounded-full px-3 py-1 border border-theme-text-secondary-light/10 dark:border-theme-text-secondary-dark/10 shadow-sm">
                    <div className="flex items-center" title="Today's visitors">
                      <svg
                        className="w-3 h-3 mr-1 text-theme-secondary-light dark:text-theme-secondary-dark"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span className="text-xs font-medium text-theme-text-primary-light dark:text-theme-text-primary-dark">
                        Today: {visitorStats.today}
                      </span>
                    </div>
                    <span className="text-xs text-theme-text-secondary-light dark:text-theme-text-secondary-dark">
                      |
                    </span>
                    <div className="flex items-center" title="Total visitors">
                      <svg
                        className="w-3 h-3 mr-1 text-theme-secondary-light dark:text-theme-secondary-dark"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      </svg>
                      <span className="text-xs font-medium text-theme-text-primary-light dark:text-theme-text-primary-dark">
                        Total: {visitorStats.total}
                      </span>
                    </div>
                  </div>
                )}
              </div>
              <div className="flex items-center space-x-1">
                <span className="text-xs font-medium text-theme-text-secondary-light dark:text-theme-text-secondary-dark">
                  Powered by{" "}
                </span>
                <a
                  href="https://www.cursor.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-mono text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 transition-colors duration-300 inline-flex items-center"
                >
                  <svg
                    className="h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M3 3v18h18V3H3zm16 16H5V5h14v14z" />
                    <path d="M15 7l-3 3-3-3h6zM7 15l3-3 3 3H7z" />
                    <rect x="11" y="7" width="2" height="10" />
                  </svg>
                  Cursor.ai
                </a>
                <span className="text-xs font-medium text-theme-text-secondary-light dark:text-theme-text-secondary-dark">
                  {" "}
                  hosted on{" "}
                </span>
                <a
                  href="https://vercel.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 transition-colors duration-300 inline-flex items-center"
                >
                  <svg className="h-3" viewBox="0 0 283 64" fill="currentColor">
                    <path d="M141.04 16c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.46 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zM248.72 16c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.45 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zM200.24 34c0 6 3.92 10 10 10 4.12 0 7.21-1.87 8.8-4.92l7.68 4.43c-3.18 5.3-9.14 8.49-16.48 8.49-11.05 0-19-7.2-19-18s7.96-18 19-18c7.34 0 13.29 3.19 16.48 8.49l-7.68 4.43c-1.59-3.05-4.68-4.92-8.8-4.92-6.07 0-10 4-10 10zm82.48-29v46h-9V5h9zM36.95 0L73.9 64H0L36.95 0zm92.38 5l-27.71 48L73.91 5H84.3l17.32 30 17.32-30h10.39zm58.91 12v9.69c-1-.29-2.06-.49-3.2-.49-5.81 0-10 4-10 10V51h-9V17h9v9.2c0-5.08 5.91-9.2 13.2-9.2z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base font-bold text-theme-secondary-light dark:text-theme-secondary-dark mb-2">
              Quick Links
            </h3>
            <ul className="space-y-1">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-theme-text-secondary-light dark:text-theme-text-secondary-dark hover:text-theme-secondary-light dark:hover:text-theme-secondary-dark transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-base font-bold text-theme-secondary-light dark:text-theme-secondary-dark mb-2">
              Services
            </h3>
            <ul className="space-y-1">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-sm text-theme-text-secondary-light dark:text-theme-text-secondary-dark">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-base font-bold text-theme-secondary-light dark:text-theme-secondary-dark mb-2">
              Contact
            </h3>
            <ul className="space-y-1">
              <li className="flex items-center text-sm text-theme-text-secondary-light dark:text-theme-text-secondary-dark">
                <EnvelopeIcon className="h-3.5 w-3.5 mr-1.5" />
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="hover:text-theme-secondary-light dark:hover:text-theme-secondary-dark transition-colors duration-300"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-center text-sm text-theme-text-secondary-light dark:text-theme-text-secondary-dark">
                <MapPinIcon className="h-3.5 w-3.5 mr-1.5" />
                {siteConfig.location}
              </li>
            </ul>

            {/* Buy me a coffee box */}
            <div className="mt-1 bg-theme-bg-secondary-light dark:bg-yellow-500 rounded-lg border border-theme-text-secondary-light/10 dark:border-theme-text-secondary-dark/10 shadow-sm">
              <div className="flex items-center justify-center space-x-6">
                {donationLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-theme-text-secondary-light dark:text-theme-text-secondary-dark hover:text-theme-secondary-light dark:hover:text-theme-secondary-dark transition-colors duration-300"
                    title={`Support via ${link.name}`}
                  >
                    <img
                      src={link.icon}
                      alt={link.name}
                      className="h-14 w-14 object-contain"
                    />
                  </a>
                ))}
              </div>
              <p className="mb-2 text-xs font-medium text-center text-theme-text-primary-light dark:text-theme-text-primary-dark">
                Your support is valuable to me.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-2 pt-2 border-t border-theme-bg-secondary-light dark:border-theme-bg-secondary-dark">
          <div className="flex flex-col space-y-3">
            {/* Copyright and Links */}
            <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
              <p className="text-xs text-theme-text-secondary-light dark:text-theme-text-secondary-dark">
                © {new Date().getFullYear()} {siteConfig.copyright}. All rights
                reserved.
              </p>
              <div className="flex space-x-4">
                <Link
                  to="/privacy"
                  className="text-xs text-theme-text-secondary-light dark:text-theme-text-secondary-dark hover:text-theme-secondary-light dark:hover:text-theme-secondary-dark transition-colors duration-300"
                >
                  Privacy Policy
                </Link>
                <Link
                  to="/terms"
                  className="text-xs text-theme-text-secondary-light dark:text-theme-text-secondary-dark hover:text-theme-secondary-light dark:hover:text-theme-secondary-dark transition-colors duration-300"
                >
                  Terms & Conditions
                </Link>
                <Link
                  to="/cookie-policy"
                  className="text-xs text-theme-text-secondary-light dark:text-theme-text-secondary-dark hover:text-theme-secondary-light dark:hover:text-theme-secondary-dark transition-colors duration-300"
                >
                  Cookie Policy
                </Link>
                <button
                  onClick={() => setIsNoteOpen(true)}
                  className="text-xs text-theme-text-secondary-light dark:text-theme-text-secondary-dark hover:text-theme-secondary-light dark:hover:text-theme-secondary-dark transition-colors duration-300"
                >
                  Notice
                </button>
              </div>
            </div>
            {/* Disclaimer */}
            <p className="text-[10px] text-center text-theme-text-secondary-light dark:text-theme-text-secondary-dark">
              <strong>Disclaimer :</strong>TThe content on this website is for
              informational purposes only and represents my professional
              experience, expertise, and insights in IT, storage solutions, web
              development, and related fields. While I strive to ensure accuracy
              and maintain up-to-date information, I acknowledge that technology
              evolves rapidly, and some details may change over time. The views
              expressed here are my own and do not reflect those of any past or
              present employers. This website does not constitute professional
              advice; users should evaluate the information based on their
              specific needs.
            </p>
          </div>
        </div>
      </div>

      {/* Note Dialog */}
      <NoteDialog isOpen={isNoteOpen} onClose={() => setIsNoteOpen(false)} />
    </footer>
  );
};

export default Footer;
