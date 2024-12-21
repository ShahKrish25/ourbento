'use client';

import { useState } from 'react'; // Import useState for managing modal state
import { motion } from 'framer-motion';
import Image from 'next/image';

const products = [
  {
    name: 'Premium Bentonite Powder',
    image: 'https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/bentonite-specimens-inga-spence.jpg',
    description: 'High-quality bentonite powder for various industrial applications.',
  },
  {
    name: 'Drilling Grade Bentonite',
    image: 'https://thumbs.dreamstime.com/z/bentonite-clay-powder-gray-color-isolated-white-background-displayed-loose-pile-against-clean-surface-showcasing-its-331682347.jpg?ct=jpeg',
    description: 'Specially formulated bentonite for oil and gas drilling operations.',
  },
  {
    name: 'Foundry Grade Bentonite',
    image: 'https://th.bing.com/th/id/OIP.4Rf62RDuuM1FZC4bK2JNcwHaFj?w=234&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
    description: 'Bentonite powder optimized for metal casting and foundry applications.',
  },
  {
    name: 'Cat Litter Grade Bentonite',
    image: 'https://th.bing.com/th/id/OIP.Xl8xH9LcseFVSDTehU3ynQHaHq?w=177&h=184&c=7&r=0&o=5&dpr=1.3&pid=1.7',
    description: 'Highly absorbent bentonite for premium cat litter products.',
  },
];

export default function Products() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const openModal = (product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.h1
        className="text-4xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Our Products
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product, index) => (
          <motion.div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <Image
              src={product.image}
              alt={product.name}
              width={300}
              height={300}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
              <p className="text-gray-600 dark:text-gray-300">{product.description}</p>
              <button
                className="mt-4 bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-700 transition-colors"
                onClick={() => openModal(product)}
              >
                Learn More
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 max-w-lg w-full">
            <button
              className="absolute top-4 right-4 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
              onClick={closeModal}
            >
              ✖
            </button>
            <h2 className="text-2xl font-bold mb-4">{selectedProduct.name}</h2>
            <Image
              src={selectedProduct.image}
              alt={selectedProduct.name}
              width={300}
              height={300}
              className="w-full h-48 object-cover mb-4"
            />
            <p className="text-gray-600 dark:text-gray-300">{selectedProduct.description}</p>
            <button
              className="mt-6 bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-700 transition-colors"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
