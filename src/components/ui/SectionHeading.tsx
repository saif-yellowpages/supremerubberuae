interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

const SectionHeading = ({ title, subtitle, centered = true, className = "" }: SectionHeadingProps) => {
  return (
    <div className={`mb-12 ${centered ? "text-center" : ""} ${className}`}>
      <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
        {title}
      </h2>
      <div className={`w-20 h-1 bg-gradient-primary rounded-full mb-4 ${centered ? "mx-auto" : ""}`} />
      {subtitle && (
        <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
