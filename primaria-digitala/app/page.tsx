import Hero from '@/components/sections/Hero'
import ProblemSection from '@/components/sections/ProblemSection'
import SolutionSection from '@/components/sections/SolutionSection'
import ModulesGrid from '@/components/sections/ModulesGrid'
import WhySmallTowns from '@/components/sections/WhySmallTowns'
import PlugAndPlaySection from '@/components/sections/PlugAndPlaySection'
import BenefitsSection from '@/components/sections/BenefitsSection'
import PricingPreview from '@/components/sections/PricingPreview'
import FAQSection from '@/components/sections/FAQSection'
import CTASection from '@/components/sections/CTASection'

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProblemSection />
      <SolutionSection />
      <ModulesGrid />
      <WhySmallTowns />
      <PlugAndPlaySection />
      <BenefitsSection />
      <PricingPreview />
      <FAQSection />
      <CTASection />
    </>
  )
}
