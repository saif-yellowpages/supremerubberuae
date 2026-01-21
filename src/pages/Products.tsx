import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import marineFenders from "@/assets/marine-fenders.jpg";
import rubberProducts from "@/assets/rubber-products.jpg";
import polyurethaneProducts from "@/assets/polyurethane-products.jpg";
import offshoreProducts from "@/assets/offshore-products.jpg";
import rollerProducts from "@/assets/roller-products.jpg";
import rubberLining from "@/assets/rubber-lining.jpg";
import rubberSheets from "@/assets/rubber-sheets.jpg";
import extrusions from "@/assets/extrusions.jpg";

const productCategories = [
  {
    title: "Marine Fenders",
    image: marineFenders,
    description: "Comprehensive range of high-performance marine fender systems designed to absorb high impact loads while providing reliable and low-maintenance protection for ports, harbors, quays, and docking facilities.",
    items: [
      "Arch Fenders - High energy absorption with low reaction force for ports and harbors",
      "Cell Fenders - Robust fendering for large vessels, container ships, and tankers",
      "Cone Fenders - Latest evolution with exceptional energy absorption and shear resistance",
      "Cylindrical Fenders - Simple design, easy installation, excellent shear resistance",
      "D Fenders - Space-efficient profiles for quaysides, docks, and loading bays",
      "Element Fenders - Modular high-performance system for large vessel terminals",
      "Keyhole Fenders - Compact form for tugboats, barges, and pilot boats",
      "Lightweight Foam Boat Fenders - Closed-cell foam core, unsinkable and puncture-proof",
      "M Fenders - Triple-leg rubber profiles for bow and stern protection",
      "Non-marking Fenders - Scratch-free protection for luxury vessels",
      "Polyform Fenders - A-Series inflatable round buoy fenders",
      "PU Foam Fenders - Heavy-duty foam-filled for offshore terminals",
      "UHMWPE Pads - Low-friction wear pads for fender systems",
      "W Fenders - Rugged bow fenders for tugboats and pushers",
    ],
  },
  {
    title: "Rubber Molded Products",
    image: rubberProducts,
    description: "Precision-engineered custom and standard rubber molded components for industrial applications, featuring high-grade compounds for maximum durability and performance.",
    items: [
      "Aircraft Wheel Chocks - Heavy-duty with high-traction surface and rope handles",
      "Anti-vibration Pads - Shock-absorbing pads for pumps, compressors, and machinery",
      "Anti-Vibration Rubber Mounting - Metal-bonded isolators for engines and equipment",
      "Butterfly Valve Re-Rubberising - Restoration service with EPDM, Nitrile, or Viton",
      "Custom Molded Products - Tailored rubber parts to your specifications",
      "Dock Bumper - High-impact resistance for loading docks and truck bays",
      "Rubber Bellow - Flexible protection for machinery joints and pistons",
      "Rubber Gaskets - Precision seals for leak-proof industrial connections",
      "Rubber Grommets - Protective sleeves for cables through panels",
      "Rubber O Ring - Standard and custom sizes for pneumatic/hydraulic sealing",
      "Rubber Seals - Custom molded seals for dust and fluid protection",
      "Rubber Shock Absorber Bush - Metal-bonded bushes for suspension systems",
      "Rubber to Metal Molded - High-strength bonding for isolation and cushioning",
      "Vibration Isolator Mounts - Heavy-duty mounts for structural vibration dampening",
    ],
  },
  {
    title: "Polyurethane (PU) Products",
    image: polyurethaneProducts,
    description: "High-performance polyurethane components with excellent wear resistance, designed for demanding industrial applications requiring superior durability and load capacity.",
    items: [
      "Foamed Bumpers - Impact protection for automotive and industrial use",
      "Hydraulic Seals - High-pressure resistant PU seals for cylinders",
      "PU Coated Wheels - Steel-core wheels with durable coating for high loads",
      "PU Coupling - Flexible gear coupling inserts for torque transmission",
      "PU Discs - Specialized pipeline pigging seals and cleaning discs",
      "PU Screen Mesh - Durable screens for vibratory and mining applications",
      "PU Sheets, Rods & Tubes - Semi-finished industrial materials",
      "PU to Metal Bonded Products - High-performance bonded wear components",
      "Tensioner Pad - High-friction pads for cable and pipe laying tensioners",
    ],
  },
  {
    title: "Offshore Products",
    image: offshoreProducts,
    description: "Specialized products designed for demanding offshore environments, engineered to withstand harsh marine conditions and provide reliable performance.",
    items: [
      "Boatlanding Rubstrips - Protection for offshore platform landings",
      "Compression Fenders - High-capacity energy absorption systems",
      "Grout Seals - Specialized seals for offshore construction",
      "Offshore Buoy - Marine-grade buoys for offshore applications",
      "Piggy Back Saddles - Support systems for subsea pipelines",
      "Shear Fenders - Lateral force absorption for offshore structures",
    ],
  },
  {
    title: "Roller Products",
    image: rollerProducts,
    description: "Precision-engineered rollers for printing and industrial applications, manufactured with superior materials for optimal performance and longevity.",
    items: [
      "Printing Rollers - Precision rollers for printing industry",
      "Industrial Rollers - Heavy-duty rollers for manufacturing",
      "Rubber Covered Rollers - Custom rubber coatings for various applications",
      "Polyurethane Rollers - High-wear resistance for demanding environments",
    ],
  },
  {
    title: "Rubber Lining",
    image: rubberLining,
    description: "Protective rubber lining solutions for corrosion and wear resistance, extending equipment life in chemical, mining, and industrial applications.",
    items: [
      "Tank Lining - Chemical-resistant protection for storage tanks",
      "Pipe Lining - Internal protection for pipelines",
      "Valve Lining - Corrosion protection for industrial valves",
      "Chemical Resistant Lining - Protection against aggressive chemicals",
      "Abrasion Resistant Lining - Extended life in high-wear environments",
    ],
  },
  {
    title: "Rubber Sheets",
    image: rubberSheets,
    description: "Wide range of rubber sheets in various grades and specifications, suitable for gaskets, flooring, insulation, and industrial applications.",
    items: [
      "Natural Rubber Sheets - High elasticity and tensile strength",
      "Neoprene Sheets - Weather and ozone resistant",
      "EPDM Sheets - Excellent UV and weather resistance",
      "Nitrile Sheets - Oil and fuel resistant",
      "Silicone Sheets - High temperature resistance",
      "Viton Sheets - Chemical and heat resistant",
    ],
  },
  {
    title: "Extrusions & Profiles",
    image: extrusions,
    description: "Custom rubber extrusions and profiles for sealing, protection, and insulation applications across construction, marine, and industrial sectors.",
    items: [
      "Cable Protection Profiles - Mechanical protection for cables and hoses",
      "Container Rubber Seals - Heavy-duty EPDM seals for shipping containers",
      "Edge Protection Profiles - Flexible guards for sharp edges",
      "EPDM Rubber Extrusions - Custom weatherproofing profiles",
      "Expansion Seal - Specialized seals for movement joints",
      "Glazing Seals - Weatherproof seals for glass installations",
      "Hatch Cover Seal - Marine-grade seals for ship hatches",
      "PVC Extrusions - Durable plastic profiles for industrial use",
      "Silicone Rubber Profiles - Heat-resistant sealing solutions",
      "Sponge Rubber Profiles - Soft, compressible air and dust seals",
      "Tile Movement Joints - Specialized profiles for ceramic installations",
      "TPV/TPE Extrusions - Rubber-like plastic with high chemical resistance",
    ],
  },
];

