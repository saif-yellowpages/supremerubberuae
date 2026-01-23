import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Factory, 
  Award, 
  Globe, 
  TrendingUp, 
  Building2, 
  Handshake, 
  Leaf, 
  Rocket,
  Target,
  Users
} from "lucide-react";

interface MilestoneData {
  year: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

const milestones: MilestoneData[] = [
  {
    year: "2002",
    title: "Where It All Began",
    description: "Supreme Rubber LLC was established in UAE with a vision to provide high-quality rubber and polyurethane products to industries worldwide.",
    icon: Factory,
  },
  {
    year: "2008",
    title: "Growing Stronger",
    description: "Expanded operations and achieved significant growth in manufacturing capabilities and client base across the Middle East region.",
    icon: TrendingUp,
  },
  {
    year: "2012",
    title: "Diversifying Our Offerings",
    description: "Introduced new product lines including polyurethane products and expanded into offshore and marine industry solutions.",
    icon: Target,
  },
  {
    year: "2017",
    title: "Moving Forward",
    description: "Continued expansion with state-of-the-art manufacturing equipment and enhanced quality control processes.",
    icon: Rocket,
  },
  {
    year: "2019",
    title: "Global Partnership",
    description: "Established strategic partnerships with international clients and suppliers, expanding our global footprint.",
    icon: Handshake,
  },
  {
    year: "2020",
    title: "Expanding Our Engagement",
    description: "Enhanced customer engagement programs and expanded our 400,000 sq. ft. manufacturing facility.",
    icon: Building2,
  },
  {
    year: "2021",
    title: "Strengthening Our Position",
    description: "Achieved ISO certifications for quality, safety, and environmental management, reinforcing our commitment to excellence.",
    icon: Award,
  },
  {
    year: "2022",
    title: "Setting New Standards",
    description: "Implemented advanced automation and quality systems, setting new industry benchmarks for rubber manufacturing.",
    icon: Globe,
  },
  {
    year: "2024-2025",
    title: "Embracing The Future",
    description: "Continuing innovation with sustainable practices and cutting-edge technology for the next generation of rubber solutions.",
    icon: Leaf,
  },
];

const Timeline = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="w-full py-8">
      {/* Desktop Timeline */}
      <div className="hidden lg:block relative">
        {/* Main Timeline Line */}
        <div className="absolute left-0 right-0 top-1/2 h-1 bg-gradient-to-r from-primary via-primary/80 to-primary transform -translate-y-1/2 rounded-full" />
        
        {/* Timeline Items */}
        <div className="relative flex justify-between items-center px-4">
          {milestones.map((milestone, index) => {
            const IconComponent = milestone.icon;
            const isActive = activeIndex === index;
            const isTop = index % 2 === 0;
            
            return (
              <div
                key={milestone.year}
                className={`relative flex flex-col items-center ${isTop ? 'flex-col' : 'flex-col-reverse'}`}
                style={{ width: `${100 / milestones.length}%` }}
              >
                {/* Content Card */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, y: isTop ? 10 : -10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: isTop ? 10 : -10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className={`absolute ${isTop ? 'bottom-24' : 'top-24'} left-1/2 transform -translate-x-1/2 w-48 bg-card border border-border rounded-lg shadow-lg p-4 z-20`}
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                          <IconComponent className="w-4 h-4 text-primary-foreground" />
                        </div>
                        <h4 className="font-heading font-bold text-primary text-sm">
                          {milestone.title}
                        </h4>
                      </div>
                      <p className="text-muted-foreground text-xs leading-relaxed">
                        {milestone.description}
                      </p>
                      {/* Arrow */}
                      <div 
                        className={`absolute left-1/2 transform -translate-x-1/2 w-0 h-0 
                          border-l-8 border-r-8 border-l-transparent border-r-transparent
                          ${isTop ? 'top-full border-t-8 border-t-card' : 'bottom-full border-b-8 border-b-card'}`}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Year Label - Top or Bottom based on position */}
                <motion.div
                  className={`${isTop ? 'mb-4' : 'mt-4'} text-center`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <span className={`font-heading font-bold text-sm ${isActive ? 'text-primary' : 'text-foreground'}`}>
                    {milestone.year}
                  </span>
                </motion.div>

                {/* Interactive Button/Node */}
                <motion.button
                  onClick={() => setActiveIndex(isActive ? null : index)}
                  className={`relative z-10 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer
                    ${isActive 
                      ? 'bg-gradient-primary shadow-primary scale-110' 
                      : 'bg-card border-2 border-primary hover:bg-primary/10'
                    }`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, type: "spring" }}
                >
                  <IconComponent 
                    className={`w-5 h-5 ${isActive ? 'text-primary-foreground' : 'text-primary'}`} 
                  />
                </motion.button>
              </div>
            );
          })}
        </div>
      </div>

      {/* Mobile Timeline */}
      <div className="lg:hidden relative pl-8">
        {/* Vertical Timeline Line */}
        <div className="absolute left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-primary/80 to-primary rounded-full" />
        
        <div className="space-y-6">
          {milestones.map((milestone, index) => {
            const IconComponent = milestone.icon;
            const isActive = activeIndex === index;
            
            return (
              <motion.div
                key={milestone.year}
                className="relative"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {/* Node/Button */}
                <motion.button
                  onClick={() => setActiveIndex(isActive ? null : index)}
                  className={`absolute -left-4 top-0 w-10 h-10 rounded-full flex items-center justify-center z-10 transition-all duration-300
                    ${isActive 
                      ? 'bg-gradient-primary shadow-primary scale-110' 
                      : 'bg-card border-2 border-primary hover:bg-primary/10'
                    }`}
                  whileTap={{ scale: 0.95 }}
                >
                  <IconComponent 
                    className={`w-4 h-4 ${isActive ? 'text-primary-foreground' : 'text-primary'}`} 
                  />
                </motion.button>

                {/* Content */}
                <div className="ml-8">
                  <span className={`font-heading font-bold text-lg ${isActive ? 'text-primary' : 'text-foreground'}`}>
                    {milestone.year}
                  </span>
                  
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <div className="mt-2 bg-card border border-border rounded-lg p-4 shadow-card">
                          <h4 className="font-heading font-bold text-primary mb-2">
                            {milestone.title}
                          </h4>
                          <p className="text-muted-foreground text-sm leading-relaxed">
                            {milestone.description}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {!isActive && (
                    <p className="text-muted-foreground text-sm mt-1">
                      {milestone.title}
                    </p>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Instruction Text */}
      <motion.p 
        className="text-center text-muted-foreground text-sm mt-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        Click on any milestone to learn more about our journey
      </motion.p>
    </div>
  );
};

export default Timeline;
