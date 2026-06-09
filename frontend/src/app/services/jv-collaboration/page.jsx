import { collaborationServices } from "@/components/about/aboutData";
import ServiceDetailTemplate from "@/components/services/ServiceDetailTemplate";

export default function JVCollaborationPage() {
  return (
    <ServiceDetailTemplate
      eyebrow="Joint Venture Structuring"
      title="JV / Collaboration"
      description="We specialize in creating structured partnerships across hospitality, housing, warehousing and commercial development sectors by connecting the right stakeholders, opportunities and business models."
      image="/images/jv.png"
      overviewTitle="Strategic Joint Ventures & Business Collaboration Solutions
"
      overview="OneStates Hospitality helps developers, investors, hospitality brands and business groups build strong joint ventures and strategic collaborations for large-scale projects and long-term business growth. Our approach focuses on relationship-driven growth, strategic alignment and value creation for all parties involved.

"
      highlights={[
        "Hospitality Brands",
        "Hotel Developers",
        "Real Estate Developers",
        "Investors & Landowners",
        "Warehouse & Industrial Businesses",
        "Commercial Stakeholders",
      ]}
      processPoints={[
        "Understand the land, project scope, owner expectations and investment need.",
        "Identify suitable developers, operators, investors or collaboration partners.",
        "Structure the JV model with clarity on roles and commercial terms.",
        "Support discussion around revenue share, development scope and timelines.",
        "Create a practical path for project execution and long-term value creation.",
      ]}
      ctaTitle="Build Strong Partnerships for Long-Term Growth
"
      ctaDesc="Whether you are looking for hospitality collaborations, development partnerships or strategic joint venture opportunities, OneStates Hospitality helps you create the right business alignments for scalable and sustainable growth.
"
      serviceHeading="Our JV & Collaboration Services"
      services={collaborationServices}
    />
  );
}
