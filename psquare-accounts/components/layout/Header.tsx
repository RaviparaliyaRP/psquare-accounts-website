'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { cn } from '@/lib/utils';
import MobileNav from './MobileNav';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Packages', href: '/packages' },
  { name: 'Contact', href: '/contact' },
  { name: 'Blog', href: '/blog' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-brand-navy text-white sticky top-0 z-50 shadow-lg">
      {/* Top Bar */}
      <div className="bg-brand-orange text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4" />
              <span>+91 88661 14756</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4" />
              <span>psquaregst@gmail.com</span>
            </div>
          </div>
          <div className="hidden md:block">
            <span className="text-sm">Mon-Sat: 9:00 AM - 7:00 PM</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3">
              <div className="relative">
                <Image
                  src="/psqaure-logo.png"
                  alt="Psquare Accounts Logo"
                  width={60}
                  height={60}
                  className="h-12 w-auto"
                  priority
                />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-white">Psquare</span>
                <span className="text-sm text-brand-orange font-medium">Accounts</span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-white hover:text-brand-orange transition-colors duration-200 font-medium"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button
              asChild
              variant="outline"
              className="border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-white"
            >
              <Link href="/contact">Get Started</Link>
            </Button>
            <Button
              asChild
              className="bg-brand-orange hover:bg-brand-orange/90 text-white"
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white hover:text-brand-orange"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <MobileNav isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </header>
  );
}
