"use client";

import React from "react";
import { motion } from "framer-motion";
import { Users, Target, Leaf, Award, Globe, Recycle } from "lucide-react";

const AboutSection = ({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ComponentType;
  title: string;
  description: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="flex flex-col items-center text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
  >
    <Icon className="w-12 h-12 text-indigo-600 mb-4" />
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600 dark:text-gray-300">{description}</p>
  </motion.div>
);

export default function AboutUs() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-600"
      >
        About BentoMinerals
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-xl text-center mb-12 text-gray-600 dark:text-gray-300"
      >
        We are dedicated to providing high-quality bentonite products for
        various industrial applications.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mb-16 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6"
      >
        <h2 className="text-3xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-600">
          Our Journey
        </h2>
        <div className="space-y-6">
          {[
            { year: 2005, event: "BentoMinerals founded" },
            {
              year: 2010,
              event: "Expanded operations to international markets",
            },
            {
              year: 2015,
              event: "Launched innovative eco-friendly bentonite products",
            },
            {
              year: 2020,
              event: "Achieved carbon-neutral status in all operations",
            },
            {
              year: 2023,
              event:
                "Celebrating 18 years of excellence in bentonite solutions",
            },
          ].map((item, index) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="flex items-center"
            >
              <div className="flex-shrink-0 w-24 font-bold text-indigo-600 dark:text-indigo-400">
                {item.year}
              </div>
              <div className="flex-grow border-t border-gray-300 dark:border-gray-600 mx-4"></div>
              <div className="flex-shrink-0 w-2/3">{item.event}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <AboutSection
          icon={Users}
          title="Our Team"
          description="Our expert team brings years of experience in bentonite mining and processing, ensuring top-quality products for our clients."
        />
        <AboutSection
          icon={Target}
          title="Our Mission"
          description="We aim to be the leading provider of bentonite solutions, driving innovation and sustainability in various industries."
        />
        <AboutSection
          icon={Leaf}
          title="Sustainability"
          description="We are committed to environmentally responsible mining practices and sustainable product development."
        />
      </div>

      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="text-3xl font-bold text-center mb-8"
      >
        Our Values
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <AboutSection
          icon={Award}
          title="Quality"
          description="We maintain the highest standards in our products and services, ensuring customer satisfaction."
        />
        <AboutSection
          icon={Globe}
          title="Global Reach"
          description="Our products are used in diverse applications across industries worldwide."
        />
        <AboutSection
          icon={Recycle}
          title="Innovation"
          description="We continuously invest in research and development to improve our products and processes."
        />
      </div>
    </div>
  );
}