const Products = () => {
  return (
    <Layout>
      <PageHero
        title="Our Products"
        subtitle="Comprehensive range of rubber, plastic, and polyurethane solutions for diverse industries"
      />

      <section className="section-padding">
        <div className="container-custom">
          <SectionHeading
            title="Product Categories"
            subtitle="Explore our extensive range of high-quality products designed to meet your specific requirements"
          />

          <div className="space-y-16">
            {productCategories.map((category, index) => (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={`${index % 2 === 1 ? "lg:order-2" : ""}`}>
                  <div className="image-zoom rounded-xl overflow-hidden shadow-card group">
                    <img
                      src={category.image}
                      alt={category.title}
                      className="w-full aspect-[4/3] object-cover"
                    />
                  </div>
                </div>
                <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4">
                    {category.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {category.description}
                  </p>
                  <div className="grid grid-cols-2 gap-2 mb-6">
                    {category.items.slice(0, 8).map((item, itemIndex) => (
                      <div
                        key={itemIndex}
                        className="flex items-center gap-2 text-sm text-foreground"
                      >
                        <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                  {category.items.length > 8 && (
                    <p className="text-sm text-muted-foreground mb-4">
                      + {category.items.length - 8} more products
                    </p>
                  )}
                  <Link to="/contact">
                    <Button className="bg-gradient-primary hover:opacity-90 btn-scale">
                      Request Quote
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
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
            Can't Find What You Need?
          </h2>
          <p className="text-primary-foreground/90 text-lg mb-8 max-w-2xl mx-auto">
            We specialize in custom solutions. Contact us to discuss your specific requirements.
          </p>
          <Link to="/contact">
            <Button size="lg" variant="secondary" className="btn-scale">
              Contact Our Team
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Products;
