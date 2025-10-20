import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { TrendingUp, ArrowRight, Phone } from 'lucide-react';
import { Service } from '@/types';
import Link from 'next/link';
import { useState } from 'react';

interface ServiceCardProps {
  service: Service;
  onContactClick: (service: Service) => void;
}

export default function ServiceCard({ service, onContactClick }: ServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card 
      className={`group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer border-2 ${
        service.isTrending 
          ? 'border-red-200 hover:border-red-300' 
          : 'border-gray-200 hover:border-brand-orange/50'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center space-x-2 mb-2">
              <Link href={`/services/${service.category}/${service.subCategory}/${service.id}`}>
                <CardTitle className="text-lg font-bold text-brand-navy group-hover:text-brand-orange transition-colors duration-300">
                  {service.name}
                </CardTitle>
              </Link>
              {service.isTrending && (
                <Badge className="bg-red-500 text-white text-xs">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  Trending
                </Badge>
              )}
            </div>
            <CardDescription className="text-gray-600 leading-relaxed text-sm">
              {service.description}
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="pt-0">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Badge variant="outline" className="text-gray-600 text-xs">
              {service.category}
            </Badge>
            <Badge variant="outline" className="text-gray-500 text-xs">
              {service.subCategory}
            </Badge>
          </div>
          
          <Button
            size="sm"
            className={`bg-brand-orange hover:bg-brand-orange/90 text-white transition-all duration-300 ${
              isHovered ? 'scale-105' : ''
            }`}
            onClick={(e) => {
              e.stopPropagation();
              onContactClick(service);
            }}
          >
            <Phone className="h-4 w-4 mr-1" />
            Contact
          </Button>
        </div>
        
        {/* Process info */}
        <div className="mt-3 pt-3 border-t border-gray-100">
          <div className="flex items-center justify-between text-xs text-gray-500">
            <span>Quick Process</span>
            <ArrowRight className="h-3 w-3 group-hover:text-brand-orange transition-colors duration-300" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
