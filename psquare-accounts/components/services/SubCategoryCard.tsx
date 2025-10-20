import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, TrendingUp } from 'lucide-react';
import { ServiceSubCategory } from '@/types';

interface SubCategoryCardProps {
  subCategory: ServiceSubCategory;
  categoryId: string;
}

export default function SubCategoryCard({ subCategory, categoryId }: SubCategoryCardProps) {
  // Count trending services
  const trendingServices = subCategory.services.filter(s => s.isTrending).length;
  
  return (
    <Link href={`/services/${categoryId}/${subCategory.id}`}>
      <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer border-2 hover:border-brand-orange/50">
        <CardHeader className="pb-4">
          <div className="flex items-center justify-between">
            <div className="p-3 rounded-lg bg-brand-navy text-white group-hover:bg-brand-orange group-hover:scale-110 transition-all duration-300">
              <TrendingUp className="h-6 w-6" />
            </div>
            <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-brand-orange group-hover:translate-x-1 transition-all duration-300" />
          </div>
          <CardTitle className="text-lg font-bold text-brand-navy group-hover:text-brand-orange transition-colors duration-300">
            {subCategory.name}
          </CardTitle>
          <CardDescription className="text-gray-600 leading-relaxed">
            {subCategory.description}
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-0">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Badge variant="secondary" className="bg-brand-orange/10 text-brand-orange border-brand-orange/20">
                {subCategory.services.length} Services
              </Badge>
              {trendingServices > 0 && (
                <Badge className="bg-red-500 text-white">
                  {trendingServices} Trending
                </Badge>
              )}
            </div>
          </div>
          
          {/* Services preview */}
          <div className="mt-4">
            <p className="text-sm text-gray-500 mb-2">Available Services:</p>
            <div className="flex flex-wrap gap-1">
              {subCategory.services.slice(0, 4).map((service) => (
                <span
                  key={service.id}
                  className={`text-xs px-2 py-1 rounded-full ${
                    service.isTrending
                      ? 'bg-red-100 text-red-600 border border-red-200'
                      : 'bg-gray-100 text-gray-600'
                  }`}
                >
                  {service.name}
                  {service.isTrending && ' 🔥'}
                </span>
              ))}
              {subCategory.services.length > 4 && (
                <span className="text-xs text-gray-400 px-2 py-1">
                  +{subCategory.services.length - 4} more
                </span>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
