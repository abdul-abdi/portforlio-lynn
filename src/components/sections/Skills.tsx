'use client';

import { motion } from 'framer-motion';
import { 
  FaGraduationCap, 
  FaCode, 
  FaDatabase, 
  FaLaptopCode, 
  FaServer, 
  FaMobileAlt,
  FaCertificate,
  FaAward,
  FaUserGraduate,
  FaLightbulb
} from 'react-icons/fa';

const journeySteps = [
  {
    title: "Academic Foundation",
    icon: <FaUserGraduate className="w-8 h-8" />,
    description: "Currently pursuing BSc in Information Technology at Zetech University, where I'm building a strong theoretical foundation in computer science and software development.",
    skills: [
      {
        name: "Core Studies",
        items: ["Data Structures", "Algorithms", "Software Engineering", "Database Design"]
      }
    ]
  },
  {
    title: "Technical Skills Growth",
    icon: <FaCode className="w-8 h-8" />,
    description: "Developed practical skills through hands-on projects and continuous learning, focusing on both frontend and backend technologies.",
    skills: [
      {
        name: "Frontend",
        items: ["React.js", "Next.js", "TypeScript", "Tailwind CSS"]
      },
      {
        name: "Backend",
        items: ["Django", "Python", "RESTful APIs", "Node.js"]
      }
    ]
  },
  {
    title: "Project Experience",
    icon: <FaLightbulb className="w-8 h-8" />,
    description: "Applied my skills in real-world projects, including the Smart Dustbin IoT project and various web applications.",
    skills: [
      {
        name: "Technologies Used",
        items: ["IoT", "Sensors", "Web Development", "Database Management"]
      }
    ]
  }
];

const certifications = [
  {
    title: "Power Learn Project",
    specialization: "Software Web Development",
    date: "2023",
    icon: <FaCertificate className="w-6 h-6" />,
    description: "Completed intensive web development program focusing on modern technologies and best practices."
  },
  {
    title: "Cisco Cybersecurity",
    specialization: "Network Security Fundamentals",
    status: "In Progress",
    icon: <FaAward className="w-6 h-6" />,
    description: "Learning essential cybersecurity concepts and practical security measures."
  },
  {
    title: "Microsoft Azure",
    specialization: "Fundamentals Badge",
    date: "2023",
    icon: <FaCertificate className="w-6 h-6" />,
    description: "Gained foundational knowledge of cloud concepts and Microsoft Azure services."
  },
  {
    title: "AWS re/Start Graduate",
    specialization: "Cloud Computing",
    date: "2023",
    icon: <FaCertificate className="w-6 h-6" />,
    description: "Completed comprehensive cloud computing and AWS services training."
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-black via-purple-950/10 to-black relative">
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
            My Journey
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            From academic foundations to practical applications, here&apos;s how I&apos;m building my expertise in software development.
          </p>
        </motion.div>

        <div className="space-y-12 mb-20">
          {journeySteps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative"
            >
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-purple-500/10 flex items-center justify-center
                  text-purple-400 border border-purple-500/20">
                  {step.icon}
                </div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-semibold text-purple-300 mb-4">{step.title}</h3>
                  <p className="text-gray-300 mb-6">{step.description}</p>
                  <div className="grid md:grid-cols-2 gap-6">
                    {step.skills.map((skillSet) => (
                      <div
                        key={skillSet.name}
                        className="bg-purple-900/10 rounded-xl p-6 border border-purple-500/20"
                      >
                        <h4 className="text-lg font-medium text-purple-200 mb-4">{skillSet.name}</h4>
                        <div className="flex flex-wrap gap-2">
                          {skillSet.items.map((item) => (
                            <span
                              key={item}
                              className="px-3 py-1 bg-purple-500/10 text-purple-300 rounded-full text-sm"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {index < journeySteps.length - 1 && (
                <div className="absolute left-8 top-16 bottom-0 w-px bg-gradient-to-b from-purple-500/20 to-transparent h-24 md:h-32" />
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent">
            Certifications & Achievements
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gradient-to-br from-purple-900/20 to-black border border-purple-500/20 
                rounded-xl p-6 hover:border-purple-500/40 transition-colors group"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-lg bg-purple-500/10 text-purple-400 group-hover:text-purple-300 transition-colors">
                  {cert.icon}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-100">{cert.title}</h4>
                  <p className="text-sm text-purple-300">{cert.specialization}</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm mb-2">{cert.description}</p>
              {cert.date ? (
                <p className="text-sm text-purple-400">{cert.date}</p>
              ) : (
                <p className="text-sm text-yellow-400">{cert.status}</p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 