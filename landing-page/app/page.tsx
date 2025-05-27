import Hero from '@/components/Hero'
import FeatureTrio from '@/components/FeatureTrio'
import FeatureCarousel from '@/components/FeatureCarousel'
import HowItWorks from '@/components/HowItWorks'
import EnterpriseLogos from '@/components/EnterpriseLogos'
import ComplianceShields from '@/components/ComplianceShields'
import SocialProof from '@/components/SocialProof'
import CTAFooter from '@/components/CTAFooter'

export default function Home() {
  return (
    <main className="min-h-screen bg-navy-blue">
      <Hero />
      <FeatureTrio />
      <FeatureCarousel />
      <HowItWorks />
      <EnterpriseLogos />
      <ComplianceShields />
      <SocialProof />
      <CTAFooter />
    </main>
  )
} 