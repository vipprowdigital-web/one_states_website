import ServiceDetailTemplate from "@/components/services/ServiceDetailTemplate";

export default function LargeAssetTransactionAdvisoryPage() {
  return (
    <ServiceDetailTemplate
      reverse={true}
      eyebrow="High-Value Real Estate"
      title="Large Asset Transaction Advisory"
      description="We offer advisory support for high-value real estate and hospitality asset transactions with a professional, market-driven approach."
      image="/images/services/large-asset-transaction-advisory.jpg"
      overviewTitle="Advisory for high-value asset decisions"
      overview="We support owners, investors, and developers in evaluating, positioning, and transacting large assets such as hotels, land parcels, commercial properties, and investment-grade real estate opportunities."
      highlights={[
        "Hotels",
        "Land Parcels",
        "Commercial Assets",
        "Investment Properties",
      ]}
      processPoints={[
        "Understand asset type, location, ownership structure and transaction goal.",
        "Evaluate market positioning, commercial potential and investor suitability.",
        "Prepare a structured advisory approach for the transaction.",
        "Connect with relevant buyers, investors or strategic partners.",
        "Support negotiation and closure with a professional process.",
      ]}
      ctaTitle="Planning a large asset transaction?"
    />
  );
}