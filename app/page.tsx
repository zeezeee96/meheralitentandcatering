import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, MapPin, Mail, Star } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/pakistani-wedding-setup.png')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-maroon-900/60 to-black/40"></div>
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-shadow-lg">
            <span className="text-amber-300">Meher Ali</span>
            <br />
            <span className="text-2xl md:text-4xl font-medium">
              Tent & Pakwan Center
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-amber-100 max-w-2xl mx-auto leading-relaxed">
            Complete catering services for weddings, events, and all kinds of
            gatherings in Chakwal
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-amber-500 hover:bg-amber-600 text-maroon-900 font-semibold px-8 py-4 text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <Link href="/contact">Get in Touch</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-2 border-amber-300 text-amber-300 hover:bg-amber-300 hover:text-maroon-900 font-semibold px-8 py-4 text-lg transition-all duration-300 hover:scale-105 bg-transparent"
            >
              <Link href="/services">Our Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Services Overview */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-maroon-800 mb-4">
            Complete Event Solutions
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg max-w-2xl mx-auto">
            From intimate gatherings to grand celebrations, we provide
            everything you need for memorable events
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Professional Catering",
                description:
                  "Authentic Pakistani cuisine prepared by expert chefs",
                icon: "🍽️",
              },
              {
                title: "Complete Setup",
                description: "Chairs, tables, tents, and all serving equipment",
                icon: "🏕️",
              },
              {
                title: "Event Decoration",
                description:
                  "Beautiful decorations for weddings and special occasions",
                icon: "🎊",
              },
            ].map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 bg-gradient-to-br from-white to-amber-50 overflow-hidden"
              >
                <CardContent className="p-8 text-center">
                  <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-maroon-800 mb-3 group-hover:text-amber-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Showcase */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-maroon-800 mb-4">
              Our Recent Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Take a look at some of our beautifully executed events and
              celebrations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Grand Wedding Ceremony",
                description:
                  "Complete wedding setup for 500+ guests with traditional Pakistani decor",
                image: "/wedding-project-1.png",
                category: "Wedding",
              },
              {
                title: "Corporate Event",
                description:
                  "Professional catering and setup for corporate annual dinner",
                image: "/corporate-event-1.png",
                category: "Corporate",
              },
              {
                title: "Mehndi Celebration",
                description:
                  "Colorful mehndi setup with traditional decorations and seating",
                image: "/mehndi-project-1.png",
                category: "Mehndi",
              },
              {
                title: "Walima Reception",
                description:
                  "Elegant walima reception with gold and white theme",
                image: "/walima-project-1.png",
                category: "Walima",
              },
              {
                title: "Birthday Celebration",
                description:
                  "Fun and colorful birthday party setup for family gathering",
                image: "/birthday-project-1.png",
                category: "Birthday",
              },
              {
                title: "Religious Ceremony",
                description:
                  "Traditional setup for religious gathering with proper arrangements",
                image: "/religious-project-1.png",
                category: "Religious",
              },
            ].map((project, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* Dark overlay for better text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="mb-2">
                    <span className="inline-block px-3 py-1 bg-amber-500 text-maroon-900 text-xs font-semibold rounded-full">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-amber-300 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-amber-100 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              asChild
              size="lg"
              className="bg-maroon-800 hover:bg-maroon-700 text-white font-semibold px-8 py-4 text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <Link href="/contact">Start Your Project</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-br from-gray-100 via-amber-50 to-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-maroon-800 mb-12">
            Why Choose Meher Ali?
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Star,
                title: "15+ Years Experience",
                desc: "Trusted by families across Chakwal",
              },
              {
                icon: Phone,
                title: "24/7 Support",
                desc: "Always available for your events",
              },
              {
                icon: MapPin,
                title: "Local Expertise",
                desc: "Deep understanding of local preferences",
              },
              {
                icon: Mail,
                title: "Custom Solutions",
                desc: "Tailored services for every occasion",
              },
            ].map((item, index) => (
              <Card
                key={index}
                className="group text-center p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 bg-white shadow-md"
              >
                <item.icon className="w-12 h-12 text-amber-600 mx-auto mb-4 group-hover:scale-110 group-hover:text-maroon-600 transition-all duration-300" />
                <h3 className="font-bold text-maroon-800 mb-2 group-hover:text-amber-600 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-700 text-sm">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-900 via-red-600 to-red-900 text-white relative overflow-hidden">
        {/* Background pattern for visual interest */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Ready to Plan Your Perfect Event?
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-amber-100 max-w-2xl mx-auto leading-relaxed">
            Contact us today for a free consultation and quote
          </p>
          <Button
            asChild
            size="lg"
            className="bg-amber-500 hover:bg-amber-400 text-maroon-900 font-bold px-10 py-4 text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl border-2 border-amber-400"
          >
            <Link href="/contact">Get Free Quote</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
