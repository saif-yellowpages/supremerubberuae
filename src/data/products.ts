import marineFenders from "@/assets/marine-fenders.jpg";
import rubberProducts from "@/assets/rubber-products.jpg";
import polyurethaneProducts from "@/assets/polyurethane-products.jpg";
import offshoreProducts from "@/assets/offshore-products.jpg";
import rollerProducts from "@/assets/roller-products.jpg";
import rubberLining from "@/assets/rubber-lining.jpg";
import rubberSheets from "@/assets/rubber-sheets.jpg";
import extrusions from "@/assets/extrusions.jpg";

export interface Product {
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  features: string[];
  applications: string[];
  image?: string;
}

export interface ProductCategory {
  slug: string;
  title: string;
  image: string;
  description: string;
  products: Product[];
}

export const productCategories: ProductCategory[] = [
  {
    slug: "marine-fenders",
    title: "Marine Fenders",
    image: marineFenders,
    description: "Comprehensive range of high-performance marine fender systems designed to absorb high impact loads while providing reliable and low-maintenance protection for ports, harbors, quays, and docking facilities.",
    products: [
      {
        slug: "arch-fenders",
        name: "Arch Fenders",
        shortDescription: "High energy absorption with low reaction force for ports and harbors",
        description: "Supreme Rubber's Arch Fenders are high-performance marine fender systems designed to absorb high impact loads while providing reliable and low-maintenance protection for ports, harbors, quays, and docking facilities. With a simple, rugged design and broad contact area, arch fenders deliver excellent energy absorption and low reaction forces, even under repeated berthing cycles.",
        features: [
          "High energy absorption with low reaction force",
          "Simple, tough, and proven design for harsh marine environments",
          "Made from marine-grade natural rubber or synthetic elastomers",
          "Available with or without frontal panels or face pads (UHMW-PE)",
          "Standard heights: 250 mm to 1,000 mm; custom sizes available",
          "Optional steel-reinforced base plates for increased anchorage",
          "UV, ozone, saltwater, and weather resistant",
          "Mounting options: open type, closed box type, and with steel insert configurations"
        ],
        applications: [
          "Container terminals and bulk cargo berths",
          "Fishing harbours and ferry docks",
          "Naval and defence piers",
          "Oil and gas jetties",
          "Ro-Ro and cruise terminals"
        ]
      },
      {
        slug: "cell-fenders",
        name: "Cell Fenders",
        shortDescription: "Robust fendering for large vessels, container ships, and tankers",
        description: "Supreme Rubber's Cell Fenders are robust, high-performance fendering systems engineered to absorb large berthing forces from large vessels, container ships, tankers, and bulk carriers. Their distinctive cylindrical body and flared head design provide superior energy absorption with a wide contact area, reducing hull pressure and increasing safety during docking operations.",
        features: [
          "High energy absorption with low reaction force – ideal for high-tonnage vessels",
          "Stable performance under large deflection (up to 55% compression)",
          "Wide frontal contact area minimizes hull pressure",
          "Resilient, weather-resistant rubber compounds (Natural Rubber or synthetic blends)",
          "Typically supplied with a frontal panel system using UHMW-PE face pads",
          "Standard sizes: Fender diameters from 500 mm to 2,000 mm",
          "Anchoring options: bolt-through or embedded base with steel reinforcements",
          "Highly resistant to UV, ozone, saltwater, and marine weathering"
        ],
        applications: [
          "Oil and gas terminals",
          "Container and bulk cargo berths",
          "LNG and offshore platforms",
          "Naval ports and cruise terminals",
          "High tidal range ports"
        ]
      },
      {
        slug: "cone-fenders",
        name: "Cone Fenders",
        shortDescription: "Latest evolution with exceptional energy absorption and shear resistance",
        description: "Supreme Rubber's Cone Fenders represent the latest evolution in marine fendering technology, offering exceptionally high energy absorption and low reaction force with excellent shear resistance. Their conical body design allows for even load distribution and enhanced stability, making them ideal for berthing large tankers, LNG carriers, Ro-Ro vessels, and bulk carriers.",
        features: [
          "Very high energy-to-reaction (E/R) ratio",
          "Stable performance under axial, angular, and shear loads",
          "Large deflection capacity (up to 70%) for greater energy absorption",
          "Long service life with minimal maintenance",
          "Manufactured using premium marine-grade elastomers",
          "Standard sizes: Cone base diameters from 500 mm to 2,000 mm",
          "Supplied with or without frontal panels and chain systems",
          "UV, ozone, seawater, and temperature resistant"
        ],
        applications: [
          "Deep-water terminals and container ports",
          "LNG, oil, and chemical berths",
          "Naval bases and offshore platforms",
          "Cruise ship terminals and ferry landings",
          "Ports with high tidal range or angled berthing"
        ]
      },
      {
        slug: "cylindrical-fenders",
        name: "Cylindrical Fenders",
        shortDescription: "Simple design, easy installation, excellent shear resistance",
        description: "Supreme Rubber's Cylindrical Fenders are one of the oldest and most widely used types of marine fenders, trusted for their simple design, easy installation, and excellent shear resistance. Ideal for general-purpose berthing, these fenders are suitable for small to medium-sized vessels at docks, piers, wharves, and jetties.",
        features: [
          "Robust construction with high energy absorption",
          "Simple design – easy to install via chains, rods, or brackets",
          "High abrasion, UV, and weather resistance",
          "Excellent shear and angular impact tolerance",
          "Can be installed horizontally, vertically, or diagonally",
          "Manufactured from marine-grade Natural Rubber or synthetic blends",
          "Standard diameters: 150 mm to 1,000 mm",
          "Lengths: Customizable up to 3mtrs for Quay Walls and 12mtrs for Tug Boats",
          "Available as plain bore, chamfered, or with mounting inserts"
        ],
        applications: [
          "General cargo terminals",
          "Fishing harbors and small craft berths",
          "Ferry terminals and pontoons",
          "Inland river ports and naval docks",
          "Tugboat and barge protection"
        ]
      },
      {
        slug: "d-fenders",
        name: "D Fenders",
        shortDescription: "Space-efficient profiles for quaysides, docks, and loading bays",
        description: "Supreme Rubber's D Fenders are robust, space-efficient rubber profiles designed to provide impact protection for quaysides, docks, vessels, loading bays, and industrial structures. Their flat back and rounded front profile allow for easy installation and effective energy absorption.",
        features: [
          "Effective impact absorption with low reaction force",
          "Easy installation with flat-back mounting (bolted or bonded)",
          "Available in solid or hollow configurations for variable energy ratings",
          "UV, ozone, and saltwater resistant – suitable for outdoor marine use",
          "Manufactured from marine-grade Natural Rubber or EPDM",
          "Sizes: Standard widths from 100 mm to 500 mm; custom sizes available",
          "Mounting options: flat-back (Type D), drilled holes, or slots for bolts or chains",
          "End caps and pre-curved sections available for custom applications"
        ],
        applications: [
          "Tugboats, barges, and workboats",
          "Quays and jetties",
          "Loading bays and truck docks",
          "Inland port structures",
          "Boat trailer protection rails",
          "Industrial warehouses and impact zones"
        ]
      },
      {
        slug: "element-fenders",
        name: "Element Fenders",
        shortDescription: "Modular high-performance system for large vessel terminals",
        description: "Supreme Rubber's Element Fenders are modular, high-performance marine fendering systems offering exceptional energy absorption and low reaction force in demanding berthing applications. Their modular design allows for flexible configuration to meet specific port requirements.",
        features: [
          "High energy absorption, low hull pressure",
          "Modular design for flexible configuration",
          "Available in multiple heights and lengths (500-1600 mm)",
          "Durable marine-grade rubber",
          "Engineered for large deflection and high fatigue resistance",
          "Supplied with steel/composite frontal panels with UHMW-PE pads",
          "Optional chain systems and load-bearing anchors",
          "Highly resistant to UV, ozone, and seawater"
        ],
        applications: [
          "Deepwater ports",
          "Container terminals",
          "Oil and gas berths",
          "LNG/LPG facilities",
          "Bulk cargo and Ro-Ro docks",
          "Cruise terminals",
          "Navy piers"
        ]
      },
      {
        slug: "keyhole-fenders",
        name: "Keyhole Fenders",
        shortDescription: "Compact form for tugboats, barges, and pilot boats",
        description: "Supreme Rubber's Keyhole Fenders are specially designed for small to medium-sized vessels such as tugboats, barges, pilot boats, and pontoons. Named for their distinctive keyhole-shaped cross-section, these fenders offer excellent shear resistance, high impact absorption, and ease of installation.",
        features: [
          "Strong impact absorption with good energy dissipation in compact form",
          "Excellent shear and abrasion resistance",
          "Slotted 'keyhole' design for secure mechanical anchoring",
          "Easy to install on curved or flat surfaces using bolts or mounting plates",
          "Manufactured from marine-grade Natural Rubber or EPDM",
          "UV, saltwater, and ozone resistant – suitable for marine and offshore use",
          "Standard sizes available; custom lengths and drilled hole patterns upon request"
        ],
        applications: [
          "Tugboat hull and bow fendering",
          "Push boat and barge contact strips",
          "Pilot boats, patrol vessels, and ferries",
          "Dockside protection and pontoon edging",
          "Container guides and barge-mounted cranes"
        ]
      },
      {
        slug: "lightweight-foam-boat-fenders",
        name: "Lightweight Foam Boat Fenders",
        shortDescription: "Closed-cell foam core, unsinkable and puncture-proof",
        description: "Supreme Rubber's Lightweight Foam Boat Fenders are designed to deliver superior impact absorption, lightweight construction, and long-term durability for recreational and commercial marine applications. Their closed-cell foam core makes them unsinkable and non-water absorbing.",
        features: [
          "Lightweight, closed-cell foam core (unsinkable, non-water absorbing)",
          "High energy absorption with low reaction force",
          "Durable outer PU skin (UV-stable, abrasion/tear-resistant)",
          "Available in cylindrical, spherical, or custom shapes",
          "Optional end fittings, chain-through design, grab handles, or rope eyes",
          "Flexible deployment options",
          "Custom sizes, designs, and colors available"
        ],
        applications: [
          "Yacht and leisure craft protection",
          "Pilot boats, tugs, and naval tenders",
          "Floating docks and pontoons",
          "Port service vessels and workboats",
          "Temporary or emergency fendering for ships"
        ]
      },
      {
        slug: "m-fenders",
        name: "M Fenders",
        shortDescription: "Triple-leg rubber profiles for bow and stern protection",
        description: "Supreme Rubber's M-Fenders are engineered for rugged marine applications where high wear resistance, strong energy absorption, and tight-fitting hull contact are essential. Featuring a triple-leg design that resembles the letter 'M,' these fenders offer excellent grip, flexibility, and corner wrapping.",
        features: [
          "Robust triple-leg 'M' profile for excellent grip and hull conformity",
          "High energy absorption and shear resistance in compact form",
          "Flexible enough to follow curved hull lines",
          "Easy installation with through-bolting",
          "Made from marine-grade Natural Rubber or synthetic elastomers",
          "Standard widths: 400 mm to 800 mm; lengths up to 3 meters",
          "UV, saltwater, ozone, and abrasion resistant"
        ],
        applications: [
          "Tugboat bows, sterns, and side rails",
          "Push boats and heavy-duty barges",
          "Ferry ramps and terminals",
          "Port structures and lock gates",
          "Marine loading platforms and dry docks"
        ]
      },
      {
        slug: "non-marking-fenders",
        name: "Non-marking Fenders",
        shortDescription: "Scratch-free protection for luxury vessels",
        description: "Supreme Rubber's Non-marking Fenders provide scratch-free protection for luxury vessels, superyachts, and high-end marine craft. These fenders are designed to prevent unsightly marks and scuffs on pristine hull surfaces while providing reliable impact protection.",
        features: [
          "Non-marking material prevents hull scratches and scuffs",
          "Ideal for luxury vessels and superyachts",
          "High-quality construction for long-lasting performance",
          "Available in various sizes and configurations",
          "UV and saltwater resistant",
          "Easy to deploy and store"
        ],
        applications: [
          "Superyachts and luxury vessels",
          "Marina berths",
          "High-end recreational boats",
          "Premium docking facilities"
        ]
      },
      {
        slug: "polyform-fenders",
        name: "Polyform Fenders",
        shortDescription: "A-Series inflatable round buoy fenders",
        description: "We proudly stock and supply original Polyform Fenders from Norway, a globally trusted name in marine fendering. Known for their durability, high-performance materials, and seamless one-piece construction, Polyform Norway fenders are widely used in yachting, commercial fishing, aquaculture, and offshore applications.",
        features: [
          "Genuine Polyform products, made in Norway",
          "Seamless one-piece construction",
          "High-performance materials",
          "UV resistance and impact durability",
          "Long-term performance",
          "Complies with international marine-grade standards"
        ],
        applications: [
          "Polyform A-Series: A1 to A7 – for mooring, trawling, and marker buoy use",
          "Polyform F-Series: F1 to F11 – ideal for side and dock fendering",
          "Accessories: Fender covers and ropes"
        ]
      },
      {
        slug: "pu-foam-fenders",
        name: "PU Foam Fenders",
        shortDescription: "Heavy-duty foam-filled for offshore terminals",
        description: "Supreme Rubber's PU Foam Fenders are high-performance floating fender systems engineered for harsh marine environments and heavy-duty berthing operations. Constructed with a closed-cell polyethylene foam core and a tough, abrasion-resistant polyurethane elastomer skin, these fenders are fully buoyant, unsinkable, and maintenance-free.",
        features: [
          "Closed-cell foam core – absorbs impact without water ingress",
          "Seamless, wear-resistant PU outer skin – tough, flexible, and UV-stable",
          "High energy absorption with low reaction force",
          "Unsinkable design – continues to perform even if outer skin is damaged",
          "Multiple mounting options: chain & tire net, swivel eyes, through-pins, or fixed brackets",
          "Standard and custom sizes available",
          "Custom colors and markings available"
        ],
        applications: [
          "Ship-to-ship (STS) and ship-to-quay (STQ) operations",
          "LNG and oil terminals",
          "Navy docks and defense vessels",
          "Container ports and bulk carrier berths",
          "Cruise terminals and ferry landings"
        ]
      },
      {
        slug: "uhmwpe-pads",
        name: "UHMWPE Pads",
        shortDescription: "Low-friction wear pads for fender systems",
        description: "Supreme Rubber's UHMWPE Pads are engineered to provide exceptionally low friction, high impact resistance, and long-lasting wear protection in marine and industrial applications. UHMWPE (Ultra-High Molecular Weight Polyethylene) is renowned for its outstanding abrasion resistance and self-lubricating properties.",
        features: [
          "Very low coefficient of friction",
          "High wear and impact resistance",
          "Non-abrasive to mating surfaces",
          "UV-stabilized for outdoor use",
          "Corrosion-proof and non-hygroscopic",
          "Available in various grades (virgin, recycled, colored, anti-static, UV-resistant)",
          "Supplied in sheets, blocks, strips, or custom-milled pads",
          "Various colors available"
        ],
        applications: [
          "Frontal panels of cone, cell, and element fenders",
          "Sliding surfaces on quay walls, lock gates, and dry docks",
          "Truck docks, loading bays, and warehouse floors",
          "Chutes, hoppers, and conveyor guides",
          "Piling protection and structural wear faces"
        ]
      },
      {
        slug: "w-fenders",
        name: "W Fenders",
        shortDescription: "Rugged bow fenders for tugboats and pushers",
        description: "Supreme Rubber's W Fenders are heavy-duty rubber fenders specifically engineered for tugboats, push boats, and other work vessels that operate under harsh docking and pushing conditions. Their unique 'W' profile provides outstanding flexibility, allowing the fender to wrap around curves and contours.",
        features: [
          "Dual-leg 'W' design offers maximum adaptability to curved surfaces",
          "High wear resistance and excellent impact absorption under compression",
          "Wide, grooved contact surface provides increased grip and hull protection",
          "Can be mounted on tight radii – ideal for corners and hull ends",
          "Hollow legs reduce weight while maintaining strength",
          "Material: Marine-grade Natural Rubber or synthetic elastomers",
          "Standard sizes: 320 mm to 500 mm widths; custom lengths available",
          "Mounting: Bolt-through holes in groove"
        ],
        applications: [
          "Tugboats (bow and stern protection)",
          "Push boats",
          "Marine terminals and fender piles",
          "Port and dry dock entry points",
          "Offshore service vessels"
        ]
      }
    ]
  },
  {
    slug: "rubber-molded-products",
    title: "Rubber Molded Products",
    image: rubberProducts,
    description: "Precision-engineered custom and standard rubber molded components for industrial applications, featuring high-grade compounds for maximum durability and performance.",
    products: [
      {
        slug: "aircraft-wheel-chocks",
        name: "Aircraft Wheel Chocks",
        shortDescription: "Heavy-duty with high-traction surface and rope handles",
        description: "Supreme Rubber's Aircraft Wheel Chocks are engineered for maximum safety and durability in aviation environments. Designed to secure aircraft of various sizes during parking, maintenance, or loading operations, our chocks are manufactured from solid heavy-duty rubber compounds that resist weathering and UV exposure.",
        features: [
          "High-traction surface for superior grip on tarmac and concrete",
          "Tapered design to fit snugly against aircraft tires",
          "Integrated rope handles or chains for safe removal and positioning",
          "Available in multiple sizes for commercial, military, and general aviation",
          "Customizable dimensions based on fleet requirements",
          "Weather and UV resistant"
        ],
        applications: [
          "Commercial aviation parking",
          "Military aircraft maintenance",
          "General aviation loading operations",
          "Aircraft maintenance facilities"
        ]
      },
      {
        slug: "anti-vibration-pads",
        name: "Anti-Vibration Pads",
        shortDescription: "Shock-absorbing pads for pumps, compressors, and machinery",
        description: "Supreme Rubber's Anti-Vibration Pads are designed to effectively isolate and dampen vibrations across a wide range of machinery and equipment. Manufactured from high-performance elastomeric compounds, these pads reduce noise, absorb shock, and extend the service life of mechanical systems.",
        features: [
          "High load-bearing capacity for heavy-duty industrial applications",
          "Resistant to oils, greases, water, and harsh environmental conditions",
          "Durable elastomer construction ensures long-term performance",
          "Available in a variety of sizes, thicknesses, and patterns (ribbed, waffle, plain)",
          "Easy to install"
        ],
        applications: [
          "Pumps and compressors",
          "HVAC units and generators",
          "CNC machines",
          "Industrial presses"
        ]
      },
      {
        slug: "anti-vibration-rubber-mounting",
        name: "Anti-Vibration Rubber Mounting",
        shortDescription: "Metal-bonded isolators for engines and equipment",
        description: "Supreme Rubber's Anti-Vibration Rubber Mountings are engineered to isolate vibration, absorb shock, and minimize noise in mechanical systems, ensuring smoother operation and longer equipment life. These mountings are made from high-grade rubber bonded with metal components.",
        features: [
          "Effective vibration and shock absorption for machinery, engines, and HVAC systems",
          "Available in cylindrical, conical, sandwich, and custom geometries",
          "High load capacity with excellent compression set resistance",
          "Corrosion-resistant metal bonding for extended durability",
          "Suitable for vertical and lateral load isolation"
        ],
        applications: [
          "Industrial machinery",
          "Diesel generators",
          "Compressors",
          "Automotive systems",
          "Marine equipment"
        ]
      },
      {
        slug: "butterfly-valve-re-rubberising",
        name: "Butterfly Valve Re-Rubberising",
        shortDescription: "Restoration service with EPDM, Nitrile, or Viton",
        description: "Supreme Rubber offers specialized Butterfly Valve Re-Rubberising Services designed to restore worn or damaged valve seats and linings to like-new condition. Our precision re-lining process extends the operational life of industrial butterfly valves at a fraction of the cost of replacement.",
        features: [
          "Removal of old rubber lining and surface preparation",
          "Application of premium rubber compounds (EPDM, Nitrile, Viton, Neoprene, etc.)",
          "Vulcanization and curing for optimal bond strength and durability",
          "Quality inspection and pressure testing before dispatch",
          "Suitable for valves from 2\" to 72\" and above"
        ],
        applications: [
          "Water treatment",
          "Chemical processing",
          "Mining",
          "Oil & gas",
          "Power generation"
        ]
      },
      {
        slug: "custom-molded-products",
        name: "Custom Molded Products",
        shortDescription: "Tailored rubber parts to your specifications",
        description: "At Supreme Rubber, we specialize in the design and manufacture of Custom Molded Rubber Products tailored to meet precise performance and dimensional requirements across industries. Whether you need a single prototype or high-volume production, our capabilities ensure rapid turnaround and exceptional quality.",
        features: [
          "Compression, transfer, and injection molding for complex geometries",
          "Tight tolerance manufacturing for critical sealing and cushioning applications",
          "Bonded rubber-to-metal or rubber-to-fabric components",
          "Resistance to abrasion, oils, fuels, and extreme temperatures",
          "CAD/CAM-assisted design and tooling development",
          "Wide range of elastomers: EPDM, Nitrile, Neoprene, Natural Rubber, Silicone, Viton"
        ],
        applications: [
          "Automotive",
          "Construction",
          "Marine",
          "Mining",
          "Power generation",
          "Railway",
          "Industrial OEMs"
        ]
      },
      {
        slug: "dock-bumper",
        name: "Dock Bumper",
        shortDescription: "High-impact resistance for loading docks and truck bays",
        description: "Supreme Rubber's Dock Bumpers are designed to absorb impact and prevent structural damage during truck loading and unloading operations. Built with high-density rubber compounds and reinforced for durability, our dock bumpers offer reliable protection for both vehicles and infrastructure.",
        features: [
          "High-impact resistance – absorbs shocks from trailers, forklifts, and containers",
          "Multiple shapes and sizes available",
          "Easy installation – surface-mounted or bolt-through options",
          "Custom lengths, drill patterns, and embedded steel plates on request"
        ],
        applications: [
          "Loading docks",
          "Warehouses",
          "Industrial doors",
          "Truck bays and freight terminals"
        ]
      },
      {
        slug: "rubber-bellow",
        name: "Rubber Bellow",
        shortDescription: "Flexible protection for machinery joints and pistons",
        description: "Supreme Rubber's Rubber Bellows are engineered to protect mechanical components from dust, moisture, oil, and environmental contaminants while accommodating axial, lateral, and angular movement. Manufactured from premium elastomers, our bellows ensure long-lasting flexibility and resilience.",
        features: [
          "Flexible and durable design for movement absorption and protection",
          "Available in multiple shapes: cylindrical, conical, rectangular, and custom geometries",
          "Resistant to heat, oils, chemicals, and weathering",
          "Customizable sizes, wall thicknesses, and end fittings (collars, flanges, cuffs)",
          "Suitable for static and dynamic sealing",
          "Available in Neoprene, EPDM, Nitrile, Silicone, Natural Rubber"
        ],
        applications: [
          "Hydraulic and pneumatic systems",
          "Automotive steering and suspension",
          "Machinery joints and actuators",
          "Rail, marine, and industrial enclosures",
          "HVAC and ventilation systems"
        ]
      },
      {
        slug: "rubber-gaskets",
        name: "Rubber Gaskets",
        shortDescription: "Precision seals for leak-proof industrial connections",
        description: "Supreme Rubber's Rubber Gaskets are precision-engineered to provide reliable sealing solutions across various pressures and temperatures. With a wide selection of materials and custom sizing options, our gaskets ensure leak-proof connections in industrial applications.",
        features: [
          "Wide material selection: EPDM, Nitrile, Viton, Silicone, Neoprene",
          "Custom sizes and thicknesses available",
          "Weather, oil, and chemical resistant",
          "Excellent sealing performance under pressure",
          "Temperature resistant across wide range"
        ],
        applications: [
          "Flange joints",
          "Pipe systems",
          "Pumps and valves",
          "Electrical enclosures"
        ]
      },
      {
        slug: "rubber-grommets",
        name: "Rubber Grommets",
        shortDescription: "Protective sleeves for cables through panels",
        description: "Supreme Rubber's Rubber Grommets are designed to protect wires, cables, and pipes from abrasion, vibration, and environmental exposure as they pass through metal, plastic, or composite panels. Manufactured from premium-grade elastomers, our grommets ensure a secure seal and long-lasting performance.",
        features: [
          "Durable and flexible for quick push-fit installation",
          "Protects against edge cuts, moisture, dust, and vibrations",
          "Available in multiple sizes and panel thickness ranges",
          "Wide material selection: Natural Rubber, EPDM, Nitrile, Silicone, and Neoprene",
          "Custom designs: blind grommets, multi-hole grommets, oval shapes, high-temperature options"
        ],
        applications: [
          "Electrical cabinets and control panels",
          "Automotive and heavy vehicles",
          "HVAC and plumbing systems",
          "Industrial equipment and appliances",
          "Marine and aerospace installations"
        ]
      },
      {
        slug: "rubber-o-ring",
        name: "Rubber O Ring",
        shortDescription: "Standard and custom sizes for pneumatic/hydraulic sealing",
        description: "Supreme Rubber's O-Rings are precision-engineered elastomeric sealing elements designed to provide leak-tight performance in a wide range of pressure, temperature, and chemical environments. Available in both standard and custom sizes.",
        features: [
          "Excellent sealing performance under pressure and vacuum conditions",
          "Available in standard AS568, DIN, JIS, and metric sizes",
          "Wide range of materials: Nitrile (NBR), EPDM, Silicone, Neoprene, Viton (FKM), HNBR",
          "Temperature resistance from -60°C to +250°C depending on compound",
          "Chemical, oil, fuel, and ozone resistance",
          "Manufactured to tight tolerances"
        ],
        applications: [
          "Hydraulic and pneumatic systems",
          "Pumps, valves, and compressors",
          "Automotive fuel systems and engines",
          "Industrial machinery and instrumentation",
          "Water and gas fittings, medical devices"
        ]
      },
      {
        slug: "rubber-seals",
        name: "Rubber Seals",
        shortDescription: "Custom molded seals for dust and fluid protection",
        description: "Supreme Rubber's Rubber Seals are designed to prevent the ingress of fluids, gases, dust, and contaminants in critical systems. Manufactured using high-grade elastomers and precision tooling, our seals ensure reliable performance across a wide range of conditions.",
        features: [
          "High sealing efficiency for static and dynamic applications",
          "Customizable profiles: U-seals, V-seals, lip seals, D-section, P-section",
          "Wide material options: Nitrile, EPDM, Silicone, Neoprene, Viton, Natural Rubber",
          "Excellent resistance to compression set, aging, UV, ozone, oils, and chemicals",
          "Options available for FDA compliance, flame resistance, and high-temperature use",
          "Can be molded, extruded, or die-cut",
          "Bonded rubber-to-metal seals and co-extruded profiles available"
        ],
        applications: [
          "Hydraulic and pneumatic cylinders",
          "Valves, pumps, and flanges",
          "Enclosures, panels, and electrical housings",
          "Rail, aviation, and heavy equipment industries"
        ]
      },
      {
        slug: "rubber-shock-absorber-bush",
        name: "Rubber Shock Absorber Bush",
        shortDescription: "Metal-bonded bushes for suspension systems",
        description: "Supreme Rubber's Shock Absorber Bushes are precision-molded rubber components designed to isolate vibration, reduce noise, and absorb shock loads in suspension and damping systems. These bushes enhance ride comfort, improve component life, and maintain alignment under dynamic conditions.",
        features: [
          "High-impact and vibration absorption",
          "Made from premium elastomers – Natural Rubber, EPDM, Nitrile",
          "Excellent rebound and compression recovery",
          "Bonded and non-bonded designs with or without inner/outer metal sleeves",
          "Resistant to oil, grease, water, and weathering"
        ],
        applications: [
          "Automotive suspension systems",
          "Railway rolling stock",
          "Industrial machinery and equipment mounts",
          "Agricultural and construction vehicles",
          "Off-road applications"
        ]
      },
      {
        slug: "rubber-to-metal-molded",
        name: "Rubber to Metal Molded",
        shortDescription: "High-strength bonding for isolation and cushioning",
        description: "Supreme Rubber's Rubber-to-Metal Molded Components are engineered to combine the flexibility of elastomers with the structural integrity of metal. These bonded parts are critical in applications where vibration damping, shock absorption, or fluid sealing must be combined with high mechanical strength.",
        features: [
          "High-strength rubber-to-metal bonding using advanced adhesive systems",
          "Custom molded geometries to meet specific mounting, sealing, or load-bearing requirements",
          "Wide rubber compound selection: Natural Rubber, EPDM, Nitrile, Neoprene, Silicone, Viton",
          "Metal options: Mild steel, stainless steel, aluminum, brass",
          "Resistance to fatigue, wear, oils, solvents, and temperature extremes",
          "Full-service support including design, metal preparation, bonding, molding, and testing"
        ],
        applications: [
          "Engine and transmission mounts",
          "Suspension bushings and anti-vibration mounts",
          "Sealing and isolation pads",
          "Pump, valve, and hydraulic system components",
          "Industrial, automotive, rail, marine, and defense applications"
        ]
      },
      {
        slug: "vibration-isolator-mounts",
        name: "Vibration Isolator Mounts",
        shortDescription: "Heavy-duty mounts for structural vibration dampening",
        description: "Supreme Rubber's Vibration Isolator Mounts are designed to absorb shock and dampen vibration in mechanical systems and industrial equipment. These mounts provide excellent noise reduction and support a wide range of load capacities.",
        features: [
          "Excellent noise reduction",
          "Wide load range support",
          "Available in cylindrical, sandwich, and cone styles",
          "Durable construction for long service life",
          "Multiple mounting configurations"
        ],
        applications: [
          "Generators",
          "Compressors",
          "HVAC systems",
          "CNC machinery",
          "Marine engines"
        ]
      }
    ]
  },
  {
    slug: "polyurethane-pu-products",
    title: "Polyurethane (PU) Products",
    image: polyurethaneProducts,
    description: "High-performance polyurethane components with excellent wear resistance, designed for demanding industrial applications requiring superior durability and load capacity.",
    products: [
      {
        slug: "foamed-bumpers",
        name: "Foamed Bumpers",
        shortDescription: "Impact protection for automotive and industrial use",
        description: "Supreme Rubber's Foamed Bumpers provide impact protection solutions designed for industrial and automotive applications. These bumpers feature high energy absorption, lightweight foamed structure, and excellent durability against repeated impacts.",
        features: [
          "High energy absorption",
          "Lightweight foamed structure",
          "Excellent durability against repeated impacts",
          "Customizable sizes and shapes",
          "Resistant to environmental conditions"
        ],
        applications: [
          "Automotive impact protection",
          "Industrial equipment",
          "Material handling",
          "Loading dock protection"
        ]
      },
      {
        slug: "hydraulic-seals",
        name: "Hydraulic Seals",
        shortDescription: "High-pressure resistant PU seals for cylinders",
        description: "PU Hydraulic Seals are critical components designed to contain hydraulic fluid and maintain pressure in high-performance hydraulic systems. These seals ensure leak-free operation by preventing fluid leakage between components such as pistons, rods, and cylinder bores.",
        features: [
          "High-Pressure Resistance for static and dynamic applications",
          "Superior Wear Resistance from high-performance polyurethane elastomers",
          "Low Friction & High Efficiency – optimized lip designs minimize friction",
          "Precision Fit – manufactured to tight tolerances for ISO, DIN compatibility",
          "Types include: Rod Seals, Piston Seals, Wiper Seals, Wear Rings, Buffer Seals"
        ],
        applications: [
          "Hydraulic cylinders",
          "Industrial presses",
          "Construction equipment",
          "Agricultural machinery",
          "Manufacturing systems"
        ]
      },
      {
        slug: "pu-coated-wheels",
        name: "PU Coated Wheels",
        shortDescription: "Steel-core wheels with durable coating for high loads",
        description: "Supreme Rubber's PU Coated Wheels feature steel-core wheels encapsulated in a shock-absorbing polyurethane layer. These wheels offer high load-bearing capacity, floor protection, and resistance to oils and chemicals.",
        features: [
          "High load-bearing capacity",
          "Steel core with PU coating",
          "Floor protection properties",
          "Oil and chemical resistant",
          "Long service life"
        ],
        applications: [
          "Material handling equipment",
          "Industrial carts and trolleys",
          "Warehouse applications",
          "Manufacturing floors"
        ]
      },
      {
        slug: "pu-coupling",
        name: "PU Coupling",
        shortDescription: "Flexible gear coupling inserts for torque transmission",
        description: "Supreme Rubber's PU Couplings are flexible gear coupling inserts designed for smooth torque transmission. They provide vibration dampening, compensation for shaft misalignment, and high torsional stiffness.",
        features: [
          "Vibration dampening",
          "Compensation for shaft misalignment",
          "High torsional stiffness",
          "Durable polyurethane construction",
          "Available in various sizes"
        ],
        applications: [
          "Power transmission systems",
          "Industrial machinery",
          "Pump and motor connections",
          "Conveyor systems"
        ]
      },
      {
        slug: "pu-discs",
        name: "PU Discs",
        shortDescription: "Specialized pipeline pigging seals and cleaning discs",
        description: "Supreme Rubber's PU Discs are polyurethane pipeline pigging seals used for pipe cleaning and maintenance. They feature high abrasion resistance and flexibility for navigating pipeline bends.",
        features: [
          "High abrasion resistance",
          "Flexible for navigating pipeline bends",
          "Effective cleaning performance",
          "Various sizes available",
          "Chemical resistant"
        ],
        applications: [
          "Oil and gas pipelines",
          "Water pipelines",
          "Industrial pipe maintenance",
          "Pipeline cleaning operations"
        ]
      },
      {
        slug: "pu-screen-mesh",
        name: "PU Screen Mesh",
        shortDescription: "Durable screens for vibratory and mining applications",
        description: "Supreme Rubber's PU Screen Mesh provides durable screening solutions for vibratory and trommel screens in mining and aggregate industries. These screens offer noise reduction, long service life, and resistance to plugging and blinding.",
        features: [
          "Noise reduction",
          "Long service life",
          "Resistance to plugging and blinding",
          "High wear resistance",
          "Various aperture sizes"
        ],
        applications: [
          "Mining operations",
          "Aggregate screening",
          "Vibratory screens",
          "Trommel screens"
        ]
      },
      {
        slug: "pu-sheets-rods-tubes",
        name: "PU Sheets, Rods & Tubes",
        shortDescription: "Semi-finished industrial materials",
        description: "Supreme Rubber's PU Sheets, Rods & Tubes are semi-finished polyurethane products for custom machining and industrial use. Available in various hardness grades, they offer excellent tear strength and high elasticity.",
        features: [
          "Available in various hardness grades",
          "Excellent tear strength",
          "High elasticity",
          "Custom machining possible",
          "Multiple colors available"
        ],
        applications: [
          "Custom machined parts",
          "Wear liners",
          "Sealing applications",
          "Industrial tooling"
        ]
      },
      {
        slug: "pu-to-metal-bonded-products",
        name: "PU to Metal Bonded Products",
        shortDescription: "High-performance bonded wear components",
        description: "Supreme Rubber's PU to Metal Bonded Products are high-performance parts where polyurethane is chemically bonded to metal substrates. They offer exceptional bond strength, prevent delamination under heavy loads, and combine metal strength with PU's wear resistance.",
        features: [
          "Exceptional bond strength",
          "Prevents delamination under heavy loads",
          "Combines metal strength with PU wear resistance",
          "Custom geometries available",
          "Various metal substrate options"
        ],
        applications: [
          "Heavy machinery components",
          "Conveyor systems",
          "Industrial rollers",
          "Mining equipment"
        ]
      },
      {
        slug: "tensioner-pad",
        name: "Tensioner Pad",
        shortDescription: "High-friction pads for cable and pipe laying tensioners",
        description: "Supreme Rubber's Tensioner Pads are specialized pads used in pipe-laying and cable-handling tensioners. They feature high friction coefficient for secure grip, non-marking properties, and weather resistance.",
        features: [
          "High friction coefficient for secure grip",
          "Non-marking properties",
          "Weather resistant",
          "Durable construction",
          "Custom sizes available"
        ],
        applications: [
          "Pipe laying operations",
          "Cable handling",
          "Offshore installations",
          "Construction equipment"
        ]
      }
    ]
  },
  {
    slug: "offshore-products",
    title: "Offshore Products",
    image: offshoreProducts,
    description: "Specialized products engineered for demanding offshore environments, designed to withstand harsh marine conditions with long-term durability for oil & gas platforms and wind farms.",
    products: [
      {
        slug: "boatlanding-rubstrips",
        name: "Boatlanding Rubstrips",
        shortDescription: "Heavy-duty profiles protecting platforms from vessel impact",
        description: "Supreme Rubber's Boatlanding Rubstrips are heavy-duty elastomeric or plastic profiles designed to protect offshore platforms, boatlanding structures, and quay walls from repeated impact and abrasion caused by crew boats, supply vessels, and personnel transfer operations.",
        features: [
          "High abrasion and impact resistance – suitable for harsh marine environments",
          "Manufactured from tough elastomers like Natural Rubber and Polyurethane",
          "Also available in UHMWPE/HDPE thermoplastics",
          "UV, seawater, and weather-resistant – long service life",
          "Mounting options: bolt-on, weld-on steel backing or sliding"
        ],
        applications: [
          "Offshore oil and gas platforms",
          "Boatlanding structures and access towers",
          "Floating pontoons and ferry ramps",
          "Supply vessel landing zones",
          "Marine jetties and dolphin piles"
        ]
      },
      {
        slug: "compression-fenders",
        name: "Compression Fenders",
        shortDescription: "High energy absorption with up to 55% deflection",
        description: "Supreme Rubber's Offshore Platform Compression Cell Fenders are engineered for demanding offshore applications requiring high energy absorption, axial compression performance, and long-term resistance to extreme marine environments. Ideal for boat landing zones and jacket structures.",
        features: [
          "High energy-to-reaction efficiency, suitable for large supply vessels and CTVs",
          "Stable axial compression up to 55% deflection",
          "Marine-grade rubber compounds: Natural Rubber and synthetic rubber blends",
          "Long life in splash zone and tidal exposure",
          "UV, ozone, and saltwater resistant"
        ],
        applications: [
          "Offshore oil & gas platforms and jackets",
          "Subsea infrastructure with dynamic vessel interface",
          "Boat landing zones",
          "Wind turbine installations"
        ]
      },
      {
        slug: "grout-seals",
        name: "Grout Seals",
        shortDescription: "Pressure containment for grouting in windfarm monopiles",
        description: "Supreme Rubber's Grout Seals are high-performance elastomeric components designed to provide effective pressure containment and sealing during grouting operations in offshore platforms and windfarm monopiles. These seals ensure that grout is retained within designated cavities.",
        features: [
          "High sealing efficiency under grouting pressure",
          "Flexible design accommodates surface irregularities and joint movement",
          "Manufactured from premium-grade Natural Rubber, EPDM, or Neoprene",
          "Available in passive, inflatable, compression-fit, and molded ring formats",
          "Excellent resistance to seawater, cementitious materials, and hydrocarbon exposure",
          "Custom sizes and profiles available"
        ],
        applications: [
          "Offshore wind turbine monopile grouting",
          "Oil & gas platform foundation joints",
          "Subsea jacket leg and pile interface sealing",
          "Structural grouting for caissons, risers, and anchor blocks"
        ]
      },
      {
        slug: "offshore-buoy",
        name: "Offshore Buoy",
        shortDescription: "UV-stabilized polyurethane buoys for navigation and mooring",
        description: "Supreme's Offshore Buoys are engineered for long-term deployment in open-sea and harsh marine environments, supporting navigation marking, mooring systems, subsea positioning, and safety zones. Manufactured from UV-stabilized, marine-grade polyurethane skins over high-density foam cores.",
        features: [
          "Cast polyurethane skin – seamless and abrasion-resistant",
          "Closed-cell polyethylene/EVA foam core – unsinkable even if punctured",
          "High visibility colors (red, yellow, orange)",
          "Steel or composite internal structures for mooring and load-bearing",
          "Fittings available: mooring eyes, lifting lugs, radar reflectors, lights",
          "Sizes: from 500 mm to 3000+ mm diameter; custom buoyancy ratings",
          "UV, saltwater, impact, and marine growth resistant"
        ],
        applications: [
          "Navigation aids (port, starboard, safe water, isolated danger)",
          "Offshore mooring buoys for tankers and support vessels",
          "Oil & gas platform zone marking",
          "Offshore wind farm safety buoys",
          "Subsea equipment markers and riser location indicators",
          "Fish farms and aquaculture zones"
        ]
      },
      {
        slug: "piggy-back-saddles",
        name: "Piggy Back Saddles",
        shortDescription: "Elastomeric saddles protecting secondary pipelines",
        description: "Supreme Rubber's Piggyback Saddles are engineered to safely separate, support, and protect secondary ('piggybacked') pipelines strapped to a primary pipeline during subsea, offshore, or onshore pipeline installations.",
        features: [
          "Precision-molded elastomeric saddles – custom-fit for dual-pipe systems",
          "Secure secondary pipeline support during towing, laying, or operation",
          "Prevents damage from movement, vibration, and contact pressure",
          "Manufactured from durable rubber or polyurethane",
          "High resistance to seawater, UV, impact, and hydrocarbons",
          "Non-metallic and corrosion-free",
          "Compatible with banding systems, clamps, or bolted straps"
        ],
        applications: [
          "Subsea pipeline tow-outs and laydowns",
          "Offshore risers, flowlines, and umbilicals",
          "Onshore dual-pipe trenching and installations",
          "Supporting hydraulic lines, fiber optics, or umbilicals",
          "Deepwater oil & gas and renewable energy transmission infrastructure"
        ]
      },
      {
        slug: "shear-fenders",
        name: "Shear Fenders",
        shortDescription: "Lateral impact absorption for CTV and supply boat approaches",
        description: "Supreme Rubber's Offshore Platform Shear Fenders are engineered to absorb lateral (shear) impact forces during crew transfer vessel (CTV), supply boat, and service vessel approaches to offshore structures such as wind turbines, oil & gas platforms, and substation jackets.",
        features: [
          "Optimized for lateral deflection – ideal for boat landing zones",
          "Compact profile – suits narrow access points and jacket members",
          "Manufactured from premium marine-grade Natural Rubber or Neoprene",
          "High energy absorption with low reaction force",
          "Excellent resistance to UV, ozone, saltwater, and marine growth",
          "Multiple mounting options: welded, bolted, or integrated with steel backing"
        ],
        applications: [
          "Offshore wind turbine transition piece landings",
          "Oil & gas platform riser guards and jacket faces",
          "Subsea structure entry points for CTVs and SOVs",
          "FPSO or FLNG near-field access fendering",
          "Dynamic positioning zones at boat landing ladders"
        ]
      }
    ]
  },
  {
    slug: "roller-products",
    title: "Roller Products",
    image: rollerProducts,
    description: "Precision-engineered rollers for printing and industrial applications, manufactured from Natural Rubber, NBR, EPDM, Silicone, and Polyurethane for optimal performance.",
    products: [
      {
        slug: "printing-rollers",
        name: "Printing Rollers",
        shortDescription: "Inking and dampening rollers for various printing processes",
        description: "Supreme Rubber's Printing Rollers include inking and dampening rollers engineered for heatset, sheet-fed, flexo, and rotogravure printing processes. Our rollers deliver consistent ink transfer and optimal print quality.",
        features: [
          "Precision-engineered for consistent ink transfer",
          "Available for various printing processes",
          "Multiple durometer options",
          "Excellent chemical resistance",
          "Long service life"
        ],
        applications: [
          "Heatset printing",
          "Sheet-fed printing",
          "Flexographic printing",
          "Rotogravure printing"
        ]
      },
      {
        slug: "industrial-rollers",
        name: "Industrial Rollers",
        shortDescription: "Heavy-duty rollers in various materials and patterns",
        description: "Supreme Rubber's Industrial Rollers are heavy-duty rollers manufactured in various materials and groove patterns for demanding industrial applications. They are designed for material handling, processing, and manufacturing operations.",
        features: [
          "Heavy-duty construction",
          "Various material options",
          "Multiple groove patterns available",
          "Custom sizes and specifications",
          "High load capacity"
        ],
        applications: [
          "Material handling",
          "Manufacturing processes",
          "Conveyor systems",
          "Paper and textile industries"
        ]
      },
      {
        slug: "diamond-groove-rollers",
        name: "Diamond Groove Rollers",
        shortDescription: "Precision grooved surfaces for material handling",
        description: "Supreme Rubber's Diamond Groove Rollers feature precision grooved surfaces in diamond patterns for optimal material handling and grip. The diamond pattern ensures consistent contact and performance.",
        features: [
          "Diamond groove pattern",
          "Precision-machined surfaces",
          "Optimal grip and material handling",
          "Various sizes available",
          "Durable construction"
        ],
        applications: [
          "Material handling",
          "Web processing",
          "Textile industries",
          "Paper processing"
        ]
      },
      {
        slug: "spiral-helical-groove-rollers",
        name: "Spiral/Helical Groove Rollers",
        shortDescription: "Optimal fluid distribution and grip",
        description: "Supreme Rubber's Spiral/Helical Groove Rollers are designed for optimal fluid distribution and grip. The helical groove pattern ensures even distribution of fluids and consistent material contact.",
        features: [
          "Spiral/helical groove pattern",
          "Optimal fluid distribution",
          "Enhanced grip characteristics",
          "Precision engineering",
          "Multiple pitch options"
        ],
        applications: [
          "Fluid application systems",
          "Coating processes",
          "Web handling",
          "Processing equipment"
        ]
      },
      {
        slug: "drum-lagging",
        name: "Drum Lagging",
        shortDescription: "Chevron groove patterns for conveyor pulleys",
        description: "Supreme Rubber's Drum Lagging features chevron groove patterns designed for conveyor pulleys. The lagging improves belt traction and extends pulley life in conveyor systems.",
        features: [
          "Chevron groove patterns",
          "Improved belt traction",
          "Extended pulley life",
          "Various thickness options",
          "Easy installation"
        ],
        applications: [
          "Conveyor systems",
          "Mining operations",
          "Bulk material handling",
          "Industrial processing"
        ]
      },
      {
        slug: "silicone-rollers",
        name: "Silicone Rollers",
        shortDescription: "Heat-resistant rollers for specialized applications",
        description: "Supreme Rubber's Silicone Rollers are heat-resistant rollers designed for specialized applications requiring high temperature resistance. Silicone material provides excellent release properties and thermal stability.",
        features: [
          "High temperature resistance",
          "Excellent release properties",
          "Non-stick surface",
          "Chemical resistant",
          "Long service life"
        ],
        applications: [
          "Heat lamination",
          "Food processing",
          "Packaging applications",
          "High-temperature processes"
        ]
      },
      {
        slug: "lamination-rollers",
        name: "Lamination Rollers",
        shortDescription: "Hot, cold, and solventless lamination systems",
        description: "Supreme Rubber's Lamination Rollers are designed for hot, cold, and solventless lamination systems. These precision rollers ensure consistent lamination quality and long service life.",
        features: [
          "Precision-engineered for lamination",
          "Available for various lamination processes",
          "Consistent nip pressure",
          "Heat resistant options",
          "Long service life"
        ],
        applications: [
          "Hot lamination",
          "Cold lamination",
          "Solventless lamination",
          "Flexible packaging"
        ]
      },
      {
        slug: "polyurethane-rollers",
        name: "Polyurethane Rollers",
        shortDescription: "High-wear resistance for demanding environments",
        description: "Supreme Rubber's Polyurethane Rollers offer high-wear resistance for demanding environments. The polyurethane material provides excellent abrasion resistance and load-bearing capacity.",
        features: [
          "High-wear resistance",
          "Excellent load-bearing capacity",
          "Abrasion resistant",
          "Oil and chemical resistant",
          "Various hardness grades"
        ],
        applications: [
          "Heavy-duty industrial use",
          "Material handling",
          "Paper and packaging",
          "Steel processing"
        ]
      },
      {
        slug: "flexographic-rollers",
        name: "Flexographic Rollers",
        shortDescription: "Precision rollers for flexo printing",
        description: "Supreme Rubber's Flexographic Rollers are precision rollers engineered specifically for flexographic printing applications. They ensure consistent ink metering and transfer for high-quality print results.",
        features: [
          "Precision engineering for flexo printing",
          "Consistent ink metering",
          "Various durometer options",
          "Excellent chemical resistance",
          "Long service life"
        ],
        applications: [
          "Flexographic printing",
          "Label printing",
          "Packaging printing",
          "Corrugated printing"
        ]
      },
      {
        slug: "rotogravure-rollers",
        name: "Rotogravure Rollers",
        shortDescription: "High-quality rollers for gravure printing",
        description: "Supreme Rubber's Rotogravure Rollers are high-quality rollers designed for gravure printing applications. They provide precise impression and consistent print quality.",
        features: [
          "Designed for gravure printing",
          "Precise impression control",
          "Consistent print quality",
          "Durable construction",
          "Multiple material options"
        ],
        applications: [
          "Rotogravure printing",
          "Publication printing",
          "Packaging printing",
          "Decorative printing"
        ]
      },
      {
        slug: "coating-applicator-rollers",
        name: "Coating/Applicator Rollers",
        shortDescription: "Precision application for coatings and adhesives",
        description: "Supreme Rubber's Coating/Applicator Rollers are designed for precision application of coatings and adhesives. They ensure even distribution and consistent application thickness.",
        features: [
          "Precision coating application",
          "Even distribution",
          "Consistent application thickness",
          "Chemical resistant surfaces",
          "Custom specifications available"
        ],
        applications: [
          "Coating applications",
          "Adhesive application",
          "Surface treatment",
          "Manufacturing processes"
        ]
      }
    ]
  },
  {
    slug: "rubber-lining",
    title: "Rubber Lining",
    image: rubberLining,
    description: "Protective rubber lining solutions for corrosion and wear resistance, extending equipment life in chemical processing, mining, water treatment, and oil & gas industries.",
    products: [
      {
        slug: "industrial-equipment-lining",
        name: "Industrial Equipment Lining",
        shortDescription: "Protection for tanks, pipes, and chutes in chemical processing",
        description: "Supreme Rubber's Industrial Equipment Lining provides protective lining for machinery such as tanks, pipes, and chutes. This lining prevents wear and corrosion, extends equipment lifespan, and reduces maintenance costs.",
        features: [
          "Prevents wear and corrosion",
          "Extends equipment lifespan",
          "Reduces maintenance costs",
          "Custom application for various equipment",
          "Chemical resistant formulations"
        ],
        applications: [
          "Chemical processing",
          "Water treatment",
          "Material handling"
        ]
      },
      {
        slug: "mining-quarry-lining",
        name: "Mining and Quarry Lining",
        shortDescription: "Specialized lining for crushers, chutes, and screens",
        description: "Supreme Rubber's Mining and Quarry Lining provides specialized rubber lining for equipment exposed to harsh conditions in mining operations. It enhances durability, provides impact resistance, and protects against abrasion from materials.",
        features: [
          "Enhances durability",
          "Provides impact resistance",
          "Protects against abrasion from materials",
          "Withstands harsh mining conditions",
          "Extended equipment life"
        ],
        applications: [
          "Crushers",
          "Chutes and screens",
          "Mining equipment"
        ]
      },
      {
        slug: "chemical-storage-lining",
        name: "Chemical Storage Lining",
        shortDescription: "Custom linings for tanks storing corrosive chemicals",
        description: "Supreme Rubber's Chemical Storage Lining provides custom rubber linings for tanks and vessels storing corrosive chemicals. It safeguards against leaks, prevents chemical reactions with storage materials, and ensures safety compliance.",
        features: [
          "Safeguards against leaks",
          "Prevents chemical reactions with storage materials",
          "Ensures safety compliance",
          "Custom formulations for specific chemicals",
          "Long-term corrosion protection"
        ],
        applications: [
          "Chemical manufacturing",
          "Storage facilities",
          "Processing plants"
        ]
      },
      {
        slug: "piping-valve-lining",
        name: "Piping and Valve Lining",
        shortDescription: "Corrosion protection for water treatment and oil & gas",
        description: "Supreme Rubber's Piping and Valve Lining provides lining for pipes and valves to protect against corrosion and erosion. It extends the life of piping systems, ensures safe transport of fluids, and reduces the risk of leaks.",
        features: [
          "Extends the life of piping systems",
          "Ensures safe transport of fluids",
          "Reduces the risk of leaks",
          "Corrosion and erosion protection",
          "Multiple compound options"
        ],
        applications: [
          "Water treatment plants",
          "Oil and gas pipelines",
          "Industrial piping systems"
        ]
      },
      {
        slug: "tank-lining",
        name: "Tank Lining",
        shortDescription: "Chemical-resistant protection extending equipment lifespan",
        description: "Supreme Rubber's Tank Lining provides chemical-resistant protection that extends equipment lifespan. Our tank lining solutions are customized for specific chemical exposure and operating conditions.",
        features: [
          "Chemical-resistant protection",
          "Extends equipment lifespan",
          "Customized for specific applications",
          "Professional installation",
          "Long-term durability"
        ],
        applications: [
          "Chemical storage tanks",
          "Process vessels",
          "Water treatment facilities"
        ]
      },
      {
        slug: "abrasion-resistant-lining",
        name: "Abrasion Resistant Lining",
        shortDescription: "Enhanced durability in high-wear environments",
        description: "Supreme Rubber's Abrasion Resistant Lining provides enhanced durability in high-wear environments. This specialized lining protects equipment from abrasive materials and extends service life significantly.",
        features: [
          "Enhanced durability in high-wear environments",
          "Protects against abrasive materials",
          "Significantly extends service life",
          "Various hardness grades",
          "Custom thickness options"
        ],
        applications: [
          "Mining equipment",
          "Material handling systems",
          "Aggregate processing"
        ]
      }
    ]
  },
  {
    slug: "rubber-sheets",
    title: "Rubber Sheets",
    image: rubberSheets,
    description: "Premium quality rubber sheets tailored for diverse industrial needs, delivering outstanding performance and durability across various applications.",
    products: [
      {
        slug: "general-purpose-rubber-sheets",
        name: "General Purpose Rubber Sheets",
        shortDescription: "Versatile and durable for general applications",
        description: "Supreme Rubber's General Purpose Rubber Sheets are versatile and durable sheets ideal for general applications. They provide reliable performance across a wide range of industrial and commercial uses.",
        features: [
          "Versatile application",
          "Durable construction",
          "Cost-effective solution",
          "Various thicknesses available",
          "Easy to fabricate"
        ],
        applications: [
          "General industrial use",
          "Gasket fabrication",
          "Flooring and matting",
          "Protective linings"
        ]
      },
      {
        slug: "heavy-duty-rubber-sheets",
        name: "Heavy-Duty Rubber Sheets",
        shortDescription: "Designed for tough industrial environments",
        description: "Supreme Rubber's Heavy-Duty Rubber Sheets are designed for tough environments, perfect for industrial use. They offer enhanced durability and resistance to demanding conditions.",
        features: [
          "Designed for tough environments",
          "Enhanced durability",
          "High load-bearing capacity",
          "Abrasion resistant",
          "Various sizes available"
        ],
        applications: [
          "Industrial flooring",
          "Heavy equipment protection",
          "Loading dock applications",
          "Manufacturing facilities"
        ]
      },
      {
        slug: "anti-slip-rubber-sheets",
        name: "Anti-Slip Rubber Sheets",
        shortDescription: "Enhanced grip for safety in various settings",
        description: "Supreme Rubber's Anti-Slip Rubber Sheets provide enhanced grip for safety in various settings. The textured surface ensures secure footing and reduces slip hazards.",
        features: [
          "Enhanced grip and traction",
          "Textured surface patterns",
          "Safety compliance",
          "Durable construction",
          "Easy to clean"
        ],
        applications: [
          "Walkways and ramps",
          "Industrial floors",
          "Vehicle flooring",
          "Wet areas"
        ]
      },
      {
        slug: "heat-resistant-rubber-sheets",
        name: "Heat-Resistant Rubber Sheets",
        shortDescription: "Suitable for high-temperature applications",
        description: "Supreme Rubber's Heat-Resistant Rubber Sheets are suitable for high-temperature applications. They maintain their properties and performance in elevated temperature environments.",
        features: [
          "High temperature resistance",
          "Maintains flexibility at elevated temperatures",
          "Durable in thermal cycling",
          "Various temperature ratings",
          "Chemical resistant"
        ],
        applications: [
          "High-temperature gaskets",
          "Furnace sealing",
          "Industrial ovens",
          "Automotive applications"
        ]
      },
      {
        slug: "electrical-insulation-rubber-sheets",
        name: "Electrical Insulation Rubber Sheets",
        shortDescription: "Safe and reliable for electrical applications",
        description: "Supreme Rubber's Electrical Insulation Rubber Sheets provide safe and reliable insulation for electrical applications. They offer excellent dielectric properties and meet safety standards.",
        features: [
          "Excellent dielectric properties",
          "Safety standard compliance",
          "Various voltage ratings",
          "Flame retardant options",
          "Durable construction"
        ],
        applications: [
          "Switchboard matting",
          "Electrical panel protection",
          "High voltage areas",
          "Substations"
        ]
      },
      {
        slug: "natural-rubber-sheets",
        name: "Natural Rubber Sheets",
        shortDescription: "High elasticity and tensile strength",
        description: "Supreme Rubber's Natural Rubber Sheets offer high elasticity and tensile strength. Natural rubber provides excellent mechanical properties and abrasion resistance.",
        features: [
          "High elasticity",
          "Excellent tensile strength",
          "Good abrasion resistance",
          "Superior tear resistance",
          "Various hardness grades"
        ],
        applications: [
          "General industrial use",
          "Gasket manufacturing",
          "Cushioning applications",
          "Impact protection"
        ]
      },
      {
        slug: "neoprene-sheets",
        name: "Neoprene Sheets",
        shortDescription: "Weather and ozone resistant",
        description: "Supreme Rubber's Neoprene Sheets are weather and ozone resistant, making them ideal for outdoor and demanding applications. Neoprene offers excellent all-around performance.",
        features: [
          "Weather and ozone resistant",
          "Oil resistant",
          "Moderate chemical resistance",
          "Good flame resistance",
          "Wide temperature range"
        ],
        applications: [
          "Outdoor applications",
          "Gaskets and seals",
          "Weather stripping",
          "Industrial applications"
        ]
      },
      {
        slug: "epdm-sheets",
        name: "EPDM Sheets",
        shortDescription: "Excellent UV and weather resistance",
        description: "Supreme Rubber's EPDM Sheets offer excellent UV and weather resistance. EPDM is the material of choice for outdoor and roofing applications.",
        features: [
          "Excellent UV resistance",
          "Outstanding weather resistance",
          "Wide temperature range",
          "Steam and water resistant",
          "Long outdoor service life"
        ],
        applications: [
          "Roofing membranes",
          "Outdoor gaskets",
          "Water systems",
          "Automotive weatherstripping"
        ]
      },
      {
        slug: "nitrile-sheets",
        name: "Nitrile Sheets",
        shortDescription: "Oil and fuel resistant",
        description: "Supreme Rubber's Nitrile Sheets are oil and fuel resistant, ideal for applications involving petroleum products. Nitrile rubber provides excellent resistance to oils, greases, and fuels.",
        features: [
          "Excellent oil resistance",
          "Fuel and petroleum resistant",
          "Good abrasion resistance",
          "Wide temperature range",
          "Various hardness grades"
        ],
        applications: [
          "Oil and gas industry",
          "Automotive applications",
          "Fuel handling",
          "Industrial gaskets"
        ]
      },
      {
        slug: "silicone-sheets",
        name: "Silicone Sheets",
        shortDescription: "High temperature resistance",
        description: "Supreme Rubber's Silicone Sheets offer high temperature resistance and excellent flexibility across a wide temperature range. Silicone is ideal for food-grade and medical applications.",
        features: [
          "High temperature resistance (-60°C to +250°C)",
          "FDA compliant options",
          "Excellent flexibility",
          "Non-toxic and odorless",
          "UV and ozone resistant"
        ],
        applications: [
          "Food processing",
          "Medical applications",
          "High-temperature gaskets",
          "Pharmaceutical industry"
        ]
      }
    ]
  },
  {
    slug: "extrusions-profiles",
    title: "Extrusions & Profiles",
    image: extrusions,
    description: "Custom rubber extrusions and profiles for sealing, protection, and insulation applications across construction, marine, and industrial sectors.",
    products: [
      {
        slug: "cable-protection-profiles",
        name: "Cable Protection Profiles",
        shortDescription: "Mechanical protection for cables and hoses",
        description: "Supreme Rubber's Cable Protection Profiles are designed to provide robust mechanical protection and flexible routing for cables, hoses, and wiring systems. Made from high-performance elastomers, these profiles protect against abrasion, impact, moisture, and environmental hazards.",
        features: [
          "Durable rubber construction",
          "Flexible and non-slip – ideal for foot and vehicle traffic zones",
          "Available in a wide range of shapes",
          "Easy installation – push-fit, adhesive, or screw-mounting options"
        ],
        applications: [
          "Electrical cable management in factories and workshops",
          "Floor cable protection in offices, events, and public spaces",
          "Hydraulic and pneumatic hose routing on machinery",
          "Marine, railway, and airport ground support systems"
        ]
      },
      {
        slug: "container-rubber-seals",
        name: "Container Rubber Seals",
        shortDescription: "Heavy-duty EPDM seals for shipping containers",
        description: "Supreme Rubber's Container Rubber Seals are designed to provide reliable environmental sealing for shipping containers, cargo doors, and storage units. Engineered for durability and resilience, our seals ensure air-tight and water-tight protection.",
        features: [
          "Excellent sealing performance under compression",
          "Weather, UV, ozone, and saltwater resistant – ideal for outdoor and marine use",
          "Available in various profiles",
          "Manufactured from EPDM",
          "Easy to install"
        ],
        applications: [
          "Shipping containers (ISO and custom-sized)",
          "Reefer containers",
          "Cargo doors",
          "Storage units"
        ]
      },
      {
        slug: "edge-protection-profiles",
        name: "Edge Protection Profiles",
        shortDescription: "Flexible guards for sharp edges",
        description: "Supreme Rubber's Edge Protection Profiles are designed to cover sharp or exposed edges on metal, glass, plastic, or composite panels. These profiles prevent injury, reduce wear on adjoining components, and protect cables and materials passing over rough edges.",
        features: [
          "Protects edges and improves safety on machinery, panels, doors, and enclosures",
          "Available with or without internal metal reinforcement for enhanced grip",
          "UV, ozone, and weather-resistant – suitable for long-term outdoor use",
          "Quick installation – push-on or adhesive options",
          "Available in U-channel, C-channel, L-type, bulb edge, or dual-durometer designs"
        ],
        applications: [
          "Automotive body panels and door edges",
          "Sheet metal enclosures and cabinets",
          "Glass panels and architectural fittings",
          "Machinery guards and control boxes",
          "Marine hatches and trailer trims"
        ]
      },
      {
        slug: "epdm-rubber-extrusions",
        name: "EPDM Rubber Extrusions",
        shortDescription: "Custom weatherproofing profiles",
        description: "Supreme Rubber's EPDM Rubber Extrusions are precision-manufactured sealing and edge protection profiles made from high-quality Ethylene Propylene Diene Monomer (EPDM) rubber. Known for its excellent resistance to UV, ozone, weathering, and aging, EPDM is ideal for long-term outdoor use.",
        features: [
          "Excellent resistance to UV, ozone, and extreme weather conditions",
          "Wide temperature range: -50°C to +130°C",
          "Superior elasticity and compression set resistance",
          "Available in solid, sponge, or co-extruded formats",
          "Custom profiles: U-channels, P-profiles, D-seals, glazing gaskets, edge trims",
          "Adhesive backing, metal reinforcement, or dual-hardness options available"
        ],
        applications: [
          "Automotive door, window, and trunk seals",
          "Industrial enclosures and cabinets",
          "Construction and curtain wall glazing systems",
          "HVAC equipment and duct seals",
          "Marine and trailer sealing",
          "Electrical panel gaskets"
        ]
      },
      {
        slug: "expansion-seal",
        name: "Expansion Seal",
        shortDescription: "Specialized seals for movement joints",
        description: "Supreme Rubber's Expansion Seals and Joints are engineered to accommodate structural movement caused by temperature variation, load shifts, seismic activity, or material settling. Made from high-performance elastomeric compounds, these seals ensure watertight, dustproof, and vibration-resistant performance.",
        features: [
          "Durable and elastic rubber construction – absorbs movement without cracking",
          "Excellent resistance to UV, ozone, water, and temperature extremes",
          "Available in extruded or molded profiles for linear and angular joints",
          "Custom widths, thicknesses, and movement ranges",
          "Materials: EPDM, Neoprene, or Natural Rubber – with reinforced options",
          "Anchoring options: steel-reinforced edges, adhesive backings, or bolt-through"
        ],
        applications: [
          "Expansion joints in bridges, highways, and parking decks",
          "Concrete floor joints in factories, warehouses, and cold storage",
          "Seismic joints in buildings and high-rises"
        ]
      },
      {
        slug: "glazing-seals",
        name: "Glazing Seals",
        shortDescription: "Weatherproof seals for glass installations",
        description: "Supreme Rubber's Glazing Seals are precision-extruded rubber profiles engineered to ensure airtight and watertight sealing between glass panels and structural framing in windows, doors, curtain walls, and skylight systems.",
        features: [
          "Excellent sealing performance against air, water, dust, and sound",
          "High UV, ozone, and weather resistance – ideal for outdoor use",
          "Available in soft and firm grades for internal and external glazing",
          "Superior compression set resistance to maintain long-term sealing pressure",
          "Material options: EPDM (standard), Silicone (for high-temp), Neoprene",
          "Profile types: wedge gaskets, flipper seals, glazing beads, U-channels, T-seals"
        ],
        applications: [
          "Aluminum and uPVC window systems",
          "Curtain wall façades and structural glazing",
          "Skylights, sunrooms, and glass partitions",
          "Commercial glass doors and shopfronts",
          "Cleanroom and laboratory glazing panels"
        ]
      },
      {
        slug: "hatch-cover-seal",
        name: "Hatch Cover Seal",
        shortDescription: "Marine-grade seals for ship hatches",
        description: "Supreme Rubber's Hatch Cover Seals are precision-engineered elastomeric sealing profiles designed to ensure watertight protection for cargo hold hatches on vessels such as bulk carriers, general cargo ships, container ships, and offshore platforms.",
        features: [
          "Watertight and weatherproof sealing under variable compression",
          "Outstanding resistance to seawater, UV, ozone, and temperature fluctuations",
          "Material Options: EPDM, Neoprene (CR)",
          "Profile Types: Double Lip Seals, Hollow & Solid D-Section, Bulb Seals, Omega & Dogbone",
          "Cut-to-length or roll form supply",
          "Corner molding and heat-vulcanized jointing"
        ],
        applications: [
          "Hatch covers of cargo holds and tankers",
          "Manhole and access door seals",
          "Pontoon hatches and coaming systems",
          "Offshore containers and watertight doors"
        ]
      },
      {
        slug: "pvc-extrusions",
        name: "PVC Extrusions",
        shortDescription: "Durable plastic profiles for industrial use",
        description: "Supreme's PVC Extrusions offer a reliable, cost-effective solution for sealing, insulating, protecting, and organizing across a wide range of industries. Manufactured using rigid or flexible Polyvinyl Chloride (PVC), our extruded profiles provide excellent durability, chemical resistance, and design flexibility.",
        features: [
          "Excellent chemical, oil, and moisture resistance",
          "UV-stabilized and weather-resistant for indoor and outdoor use",
          "Available in rigid, semi-rigid, and flexible grades",
          "Wide range of standard and custom profiles: U-channels, T-profiles, edge trims",
          "Color options: Black, grey, white",
          "Co-extruded profiles with dual-hardness materials available"
        ],
        applications: [
          "Electrical panel edge trims and wire guides",
          "Door and window seals for building and automotive sectors",
          "Furniture trims and glazing profiles",
          "Cable management and conduit insulation",
          "Packaging and display profiles"
        ]
      },
      {
        slug: "silicone-rubber-profiles",
        name: "Silicone Rubber Profiles",
        shortDescription: "Heat-resistant sealing solutions",
        description: "Supreme's Silicone Rubber Profiles are engineered for precision sealing, insulation, and protection in environments where extreme temperature resistance, non-reactivity, and hygiene are critical. Manufactured from high-purity industrial-grade silicone elastomers.",
        features: [
          "Temperature range: -60°C to +250°C (up to +300°C for special grades)",
          "Excellent resistance to UV, ozone, weathering, and aging",
          "Non-toxic, odorless, and chemically inert",
          "Profiles available: U-seals, P-seals, D-sections, T-strips, gaskets",
          "Solid or sponge/foam grades for cushioning or sealing",
          "Colors: Translucent, red oxide, white, blue, or custom-matched"
        ],
        applications: [
          "Oven door gaskets and high-temp machinery seals",
          "Lighting gaskets and electrical enclosures",
          "Aerospace, railway, and mass transit interiors",
          "Architectural glazing and curtain walls"
        ]
      },
      {
        slug: "sponge-rubber-profiles",
        name: "Sponge Rubber Profiles",
        shortDescription: "Soft, compressible air and dust seals",
        description: "Supreme's Sponge Rubber Profiles are designed for applications requiring lightweight, flexible, and compressible sealing. Manufactured from high-quality closed-cell sponge rubber compounds, these profiles provide excellent sealing against air, dust, moisture, and vibration.",
        features: [
          "Excellent compression and recovery with low closure force",
          "Closed-cell structure for superior water and air sealing",
          "Wide range of profiles: D-seals, P-seals, E-strips, tubing, U-channels, bulb seals",
          "Available with adhesive backing for quick installation",
          "Temperature range: EPDM (-40°C to +120°C), Silicone (-60°C to +200°C)",
          "Weather, ozone, and UV resistant – suitable for outdoor use",
          "Custom hardness, density, color, and cross-sections available"
        ],
        applications: [
          "Door and window seals in vehicles, buildings, and equipment",
          "HVAC and appliance gaskets",
          "Electrical enclosures and lighting fixtures",
          "Marine hatches and access panels",
          "Industrial machinery and vibration dampening pads"
        ]
      },
      {
        slug: "tile-movement-joints",
        name: "Tile Movement Joints",
        shortDescription: "Specialized profiles for ceramic installations",
        description: "Supreme Rubber's Tile Movement Joints are designed to accommodate the natural expansion and contraction of tiled surfaces caused by temperature changes, substrate movement, and structural settling. These joints prevent tile cracking, delamination, and grout failure.",
        features: [
          "Absorbs movement in horizontal and vertical planes",
          "Prevents cracking, warping, or debonding of tiles and grout",
          "Available in EPDM, TPE with aluminium, stainless steel flanges",
          "UV, water, and chemical resistant – ideal for wet areas and outdoor use",
          "Profile types: Flush floor joints, Wall and ceiling joints, Heavy-duty floor expansion joints",
          "Color-matched center strips for aesthetic integration with grout lines"
        ],
        applications: [
          "Ceramic, porcelain, or natural stone tiled floors and walls",
          "Shopping malls, hotels, airports, and public infrastructure",
          "Facades, balconies, terraces, and wet areas",
          "Industrial kitchens"
        ]
      },
      {
        slug: "tpv-tpe-extrusions",
        name: "TPV/TPE Extrusions",
        shortDescription: "Rubber-like plastic with high chemical resistance",
        description: "Our TPV (Thermoplastic Vulcanizate) and TPE (Thermoplastic Elastomer) Extrusions offer a perfect balance between the elasticity of rubber and the processability of plastic. These profiles are ideal for dynamic sealing, insulation, and edge protection applications.",
        features: [
          "Excellent UV, ozone, and weather resistance – ideal for outdoor and automotive use",
          "Wide operating temperature range",
          "High flexibility and fatigue resistance under repeated motion",
          "Profiles: Bulb seals, trim seals, edge grips, glazing gaskets, flap seals, dual-hardness strips",
          "Custom colors and surface finishes",
          "Co-extruded profiles available"
        ],
        applications: [
          "Automotive and transport: door seals, trunk and window profiles",
          "Construction: curtain wall gaskets, glazing seals, expansion joint covers",
          "Consumer appliances: lid and edge seals",
          "HVAC systems: duct edge trims and air flap seals",
          "Electronics and enclosures: cable guides, dust seals, and access panel trims"
        ]
      }
    ]
  }
];

// Helper functions
export const getCategoryBySlug = (slug: string): ProductCategory | undefined => {
  return productCategories.find(cat => cat.slug === slug);
};

export const getProductBySlug = (categorySlug: string, productSlug: string): Product | undefined => {
  const category = getCategoryBySlug(categorySlug);
  return category?.products.find(prod => prod.slug === productSlug);
};

export const getAllProducts = (): Array<{ category: ProductCategory; product: Product }> => {
  return productCategories.flatMap(category => 
    category.products.map(product => ({ category, product }))
  );
};
