'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { 
  BarChart3, 
  Users, 
  Package, 
  MessageSquare, 
  Plus, 
  Eye, 
  LogOut,
  TrendingUp,
  Clock,
  CheckCircle,
  AlertCircle
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { services } from '@/data/services';
import { blogPosts } from '@/data/blog';

export default function AdminDashboard() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [stats, setStats] = useState({
    totalServices: 0,
    totalLeads: 0,
    totalBlogPosts: 0,
    totalCategories: 0
  });
  const router = useRouter();

  useEffect(() => {
    // Check login status
    const loggedIn = localStorage.getItem('adminLoggedIn');
    if (loggedIn !== 'true') {
      router.push('/admin');
      return;
    }
    setIsLoggedIn(true);

    // Calculate stats
    const totalServices = services.reduce((acc, category) => 
      acc + category.subCategories.reduce((subAcc, subCategory) => 
        subAcc + subCategory.services.length, 0), 0
    );

    setStats({
      totalServices,
      totalLeads: 0, // Will be updated when leads are implemented
      totalBlogPosts: blogPosts.length,
      totalCategories: services.length
    });
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('adminLoggedIn');
    localStorage.removeItem('adminLoginTime');
    router.push('/admin');
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-brand-navy"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-gradient-to-br from-brand-navy to-brand-orange rounded-lg flex items-center justify-center">
                <BarChart3 className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
                <p className="text-sm text-gray-600">Psquare Accounts Management</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <Link href="/" target="_blank">
                <Button variant="outline" size="sm">
                  <Eye className="h-4 w-4 mr-2" />
                  View Website
                </Button>
              </Link>
              <Button onClick={handleLogout} variant="outline" size="sm">
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="border-2 border-blue-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Services</p>
                  <p className="text-3xl font-bold text-gray-900">{stats.totalServices}</p>
                </div>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Package className="h-6 w-6 text-blue-600" />
                </div>
              </div>
              <div className="mt-4 flex items-center text-sm text-green-600">
                <TrendingUp className="h-4 w-4 mr-1" />
                <span>Active</span>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-green-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Leads</p>
                  <p className="text-3xl font-bold text-gray-900">{stats.totalLeads}</p>
                </div>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <Users className="h-6 w-6 text-green-600" />
                </div>
              </div>
              <div className="mt-4 flex items-center text-sm text-green-600">
                <CheckCircle className="h-4 w-4 mr-1" />
                <span>New inquiries</span>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-purple-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Blog Posts</p>
                  <p className="text-3xl font-bold text-gray-900">{stats.totalBlogPosts}</p>
                </div>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <MessageSquare className="h-6 w-6 text-purple-600" />
                </div>
              </div>
              <div className="mt-4 flex items-center text-sm text-purple-600">
                <Clock className="h-4 w-4 mr-1" />
                <span>Published</span>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-orange-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Categories</p>
                  <p className="text-3xl font-bold text-gray-900">{stats.totalCategories}</p>
                </div>
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                  <BarChart3 className="h-6 w-6 text-orange-600" />
                </div>
              </div>
              <div className="mt-4 flex items-center text-sm text-orange-600">
                <TrendingUp className="h-4 w-4 mr-1" />
                <span>Work Types</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Package className="h-5 w-5 mr-2 text-brand-navy" />
                Services Management
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Manage your services, add new ones, edit existing services, and organize them by categories.
              </p>
              <div className="space-y-3">
                <Link href="/admin/services">
                  <Button className="w-full bg-brand-navy hover:bg-brand-navy/90 text-white">
                    <Eye className="h-4 w-4 mr-2" />
                    View All Services
                  </Button>
                </Link>
                <Link href="/admin/services/add">
                  <Button variant="outline" className="w-full">
                    <Plus className="h-4 w-4 mr-2" />
                    Add New Service
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Users className="h-5 w-5 mr-2 text-brand-orange" />
                Leads Management
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                View contact form submissions, manage leads, and export data for follow-up.
              </p>
              <div className="space-y-3">
                <Link href="/admin/leads">
                  <Button className="w-full bg-brand-orange hover:bg-brand-orange/90 text-white">
                    <Eye className="h-4 w-4 mr-2" />
                    View All Leads
                  </Button>
                </Link>
                <Button variant="outline" className="w-full" disabled>
                  <AlertCircle className="h-4 w-4 mr-2" />
                  Export Leads (Coming Soon)
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Clock className="h-5 w-5 mr-2 text-gray-600" />
              Recent Activity
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <Package className="h-4 w-4 text-blue-600" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">Services loaded successfully</p>
                  <p className="text-xs text-gray-500">All {stats.totalServices} services are active and ready</p>
                </div>
                <span className="text-xs text-gray-400">Just now</span>
              </div>
              
              <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <MessageSquare className="h-4 w-4 text-green-600" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">Blog posts published</p>
                  <p className="text-xs text-gray-500">{stats.totalBlogPosts} articles available for readers</p>
                </div>
                <span className="text-xs text-gray-400">Recently</span>
              </div>
              
              <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                  <Users className="h-4 w-4 text-orange-600" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">Lead management ready</p>
                  <p className="text-xs text-gray-500">Contact form submissions will appear here</p>
                </div>
                <span className="text-xs text-gray-400">System ready</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
