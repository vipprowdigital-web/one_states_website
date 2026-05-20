import ServiceDetailTemplate from "@/components/services/ServiceDetailTemplate";
import { hotelServices } from "@/seed/servicesData";

export default function HotelBrandTieUpsPage() {
  return (
    <ServiceDetailTemplate
      eyebrow="Profitable Hospitality Partnerships"
      title="Hotel Brand Tie-ups"
      description="We specialize in connecting hospitality projects with leading hotel brands through structured business models, strategic negotiations and growth-focused advisory solutions."
      image="/images/services/hotel-brand-tie-ups.jpg"
      overviewTitle="Strategic Hotel Brand Partnerships for Long-Term Growth"
      overview="OneStates Hospitality helps hotel owners, resort developers and hospitality investors identify the right hotel brand partnerships for sustainable business growth and successful hospitality expansion. Whether you are developing a new hotel, repositioning an existing property or exploring hospitality expansion opportunities, our team helps you choose the right operational model based on your project goals, market potential and investment strategy."
      highlights={[
        "Hotels, Resorts and Business Hotels",
        "Boutique Hospitality Projects",
        "Luxury Hospitality Developments",
        "Mixed-Use Hospitality Projects",
      ]}
      processPoints={[
        "Understand property potential, location strength and owner objectives.",
        "Identify suitable hotel brands and partnership models.",
        "Compare management, franchise, lease and revenue-sharing options.",
        "Support negotiation of commercial and operational terms.",
        "Build a clear structure for long-term brand-led growth.",
      ]}
      ctaTitle="Let’s Build the Right Hospitality Partnership"
      services={hotelServices}
      serviceHeading="Our Hotel Brand Tie-Up Services"
      ctaDesc="Whether you are planning a new hotel project, looking for a hotel operator or exploring hospitality expansion opportunities, OneStates Hospitality helps you connect with the right brands and business models for long-term success."
    />
  );
}
