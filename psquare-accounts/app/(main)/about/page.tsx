import { Metadata } from 'next';
import { Building2, Users, Award, Clock, MapPin, Phone, Mail } from 'lucide-react';
import { Section, Container, Grid, Flex, Heading1, Heading2, Heading3, BodyLarge, Body } from '@/components/ui/StandardLayout';
import { StandardCard, StandardCardHeader, StandardCardContent } from '@/components/ui/StandardCard';
import { StandardButton } from '@/components/ui/StandardButton';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'About Us - Psquare Accounts | Your Trusted Business Partner',
  description: 'Learn about Psquare Accounts - Established in 2010, we provide comprehensive business licensing and registration services with 15+ years of experience.',
  keywords: 'about psquare accounts, business registration company, company history, team',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-brand-light">
      {/* Hero Section */}
      <Section background="primary" spacing="section">
        <Container>
          <div className="text-center">
            <Heading1 className="text-white mb-6">
              About Psquare Accounts
            </Heading1>
            <BodyLarge className="text-white/90 mb-8 max-w-3xl mx-auto">
              Your Trusted Partner for Business Licensing & Registration
            </BodyLarge>
            <Body className="text-white/80 max-w-2xl mx-auto">
              From Registration to Approval — We Handle It All
            </Body>
          </div>
        </Container>
      </Section>

      {/* Company Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-lg text-gray-600">
                <p>
                  Established in <strong className="text-brand-navy">2010</strong>, Psquare Accounts has been at the forefront of business registration and compliance services in India. What started as a small consultancy has grown into a trusted partner for thousands of businesses across the country.
                </p>
                <p>
                  Over the past <strong className="text-brand-navy">15+ years</strong>, we have successfully helped more than <strong className="text-brand-navy">1500+ clients</strong> navigate the complex world of business registration, licensing, and compliance.
                </p>
                <p>
                  Our mission is simple: to make business registration and compliance as smooth and hassle-free as possible, so entrepreneurs can focus on what they do best - growing their business.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-[#273F4F] rounded-2xl p-8 text-white">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">15+</div>
                    <div className="text-sm opacity-90">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">1500+</div>
                    <div className="text-sm opacity-90">Happy Clients</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">1000+</div>
                    <div className="text-sm opacity-90">Services Offered</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">98%</div>
                    <div className="text-sm opacity-90">Success Rate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Mission & Vision
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We are committed to providing comprehensive business solutions that empower entrepreneurs and businesses to thrive in today&apos;s competitive market.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-2 border-brand-navy">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Building2 className="h-8 w-8 text-brand-navy mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
                </div>
                <p className="text-gray-600 text-lg">
                  To simplify business registration and compliance processes, making it accessible and affordable for entrepreneurs of all sizes. We strive to be the bridge between your business idea and its successful legal establishment.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-brand-orange">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Award className="h-8 w-8 text-brand-orange mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
                </div>
                <p className="text-gray-600 text-lg">
                  To become India&apos;s most trusted and comprehensive business registration and compliance partner, helping businesses grow while maintaining full legal compliance and operational excellence.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our experienced team of professionals is dedicated to providing you with the best possible service and support.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="border-2 border-brand-navy">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-brand-navy">
                    <Image 
                      src="/psqaure-owner.png" 
                      alt="Mr. Umang Patel - Founder & CEO" 
                      width={128}
                      height={128}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-center md:text-left">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Mr. Umang Patel</h3>
                    <p className="text-xl text-brand-navy font-semibold mb-4">Founder & CEO</p>
                    <p className="text-gray-600 text-lg mb-4">
                      With over 15 years of experience in business registration and compliance, Mr. Umang Patel leads our team with expertise and dedication. His vision has helped thousands of businesses get started and grow successfully.
                    </p>
                    <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                      <span className="px-3 py-1 bg-brand-navy text-white rounded-full text-sm">Business Registration</span>
                      <span className="px-3 py-1 bg-brand-orange text-white rounded-full text-sm">Compliance Expert</span>
                      <span className="px-3 py-1 bg-gray-600 text-white rounded-full text-sm">15+ Years Experience</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why Choose Psquare Accounts?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine experience, expertise, and dedication to provide you with the best business registration and compliance services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent>
                <Clock className="h-12 w-12 text-brand-navy mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Fast Service</h3>
                <p className="text-gray-600">Quick turnaround times for all your registration and compliance needs.</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent>
                <Award className="h-12 w-12 text-brand-orange mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Expert Team</h3>
                <p className="text-gray-600">Experienced professionals with deep knowledge of Indian business laws.</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent>
                <Users className="h-12 w-12 text-brand-navy mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">1500+ Clients</h3>
                <p className="text-gray-600">Trusted by businesses of all sizes across India.</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent>
                <Building2 className="h-12 w-12 text-brand-orange mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">15+ Years</h3>
                <p className="text-gray-600">Proven track record of successful business registrations.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-[#273F4F] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Get In Touch
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Ready to start your business journey? Contact us today for a consultation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <MapPin className="h-12 w-12 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Office Address</h3>
              <p className="opacity-90">
                Vastral, Ahmedabad<br />
                Gujarat, India
              </p>
            </div>

            <div className="text-center">
              <Phone className="h-12 w-12 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Phone</h3>
              <p className="opacity-90">
                +91 98765 43210<br />
                Mon-Sat: 9 AM - 7 PM
              </p>
            </div>

            <div className="text-center">
              <Mail className="h-12 w-12 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Email</h3>
              <p className="opacity-90">
                psquaregst@gmail.com<br />
                
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <a 
              href="/contact" 
              className="inline-flex items-center px-8 py-4 bg-white text-brand-navy font-bold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Contact Us Today
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
