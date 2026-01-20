import { Link } from "react-router-dom";
import { Target, Eye, Award, Users, Factory, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import factoryExterior from "@/assets/factory-exterior.jpg";
import heroIndustrial from "@/assets/hero-industrial.jpg";

const values = [
  {
    icon: Award,
    title: "Quality Excellence",
    description: "Commitment to delivering products that meet the highest international standards.",
  },
  {
    icon: Users,
    title: "Customer Focus",
    description: "Building lasting relationships through exceptional service and tailored solutions.",
  },
  {
    icon: Shield,
    title: "Safety First",
    description: "Maintaining the highest safety standards in all our operations and products.",
  },
  {
    icon: Factory,
    title: "Innovation",
    description: "Continuously investing in R&D to develop cutting-edge solutions.",
  },
];

const certifications = [
  "ISO 9001:2015 - Quality Management System",
  "ISO 45001:2018 - Occupational Health & Safety",
  "ISO 14001:2015 - Environmental Management System",
];

const About = () => {
  return (
    <Layout>
      <PageHero
        title="About Supreme Rubber"
        subtitle="Over two decades of excellence in rubber, plastic, and polyurethane manufacturing"
        backgroundImage={heroIndustrial}
      />

      {/* Company Overview */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
                Leading the Industry Since 2002
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Supreme Rubber LLC was established in 2002 as a manufacturer of Rubber, Plastic, and Polyurethane products. Operating from a state-of-the-art facility spanning 400,000 sq. ft. in the Al Hamra Industrial Area, Ras Al Khaimah, UAE, we have grown to become one of the region's most trusted manufacturers.
                </p>
                <p>
                  Our core competencies include Rubber Moulding, Rubber Extrusion, TPV/TPE extrusion, and Cast Polyurethane manufacturing. We are proud to be ISO 9001:2015, ISO 45001:2018, and ISO 14001:2015 certified, reflecting our commitment to quality, safety, and environmental responsibility.
                </p>
                <p>
                  With decades of experience and a team of skilled professionals, we deliver innovative solutions to clients across diverse industries including Marine, Oil & Gas, Construction, Dredging, Renewable Energy, and Printing & Packaging.
                </p>
              </div>
            </div>
            <div className="animate-slide-in-right">
              <div className="image-zoom rounded-xl overflow-hidden shadow-card-hover">
                <img
                  src={factoryExterior}
                  alt="Supreme Rubber LLC Factory"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card p-8 rounded-xl shadow-card">
              <div className="w-14 h-14 bg-gradient-primary rounded-lg flex items-center justify-center mb-6">
                <Target className="h-7 w-7 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be the preferred partner for rubber and polyurethane solutions by consistently delivering high-quality products that exceed customer expectations, while maintaining the highest standards of safety, environmental responsibility, and ethical business practices.
              </p>
            </div>
            <div className="bg-card p-8 rounded-xl shadow-card">
              <div className="w-14 h-14 bg-gradient-primary rounded-lg flex items-center justify-center mb-6">
                <Eye className="h-7 w-7 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be recognized globally as a leader in rubber and polymer manufacturing, known for innovation, quality, and reliability. We aim to expand our reach while continuing to invest in technology, people, and sustainable practices that benefit our customers and communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeading
            title="Our Core Values"
            subtitle="The principles that guide everything we do"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="bg-card p-6 rounded-xl shadow-card card-hover text-center">
                <div className="w-14 h-14 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-7 w-7 text-primary-foreground" />
                </div>
                <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section-padding bg-foreground text-primary-foreground">
        <div className="container-custom">
          <SectionHeading
            title="Our Certifications"
            subtitle="Internationally recognized standards that demonstrate our commitment to excellence"
          />
          <div className="grid md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-primary-foreground/10 p-6 rounded-xl text-center hover:bg-primary/20 transition-colors"
              >
                <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                <p className="font-medium">{cert}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-primary">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">
            Partner With Us
          </h2>
          <p className="text-primary-foreground/90 text-lg mb-8 max-w-2xl mx-auto">
            Join the growing list of companies that trust Supreme Rubber for their rubber and polymer needs.
          </p>
          <Link to="/contact">
            <Button size="lg" variant="secondary" className="btn-scale">
              Contact Us Today
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default About;
