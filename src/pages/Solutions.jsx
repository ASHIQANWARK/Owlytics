import React from "react";
import { Link } from "react-router-dom";

const solutions = [
  {
    title: "Startup Idea Validation",
    description: "Check if there’s value in your startup idea",
    points: [
      "Research the viability of your product or service idea",
      "Assess market demand and potential",
      "Gather feedback from your target audience",
    ],
  },
  {
    title: "Product Launch Research",
    description: "Study demand and competitors",
    points: [
      "Analyze market trends and customer preferences",
      "Identify key competitors and their strengths",
      "Gather insights to refine your product launch strategy",
    ],
  },
  {
    title: "Buyer Persona Creation",
    description: "Create profiles of your ideal customers",
    points: [
      "Define key demographic and psychographic traits",
      "Understand customer needs, behaviors, and pain points",
    ],
  },
  {
    title: "Competitive Study",
    description: "Analyze who else is operating in the offering",
    points: [
      "Assess competitors’ strengths and weaknesses",
      "Identify market gaps and opportunities",
      "Develop strategies to differentiate your business",
    ],
  },
];

const SolutionsSection = () => {
  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      {/* Header Section */}
      <div className="py-12 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Our Solutions</h1>
      </div>

      {/* Solutions Grid */}
      <div className="px-6 pb-12 grid gap-6 justify-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 max-w-6xl mx-auto">
        {solutions.map((solution, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow duration-300"
          >
            <h3 className="text-lg font-semibold text-gray-800 mb-2">{solution.title}</h3>
            <p className="text-sm text-gray-600 mb-3">{solution.description}</p>
            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
              {solution.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="text-center pb-12">
        <Link
          to="/contact"
          className="inline-block px-6 py-3 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition"
        >
          Get in Touch
        </Link>
      </div>
    </div>
  );
};

export default SolutionsSection;
