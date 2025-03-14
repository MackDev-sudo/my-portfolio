import { motion } from "framer-motion";
import {
  DevicePhoneMobileIcon,
  GlobeAltIcon,
  CommandLineIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";

const Projects = () => {
  const projects = [
    {
      title: "OneAI",
      description:
        "A revolutionary AI companion powered by Google's Gemini Pro and Vision API, OneAI transforms your smartphone into a creative powerhouse. This innovative application combines advanced natural language processing with visual recognition to offer an unparalleled AI experience. From crafting compelling narratives and generating code to analyzing images and creating AI art, OneAI serves as your personal creative assistant. Perfect for writers seeking inspiration, developers streamlining their workflow, artists exploring new mediums, and anyone looking to harness the power of AI in their daily life.",
      image: "/projects/circle.png",
      technologies: [
        "Kotlin",
        "Android Studio",
        "Firebase",
        "Material Design",
        "Gemini API",
        "Vision API",
      ],
      link: "https://play.google.com/store/apps/details?id=com.mackdev.oneai",
      category: "Android",
      icon: DevicePhoneMobileIcon,
    },
    {
      title: "Tidings",
      description:
        "Tidings redefines how you consume Indian news and content. This comprehensive news application delivers real-time updates across sports, entertainment, politics, and culture, all tailored to your interests. With support for multiple Indian languages, offline reading capabilities, and a sophisticated content curation system, Tidings ensures you stay connected with what matters most. The app features personalized news feeds, real-time notifications for breaking news, and an intuitive interface that makes navigation effortless. Experience news consumption reimagined for the digital age.",
      image: "/projects/tidings.png",
      technologies: [
        "Kotlin",
        "Android Studio",
        "REST APIs",
        "Room Database",
        "Firebase",
        "ML Kit",
      ],
      link: "https://play.google.com/store/apps/details?id=com.mackdev.tidings",
      category: "Android",
      icon: DevicePhoneMobileIcon,
    },
    {
      title: "Calcus",
      description:
        "Calcus is a sophisticated calculator application that combines powerful functionality with elegant design. Beyond basic arithmetic, it offers advanced scientific operations, engineering calculations, and customizable settings to suit your computational needs. The app features an intuitive interface with material design principles, making complex calculations accessible and efficient. Whether you're a student, professional, or anyone needing reliable mathematical tools, Calcus delivers precision and ease of use in one beautifully crafted package.",
      image: "/projects/calcus.png",
      technologies: [
        "Kotlin",
        "Android Studio",
        "Material Design",
        "Unit Testing",
        "Custom Math Engine",
      ],
      link: "https://play.google.com/store/apps/details?id=com.mackdev.calcus",
      category: "Android",
      icon: DevicePhoneMobileIcon,
    },
    {
      title: "Portfolio Website",
      description:
        "A modern, responsive portfolio website showcasing my professional journey and technical expertise. Built with React and TypeScript, the site features a sleek dark theme design, smooth animations powered by Framer Motion, and responsive layouts using Tailwind CSS. The website includes detailed sections about my experience in storage technology, infrastructure automation, and software development. With optimized performance, accessibility features, and intuitive navigation, it provides visitors with a comprehensive overview of my skills and achievements while demonstrating modern web development practices.",
      image: "/projects/mackdev.png",
      technologies: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Framer Motion",
        "Firebase",
      ],
      link: "#",
      category: "Web",
      icon: GlobeAltIcon,
    },
    {
      title: "Anyview Storage Portal",
      description:
        "Anyview is a comprehensive storage management platform that revolutionizes how enterprise teams handle storage infrastructure. This advanced centralized platform unifies multiple storage management interfaces into a single, intuitive portal, significantly enhancing operational efficiency and team collaboration. Key features include automated LUN provisioning, share management, and real-time monitoring of storage arrays across multiple data centers. The platform offers sophisticated reporting tools, capacity planning features, and automated workflow management, making it an indispensable tool for modern storage administrators. Built with security and scalability in mind, Anyview supports multi-tenant architecture and integrates seamlessly with existing enterprise authentication systems.",
      image: "/projects/storageview.png",
      technologies: [
        "Node.js",
        "Python",
        "Express",
        "MySQL",
        "React",
        "Framer Motion",
        "Tailwind CSS",
        "Socket.io",
        "Clerk Authentication",
      ],
      link: "#",
      category: "Web",
      icon: CommandLineIcon,
    },
  ];

  const upcomingProjects = [
    {
      title: "OnShare",
      description:
        "OnShare is an innovative real-time collaboration platform designed to revolutionize virtual meetings and team communication. Built with WebRTC technology and a robust backend infrastructure, it offers crystal-clear video conferencing, high-quality audio calls, and seamless screen sharing capabilities. The platform features end-to-end encryption, customizable virtual backgrounds, live chat with rich text formatting, and intelligent noise cancellation. What sets OnShare apart is its focus on performance optimization and low-latency communication, making it perfect for both small team meetings and large-scale webinars. Additional features include meeting recordings, automated transcription, and integration capabilities with popular calendar and productivity tools.",
      technologies: [
        "WebRTC",
        "React",
        "Node.js",
        "Socket.io",
        "Redis",
        "Docker",
      ],
      category: "In Development",
      icon: GlobeAltIcon,
    },
    {
      title: "MyNews",
      description:
        "MyNews is an upcoming news aggregation platform that aims to transform how users consume and interact with news content. Using advanced AI algorithms, it curates personalized news feeds from trusted global sources while maintaining objectivity and reducing bias. The platform features an immersive UI with interactive data visualizations, timeline-based news exploration, and multi-language support with real-time translation. Users can customize their experience through smart filters, topic-based notifications, and in-depth analysis tools. The platform also includes features like fact-checking indicators, source credibility ratings, and community discussions, fostering informed dialogue and deeper understanding of global events.",
      technologies: [
        "Next.js",
        "TypeScript",
        "AI/ML",
        "GraphQL",
        "PostgreSQL",
        "AWS",
      ],
      category: "In Development",
      icon: GlobeAltIcon,
    },
    {
      title: "CutiePie",
      description:
        "CutiePie is an innovative social media platform exclusively designed for pet owners and animal lovers. This unique platform combines social networking features with pet-centric services, creating a vibrant community where users can share their pets' moments, connect with other pet owners, and access valuable pet care resources. Features include pet profiles with health tracking, automated pet photo enhancement, pet playdate matching, and integration with local pet services. The platform also includes an AI-powered pet behavior analysis tool, emergency vet locator, and a marketplace for pet products and services. CutiePie aims to create a safe, engaging space where the global pet-loving community can thrive.",
      technologies: [
        "React Native",
        "Firebase",
        "TensorFlow",
        "Cloud Functions",
        "MongoDB",
      ],
      category: "In Development",
      icon: SparklesIcon,
    },
  ];

  return (
    <div className="pt-16">
      <section className="py-20 bg-theme-bg-primary-light dark:bg-theme-bg-primary-dark">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="heading text-center mb-12">Projects</h1>
            <p className="text-textSecondary text-center max-w-2xl mx-auto mb-16">
              Here are some of my recent projects, showcasing my expertise in
              Android development, web development, and backend solutions.
            </p>

            {/* Current Projects */}
            <div className="space-y-12">
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-theme-bg-secondary-light dark:bg-theme-bg-secondary-dark rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                  <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-auto p-4 relative">
                      <div className="w-36 h-36 relative rounded-lg overflow-hidden bg-theme-bg-tertiary-light dark:bg-theme-bg-tertiary-dark">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-contain p-2"
                        />
                        <div className="absolute top-2 right-2 p-1.5 rounded-full bg-gray-200/80 dark:bg-gray-700/80">
                          <project.icon className="h-4 w-4 text-theme-text-secondary-light dark:text-theme-text-secondary-dark" />
                        </div>
                      </div>
                    </div>
                    <div className="flex-1 p-6 md:p-8 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-2xl font-bold text-theme-text-secondary-light dark:text-theme-text-secondary-dark">
                            {project.title}
                          </h3>
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1.5 ${
                              project.category === "Android"
                                ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                                : project.category === "Web"
                                ? "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400"
                                : project.category === "Backend"
                                ? "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400"
                                : "bg-gray-100 text-gray-700 dark:bg-gray-800/30 dark:text-gray-400"
                            }`}
                          >
                            <project.icon className="h-3.5 w-3.5" />
                            {project.category}
                          </span>
                        </div>
                        <p className="text-theme-text-secondary-light dark:text-theme-text-secondary-dark mb-6 leading-relaxed">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-6">
                          {project.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-2.5 py-0.5 border rounded-full text-xs font-medium border-theme-secondary-light dark:border-theme-secondary-dark text-theme-text-secondary-light dark:text-theme-text-secondary-dark hover:border-theme-secondary-light/70 dark:hover:border-theme-secondary-dark/70 transition-colors duration-300"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-theme-text-secondary-light dark:text-theme-text-secondary-dark hover:text-opacity-80 transition-colors duration-300 group"
                      >
                        View Project
                        <svg
                          className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
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
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Upcoming Projects Section */}
            <div className="mt-20">
              <h2 className="heading text-center text-2xl mb-8">
                Upcoming Projects
              </h2>
              <p className="text-theme-text-secondary-light dark:text-theme-text-secondary-dark text-center max-w-2xl mx-auto mb-12">
                Exciting new projects currently in development, showcasing
                innovation and cutting-edge technology.
              </p>
              <div className="space-y-12">
                {upcomingProjects.map((project, index) => (
                  <motion.div
                    key={project.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-theme-bg-secondary-light dark:bg-theme-bg-secondary-dark rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 p-6"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-2 rounded-full bg-gray-200/80 dark:bg-gray-700/80">
                        <project.icon className="h-6 w-6 text-theme-text-secondary-light dark:text-theme-text-secondary-dark" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-xl font-bold text-theme-text-secondary-light dark:text-theme-text-secondary-dark">
                            {project.title}
                          </h3>
                          <span className="px-3 py-1 bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400 rounded-full text-xs font-medium flex items-center gap-1.5">
                            <project.icon className="h-3.5 w-3.5" />
                            {project.category}
                          </span>
                        </div>
                        <p className="text-theme-text-secondary-light dark:text-theme-text-secondary-dark mb-6 leading-relaxed">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-2.5 py-0.5 border rounded-full text-xs font-medium border-theme-secondary-light dark:border-theme-secondary-dark text-theme-text-secondary-light dark:text-theme-text-secondary-dark hover:border-theme-secondary-light/70 dark:hover:border-theme-secondary-dark/70 transition-colors duration-300"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-theme-bg-tertiary-light dark:bg-theme-bg-tertiary-dark">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="heading mb-8">Have a Project in Mind?</h2>
            <p className="text-theme-text-secondary-light dark:text-theme-text-secondary-dark mb-8 text-lg">
              Let's work together to bring your ideas to life. Contact me to
              discuss your project requirements.
            </p>
            <a
              href="mailto:mackdev1990@gmail.com"
              className="btn btn-primary inline-flex items-center group hover:scale-105 transition-transform duration-300"
            >
              Get in Touch
              <svg
                className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
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
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
