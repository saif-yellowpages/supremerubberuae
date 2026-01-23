import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-white text-foreground border-t border-border">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <img 
                src={logo} 
                alt="Supreme Rubber LLC" 
                className="h-16 w-auto"
              />
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Leading manufacturer of Rubber, Plastic, and Polyurethane products in the UAE since 2002.
            </p>
            <div className="flex gap-3 pt-2 flex-wrap">
              <span className="text-xs bg-primary/10 text-foreground px-2 py-1 rounded">ISO 9001:2015</span>
              <span className="text-xs bg-primary/10 text-foreground px-2 py-1 rounded">ISO 45001:2018</span>
              <span className="text-xs bg-primary/10 text-foreground px-2 py-1 rounded">ISO 14001:2015</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4 text-foreground">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about" },
                { name: "Products", path: "/products" },
                { name: "Gallery", path: "/gallery" },
                { name: "Our Capabilities", path: "/capabilities" },
                { name: "Industries Served", path: "/industries" },
                { name: "Contact Us", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-muted-foreground hover:text-primary transition-all"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4 text-foreground">Our Products</h4>
            <ul className="space-y-2">
              {[
                "Marine Fenders",
                "Rubber Molded Products",
                "Polyurethane Products",
                "Offshore Products",
                "Roller Products",
                "Rubber Lining",
                "Rubber Sheets",
                "Extrusions & Profiles",
              ].map((product) => (
                <li key={product}>
                  <Link
                    to="/products"
                    className="text-sm text-muted-foreground hover:text-primary transition-all"
                  >
                    {product}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4 text-foreground">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex gap-3">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm text-muted-foreground">
                  Al Jazeera Al Hamra Industrial Area,<br />
                  PO Box: 14581, Ras Al Khaimah, UAE
                </span>
              </li>
              <li className="flex gap-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <div className="text-sm text-muted-foreground">
                  <a href="tel:+97172432780" className="hover:text-primary transition-colors block">
                    +971 7 2432780
                  </a>
                  <a href="tel:+971503435304" className="hover:text-primary transition-colors block">
                    +971 50 343 5304
                  </a>
                </div>
              </li>
              <li className="flex gap-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <a
                  href="mailto:sales@supremerubberuae.com"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  sales@supremerubberuae.com
                </a>
              </li>
              <li className="flex gap-3">
                <Clock className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-sm text-muted-foreground">
                  Mon - Sat: 8:00 AM - 6:00 PM
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} Supreme Rubber LLC. All rights reserved.</p>
            <p>Established in 2002 | Ras Al Khaimah, UAE</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
