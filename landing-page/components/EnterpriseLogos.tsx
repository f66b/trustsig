'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import enterpriseLogos from '/public/EnterpriseLogosBarPlaceholderLogos.png'

export default function EnterpriseLogos() {
  return (
    <section className="py-16 bg-navy-blue/50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-xl font-light text-gray-300 mb-8">
            Trusted by Leading Enterprises
          </h3>
          
          <div className="relative h-20 md:h-24 grayscale hover:grayscale-0 transition-all duration-500">
            <Image
              src={enterpriseLogos}
              alt="Enterprise partner logos"
              fill
              className="object-contain"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
} 