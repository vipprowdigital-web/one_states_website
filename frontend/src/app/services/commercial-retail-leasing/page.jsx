import ServiceDetailTemplate from "@/components/services/ServiceDetailTemplate";

export default function CommercialRetailLeasingPage() {
  return (
    <ServiceDetailTemplate
      reverse={true}
      eyebrow="Smart Leasing Solutions"
      title="Commercial Retail Leasing"
      description="We provide retail leasing solutions for commercial spaces by connecting property owners with suitable brands and financial institutions."
      image="/images/services/commercial-retail-leasing.jpg"
      overviewTitle="Right brands for the right commercial spaces"
      overview="Our commercial retail leasing service helps property owners unlock better value from their spaces by identifying suitable tenants, evaluating location potential, and connecting spaces with retail brands, NBFCs, and service-led businesses."
      highlights={[
        "Retail Brands",
        "NBFCs",
        "Commercial Spaces",
        "High-street & Mall Locations",
      ]}
      processPoints={[
        "Review the commercial space, access, frontage and catchment quality.",
        "Identify suitable retail brands, NBFCs or business categories.",
        "Position the space with clear rental and leasing strategy.",
        "Coordinate tenant discussions and site evaluation.",
        "Support closure with practical leasing terms and documentation flow.",
      ]}
      ctaTitle="Want to lease your commercial space faster?"
    />
  );
}