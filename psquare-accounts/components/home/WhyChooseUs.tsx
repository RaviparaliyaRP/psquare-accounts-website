import { CheckCircle, Clock, Users, Shield, Award, Phone, Mail, MapPin } from 'lucide-react';

const whyChooseUs = [
  {
    icon: Clock,
    title: '15+ Years of Experience',
    description: 'Proven expertise in business licensing and compliance with deep understanding of Indian regulations.',
    color: 'bg-blue-500',
  },
  {
    icon: Users,
    title: '1500+ Happy Clients',
    description: 'Satisfied customers across India who trust us with their business registration and compliance needs.',
    color: 'bg-green-500',
  },
  {
    icon: Shield,
    title: 'Expert Team',
    description: 'Mr. Umang Patel (Founder and Managing Director) leads our team of qualified professionals.',
    color: 'bg-purple-500',
  },
  {
    icon: Award,
    title: 'Fast & Reliable Service',
    description: 'Quick processing, transparent communication, and dependable support throughout the entire process.',
    color: 'bg-brand-orange',
  },
];

const features = [
  'Transparent Pricing',
  'No Hidden Fees',
  '24/7 Customer Support',
  'Expert Guidance',
  'Fast Processing',
  'Reliable Service',
  'Complete Documentation',
  'Post-Service Support',
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-6">
            Why Choose Psquare Accounts?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We are committed to providing exceptional service with transparency, expertise, and reliability. 
            Here&apos;s what makes us the preferred choice for business licensing and registration.
          </p>
        </div>

        {/* Main Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {whyChooseUs.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className={`w-20 h-20 ${item.color} rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="h-10 w-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-brand-orange rounded-full flex items-center justify-center">
                    <CheckCircle className="h-5 w-5 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-brand-navy mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Additional Features */}
        <div className="bg-gray-50 rounded-2xl p-8 mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-brand-navy mb-4">
              What You Get With Us
            </h3>
            <p className="text-gray-600">
              Our comprehensive service includes everything you need for successful business registration and compliance.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700 font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="bg-gradient-to-r from-brand-navy to-brand-orange text-white rounded-2xl p-8 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Meet Our Expert Team</h3>
              <p className="text-white/90 mb-6 leading-relaxed">
                Led by <strong>Mr. Umang Patel</strong>, our Founder and Managing Director, 
                our team brings together years of experience in business licensing, compliance, 
                and regulatory affairs.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Award className="h-5 w-5 text-brand-orange" />
                  <span className="text-white/90">Qualified Professionals</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Award className="h-5 w-5 text-brand-orange" />
                  <span className="text-white/90">Industry Expertise</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Award className="h-5 w-5 text-brand-orange" />
                  <span className="text-white/90">Personal Attention</span>
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-16 w-16 text-white" />
              </div>
              <div className="text-white font-semibold text-lg">Mr. Umang Patel</div>
              <div className="text-white/80">Founder & Managing Director</div>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="bg-white border-2 border-gray-200 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-brand-navy mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-gray-600">
              Contact our experts today for personalized assistance and quick processing.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <Phone className="h-8 w-8 text-brand-orange mx-auto mb-4" />
              <div className="font-semibold text-brand-navy mb-2">Call Us</div>
              <div className="text-gray-600 mb-1">+91 88661 14756</div>
              <div className="text-gray-600">+91 74339 98866</div>
            </div>
            
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <Mail className="h-8 w-8 text-brand-orange mx-auto mb-4" />
              <div className="font-semibold text-brand-navy mb-2">Email Us</div>
              <div className="text-gray-600">psquaregst@gmail.com</div>
            </div>
            
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <MapPin className="h-8 w-8 text-brand-orange mx-auto mb-4" />
              <div className="font-semibold text-brand-navy mb-2">Visit Us</div>
              <div className="text-gray-600 text-sm">Vastral, Ahmedabad</div>
              <div className="text-gray-600 text-sm">Gujarat, India</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
