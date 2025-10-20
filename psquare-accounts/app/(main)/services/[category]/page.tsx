import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import SubCategoryCard from '@/components/services/SubCategoryCard';
import { ServiceCategory } from '@/types';
import { services } from '@/data/services';

interface CategoryPageProps {
  params: {
    category: string;
  };
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const category = services.find(cat => cat.id === params.category);
  
  if (!category) {
    return {
      title: 'Category Not Found - Psquare Accounts',
    };
  }

  return {
    title: `${category.name} - Psquare Accounts Services`,
    description: category.description,
    keywords: `${category.name}, business services, ${category.name.toLowerCase()}`,
  };
}

export async function generateStaticParams() {
  return services.map((category) => ({
    category: category.id,
  }));
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const category = services.find(cat => cat.id === params.category);

  if (!category) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-brand-navy to-brand-orange text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-6">
            <Link 
              href="/services" 
              className="flex items-center text-white/80 hover:text-white transition-colors"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to Services
            </Link>
          </div>
          
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {category.name}
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto">
              {category.description}
            </p>
            <div className="flex justify-center items-center space-x-8 text-white/80">
              <div className="text-center">
                <div className="text-2xl font-bold">{category.subCategories.length}</div>
                <div className="text-sm">Sub-Categories</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">
                  {category.subCategories.reduce((acc, sub) => acc + sub.services.length, 0)}
                </div>
                <div className="text-sm">Services</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sub-Categories Grid */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Choose Your Service Category
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Select from our comprehensive range of {category.name.toLowerCase()} services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {category.subCategories.map((subCategory) => (
              <SubCategoryCard
                key={subCategory.id}
                subCategory={subCategory}
                categoryId={category.id}
              />
            ))}
          </div>

          {category.subCategories.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-500 text-lg">
                No sub-categories available for this service category.
              </div>
            </div>
          )}
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Need Help Choosing?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Our expert team is here to help you find the right service for your business needs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <button className="px-8 py-4 bg-gradient-to-r from-brand-navy to-brand-orange text-white font-bold rounded-lg hover:opacity-90 transition-opacity">
                Get Free Consultation
              </button>
            </Link>
            <Link href="/services">
              <button className="px-8 py-4 border-2 border-brand-navy text-brand-navy font-bold rounded-lg hover:bg-brand-navy hover:text-white transition-colors">
                View All Services
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}