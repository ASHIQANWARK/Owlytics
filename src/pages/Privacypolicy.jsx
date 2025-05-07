import React from "react";
import { motion } from "framer-motion";

// Sections Data (moved to top)
const sections = [
  {
    title: "1. Introduction",
    content: (
      <p className="text-[#00203c]">
        Owlytics ("Company," "we," "us," or "our") is committed to protecting the privacy of individuals whose personal data we collect and process. This Privacy Policy explains how we collect, use, and disclose personal information through our website https://www.owlytics.co and related services.
      </p>
    ),
  },
  {
    title: "2. Information We Collect",
    content: (
      <ul className="list-disc list-inside text-[#00203c] space-y-2 mt-2">
        <li><strong>Personal Identifiers:</strong> Name, email address, phone number, company name, job title</li>
        <li><strong>Professional Information:</strong> Industry, areas of interest, company size</li>
        <li><strong>Technical Data:</strong> IP address, browser type, operating system, referring URLs, device identifiers</li>
        <li><strong>Usage Data:</strong> Pages visited, time spent on the site, clickstream data</li>
        <li><strong>Marketing and Communication Data:</strong> Preferences in receiving marketing communications from us</li>
      </ul>
    ),
  },
  {
    title: "3. Purpose of Data Collection",
    content: (
      <ul className="list-disc list-inside text-[#00203c] space-y-2 mt-2">
        <li>To provide and manage our services</li>
        <li>To communicate with you regarding inquiries, research participation, and service updates</li>
        <li>To personalize user experience and deliver relevant content</li>
        <li>To analyze website usage and improve our offerings</li>
        <li>To comply with legal obligations and enforce our terms</li>
      </ul>
    ),
  },
  {
    title: "4. Legal Basis for Processing",
    content: (
      <ul className="list-disc list-inside text-[#00203c] space-y-2 mt-2">
        <li>Consent (where you have provided explicit consent)</li>
        <li>Contractual Necessity</li>
        <li>Legal Obligation</li>
        <li>Legitimate Interests (such as marketing, research, service improvement)</li>
      </ul>
    ),
  },
  {
    title: "5. Data Sharing and Disclosure",
    content: (
      <ul className="list-disc list-inside text-[#00203c] space-y-2 mt-2">
        <li>Service Providers (under strict confidentiality agreements)</li>
        <li>Legal Authorities (when required by law or to protect our rights)</li>
        <li>Business Transfers (merger, acquisition, or asset sale)</li>
      </ul>
    ),
  },
  {
    title: "6. Data Security",
    content: (
      <p className="text-gray-600">
        We implement appropriate technical and organizational measures to protect personal data against unauthorized access, alteration, disclosure, or destruction.
      </p>
    ),
  },
  {
    title: "7. Data Retention",
    content: (
      <p className="text-gray-600">
        Personal data is retained only as long as necessary to fulfill the purposes outlined in this policy or as required by law.
      </p>
    ),
  },
  {
    title: "8. Your Rights",
    content: (
      <ul className="list-disc list-inside text-gray-600 space-y-2 mt-2">
        <li>Access your personal data</li>
        <li>Request correction or deletion</li>
        <li>Object to or restrict processing</li>
        <li>Withdraw consent at any time (where applicable)</li>
      </ul>
    ),
  },
  {
    title: "9. Cookies and Tracking Technologies",
    content: (
      <p className="text-gray-600">
        Our website uses cookies to enhance user experience. You can manage cookie preferences through your browser settings.
      </p>
    ),
  },
  {
    title: "10. Third-Party Links",
    content: (
      <p className="text-gray-600">
        Our site may link to external websites. We are not responsible for their privacy practices and recommend reviewing their policies.
      </p>
    ),
  },
  {
    title: "11. Children's Privacy",
    content: (
      <p className="text-gray-600">
        Our services are not directed to individuals under 18, and we do not knowingly collect data from children.
      </p>
    ),
  },
  {
    title: "12. Changes to This Policy",
    content: (
      <p className="text-gray-600">
        We may update this Privacy Policy. Changes will be posted on this page with an updated effective date.
      </p>
    ),
  },
];

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-[#00203c] flex items-center justify-center p-6 md:p-12">
      <motion.div
        className="max-w-4xl bg-white p-8 rounded-2xl shadow-xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Title */}
        <motion.h1
          className="text-3xl md:text-4xl font-bold text-center text-[#00203c]"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Privacy Policy
        </motion.h1>
        <p className="mt-2 text-sm text-center text-gray-500">
          Effective Date: May 7, 2025
        </p>

        {/* Sections */}
        <div className="mt-6 space-y-6">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <h2 className="text-xl font-semibold text-[#00203c]">{section.title}</h2>
              {section.content}
            </motion.div>
          ))}
        </div>

        {/* Contact Info */}
        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-gray-700">For inquiries, contact us at:</p>
          <p className="mt-2 text-emerald-700 font-semibold">Owlytics</p>
          <p className="text-gray-600">Door No: 84, 3rd Cross Rd, KHB Block, Koramangala, Bengaluru, Karnataka 560095</p>
          <p className="text-gray-600">Email: contact@owlytics.co</p>
          <p className="text-gray-600">Phone: +91 9035514817</p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default PrivacyPolicy;
