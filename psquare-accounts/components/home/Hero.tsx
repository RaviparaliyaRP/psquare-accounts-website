import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight, Phone, Mail, CheckCircle } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative text-white overflow-hidden bg-brand-primary">
      <div className="container-responsive space-section">
        <div className="max-w-4xl mx-auto text-center">
          {/* Left Content */}
          <div className="space-y-6">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-brand-secondary/20 border border-brand-secondary/30 rounded-full text-brand-secondary text-sm font-medium">
              <CheckCircle className="h-4 w-4 mr-2" />
              Trusted by 1500+ Businesses
            </div>

            {/* Main Headline */}
            <h1 className="text-display text-white">
              Your Trusted Partner for{' '}
              <span className="text-brand-secondary">Business</span>{' '}
              Licensing & Registration
            </h1>

            {/* Sub-headline */}
            <p className="text-body-large text-white/90">
              From Registration to Approval — We Handle It All.
            </p>

            {/* Key Points - Simplified */}
            <div className="grid grid-cols-2 gap-3">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-brand-secondary flex-shrink-0" />
                <span className="text-white/90 text-sm">15+ Years</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-brand-secondary flex-shrink-0" />
                <span className="text-white/90 text-sm">1500+ Clients</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-brand-secondary flex-shrink-0" />
                <span className="text-white/90 text-sm">Fast Service</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-brand-secondary flex-shrink-0" />
                <span className="text-white/90 text-sm">Expert Team</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex-responsive">
              <Button
                asChild
                size="lg"
                className="btn-primary text-lg px-8 py-4"
              >
                <Link href="/contact">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              
              <Button
                asChild
                variant="outline"
                size="lg"
                className="btn-outline-white text-lg px-8 py-4"
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>

            {/* Contact Info - Simplified */}
            <div className="flex-responsive pt-2">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-brand-secondary" />
                <div>
                  <div className="text-white font-semibold text-sm">+91 88661 14756</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-brand-secondary" />
                <div>
                  <div className="text-white font-semibold text-sm">psquaregst@gmail.com</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
