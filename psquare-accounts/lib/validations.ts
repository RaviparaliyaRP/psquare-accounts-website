// Psquare Accounts Validation Schemas

import { z } from 'zod';

// Contact Form Validation
export const contactFormSchema = z.object({
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

// Admin Login Validation
export const adminLoginSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

// Service Management Validation
export const serviceSchema = z.object({
  name: z.string().min(2, 'Service name must be at least 2 characters'),
  description: z.string().min(10, 'Description must be at least 10 characters'),
  category: z.string().min(1, 'Please select a category'),
  subCategory: z.string().min(1, 'Please select a sub-category'),
  subSubCategory: z.string().optional(),
  isTrending: z.boolean().optional(),
});

// Blog Post Validation
export const blogPostSchema = z.object({
  title: z.string().min(5, 'Title must be at least 5 characters'),
  content: z.string().min(50, 'Content must be at least 50 characters'),
  excerpt: z.string().min(20, 'Excerpt must be at least 20 characters'),
  category: z.string().min(1, 'Please select a category'),
  tags: z.array(z.string()).min(1, 'Please add at least one tag'),
  author: z.string().min(2, 'Author name must be at least 2 characters'),
});

// Package Validation
export const packageSchema = z.object({
  name: z.string().min(2, 'Package name must be at least 2 characters'),
  description: z.string().min(10, 'Description must be at least 10 characters'),
  price: z.number().min(0, 'Price must be a positive number'),
  currency: z.string().min(1, 'Please select a currency'),
  features: z.array(z.string()).min(1, 'Please add at least one feature'),
  isPopular: z.boolean().optional(),
  buttonText: z.string().min(2, 'Button text must be at least 2 characters'),
});

// Testimonial Validation
export const testimonialSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  designation: z.string().min(2, 'Designation must be at least 2 characters'),
  company: z.string().min(2, 'Company name must be at least 2 characters'),
  content: z.string().min(20, 'Testimonial must be at least 20 characters'),
  rating: z.number().min(1).max(5, 'Rating must be between 1 and 5'),
});

// Search Validation
export const searchSchema = z.object({
  query: z.string().min(1, 'Search query cannot be empty'),
  category: z.string().optional(),
  subCategory: z.string().optional(),
});

// Type exports for form handling
export type ContactFormData = z.infer<typeof contactFormSchema>;
export type AdminLoginData = z.infer<typeof adminLoginSchema>;
export type ServiceData = z.infer<typeof serviceSchema>;
export type BlogPostData = z.infer<typeof blogPostSchema>;
export type PackageData = z.infer<typeof packageSchema>;
export type TestimonialData = z.infer<typeof testimonialSchema>;
export type SearchData = z.infer<typeof searchSchema>;
