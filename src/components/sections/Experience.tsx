'use client';

import { motion } from 'framer-motion';
import React from 'react';
import { 
  FaTrophy,
  FaLaptopCode,
  FaUsers,
  FaRocket,
  FaLightbulb,
  FaBriefcase,
  FaChalkboardTeacher,
  FaSatellite,
  FaFemale,
  FaMobile
} from 'react-icons/fa';

const hackathonExperience = [
  {
    name: "NASA Space Apps Challenge",
    year: "2024",
    icon: <FaSatellite className="w-6 h-6" />,
    role: "Team Member - Space Net",
    description: "Participated in developing innovative space solutions, contributing to space-related challenges and data analysis.",
    highlights: [
      "Worked with NASA's open data",
      "Developed space-focused solutions",
      "International collaboration"
    ],
    skills: ["Data Analysis", "Space Technology", "Team Collaboration"]
  },
  {
    name: "MullaHacks 1.0",
    year: "2024",
    icon: <FaTrophy className="w-6 h-6" />,
    achievement: "3rd Place Winner",
    role: "Team Member",
    description: "Secured 3rd place with the team project Fimal, a versatile crowdfunding platform.",
    highlights: [
      "Developed crowdfunding platform",
      "Secured 3rd place position",
      "Implemented key features"
    ],
    skills: ["Web Development", "Team Collaboration", "Problem Solving"]
  },
  {
    name: "SheHacks Hackathon",
    year: "2023",
    icon: <FaFemale className="w-6 h-6" />,
    role: "Team Member",
    description: "Contributed to a winning team focusing on solutions for women in technology.",
    highlights: [
      "Developed women-focused tech solutions",
      "Winning team member",
      "Innovative problem-solving"
    ],
    skills: ["Innovation", "Gender Inclusion", "Technology Solutions"]
  },
  {
    name: "Africa's Talking Hackathon",
    year: "2023",
    icon: <FaMobile className="w-6 h-6" />,
    role: "Developer",
    description: "Developed solutions leveraging APIs for mobile and payment integration in African markets.",
    highlights: [
      "API Integration",
      "Mobile Solutions",
      "Payment Systems"
    ],
    skills: ["API Development", "Mobile Integration", "Payment Solutions"]
  }
];

const workExperience = [
  {
    title: "Planner and Organizer",
    company: "Zetech University Innovation Event",
    period: "July 2024",
    icon: <FaRocket className="w-6 h-6" />,
    description: "Coordinated and managed logistics for the university's innovation event, ensuring successful execution.",
    achievements: [
      "Event planning and coordination",
      "Logistics management",
      "Team leadership"
    ],
    skills: ["Event Planning", "Team Leadership", "Organization"]
  },
  {
    title: "Intern Coding Instructor",
    company: "Power Learn Project",
    period: "2023",
    icon: <FaChalkboardTeacher className="w-6 h-6" />,
    description: "Taught students foundational coding skills, including web development and programming concepts.",
    achievements: [
      "Curriculum development",
      "Student mentoring",
      "Technical instruction"
    ],
    skills: ["Teaching", "Web Development", "Programming"]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-black via-purple-950/10 to-black relative">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent">
            Experience & Achievements
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            From hackathons to professional experience, here&apos;s how I&apos;m turning ideas into reality and growing as a developer.
          </p>
        </motion.div>

        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-6 inline-flex items-center gap-3">
              <FaBriefcase className="text-purple-400" />
              <span>Professional Experience</span>
            </h3>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {workExperience.map((work, index) => (
              <motion.div
                key={work.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-gradient-to-br from-purple-900/20 to-black border border-purple-500/20 
                  rounded-xl p-6 hover:border-purple-500/40 transition-colors group"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 rounded-lg bg-purple-500/10 text-purple-400 group-hover:text-purple-300 transition-colors">
                    {work.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-100">{work.title}</h4>
                    <p className="text-purple-300">{work.company}</p>
                    <p className="text-sm text-gray-400">{work.period}</p>
                  </div>
                </div>
                <p className="text-gray-300 mb-4">{work.description}</p>
                <div className="space-y-4">
                  <div>
                    <h5 className="text-sm font-semibold text-purple-300 mb-2">Key Achievements</h5>
                    <ul className="space-y-2">
                      {work.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-center gap-2 text-gray-400">
                          <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {work.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 text-sm bg-purple-500/10 text-purple-300 rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-6 inline-flex items-center gap-3">
              <FaLightbulb className="text-purple-400" />
              <span>Hackathon Adventures</span>
            </h3>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {hackathonExperience.map((hackathon, index) => (
              <motion.div
                key={hackathon.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-purple-900/20 to-black border border-purple-500/20 
                  rounded-xl p-6 hover:border-purple-500/40 transition-colors group h-full flex flex-col"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 rounded-lg bg-purple-500/10 text-purple-400 group-hover:text-purple-300 transition-colors">
                    {hackathon.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-100">{hackathon.name}</h4>
                    <p className="text-purple-300">{hackathon.role}</p>
                    <p className="text-sm text-gray-400">{hackathon.year}</p>
                  </div>
                </div>

                {hackathon.achievement && (
                  <div className="mb-4">
                    <span className="inline-flex items-center gap-2 px-3 py-1 bg-yellow-500/10 text-yellow-300 rounded-full text-sm">
                      <FaTrophy className="w-4 h-4" />
                      {hackathon.achievement}
                    </span>
                  </div>
                )}

                <p className="text-gray-300 mb-4 flex-grow">{hackathon.description}</p>

                <div className="space-y-4">
                  <div>
                    <h5 className="text-sm font-semibold text-purple-300 mb-2">Highlights</h5>
                    <ul className="space-y-2">
                      {hackathon.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-center gap-2 text-gray-400">
                          <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {hackathon.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 text-sm bg-purple-500/10 text-purple-300 rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience; 