import { useState } from "react";
import { X } from "lucide-react";
import Layout from "@/components/layout/Layout";
import PageHero from "@/components/ui/PageHero";
import marineFenders from "@/assets/marine-fenders.jpg";
import rubberProducts from "@/assets/rubber-products.jpg";
import polyurethaneProducts from "@/assets/polyurethane-products.jpg";
import offshoreProducts from "@/assets/offshore-products.jpg";
import rollerProducts from "@/assets/roller-products.jpg";
import rubberLining from "@/assets/rubber-lining.jpg";
import rubberSheets from "@/assets/rubber-sheets.jpg";
import extrusions from "@/assets/extrusions.jpg";
import factoryExterior from "@/assets/factory-exterior.jpg";
import heroIndustrial from "@/assets/hero-industrial.jpg";

const galleryImages = [
  { src: heroIndustrial, alt: "Manufacturing Facility", category: "Facility" },
  { src: factoryExterior, alt: "Factory Exterior", category: "Facility" },
  { src: marineFenders, alt: "Marine Fenders", category: "Products" },
  { src: rubberProducts, alt: "Rubber Molded Products", category: "Products" },
  { src: polyurethaneProducts, alt: "Polyurethane Products", category: "Products" },
  { src: offshoreProducts, alt: "Offshore Products", category: "Products" },
  { src: rollerProducts, alt: "Roller Products", category: "Products" },
  { src: rubberLining, alt: "Rubber Lining", category: "Products" },
  { src: rubberSheets, alt: "Rubber Sheets", category: "Products" },
  { src: extrusions, alt: "Extrusions & Profiles", category: "Products" },
];

const categories = ["All", "Facility", "Products"];

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const filteredImages =
    selectedCategory === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === selectedCategory);

  return (
    <Layout>
      <PageHero
        title="Gallery"
        subtitle="Explore our state-of-the-art facility and product range"
      />

      <section className="section-padding">
        <div className="container-custom">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-gradient-primary text-primary-foreground shadow-primary"
                    : "bg-secondary text-foreground hover:bg-primary/10"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl shadow-card cursor-pointer card-hover"
                onClick={() => setLightboxImage(image.src)}
              >
                <div className="image-zoom aspect-[4/3]">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div>
                    <p className="text-primary-foreground font-heading font-semibold text-lg">
                      {image.alt}
                    </p>
                    <span className="text-primary text-sm">{image.category}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 bg-foreground/95 flex items-center justify-center p-4"
          onClick={() => setLightboxImage(null)}
        >
          <button
            className="absolute top-6 right-6 text-primary-foreground hover:text-primary transition-colors"
            onClick={() => setLightboxImage(null)}
          >
            <X className="h-8 w-8" />
          </button>
          <img
            src={lightboxImage}
            alt="Gallery preview"
            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl animate-fade-in"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </Layout>
  );
};

export default Gallery;
