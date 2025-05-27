'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import step1 from '/public/Step1Upload_Tokenize.png'
import step2 from '/public/Step2SmartContractExecution.png'
import step3 from '/public/Step3On-ChainArbitration.png'
import iso27001 from '/public/SecurityComplianceBadgesISO27001.png'
import gdpr from '/public/GDPRCompliant.png'
import ipfs from '/public/IPFSArweaveEncryption.png'

const features = [
  {
    image: step1,
    title: 'Upload & Tokenize',
    text: 'Convert legal docs (PDF/DOCX) into blockchain assets.',
  },
  {
    image: step2,
    title: 'Smart Contract Logic',
    text: 'Automate milestones, payments, and terms using NEAR.',
  },
  {
    image: step3,
    title: 'VaultCourt Arbitration',
    text: 'DAO jurors resolve disputes on-chain, transparently.',
  },
  {
    image: iso27001,
    title: 'ISO 27001 Certified',
    text: 'Security best practices baked into every layer.',
  },
  {
    image: gdpr,
    title: 'GDPR Compliant',
    text: 'Designed with privacy-first compliance.',
  },
  {
    image: ipfs,
    title: 'Encrypted Storage',
    text: 'Files stored securely via IPFS & Arweave.',
  },
]

export default function FeatureCarousel() {
  return (
    <section className="py-20 bg-navy-blue">
      <div className="container-custom">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-serif font-bold text-center mb-12 text-white"
        >
          Comprehensive Features
        </motion.h2>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-charcoal/50 rounded-lg p-6 text-center card-hover border border-silver/20"
            >
              <div className="relative w-24 h-24 mx-auto mb-4">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-bold mb-2 text-silver">
                {feature.title}
              </h3>
              <p className="text-gray-300 text-sm">
                {feature.text}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden overflow-x-auto pb-4">
          <div className="flex space-x-4" style={{ width: 'max-content' }}>
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-charcoal/50 rounded-lg p-6 text-center border border-silver/20"
                style={{ minWidth: '280px' }}
              >
                <div className="relative w-24 h-24 mx-auto mb-4">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2 text-silver">
                  {feature.title}
                </h3>
                <p className="text-gray-300 text-sm">
                  {feature.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 