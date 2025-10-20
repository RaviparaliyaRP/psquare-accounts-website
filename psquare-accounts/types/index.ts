// Psquare Accounts TypeScript Types

export interface Service {
  id: string;
  name: string;
  description: string;
  category: string;
  subCategory: string;
  subSubCategory?: string;
  isTrending?: boolean;
}

export interface ServiceCategory {
  id: string;
  name: string;
  description: string;
  icon?: string;
  subCategories: ServiceSubCategory[];
}

export interface ServiceSubCategory {
  id: string;
  name: string;
  description: string;
  services: Service[];
  subSubCategories?: ServiceSubSubCategory[];
}

export interface ServiceSubSubCategory {
  id: string;
  name: string;
  description: string;
  services: Service[];
}

export interface Lead {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
  createdAt: string;
  status?: 'new' | 'contacted' | 'converted' | 'closed';
}

export interface Testimonial {
  id: string;
  name: string;
  designation: string;
  company: string;
  content: string;
  rating: number;
  image?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  category: string;
  tags: string[];
  publishedAt: string;
  updatedAt: string;
  author: string;
  featuredImage?: string;
}

export interface Package {
  id: string;
  name: string;
  description: string;
  price: number;
  currency: string;
  features: string[];
  isPopular?: boolean;
  buttonText: string;
}

export interface CompanyInfo {
  name: string;
  address: string;
  phonePrimary: string;
  phoneSecondary: string;
  email: string;
  instagram: string;
  facebook?: string;
  linkedin?: string;
  twitter?: string;
  youtube?: string;
  timings: {
    monday: string;
    tuesday: string;
    wednesday: string;
    thursday: string;
    friday: string;
    saturday: string;
    sunday: string;
  };
  establishedYear: number;
  tagline: string;
  mission: string;
}

export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}

export interface AdminUser {
  id: string;
  email: string;
  password: string;
  role: 'admin' | 'super-admin';
  createdAt: string;
  lastLogin?: string;
}

// Work Type Categories (10 main categories)
export type WorkTypeCategory = 
  | 'new-registration'
  | 'license-services'
  | 'compliance-returns'
  | 'renewal-services'
  | 'import-export'
  | 'certification-services'
  | 'intellectual-property'
  | 'tax-services'
  | 'tender-government'
  | 'legal-services';

export interface WorkTypeCategoryInfo {
  id: WorkTypeCategory;
  name: string;
  description: string;
  icon: string;
  color: string;
}
