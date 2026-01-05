import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ServicesPage() {
  const services = [
    {
      title: "Complete Catering Services",
      description:
        "Professional cooking services for all types of Pakistani and international dishes. Our experienced chefs prepare fresh, delicious meals for any size gathering.",
      features: [
        "Traditional Pakistani cuisine",
        "International dishes",
        "Fresh ingredients",
        "Professional chefs",
        "Custom menus",
      ],
      image: "/pakistani-catering.png",
    },
    {
      title: "Serving Equipment",
      description:
        "All kinds of serving equipment including plates, glasses, cutlery, serving trays, and professional-grade kitchen equipment for your events.",
      features: [
        "Complete dinnerware sets",
        "Serving trays & utensils",
        "Professional kitchen equipment",
        "Glassware & cutlery",
        "Buffet setup equipment",
      ],
      image: "/elegant-event-setup.png",
    },
    {
      title: "Furniture & Seating",
      description:
        "Comfortable chairs, elegant tables, and complete seating arrangements suitable for weddings, corporate events, and family gatherings.",
      features: [
        "Wedding chairs & tables",
        "VIP seating arrangements",
        "Stage furniture",
        "Lounge seating",
        "Custom arrangements",
      ],
      image: "/pakistani-wedding-furniture.png",
    },
    {
      title: "Tent & Canopy Services",
      description:
        "High-quality tents and canopies for outdoor events, providing shelter and creating beautiful event spaces for any weather condition.",
      features: [
        "Wedding tents",
        "Outdoor canopies",
        "Weather protection",
        "Various sizes available",
        "Professional installation",
      ],
      image: "/pakistani-wedding-tent.png",
    },
    {
      title: "Event Decoration",
      description:
        "Beautiful decoration services to transform your venue into a magical space. Specializing in traditional Pakistani wedding decorations and modern event styling.",
      features: [
        "Wedding decorations",
        "Floral arrangements",
        "Lighting setup",
        "Stage decoration",
        "Cultural themes",
      ],
      image: "/pakistani-wedding-decor.png",
    },
    {
      title: "Complete Event Management",
      description:
        "Full-service event planning and management for weddings, funerals, corporate events, and all kinds of gatherings with attention to every detail.",
      features: [
        "Wedding planning",
        "Corporate events",
        "Funeral arrangements",
        "Birthday parties",
        "Religious ceremonies",
      ],
      image: "/complete-event.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      {/* Header */}
      <section className="py-20 bg-gradient-to-r from-red-800 to-red-900 text-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Our <span className="text-amber-300">Services</span>
          </h1>
          <p className="text-xl text-amber-100 max-w-3xl mx-auto">
            Complete catering and event solutions for all your special occasions
            in Chakwal and surrounding areas
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-gradient-to-br from-white to-amber-50"
              >
                <div className="aspect-video overflow-hidden relative">
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* Dark overlay for better readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                </div>
                <CardHeader className="pb-4">
                  <CardTitle className="text-2xl text-red-800 group-hover:text-amber-600 transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="space-y-2 mb-6">
                    <h4 className="font-semibold text-red-700 mb-3">
                      Key Features:
                    </h4>
                    <ul className="grid grid-cols-1 gap-2">
                      {service.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-center text-sm text-gray-600"
                        >
                          <span className="w-2 h-2 bg-amber-500 rounded-full mr-3 group-hover:bg-red-500 transition-colors duration-300"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-900 via-red-800 to-red-900 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold text-white mb-6">
            Need a Custom Package?
          </h2>
          <p className="text-xl text-amber-100 mb-8 max-w-2xl mx-auto leading-relaxed">
            We can combine any of our services to create the perfect package for
            your event
          </p>
          <Button
            asChild
            size="lg"
            className="bg-amber-500 hover:bg-amber-400 text-red-900 font-bold px-10 py-4 text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl border-2 border-amber-400"
          >
            <Link href="/contact">Request Custom Quote</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
