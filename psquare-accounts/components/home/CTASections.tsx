import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Phone, Mail, Clock, CheckCircle, Star, Users, Award } from 'lucide-react';

export default function CTASections() {
  return (
    <>
      {/* Main CTA Section */}
      <section className="py-20 bg-[#273F4F] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Your Business Journey?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Get expert guidance for your business registration and compliance needs. 
              Our team is ready to help you succeed.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button
                asChild
                size="lg"
                className="bg-white text-brand-navy hover:bg-gray-100 px-8 py-4 text-lg font-semibold group"
              >
                <Link href="/contact">
                  Get Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </Button>
              
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-brand-navy px-8 py-4 text-lg font-semibold"
              >
                <Link href="tel:+918866114756">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now: +91 88661 14756
                </Link>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-2xl font-bold">15+</div>
                <div className="text-white/80 text-sm">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">1500+</div>
                <div className="text-white/80 text-sm">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">1000+</div>
                <div className="text-white/80 text-sm">Services</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">24/7</div>
                <div className="text-white/80 text-sm">Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service-Specific CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-6">
              Popular Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Get started with our most requested services. Quick processing and expert support guaranteed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Company Registration */}
            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 hover:border-brand-orange/50">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-lg font-bold text-brand-navy">Company Registration</CardTitle>
                    <CardDescription className="text-sm text-gray-600">Private Limited, LLP, OPC</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm text-gray-600">Quick Processing</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm text-gray-600">Expert Guidance</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm text-gray-600">Complete Documentation</span>
                  </div>
                </div>
                <Button
                  asChild
                  className="w-full bg-brand-orange hover:bg-brand-orange/90 text-white"
                >
                  <Link href="/services/new-registration">Get Started</Link>
                </Button>
              </CardContent>
            </Card>

            {/* FSSAI License */}
            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 hover:border-brand-orange/50">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-brand-orange rounded-lg flex items-center justify-center">
                    <Award className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-lg font-bold text-brand-navy">FSSAI License</CardTitle>
                    <CardDescription className="text-sm text-gray-600">Food Business Registration</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm text-gray-600">Basic to Central License</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm text-gray-600">Restaurant & Cloud Kitchen</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm text-gray-600">Fast Processing</span>
                  </div>
                </div>
                <Button
                  asChild
                  className="w-full bg-brand-orange hover:bg-brand-orange/90 text-white"
                >
                  <Link href="/services/license-services/fssai-license">Get Started</Link>
                </Button>
              </CardContent>
            </Card>

            {/* GST Registration */}
            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 hover:border-brand-orange/50">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
                    <Star className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-lg font-bold text-brand-navy">GST Registration</CardTitle>
                    <CardDescription className="text-sm text-gray-600">Tax Registration & Compliance</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm text-gray-600">Quick Registration</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm text-gray-600">Return Filing</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm text-gray-600">Refund Processing</span>
                  </div>
                </div>
                <Button
                  asChild
                  className="w-full bg-brand-orange hover:bg-brand-orange/90 text-white"
                >
                  <Link href="/services/tax-services/gst-registration">Get Started</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-6">
                Need Help Choosing the Right Service?
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our experts are here to help you find the perfect solution for your business needs. 
                Get personalized guidance and quick processing.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <Phone className="h-8 w-8 text-brand-orange mx-auto mb-4" />
                <h3 className="font-semibold text-brand-navy mb-2">Call Us</h3>
                <div className="text-gray-600 mb-1">+91 88661 14756</div>
                <div className="text-gray-600">+91 74339 98866</div>
                <div className="text-sm text-gray-500 mt-2">Mon-Sat: 9 AM - 7 PM</div>
              </div>
              
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <Mail className="h-8 w-8 text-brand-orange mx-auto mb-4" />
                <h3 className="font-semibold text-brand-navy mb-2">Email Us</h3>
                <div className="text-gray-600">psquaregst@gmail.com</div>
                <div className="text-sm text-gray-500 mt-2">Quick Response Guaranteed</div>
              </div>
              
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <Clock className="h-8 w-8 text-brand-orange mx-auto mb-4" />
                <h3 className="font-semibold text-brand-navy mb-2">Office Hours</h3>
                <div className="text-gray-600">Monday - Saturday</div>
                <div className="text-gray-600">9:00 AM - 7:00 PM</div>
                <div className="text-sm text-gray-500 mt-2">Sunday: Closed</div>
              </div>
            </div>

            <div className="text-center">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-brand-orange hover:bg-brand-orange/90 text-white px-8 py-4 text-lg font-semibold"
                >
                  <Link href="/contact">Get Free Consultation</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-2 border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white px-8 py-4 text-lg font-semibold"
                >
                  <Link href="/services">Browse All Services</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
