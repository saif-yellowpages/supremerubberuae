import { useParams, Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import PageHero from "@/components/ui/PageHero";
import { getCategoryBySlug } from "@/data/products";

const ProductCategory = () => {
  const { categorySlug } = useParams<{ categorySlug: string }>();
  const category = getCategoryBySlug(categorySlug || "");

  if (!category) {
    return (
      <Layout>
        <div className="container-custom section-padding text-center">
          <h1 className="text-3xl font-bold">Category Not Found</h1>
          <Link to="/products">
            <Button className="mt-4">Back to Products</Button>
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <PageHero title={category.title} subtitle={category.description} />

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {category.products.map((product) => (
              <Link
                key={product.slug}
                to={`/products/${category.slug}/${product.slug}`}
                className="group"
              >
                <div className="bg-card rounded-xl overflow-hidden shadow-card card-hover h-full flex flex-col">
                  <div className="aspect-[4/3] bg-muted flex items-center justify-center">
                    <div className="text-6xl text-muted-foreground/30">🔧</div>
                  </div>
                  <div className="p-5 flex flex-col flex-grow">
                    <h3 className="text-lg font-heading font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 flex-grow">
                      {product.shortDescription}
                    </p>
                    <div className="flex items-center text-primary font-medium text-sm">
                      View Details
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link to="/products">
              <Button variant="outline" size="lg">
                ← Back to All Products
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProductCategory;
