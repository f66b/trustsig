'use client'

import { motion } from 'framer-motion'

const testimonials = [
  {
    quote: "We wasted weeks and thousands in legal back-and-forths.",
    author: "Former Contract Manager",
    company: "Tech Startup",
  },
  {
    quote: "There&apos;s no decentralized way to resolve contract disputes efficiently.",
    author: "Legal Operations Director",
    company: "Fortune 500",
  },
  {
    quote: "If only there was a secure, programmable legal framework.",
    author: "Chief Legal Officer",
    company: "DeFi Protocol",
  },
]

export default function SocialProof() {
  return (
    <section className="py-20 bg-navy-blue">
      <div className="container-custom">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-serif font-bold text-center mb-4 text-white"
        >
          The Problem We Solve
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center text-gray-300 mb-12 max-w-2xl mx-auto"
        >
          Hear from professionals who faced the challenges TrustSig eliminates
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-charcoal/30 rounded-lg p-6 border border-silver/10 relative"
            >
              <div className="absolute -top-4 left-6 text-6xl text-silver/20 font-serif">&quot;</div>
              
              <blockquote className="relative z-10">
                <p className="text-gray-300 italic mb-4 text-lg">
                  {testimonial.quote}
                </p>
                
                <footer className="text-sm">
                  <cite className="not-italic">
                    <span className="text-silver font-semibold block">
                      {testimonial.author}
                    </span>
                    <span className="text-gray-400">
                      {testimonial.company}
                    </span>
                  </cite>
                </footer>
              </blockquote>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 