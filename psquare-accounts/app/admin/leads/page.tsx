'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { 
  ArrowLeft, 
  Download, 
  Search, 
  Mail, 
  Phone, 
  Calendar,
  Users,
  Filter,
  CheckCircle,
  Clock,
  AlertCircle,
  Eye
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';

interface Lead {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  serviceInquiry: string;
  message: string;
  createdAt: string;
  status: 'new' | 'contacted' | 'converted' | 'closed';
}

export default function AdminLeadsPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [leads, setLeads] = useState<Lead[]>([]);
  const [filteredLeads, setFilteredLeads] = useState<Lead[]>([]);
  const router = useRouter();

  useEffect(() => {
    // Check login status
    const loggedIn = localStorage.getItem('adminLoggedIn');
    if (loggedIn !== 'true') {
      router.push('/admin');
      return;
    }
    setIsLoggedIn(true);

    // Load leads from localStorage (in a real app, this would be from an API)
    const savedLeads = localStorage.getItem('adminLeads');
    if (savedLeads) {
      setLeads(JSON.parse(savedLeads));
    } else {
      // Sample leads for demonstration
      const sampleLeads: Lead[] = [
        {
          id: '1',
          firstName: 'Rajesh',
          lastName: 'Kumar',
          email: 'rajesh.kumar@email.com',
          phone: '+91 98765 43210',
          serviceInquiry: 'Company Registration',
          message: 'I need help with registering a private limited company. Please contact me for more details.',
          createdAt: new Date().toISOString(),
          status: 'new'
        },
        {
          id: '2',
          firstName: 'Priya',
          lastName: 'Sharma',
          email: 'priya.sharma@email.com',
          phone: '+91 87654 32109',
          serviceInquiry: 'GST Registration',
          message: 'Looking for GST registration services for my new business.',
          createdAt: new Date(Date.now() - 86400000).toISOString(), // 1 day ago
          status: 'contacted'
        },
        {
          id: '3',
          firstName: 'Amit',
          lastName: 'Patel',
          email: 'amit.patel@email.com',
          phone: '+91 76543 21098',
          serviceInquiry: 'FSSAI License',
          message: 'Need FSSAI license for my food business. Please provide details about the process.',
          createdAt: new Date(Date.now() - 172800000).toISOString(), // 2 days ago
          status: 'converted'
        }
      ];
      setLeads(sampleLeads);
      localStorage.setItem('adminLeads', JSON.stringify(sampleLeads));
    }
  }, [router]);

  useEffect(() => {
    let filtered = leads;

    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(lead =>
        lead.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        lead.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        lead.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        lead.phone.includes(searchTerm) ||
        lead.serviceInquiry.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Status filter
    if (statusFilter !== 'all') {
      filtered = filtered.filter(lead => lead.status === statusFilter);
    }

    setFilteredLeads(filtered);
  }, [searchTerm, statusFilter, leads]);

  const updateLeadStatus = (leadId: string, newStatus: Lead['status']) => {
    const updatedLeads = leads.map(lead => 
      lead.id === leadId ? { ...lead, status: newStatus } : lead
    );
    setLeads(updatedLeads);
    localStorage.setItem('adminLeads', JSON.stringify(updatedLeads));
  };

  const exportLeads = () => {
    const csvContent = [
      ['Name', 'Email', 'Phone', 'Service Inquiry', 'Message', 'Status', 'Date'],
      ...filteredLeads.map(lead => [
        `${lead.firstName} ${lead.lastName}`,
        lead.email,
        lead.phone,
        lead.serviceInquiry,
        lead.message,
        lead.status,
        new Date(lead.createdAt).toLocaleDateString()
      ])
    ].map(row => row.join(',')).join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `leads-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  const getStatusColor = (status: Lead['status']) => {
    switch (status) {
      case 'new': return 'bg-blue-100 text-blue-800';
      case 'contacted': return 'bg-yellow-100 text-yellow-800';
      case 'converted': return 'bg-green-100 text-green-800';
      case 'closed': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status: Lead['status']) => {
    switch (status) {
      case 'new': return <AlertCircle className="h-4 w-4" />;
      case 'contacted': return <Clock className="h-4 w-4" />;
      case 'converted': return <CheckCircle className="h-4 w-4" />;
      case 'closed': return <CheckCircle className="h-4 w-4" />;
      default: return <AlertCircle className="h-4 w-4" />;
    }
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
              <Link href="/admin/dashboard">
                <Button variant="outline" size="sm">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Dashboard
                </Button>
              </Link>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Leads Management</h1>
                <p className="text-sm text-gray-600">Manage contact form submissions</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <Button onClick={exportLeads} className="bg-brand-orange hover:bg-brand-orange/90 text-white">
                <Download className="h-4 w-4 mr-2" />
                Export CSV
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="border-2 border-blue-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Leads</p>
                  <p className="text-3xl font-bold text-gray-900">{leads.length}</p>
                </div>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-yellow-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">New Leads</p>
                  <p className="text-3xl font-bold text-gray-900">
                    {leads.filter(lead => lead.status === 'new').length}
                  </p>
                </div>
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                  <AlertCircle className="h-6 w-6 text-yellow-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-green-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Converted</p>
                  <p className="text-3xl font-bold text-gray-900">
                    {leads.filter(lead => lead.status === 'converted').length}
                  </p>
                </div>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-orange-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Filtered Results</p>
                  <p className="text-3xl font-bold text-gray-900">{filteredLeads.length}</p>
                </div>
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                  <Search className="h-6 w-6 text-orange-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Search and Filter */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    type="text"
                    placeholder="Search leads..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="All Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="new">New</SelectItem>
                  <SelectItem value="contacted">Contacted</SelectItem>
                  <SelectItem value="converted">Converted</SelectItem>
                  <SelectItem value="closed">Closed</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Leads List */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Users className="h-5 w-5 mr-2 text-brand-navy" />
              All Leads ({filteredLeads.length})
            </CardTitle>
          </CardHeader>
          <CardContent>
            {filteredLeads.length === 0 ? (
              <div className="text-center py-12">
                <AlertCircle className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">No leads found</h3>
                <p className="text-gray-600 mb-4">
                  {searchTerm || statusFilter !== 'all' 
                    ? 'Try adjusting your search or filter criteria.'
                    : 'No leads available yet.'
                  }
                </p>
                {(searchTerm || statusFilter !== 'all') && (
                  <Button 
                    onClick={() => {
                      setSearchTerm('');
                      setStatusFilter('all');
                    }}
                    variant="outline"
                  >
                    Clear Filters
                  </Button>
                )}
              </div>
            ) : (
              <div className="space-y-4">
                {filteredLeads.map((lead) => (
                  <div key={lead.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="text-lg font-semibold text-gray-900">
                            {lead.firstName} {lead.lastName}
                          </h3>
                          <Badge className={getStatusColor(lead.status)}>
                            <div className="flex items-center space-x-1">
                              {getStatusIcon(lead.status)}
                              <span className="capitalize">{lead.status}</span>
                            </div>
                          </Badge>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
                          <div className="flex items-center">
                            <Mail className="h-4 w-4 mr-2" />
                            {lead.email}
                          </div>
                          <div className="flex items-center">
                            <Phone className="h-4 w-4 mr-2" />
                            {lead.phone}
                          </div>
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-2" />
                            {new Date(lead.createdAt).toLocaleDateString()}
                          </div>
                          <div className="flex items-center">
                            <Filter className="h-4 w-4 mr-2" />
                            {lead.serviceInquiry}
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <p className="text-gray-700 bg-gray-50 p-3 rounded-lg">
                        {lead.message}
                      </p>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => updateLeadStatus(lead.id, 'contacted')}
                          disabled={lead.status === 'contacted'}
                        >
                          <Clock className="h-4 w-4 mr-1" />
                          Mark as Contacted
                        </Button>
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => updateLeadStatus(lead.id, 'converted')}
                          disabled={lead.status === 'converted'}
                        >
                          <CheckCircle className="h-4 w-4 mr-1" />
                          Mark as Converted
                        </Button>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <Button variant="outline" size="sm">
                          <Eye className="h-4 w-4 mr-1" />
                          View Details
                        </Button>
                        <Button variant="outline" size="sm">
                          <Mail className="h-4 w-4 mr-1" />
                          Reply
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
