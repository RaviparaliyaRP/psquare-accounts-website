import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Building2, FileCheck, RefreshCw, Globe, Award, Copyright, Calculator, Scale } from 'lucide-react';
import { ServiceCategory } from '@/types';

interface CategoryCardProps {
  category: ServiceCategory;
}

const categoryIcons = {
  'new-registration': Building2,
  'license-services': FileCheck,
  'compliance-returns': RefreshCw,
  'renewal-services': RefreshCw,
  'import-export': Globe,
  'certification-services': Award,
  'intellectual-property': Copyright,
  'tax-services': Calculator,
  'tender-government': Building2,
  'legal-services': Scale,
};

const categoryColors = {
  'new-registration': 'bg-blue-500',
  'license-services': 'bg-brand-orange',
  'compliance-returns': 'bg-green-500',
  'renewal-services': 'bg-purple-500',
  'import-export': 'bg-cyan-500',
  'certification-services': 'bg-yellow-500',
  'intellectual-property': 'bg-pink-500',
  'tax-services': 'bg-red-500',
  'tender-government': 'bg-indigo-500',
  'legal-services': 'bg-gray-500',
};

export default function CategoryCard({ category }: CategoryCardProps) {
  const Icon = categoryIcons[category.id as keyof typeof categoryIcons] || Building2;
  const colorClass = categoryColors[category.id as keyof typeof categoryColors] || 'bg-brand-navy';
  
  // Count total services in this category
  const totalServices = category.subCategories.reduce(
    (total, sub) => total + sub.services.length, 
    0
  );
  
  // Count trending services
  const trendingServices = category.subCategories.reduce(
    (total, sub) => total + sub.services.filter(s => s.isTrending).length, 
    0
  );

  return (
    <Link href={`/services/${category.id}`}>
      <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer border-2 hover:border-brand-orange/50">
        <CardHeader className="pb-4">
          <div className="flex items-center justify-between">
            <div className={`p-3 rounded-lg ${colorClass} text-white group-hover:scale-110 transition-transform duration-300`}>
              <Icon className="h-8 w-8" />
            </div>
            <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-brand-orange group-hover:translate-x-1 transition-all duration-300" />
          </div>
          <CardTitle className="text-xl font-bold text-brand-navy group-hover:text-brand-orange transition-colors duration-300">
            {category.name}
          </CardTitle>
          <CardDescription className="text-gray-600 leading-relaxed">
            {category.description}
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-0">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Badge variant="secondary" className="bg-brand-orange/10 text-brand-orange border-brand-orange/20">
                {category.subCategories.length} Categories
              </Badge>
              <Badge variant="outline" className="text-gray-600">
                {totalServices} Services
              </Badge>
            </div>
            {trendingServices > 0 && (
              <Badge className="bg-red-500 text-white">
                {trendingServices} Trending
              </Badge>
            )}
          </div>
          
          {/* Sub-categories preview */}
          <div className="mt-4">
            <p className="text-sm text-gray-500 mb-2">Popular Services:</p>
            <div className="flex flex-wrap gap-1">
              {category.subCategories.slice(0, 3).map((subCategory) => (
                <span
                  key={subCategory.id}
                  className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full"
                >
                  {subCategory.name}
                </span>
              ))}
              {category.subCategories.length > 3 && (
                <span className="text-xs text-gray-400 px-2 py-1">
                  +{category.subCategories.length - 3} more
                </span>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
