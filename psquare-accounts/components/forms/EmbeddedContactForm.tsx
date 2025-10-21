'use client';

import { useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { CheckCircle, Send } from 'lucide-react';

interface EmbeddedContactFormProps {
  preselectedService?: string;
}

export default function EmbeddedContactForm({ preselectedService }: EmbeddedContactFormProps) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    serviceInquiry: preselectedService || '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (preselectedService) {
      setFormData(prev => ({ ...prev, serviceInquiry: preselectedService }));
    }
  }, [preselectedService]);

  const serviceOptions = [
    'Company Registration',
    'GST Registration',
    'FSSAI License',
    'Trade License',
    'MSME Registration',
    'Trademark Registration',
    'ISO Certification',
    'BIS Registration',
    'Import Export Code',
    'Other Service'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({ ...prev, serviceInquiry: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 800));
      console.log('Form submitted:', formData);
      setIsSubmitted(true);
      setFormData({ firstName: '', lastName: '', email: '', phone: '', serviceInquiry: preselectedService || '', message: '' });
    } catch {
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="border-2 border-brand-navy">
      <CardContent className="p-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>
        {isSubmitted ? (
          <div className="text-center py-8">
            <CheckCircle className="h-14 w-14 text-green-500 mx-auto mb-3" />
            <p className="text-gray-700">Thank you! We&apos;ll get back to you within 24 hours.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="firstName">First Name *</Label>
                <Input id="firstName" name="firstName" value={formData.firstName} onChange={handleInputChange} required className="mt-1" />
              </div>
              <div>
                <Label htmlFor="lastName">Last Name *</Label>
                <Input id="lastName" name="lastName" value={formData.lastName} onChange={handleInputChange} required className="mt-1" />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="email">Email *</Label>
                <Input id="email" name="email" type="email" value={formData.email} onChange={handleInputChange} required className="mt-1" />
              </div>
              <div>
                <Label htmlFor="phone">Phone *</Label>
                <Input id="phone" name="phone" value={formData.phone} onChange={handleInputChange} required className="mt-1" />
              </div>
            </div>
            <div>
              <Label>Service Inquiry *</Label>
              <Select value={formData.serviceInquiry} onValueChange={handleSelectChange}>
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  {serviceOptions.map(opt => (
                    <SelectItem key={opt} value={opt}>{opt}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="message">Message *</Label>
              <Textarea id="message" name="message" rows={5} value={formData.message} onChange={handleInputChange} required className="mt-1" />
            </div>
            <Button type="submit" disabled={isSubmitting} className="w-full bg-[#273F4F] text-white font-bold py-3">
              {isSubmitting ? (
                <div className="flex items-center"><div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div> Sending...</div>
              ) : (
                <div className="flex items-center"><Send className="h-4 w-4 mr-2" /> Send Message</div>
              )}
            </Button>
          </form>
        )}
      </CardContent>
    </Card>
  );
}


