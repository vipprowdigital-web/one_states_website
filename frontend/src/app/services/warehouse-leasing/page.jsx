import ServiceDetailTemplate from "@/components/services/ServiceDetailTemplate";
import { warehouseServices } from "@/seed/servicesData";

export default function WarehouseLeasingPage() {
  return (
    <ServiceDetailTemplate
      eyebrow="Logistics & Distribution"
      title="Warehouse Leasing"
      description="We help businesses identify the right warehouse spaces based on operational requirements, connectivity, storage capacity and long-term expansion goals."
      image="/images/services/warehouse-leasing.jpg"
      overviewTitle="Strategic Warehouse & Industrial Space Solutions for Logistics and FMCG Businesses"
      overview="OneStates Hospitality provides warehouse leasing and industrial space solutions for 3PL logistics players, FMCG companies, distribution businesses and supply chain operations looking for scalable infrastructure and strategic locations. From logistics hubs to industrial warehousing and distribution centers, we support businesses with location strategy, leasing advisory and growth-focused warehouse solutions."
      highlights={[
        "3PL Logistics Players",
        "FMCG Companies",
        "Distribution Businesses",
        "Supply Chain Companies",
        "E-commerce Operations",
        "Industrial Businesses",
      ]}
      processPoints={[
        "Assess warehouse size, access routes, loading capacity and location value.",
        "Identify logistics, FMCG and distribution-led tenant requirements.",
        "Match warehouse specifications with operational business needs.",
        "Assist in site visits, commercial discussion and tenant evaluation.",
        "Support leasing closure for long-term occupancy and stable returns.",
      ]}
      ctaTitle="Build Smarter Logistics & Warehouse Operations
"
      services={warehouseServices}
      serviceHeading="Our Warehouse & Logistics Services"
      ctaDesc="Whether you are expanding your logistics network, searching for warehouse infrastructure or planning large-scale distribution operations, OneStates Hospitality helps you find the right industrial and warehousing solutions for sustainable growth."
    />
  );
}
