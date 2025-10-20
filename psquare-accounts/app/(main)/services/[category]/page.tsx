import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import SubCategoryCard from '@/components/services/SubCategoryCard';
import { ServiceCategory } from '@/types';

interface CategoryPageProps {
  params: {
    category: string;
  };
}

// Fetch category data
async function getCategoryData(categoryId: string): Promise<ServiceCategory | null> {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/services?category=${categoryId}`, {
      cache: 'no-store',
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch category data');
    }
    
    const data = await response.json();
    return data.data?.[0] || null;
  } catch (error) {
    console.error('Error fetching category data:', error);
    return null;
  }
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const category = await getCategoryData(params.category);
  
  if (!category) {
    return {
      title: 'Category Not Found',
    };
  }

  return {
    title: `${category.name} Services - Psquare Accounts`,
    description: category.description,
    keywords: `${category.name}, business services, licensing, registration, India`,
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const category = await getCategoryData(params.category);

  if (!category) {
    notFound();
  }

  // Calculate total services
  const totalServices = category.subCategories.reduce(
    (total, sub) => total + sub.services.length, 
    0
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-gray-500 hover:text-brand-orange">
              Home
            </Link>
            <span className="text-gray-400">/</span>
            <Link href="/services" className="text-gray-500 hover:text-brand-orange">
              Services
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-brand-navy font-medium">{category.name}</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-brand-navy to-brand-orange text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <Link
                href="/services"
                className="inline-flex items-center text-white/80 hover:text-white mb-4 transition-colors duration-200"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Services
              </Link>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                {category.name}
              </h1>
              <p className="text-lg text-white/90 max-w-2xl">
                {category.description}
              </p>
            </div>
            <div className="hidden md:block">
              <div className="text-right">
                <div className="text-2xl font-bold">{category.subCategories.length}</div>
                <div className="text-white/80">Categories</div>
                <div className="text-2xl font-bold mt-2">{totalServices}</div>
                <div className="text-white/80">Services</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold text-brand-navy">{category.subCategories.length}</div>
              <div className="text-gray-600 text-sm">Sub-Categories</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-brand-navy">{totalServices}</div>
              <div className="text-gray-600 text-sm">Total Services</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-brand-navy">
                {category.subCategories.reduce((total, sub) => 
                  total + sub.services.filter(s => s.isTrending).length, 0
                )}
              </div>
              <div className="text-gray-600 text-sm">Trending Services</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-brand-navy">7-15</div>
              <div className="text-gray-600 text-sm">Days Processing</div>
            </div>
          </div>
        </div>
      </div>

      {/* Sub-Categories */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-brand-navy mb-4">
              Available Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose from our comprehensive range of {category.name.toLowerCase()} services.
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
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-brand-navy text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Need Help with {category.name}?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Our experts are ready to help you with all your {category.name.toLowerCase()} needs.
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
    </div>
  );
}
