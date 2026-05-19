import ServiceDetailTemplate from "@/components/services/ServiceDetailTemplate";

export default function WarehouseLeasingPage() {
  return (
    <ServiceDetailTemplate
      eyebrow="Logistics & Distribution"
      title="Warehouse Leasing"
      description="We help businesses and asset owners with warehouse leasing opportunities for logistics and large-scale distribution requirements."
      image="/images/services/warehouse-leasing.jpg"
      overviewTitle="Warehouse solutions for logistics-led growth"
      overview="Our warehouse leasing advisory connects asset owners with logistics companies, FMCG brands, and large-scale distribution businesses that require reliable storage, movement, and operational space."
      highlights={[
        "3PL Logistics Players",
        "FMCG Companies",
        "Large Storage Requirements",
        "Industrial & Warehouse Spaces",
      ]}
      processPoints={[
        "Assess warehouse size, access routes, loading capacity and location value.",
        "Identify logistics, FMCG and distribution-led tenant requirements.",
        "Match warehouse specifications with operational business needs.",
        "Assist in site visits, commercial discussion and tenant evaluation.",
        "Support leasing closure for long-term occupancy and stable returns.",
      ]}
      ctaTitle="Have a warehouse or logistics space to lease?"
    />
  );
}