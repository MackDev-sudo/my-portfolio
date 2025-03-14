import { motion } from "framer-motion";
import {
  BriefcaseIcon,
  AcademicCapIcon,
  ServerIcon,
  CodeBracketIcon,
  BuildingLibraryIcon,
} from "@heroicons/react/24/outline";

const Experience = () => {
  const professionalExperience = [
    {
      title: "Associate Consultant",
      company: "TCS, Kolkata",
      period: "June 2024 - Present",
      description:
        "Providing expert technical consultation and support for enterprise storage infrastructure, focusing on vSAN, Core Storage, and SRM solutions.",
      achievements: [
        "Expert technical assistance for Storage & Backup infrastructure challenges",
        "In-depth performance analysis of vSAN and Core Storage platforms",
        "Infrastructure modernization and management",
        "Storage migration, DR drills, and transition management",
        "Complex troubleshooting of SAN/NAS issues and performance optimization",
      ],
      icon: BriefcaseIcon,
    },
    {
      title: "Senior Infrastructure Consultant",
      company: "Infosys Limited, Pune",
      period: "Jan 2021 - Jun 2024",
      description:
        "Led enterprise storage infrastructure management and modernization initiatives, handling complex migrations and operational excellence.",
      achievements: [
        "Managed migrations between HPE 3PAR and HPE Alletra 9000 systems",
        "Conducted and managed regular DR drills and validation processes",
        "Handled storage provisioning, reclamation, and decommissioning",
        "Expert troubleshooting of SAN/NAS issues and performance optimization",
        "Infrastructure transition and validation management",
      ],
      icon: ServerIcon,
    },
    {
      title: "Technical Support Engineer - L2",
      company: "Dell Technologies, Bangalore",
      period: "Apr 2019 - Jan 2021",
      description:
        "Provided advanced technical support for Dell EMC storage solutions, focusing on complex incident resolution and customer satisfaction.",
      achievements: [
        "Led complex incident resolution for Dell EMC HCI and Storage solutions",
        "Managed iSCSI and FC networking challenges",
        "Advanced expertise in RedHat and VMware environments",
        "Collaborated with L3/L4 teams for complex issue resolution",
      ],
      icon: ServerIcon,
    },
    {
      title: "Technical Solutions Consultant",
      company: "Hewlett Packard Enterprise, Bangalore",
      period: "Jan 2018 - Apr 2019",
      description:
        "L1.5 consultant handling complex storage and networking issues, providing expert technical solutions for enterprise clients.",
      achievements: [
        "Resolved complex issues across HPE Storage portfolio",
        "Direct collaboration with L3/L4 engineering teams",
        "Advanced troubleshooting of iSCSI and FC networking",
        "Expert support for enterprise OS platforms",
      ],
      icon: BriefcaseIcon,
    },
    {
      title: "Project Engineer",
      company: "Wipro, Bangalore",
      period: "Feb 2015 - Dec 2017",
      description:
        "Started career as a trainee and progressed to EMC project as L1-Technical Support Engineer, handling storage infrastructure support.",
      achievements: [
        "Frontline support for EMC Storage Appliances",
        "Customer issue resolution and advanced troubleshooting",
        "Break-fix support across storage device portfolio",
        "Incident and problem management",
      ],
      icon: BriefcaseIcon,
    },
  ];

  const education = [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "Bengal College of Engineering and Technology",
      location: "Durgapur, West Bengal",
      period: "Post Graduation | 2012 - 2015",
      duration: "3 Years",
      type: "Full Time",
      score: "CGPA: 76%",
      icon: AcademicCapIcon,
    },
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "Techno India University",
      location: "Salt Lake, Sector 5, Kolkata, West Bengal",
      period: "Graduation | 2008 - 2012",
      duration: "3 Years",
      type: "Full Time",
      score: "CGPA: 72%",
      icon: BuildingLibraryIcon,
    },
    {
      degree: "School Education",
      institution: "Kendriya Vidyalaya",
      location: "Gate-1, Air Force Campus, Barrackpore, West Bengal",
      period: "1994 - 2008",
      achievements: [
        "Active participation in inter-school Football tournaments.",
        "Participated in Science Olympiad competitions.",
        "Member of The Bharat Scouts and Guides (BSG) till 10th Class.",
      ],
      icon: BuildingLibraryIcon,
    },
  ];

  const certifications = [
    {
      title: "DELL EMC ISM v4",
      issuer: "Dell Technologies",
      description:
        "Advanced certification in Information Storage Management, covering enterprise storage technologies, data protection, cloud storage, and storage networking. Demonstrates expertise in managing complex storage infrastructures and implementing modern storage solutions.",
      issueDate: "Jul 2016",
      credentialId: "1VKM9LFZ2FE45F5C",
    },
    {
      title: "EMC VCE",
      issuer: "Dell EMC",
      description:
        "Specialized certification in VxBlock and VBlock converged infrastructure solutions. Validates expertise in deploying, managing, and troubleshooting integrated compute, network, and storage systems in enterprise environments.",
      issueDate: "Jul 2017",
      credentialId: "00693382",
    },
    {
      title: "Build a Website on Google",
      issuer: "Google Cloud Skills Boost",
      description:
        "Comprehensive training in building and deploying web applications on Google Cloud Platform. Covers Cloud Run, App Engine, and best practices for scalable web architecture using Google's cloud services.",
      link: "https://partner.cloudskillsboost.google/public_profiles/366d020b-dd57-4b85-95b6-3bcded00fbf7/badges/3182262",
    },
    {
      title: "Create and Manage Cloud Resources",
      issuer: "Google Cloud Skills Boost",
      description:
        "Advanced training in Google Cloud resource management, including compute instances, Kubernetes clusters, and cloud storage. Demonstrates proficiency in infrastructure automation and cloud resource optimization.",
      link: "https://partner.cloudskillsboost.google/public_profiles/366d020b-dd57-4b85-95b6-3bcded00fbf7/badges/3155377",
    },
    {
      title: "Azure Fundamentals (AZ900)",
      issuer: "Infosys",
      description:
        "Foundation-level certification validating knowledge of cloud concepts, Azure services, security, privacy, pricing, and support. Demonstrates understanding of cloud computing and Microsoft Azure fundamentals.",
      link: "https://gameconfig.lex.infosysapps.com/Gamification/GetBadgeImage/?AppId=2&TokenNo=DDUPPGZGMT&BadgeCode=OV5HKOIWPR",
    },
  ];

  const developmentExperience = {
    title: "Independent Developer",
    company: "MackDev",
    period: "2014 - Present",
    description:
      "Self-driven journey in software development, focusing on Android and web applications as a passion project alongside professional career.",
    achievements: [
      "Published multiple Android applications on Google Play Store including OneAI, Tidings, and Calcus",
      "Developed modern web applications using React and TypeScript",
      "Created SAN-View, a web-based storage management interface",
      "Implemented responsive design and material design principles",
    ],
    icon: CodeBracketIcon,
  };

  return (
    <div className="pt-16">
      <section className="py-20 bg-theme-bg-primary-light dark:bg-theme-bg-primary-dark">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="heading text-center mb-12">
              Professional Experience
            </h1>
            <p className="text-textSecondary text-center max-w-3xl mx-auto mb-16">
              A dedicated Storage Technology professional with over 9 years of
              experience in enterprise storage solutions, infrastructure
              management, and technical consulting. Specialized in storage
              systems from leading vendors including Dell EMC, HPE, Pure
              Storage, and Infinidat.
            </p>

            {/* Professional Experience Timeline */}
            <div className="space-y-12">
              {professionalExperience.map((experience, index) => (
                <motion.div
                  key={experience.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="relative"
                >
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <experience.icon className="h-8 w-8 text-secondary" />
                    </div>
                    <div className="ml-6 bg-theme-bg-secondary-light dark:bg-theme-bg-secondary-dark p-6 rounded-lg flex-grow">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-theme-secondary-light dark:text-theme-secondary-dark">
                            {experience.title}
                          </h3>
                          <p className="text-theme-text-secondary-light dark:text-theme-text-secondary-dark">
                            {experience.company}
                          </p>
                        </div>
                        <span className="text-sm text-theme-text-secondary-light dark:text-theme-text-secondary-dark">
                          {experience.period}
                        </span>
                      </div>
                      <p className="text-theme-text-primary-light dark:text-theme-text-primary-dark mb-4">
                        {experience.description}
                      </p>
                      <ul className="space-y-2">
                        {experience.achievements.map((achievement) => (
                          <li
                            key={achievement}
                            className="flex items-start text-theme-text-secondary-light dark:text-theme-text-secondary-dark"
                          >
                            <span className="w-2 h-2 bg-secondary rounded-full mt-2 mr-2" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  {index < professionalExperience.length - 1 && (
                    <div className="absolute left-4 top-8 bottom-0 w-0.5 bg-theme-text-secondary-light dark:bg-theme-text-secondary-dark" />
                  )}
                </motion.div>
              ))}
            </div>

            {/* Development Experience */}
            <div className="mt-16">
              <h2 className="heading text-center mb-12">
                Development Experience
              </h2>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <developmentExperience.icon className="h-8 w-8 text-secondary" />
                  </div>
                  <div className="ml-6 bg-theme-bg-secondary-light dark:bg-theme-bg-secondary-dark p-6 rounded-lg flex-grow">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-theme-secondary-light dark:text-theme-secondary-dark">
                          {developmentExperience.title}
                        </h3>
                        <p className="text-theme-text-secondary-light dark:text-theme-text-secondary-dark">
                          {developmentExperience.company}
                        </p>
                      </div>
                      <span className="text-sm text-theme-text-secondary-light dark:text-theme-text-secondary-dark">
                        {developmentExperience.period}
                      </span>
                    </div>
                    <p className="text-theme-text-primary-light dark:text-theme-text-primary-dark mb-4">
                      {developmentExperience.description}
                    </p>
                    <ul className="space-y-2">
                      {developmentExperience.achievements.map((achievement) => (
                        <li
                          key={achievement}
                          className="flex items-start text-theme-text-secondary-light dark:text-theme-text-secondary-dark"
                        >
                          <span className="w-2 h-2 bg-secondary rounded-full mt-2 mr-2" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Education & Certifications Section */}
      <section className="py-12 bg-theme-bg-tertiary-light dark:bg-theme-bg-tertiary-dark">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8"
          >
            <h2 className="heading text-3xl font-bold text-theme-secondary-light dark:text-theme-secondary-dark">
              Education & Certifications
            </h2>
            <p className="text-theme-text-secondary-light dark:text-theme-text-secondary-dark mt-4 max-w-4xl mx-auto">
              A strong foundation in computer science combined with
              industry-recognized certifications in enterprise technologies and
              cloud platforms.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Education */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-theme-bg-secondary-light dark:bg-theme-bg-secondary-dark p-6 rounded-xl border border-theme-text-secondary-light/20 dark:border-theme-text-secondary-dark/20 shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <h2 className="heading text-2xl font-bold text-theme-secondary-light dark:text-theme-secondary-dark text-center mb-6">
                Academic Journey
              </h2>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <motion.div
                    key={edu.degree}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    className="group bg-theme-bg-tertiary-light dark:bg-theme-bg-tertiary-dark p-6 rounded-lg flex items-start hover:bg-theme-bg-tertiary-light/80 dark:hover:bg-theme-bg-tertiary-dark/80 transform hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-theme-text-secondary-light/10 dark:hover:border-theme-text-secondary-dark/10"
                  >
                    <div
                      className="p-3 bg-theme-text-secondary-light/10 dark:bg-theme-text-secondary-dark/10 rounded-lg group-hover:bg-theme-text-secondary-light/20 dark:group-hover:bg-theme-text-secondary-dark/20 
                                  transition-colors duration-300"
                    >
                      <edu.icon
                        className="h-8 w-8 text-theme-secondary-light dark:text-theme-secondary-dark group-hover:scale-110 
                                         transition-transform duration-300"
                      />
                    </div>
                    <div className="ml-4 flex-grow">
                      <h3
                        className="text-lg font-bold text-theme-secondary-light dark:text-theme-secondary-dark group-hover:text-theme-secondary-light dark:group-hover:text-theme-secondary-dark 
                                   transition-colors duration-300"
                      >
                        {edu.degree}
                      </h3>
                      <p className="text-theme-text-primary-light dark:text-theme-text-primary-dark font-medium">
                        {edu.institution}
                      </p>
                      {edu.location && (
                        <p className="text-sm text-theme-text-secondary-light dark:text-theme-text-secondary-dark/80 flex items-center mt-1">
                          <svg
                            className="w-4 h-4 mr-1"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                          </svg>
                          {edu.location}
                        </p>
                      )}
                      <div className="mt-2 space-y-1">
                        <p className="text-sm text-theme-text-secondary-light dark:text-theme-text-secondary-dark/80 flex items-center">
                          <svg
                            className="w-4 h-4 mr-1"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                            />
                          </svg>
                          {edu.period}
                        </p>
                        {edu.duration && (
                          <p className="text-sm text-theme-text-secondary-light dark:text-theme-text-secondary-dark/80 flex items-center">
                            <svg
                              className="w-4 h-4 mr-1"
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
                            {edu.duration} • {edu.type}
                          </p>
                        )}
                        {edu.score && (
                          <p className="text-sm text-theme-text-secondary-light dark:text-theme-text-secondary-dark font-medium flex items-center">
                            <svg
                              className="w-4 h-4 mr-1"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                              />
                            </svg>
                            {edu.score}
                          </p>
                        )}
                      </div>
                      {edu.achievements && edu.achievements.length > 0 && (
                        <div className="mt-3 space-y-1">
                          <p className="text-sm font-medium text-theme-text-secondary-light dark:text-theme-text-secondary-dark flex items-center">
                            <svg
                              className="w-4 h-4 mr-1"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                              />
                            </svg>
                            Achievements:
                          </p>
                          <ul className="list-none space-y-1">
                            {edu.achievements.map((achievement, idx) => (
                              <li
                                key={idx}
                                className="text-sm text-theme-text-secondary-light dark:text-theme-text-secondary-dark/90 flex items-start"
                              >
                                <span className="w-1.5 h-1.5 rounded-full bg-theme-secondary-light dark:bg-theme-secondary-dark mt-1.5 mr-2 flex-shrink-0" />
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Institution Logos */}
              <div className="mt-8 flex items-center justify-center gap-8">
                <motion.img
                  src="/experiance/kvs-logo.png"
                  alt="KVS Logo"
                  className="w-16 h-16 object-contain filter dark:brightness-90 hover:scale-110 transition-transform duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                />
                <motion.img
                  src="/experiance/techno-india.png"
                  alt="Techno India Logo"
                  className="w-16 h-16 object-contain filter dark:brightness-90 hover:scale-110 transition-transform duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                />
                <motion.img
                  src="/experiance/bcet-logo.png"
                  alt="BCET Logo"
                  className="w-16 h-16 object-contain filter dark:brightness-90 hover:scale-110 transition-transform duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                />
              </div>
            </motion.div>

            {/* Certifications */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-theme-bg-secondary-light dark:bg-theme-bg-secondary-dark p-6 rounded-xl border border-theme-text-secondary-light/20 dark:border-theme-text-secondary-dark/20 shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <h2 className="heading text-2xl font-bold text-theme-secondary-light dark:text-theme-secondary-dark text-center mb-6">
                Professional Certifications
              </h2>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={cert.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    className="group bg-theme-bg-tertiary-light dark:bg-theme-bg-tertiary-dark p-4 rounded-lg hover:bg-theme-bg-tertiary-light/80 dark:hover:bg-theme-bg-tertiary-dark/80 transform hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-theme-text-secondary-light/10 dark:hover:border-theme-text-secondary-dark/10"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center">
                        <div className="p-2 rounded-lg bg-theme-text-secondary-light/10 dark:bg-theme-text-secondary-dark/10 group-hover:bg-theme-text-secondary-light/20 dark:group-hover:bg-theme-text-secondary-dark/20 transition-colors duration-300 mr-4">
                          {cert.issuer === "Dell Technologies" ||
                          cert.issuer === "Dell EMC" ? (
                            <svg
                              className="w-6 h-6 text-blue-600 dark:text-blue-400"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                            >
                              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                            </svg>
                          ) : cert.issuer === "Google Cloud Skills Boost" ? (
                            <svg
                              className="w-6 h-6 text-green-600 dark:text-green-400"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                            >
                              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                            </svg>
                          ) : (
                            <svg
                              className="w-6 h-6 text-purple-600 dark:text-purple-400"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                            >
                              <path d="M12 14l9-5-9-5-9 5 9 5z" />
                              <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                            </svg>
                          )}
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-theme-secondary-light dark:text-theme-secondary-dark group-hover:text-theme-secondary-light dark:group-hover:text-theme-secondary-dark transition-colors duration-300">
                            {cert.title}
                          </h3>
                          <p className="text-theme-text-primary-light dark:text-theme-text-primary-dark font-medium">
                            {cert.issuer}
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-col items-end">
                        {cert.issueDate && (
                          <span className="text-sm text-theme-text-secondary-light dark:text-theme-text-secondary-dark flex items-center">
                            <svg
                              className="w-4 h-4 mr-1"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                              />
                            </svg>
                            Issued {cert.issueDate}
                          </span>
                        )}
                        {cert.credentialId && (
                          <span className="text-sm text-theme-text-secondary-light dark:text-theme-text-secondary-dark flex items-center">
                            <svg
                              className="w-4 h-4 mr-1"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                              />
                            </svg>
                            Cert ID: {cert.credentialId}
                          </span>
                        )}
                        {cert.link && (
                          <a
                            href={cert.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center text-theme-text-secondary-light dark:text-theme-text-secondary-dark hover:text-theme-secondary-light dark:hover:text-theme-secondary-dark transition-colors duration-300 group/link mt-1"
                          >
                            <span className="mr-2 text-sm">View Badge</span>
                            <svg
                              className="w-5 h-5 transform group-hover/link:translate-x-1 transition-transform duration-300"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                              />
                            </svg>
                          </a>
                        )}
                      </div>
                    </div>
                    <p className="text-sm text-theme-text-secondary-light dark:text-theme-text-secondary-dark mt-2">
                      {cert.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Experience;
