import { Link } from "react-router-dom";
import { ArrowRight, Settings, Cog, Layers, Box, Wrench, Cpu } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import heroIndustrial from "@/assets/hero-industrial.jpg";

const capabilities = [
  {
    icon: Settings,
    title: "Rubber Moulding",
    description: "State-of-the-art compression, transfer, and injection molding capabilities for producing high-precision rubber components in various sizes and complexities.",
    features: [
      "Compression Molding",
      "Transfer Molding",
      "Injection Molding",
      "Rubber to Metal Bonding",
      "Large Component Manufacturing",
    ],
  },
  {
    icon: Cog,
    title: "Rubber Extrusion",
    description: "Advanced extrusion technology for producing continuous profiles, seals, gaskets, and custom shapes in various rubber compounds.",
    features: [
      "Continuous Vulcanization",
      "Complex Profiles",
      "Multi-compound Extrusion",
      "Close Tolerance Profiles",
      "High Volume Production",
    ],
  },
  {
    icon: Layers,
    title: "TPV/TPE Extrusion",
    description: "Specialized thermoplastic vulcanizate and thermoplastic elastomer processing for automotive, construction, and industrial applications.",
    features: [
      "Co-extrusion Capability",
      "Color Matching",
      "UV Stabilized Compounds",
      "Flame Retardant Options",
      "Recyclable Materials",
    ],
  },
  {
    icon: Box,
    title: "Cast Polyurethane",
    description: "Precision casting of polyurethane components with excellent wear resistance, load-bearing capacity, and durability.",
    features: [
      "MDI & TDI Systems",
      "Shore 10A to 95A Hardness",
      "Metal Bonded Components",
      "Large Volume Casting",
      "Custom Formulations",
    ],
  },
  {
    icon: Wrench,
    title: "Rubber Lining",
    description: "Comprehensive rubber lining services for tanks, pipes, valves, and vessels requiring chemical or abrasion resistance.",
    features: [
      "Field and Shop Lining",
      "Multiple Compound Options",
      "Autoclave Curing",
      "Quality Testing",
      "Repair Services",
    ],
  },
  {
    icon: Cpu,
    title: "Quality Control",
    description: "Rigorous quality control and testing procedures ensuring all products meet international standards and customer specifications.",
    features: [
      "Dimensional Inspection",
      "Hardness Testing",
      "Tensile Testing",
      "Compression Set Testing",
      "Material Traceability",
    ],
  },
];

const facilityStats = [
  { value: "400,000", label: "Sq. Ft. Facility" },
  { value: "50+", label: "Machines" },
  { value: "24/7", label: "Operations" },
  { value: "100+", label: "Skilled Workers" },
];

const Capabilities = () => {
  return (
    <Layout>
      <PageHero
        title="Our Capabilities"
        subtitle="Advanced manufacturing capabilities for rubber, plastic, and polyurethane products"
        backgroundImage={heroIndustrial}
      />

      {/* Facility Overview */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <SectionHeading
            title="State-of-the-Art Facility"
            subtitle="Our modern manufacturing facility in Ras Al Khaimah is equipped with the latest technology and machinery"
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {facilityStats.map((stat, index) => (
              <div key={index} className="bg-card p-6 rounded-xl shadow-card text-center card-hover">
                <div className="text-3xl md:text-4xl font-heading font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeading
            title="Manufacturing Capabilities"
            subtitle="We offer a comprehensive range of manufacturing processes to meet your specific requirements"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => (
              <div key={index} className="bg-card p-8 rounded-xl shadow-card card-hover group">
                <div className="w-14 h-14 bg-gradient-primary rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <capability.icon className="h-7 w-7 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-heading font-bold text-foreground mb-3">
                  {capability.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {capability.description}
                </p>
                <ul className="space-y-2">
                  {capability.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-sm text-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-primary">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">
            Have a Custom Requirement?
          </h2>
          <p className="text-primary-foreground/90 text-lg mb-8 max-w-2xl mx-auto">
            Our engineering team is ready to work with you on developing custom solutions tailored to your specific needs.
          </p>
          <Link to="/contact">
            <Button size="lg" variant="secondary" className="btn-scale">
              Discuss Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Capabilities;
