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
    description: "Comprehensive range of marine fenders designed to protect vessels and port structures.",
    items: [
      "Arch Fenders",
      "Cell Fenders",
      "Cone Fenders",
      "Cylindrical Fenders",
      "D Fenders",
      "Element Fenders",
      "Keyhole Fenders",
      "Lightweight Foam Boat Fenders",
      "M Fenders",
      "Non-marking Fenders",
      "Polyform Fenders",
      "PU Foam Fenders",
      "UHMWPE Pads",
      "W Fenders",
    ],
  },
  {
    title: "Rubber Molded Products",
    image: rubberProducts,
    description: "Custom and standard rubber molded components for industrial applications.",
    items: [
      "Aircraft Wheel Chocks",
      "Anti-vibration Pads",
      "Anti-Vibration Rubber Mounting",
      "Butterfly Valve Re-Rubberising",
      "Custom Molded Products",
      "Dock Bumper",
      "Rubber Bellow",
      "Rubber Gaskets",
      "Rubber Grommets",
      "Rubber O Ring",
      "Rubber Seals",
      "Rubber Shock Absorber Bush",
      "Rubber to Metal Molded",
      "Vibration Isolator Mounts",
    ],
  },
  {
    title: "Polyurethane (PU) Products",
    image: polyurethaneProducts,
    description: "High-performance polyurethane components with excellent wear resistance.",
    items: [
      "Foamed Bumpers",
      "Hydraulic Seals",
      "PU Coated Wheels",
      "PU Coupling",
      "PU Discs",
      "PU Screen Mesh",
      "PU Sheets, Rods & Tubes",
      "PU to Metal Bonded Products",
      "Tensioner Pad",
    ],
  },
  {
    title: "Offshore Products",
    image: offshoreProducts,
    description: "Specialized products designed for demanding offshore environments.",
    items: [
      "Boatlanding Rubstrips",
      "Compression Fenders",
      "Grout Seals",
      "Offshore Buoy",
      "Piggy Back Saddles",
      "Shear Fenders",
    ],
  },
  {
    title: "Roller Products",
    image: rollerProducts,
    description: "Precision-engineered rollers for printing and industrial applications.",
    items: [
      "Printing Rollers",
      "Industrial Rollers",
      "Rubber Covered Rollers",
      "Polyurethane Rollers",
    ],
  },
  {
    title: "Rubber Lining",
    image: rubberLining,
    description: "Protective rubber lining solutions for corrosion and wear resistance.",
    items: [
      "Tank Lining",
      "Pipe Lining",
      "Valve Lining",
      "Chemical Resistant Lining",
      "Abrasion Resistant Lining",
    ],
  },
  {
    title: "Rubber Sheets",
    image: rubberSheets,
    description: "Wide range of rubber sheets in various grades and specifications.",
    items: [
      "Natural Rubber Sheets",
      "Neoprene Sheets",
      "EPDM Sheets",
      "Nitrile Sheets",
      "Silicone Sheets",
      "Viton Sheets",
    ],
  },
  {
    title: "Extrusions & Profiles",
    image: extrusions,
    description: "Custom rubber extrusions and profiles for sealing and protection.",
    items: [
      "Door Seals",
      "Window Seals",
      "Edge Trims",
      "U-Channels",
      "Custom Profiles",
      "TPV/TPE Extrusions",
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
