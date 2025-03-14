import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { logger } from "../utils/logger";
import { useTheme } from "../utils/ThemeContext";
import ThemeToggle from "./ThemeToggle";
import { AnimatePresence, motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Expertise", path: "/services" },
    { name: "Experience", path: "/experience" },
    { name: "Projects", path: "/projects" },
    { name: "Resume", path: "/resume" },
    { name: "Contact", path: "/contact" },
  ];

  // Monitor scroll performance
  useEffect(() => {
    let lastScrollTime = Date.now();

    const handleScroll = () => {
      const currentTime = Date.now();
      const timeSinceLastScroll = currentTime - lastScrollTime;

      if (timeSinceLastScroll < 50) {
        // Less than 50ms between scrolls
        logger.debug("Rapid scrolling detected:", timeSinceLastScroll + "ms");
      }

      lastScrollTime = currentTime;
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    logger.debug("Scroll listener added");

    return () => {
      window.removeEventListener("scroll", handleScroll);
      logger.debug("Scroll listener removed");
    };
  }, []);

  // Monitor route changes
  useEffect(() => {
    logger.info("Route changed to:", location.pathname);
    setIsOpen(false); // Close mobile menu on route change
  }, [location]);

  const handleMobileMenuClick = () => {
    logger.debug("Mobile menu toggled:", !isOpen);
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className={`fixed w-full z-50 bg-theme-bg-primary-light dark:bg-theme-bg-primary-dark transition-all duration-300 ${
        isScrolled ? "shadow-lg py-2" : "py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <img
                src="/projects/mackdev.png"
                alt="Mackdev Inc Logo"
                className="w-8 h-8 object-contain"
                onError={(e) => {
                  logger.error("Failed to load logo image");
                  e.currentTarget.src = "/fallback-logo.png";
                }}
              />
              <span className="text-2xl font-bold text-theme-secondary-light dark:text-theme-secondary-dark">
                Mackdev Inc.
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={
                  location.pathname === item.path
                    ? "nav-link-active"
                    : "nav-link"
                }
              >
                {item.name}
              </Link>
            ))}
            <div className="ml-4">
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={handleMobileMenuClick}
              className="nav-link"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden mt-4"
            >
              <div className="flex flex-col space-y-4 pb-4">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`text-theme-text-primary-light dark:text-theme-text-primary-dark hover:text-theme-secondary-light dark:hover:text-theme-secondary-dark transition-colors duration-300 ${
                      location.pathname === item.path
                        ? "text-theme-secondary-light dark:text-theme-secondary-dark font-semibold"
                        : ""
                    }`}
                    onClick={handleMobileMenuClick}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="pt-2">
                  <ThemeToggle />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
