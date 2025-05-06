import { motion } from "framer-motion";
import { Brain, Users, Radar, LineChart } from "lucide-react";

const products = [
  { icon: <Brain size={45} />, title: "PersonaBuilder AI" },
  { icon: <Users size={45} />, title: "SegmentIQ" },
  { icon: <Radar size={45} />, title: "Competitor Rader" },
  { icon: <LineChart size={45} />, title: "Predictive Insights Suite" },
];

// Animation variant that changes direction based on index
const cardVariant = {
  hidden: (i) => ({
    opacity: 0,
    x: i % 2 === 0 ? -50 : 50, // alternate direction
  }),
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const headingVariant = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const ProductsSection = () => {
  return (
    <section className="bg-gradient-to-r from-gray-100 to-gray-100 py-12 px-6 md:px-12">
      <div className="max-w-5xl mx-auto">
        {/* Animated Heading */}
        <motion.h2
          className="text-3xl font-semibold text-gray-900 mb-10 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={headingVariant}
        >
          Featured Products
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {products.map((product, i) => (
            <motion.div
              key={product.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariant}
              className="h-46 bg-white shadow-2xl p-6 rounded-lg flex flex-col items-center justify-center text-center transition-transform duration-300 hover:scale-105"
            >
              <div className="text-[#00203c] mb-4">{product.icon}</div>
              <h3 className="text-md font-semibold text-gray-800">{product.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
