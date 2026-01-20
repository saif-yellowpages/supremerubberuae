import { Link } from "react-router-dom";
import { ArrowRight, Anchor, Building2, Ship, Sun, Fuel, Printer } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import offshoreProducts from "@/assets/offshore-products.jpg";

const industries = [
  {
    icon: Anchor,
    title: "Dredging",
    description: "We provide durable rubber and polyurethane products for dredging operations, including wear-resistant components for dredgers, pipeline floats, and flexible connections that withstand the demanding conditions of underwater excavation.",
    products: [
      "Pipeline Floats",
      "Flexible Pipe Connections",
      "Wear Resistant Linings",
      "Hose Floats",
      "Coupling Gaskets",
    ],
  },
  {
    icon: Building2,
    title: "Construction",
    description: "Our construction industry solutions include vibration isolation products, bridge bearings, expansion joints, and protective rubber components that ensure structural integrity and worker safety on construction sites.",
    products: [
      "Bridge Bearings",
      "Expansion Joints",
      "Vibration Isolators",
      "Protective Bumpers",
      "Sealing Systems",
    ],
  },
  {
    icon: Ship,
    title: "Marine",
    description: "As specialists in marine applications, we manufacture a comprehensive range of marine fenders, dock bumpers, and boat protection products that safeguard vessels and port infrastructure worldwide.",
    products: [
      "Marine Fenders (All Types)",
      "Dock Bumpers",
      "Boat Fenders",
      "UHMWPE Pads",
      "Rubstrips",
    ],
  },
  {
    icon: Sun,
    title: "Renewable Energy",
    description: "We support the renewable energy sector with specialized rubber and polyurethane components for wind turbines, solar installations, and other clean energy systems that require durability and weather resistance.",
    products: [
      "Wind Turbine Components",
      "Vibration Dampers",
      "Sealing Solutions",
      "Protective Covers",
      "Cable Management Systems",
    ],
  },
  {
    icon: Fuel,
    title: "Oil and Gas",
    description: "Our oil and gas industry products are engineered to withstand extreme pressures, temperatures, and chemical exposure, providing reliable performance in upstream, midstream, and downstream operations.",
    products: [
      "Offshore Fenders",
      "Compression Fenders",
      "Grout Seals",
      "Pipeline Products",
      "Chemical Resistant Linings",
    ],
  },
  {
    icon: Printer,
    title: "Printing & Packaging",
    description: "We manufacture precision rubber rollers and components for the printing and packaging industry, ensuring consistent print quality, paper handling, and production efficiency.",
    products: [
      "Printing Rollers",
      "Industrial Rollers",
      "Rubber Blankets",
      "Ink Rollers",
      "Transport Rollers",
    ],
  },
];

const Industries = () => {
  return (
    <Layout>
      <PageHero
        title="Industries Served"
        subtitle="Delivering specialized rubber and polyurethane solutions across diverse sectors"
        backgroundImage={offshoreProducts}
      />

      <section className="section-padding">
        <div className="container-custom">
          <SectionHeading
            title="Serving Multiple Industries"
            subtitle="Our expertise spans across various sectors, providing tailored solutions for unique industry challenges"
          />

          <div className="space-y-12">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="bg-card rounded-xl shadow-card overflow-hidden card-hover"
              >
                <div className="grid lg:grid-cols-3 gap-0">
                  <div className="bg-gradient-primary p-8 flex flex-col justify-center">
                    <div className="w-16 h-16 bg-primary-foreground/20 rounded-xl flex items-center justify-center mb-4">
                      <industry.icon className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <h3 className="text-2xl font-heading font-bold text-primary-foreground">
                      {industry.title}
                    </h3>
                  </div>
                  <div className="lg:col-span-2 p-8">
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {industry.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {industry.products.map((product, productIndex) => (
                        <span
                          key={productIndex}
                          className="bg-secondary text-foreground px-4 py-2 rounded-full text-sm font-medium hover:bg-primary/10 transition-colors"
                        >
                          {product}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-primary">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">
            Your Industry Not Listed?
          </h2>
          <p className="text-primary-foreground/90 text-lg mb-8 max-w-2xl mx-auto">
            We serve many more industries and are always ready to develop custom solutions. Contact us to discuss your requirements.
          </p>
          <Link to="/contact">
            <Button size="lg" variant="secondary" className="btn-scale">
              Get in Touch
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Industries;
