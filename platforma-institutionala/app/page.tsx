import Hero from '@/components/sections/Hero'
import ForWhoSection from '@/components/sections/ProblemSection'
import PackageSection from '@/components/sections/SolutionSection'
import ReportsSection from '@/components/sections/ReportsSection'
import CommunicationSection from '@/components/sections/CommunicationSection'
import MonitoringSection from '@/components/sections/MonitoringSection'
import DocumentsSection from '@/components/sections/DocumentsSection'
import HardwareSection from '@/components/sections/HardwareSection'
import SubscriptionSection from '@/components/sections/PricingPreview'
import ImplementationSection from '@/components/sections/PlugAndPlaySection'
import FAQSection from '@/components/sections/FAQSection'
import CTASection from '@/components/sections/CTASection'

export default function HomePage() {
  return (
    <>
      <Hero />
      <ForWhoSection />
      <PackageSection />
      <ReportsSection />
      <CommunicationSection />
      <MonitoringSection />
      <DocumentsSection />
      <HardwareSection />
      <SubscriptionSection />
      <ImplementationSection />
      <FAQSection />
      <CTASection />
    </>
  )
}
