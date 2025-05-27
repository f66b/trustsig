'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import iso27001 from '/public/SecurityComplianceBadgesISO27001.png'
import gdpr from '/public/GDPRCompliant.png'
import nearProtocol from '/public/NEARProtocolSecured.png'
import ipfsArweave from '/public/IPFSArweaveEncryption.png'

const shields = [
  { image: iso27001, title: 'ISO 27001 Certified' },
  { image: gdpr, title: 'GDPR Compliant' },
  { image: nearProtocol, title: 'NEAR Protocol Secured' },
  { image: ipfsArweave, title: 'IPFS & Arweave Encrypted' },
]

export default function ComplianceShields() {
  return (
    <section className="py-20 bg-charcoal/10">
      <div className="container-custom">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-serif font-bold text-center mb-12 text-white"
        >
          Security & Compliance
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {shields.map((shield, index) => (
            <motion.div
              key={shield.title}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="relative w-32 h-32 mx-auto mb-4 card-hover">
                <Image
                  src={shield.image}
                  alt={shield.title}
                  fill
                  className="object-contain"
                />
              </div>
              <p className="text-sm text-gray-300 font-medium">
                {shield.title}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 