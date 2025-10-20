import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Building2, FileCheck, RefreshCw, Globe, Award, Copyright, Calculator, Scale } from 'lucide-react';

const serviceCategories = [
  {
    id: 'new-registration',
    name: 'New Registration',
    description: 'Complete business registration services from company formation to compliance setup',
    icon: Building2,
    color: 'bg-blue-500',
    servicesCount: 200,
    trendingCount: 15,
  },
  {
    id: 'license-services',
    name: 'License Services',
    description: 'Essential licenses and permits for business operations',
    icon: FileCheck,
    color: 'bg-brand-orange',
    servicesCount: 300,
    trendingCount: 25,
  },
  {
    id: 'compliance-returns',
    name: 'Compliance & Returns',
    description: 'Annual compliance and return filing services',
    icon: RefreshCw,
    color: 'bg-green-500',
    servicesCount: 150,
    trendingCount: 10,
  },
  {
    id: 'renewal-services',
    name: 'Renewal Services',
    description: 'License and registration renewal services',
    icon: RefreshCw,
    color: 'bg-purple-500',
    servicesCount: 100,
    trendingCount: 8,
  },
  {
    id: 'import-export',
    name: 'Import/Export Services',
    description: 'International trade and import-export services',
    icon: Globe,
    color: 'bg-cyan-500',
    servicesCount: 80,
    trendingCount: 5,
  },
  {
    id: 'certification-services',
    name: 'Certification Services',
    description: 'Quality certifications and standards compliance',
    icon: Award,
    color: 'bg-yellow-500',
    servicesCount: 120,
    trendingCount: 12,
  },
  {
    id: 'intellectual-property',
    name: 'Intellectual Property (IPR)',
    description: 'Trademark, patent, and copyright services',
    icon: Copyright,
    color: 'bg-pink-500',
    servicesCount: 60,
    trendingCount: 8,
  },
  {
    id: 'tax-services',
    name: 'Tax Services',
    description: 'Tax registration, filing, and compliance services',
    icon: Calculator,
    color: 'bg-red-500',
    servicesCount: 90,
    trendingCount: 15,
  },
  {
    id: 'tender-government',
    name: 'Tender & Government Services',
    description: 'Government tenders and procurement services',
    icon: Building2,
    color: 'bg-indigo-500',
    servicesCount: 40,
    trendingCount: 3,
  },
  {
    id: 'legal-services',
    name: 'Legal Services',
    description: 'Legal documentation and certificate services',
    icon: Scale,
    color: 'bg-gray-500',
    servicesCount: 30,
    trendingCount: 2,
  },
];

export default function ServicesOverview() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-6">
            Our Comprehensive Services
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From business registration to ongoing compliance, we offer a complete range of services 
            to help your business succeed. Choose from our organized service categories below.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {serviceCategories.map((category) => {
            const Icon = category.icon;
            return (
              <Link key={category.id} href={`/services/${category.id}`}>
                <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer border-2 hover:border-brand-orange/50 h-full">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between">
                      <div className={`p-3 rounded-lg ${category.color} text-white group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="h-6 w-6" />
                      </div>
                      <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-brand-orange group-hover:translate-x-1 transition-all duration-300" />
                    </div>
                    <CardTitle className="text-lg font-bold text-brand-navy group-hover:text-brand-orange transition-colors duration-300">
                      {category.name}
                    </CardTitle>
                    <CardDescription className="text-gray-600 text-sm leading-relaxed">
                      {category.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Badge variant="secondary" className="bg-brand-orange/10 text-brand-orange border-brand-orange/20 text-xs">
                          {category.servicesCount} Services
                        </Badge>
                        {category.trendingCount > 0 && (
                          <Badge className="bg-red-500 text-white text-xs">
                            {category.trendingCount} Trending
                          </Badge>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-brand-navy">10</div>
              <div className="text-gray-600">Service Categories</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-brand-navy">1000+</div>
              <div className="text-gray-600">Services Offered</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-brand-navy">1500+</div>
              <div className="text-gray-600">Happy Clients</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-brand-navy">15+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            href="/services"
            className="inline-flex items-center bg-brand-orange hover:bg-brand-orange/90 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-300 group"
          >
            View All Services
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </section>
  );
}
