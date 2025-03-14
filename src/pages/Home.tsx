import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ServerIcon,
  CodeBracketIcon,
  DevicePhoneMobileIcon,
} from "@heroicons/react/24/outline";

const Home = () => {
  const featuredProjects = [
    {
      title: "Storage Solutions",
      description:
        "Enterprise storage solutions and consulting, specializing in data management, storage architecture, and performance optimization.",
      icon: ServerIcon,
      link: "/services",
      delay: 0,
    },
    {
      title: "Web Development",
      description:
        "Modern web applications built with React, TypeScript, and cutting-edge technologies, focusing on responsive design and user experience.",
      icon: CodeBracketIcon,
      link: "/projects",
      delay: 0.2,
    },
    {
      title: "Mobile Apps",
      description:
        "Android applications published on Google Play Store, including OneAI, Tidings, and Calcus, built with modern development practices.",
      icon: DevicePhoneMobileIcon,
      link: "/projects",
      delay: 0.4,
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center bg-primary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-xl"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Hi, I'm <span className="text-secondary">Atanu Kumar Paul</span>
              </h1>
              <p className="text-xl text-textSecondary mb-4">
                Storage Technologist by profession
              </p>
              <p className="text-lg text-textSecondary mb-8">
                Web Designer, Programmer, and Artist by passion. With expertise
                in enterprise storage solutions and a love for creating
                innovative web and mobile applications.
              </p>
              <div className="flex space-x-4">
                <Link to="/projects" className="btn btn-primary">
                  View Projects
                </Link>
                <Link to="/contact" className="btn btn-outline">
                  Contact Me
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="hidden md:flex justify-center items-center"
            >
              <img
                src="/projects/witch-animate.svg"
                alt="Animated Developer Illustration"
                className="w-full max-w-lg h-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section className="py-20 bg-tertiary">
        <div className="container mx-auto px-4">
          <h2 className="heading text-center">What I Do</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {featuredProjects.map((project) => (
              <motion.div
                key={project.title}
                whileHover={{ y: -10 }}
                className="bg-primary p-6 rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: project.delay }}
              >
                <project.icon className="h-12 w-12 text-secondary mb-4" />
                <h3 className="text-xl font-bold text-secondary mb-4">
                  {project.title}
                </h3>
                <p className="text-textSecondary mb-4">{project.description}</p>
                <Link
                  to={project.link}
                  className="text-secondary hover:text-opacity-80 transition-colors duration-300 inline-flex items-center"
                >
                  Learn More
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="heading">Let's Work Together</h2>
          <p className="text-textSecondary mb-8 max-w-2xl mx-auto">
            Whether you need expertise in enterprise storage solutions, web
            development, or mobile applications, I'm here to help bring your
            ideas to life.
          </p>
          <Link to="/contact" className="btn btn-primary">
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
