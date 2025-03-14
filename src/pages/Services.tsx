import { motion } from "framer-motion";
import {
  ServerIcon,
  CloudIcon,
  CommandLineIcon,
  ComputerDesktopIcon,
  CircleStackIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/outline";

const Services = () => {
  const technicalAreas = [
    {
      title: "Storage Infrastructure",
      description:
        "Extensive experience with enterprise storage platforms including Dell EMC, HPE, Pure Storage, and Infinidat. Specializing in storage architecture and optimization.",
      icon: ServerIcon,
      expertise: [
        "SAN/NAS Administration",
        "Storage Virtualization",
        "Performance Optimization",
        "Capacity Planning",
        "Data Protection",
      ],
    },
    {
      title: "Infrastructure Automation",
      description:
        "Implementation of automation solutions using Ansible and Python for streamlined infrastructure management and operational efficiency.",
      icon: CommandLineIcon,
      expertise: [
        "Ansible Automation",
        "Python Scripting",
        "Infrastructure as Code",
        "Process Automation",
        "Configuration Management",
      ],
    },
    {
      title: "Virtualization",
      description:
        "Working knowledge of virtualization technologies with focus on VMware environments, vSAN, and storage integration.",
      icon: ComputerDesktopIcon,
      expertise: [
        "VMware Administration",
        "vSAN Configuration",
        "Storage Integration",
        "Resource Management",
        "Performance Monitoring",
      ],
    },
    {
      title: "Disaster Recovery",
      description:
        "Implementation and management of DR solutions, ensuring business continuity through robust backup and recovery strategies.",
      icon: CircleStackIcon,
      expertise: [
        "DR Planning & Implementation",
        "Backup Solutions",
        "Recovery Testing",
        "Data Replication",
        "Business Continuity",
      ],
    },
    {
      title: "System Integration",
      description:
        "Experience in integrating various storage platforms with enterprise systems and implementing modern infrastructure solutions.",
      icon: WrenchScrewdriverIcon,
      expertise: [
        "Storage Platform Integration",
        "System Migration",
        "Cross-platform Solutions",
        "Infrastructure Modernization",
        "Technical Documentation",
      ],
    },
    {
      title: "Cloud Technologies",
      description:
        "Working knowledge of cloud platforms and their integration with on-premises infrastructure, focusing on hybrid storage solutions.",
      icon: CloudIcon,
      expertise: [
        "Azure Fundamentals",
        "Google Cloud Platform",
        "Cloud Storage Solutions",
        "Hybrid Infrastructure",
        "Cloud Integration",
      ],
    },
  ];

  return (
    <div className="pt-16">
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="heading text-center mb-12">Technical Expertise</h1>
            <p className="text-textSecondary text-center max-w-2xl mx-auto mb-16">
              With over 9 years of experience in enterprise storage and
              infrastructure, I specialize in storage technologies, automation,
              and system integration. Currently expanding knowledge in cloud
              technologies and infrastructure automation.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {technicalAreas.map((area, index) => (
                <motion.div
                  key={area.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-tertiary p-6 rounded-lg"
                >
                  <area.icon className="h-12 w-12 text-secondary mb-4" />
                  <h3 className="text-xl font-bold text-textPrimary mb-3">
                    {area.title}
                  </h3>
                  <p className="text-textSecondary mb-4">{area.description}</p>
                  <ul className="space-y-2">
                    {area.expertise.map((item) => (
                      <li
                        key={item}
                        className="flex items-center text-textSecondary"
                      >
                        <span className="w-2 h-2 bg-secondary rounded-full mr-2" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Professional Development */}
      <section className="py-20 bg-tertiary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="heading mb-8">Continuous Learning</h2>
          <p className="text-textSecondary mb-8 max-w-2xl mx-auto">
            Actively pursuing knowledge in emerging storage technologies,
            automation frameworks, and cloud platforms to stay current with
            industry trends and best practices.
          </p>
          <a
            href="mailto:contact@mackdev.com"
            className="btn btn-primary inline-block"
          >
            Connect with Me
          </a>
        </div>
      </section>
    </div>
  );
};

export default Services;
