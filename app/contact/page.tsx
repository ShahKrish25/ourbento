'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prevState => ({ ...prevState, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Thank you for your message. We will get back to you soon!')
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.h1 
        className="text-4xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Contact Us
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 font-bold mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 font-bold mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 font-bold mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                required
              ></textarea>
            </div>
            <button type="submit" className="bg-indigo-600 text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-indigo-700 transition-colors">
              Send Message
            </button>
          </form>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold mb-4">Our Information</h2>
          <div className="space-y-4">
            <div className="flex items-start">
              <MapPin className="h-6 w-6 text-indigo-600 mr-2" />
              <div>
                <h3 className="font-semibold">Address</h3>
                <p>123 Mineral Street, Crystal City, MN 12345, USA</p>
              </div>
            </div>
            <div className="flex items-start">
              <Phone className="h-6 w-6 text-indigo-600 mr-2" />
              <div>
                <h3 className="font-semibold">Phone</h3>
                <p>+1 (555) 123-4567</p>
              </div>
            </div>
            <div className="flex items-start">
              <Mail className="h-6 w-6 text-indigo-600 mr-2" />
              <div>
                <h3 className="font-semibold">Email</h3>
                <p>info@bentominerals.com</p>
              </div>
            </div>
          </div>
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4">Business Hours</h3>
            <ul className="space-y-2">
              <li>Monday - Friday: 9:00 AM - 5:00 PM</li>
              <li>Saturday: 10:00 AM - 2:00 PM</li>
              <li>Sunday: Closed</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

