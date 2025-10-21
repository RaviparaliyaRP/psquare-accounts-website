import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight, Phone, Mail, CheckCircle } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative text-white overflow-hidden" style={{backgroundColor: '#273F4F'}}>
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-bg.jpeg"
          alt="Hero Background"
          fill
          className="object-cover opacity-5"
          priority
        />
      </div>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20 z-10"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-18 lg:py-30 z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-brand-orange/20 border border-brand-orange/30 rounded-full text-brand-orange text-sm font-medium">
              <CheckCircle className="h-4 w-4 mr-2" />
              Trusted by 1500+ Businesses
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Your Trusted Partner for{' '}
              <span className="text-brand-orange">Business</span>{' '}
              Licensing & Registration
            </h1>

            {/* Sub-headline */}
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              From Registration to Approval — We Handle It All.
            </p>

            {/* Description */}
            {/* <p className="text-lg text-white/80 leading-relaxed max-w-2xl">
              Expert business licensing and compliance services across India. 
              15+ years of experience helping entrepreneurs and businesses get registered faster 
              with transparent, end-to-end solutions.
            </p> */}

            {/* Key Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-brand-orange flex-shrink-0" />
                <span className="text-white/90">15+ Years Experience</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-brand-orange flex-shrink-0" />
                <span className="text-white/90">1500+ Happy Clients</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-brand-orange flex-shrink-0" />
                <span className="text-white/90">Fast & Reliable Service</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-brand-orange flex-shrink-0" />
                <span className="text-white/90">Expert Team Support</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-brand-orange hover:bg-brand-orange/90 text-white px-8 py-4 text-lg font-semibold group"
              >
                <Link href="/contact">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </Button>
              
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-[#273F4F] px-8 py-4 text-lg font-semibold"
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row gap-6 pt-4">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-brand-orange" />
                <div>
                  <div className="text-white font-semibold">+91 88661 14756</div>
                  <div className="text-white/70 text-sm">Call Now</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-brand-orange" />
                <div>
                  <div className="text-white font-semibold">psquaregst@gmail.com</div>
                  <div className="text-white/70 text-sm">Email Us</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Owner Photo */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Owner Photo Container */}
              <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                <div className="absolute inset-0 bg-white/10 rounded-full blur-3xl"></div>
                <div className="relative w-full h-full bg-white/5 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/20">
                  <div className="text-center">
                    {/* Owner Photo - Larger */}
                    <div className="mb-6 flex flex-col items-center">
                      <div className="w-32 h-32 lg:w-40 lg:h-40 rounded-full overflow-hidden border-4 border-white/30 mb-4">
                        <Image 
                          src="/psqaure-owner.png" 
                          alt="Mr. Umang Patel - Founder & CEO" 
                          width={160}
                          height={160}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="text-white text-xl lg:text-2xl font-bold">Mr. Umang Patel</div>
                      <div className="text-brand-orange text-lg lg:text-xl font-semibold">Founder & CEO</div>
                      <div className="text-white/70 text-sm lg:text-base mt-2">Psquare Accounts</div>
                      <div className="text-white/60 text-xs lg:text-sm">Established 2010</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-brand-orange rounded-full flex items-center justify-center animate-pulse">
                <CheckCircle className="h-8 w-8 text-white" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">15+</span>
              </div> */}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          className="w-full h-20 text-white"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </section>
  );
}
