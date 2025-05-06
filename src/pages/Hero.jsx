import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import hero from "../assets/images/Home Page Animation.mp4";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center px-6 py-20 overflow-hidden">
      {/* Background Video */}
      <video
        src={hero}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Hero Content */}
      <motion.div
        className="relative container max-w-screen-xl mx-auto z-10 flex flex-col lg:flex-row items-center lg:items-start gap-12"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {/* Left: Hero Text */}
        <motion.div
          className="lg:w-1/2 text-center lg:text-left text-white space-y-6"
          variants={itemVariants}
        >
          <motion.h1
            className="text-4xl lg:text-5xl font-bold leading-tight"
            variants={itemVariants}
          >
            Data-Driven Market Research to{" "}
            <span className="text-orange-500">Fuel</span> Your Growth
          </motion.h1>

          <motion.p className="text-lg font-sans" variants={itemVariants}>
            From Idea Validation to Scale-Up Intelligence — We help startups
            win.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            variants={itemVariants}
          >
            <a
              href="https://forms.gle/e4g34MmZUE6RkVjN9" 
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="bg-white text-[#00203c] font-semibold px-6 py-3 rounded-md transition duration-300 shadow-md"
              >
                Get a Quote
              </motion.button>
            </a>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => navigate("/contact")} // Navigate to contact page
              className="border border-white text-white px-6 py-3 rounded-md hover:bg-white hover:text-[#0a2540] transition duration-300 shadow-md"
            >
              Explore Service
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Right: Placeholder for future image or animation */}
        <div className="lg:w-1/2 hidden lg:block" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
