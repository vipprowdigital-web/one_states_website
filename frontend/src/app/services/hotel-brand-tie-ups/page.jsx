import ServiceDetailTemplate from "@/components/services/ServiceDetailTemplate";

export default function HotelBrandTieUpsPage() {
  return (
    <ServiceDetailTemplate
      eyebrow="Profitable Hospitality Partnerships"
      title="Hotel Brand Tie-ups"
      description="We assist hotel owners, investors and hospitality brands in creating profitable partnerships through structured brand tie-up models."
      image="/images/services/hotel-brand-tie-ups.jpg"
      overviewTitle="Structured partnerships for hotel growth"
      overview="Our hotel brand tie-up advisory helps property owners evaluate the right business model, connect with suitable hospitality brands, and create a partnership structure that supports long-term profitability, operational stability, and brand value."
      highlights={[
        "Management Contract",
        "Minimum Guarantee / Revenue Sharing",
        "Franchise Model",
        "Pure Lease Model",
      ]}
      processPoints={[
        "Understand property potential, location strength and owner objectives.",
        "Identify suitable hotel brands and partnership models.",
        "Compare management, franchise, lease and revenue-sharing options.",
        "Support negotiation of commercial and operational terms.",
        "Build a clear structure for long-term brand-led growth.",
      ]}
      ctaTitle="Looking for the right hotel brand partnership?"
    />
  );
}