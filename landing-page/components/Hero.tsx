'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import heroBackground from '/public/heroBackgroundPattern.jpg'
import logo from '/public/logo.png'
import riskFreeBadge from '/public/RiskFreeBadge.png'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={heroBackground}
          alt="Hero background pattern"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-navy-blue/70"></div>
      </div>

      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="absolute top-8 left-8 z-20"
      >
        <Image
          src={logo}
          alt="TrustSig Logo"
          width={150}
          height={60}
          className="w-auto h-16 md:h-20 lg:h-24"
        />
      </motion.div>

      {/* Hero Content */}
      <div className="relative z-10 container-custom text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 text-white leading-tight">
            TrustSig: deal with Absolute autonomy.
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl mb-8 text-gray-200 font-light max-w-3xl mx-auto">
            The definitive platform for legally binding, self-executing contracts, 
            underpinned by immutable blockchain technology, ensuring verifiable 
            trust and robust compliance.
          </p>

          <div className="flex flex-col items-center space-y-4">
            <a
              href="#cta"
              className="btn-primary inline-block text-lg md:text-xl"
              aria-label="Secure your agreements today"
            >
              Secure your agreements Today!
            </a>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Image
                src={riskFreeBadge}
                alt="Risk Free Badge"
                width={100}
                height={40}
                className="w-auto h-8 md:h-10"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-3 bg-white rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  )
} 