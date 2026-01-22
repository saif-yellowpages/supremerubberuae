// Product-specific images
import archFenders from "@/assets/products/arch-fenders.webp";
import cellFenders from "@/assets/products/cell-fenders.webp";
import coneFenders from "@/assets/products/cone-fenders.webp";
import cylindricalFenders from "@/assets/products/cylindrical-fenders.webp";
import dFenders from "@/assets/products/d-fenders.webp";
import elementFenders from "@/assets/products/element-fenders.webp";
import keyholeFenders from "@/assets/products/keyhole-fenders.webp";
import puFoamFenders from "@/assets/products/pu-foam-fenders.webp";
import uhmwpePads from "@/assets/products/uhmwpe-pads.webp";
import wFenders from "@/assets/products/w-fenders.webp";
import foamFenders from "@/assets/products/foam-fenders.webp";
import antiVibrationPads from "@/assets/products/anti-vibration-pads.webp";
import dockBumper from "@/assets/products/dock-bumper.webp";
import rubberGaskets from "@/assets/products/rubber-gaskets.webp";
import rubberSeals from "@/assets/products/rubber-seals.webp";
import antiVibrationRubberMounting from "@/assets/products/anti-vibration-rubber-mounting.webp";
import rubberBellow from "@/assets/products/rubber-bellow.webp";
import rubberGrommets from "@/assets/products/rubber-grommets.webp";
import puCoatedWheels from "@/assets/products/pu-coated-wheels.webp";
import puCoupling from "@/assets/products/pu-coupling.webp";
import hydraulicSeals from "@/assets/products/hydraulic-seals.webp";
import aircraftWheelChocks from "@/assets/products/aircraft-wheel-chocks.webp";
import cableProtectionProfiles from "@/assets/products/cable-protection-profiles.webp";
import epdmRubberExtrusions from "@/assets/products/epdm-rubber-extrusions.webp";

// Category fallback images
import marineFenders from "@/assets/marine-fenders.jpg";
import rubberProducts from "@/assets/rubber-products.jpg";
import polyurethaneProducts from "@/assets/polyurethane-products.jpg";
import offshoreProducts from "@/assets/offshore-products.jpg";
import rollerProducts from "@/assets/roller-products.jpg";
import rubberLining from "@/assets/rubber-lining.jpg";
import rubberSheets from "@/assets/rubber-sheets.jpg";
import extrusions from "@/assets/extrusions.jpg";

// Map of product slugs to their images
const productImageMap: Record<string, string> = {
  // Marine Fenders
  "arch-fenders": archFenders,
  "cell-fenders": cellFenders,
  "cone-fenders": coneFenders,
  "cylindrical-fenders": cylindricalFenders,
  "d-fenders": dFenders,
  "element-fenders": elementFenders,
  "keyhole-fenders": keyholeFenders,
  "lightweight-foam-boat-fenders": foamFenders,
  "pu-foam-fenders": puFoamFenders,
  "uhmwpe-pads": uhmwpePads,
  "w-fenders": wFenders,
  
  // Rubber Molded Products
  "aircraft-wheel-chocks": aircraftWheelChocks,
  "anti-vibration-pads": antiVibrationPads,
  "anti-vibration-rubber-mounting": antiVibrationRubberMounting,
  "dock-bumper": dockBumper,
  "rubber-bellow": rubberBellow,
  "rubber-gaskets": rubberGaskets,
  "rubber-grommets": rubberGrommets,
  "rubber-seals": rubberSeals,
  
  // Polyurethane Products
  "hydraulic-seals": hydraulicSeals,
  "pu-coated-wheels": puCoatedWheels,
  "pu-coupling": puCoupling,
  
  // Extrusions & Profiles
  "cable-protection-profiles": cableProtectionProfiles,
  "epdm-rubber-extrusions": epdmRubberExtrusions,
};

// Map of category slugs to their fallback images
const categoryImageMap: Record<string, string> = {
  "marine-fenders": marineFenders,
  "rubber-molded-products": rubberProducts,
  "polyurethane-pu-products": polyurethaneProducts,
  "offshore-products": offshoreProducts,
  "roller-products": rollerProducts,
  "rubber-lining": rubberLining,
  "rubber-sheets": rubberSheets,
  "extrusions-profiles": extrusions,
};

export const getProductImage = (productSlug: string, categorySlug: string): string => {
  // First try to get the specific product image
  if (productImageMap[productSlug]) {
    return productImageMap[productSlug];
  }
  
  // Fall back to category image
  if (categoryImageMap[categorySlug]) {
    return categoryImageMap[categorySlug];
  }
  
  // Default fallback
  return marineFenders;
};

export const getCategoryImage = (categorySlug: string): string => {
  return categoryImageMap[categorySlug] || marineFenders;
};
