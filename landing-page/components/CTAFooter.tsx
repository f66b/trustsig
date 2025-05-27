'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import bottomBandTexture from '/public/Bottom-BandAccentTexture.jpg'

export default function CTAFooter() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Email submitted:', email)
  }

  return (
    <section id="cta" className="relative py-20 overflow-hidden">
      {/* Background Texture */}
      <div className="absolute inset-0 z-0">
        <Image
          src={bottomBandTexture}
          alt="Footer background texture"
          fill
          className="object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-blue via-navy-blue/90 to-transparent"></div>
      </div>

      <div className="relative z-10 container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-white">
            Start building trust with your contracts today.
          </h2>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-6 py-4 rounded-lg bg-white/10 border border-silver/30 text-white placeholder-gray-400 focus:outline-none focus:border-silver transition-colors"
              aria-label="Email address"
            />
            <button
              type="submit"
              className="btn-primary whitespace-nowrap"
              aria-label="Get started with TrustSig"
            >
              Get Started
            </button>
          </form>

          {/* Trust Icons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-8 flex justify-center items-center space-x-6 text-sm text-gray-400"
          >
            <span className="flex items-center">
              <svg className="w-5 h-5 mr-2 text-silver" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Blockchain Secured
            </span>
            <span className="flex items-center">
              <svg className="w-5 h-5 mr-2 text-silver" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Enterprise Ready
            </span>
          </motion.div>
        </motion.div>
      </div>

      {/* Footer Copyright */}
      <div className="relative z-10 mt-16 pt-8 border-t border-silver/20">
        <div className="container-custom text-center">
          <p className="text-sm text-gray-400">
            © 2024 TrustSig. All rights reserved. Building the future of decentralized legal infrastructure.
          </p>
        </div>
      </div>
    </section>
  )
} 