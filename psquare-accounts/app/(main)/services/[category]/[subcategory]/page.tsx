'use client';

import { useState, useEffect, useCallback } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, TrendingUp, Search } from 'lucide-react';
import ServiceCard from '@/components/services/ServiceCard';
import ServiceModal from '@/components/services/ServiceModal';
import { Service, ServiceSubCategory } from '@/types';
import { services } from '@/data/services';

export default function SubCategoryPage() {
  const params = useParams();
  const [subCategory, setSubCategory] = useState<ServiceSubCategory | null>(null);
  const [servicesList, setServicesList] = useState<Service[]>([]);
  const [filteredServices, setFilteredServices] = useState<Service[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [showTrending, setShowTrending] = useState(false);
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  const categoryId = params.category as string;
  const subCategoryId = params.subcategory as string;

  const fetchSubCategoryData = useCallback(() => {
    try {
      setLoading(true);
      
      // Find category and sub-category from static data
      const category = services.find(cat => cat.id === categoryId);
      if (category) {
        const subCategoryData = category.subCategories.find(sub => sub.id === subCategoryId);
        if (subCategoryData) {
          setSubCategory(subCategoryData);
          setServicesList(subCategoryData.services);
        }
      }
    } catch (error) {
      console.error('Error fetching sub-category data:', error);
    } finally {
      setLoading(false);
    }
  }, [categoryId, subCategoryId]);

  const filterServices = useCallback(() => {
    let filtered = servicesList;

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
  }, [servicesList, searchTerm, showTrending]);

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
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-brand-navy"></div>
      </div>
    );
  }

  if (!subCategory) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Service Not Found</h1>
          <p className="text-xl text-gray-600 mb-8">The service you're looking for doesn't exist.</p>
          <Link href="/services">
            <button className="px-6 py-3 bg-brand-navy text-white rounded-lg hover:bg-brand-navy/90">
              Back to Services
            </button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-brand-navy to-brand-orange text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-6">
            <Link 
              href={`/services/${categoryId}`}
              className="flex items-center text-white/80 hover:text-white transition-colors"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to {categoryId.replace('-', ' ')}
            </Link>
          </div>
          
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {subCategory.name}
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto">
              {subCategory.description}
            </p>
            <div className="flex justify-center items-center space-x-8 text-white/80">
              <div className="text-center">
                <div className="text-2xl font-bold">{subCategory.services.length}</div>
                <div className="text-sm">Services Available</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">
                  {subCategory.services.filter(s => s.isTrending).length}
                </div>
                <div className="text-sm">Trending Services</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex-1 max-w-md">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-navy focus:border-transparent"
                />
              </div>
            </div>
            
            <button
              onClick={() => setShowTrending(!showTrending)}
              className={`flex items-center px-4 py-3 rounded-lg font-medium transition-colors ${
                showTrending
                  ? 'bg-brand-orange text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <TrendingUp className="h-4 w-4 mr-2" />
              {showTrending ? 'Show All' : 'Trending Only'}
            </button>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Available Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our comprehensive range of {subCategory.name.toLowerCase()} services
            </p>
          </div>

          {filteredServices.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-gray-500 text-lg">
                {searchTerm || showTrending 
                  ? 'No services found matching your criteria.'
                  : 'No services available for this category.'
                }
              </div>
              {(searchTerm || showTrending) && (
                <button 
                  onClick={() => {
                    setSearchTerm('');
                    setShowTrending(false);
                  }}
                  className="mt-4 px-6 py-2 bg-brand-navy text-white rounded-lg hover:bg-brand-navy/90"
                >
                  Clear Filters
                </button>
              )}
            </div>
          ) : (
            <div className="space-y-6">
              {filteredServices.map((service) => (
                <ServiceCard
                  key={service.id}
                  service={service}
                  onContactClick={handleContactClick}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Need Help Choosing a Service?
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

      {/* Service Modal */}
      {selectedService && (
        <ServiceModal
          service={selectedService}
          isOpen={isModalOpen}
          onClose={handleModalClose}
        />
      )}
    </div>
  );
}