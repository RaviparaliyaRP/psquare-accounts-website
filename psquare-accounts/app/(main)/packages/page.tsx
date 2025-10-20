import { Metadata } from 'next';
import { Check, Star, ArrowRight, Users, Building2, Award } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Packages & Pricing - Psquare Accounts | Business Registration Packages',
  description: 'Choose the perfect package for your business needs. Basic, Advanced, and Premium packages for startups, growing businesses, and established enterprises.',
  keywords: 'business registration packages, startup packages, compliance packages, pricing',
};

export default function PackagesPage() {
  const packages = [
    {
      id: 'basic',
      name: 'Basic Package',
      subtitle: 'For Startups & New Entrepreneurs',
      price: '₹19,999',
      period: 'one-time',
      color: 'from-blue-500 to-blue-600',
      borderColor: 'border-blue-500',
      icon: Users,
      features: [
        'Company Incorporation (Private Limited / LLP / OPC)',
        'PAN & TAN Registration',
        'GST Registration & Initial Filing Setup',
        'Dedicated Startup Advisor',
        'Basic Legal Documentation (MOA & AOA Draft)',
        'Email & Phone Support'
      ],
      description: 'Ideal for startups taking their first step into business. This package covers all essential registrations and ensures your company is legally set up to operate smoothly from day one.',
      popular: false
    },
    {
      id: 'advanced',
      name: 'Advanced Package',
      subtitle: 'For Growing Businesses',
      price: '₹49,999',
      period: 'year',
      color: 'from-brand-orange to-orange-600',
      borderColor: 'border-brand-orange',
      icon: Building2,
      features: [
        'All features of Basic Package',
        'Monthly Accounting & Bookkeeping',
        'ROC Filing & Annual Compliance',
        'MSME / Udyam Registration',
        'Trademark Application (1 Class)',
        'Quarterly GST Return Filing',
        'Priority Support'
      ],
      description: 'Best for small and medium-sized businesses managing compliance and financial activities regularly. This package provides end-to-end legal and accounting support under one roof.',
      popular: true
    },
    {
      id: 'premium',
      name: 'Premium Package',
      subtitle: 'For Established Enterprises',
      price: '₹69,999',
      period: 'year',
      color: 'from-brand-navy to-navy-800',
      borderColor: 'border-brand-navy',
      icon: Award,
      features: [
        'All features of Advanced Package',
        'Advanced Tax Planning & Audit Support',
        'Legal Consultation (Up to 3 Sessions / year)',
        'ISO / BIS Certification Assistance',
        'Dedicated Account Manager',
        'Business Advisory & Growth Strategy',
        '24×7 Support (Phone + WhatsApp)'
      ],
      description: 'Designed for businesses looking for complete compliance, strategic growth, and premium support. With a dedicated account manager and proactive compliance monitoring, this plan keeps your business 100% worry-free.',
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-brand-navy to-brand-orange text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Choose Your Perfect Package
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Tailored solutions for businesses at every stage
            </p>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              From startup registration to enterprise compliance - we have the right package for you
            </p>
          </div>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <Card 
                key={pkg.id} 
                className={`relative ${pkg.borderColor} border-2 ${pkg.popular ? 'scale-105 shadow-2xl' : 'hover:shadow-lg'} transition-all duration-300`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-brand-orange text-white px-4 py-2 rounded-full text-sm font-bold flex items-center">
                      <Star className="h-4 w-4 mr-1" />
                      Most Popular
                    </div>
                  </div>
                )}
                
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${pkg.color} flex items-center justify-center`}>
                    <pkg.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-900 mb-2">
                    {pkg.name}
                  </CardTitle>
                  <p className="text-gray-600 mb-4">
                    {pkg.subtitle}
                  </p>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-gray-900">{pkg.price}</span>
                    <span className="text-gray-600 ml-2">/ {pkg.period}</span>
                  </div>
                </CardHeader>

                <CardContent className="pt-0">
                  <div className="mb-6">
                    <p className="text-gray-600 text-center">
                      {pkg.description}
                    </p>
                  </div>

                  <div className="space-y-3 mb-8">
                    {pkg.features.map((feature, index) => (
                      <div key={index} className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link href="/contact">
                    <Button 
                      className={`w-full py-3 bg-gradient-to-r ${pkg.color} hover:opacity-90 text-white font-bold transition-all duration-300`}
                    >
                      Get Started
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Package Comparison
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Compare features across all packages to find the perfect fit for your business
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-900">Features</th>
                  <th className="border border-gray-300 px-4 py-3 text-center font-bold text-blue-600">Basic</th>
                  <th className="border border-gray-300 px-4 py-3 text-center font-bold text-brand-orange">Advanced</th>
                  <th className="border border-gray-300 px-4 py-3 text-center font-bold text-brand-navy">Premium</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-semibold">Company Incorporation</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">✅</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">✅</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">✅</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3 font-semibold">PAN & TAN Registration</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">✅</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">✅</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">✅</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-semibold">GST Registration</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">✅</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">✅</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">✅</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3 font-semibold">Monthly Accounting</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">❌</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">✅</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">✅</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-semibold">ROC Filing & Compliance</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">❌</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">✅</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">✅</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3 font-semibold">Trademark Application</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">❌</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">✅</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">✅</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-semibold">Legal Consultation</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">❌</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">❌</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">✅</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3 font-semibold">Dedicated Account Manager</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">❌</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">❌</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">✅</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-semibold">24×7 Support</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">❌</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">❌</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">✅</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-brand-navy to-brand-orange text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Choose the package that fits your business needs and let us handle all your registration and compliance requirements.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-brand-navy hover:bg-gray-100 font-bold">
                Contact Us for Consultation
              </Button>
            </Link>
            <Link href="/services">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-brand-navy font-bold">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
