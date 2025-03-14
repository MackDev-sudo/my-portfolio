import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import { logger } from "./utils/logger";

// Initialize theme
const initializeTheme = () => {
  const savedTheme = localStorage.getItem("theme") || "light";
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
};

// Run theme initialization immediately
initializeTheme();

// Performance monitoring
const startTime = performance.now();

// Error boundary component
class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    logger.error("Application error:", error);
    logger.error("Error details:", errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-primary dark:bg-theme-primary-dark flex items-center justify-center">
          <div className="text-center p-8">
            <h1 className="text-4xl font-bold text-secondary dark:text-theme-secondary-dark mb-4">
              Oops!
            </h1>
            <p className="text-textSecondary dark:text-theme-text-secondary-dark mb-8">
              Something went wrong. Please try refreshing the page.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-2 bg-secondary/20 dark:bg-theme-secondary-dark/20 text-secondary dark:text-theme-secondary-dark rounded-lg hover:bg-secondary/30 dark:hover:bg-theme-secondary-dark/30 transition-colors duration-200"
            >
              Refresh Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

// Performance monitoring for initial load
window.addEventListener("load", () => {
  const loadTime = performance.now() - startTime;
  logger.info(`App loaded in ${loadTime.toFixed(2)}ms`);
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ErrorBoundary>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ErrorBoundary>
  </React.StrictMode>
);
