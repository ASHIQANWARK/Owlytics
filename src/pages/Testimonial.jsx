import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  { name: "Nabeel", text: "The team delivered an amazing project! Their attention to detail and creativity exceeded our expectations." },
  { name: "Hashim", text: "Fantastic work! They truly understand what customers need and deliver outstanding results." },
  { name: "Shefin", text: "A professional and dedicated team! Highly recommended for anyone looking for top-notch development services." },
  { name: "Keerthi", text: "Working with this team was an amazing experience. They are highly skilled and very professional." },
  { name: "Abhirami", text: "Great work! Their expertise and attention to detail made a huge difference in our project’s success." },
  { name: "Jino", text: "A trustworthy and highly skilled team. They exceeded our expectations in every way." },
];

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="w-full bg-gradient-to-r from-gray-100 to-gray-100 flex flex-col items-center justify-center py-14 px-6">
      <motion.h2
        className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-4 text-center leading-tight"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        What Startups Are Saying
      </motion.h2>

      

      <div className="w-full max-w-6xl">
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white text-gray-800 shadow-md rounded-xl p-6 mx-4 border border-gray-200 flex flex-col justify-between min-h-[200px]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
            >
              <FaQuoteLeft className="text-[#00203c] text-2xl mb-4" />
              <p className="text-lg font-medium mb-6">"{testimonial.text}"</p>
              <p className="text-sm text-[#00203c] uppercase text-center font-semibold">{testimonial.name}</p>
            </motion.div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;
