import { Metadata } from 'next';
import CategoryCard from '@/components/services/CategoryCard';
// ServiceCategory type not used directly; relying on data shape
import { services } from '@/data/services';

export const metadata: Metadata = {
  title: 'Our Services - Business Licensing & Registration Services',
  description: 'Comprehensive business licensing and registration services across India. From company registration to compliance, we handle it all with 15+ years of experience.',
  keywords: 'business services, company registration, licensing, compliance, FSSAI, GST, trademark, India',
};

export default function ServicesPage() {
  const categories = services;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-brand-navy to-brand-orange text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto">
              From Registration to Approval — We Handle It All
            </p>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Choose from our comprehensive range of business licensing and registration services. 
              Expert guidance, fast processing, and reliable support for all your business needs.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-brand-navy">15+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-brand-navy">1500+</div>
              <div className="text-gray-600">Happy Clients</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-brand-navy">10</div>
              <div className="text-gray-600">Service Categories</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-brand-navy">1000+</div>
              <div className="text-gray-600">Services Offered</div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Categories */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
              Choose Your Service Category
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Browse through our organized service categories to find exactly what you need for your business.
            </p>
          </div>

          {categories.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categories.map((category) => (
                <CategoryCard key={category.id} category={category} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="text-gray-500 text-lg">
                Services are being loaded. Please refresh the page if this persists.
              </div>
            </div>
          )}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-brand-navy text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Need Help Choosing the Right Service?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Our experts are here to help you find the perfect solution for your business needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-brand-orange hover:bg-brand-orange/90 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300"
            >
              Get Free Consultation
            </a>
            <a
              href="tel:+918866114756"
              className="border-2 border-white text-white hover:bg-white hover:text-brand-navy px-8 py-3 rounded-lg font-semibold transition-colors duration-300"
            >
              Call Now: +91 88661 14756
            </a>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
              Why Choose Psquare Accounts?
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-orange rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">15+</span>
              </div>
              <h3 className="text-xl font-semibold text-brand-navy mb-2">Years of Experience</h3>
              <p className="text-gray-600">Proven expertise in business licensing and compliance</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-orange rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">1500+</span>
              </div>
              <h3 className="text-xl font-semibold text-brand-navy mb-2">Happy Clients</h3>
              <p className="text-gray-600">Satisfied customers across India</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-orange rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">Fast</span>
              </div>
              <h3 className="text-xl font-semibold text-brand-navy mb-2">Quick Processing</h3>
              <p className="text-gray-600">Fast and reliable service delivery</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-orange rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">24/7</span>
              </div>
              <h3 className="text-xl font-semibold text-brand-navy mb-2">Support</h3>
              <p className="text-gray-600">Round-the-clock customer support</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
