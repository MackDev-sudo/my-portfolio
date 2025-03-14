import { Link } from "react-router-dom";
import {
  EnvelopeIcon,
  MapPinIcon,
  PhoneIcon,
  EyeIcon,
  ChartBarIcon,
} from "@heroicons/react/24/outline";
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

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAmdnKGsQ2lLVjR2iqyD5-a0A_0TJlvgEg",
  authDomain: "portfolio-atanu.firebaseapp.com",
  projectId: "portfolio-atanu",
  databaseURL: "https://portfolio-atanu-default-rtdb.firebaseio.com",
  storageBucket: "portfolio-atanu.firebasestorage.app",
  messagingSenderId: "546153583966",
  appId: "1:546153583966:web:6bce44bd4478a553f2abcf",
  measurementId: "G-W58CZ0W0KL",
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

const Footer = () => {
  const [visitorStats, setVisitorStats] = useState<VisitorStats>({
    total: 0,
    today: 0,
  });
  const [error, setError] = useState<string | null>(null);

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

  const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/atanu-kumar-paul-57b0ba115/",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      ),
    },
    {
      name: "Twitter",
      href: "https://x.com/AtanuKpall",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
    {
      name: "GitHub",
      href: "https://github.com/MackDev-sudo",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      ),
    },
  ];

  return (
    <footer className="bg-tertiary py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-bold text-secondary mb-2">
              Mackdev Inc.
            </h3>
            <p className="text-textSecondary text-sm mb-3">
              Empowering businesses through innovative solutions.
            </p>
            <div className="flex items-center space-x-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-textSecondary hover:text-secondary transition-colors duration-300"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
              <div className="flex items-center space-x-2">
                <div className="flex items-center bg-[#0f172a] px-2 py-1 rounded-lg text-xs group relative">
                  <EyeIcon className="h-3.5 w-3.5 text-secondary mr-1" />
                  <span className="text-textSecondary">
                    {visitorStats.today}
                  </span>
                  <div className="absolute hidden group-hover:block bg-[#0f172a] border border-tertiary rounded-md py-1 px-2 -top-8 left-1/2 transform -translate-x-1/2 text-xs text-textSecondary whitespace-nowrap">
                    Today's Visitors
                  </div>
                </div>
                <div className="flex items-center bg-[#0f172a] px-2 py-1 rounded-lg text-xs group relative">
                  <ChartBarIcon className="h-3.5 w-3.5 text-secondary mr-1" />
                  <span className="text-textSecondary">
                    {visitorStats.total}
                  </span>
                  <div className="absolute hidden group-hover:block bg-[#0f172a] border border-tertiary rounded-md py-1 px-2 -top-8 left-1/2 transform -translate-x-1/2 text-xs text-textSecondary whitespace-nowrap">
                    All Time Visitors
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-secondary mb-2">
              Quick Links
            </h3>
            <ul className="space-y-1.5 text-sm">
              <li>
                <Link
                  to="/about"
                  className="text-textSecondary hover:text-secondary transition-colors duration-300"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-textSecondary hover:text-secondary transition-colors duration-300"
                >
                  Expertise
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-textSecondary hover:text-secondary transition-colors duration-300"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-bold text-secondary mb-2">Legal</h3>
            <ul className="space-y-1.5 text-sm">
              <li>
                <Link
                  to="/privacy"
                  className="text-textSecondary hover:text-secondary transition-colors duration-300"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="text-textSecondary hover:text-secondary transition-colors duration-300"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  to="/cookie-policy"
                  className="text-textSecondary hover:text-secondary transition-colors duration-300"
                >
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold text-secondary mb-2">Contact</h3>
            <div className="space-y-1.5">
              <div className="flex items-center text-textSecondary text-sm">
                <EnvelopeIcon className="h-4 w-4 mr-2 flex-shrink-0" />
                <a
                  href="mailto:contact@mackdev.com"
                  className="hover:text-secondary transition-colors duration-300"
                >
                  contact@mackdev.com
                </a>
              </div>
              <div className="flex items-center text-textSecondary text-sm">
                <PhoneIcon className="h-4 w-4 mr-2 flex-shrink-0" />
                <span>+1 (234) 567-890</span>
              </div>
              <div className="flex items-start text-textSecondary text-sm">
                <MapPinIcon className="h-4 w-4 mr-2 flex-shrink-0 mt-0.5" />
                <span>Newtown, Kolkata, West Bengal, India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-textSecondary text-xs border-t border-textSecondary/20 pt-4">
          {/* Disclaimer */}
          <p>
            &copy; {new Date().getFullYear()} Mackdev Inc. All rights reserved.
          </p>
          <div className="text-textSecondary text-[10px] mt-2 max-w-7xl mx-auto text-center">
            <p>
              <strong>Disclaimer :</strong> The content on this website is for
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
    </footer>
  );
};

export default Footer;
