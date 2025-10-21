import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight, Phone, Mail, CheckCircle } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative text-white overflow-hidden bg-brand-primary">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-bg"
          alt="Hero Background"
          fill
          className="object-cover opacity-20"
          priority
        />
      </div>
      
      <div className="container-responsive space-section relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <div className="space-y-8">
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

            {/* Key Points - Centered */}
            <div className="flex flex-wrap justify-center gap-6">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-brand-secondary flex-shrink-0" />
                <span className="text-white/90 text-base font-medium">15+ Years of Experience</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-brand-secondary flex-shrink-0" />
                <span className="text-white/90 text-base font-medium">1500+ Clients</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-brand-secondary flex-shrink-0" />
                <span className="text-white/90 text-base font-medium">Fast Service</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-brand-secondary flex-shrink-0" />
                <span className="text-white/90 text-base font-medium">Expert Team</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-brand-secondary hover:bg-brand-secondary/90 text-white px-10 py-5 text-xl font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Link href="/contact">
                  Get Started
                  <ArrowRight className="ml-3 h-6 w-6" />
                </Link>
              </Button>
              
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-white text-brand-primary bg-white hover:bg-brand-primary hover:text-white px-10 py-5 text-xl font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>

            {/* Contact Info - Centered */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-4">
              <div className="flex items-center justify-center space-x-3">
                <Phone className="h-5 w-5 text-brand-secondary" />
                <div>
                  <div className="text-white font-bold text-lg">+91 88661 14756</div>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <Mail className="h-5 w-5 text-brand-secondary" />
                <div>
                  <div className="text-white font-bold text-lg">psquaregst@gmail.com</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
