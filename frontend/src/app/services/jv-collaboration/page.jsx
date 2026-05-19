import ServiceDetailTemplate from "@/components/services/ServiceDetailTemplate";

export default function JVCollaborationPage() {
  return (
    <ServiceDetailTemplate
      eyebrow="Joint Venture Structuring"
      title="JV / Collaboration"
      description="We help landowners, developers and investors structure joint ventures and collaboration opportunities for large-scale projects."
      image="/images/services/jv-collaboration.jpg"
      overviewTitle="Collaborative growth for large-scale projects"
      overview="Our JV and collaboration advisory helps landowners, developers, hotel groups, and investors create clear partnership structures for housing projects, hotels, warehouses, and commercial developments."
      highlights={[
        "Housing Projects",
        "Hotels",
        "Warehouses",
        "Commercial Developments",
      ]}
      processPoints={[
        "Understand the land, project scope, owner expectations and investment need.",
        "Identify suitable developers, operators, investors or collaboration partners.",
        "Structure the JV model with clarity on roles and commercial terms.",
        "Support discussion around revenue share, development scope and timelines.",
        "Create a practical path for project execution and long-term value creation.",
      ]}
      ctaTitle="Looking for a JV or collaboration partner?"
    />
  );
}