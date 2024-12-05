import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <section
      className="relative w-full h-screen mx-auto flex items-center backdrop-blur-0"
      id="home"
    >
      <div className="max-w-7xl mx-auto px-6 flex flex-col gap-8">
        {/* Text Animations */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col gap-4"
        >
          <h1 className="text-3xl sm:text-6xl font-bold text-white mb-2 sm:mb-4">
            Hi, I'm{" "}
            <span className="text-accent">
              <TypeAnimation
                sequence={[
                  "Pawan Raju",
                  1000,
                  "a Frontend Developer",
                  1000,
                  "a Backend Developer",
                  1000,
                  "a FullStack Developer",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </span>
          </h1>
          <p className="text-lg sm:text-2xl text-gray-400 sm:mb-8">
            Javascript & MERN Stack Developer, passionate about building 
            <br />
            Dynamic, user-Friendly and responsive web Applications.
          </p>
        </motion.div>

        {/* Button Animations */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
          className="flex gap-4"
        >
          <a
            href="#projects"
            className="bg-accent hover:bg-accent/90 text-white sm:px-6 p-2 sm:py-3 rounded-lg transition-all bg-primary transform hover:scale-105 hover:shadow-lg"
          >
            View Projects
          </a>
          <a
            href="Pawan Raju new fullstack.pdf" // Update to a relative path
            download
            className="border text-primary border-accent text-accent hover:bg-accent/10 p-2 sm:px-6 sm:py-3 rounded-lg transition-all transform hover:scale-105 hover:shadow-lg"
          >
            Download Resume
          </a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <a
            href="#about"
            className="flex flex-col items-center text-white hover:text-accent transition-all"
          >
            <span className="text-sm mb-2">Scroll Down</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-6 h-10 border-2 border-primary rounded-full flex justify-center items-start overflow-hidden"
            >
              <motion.div
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-2 h-2 bg-primary rounded-full mt-2"
              />
            </motion.div>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
