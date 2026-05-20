import ServiceDetailTemplate from "@/components/services/ServiceDetailTemplate";
import { assetServices } from "@/seed/servicesData";

export default function LargeAssetTransactionAdvisoryPage() {
  return (
    <ServiceDetailTemplate
      reverse={true}
      eyebrow="High-Value Real Estate"
      title="Large Asset Transaction Advisory"
      description="Our expertise includes hospitality assets, commercial properties, land acquisitions and investment-focused opportunities designed for long-term business value and growth."
      image="/images/services/large-asset-transaction-advisory.jpg"
      overviewTitle="Strategic Advisory for Hospitality, Commercial & High-Value Asset Transactions"
      overview="OneStates Hospitality provides professional advisory services for large asset transactions across hospitality, commercial and investment sectors. We work with hotel owners, developers, investors and business groups to identify strategic opportunities and facilitate structured asset transactions. With a relationship-driven and market-focused approach, we help clients navigate complex transactions with clarity, strategic insight and professional support.
"
      highlights={[
        "Hospitality Brands",
        "Hotel Owners & Developers",
        "Commercial Investors",
        "Real Estate Businesses",
        "Institutional Stakeholders",
        "Business Groups",
      ]}
      processPoints={[
        "Understand asset type, location, ownership structure and transaction goal.",
        "Evaluate market positioning, commercial potential and investor suitability.",
        "Prepare a structured advisory approach for the transaction.",
        "Connect with relevant buyers, investors or strategic partners.",
        "Support negotiation and closure with a professional process.",
      ]}
      ctaTitle="Unlock High-Value Growth Opportunities"
      serviceHeading="Our Asset Transaction Advisory Services"
      services={assetServices}
      ctaDesc="Whether you are exploring hospitality investments, commercial asset opportunities or strategic land acquisitions, OneStates Hospitality provides the advisory expertise and market support required for informed and growth-focused decisions."
    />
  );
}
