import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Users, Award, Heart, Clock } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      {/* Header */}
      <section className="py-20 bg-gradient-to-r from-red-800 to-red-900 text-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">
            About <span className="text-amber-300">Meher Ali</span>
          </h1>
          <p className="text-xl text-amber-100 max-w-3xl mx-auto">
            Your trusted partner for memorable events and exceptional catering
            services in Chakwal
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-red-800 mb-6">
                Our Story
              </h2>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p className="text-lg">
                  Established near 15 Yadgar Chowk in Chakwal, Meher Ali Tent
                  and Pakwan Center has been serving the community for over 15
                  years with dedication, quality, and authentic Pakistani
                  hospitality.
                </p>
                <p>
                  What started as a small family business has grown into one of
                  Chakwal's most trusted catering services. We understand that
                  every event is special and unique, which is why we put our
                  heart into every detail, from the first consultation to the
                  final cleanup.
                </p>
                <p>
                  Our commitment to excellence and customer satisfaction has
                  made us the preferred choice for families across Chakwal and
                  surrounding areas for weddings, corporate events, religious
                  ceremonies, and all kinds of gatherings.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="/pakistani-catering-family.png"
                alt="Meher Ali Team"
                className="rounded-lg shadow-2xl w-full hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-r from-amber-50 to-red-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-red-800 mb-12">
            Our Values
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Heart,
                title: "Passion",
                description:
                  "We pour our heart into every event, treating each celebration as if it were our own family's special day.",
              },
              {
                icon: Award,
                title: "Quality",
                description:
                  "Only the finest ingredients and highest standards in food preparation, service, and event management.",
              },
              {
                icon: Users,
                title: "Community",
                description:
                  "Deeply rooted in Chakwal's community, we understand local traditions and preferences.",
              },
              {
                icon: Clock,
                title: "Reliability",
                description:
                  "Punctual, professional, and dependable service that you can count on for your important events.",
              },
            ].map((value, index) => (
              <Card
                key={index}
                className="group text-center p-6 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border-0 bg-white/80 backdrop-blur-sm"
              >
                <CardContent className="pt-6">
                  <value.icon className="w-16 h-16 text-amber-600 mx-auto mb-4 group-hover:scale-110 group-hover:text-red-600 transition-all duration-300" />
                  <h3 className="text-xl font-bold text-red-800 mb-3 group-hover:text-amber-600 transition-colors duration-300">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-red-800 mb-8">Our Mission</h2>
          <Card className="p-8 bg-gradient-to-br from-amber-50 to-white border-0 shadow-xl hover:shadow-2xl transition-all duration-500">
            <CardContent className="pt-0">
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                "To create unforgettable experiences through exceptional
                catering and event services, bringing families and communities
                together with authentic Pakistani hospitality, delicious food,
                and meticulous attention to detail."
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-red-500 mx-auto"></div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-red-900 to-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            Why Choose <span className="text-amber-300">Meher Ali?</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "15+ Years of Excellence",
                description:
                  "Over a decade of experience serving Chakwal's families with consistently exceptional service and authentic flavors.",
              },
              {
                title: "Complete Solutions",
                description:
                  "From cooking to decoration, furniture to cleanup - we handle every aspect of your event so you can enjoy your special day.",
              },
              {
                title: "Local Expertise",
                description:
                  "Deep understanding of local customs, preferences, and traditions ensures your event reflects your cultural values perfectly.",
              },
              {
                title: "Flexible Packages",
                description:
                  "Customizable services that fit your budget and requirements, from intimate family gatherings to grand celebrations.",
              },
              {
                title: "Professional Team",
                description:
                  "Experienced chefs, courteous staff, and dedicated event coordinators committed to making your event flawless.",
              },
              {
                title: "Trusted Reputation",
                description:
                  "Hundreds of satisfied families and successful events have built our reputation as Chakwal's premier catering service.",
              },
            ].map((reason, index) => (
              <Card
                key={index}
                className="group bg-white/10 backdrop-blur-sm border-amber-300/20 hover:bg-white/20 transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-amber-300 mb-3 group-hover:text-white transition-colors duration-300">
                    {reason.title}
                  </h3>
                  <p className="text-amber-100 leading-relaxed">
                    {reason.description}
                  </p>
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
            Ready to Work With Us?
          </h2>
          <p className="text-xl text-amber-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can make your next event truly memorable
          </p>
          <Button
            asChild
            size="lg"
            className="bg-amber-500 hover:bg-amber-400 text-red-900 font-bold px-10 py-4 text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl border-2 border-amber-400"
          >
            <Link href="/contact">Contact Us Today</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
