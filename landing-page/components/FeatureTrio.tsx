'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import immutableContracts from '/public/ImmutableContracts.jpg'
import robustCompliance from '/public/RobustCompliance.jpg'
import verifiableTrust from '/public/VerifiableTrust.jpg'

const features = [
  {
    image: immutableContracts,
    title: 'Immutable Contracts',
    description: 'Legally binding agreements secured by blockchain immutability.',
  },
  {
    image: robustCompliance,
    title: 'Robust Compliance',
    description: 'Designed for regulatory adherence and enterprise-grade security.',
  },
  {
    image: verifiableTrust,
    title: 'Verifiable Trust',
    description: 'Transparency and auditability through cryptographic certainty.',
  },
]

export default function FeatureTrio() {
  return (
    <section className="py-20 bg-charcoal/10">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="relative h-64 mb-6 rounded-lg overflow-hidden shadow-xl">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-cover card-hover"
                />
              </div>
              <h3 className="text-2xl font-serif font-bold mb-3 text-white">
                {feature.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
} 