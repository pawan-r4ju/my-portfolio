import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaYoutube } from "react-icons/fa";

const projects = [
  {
    title: "My Shopee",
    description:
      "a api based pokemon information web app which is responsive and it gives 648 pokemon details .",
    tags: ["React", "Tailwind CSS", "Poke Api"],
    github: "https://github.com/pawan-r4ju/Pokedex_Reactjs",
    demo: "https://pawan-r4ju.github.io/Pokedex_Reactjs/",
    image: "pokedex.png",
  },
  {
    title: "THE MOVIES HUB",
    description:
      "A MERN based fullstack web app which allows admin to manage the movies and also allows user to interact with the movies and also added the search.",
    tags: ["React", "Node.js", "MongoDB", "Express.js"],
    github: "https://github.com/pawan-r4ju/movie-MERN-app",
    demo: "https://github.com/pawan-r4ju/movie-MERN-app/blob/main/thumb.png",
    image: "thumb.png",
  },

  {
    title: "HOOBANK",
    description:
      "A Responsive react js Based Landing page for the finance service Firm",
    tags: ["React js", "Tailwind CSS"],
    github: "https://github.com/pawan-r4ju/hoobank",
    demo: "https://hoobank-85kn.onrender.com/",
    image: "hoobank.png",
  },
  {
    title: "VIZARD",
    description:
      "A responsive web application that represents the services provided by the VIZARD.",
    tags: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/nikhiltelase/image-search",
    demo: "https://pawan-r4ju.github.io/VIZARD/",
    image: "vizard.png",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 backdrop-blur-0">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">My Projects</h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            A showcase of my technical projects, demonstrating my expertise in
            various technologies and problem-solving abilities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-tertiary rounded-lg overflow-hidden"
            >
             <div className="relative p-8 bg-black-200">
  {project.image && (
    <img
      src={project.image}
      alt={`${project.title} Preview`}
      className="w-full h-full object-cover rounded-lg"
    />
  )}
</div>



              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-black-100 text-white px-3 py-1 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-white hover:text-accent transition-colors"
                  >
                    <FaGithub /> Code
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-white hover:text-accent transition-colors"
                    >
                      <FaExternalLinkAlt /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
