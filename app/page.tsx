"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle,
  Zap,
  Shield,
  TrendingUp,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";
import Carousel from "../components/Carousel";

const FeatureCard = ({
  icon: Icon,
  title,
  description,
  delay,
}: {
  icon: React.ComponentType;
  title: string;
  description: string;
  delay: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300" // Changed from 'rounded-lg' to 'rounded-xl'
  >
    <div className="flex items-center mb-4">
      <Icon className="h-8 w-8 text-indigo-600 mr-3" />
      <h3 className="text-lg sm:text-xl font-semibold">{title}</h3>
    </div>
    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
      {description}
    </p>
  </motion.div>
);

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-12">
      <motion.section
        className="relative text-center mb-16 p-8 rounded-6xl bg-opacity-50 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Animated background with adjusted z-index */}
        <motion.div
          className="absolute inset-0 z-0 rounded-2xl"
          initial={{ backgroundPosition: "0% 0%" }}
          animate={{ backgroundPosition: "100% 100%" }}
          transition={{ repeat: Infinity, repeatType: "reverse", duration: 20 }}
          style={{
            background:
              "linear-gradient(45deg, rgba(79, 70, 229, 0.1) 0%, rgba(147, 51, 234, 0.1) 100%)",
            backgroundSize: "400% 400%",
          }}
        />

        <div className="relative z-10">
          {" "}
          {/* Wrapper for content with z-index */}
          <motion.h1
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-600"
            initial={{ y: -50 }}
            animate={{ y: 0 }}
            transition={{ type: "spring", stiffness: 100 }}
          >
            Welcome to BentoMinerals
          </motion.h1>
          <motion.p
            className="text-base sm:text-lg md:text-xl mb-8 text-gray-600 dark:text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Discover our premium bentonite products for various industrial
            applications.
          </motion.p>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 500, delay: 0.4 }}
          >
            <Link
              href="/products"
              className="bg-indigo-600 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105 inline-flex items-center group"
            >
              Explore Our Products
              <motion.span
                className="ml-2"
                initial={{ x: 0 }}
                animate={{ x: 5 }}
                transition={{
                  repeat: Infinity,
                  repeatType: "reverse",
                  duration: 0.6,
                }}
              >
                <ArrowRight className="h-5 w-5" />
              </motion.span>
            </Link>
          </motion.div>
        </div>

        <motion.div
          className="absolute top-4 right-4 text-indigo-500"
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        >
          <Sparkles className="h-8 w-8" />
        </motion.div>
      </motion.section>

      <motion.section
        className="mb-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Carousel />
      </motion.section>

      <section className="mb-16">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-center">
          Why Choose BentoMinerals?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon={Zap}
            title="Superior Quality"
            description="Our bentonite powder is sourced from the finest deposits and processed to meet the highest industry standards."
            delay={0.2}
          />
          <FeatureCard
            icon={Shield}
            title="Versatile Applications"
            description="From drilling fluids to cat litter, our bentonite powder is suitable for a wide range of industrial and consumer applications."
            delay={0.4}
          />
          <FeatureCard
            icon={TrendingUp}
            title="Expert Support"
            description="Our team of specialists is always ready to assist you in finding the right bentonite solution for your needs."
            delay={0.6}
          />
        </div>
      </section>

      <motion.section
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-xl p-8 shadow-xl"
      >
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-center">
          Ready to elevate your industrial processes?
        </h2>
        <p className="text-base sm:text-lg mb-8 text-center">
          Join the growing list of satisfied customers who trust BentoMinerals
          for their bentonite needs.
        </p>
        <div className="flex justify-center">
          <Link
            href="/contact"
            className="bg-white text-indigo-600 px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 inline-flex items-center"
          >
            Get in Touch
            <ArrowRight className="ml-2" />
          </Link>
        </div>
      </motion.section>

      <section className="mt-16">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-center">
          Our Commitment to Quality
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-gray-200 dark:bg-gray-700 h-64 rounded-xl flex items-center justify-center">
              {/* <video src="https://cdn.pixabay.com/video/2023/02/15/150875-799327606_large.mp4" autoPlay loop muted className="h-full w-full object-cover" style={{ borderRadius: '10px' }}>
            </video> */}
              <video
                src="https://cdn.pixabay.com/video/2023/02/15/150875-799327606_large.mp4"
                autoPlay
                loop
                muted
                className="h-full w-full object-cover"
                style={{
                  borderRadius: "13px",
                  filter: "contrast(130%) brightness(95%) saturate(190%)",
                  transform: "scale(1.05)",
                  transition: "filter 0.3s ease, transform 0.3s ease",
                }}
              ></video>
              {/* <span className="text-2xl text-gray-500 dark:text-gray-400">Quality Control Image</span> */}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-xl sm:text-2xl font-semibold mb-4">
              Rigorous Quality Control
            </h3>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4">
              At BentoMinerals, we take pride in our commitment to delivering
              only the highest quality bentonite products. Our rigorous quality
              control process ensures that every batch meets our exacting
              standards.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center">
                <CheckCircle className="text-green-500 mr-2" />
                <span>99.9% purity guaranteed</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="text-green-500 mr-2" />
                <span>Consistent particle size distribution</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="text-green-500 mr-2" />
                <span>Comprehensive laboratory testing</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
