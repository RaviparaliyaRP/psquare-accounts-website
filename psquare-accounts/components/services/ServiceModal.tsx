'use client';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { TrendingUp, Phone, Mail, Clock, CheckCircle, ArrowRight, X } from 'lucide-react';
import { Service } from '@/types';

interface ServiceModalProps {
  service: Service | null;
  isOpen: boolean;
  onClose: () => void;
  onContactClick?: (service: Service) => void;
}

export default function ServiceModal({ service, isOpen, onClose, onContactClick }: ServiceModalProps) {
  if (!service) return null;

  const processSteps = [
    'Initial Consultation',
    'Document Collection',
    'Application Submission',
    'Government Processing',
    'Certificate Issuance',
    'Compliance Setup'
  ];

  const requirements = [
    'Valid ID Proof',
    'Address Proof',
    'Business Documents',
    'Bank Account Details',
    'Digital Signature Certificate'
  ];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="flex items-center space-x-3 mb-2">
                <DialogTitle className="text-2xl font-bold text-brand-navy">
                  {service.name}
                </DialogTitle>
                {service.isTrending && (
                  <Badge className="bg-red-500 text-white">
                    <TrendingUp className="h-4 w-4 mr-1" />
                    Trending Service
                  </Badge>
                )}
              </div>
              <DialogDescription className="text-lg text-gray-600 leading-relaxed">
                {service.description}
              </DialogDescription>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>
        </DialogHeader>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
          {/* Service Details */}
          <div className="space-y-6">
            {/* Process Steps */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-brand-navy flex items-center">
                  <ArrowRight className="h-5 w-5 mr-2 text-brand-orange" />
                  Process Steps
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {processSteps.map((step, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="flex-shrink-0 w-8 h-8 bg-brand-orange text-white rounded-full flex items-center justify-center text-sm font-semibold">
                        {index + 1}
                      </div>
                      <span className="text-gray-700">{step}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Requirements */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-brand-navy flex items-center">
                  <CheckCircle className="h-5 w-5 mr-2 text-green-500" />
                  Required Documents
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {requirements.map((requirement, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{requirement}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact & Info */}
          <div className="space-y-6">
            {/* Service Info */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-brand-navy">
                  Service Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Category:</span>
                  <Badge variant="outline">{service.category}</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Sub-Category:</span>
                  <Badge variant="outline">{service.subCategory}</Badge>
                </div>
                {service.subSubCategory && (
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Type:</span>
                    <Badge variant="outline">{service.subSubCategory}</Badge>
                  </div>
                )}
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Processing Time:</span>
                  <span className="text-brand-orange font-semibold">7-15 Days</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Status:</span>
                  <Badge className="bg-green-500 text-white">Available</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Contact CTA */}
            <Card className="bg-[#273F4F] text-white">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-white">
                  Ready to Get Started?
                </CardTitle>
                <CardDescription className="text-white/90">
                  Contact our experts for personalized assistance and quick processing.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-2 text-white/90">
                  <Clock className="h-4 w-4" />
                  <span className="text-sm">Mon-Sat: 9:00 AM - 7:00 PM</span>
                </div>
                <div className="flex items-center space-x-2 text-white/90">
                  <Phone className="h-4 w-4" />
                  <span className="text-sm">+91 88661 14756</span>
                </div>
                <div className="flex items-center space-x-2 text-white/90">
                  <Mail className="h-4 w-4" />
                  <span className="text-sm">psquaregst@gmail.com</span>
                </div>
                
                <div className="pt-4 space-y-3">
                  <Button
                    size="lg"
                    className="w-full bg-white text-brand-navy hover:bg-gray-100 font-semibold"
                    onClick={() => {
                      onContactClick?.(service);
                      onClose();
                    }}
                  >
                    <Phone className="h-5 w-5 mr-2" />
                    Contact Now
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full border-white text-white hover:bg-white hover:text-brand-navy"
                    onClick={() => {
                      window.open('tel:+918866114756', '_self');
                    }}
                  >
                    Call Directly
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
