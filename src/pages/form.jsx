import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    company: "",
    industry: "",
    email: "",
    phone: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const serviceID = "service_twtbo0j";
  const templateID = "template_jvilria";
  const publicKey = "A0zXfEgERVdtQO_LX";

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const templateParams = {
      company: formData.company,
      industry: formData.industry,
      email: formData.email,
      phone: formData.phone,
    };

    emailjs
      .send(serviceID, templateID, templateParams, publicKey)
      .then(() => {
        setIsSubmitted(true);
        setFormData({ company: "", industry: "", email: "", phone: "" });
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-[#00203c] py-12 text-white text-center">
        <h1 className="text-4xl font-bold">Contact Us</h1>
        <p className="mt-2 text-lg">We’d love to hear from you.</p>
      </section>

      {/* Breadcrumbs */}
      <nav className="bg-gray-100 py-3 px-6 text-sm text-gray-600">
        <ol className="list-reset flex">
          <li>
            <a href="/" className="text-[#00203c] hover:underline">
              Home
            </a>
          </li>
          <li>
            <span className="mx-2">/</span>
          </li>
          <li className="text-gray-500">Contact</li>
        </ol>
      </nav>

      {/* Form Section */}
      <div className="max-w-xl mx-auto p-6 bg-white rounded-2xl shadow-lg mt-10 mb-20">
        {isSubmitted ? (
          <div className="text-center text-[#00203c] text-xl font-semibold">
            ✅ Thank you! Our team will contact you shortly.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-800">Get in Touch</h2>

            <div>
              <label className="block text-gray-700">Company Name</label>
              <input
                type="text"
                name="company"
                required
                value={formData.company}
                onChange={handleChange}
                className="mt-1 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            <div>
              <label className="block text-gray-700">Industry</label>
              <input
                type="text"
                name="industry"
                required
                value={formData.industry}
                onChange={handleChange}
                className="mt-1 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            <div>
              <label className="block text-gray-700">Email ID</label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="mt-1 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            <div>
              <label className="block text-gray-700">Phone Number</label>
              <input
                type="tel"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="mt-1 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-emerald-600 text-white py-2 rounded-lg hover:bg-emerald-700 transition"
            >
              {loading ? "Sending..." : "Submit"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default ContactForm;
