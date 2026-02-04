import { useState } from "react";
import { X } from "lucide-react";
import Layout from "@/components/layout/Layout";
import PageHero from "@/components/ui/PageHero";

// External gallery images from supremerubberuae.com
const galleryImages = [
  // Extrusions & Profiles
  { src: "https://supremerubberuae.com/assets/galleryimages/6-42.webp", alt: "Extrusion and Profiles", category: "Extrusions & Profiles" },
  { src: "https://supremerubberuae.com/assets/galleryimages/7-32.webp", alt: "Rubber Extrusions", category: "Extrusions & Profiles" },
  { src: "https://supremerubberuae.com/assets/galleryimages/4-62.webp", alt: "Custom Profiles", category: "Extrusions & Profiles" },
  { src: "https://supremerubberuae.com/assets/galleryimages/5-52.webp", alt: "Industrial Extrusions", category: "Extrusions & Profiles" },
  { src: "https://supremerubberuae.com/assets/galleryimages/3-72.webp", alt: "Rubber Profiles", category: "Extrusions & Profiles" },
  { src: "https://supremerubberuae.com/assets/galleryimages/1-162.webp", alt: "Extruded Products", category: "Extrusions & Profiles" },
  { src: "https://supremerubberuae.com/assets/galleryimages/2-92.webp", alt: "Profile Manufacturing", category: "Extrusions & Profiles" },
  
  // Marine Fenders
  { src: "https://supremerubberuae.com/assets/galleryimages/1-17.webp", alt: "Marine Fenders", category: "Marine Fenders" },
  { src: "https://supremerubberuae.com/assets/galleryimages/2-10.webp", alt: "Dock Fenders", category: "Marine Fenders" },
  { src: "https://supremerubberuae.com/assets/galleryimages/3-8.webp", alt: "Port Fenders", category: "Marine Fenders" },
  { src: "https://supremerubberuae.com/assets/galleryimages/4-7.webp", alt: "Industrial Fenders", category: "Marine Fenders" },
  { src: "https://supremerubberuae.com/assets/galleryimages/5-6.webp", alt: "Rubber Fenders", category: "Marine Fenders" },
  { src: "https://supremerubberuae.com/assets/galleryimages/6-5.webp", alt: "Berthing Fenders", category: "Marine Fenders" },
  { src: "https://supremerubberuae.com/assets/galleryimages/7-4.webp", alt: "Fender Systems", category: "Marine Fenders" },
  { src: "https://supremerubberuae.com/assets/galleryimages/8-2.webp", alt: "Fender Installation", category: "Marine Fenders" },
  { src: "https://supremerubberuae.com/assets/galleryimages/9-2.webp", alt: "Marine Protection", category: "Marine Fenders" },
  { src: "https://supremerubberuae.com/assets/galleryimages/10-3.webp", alt: "Vessel Fenders", category: "Marine Fenders" },
  { src: "https://supremerubberuae.com/assets/galleryimages/11-2.webp", alt: "Harbor Fenders", category: "Marine Fenders" },
  { src: "https://supremerubberuae.com/assets/galleryimages/12-2.webp", alt: "Custom Fenders", category: "Marine Fenders" },
  { src: "https://supremerubberuae.com/assets/galleryimages/13-1.webp", alt: "Heavy Duty Fenders", category: "Marine Fenders" },
  { src: "https://supremerubberuae.com/assets/galleryimages/14-1.webp", alt: "Marine Solutions", category: "Marine Fenders" },
  { src: "https://supremerubberuae.com/assets/galleryimages/15-1.webp", alt: "Port Protection", category: "Marine Fenders" },
  { src: "https://supremerubberuae.com/assets/galleryimages/16-1.webp", alt: "Fender Manufacturing", category: "Marine Fenders" },
  { src: "https://supremerubberuae.com/assets/galleryimages/17-1.webp", alt: "Marine Equipment", category: "Marine Fenders" },
  { src: "https://supremerubberuae.com/assets/galleryimages/18-1.webp", alt: "Dock Protection", category: "Marine Fenders" },
  { src: "https://supremerubberuae.com/assets/galleryimages/19.webp", alt: "Fender Products", category: "Marine Fenders" },
  
  // Offshore Products
  { src: "https://supremerubberuae.com/assets/galleryimages/1-18.webp", alt: "Offshore Products", category: "Offshore Products" },
  { src: "https://supremerubberuae.com/assets/galleryimages/2-11.webp", alt: "Oil & Gas Equipment", category: "Offshore Products" },
  { src: "https://supremerubberuae.com/assets/galleryimages/3-9.webp", alt: "Offshore Solutions", category: "Offshore Products" },
  { src: "https://supremerubberuae.com/assets/galleryimages/4-8.webp", alt: "Industrial Offshore", category: "Offshore Products" },
  
  // Polyurethane (PU) Products
  { src: "https://supremerubberuae.com/assets/galleryimages/1-19.webp", alt: "Polyurethane Products", category: "Polyurethane (PU) Products" },
  { src: "https://supremerubberuae.com/assets/galleryimages/2-12.webp", alt: "PU Components", category: "Polyurethane (PU) Products" },
  { src: "https://supremerubberuae.com/assets/galleryimages/3-10.webp", alt: "PU Manufacturing", category: "Polyurethane (PU) Products" },
  { src: "https://supremerubberuae.com/assets/galleryimages/4-9.webp", alt: "Custom PU Products", category: "Polyurethane (PU) Products" },
  { src: "https://supremerubberuae.com/assets/galleryimages/5-7.webp", alt: "Industrial PU", category: "Polyurethane (PU) Products" },
  { src: "https://supremerubberuae.com/assets/galleryimages/6-6.webp", alt: "PU Solutions", category: "Polyurethane (PU) Products" },
  { src: "https://supremerubberuae.com/assets/galleryimages/7-5.webp", alt: "PU Coatings", category: "Polyurethane (PU) Products" },
  { src: "https://supremerubberuae.com/assets/galleryimages/8-3.webp", alt: "PU Parts", category: "Polyurethane (PU) Products" },
  { src: "https://supremerubberuae.com/assets/galleryimages/9-3.webp", alt: "PU Engineering", category: "Polyurethane (PU) Products" },
  { src: "https://supremerubberuae.com/assets/galleryimages/10-4.webp", alt: "PU Applications", category: "Polyurethane (PU) Products" },
  { src: "https://supremerubberuae.com/assets/galleryimages/11-3.webp", alt: "PU Wheels", category: "Polyurethane (PU) Products" },
  { src: "https://supremerubberuae.com/assets/galleryimages/12-3.webp", alt: "PU Rollers", category: "Polyurethane (PU) Products" },
  
  // Rubber Molded Products
  { src: "https://supremerubberuae.com/assets/galleryimages/1-20.webp", alt: "Rubber Molded Products", category: "Rubber Molded Products" },
  { src: "https://supremerubberuae.com/assets/galleryimages/2-13.webp", alt: "Molded Components", category: "Rubber Molded Products" },
  { src: "https://supremerubberuae.com/assets/galleryimages/3-11.webp", alt: "Custom Molding", category: "Rubber Molded Products" },
  { src: "https://supremerubberuae.com/assets/galleryimages/4-10.webp", alt: "Rubber Parts", category: "Rubber Molded Products" },
  { src: "https://supremerubberuae.com/assets/galleryimages/5-8.webp", alt: "Industrial Molding", category: "Rubber Molded Products" },
  
  // Roller Products
  { src: "https://supremerubberuae.com/assets/galleryimages/1-21.webp", alt: "Roller Products", category: "Roller Products" },
  { src: "https://supremerubberuae.com/assets/galleryimages/2-14.webp", alt: "Roller Covering", category: "Roller Products" },
  { src: "https://supremerubberuae.com/assets/galleryimages/3-12.webp", alt: "Industrial Rollers", category: "Roller Products" },
  { src: "https://supremerubberuae.com/assets/galleryimages/4-11.webp", alt: "Custom Rollers", category: "Roller Products" },
  { src: "https://supremerubberuae.com/assets/galleryimages/5-9.webp", alt: "Rubber Rollers", category: "Roller Products" },
  { src: "https://supremerubberuae.com/assets/galleryimages/6-7.webp", alt: "Roller Manufacturing", category: "Roller Products" },
];

const categories = ["All", "Extrusions & Profiles", "Marine Fenders", "Offshore Products", "Polyurethane (PU) Products", "Rubber Molded Products", "Roller Products"];

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
