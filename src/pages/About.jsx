import React from "react";
import { Link } from "react-router-dom";
import heroImage from "../assets/images/hero1.png"; // Update path if needed

const About = () => {
  return (
    <section className="bg-white text-gray-800">
      {/* Hero Section */}
      <div
        className="h-65 bg-cover bg-center relative py-12"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl mb-60 font-bold text-white">
            About
          </h1>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="bg-gray-100 text-sm py-3 px-6 text-gray-600">
        <div className="max-w-6xl mx-auto">
          <Link to="/" className="hover:text-orange-500">
            Home
          </Link>
          <span className="mx-1">/</span>
          <span className="text-gray-800 font-medium">About</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          <span className="text-[#ffab00]">Owlytics</span> is the trusted market
          research partner for ambitious startups and growth-focused businesses.
        </h2>
        <p className="text-lg text-gray-700 mb-12 max-w-3xl">
          We work with founders, product teams, and marketing leaders to help
          them navigate uncertainty and make confident, data-driven decisions
          that drive growth.
        </p>
        <Link to="/contact">
          <button className="px-6 py-3 bg-black text-white rounded-md hover:bg-gray-800 transition mb-20">
            Get in touch
          </button>
        </Link>

        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Who we are</h3>
            <p className="text-gray-700">
              Owlytics is a research and insights company delivering clear,
              actionable intelligence to startups and businesses worldwide. We
              help companies truly understand their customers, markets, and
              competitors — and most importantly, we help them act on that
              understanding. From idea validation to product launch, from
              competitor analysis to pricing strategy, we equip our clients with
              the clarity they need to make smarter decisions and grow faster.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6 text-center">
            {[
              { number: "10+", label: "startups supported" },
              { number: "20+", label: "industries researched" },
              { number: "50+", label: "projects delivered" },
              { number: "100%", label: "startup-focused approach" },
            ].map((stat, i) => (
              <div key={i}>
                <h4 className="text-3xl font-bold text-orange-500">
                  {stat.number}
                </h4>
                <p className="text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div>
            <h3 className="text-2xl font-semibold mb-4">What we do</h3>
            <p className="text-gray-700">
              We combine cutting-edge research tools, deep domain expertise, and
              startup-level agility to deliver insights that matter. By blending
              customer behavior data, competitor intelligence, and market
              signals, we help founders and teams shape the strategies that will
              define their future.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4">
              Expertise and insights
            </h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>
                Explore how we help businesses at every stage — from early idea
                testing to advanced market research and growth strategies.
              </li>
              <li>
                See how Owlytics supports startups and companies across SaaS,
                e-commerce, fintech, consumer products, healthtech, and more.
              </li>
            </ul>
            <button className="mt-4 px-4 py-2 bg-black text-white rounded hover:bg-gray-800">
              Learn more
            </button>
          </div>
        </div>

        <div className="bg-gray-100 p-10 rounded-lg">
          <h3 className="text-2xl font-semibold mb-4">Our Promise</h3>
          <p className="text-gray-700 mb-4">
            At Owlytics, we believe that insights are only powerful when they
            drive action. We partner with you to go beyond the data — to
            understand what’s behind the numbers, why it matters, and how to use
            it to shape your future.
          </p>
          <p className="text-gray-700 mb-4">
            By combining smart research, sharp analysis, and a startup-focused
            mindset, we help you make better decisions, faster — and turn your
            boldest ambitions into measurable success.
          </p>
          <p className="text-xl font-semibold mt-6">
            Owlytics. Turn insights into impact.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
