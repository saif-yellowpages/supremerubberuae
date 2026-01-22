import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import { productCategories } from "@/data/products";

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
                key={category.slug}
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
                  <Link to={`/products/${category.slug}`}>
                    <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4 hover:text-primary transition-colors cursor-pointer">
                      {category.title}
                    </h3>
                  </Link>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {category.description}
                  </p>
                  <div className="grid grid-cols-2 gap-2 mb-6">
                    {category.products.slice(0, 8).map((product) => (
                      <Link
                        key={product.slug}
                        to={`/products/${category.slug}/${product.slug}`}
                        className="flex items-center gap-2 text-sm text-foreground hover:text-primary transition-colors group"
                      >
                        <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0 group-hover:scale-125 transition-transform" />
                        <span className="hover:underline">{product.name}</span>
                      </Link>
                    ))}
                  </div>
                  {category.products.length > 8 && (
                    <p className="text-sm text-muted-foreground mb-4">
                      + {category.products.length - 8} more products
                    </p>
                  )}
                  <Link to={`/products/${category.slug}`}>
                    <Button className="bg-gradient-primary hover:opacity-90 btn-scale">
                      View All {category.title}
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
