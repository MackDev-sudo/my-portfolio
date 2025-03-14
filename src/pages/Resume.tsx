import { motion } from "framer-motion";
import {
  DocumentArrowDownIcon,
  CodeBracketIcon,
  SparklesIcon,
  ServerIcon,
} from "@heroicons/react/24/outline";

const Resume = () => {
  const whyHireMe = [
    {
      title: "Enterprise Storage Expert",
      description:
        "With extensive experience in designing and implementing complex storage solutions, I bring deep technical expertise in enterprise storage systems, disaster recovery planning, and performance optimization.",
    },
    {
      title: "Problem Solver & Strategic Thinker",
      description:
        "I excel at analyzing complex technical challenges and developing innovative solutions that align with business objectives. My approach combines technical expertise with strategic thinking to deliver optimal results.",
    },
    {
      title: "Full-Stack Developer",
      description:
        "Beyond storage solutions, I'm a passionate developer who creates modern web applications and mobile solutions. This unique combination allows me to bridge the gap between infrastructure and application development.",
    },
    {
      title: "Continuous Learner",
      description:
        "Technology evolves rapidly, and I stay at the forefront by continuously learning and adapting. I bring this growth mindset to every project, ensuring solutions leverage the latest best practices and innovations.",
    },
  ];

  const skills = {
    storage: [
      {
        name: "SAN (Storage Area Network)",
        description:
          "Expert in implementing and managing HPE 3PAR, Primera, Alletra 9K, Dell EMC PowerStore, and Pure Storage arrays. Proficient in FC protocol, zoning, and performance optimization.",
      },
      {
        name: "NAS (Network Attached Storage)",
        description:
          "Experienced with Dell EMC PowerScale/Isilon, NetApp solutions, and file system management. Strong knowledge of NFS, SMB protocols, and data governance.",
      },
      {
        name: "Replication & Data Protection",
        description:
          "Implementation of synchronous and asynchronous replication, snapshots, and backup solutions. Expert in data protection strategies and recovery procedures.",
      },
      {
        name: "Disaster Recovery Solutions",
        description:
          "Design and implementation of comprehensive DR solutions, including RPO/RTO planning, failover testing, and business continuity strategies.",
      },
      {
        name: "Storage Migration",
        description:
          "Successfully executed large-scale data migrations between heterogeneous storage platforms with minimal downtime and risk mitigation.",
      },
      {
        name: "Backup & Recovery",
        description:
          "Proficient in implementing and managing backup solutions, including RPO/RTO planning, failover testing, and business continuity strategies.",
      },
      {
        name: "Virtualization",
        description:
          "Extensive experience with VMware vSphere, ESXi, storage integration, and virtual infrastructure optimization.",
      },
      {
        name: "Operating Systems",
        description:
          "Proficient in Linux and Windows server environments, focusing on storage integration, performance tuning, and troubleshooting.",
      },
    ],
    development: [
      {
        name: "Frontend Development",
        description:
          "React, TypeScript, Tailwind CSS, and modern JavaScript for creating responsive and interactive web applications.",
      },
      {
        name: "Backend Development",
        description:
          "Node.js, Python, Django, MySQL, MongoDB, and RESTful APIs for building scalable server-side solutions.",
      },
      {
        name: "Mobile Development",
        description:
          "Android app development using Kotlin, Java, XML, Firebase, and Material Design principles.",
      },
    ],
    tools: [
      {
        name: "DevOps & Cloud",
        description:
          "Git, Docker, AWS, CI/CD pipelines for efficient development and deployment workflows.",
      },
      {
        name: "Testing & Monitoring",
        description:
          "Postman and various monitoring tools for ensuring application quality and performance.",
      },
    ],
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
            <div className="flex flex-col md:flex-row justify-between items-center mb-12">
              <h1 className="heading">Resume</h1>
              <a
                href="/projects/Atanu-Resume-Latest.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary inline-flex items-center mt-4 md:mt-0 hover:scale-105 transition-transform duration-300"
              >
                <DocumentArrowDownIcon className="w-5 h-5 mr-2" />
                View Resume
              </a>
            </div>

            {/* Why Hire Me Section */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-secondary mb-8 flex items-center">
                <SparklesIcon className="w-6 h-6 mr-2" />
                Why Hire Me?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {whyHireMe.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-tertiary p-6 rounded-lg hover:shadow-lg transition-shadow duration-300"
                  >
                    <h3 className="text-xl font-bold text-textPrimary mb-3">
                      {item.title}
                    </h3>
                    <p className="text-textSecondary leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Skills Section */}
            <div>
              <h2 className="text-2xl font-bold text-secondary mb-8 flex items-center">
                <CodeBracketIcon className="w-6 h-6 mr-2" />
                Technical Expertise
              </h2>
              <div className="space-y-12">
                {Object.entries(skills).map(([category, items], index) => (
                  <motion.div
                    key={category}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <h3 className="text-xl font-bold text-textPrimary mb-6 capitalize flex items-center border-b border-tertiary pb-2">
                      {category === "storage" && (
                        <ServerIcon className="w-5 h-5 mr-2" />
                      )}
                      {category.replace(
                        "development",
                        "Development Technologies"
                      )}
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {items.map((skill) => (
                        <div
                          key={skill.name}
                          className="bg-tertiary/50 p-6 rounded-lg hover:bg-tertiary transition-colors duration-300"
                        >
                          <h4 className="text-lg font-semibold text-secondary mb-2">
                            {skill.name}
                          </h4>
                          <p className="text-textSecondary leading-relaxed">
                            {skill.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-tertiary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="heading mb-8">Ready to Work Together?</h2>
          <p className="text-textSecondary mb-8 max-w-2xl mx-auto text-lg">
            Looking for an experienced storage technologist and developer who
            can bring both infrastructure expertise and application development
            skills to your team? Let's connect and discuss how I can contribute
            to your success.
          </p>
          <a
            href="mailto:mackdev1990@gmail.com"
            className="btn btn-primary inline-flex items-center group hover:scale-105 transition-transform duration-300"
          >
            Contact Me
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
      </section>
    </div>
  );
};

export default Resume;
