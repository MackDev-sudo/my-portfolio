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
    },
    {
      title: "EMC VCE",
      issuer: "Dell EMC",
    },
    {
      title: "Build a Website on Google",
      issuer: "Google Cloud Skills Boost",
      link: "https://partner.cloudskillsboost.google/public_profiles/366d020b-dd57-4b85-95b6-3bcded00fbf7/badges/3182262",
    },
    {
      title: "Create and Manage Cloud Resources",
      issuer: "Google Cloud Skills Boost",
      link: "https://partner.cloudskillsboost.google/public_profiles/366d020b-dd57-4b85-95b6-3bcded00fbf7/badges/3155377",
    },
    {
      title: "Azure Fundamentals (AZ900)",
      issuer: "Infosys",
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
      <section className="py-20 bg-primary">
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
                    <div className="ml-6 bg-tertiary p-6 rounded-lg flex-grow">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-textPrimary">
                            {experience.title}
                          </h3>
                          <p className="text-textSecondary">
                            {experience.company}
                          </p>
                        </div>
                        <span className="text-sm text-textSecondary">
                          {experience.period}
                        </span>
                      </div>
                      <p className="text-textSecondary mb-4">
                        {experience.description}
                      </p>
                      <ul className="space-y-2">
                        {experience.achievements.map((achievement) => (
                          <li
                            key={achievement}
                            className="flex items-start text-textSecondary"
                          >
                            <span className="w-2 h-2 bg-secondary rounded-full mt-2 mr-2" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  {index < professionalExperience.length - 1 && (
                    <div className="absolute left-4 top-8 bottom-0 w-0.5 bg-textSecondary" />
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
                  <div className="ml-6 bg-tertiary p-6 rounded-lg flex-grow">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-textPrimary">
                          {developmentExperience.title}
                        </h3>
                        <p className="text-textSecondary">
                          {developmentExperience.company}
                        </p>
                      </div>
                      <span className="text-sm text-textSecondary">
                        {developmentExperience.period}
                      </span>
                    </div>
                    <p className="text-textSecondary mb-4">
                      {developmentExperience.description}
                    </p>
                    <ul className="space-y-2">
                      {developmentExperience.achievements.map((achievement) => (
                        <li
                          key={achievement}
                          className="flex items-start text-textSecondary"
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
      <section className="py-20 bg-tertiary">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <AcademicCapIcon className="h-8 w-8 text-secondary mx-auto mb-3 animate-bounce" />
            <h2 className="heading text-3xl font-bold text-secondary">
              Education & Certifications
            </h2>
            <p className="text-textSecondary mt-4 max-w-4xl mx-auto">
              A strong foundation in computer science combined with
              industry-recognized certifications in enterprise technologies and
              cloud platforms.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Education */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-primary/50 backdrop-blur-sm p-8 rounded-xl border border-secondary/10 
                        shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <h2 className="heading text-2xl font-bold text-secondary mb-8 text-center">
                Academic Journey
              </h2>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <motion.div
                    key={edu.degree}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    className="group bg-tertiary p-6 rounded-lg flex items-start hover:bg-tertiary/80 
                              transform hover:-translate-y-1 transition-all duration-300"
                  >
                    <div
                      className="p-3 bg-secondary/10 rounded-lg group-hover:bg-secondary/20 
                                  transition-colors duration-300"
                    >
                      <edu.icon
                        className="h-8 w-8 text-secondary group-hover:scale-110 
                                         transition-transform duration-300"
                      />
                    </div>
                    <div className="ml-4 flex-grow">
                      <h3
                        className="text-lg font-bold text-textPrimary group-hover:text-secondary 
                                   transition-colors duration-300"
                      >
                        {edu.degree}
                      </h3>
                      <p className="text-textSecondary font-medium">
                        {edu.institution}
                      </p>
                      {edu.location && (
                        <p className="text-sm text-textSecondary/80">
                          {edu.location}
                        </p>
                      )}
                      <div className="mt-2 space-y-1">
                        <p className="text-sm text-textSecondary/80">
                          {edu.period}
                        </p>
                        {edu.duration && (
                          <p className="text-sm text-textSecondary/80">
                            {edu.duration} • {edu.type}
                          </p>
                        )}
                        {edu.score && (
                          <p className="text-sm text-secondary font-medium">
                            {edu.score}
                          </p>
                        )}
                      </div>
                      {edu.achievements && edu.achievements.length > 0 && (
                        <div className="mt-3 space-y-1">
                          <p className="text-sm font-medium text-secondary">
                            Achievements:
                          </p>
                          <ul className="list-disc list-inside">
                            {edu.achievements.map((achievement, idx) => (
                              <li
                                key={idx}
                                className="text-sm text-textSecondary/90"
                              >
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
            </motion.div>

            {/* Certifications */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-primary/50 backdrop-blur-sm p-8 rounded-xl border border-secondary/10 
                        shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <h2 className="heading text-2xl font-bold text-secondary mb-8 text-center">
                Professional Certifications
              </h2>
              <div className="space-y-6">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={cert.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    className="group bg-tertiary p-6 rounded-lg hover:bg-tertiary/80 
                              transform hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h3
                        className="text-lg font-bold text-textPrimary group-hover:text-secondary 
                                   transition-colors duration-300"
                      >
                        {cert.title}
                      </h3>
                      {cert.link && (
                        <a
                          href={cert.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-secondary hover:text-opacity-80 text-sm inline-flex 
                                   items-center group-hover:scale-105 transition-transform duration-300"
                        >
                          View Certificate
                          <svg
                            className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300"
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
                    <p className="text-textSecondary font-medium">
                      {cert.issuer}
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
