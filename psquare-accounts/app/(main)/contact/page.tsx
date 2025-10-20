'use client';

import { useEffect, useState } from 'react';
// import { Metadata } from 'next';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    serviceInquiry: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

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
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      serviceInquiry: value
    }));
  };

  // Preselect service from ?service=
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const svc = params.get('service');
      if (svc) {
        setFormData(prev => ({ ...prev, serviceInquiry: svc }));
      }
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Here you would typically send the data to your API
      console.log('Form submitted:', formData);
      
      setIsSubmitted(true);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        serviceInquiry: '',
        message: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="gradient-contrast text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Get In Touch
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Ready to start your business journey? Contact us today for a consultation.
            </p>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              Our expert team is here to help you with all your business registration and compliance needs.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card className="border-2 border-brand-navy">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Send us a Message
                  </h2>
                  
                  {isSubmitted ? (
                    <div className="text-center py-12">
                      <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                      <p className="text-gray-600 mb-6">
                        Thank you for contacting us. We&apos;ll get back to you within 24 hours.
                      </p>
                      <Button 
                        onClick={() => setIsSubmitted(false)}
                        className="bg-brand-navy hover:bg-brand-navy/90"
                      >
                        Send Another Message
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="firstName" className="text-sm font-semibold text-gray-700">
                            First Name *
                          </Label>
                          <Input
                            id="firstName"
                            name="firstName"
                            type="text"
                            required
                            value={formData.firstName}
                            onChange={handleInputChange}
                            className="mt-1"
                            placeholder="Enter your first name"
                          />
                        </div>
                        <div>
                          <Label htmlFor="lastName" className="text-sm font-semibold text-gray-700">
                            Last Name *
                          </Label>
                          <Input
                            id="lastName"
                            name="lastName"
                            type="text"
                            required
                            value={formData.lastName}
                            onChange={handleInputChange}
                            className="mt-1"
                            placeholder="Enter your last name"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="email" className="text-sm font-semibold text-gray-700">
                            Email Address *
                          </Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            required
                            value={formData.email}
                            onChange={handleInputChange}
                            className="mt-1"
                            placeholder="Enter your email"
                          />
                        </div>
                        <div>
                          <Label htmlFor="phone" className="text-sm font-semibold text-gray-700">
                            Phone Number *
                          </Label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            required
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="mt-1"
                            placeholder="Enter your phone number"
                          />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="serviceInquiry" className="text-sm font-semibold text-gray-700">
                          Service Inquiry *
                        </Label>
                        <Select value={formData.serviceInquiry} onValueChange={handleSelectChange}>
                          <SelectTrigger className="mt-1">
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                          <SelectContent>
                            {serviceOptions.map((service) => (
                              <SelectItem key={service} value={service}>
                                {service}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label htmlFor="message" className="text-sm font-semibold text-gray-700">
                          Message *
                        </Label>
                        <Textarea
                          id="message"
                          name="message"
                          required
                          rows={5}
                          value={formData.message}
                          onChange={handleInputChange}
                          className="mt-1"
                          placeholder="Tell us about your requirements..."
                        />
                      </div>

                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-gradient-to-r from-brand-navy to-brand-orange hover:opacity-90 text-white font-bold py-3"
                      >
                        {isSubmitting ? (
                          <div className="flex items-center">
                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                            Sending...
                          </div>
                        ) : (
                          <div className="flex items-center">
                            <Send className="h-4 w-4 mr-2" />
                            Send Message
                          </div>
                        )}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Contact Details */}
              <Card className="border-2 border-brand-orange">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Contact Information
                  </h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <MapPin className="h-6 w-6 text-brand-navy mr-3 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Office Address</h4>
                        <p className="text-gray-600">
                          Vastral, Ahmedabad<br />
                          Gujarat, India
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <Phone className="h-6 w-6 text-brand-navy mr-3 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Phone</h4>
                        <p className="text-gray-600">
                          +91 98765 43210<br />
                          <span className="text-sm">Mon-Sat: 9 AM - 7 PM</span>
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <Mail className="h-6 w-6 text-brand-navy mr-3 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Email</h4>
                        <p className="text-gray-600">
                          paraliyaravi80@gmail.com<br />
                          info@psquareaccounts.com
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <Clock className="h-6 w-6 text-brand-navy mr-3 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Office Hours</h4>
                        <p className="text-gray-600">
                          Monday - Saturday: 9:00 AM - 7:00 PM<br />
                          Sunday: Closed
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Google Maps */}
              <Card className="border-2 border-gray-300">
                <CardContent className="p-0">
                  <div className="h-64 bg-gray-200 flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                      <p className="text-gray-500">Google Maps Integration</p>
                      <p className="text-sm text-gray-400">Vastral, Ahmedabad</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Contact */}
              <Card className="bg-gradient-to-r from-brand-navy to-brand-orange text-white">
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-bold mb-4">
                    Need Immediate Help?
                  </h3>
                  <p className="mb-6 opacity-90">
                    Call us directly for urgent inquiries and immediate assistance.
                  </p>
                  <Button 
                    size="lg" 
                    className="bg-white text-brand-navy hover:bg-gray-100 font-bold"
                  >
                    <Phone className="h-4 w-4 mr-2" />
                    Call Now: +91 98765 43210
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Quick answers to common questions about our services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border border-gray-200">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  How long does company registration take?
                </h3>
                <p className="text-gray-600">
                  Company registration typically takes 7-15 business days, depending on the type of company and documentation provided.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-gray-200">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  What documents do I need for GST registration?
                </h3>
                <p className="text-gray-600">
                  You&apos;ll need PAN card, Aadhaar card, bank account details, business address proof, and incorporation certificate.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-gray-200">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  Do you provide ongoing compliance support?
                </h3>
                <p className="text-gray-600">
                  Yes, our Advanced and Premium packages include ongoing compliance support, filing assistance, and regular updates.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-gray-200">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  Can I change my package later?
                </h3>
                <p className="text-gray-600">
                  Absolutely! You can upgrade or downgrade your package at any time based on your business needs and growth.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
