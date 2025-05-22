import React from "react";
import { motion } from "framer-motion";
import {
  FaRocket,
  FaHandshake,
  FaChartLine,
  FaRegLightbulb,
} from "react-icons/fa";

const cardData = [
  {
    icon: <FaRocket size={32} />,
    title: "Tailored for Startups",
    desc: "Expertly crafted solutions for early-stage businesses.",
  },
  {
    icon: <FaHandshake size={32} />,
    title: "Flexible Engagements",
    desc: "Packages to suit your budget and timelines.",
  },
  {
    icon: <FaChartLine size={32} />,
    title: "Proven Track Record",
    desc: "A strong history of successful client outcomes.",
  },
  {
    icon: <FaRegLightbulb size={32} />,
    title: "Innovation-Driven",
    desc: "We bring creative analytics to your toughest challenges.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const OwlyticsSection = () => {
  return (
    <section className="bg-gradient-to-r from-gray-100  to-gray-100 py-20 px-6 md:px-12">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-extrabold text-center text-[#00203c] mb-12"
      >
        Why Work with Owlytics
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {cardData.map((card, i) => (
          <motion.div
            key={card.title}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            className="bg-white rounded-2xl border-4 border-[#00203c] hover:border-[#00203c] p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center"
          >
            <div className="text-[#00203c] mb-4 mx-auto flex justify-center items-center">
              {card.icon}
            </div>
            <h3 className="font-semibold text-lg mb-2">{card.title}</h3>
            <p className="text-gray-600 text-sm font-sans">{card.desc}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="text-center mt-12"
      >
        <a
          href="https://forms.gle/e4g34MmZUE6RkVjN9" // 🔁 Replace with your actual Google Form URL
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="bg-[#00203c] hover:bg-[#00203c] text-white font-bold py-3 px-6 rounded-lg shadow-lg transition duration-300">
            Get a Quote
          </button>
        </a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 1 }}
        className="mt-16 max-w-3xl mx-auto text-center"
      >
        <h3 className="text-2xl font-bold text-[#00203c] mb-4">
          Get the Owlytics Advantage
        </h3>
        <p className="text-gray-600 mb-6">
          We understand the unique challenges faced by startups and emerging
          companies. Our team of experienced analysts and advanced technology
          platforms are here to help you make data-driven decisions with
          confidence.
        </p>
        <blockquote className="border-l-4 border-[#00203c] pl-4 italic text-gray-700">
          "Owlytics empowered us with deep insights into our market, which
          helped us pivot our business strategy."
        </blockquote>
        <p className="mt-2 font-semibold text-[#00203c]">Hashir</p>
      </motion.div>
    </section>
  );
};

export default OwlyticsSection;
