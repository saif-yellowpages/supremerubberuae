import { Link } from "react-router-dom";
import { ArrowRight, Shield, Factory, Users, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/ui/SectionHeading";
import ImageCard from "@/components/ui/ImageCard";
import heroImage from "@/assets/hero-industrial.jpg";
import marineFenders from "@/assets/marine-fenders.jpg";
import rubberProducts from "@/assets/rubber-products.jpg";
import polyurethaneProducts from "@/assets/polyurethane-products.jpg";
import offshoreProducts from "@/assets/offshore-products.jpg";
import rollerProducts from "@/assets/roller-products.jpg";
import rubberLining from "@/assets/rubber-lining.jpg";
import rubberSheets from "@/assets/rubber-sheets.jpg";
import extrusions from "@/assets/extrusions.jpg";

const stats = [
  { number: "2002", label: "Established" },
  { number: "400,000", label: "Sq. Ft. Facility" },
  { number: "6+", label: "Industries Served" },
  { number: "20+", label: "Years Experience" },
];

const features = [
  {
    icon: Shield,
    title: "ISO Certified",
    description: "ISO 9001:2015, ISO 45001:2018, and ISO 14001:2015 certified for quality, safety, and environmental management.",
  },
  {
    icon: Factory,
    title: "Advanced Manufacturing",
    description: "State-of-the-art facility with rubber moulding, extrusion, TPV/TPE processing, and cast polyurethane capabilities.",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Skilled engineers and technicians with decades of combined experience in rubber and polymer solutions.",
  },
  {
    icon: Award,
    title: "Quality Assured",
    description: "Rigorous quality control processes ensuring every product meets international standards.",
  },
];

const products = [
  { title: "Marine Fenders", image: marineFenders, description: "Arch, Cell, Cone, Cylindrical, D, W Fenders & more" },
  { title: "Rubber Molded Products", image: rubberProducts, description: "Gaskets, O-Rings, Seals, Custom Molded Parts" },
  { title: "Polyurethane Products", image: polyurethaneProducts, description: "PU Wheels, Couplings, Sheets, Rods & Tubes" },
  { title: "Offshore Products", image: offshoreProducts, description: "Boatlanding Rubstrips, Compression Fenders" },
  { title: "Roller Products", image: rollerProducts, description: "Printing & Industrial Rollers" },
  { title: "Rubber Lining", image: rubberLining, description: "Protective lining for tanks and pipes" },
  { title: "Rubber Sheets", image: rubberSheets, description: "Various grades and specifications" },
  { title: "Extrusions & Profiles", image: extrusions, description: "Custom rubber profiles and seals" },
];

const industries = [
  "Dredging",
  "Construction", 
  "Marine",
  "Renewable Energy",
  "Oil and Gas",
  "Printing & Packaging",
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/40" />
        
        <div className="container-custom relative z-10 py-20">
          <div className="max-w-3xl animate-slide-up">
            <div className="inline-flex items-center gap-2 bg-primary/20 text-primary px-4 py-2 rounded-full mb-6">
              <span className="text-sm font-medium">ISO 9001:2015 | ISO 45001:2018 | ISO 14001:2015</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground mb-6 leading-tight">
              Leading Manufacturer of
              <span className="text-primary block">Rubber & Polyurethane</span>
              Products in the UAE
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-2xl">
              Since 2002, Supreme Rubber LLC has been providing high-quality rubber, plastic, and polyurethane solutions to industries worldwide from our state-of-the-art 400,000 sq. ft. facility.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/products">
                <Button size="lg" className="bg-gradient-primary hover:opacity-90 btn-scale shadow-primary">
                  Explore Products
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-foreground btn-scale">
                  Get a Quote
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-primary py-10">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-1">
                  {stat.number}
                </div>
                <div className="text-primary-foreground/80 text-sm md:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <SectionHeading
            title="Why Choose Supreme Rubber?"
            subtitle="We combine decades of expertise with cutting-edge technology to deliver superior rubber and polyurethane solutions."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-xl shadow-card card-hover"
              >
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeading
            title="Our Products"
            subtitle="Comprehensive range of rubber, plastic, and polyurethane products for diverse industrial applications."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <ImageCard
                key={index}
                src={product.image}
                alt={product.title}
                title={product.title}
                description={product.description}
              />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/products">
              <Button size="lg" className="bg-gradient-primary hover:opacity-90 btn-scale">
                View All Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="section-padding bg-foreground text-primary-foreground">
        <div className="container-custom">
          <SectionHeading
            title="Industries We Serve"
            subtitle="Trusted by leading companies across multiple sectors worldwide."
          />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="bg-primary-foreground/10 hover:bg-primary/20 rounded-lg p-6 text-center transition-all duration-300 hover:-translate-y-1"
              >
                <span className="font-medium">{industry}</span>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/industries">
              <Button variant="outline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-foreground btn-scale">
                Learn More
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-primary">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">
            Ready to Discuss Your Project?
          </h2>
          <p className="text-primary-foreground/90 text-lg mb-8 max-w-2xl mx-auto">
            Contact our team of experts to discuss your requirements and get a customized solution for your needs.
          </p>
          <Link to="/contact">
            <Button size="lg" variant="secondary" className="btn-scale">
              Contact Us Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
