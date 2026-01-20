interface ImageCardProps {
  src: string;
  alt: string;
  title?: string;
  description?: string;
  className?: string;
}

const ImageCard = ({ src, alt, title, description, className = "" }: ImageCardProps) => {
  return (
    <div className={`group relative overflow-hidden rounded-xl shadow-card card-hover bg-card ${className}`}>
      <div className="image-zoom aspect-[4/3]">
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      {(title || description) && (
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
          {title && (
            <h3 className="text-primary-foreground font-heading font-semibold text-lg mb-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
              {title}
            </h3>
          )}
          {description && (
            <p className="text-primary-foreground/80 text-sm translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
              {description}
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default ImageCard;
