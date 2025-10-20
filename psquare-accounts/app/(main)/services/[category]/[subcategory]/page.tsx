'use client';

import { useState, useEffect, useCallback } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, TrendingUp, Search } from 'lucide-react';
import ServiceCard from '@/components/services/ServiceCard';
import ServiceModal from '@/components/services/ServiceModal';
import { Service, ServiceSubCategory } from '@/types';

export default function SubCategoryPage() {
  const params = useParams();
  const [subCategory, setSubCategory] = useState<ServiceSubCategory | null>(null);
  const [services, setServices] = useState<Service[]>([]);
  const [filteredServices, setFilteredServices] = useState<Service[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [showTrending, setShowTrending] = useState(false);
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  const categoryId = params.category as string;
  const subCategoryId = params.subcategory as string;

  const fetchSubCategoryData = useCallback(async () => {
    try {
      setLoading(true);
      const response = await fetch(`/api/services?category=${categoryId}&subCategory=${subCategoryId}`);
      
      if (!response.ok) {
        throw new Error('Failed to fetch sub-category data');
      }
      
      const data = await response.json();
      const categoryData = data.data?.[0];
      
      if (categoryData && categoryData.subCategories.length > 0) {
        const subCategoryData = categoryData.subCategories[0];
        setSubCategory(subCategoryData);
        setServices(subCategoryData.services);
      }
    } catch (error) {
      console.error('Error fetching sub-category data:', error);
    } finally {
      setLoading(false);
    }
  }, [categoryId, subCategoryId]);

  const filterServices = useCallback(() => {
    let filtered = services;

    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(service =>
        service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Trending filter
    if (showTrending) {
      filtered = filtered.filter(service => service.isTrending);
    }

    setFilteredServices(filtered);
  }, [services, searchTerm, showTrending]);

  useEffect(() => {
    fetchSubCategoryData();
  }, [fetchSubCategoryData]);

  useEffect(() => {
    filterServices();
  }, [filterServices]);

  const handleContactClick = (service: Service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedService(null);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-orange mx-auto mb-4"></div>
          <p className="text-gray-600">Loading services...</p>
        </div>
      </div>
    );
  }

  if (!subCategory) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Service Not Found</h1>
          <p className="text-gray-600 mb-8">The requested service category could not be found.</p>
          <Link
            href="/services"
            className="bg-brand-orange text-white px-6 py-3 rounded-lg font-semibold hover:bg-brand-orange/90 transition-colors duration-300"
          >
            Back to Services
          </Link>
        </div>
      </div>
    );
  }

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
            <Link href={`/services/${categoryId}`} className="text-gray-500 hover:text-brand-orange">
              {categoryId.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-brand-navy font-medium">{subCategory.name}</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-brand-navy to-brand-orange text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <Link
                href={`/services/${categoryId}`}
                className="inline-flex items-center text-white/80 hover:text-white mb-4 transition-colors duration-200"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to {categoryId.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
              </Link>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                {subCategory.name}
              </h1>
              <p className="text-lg text-white/90 max-w-2xl">
                {subCategory.description}
              </p>
            </div>
            <div className="hidden md:block">
              <div className="text-right">
                <div className="text-2xl font-bold">{services.length}</div>
                <div className="text-white/80">Services</div>
                <div className="text-2xl font-bold mt-2">
                  {services.filter(s => s.isTrending).length}
                </div>
                <div className="text-white/80">Trending</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="bg-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex-1 max-w-md">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent"
                />
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setShowTrending(!showTrending)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors duration-200 ${
                  showTrending
                    ? 'bg-red-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <TrendingUp className="h-4 w-4" />
                <span>Trending Only</span>
              </button>
              
              <div className="text-sm text-gray-600">
                {filteredServices.length} of {services.length} services
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredServices.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service) => (
                <ServiceCard
                  key={service.id}
                  service={service}
                  onContactClick={handleContactClick}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="text-gray-500 text-lg mb-4">
                {searchTerm || showTrending
                  ? 'No services match your current filters.'
                  : 'No services available in this category.'}
              </div>
              {(searchTerm || showTrending) && (
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setShowTrending(false);
                  }}
                  className="text-brand-orange hover:text-brand-orange/80 font-semibold"
                >
                  Clear Filters
                </button>
              )}
            </div>
          )}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-brand-navy text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Need Help with {subCategory.name}?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Our experts are ready to help you with all your {subCategory.name.toLowerCase()} needs.
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

      {/* Service Modal */}
      <ServiceModal
        service={selectedService}
        isOpen={isModalOpen}
        onClose={handleModalClose}
        onContactClick={handleContactClick}
      />
    </div>
  );
}
