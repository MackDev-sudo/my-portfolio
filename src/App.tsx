import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Resume from "./pages/Resume";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";
import CookiePolicy from "./pages/CookiePolicy";
import ScrollToTop from "./components/ScrollToTop";
import { ThemeProvider } from "./utils/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col bg-primary dark:bg-theme-primary-dark text-textPrimary dark:text-theme-text-primary-dark transition-colors duration-200">
        <ScrollToTop />
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsAndConditions />} />
            <Route path="/cookie-policy" element={<CookiePolicy />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
