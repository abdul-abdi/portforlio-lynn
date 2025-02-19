'use client';

import { motion } from 'framer-motion';
import { FaGraduationCap, FaCode, FaDatabase, FaLaptopCode, FaServer, FaMobileAlt, FaPython, FaJs } from 'react-icons/fa';

const skills = [
  {
    icon: <FaPython className="w-6 h-6" />,
    name: "Programming Languages",
    description: "Python, C#"
  },
  {
    icon: <FaCode className="w-6 h-6" />,
    name: "Web Development",
    description: "React, Django, HTML, CSS, JavaScript"
  },
  {
    icon: <FaDatabase className="w-6 h-6" />,
    name: "Database Management",
    description: "MySQL"
  },
  {
    icon: <FaLaptopCode className="w-6 h-6" />,
    name: "Technical Skills",
    description: "Web Development, IoT Projects, API Integration"
  },
  {
    icon: <FaServer className="w-6 h-6" />,
    name: "Cloud & DevOps",
    description: "Microsoft Azure, AWS"
  },
  {
    icon: <FaGraduationCap className="w-6 h-6" />,
    name: "Soft Skills",
    description: "Communication, Teamwork, Problem-Solving"
  }
];

const About = () => {
  const education = [
    {
      school: "Zetech University",
      degree: "Bachelor of Science in Information Technology",
      duration: "Expected Graduation: November 2025",
      achievements: [
        "Active member of the I TECH Club",
        "Contributed to Smart Dustbin IoT project",
        "Focusing on web development and programming"
      ]
    },
    {
      school: "Chania Girls High School",
      duration: "2017 – 2022",
      achievements: [
        "Member of St. John Ambulance, working with a dedicated team",
        "Participated in English and Kiswahili clubs, enhancing communication skills through debates",
        "Graduated with C+ grade, securing university admission through KUCCPS"
      ]
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-black via-purple-950/10 to-black relative">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Motivated IT student with a passion for technology and innovation. Currently pursuing my Bachelor&apos;s degree 
            at Zetech University, I combine academic excellence with practical experience in web development, 
            programming, and database management. My journey is marked by active participation in tech clubs, 
            hackathons, and real-world projects.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-gradient-to-br from-purple-900/20 to-black border border-purple-500/20 backdrop-blur-sm
                hover:border-purple-500/40 transition-colors group"
            >
              <div className="flex items-center mb-4">
                <div className="p-3 rounded-lg bg-purple-500/10 text-purple-400 group-hover:text-purple-300 transition-colors">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-semibold ml-4 text-gray-100">{skill.name}</h3>
              </div>
              <p className="text-gray-400">{skill.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="space-y-12">
          <h3 className="text-2xl font-bold text-center mb-8 bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent">
            Education
          </h3>
          {education.map((edu, index) => (
            <motion.div
              key={edu.school}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-gradient-to-br from-purple-900/20 to-black border border-purple-500/20 rounded-2xl p-6"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-purple-500/10 text-purple-400">
                  <FaGraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-100">{edu.school}</h4>
                  {edu.degree && (
                    <p className="text-purple-300 mt-1">{edu.degree}</p>
                  )}
                  <p className="text-gray-400 mt-1">{edu.duration}</p>
                  <ul className="mt-4 space-y-2">
                    {edu.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-center gap-2 text-gray-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-16 text-center"
        >
          <a
            href="/LYNN KATHOMI_CV.docx"
            download="Lynn_Kathomi_CV.docx"
            className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full
              hover:opacity-90 transition-opacity font-medium group"
          >
            View Full Resume
            <svg
              className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 