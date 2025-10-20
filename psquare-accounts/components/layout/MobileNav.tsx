'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { X, Menu, ChevronDown, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { 
    name: 'Services', 
    href: '/services',
    submenu: [
      { name: 'New Registration', href: '/services/new-registration' },
      { name: 'License Services', href: '/services/license-services' },
      { name: 'Compliance & Returns', href: '/services/compliance-returns' },
      { name: 'Renewal Services', href: '/services/renewal-services' },
      { name: 'Import/Export', href: '/services/import-export' },
      { name: 'Certification Services', href: '/services/certification-services' },
      { name: 'Intellectual Property', href: '/services/intellectual-property' },
      { name: 'Tax Services', href: '/services/tax-services' },
      { name: 'Tender & Government', href: '/services/tender-government' },
      { name: 'Legal Services', href: '/services/legal-services' },
    ]
  },
  { name: 'Packages', href: '/packages' },
  { name: 'Contact', href: '/contact' },
  { name: 'Blog', href: '/blog' },
];

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileNav({ isOpen, onClose }: MobileNavProps) {
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  // Close mobile menu when clicking outside or on escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  const toggleSubmenu = (itemName: string) => {
    setOpenSubmenu(openSubmenu === itemName ? null : itemName);
  };

  const handleLinkClick = () => {
    onClose();
    setOpenSubmenu(null);
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
        onClick={onClose}
      />
      
      {/* Mobile Menu */}
      <div className="fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-brand-navy shadow-xl lg:hidden">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-brand-orange/20">
            <h2 className="text-lg font-semibold text-white">Menu</h2>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="text-white hover:text-brand-orange"
            >
              <X className="h-6 w-6" />
            </Button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto py-4">
            <div className="px-4 space-y-2">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.submenu ? (
                    <div>
                      <button
                        onClick={() => toggleSubmenu(item.name)}
                        className="flex items-center justify-between w-full px-3 py-3 text-left text-white hover:text-brand-orange transition-colors duration-200 font-medium"
                      >
                        <span>{item.name}</span>
                        {openSubmenu === item.name ? (
                          <ChevronDown className="h-5 w-5" />
                        ) : (
                          <ChevronRight className="h-5 w-5" />
                        )}
                      </button>
                      
                      {openSubmenu === item.name && (
                        <div className="ml-4 space-y-1 border-l border-brand-orange/20 pl-4">
                          {item.submenu.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              onClick={handleLinkClick}
                              className="block px-3 py-2 text-gray-300 hover:text-brand-orange transition-colors duration-200"
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={handleLinkClick}
                      className="block px-3 py-3 text-white hover:text-brand-orange transition-colors duration-200 font-medium"
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </nav>

          {/* CTA Buttons */}
          <div className="p-4 border-t border-brand-orange/20 space-y-3">
            <Button
              asChild
              variant="outline"
              className="w-full border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-white"
              onClick={handleLinkClick}
            >
              <Link href="/contact">Get Started</Link>
            </Button>
            <Button
              asChild
              className="w-full bg-brand-orange hover:bg-brand-orange/90 text-white"
              onClick={handleLinkClick}
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>

          {/* Contact Info */}
          <div className="p-4 border-t border-brand-orange/20 bg-brand-navy/50">
            <div className="text-sm text-gray-300 space-y-2">
              <div className="flex items-center space-x-2">
                <span className="text-brand-orange">📞</span>
                <span>+91 88661 14756</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-brand-orange">✉️</span>
                <span>psquaregst@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-brand-orange">🕒</span>
                <span>Mon-Sat: 9 AM - 7 PM</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
