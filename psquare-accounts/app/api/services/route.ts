import { NextRequest, NextResponse } from 'next/server';
import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';
import { Service, ServiceCategory } from '@/types';

const dataPath = join(process.cwd(), 'data', 'services.json');

// Helper function to read services data
function readServicesData(): { workTypeCategories: ServiceCategory[] } {
  try {
    const data = readFileSync(dataPath, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading services data:', error);
    return { workTypeCategories: [] };
  }
}

// Helper function to write services data
function writeServicesData(data: { workTypeCategories: ServiceCategory[] }) {
  try {
    writeFileSync(dataPath, JSON.stringify(data, null, 2));
    return true;
  } catch (error) {
    console.error('Error writing services data:', error);
    return false;
  }
}

// GET - Fetch all services data
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');
    const subCategory = searchParams.get('subCategory');
    const search = searchParams.get('search');
    const trending = searchParams.get('trending');

    const data = readServicesData();
    let result = data.workTypeCategories;

    // Filter by category
    if (category) {
      result = result.filter(cat => cat.id === category);
    }

    // Filter by sub-category
    if (subCategory) {
      result = result.map(cat => ({
        ...cat,
        subCategories: cat.subCategories.filter(sub => sub.id === subCategory)
      }));
    }

    // Search functionality
    if (search) {
      const searchTerm = search.toLowerCase();
      result = result.map(cat => ({
        ...cat,
        subCategories: cat.subCategories.map(sub => ({
          ...sub,
          services: sub.services.filter(service =>
            service.name.toLowerCase().includes(searchTerm) ||
            service.description.toLowerCase().includes(searchTerm)
          )
        })).filter(sub => sub.services.length > 0)
      })).filter(cat => cat.subCategories.length > 0);
    }

    // Filter trending services
    if (trending === 'true') {
      result = result.map(cat => ({
        ...cat,
        subCategories: cat.subCategories.map(sub => ({
          ...sub,
          services: sub.services.filter(service => service.isTrending)
        })).filter(sub => sub.services.length > 0)
      })).filter(cat => cat.subCategories.length > 0);
    }

    return NextResponse.json({ success: true, data: result });
  } catch (error) {
    console.error('Error fetching services:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch services' },
      { status: 500 }
    );
  }
}

// POST - Add new service
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { categoryId, subCategoryId, service } = body;

    if (!categoryId || !subCategoryId || !service) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const data = readServicesData();
    const category = data.workTypeCategories.find(cat => cat.id === categoryId);
    
    if (!category) {
      return NextResponse.json(
        { success: false, error: 'Category not found' },
        { status: 404 }
      );
    }

    const subCategory = category.subCategories.find(sub => sub.id === subCategoryId);
    
    if (!subCategory) {
      return NextResponse.json(
        { success: false, error: 'Sub-category not found' },
        { status: 404 }
      );
    }

    // Generate unique ID
    const newService: Service = {
      id: `service-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      name: service.name,
      description: service.description,
      category: categoryId,
      subCategory: subCategoryId,
      subSubCategory: service.subSubCategory,
      isTrending: service.isTrending || false,
    };

    subCategory.services.push(newService);

    if (writeServicesData(data)) {
      return NextResponse.json({ success: true, data: newService });
    } else {
      return NextResponse.json(
        { success: false, error: 'Failed to save service' },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Error adding service:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to add service' },
      { status: 500 }
    );
  }
}

// PUT - Update service
export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();
    const { serviceId, updates } = body;

    if (!serviceId || !updates) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const data = readServicesData();
    let serviceFound = false;

    for (const category of data.workTypeCategories) {
      for (const subCategory of category.subCategories) {
        const serviceIndex = subCategory.services.findIndex(s => s.id === serviceId);
        if (serviceIndex !== -1) {
          subCategory.services[serviceIndex] = {
            ...subCategory.services[serviceIndex],
            ...updates,
          };
          serviceFound = true;
          break;
        }
      }
      if (serviceFound) break;
    }

    if (!serviceFound) {
      return NextResponse.json(
        { success: false, error: 'Service not found' },
        { status: 404 }
      );
    }

    if (writeServicesData(data)) {
      return NextResponse.json({ success: true });
    } else {
      return NextResponse.json(
        { success: false, error: 'Failed to update service' },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Error updating service:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to update service' },
      { status: 500 }
    );
  }
}

// DELETE - Delete service
export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const serviceId = searchParams.get('id');

    if (!serviceId) {
      return NextResponse.json(
        { success: false, error: 'Service ID is required' },
        { status: 400 }
      );
    }

    const data = readServicesData();
    let serviceFound = false;

    for (const category of data.workTypeCategories) {
      for (const subCategory of category.subCategories) {
        const serviceIndex = subCategory.services.findIndex(s => s.id === serviceId);
        if (serviceIndex !== -1) {
          subCategory.services.splice(serviceIndex, 1);
          serviceFound = true;
          break;
        }
      }
      if (serviceFound) break;
    }

    if (!serviceFound) {
      return NextResponse.json(
        { success: false, error: 'Service not found' },
        { status: 404 }
      );
    }

    if (writeServicesData(data)) {
      return NextResponse.json({ success: true });
    } else {
      return NextResponse.json(
        { success: false, error: 'Failed to delete service' },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Error deleting service:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to delete service' },
      { status: 500 }
    );
  }
}
