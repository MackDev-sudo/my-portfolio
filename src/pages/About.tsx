import { motion } from "framer-motion";
import React from "react";
import {
  UserIcon,
  BriefcaseIcon,
  HeartIcon,
  ServerIcon,
  CloudIcon,
  CodeBracketIcon,
  DevicePhoneMobileIcon,
  AcademicCapIcon,
  RocketLaunchIcon,
  ArrowPathIcon,
  CubeIcon,
} from "@heroicons/react/24/outline";

const About = () => {
  const primarySkills = [
    {
      category: "Storage & Infrastructure",
      icon: (
        <ServerIcon className="h-6 w-6 text-theme-secondary-light dark:text-theme-secondary-dark mb-3" />
      ),
      items: [
        "Enterprise Storage",
        "Infrastructure Design",
        "System Integration",
        "Disaster Recovery",
        "Storage Automation",
        "Performance Tuning",
      ],
    },
    {
      category: "Automation & Cloud",
      icon: (
        <CloudIcon className="h-6 w-6 text-theme-secondary-light dark:text-theme-secondary-dark mb-3" />
      ),
      items: [
        "Infrastructure Automation",
        "Ansible",
        "Cloud Technologies",
        "VMware",
        "AWS",
        "DevOps",
      ],
    },
  ];

  const secondarySkills = [
    {
      category: "Web Development",
      icon: (
        <CodeBracketIcon className="h-6 w-6 text-theme-secondary-light dark:text-theme-secondary-dark mb-3" />
      ),
      items: [
        "React",
        "TypeScript",
        "Node.js",
        "Express.js",
        "MongoDB",
        "RESTful APIs",
      ],
    },
    {
      category: "Mobile Development",
      icon: (
        <DevicePhoneMobileIcon className="h-6 w-6 text-theme-secondary-light dark:text-theme-secondary-dark mb-3" />
      ),
      items: [
        "Android Development",
        "Kotlin",
        "Java",
        "Material Design",
        "Firebase",
        "Google Play Console",
      ],
    },
  ];

  const productExpertise = [
    {
      category: "Dell EMC Solutions",
      icon: (
        <ServerIcon className="h-6 w-6 text-theme-secondary-light dark:text-theme-secondary-dark mb-3" />
      ),
      items: [
        "Dell EMC VNX",
        "Dell EMC VNXe",
        "Dell EMC Clariion",
        "Dell EMC Isilon",
        "Dell EMC PowerFlex",
        "Dell EMC Unity",
        "Dell EMC PowerStor",
      ],
    },
    {
      category: "HPE Solutions",
      icon: (
        <ServerIcon className="h-6 w-6 text-theme-secondary-light dark:text-theme-secondary-dark mb-3" />
      ),
      items: ["HPE 3PAR", "HPE Alletra", "HPE Nimble", "HPE OneView"],
    },
    {
      category: "Enterprise Storage",
      icon: (
        <CubeIcon className="h-6 w-6 text-theme-secondary-light dark:text-theme-secondary-dark mb-3" />
      ),
      items: [
        "Pure Storage",
        "Infinidat Storage",
        "NetApp AFF",
        "Veeam NetBackup",
        "Brocade Switch",
      ],
    },
    {
      category: "Virtualization & Infrastructure",
      icon: (
        <CloudIcon className="h-6 w-6 text-theme-secondary-light dark:text-theme-secondary-dark mb-3" />
      ),
      items: ["vSAN", "Linux", "VMware vSphere"],
    },
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  return (
    <div className="pt-12">
      {/* Personal Journey Section */}
      <section className="mt-12 mb-6 bg-theme-bg-primary-light dark:bg-theme-bg-primary-dark">
        <div className="container mx-auto px-4">
          <motion.div
            initial="initial"
            animate="animate"
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <UserIcon className="h-8 w-8 text-theme-secondary-light dark:text-theme-secondary-dark mx-auto mb-3 animate-bounce" />
            <h2 className="heading text-3xl font-bold text-theme-secondary-light dark:text-theme-secondary-dark">
              Personal Journey
            </h2>
            <p className="text-theme-text-secondary-light dark:text-theme-text-secondary-dark mt-4 max-w-4xl mx-auto">
              A journey across India's diverse landscapes, from bustling tech
              hubs to serene towns, shaping both personal and professional
              growth.
            </p>
          </motion.div>
          <div className="max-w-6xl mx-auto text-theme-text-secondary-light dark:text-theme-text-secondary-dark space-y-6">
            <motion.div
              className="bg-theme-bg-secondary-light dark:bg-theme-bg-secondary-dark backdrop-blur-sm p-6 rounded-xl border border-theme-secondary-light/10 dark:border-theme-secondary-dark/10 
                        shadow-lg hover:shadow-2xl transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-xl font-bold text-theme-secondary-light dark:text-theme-secondary-dark mb-4">
                Cultural Roots & Early Life
              </h3>
              <p className="leading-relaxed">
                Born in the culturally rich city of Vadodara, Gujarat my journey
                has taken me across some of India's most dynamic and
                historically significant cities. From the fast-paced energy of
                Mumbai to the timeless grandeur of Delhi, from the golden sands
                of Jodhpur to the artistic soul of Kolkata, each place has
                shaped my perspective and deepened my appreciation for India's
                diversity. Growing up, I had the privilege of experiencing the
                vibrant contrasts between these cities-their traditions,
                languages, and way of life-all of which have contributed to my
                adaptability and global outlook.
              </p>
            </motion.div>

            <motion.div
              className="bg-theme-bg-secondary-light dark:bg-theme-bg-secondary-dark backdrop-blur-sm p-6 rounded-xl border border-theme-secondary-light/10 dark:border-theme-secondary-dark/10 
                        shadow-lg hover:shadow-2xl transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h3 className="text-xl font-bold text-theme-secondary-light dark:text-theme-secondary-dark mb-4">
                Professional Journey & Current Life
              </h3>
              <p className="leading-relaxed">
                Currently, I reside in Mogra, a serene yet lively town nestled
                in West Bengal's Hooghly district, just 60 kilometers from
                Kolkata. Life here offers the perfect balance between the
                fast-paced world of technology that I work in and the warmth of
                a close-knit community. Before settling here, my professional
                journey took me through India's tech hubs, where I spent seven
                enriching years in Bangalore-immersed in innovation and
                cutting-edge advancements-followed by a year in Pune, another
                thriving center of technology and enterprise. These experiences
                have played a crucial role in shaping my career, allowing me to
                collaborate with leading enterprises and stay at the forefront
                of the ever-evolving IT landscape.
              </p>
            </motion.div>

            <motion.div
              className="bg-theme-bg-secondary-light dark:bg-theme-bg-secondary-dark backdrop-blur-sm p-6 rounded-xl border border-theme-secondary-light/10 dark:border-theme-secondary-dark/10 
                        shadow-lg hover:shadow-2xl transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <h3 className="text-xl font-bold text-theme-secondary-light dark:text-theme-secondary-dark mb-4">
                Family & Personal Values
              </h3>
              <p className="leading-relaxed">
                Beyond my professional endeavors, I am blessed with a loving and
                supportive family that makes every achievement worthwhile. My
                parents and sister have been my pillars of strength, guiding me
                through every phase of life. My wife, a constant source of
                inspiration, and my delightful daughter, who fills our home with
                joy and laughter, are my greatest blessings. Together, they
                remind me that while professional success is fulfilling, true
                happiness lies in the moments shared with loved ones. As I
                continue my journey, I look forward to new opportunities, both
                in my career and in life, embracing each experience with passion
                and purpose.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Professional Expertise Section */}
      <section className="pt-6 bg-theme-bg-primary-light dark:bg-theme-bg-primary-dark">
        <div className="container mx-auto px-4">
          <motion.div
            initial="initial"
            animate="animate"
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <BriefcaseIcon className="h-8 w-8 text-theme-secondary-light dark:text-theme-secondary-dark mx-auto mb-3 animate-bounce" />
            <h2 className="heading text-3xl font-bold text-theme-secondary-light dark:text-theme-secondary-dark">
              Professional Expertise
            </h2>
            <p className="text-theme-text-secondary-light dark:text-theme-text-secondary-dark mt-4 max-w-4xl mx-auto">
              A decade of excellence in enterprise storage solutions, system
              integration, and infrastructure automation, driving technological
              innovation and operational efficiency.
            </p>
          </motion.div>
          <div className="max-w-6xl mx-auto text-theme-text-secondary-light dark:text-theme-text-secondary-dark space-y-6">
            <motion.div
              className="bg-theme-bg-secondary-light dark:bg-theme-bg-secondary-dark backdrop-blur-sm p-6 rounded-xl border border-theme-secondary-light/10 dark:border-theme-secondary-dark/10 
                        shadow-lg hover:shadow-2xl transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h3 className="text-xl font-bold text-theme-secondary-light dark:text-theme-secondary-dark mb-4">
                Storage Technology Leadership
              </h3>
              <p className="leading-relaxed mb-4">
                With over nine years of dedicated expertise in enterprise
                storage and infrastructure, I've established myself as a Storage
                Technology Specialist, leading critical initiatives across
                diverse industry verticals. My journey has been marked by
                successful implementations of large-scale storage solutions,
                where I've consistently delivered high-performance, scalable
                infrastructure that drives business growth.
              </p>
            </motion.div>

            <motion.div
              className="bg-theme-bg-secondary-light dark:bg-theme-bg-secondary-dark backdrop-blur-sm p-6 rounded-xl border border-theme-secondary-light/10 dark:border-theme-secondary-dark/10 
                        shadow-lg hover:shadow-2xl transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <h3 className="text-xl font-bold text-theme-secondary-light dark:text-theme-secondary-dark mb-4">
                System Integration & Automation
              </h3>
              <p className="leading-relaxed mb-4">
                My professional journey has been deeply rooted in mastering
                system integration and developing sophisticated automation
                frameworks. I've successfully led the implementation of
                enterprise-wide automation initiatives, significantly reducing
                manual operations and enhancing system reliability. By
                leveraging industry-leading tools and best practices, I've
                developed automated workflows that streamline storage
                provisioning, monitoring, and maintenance processes.
              </p>
              <p className="leading-relaxed">
                In the realm of infrastructure automation, I've pioneered the
                development of custom solutions that bridge gaps between
                different systems and platforms. My expertise in scripting
                languages and automation tools has enabled me to create
                efficient, scalable solutions that significantly reduce
                operational overhead while maintaining robust security and
                compliance standards.
              </p>
            </motion.div>

            <motion.div
              className="bg-theme-bg-secondary-light dark:bg-theme-bg-secondary-dark backdrop-blur-sm p-6 rounded-xl border border-theme-secondary-light/10 dark:border-theme-secondary-dark/10 
                        shadow-lg hover:shadow-2xl transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <h3 className="text-xl font-bold text-theme-secondary-light dark:text-theme-secondary-dark mb-4">
                Future-Forward Approach
              </h3>
              <p className="leading-relaxed mb-4">
                Currently, I'm expanding my expertise in cloud technologies and
                infrastructure automation, staying at the forefront of
                technological advancement in the storage industry. My focus
                includes mastering hybrid cloud architectures, containerization
                technologies, and modern DevOps practices, ensuring that I can
                deliver cutting-edge solutions that meet evolving business
                needs.
              </p>
              <p className="leading-relaxed">
                I maintain a strong commitment to continuous learning and
                innovation, regularly engaging with emerging technologies and
                industry trends. This forward-thinking approach allows me to
                architect solutions that not only address current challenges but
                are also prepared for future technological evolution. My
                expertise in both traditional storage systems and modern cloud
                technologies positions me uniquely to guide organizations
                through their digital transformation journeys.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Technical Passion Section */}
      <section className="pt-6 bg-theme-bg-primary-light dark:bg-theme-bg-primary-dark">
        <div className="container mx-auto px-4">
          <motion.div
            initial="initial"
            animate="animate"
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <HeartIcon className="h-8 w-8 text-theme-secondary-light dark:text-theme-secondary-dark mx-auto mb-3 animate-bounce" />
            <h2 className="heading text-3xl font-bold text-theme-secondary-light dark:text-theme-secondary-dark">
              Technical Passion
            </h2>
            <p className="text-theme-text-secondary-light dark:text-theme-text-secondary-dark mt-4 max-w-4xl mx-auto">
              Driven by an unwavering passion for technology, constantly
              exploring and innovating across multiple domains of software
              development and system architecture.
            </p>
          </motion.div>
          <div className="max-w-6xl mx-auto text-theme-text-secondary-light dark:text-theme-text-secondary-dark space-y-6">
            <motion.div
              className="bg-theme-bg-secondary-light dark:bg-theme-bg-secondary-dark backdrop-blur-sm p-6 rounded-xl border border-theme-secondary-light/10 dark:border-theme-secondary-dark/10 
                        shadow-lg hover:shadow-2xl transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h3 className="text-xl font-bold text-theme-secondary-light dark:text-theme-secondary-dark mb-4">
                Mobile Development Journey
              </h3>
              <p className="leading-relaxed mb-4">
                My journey into software development began with a fascination
                for mobile applications. Starting with Android development, I've
                successfully published multiple applications on the Google Play
                Store, each representing a unique challenge and learning
                opportunity. From utility apps to complex business solutions,
                I've worked with various Android frameworks and libraries,
                implementing material design principles and modern UI/UX
                practices.
              </p>
              <p className="leading-relaxed">
                Through mobile development, I've gained extensive experience in
                Kotlin and Java, mastering Android's architecture components,
                lifecycle management, and performance optimization. My
                applications have served thousands of users, providing valuable
                insights into user behavior, app analytics, and the importance
                of continuous improvement based on user feedback.
              </p>
            </motion.div>

            <motion.div
              className="bg-theme-bg-secondary-light dark:bg-theme-bg-secondary-dark backdrop-blur-sm p-6 rounded-xl border border-theme-secondary-light/10 dark:border-theme-secondary-dark/10 
                        shadow-lg hover:shadow-2xl transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <h3 className="text-xl font-bold text-theme-secondary-light dark:text-theme-secondary-dark mb-4">
                Web Development Evolution
              </h3>
              <p className="leading-relaxed mb-4">
                My enthusiasm for development naturally evolved into full-stack
                web development, where I've embraced modern technologies and
                frameworks. Working with React, TypeScript, and Node.js has
                allowed me to create sophisticated web applications that combine
                powerful functionality with intuitive user experiences. I've
                developed a strong appreciation for clean code architecture,
                component reusability, and state management.
              </p>
              <p className="leading-relaxed">
                In the backend realm, I've worked extensively with Express.js
                and MongoDB, building robust RESTful APIs and implementing
                efficient database solutions. My focus has always been on
                creating scalable, maintainable applications that follow
                industry best practices and design patterns. This full-stack
                expertise enables me to architect comprehensive solutions that
                seamlessly integrate frontend and backend technologies.
              </p>
            </motion.div>

            <motion.div
              className="bg-theme-bg-secondary-light dark:bg-theme-bg-secondary-dark backdrop-blur-sm p-6 rounded-xl border border-theme-secondary-light/10 dark:border-theme-secondary-dark/10 
                        shadow-lg hover:shadow-2xl transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <h3 className="text-xl font-bold text-theme-secondary-light dark:text-theme-secondary-dark mb-4">
                Innovation & Continuous Learning
              </h3>
              <p className="leading-relaxed mb-4">
                My dual expertise in storage technology and software development
                provides me with a unique perspective in approaching technical
                challenges. This combination allows me to bridge the gap between
                infrastructure and application development, creating solutions
                that are not only functionally robust but also optimized for
                performance and scalability.
              </p>
              <p className="leading-relaxed">
                I maintain an active commitment to continuous learning,
                regularly exploring emerging technologies and frameworks.
                Whether it's experimenting with new development tools,
                contributing to open-source projects, or implementing innovative
                solutions, I'm constantly pushing the boundaries of what's
                possible. This passion for technology and innovation drives me
                to create solutions that make a meaningful impact while staying
                at the forefront of technological advancement.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Primary Skills Section */}
      <section className="py-12 bg-theme-bg-primary-light dark:bg-theme-bg-primary-dark">
        <div className="container mx-auto px-4">
          <motion.div
            initial="initial"
            animate="animate"
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <AcademicCapIcon className="h-8 w-8 text-theme-secondary-light dark:text-theme-secondary-dark mx-auto mb-3 animate-bounce" />
            <h2 className="heading text-3xl font-bold text-theme-secondary-light dark:text-theme-secondary-dark">
              Primary Skills & Expertise
            </h2>
            <p className="text-theme-text-secondary-light dark:text-theme-text-secondary-dark mt-4 max-w-4xl mx-auto">
              Specialized in enterprise storage solutions and infrastructure
              automation, bringing years of hands-on experience in designing and
              implementing robust systems.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {primarySkills.map((skillSet, index) => (
              <motion.div
                key={skillSet.category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="group bg-theme-bg-secondary-light dark:bg-theme-bg-secondary-dark backdrop-blur-sm p-6 rounded-xl border border-theme-secondary-light/10 dark:border-theme-secondary-dark/10 
                          shadow-lg hover:shadow-2xl hover:bg-theme-bg-secondary-light/20 dark:hover:bg-theme-bg-secondary-dark/20 transition-all duration-300 
                          transform hover:-translate-y-1"
              >
                <div className="text-center mb-4">
                  <div className="inline-block p-3 bg-theme-secondary-light/10 dark:bg-theme-secondary-dark/10 rounded-lg">
                    {React.cloneElement(skillSet.icon, {
                      className:
                        "h-8 w-8 text-theme-secondary-light dark:text-theme-secondary-dark group-hover:scale-110 transition-transform duration-300",
                    })}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-theme-secondary-light dark:text-theme-secondary-dark mb-4 text-center">
                  {skillSet.category}
                </h3>
                <div className="flex flex-wrap gap-3 justify-center">
                  {skillSet.items.map((skill) => (
                    <motion.span
                      key={skill}
                      whileHover={{ scale: 1.05 }}
                      className="px-4 py-2 bg-theme-bg-primary-light dark:bg-theme-bg-primary-dark text-theme-text-secondary-light dark:text-theme-text-secondary-dark rounded-lg text-sm 
                               hover:bg-theme-bg-secondary-light dark:hover:bg-theme-bg-secondary-dark transition-all duration-300 
                               cursor-default shadow-sm border border-theme-secondary-light/10 dark:border-theme-secondary-dark/10"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Product Expertise Section */}
      <section className="pt-6 bg-theme-bg-primary-light dark:bg-theme-bg-primary-dark">
        <div className="container mx-auto px-4">
          <motion.div
            initial="initial"
            animate="animate"
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <ServerIcon className="h-8 w-8 text-theme-secondary-light dark:text-theme-secondary-dark mx-auto mb-3 animate-bounce" />
            <h2 className="heading text-3xl font-bold text-theme-secondary-light dark:text-theme-secondary-dark">
              Product Expertise
            </h2>
            <p className="text-theme-text-secondary-light dark:text-theme-text-secondary-dark mt-4 max-w-4xl mx-auto">
              Comprehensive expertise across leading enterprise storage
              solutions, virtualization platforms, and infrastructure
              technologies, enabling robust and scalable implementations.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {productExpertise.map((productSet, index) => (
              <motion.div
                key={productSet.category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="group bg-theme-bg-secondary-light dark:bg-theme-bg-secondary-dark backdrop-blur-sm p-6 rounded-xl border border-theme-secondary-light/10 dark:border-theme-secondary-dark/10 
                          shadow-lg hover:shadow-2xl hover:bg-theme-bg-secondary-light/20 dark:hover:bg-theme-bg-secondary-dark/20 transition-all duration-300 
                          transform hover:-translate-y-1"
              >
                <div className="text-center mb-4">
                  <div className="inline-block p-3 bg-theme-secondary-light/10 dark:bg-theme-secondary-dark/10 rounded-lg">
                    {React.cloneElement(productSet.icon, {
                      className:
                        "h-8 w-8 text-theme-secondary-light dark:text-theme-secondary-dark group-hover:scale-110 transition-transform duration-300",
                    })}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-theme-secondary-light dark:text-theme-secondary-dark mb-4 text-center">
                  {productSet.category}
                </h3>
                <div className="flex flex-wrap gap-3 justify-center">
                  {productSet.items.map((product) => (
                    <motion.span
                      key={product}
                      whileHover={{ scale: 1.05 }}
                      className="px-4 py-2 bg-theme-bg-primary-light dark:bg-theme-bg-primary-dark text-theme-text-secondary-light dark:text-theme-text-secondary-dark rounded-lg text-sm 
                               hover:bg-theme-bg-secondary-light dark:hover:bg-theme-bg-secondary-dark transition-all duration-300 
                               cursor-default shadow-sm border border-theme-secondary-light/10 dark:border-theme-secondary-dark/10"
                    >
                      {product}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Secondary Skills Section */}
      <section className="py-12 bg-theme-bg-primary-light dark:bg-theme-bg-primary-dark">
        <div className="container mx-auto px-4">
          <motion.div
            initial="initial"
            animate="animate"
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <CodeBracketIcon className="h-8 w-8 text-theme-secondary-light dark:text-theme-secondary-dark mx-auto mb-3 animate-bounce" />
            <h2 className="heading text-3xl font-bold text-theme-secondary-light dark:text-theme-secondary-dark">
              Development Skills
            </h2>
            <p className="text-theme-text-secondary-light dark:text-theme-text-secondary-dark mt-4 max-w-4xl mx-auto">
              Passionate about creating innovative software solutions, from
              mobile applications to full-stack web development, using modern
              technologies and best practices.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {secondarySkills.map((skillSet, index) => (
              <motion.div
                key={skillSet.category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="group bg-theme-bg-secondary-light dark:bg-theme-bg-secondary-dark backdrop-blur-sm p-6 rounded-xl border border-theme-secondary-light/10 dark:border-theme-secondary-dark/10 
                          shadow-lg hover:shadow-2xl hover:bg-theme-bg-secondary-light/20 dark:hover:bg-theme-bg-secondary-dark/20 transition-all duration-300 
                          transform hover:-translate-y-1"
              >
                <div className="text-center mb-4">
                  <div className="inline-block p-3 bg-theme-secondary-light/10 dark:bg-theme-secondary-dark/10 rounded-lg">
                    {React.cloneElement(skillSet.icon, {
                      className:
                        "h-8 w-8 text-theme-secondary-light dark:text-theme-secondary-dark group-hover:scale-110 transition-transform duration-300",
                    })}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-theme-secondary-light dark:text-theme-secondary-dark mb-4 text-center">
                  {skillSet.category}
                </h3>
                <div className="flex flex-wrap gap-3 justify-center">
                  {skillSet.items.map((skill) => (
                    <motion.span
                      key={skill}
                      whileHover={{ scale: 1.05 }}
                      className="px-4 py-2 bg-theme-bg-primary-light dark:bg-theme-bg-primary-dark text-theme-text-secondary-light dark:text-theme-text-secondary-dark rounded-lg text-sm 
                               hover:bg-theme-bg-secondary-light dark:hover:bg-theme-bg-secondary-dark transition-all duration-300 
                               cursor-default shadow-sm border border-theme-secondary-light/10 dark:border-theme-secondary-dark/10"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Professional Values Section */}
      <section className="py-12 bg-theme-bg-primary-light dark:bg-theme-bg-primary-dark">
        <div className="container mx-auto px-4">
          <motion.div
            initial="initial"
            animate="animate"
            variants={fadeInUp}
            className="text-center mb-8"
          >
            <RocketLaunchIcon className="h-8 w-8 text-theme-secondary-light dark:text-theme-secondary-dark mx-auto mb-3 animate-bounce" />
            <h2 className="heading text-3xl font-bold text-theme-secondary-light dark:text-theme-secondary-dark mb-4">
              Professional Values
            </h2>
            <p className="text-theme-text-secondary-light dark:text-theme-text-secondary-dark mt-4 max-w-4xl mx-auto">
              Committed to excellence, innovation, and continuous growth in
              every professional endeavor.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="group bg-theme-bg-secondary-light dark:bg-theme-bg-secondary-dark p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 
                        border border-theme-secondary-light/10 dark:border-theme-secondary-dark/10 hover:bg-theme-bg-secondary-light/20 dark:hover:bg-theme-bg-secondary-dark/20 
                        transform hover:-translate-y-1"
            >
              <div className="text-center mb-4">
                <div className="inline-block p-3 bg-theme-secondary-light/10 dark:bg-theme-secondary-dark/10 rounded-lg">
                  <AcademicCapIcon className="h-8 w-8 text-theme-secondary-light dark:text-theme-secondary-dark group-hover:scale-110 transition-transform duration-300" />
                </div>
              </div>
              <h3 className="text-lg font-bold text-theme-secondary-light dark:text-theme-secondary-dark mb-3 text-center">
                Technical Excellence
              </h3>
              <p className="text-theme-text-secondary-light dark:text-theme-text-secondary-dark text-sm text-center">
                Committed to delivering high-performance solutions with
                meticulous attention to detail and industry best practices.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="group bg-theme-bg-secondary-light dark:bg-theme-bg-secondary-dark p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 
                        border border-theme-secondary-light/10 dark:border-theme-secondary-dark/10 hover:bg-theme-bg-secondary-light/20 dark:hover:bg-theme-bg-secondary-dark/20 
                        transform hover:-translate-y-1"
            >
              <div className="text-center mb-4">
                <div className="inline-block p-3 bg-theme-secondary-light/10 dark:bg-theme-secondary-dark/10 rounded-lg">
                  <RocketLaunchIcon className="h-8 w-8 text-theme-secondary-light dark:text-theme-secondary-dark group-hover:scale-110 transition-transform duration-300" />
                </div>
              </div>
              <h3 className="text-lg font-bold text-theme-secondary-light dark:text-theme-secondary-dark mb-3 text-center">
                Innovation & Automation
              </h3>
              <p className="text-theme-text-secondary-light dark:text-theme-text-secondary-dark text-sm text-center">
                Focus on creating innovative automation solutions that enhance
                efficiency and reduce operational complexity.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="group bg-theme-bg-secondary-light dark:bg-theme-bg-secondary-dark p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 
                        border border-theme-secondary-light/10 dark:border-theme-secondary-dark/10 hover:bg-theme-bg-secondary-light/20 dark:hover:bg-theme-bg-secondary-dark/20 
                        transform hover:-translate-y-1"
            >
              <div className="text-center mb-4">
                <div className="inline-block p-3 bg-theme-secondary-light/10 dark:bg-theme-secondary-dark/10 rounded-lg">
                  <ArrowPathIcon className="h-8 w-8 text-theme-secondary-light dark:text-theme-secondary-dark group-hover:scale-110 transition-transform duration-300" />
                </div>
              </div>
              <h3 className="text-lg font-bold text-theme-secondary-light dark:text-theme-secondary-dark mb-3 text-center">
                Continuous Growth
              </h3>
              <p className="text-theme-text-secondary-light dark:text-theme-text-secondary-dark text-sm text-center">
                Embrace continuous learning and adapt to emerging technologies
                to deliver cutting-edge solutions.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
