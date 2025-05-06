import { motion } from "framer-motion";
import { CheckCircle, Rocket, User, BarChart2 } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: <CheckCircle size={42} />,
    title: "Startup Idea Validation",
    description: "Check if your idea has a market.",
  },
  {
    icon: <Rocket size={42} />,
    title: "Product Launch Research",
    description: "Study demand and competition.",
  },
  {
    icon: <User size={42} />,
    title: "Buyer Persona Creation",
    description: "Create profiles of your ideal customers.",
  },
  {
    icon: <BarChart2 size={42} />,
    title: "Competitor Study",
    description: "Analyze what the competition is offering.",
  },
];

const sectionVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const iconVariants = {
  hidden: { opacity: 0, scale: 0.6 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: "backOut" },
  },
};

const headingVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const ServicesSection = () => {
  return (
    <section className="bg-gradient-to-r from-gray-100 to-gray-100 py-20 px-6 md:px-12">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="text-3xl font-extrabold text-[#00203c] mb-12 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={headingVariants}
        >
          Our Services
        </motion.h2>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              className="h-56 bg-white p-4 rounded-lg shadow-2xl flex flex-col items-center justify-center text-center transition-all duration-300 hover:shadow-lg"
              variants={cardVariants}
            >
              <motion.div
                className="text-[#00203c] mb-4"
                variants={iconVariants}
              >
                {service.icon}
              </motion.div>
              <h3 className="text-md font-semibold text-black mb-1">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm font-sans">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-10 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <Link to="/solution">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition shadow-md"
            >
              View All
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
