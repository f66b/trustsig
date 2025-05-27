'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import step1 from '/public/Step1Upload_Tokenize.png'
import step2 from '/public/Step2SmartContractExecution.png'
import step3 from '/public/Step3On-ChainArbitration.png'

const steps = [
  {
    number: '1',
    image: step1,
    title: 'Upload your contract',
    description: 'Transform your legal documents into blockchain-secured assets',
  },
  {
    number: '2',
    image: step2,
    title: 'Automate with smart contract logic',
    description: 'Define conditions, milestones, and automated execution rules',
  },
  {
    number: '3',
    image: step3,
    title: 'Let VaultCourt arbitrate when needed',
    description: 'Decentralized dispute resolution through DAO governance',
  },
]

export default function HowItWorks() {
  return (
    <section className="py-20 bg-charcoal/5">
      <div className="container-custom">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-serif font-bold text-center mb-16 text-white"
        >
          How It Works
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="text-center relative"
            >
              {/* Step Number */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-silver rounded-full flex items-center justify-center z-10">
                <span className="text-navy-blue font-bold text-xl">{step.number}</span>
              </div>

              {/* Icon Container */}
              <div className="bg-navy-blue/10 rounded-lg p-8 pt-12 mb-4 border border-silver/20">
                <div className="relative w-32 h-32 mx-auto mb-4">
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              <h3 className="text-xl font-bold mb-2 text-white">
                {step.title}
              </h3>
              <p className="text-gray-300">
                {step.description}
              </p>

              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-6 w-12 h-0.5 bg-silver/30 transform -translate-y-1/2"></div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 