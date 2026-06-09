import ServiceDetailTemplate from "@/components/services/ServiceDetailTemplate";
import { commericalServices } from "@/seed/servicesData";

export default function CommercialRetailLeasingPage() {
  return (
    <ServiceDetailTemplate
      reverse={true}
      eyebrow="Smart Leasing Solutions"
      title="Commercial Retail Leasing"
      description="We help brands identify strategic retail opportunities that align with their business goals, customer reach, operational requirements and long-term expansion plans."
      image="/images/comm.png"
      overviewTitle="Strategic Commercial Leasing Solutions for Retail Brands & Business Expansion"
      overview="OneStates Hospitality provides commercial retail leasing solutions for retail brands, NBFCs, developers and businesses looking to expand through the right commercial spaces and high-potential locations. 
From high-street retail spaces to commercial developments and mixed-use projects, we support businesses with location strategy, leasing advisory and market-focused expansion solutions.
"
      highlights={[
        "Retail Brands",
        "NBFCs",
        "Franchise Businesses",
        "Commercial Developers",
        "Lifestyle & Fashion Brands",
        "Consumer-Focused Businesses",
      ]}
      processPoints={[
        "Review the commercial space, access, frontage and catchment quality.",
        "Identify suitable retail brands, NBFCs or business categories.",
        "Position the space with clear rental and leasing strategy.",
        "Coordinate tenant discussions and site evaluation.",
        "Support closure with practical leasing terms and documentation flow.",
      ]}
      ctaTitle="Expand Your Business with the Right Commercial Space"
      services={commericalServices}
      serviceHeading="Our Commercial Retail Leasing Services"
      ctaDesc="Whether you are a retail brand, NBFC or expanding business, OneStates Hospitality helps you identify strategic commercial spaces designed for visibility, growth and long-term success."
    />
  );
}
