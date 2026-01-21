import { useParams, Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import { getCategoryBySlug, getProductBySlug } from "@/data/products";

const ProductDetail = () => {
  const { categorySlug, productSlug } = useParams<{ categorySlug: string; productSlug: string }>();
  const category = getCategoryBySlug(categorySlug || "");
  const product = getProductBySlug(categorySlug || "", productSlug || "");

  if (!category || !product) {
    return (
      <Layout>
        <div className="container-custom section-padding text-center">
          <h1 className="text-3xl font-bold">Product Not Found</h1>
          <Link to="/products">
            <Button className="mt-4">Back to Products</Button>
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Breadcrumb */}
      <div className="bg-muted/50 py-4">
        <div className="container-custom">
          <nav className="text-sm text-muted-foreground">
            <Link to="/products" className="hover:text-primary transition-colors">Products</Link>
            <span className="mx-2">/</span>
            <Link to={`/products/${category.slug}`} className="hover:text-primary transition-colors">{category.title}</Link>
            <span className="mx-2">/</span>
            <span className="text-foreground">{product.name}</span>
          </nav>
        </div>
      </div>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Product Image Placeholder */}
            <div className="bg-muted rounded-xl aspect-square flex items-center justify-center">
              <div className="text-9xl text-muted-foreground/30">🔧</div>
            </div>

            {/* Product Info */}
            <div>
              <h1 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                {product.name}
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                {product.description}
              </p>

              <Link to="/contact">
                <Button size="lg" className="bg-gradient-primary hover:opacity-90 btn-scale">
                  Request Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Features & Applications */}
          <div className="grid md:grid-cols-2 gap-12 mt-16">
            <div>
              <h2 className="text-2xl font-heading font-bold text-foreground mb-6">Key Features</h2>
              <ul className="space-y-3">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold text-foreground mb-6">Applications</h2>
              <ul className="space-y-3">
                {product.applications.map((app, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2" />
                    <span className="text-muted-foreground">{app}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Back Navigation */}
          <div className="mt-12 pt-8 border-t flex flex-wrap gap-4">
            <Link to={`/products/${category.slug}`}>
              <Button variant="outline">← Back to {category.title}</Button>
            </Link>
            <Link to="/contact">
              <Button className="bg-gradient-primary">Contact Us for Custom Solutions</Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProductDetail;
