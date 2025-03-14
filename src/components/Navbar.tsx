import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { logger } from "../utils/logger";

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
      className={`bg-primary fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "shadow-lg" : ""
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <img
                src="/projects/mackdev.png"
                alt="Mackdev Inc Logo"
                className="w-8 h-8 object-contain"
                onError={(e) => {
                  logger.error("Failed to load logo image");
                  e.currentTarget.src = "/fallback-logo.png"; // Provide a fallback
                }}
              />
              <span className="text-2xl font-bold text-secondary">
                Mackdev Inc.
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors duration-300 ${
                  location.pathname === item.path
                    ? "text-secondary"
                    : "text-textSecondary hover:text-secondary"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden">
            <button
              onClick={handleMobileMenuClick}
              className="text-textSecondary hover:text-secondary focus:outline-none"
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

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    location.pathname === item.path
                      ? "text-secondary bg-tertiary"
                      : "text-textSecondary hover:text-secondary hover:bg-tertiary"
                  }`}
                  onClick={handleMobileMenuClick}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
