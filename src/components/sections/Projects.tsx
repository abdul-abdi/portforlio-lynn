'use client';

import { motion } from 'framer-motion';
import { 
  FaShoppingCart, 
  FaTrash,
  FaGithub, 
  FaExternalLinkAlt,
  FaHtml5,
  FaCss3,
  FaJs,
  FaPython,
  FaDatabase,
  FaMicrochip
} from 'react-icons/fa';

const projects = [
  {
    title: "E-commerce Website",
    description: "Designed and developed a fully functional e-commerce website with secure payment gateways and a user-friendly interface.",
    icons: [
      <FaHtml5 key="html" className="w-8 h-8" />,
      <FaCss3 key="css" className="w-8 h-8" />,
      <FaJs key="js" className="w-8 h-8" />
    ],
    mainIcon: <FaShoppingCart className="w-16 h-16" />,
    gradient: "from-blue-500 via-blue-400 to-blue-600",
    tags: ["HTML", "CSS", "JavaScript", "Payment Integration"],
    github: "https://github.com/lynnkathomi/ecommerce",
    demo: "https://ecommerce-demo.vercel.app"
  },
  {
    title: "Smart Dustbin IoT Project",
    description: "Contributed to the development of an IoT-based solution that monitors trash levels and sends collection notifications using sensors.",
    icons: [
      <FaPython key="python" className="w-8 h-8" />,
      <FaMicrochip key="iot" className="w-8 h-8" />,
      <FaDatabase key="db" className="w-8 h-8" />
    ],
    mainIcon: <FaTrash className="w-16 h-16" />,
    gradient: "from-emerald-500 via-emerald-400 to-emerald-600",
    tags: ["IoT", "Python", "Sensors", "Real-time Monitoring"],
    github: "https://github.com/lynnkathomi/smart-dustbin",
    demo: "https://smart-dustbin-demo.vercel.app"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-black via-purple-950/10 to-black relative">
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
            Featured Projects
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills and experience in web development and IoT solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-900/20 to-black 
                border border-purple-500/20 backdrop-blur-sm hover:border-purple-500/40 transition-all duration-300
                hover:shadow-2xl hover:shadow-purple-500/10 h-full"
            >
              <div className="absolute inset-0 bg-gradient-to-br opacity-5 group-hover:opacity-20 transition-opacity duration-300"
                style={{ backgroundImage: `linear-gradient(to bottom right, ${project.gradient})` }} />
              
              <div className="p-8 flex flex-col h-full">
                <div className="relative h-40 mb-6">
                  <motion.div
                    initial={{ scale: 1 }}
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      repeatType: "reverse",
                    }}
                    className="absolute inset-0 flex items-center justify-center text-purple-400 group-hover:opacity-0 transition-opacity duration-300"
                  >
                    {project.mainIcon}
                  </motion.div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex gap-8">
                      {project.icons.map((icon, i) => (
                        <motion.div
                          key={i}
                          initial={{ y: 20, opacity: 0 }}
                          whileHover={{ y: -5 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ delay: i * 0.1 }}
                          className={`text-transparent bg-gradient-to-r ${project.gradient} bg-clip-text hover:scale-110 transition-transform duration-200`}
                        >
                          {icon}
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="flex flex-col flex-grow"
                >
                  <h3 className="text-xl font-semibold mb-3 text-gray-100">{project.title}</h3>
                  <p className="text-gray-400 mb-6 flex-grow">{project.description}</p>
                  
                  <div className="space-y-6">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`px-3 py-1 text-sm bg-gradient-to-r ${project.gradient} bg-opacity-10 
                            text-gray-300 rounded-full border border-purple-500/20`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-6">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-400 hover:text-purple-400 transition-colors group/link"
                      >
                        <FaGithub className="w-5 h-5 group-hover/link:scale-110 transition-transform" />
                        <span>Code</span>
                      </a>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-400 hover:text-purple-400 transition-colors group/link"
                      >
                        <FaExternalLinkAlt className="w-4 h-4 group-hover/link:scale-110 transition-transform" />
                        <span>Live Demo</span>
                      </a>
                    </div>
                  </div>
                </motion.div>
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
            href="https://github.com/lynnkathomi"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full
              hover:opacity-90 transition-opacity font-medium group"
          >
            View More Projects
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
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 