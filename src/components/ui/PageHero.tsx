interface PageHeroProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
}

const PageHero = ({ title, subtitle, backgroundImage }: PageHeroProps) => {
  return (
    <section 
      className="relative py-20 md:py-28 bg-cover bg-center"
      style={{
        backgroundImage: backgroundImage 
          ? `linear-gradient(to bottom, hsla(0, 0%, 0%, 0.6), hsla(0, 0%, 0%, 0.7)), url(${backgroundImage})`
          : undefined,
      }}
    >
      {!backgroundImage && (
        <div className="absolute inset-0 bg-gradient-primary opacity-95" />
      )}
      <div className="container-custom relative z-10">
        <div className="text-center animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground mb-4">
            {title}
          </h1>
          {subtitle && (
            <p className="text-lg md:text-xl text-primary-foreground/90 max-w-3xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default PageHero;
