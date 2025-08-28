import Link from "next/link";
import { Phone, MapPin, Mail, Clock, Star } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#420404] text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Business Info */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h3 className="text-3xl font-bold text-amber-300 mb-2">
                Meher Ali
              </h3>
              <p className="text-xl text-amber-100 mb-4">
                Tent & Pakwan Center
              </p>
              <p className="text-amber-100 leading-relaxed max-w-md">
                Complete catering and event solutions for all your special
                occasions. Serving Chakwal and surrounding areas with excellence
                since 2009.
              </p>
            </div>

            <div className="flex items-center space-x-2">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-amber-400 fill-current"
                  />
                ))}
              </div>
              <span className="text-amber-100 text-sm">
                15+ Years of Excellence
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-xl font-semibold text-amber-300 border-b border-amber-300/30 pb-2">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { name: "Home", href: "/" },
                { name: "Our Services", href: "/services" },
                { name: "About Us", href: "/about" },
                { name: "Contact Us", href: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-amber-100 hover:text-amber-300 transition-colors duration-300 hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-xl font-semibold text-amber-300 border-b border-amber-300/30 pb-2">
              Contact Info
            </h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-amber-300 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-amber-100 font-medium">
                    Near 15 Yadgar Chowk
                  </p>
                  <p className="text-amber-100">Chakwal, Pakistan</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-amber-300 flex-shrink-0" />
                <a
                  href="tel:+92XXXXXXXXX"
                  className="text-amber-100 hover:text-amber-300 transition-colors duration-300"
                >
                  +92 XXX XXXXXXX
                </a>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-amber-300 flex-shrink-0" />
                <a
                  href="mailto:info@meheralitent.com"
                  className="text-amber-100 hover:text-amber-300 transition-colors duration-300"
                >
                  info@meheralitent.com
                </a>
              </div>

              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-amber-300 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-amber-100 font-medium">
                    Daily: 8:00 AM - 10:00 PM
                  </p>
                  <p className="text-amber-200 text-sm">
                    24/7 Emergency Support
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-amber-300/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-amber-100 text-sm">
              © 2024 Meher Ali Tent and Pakwan Center. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 text-sm text-amber-200">
              <span>Serving Chakwal with Excellence</span>
              <span>•</span>
              <span>Since 2009</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
