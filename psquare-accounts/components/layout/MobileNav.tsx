'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { X, ChevronDown, ChevronRight } from 'lucide-react';

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
        className="fixed inset-0 bg-black bg-opacity-50 z-[120] lg:hidden"
        onClick={onClose}
      />
      
      {/* Mobile Menu */}
      <div className="fixed inset-y-0 right-0 z-[130] w-full max-w-sm bg-brand-primary shadow-xl lg:hidden">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-white/20">
            <h2 className="text-lg font-semibold text-white">Menu</h2>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="text-white hover:text-brand-secondary"
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
                        className="flex items-center justify-between w-full px-3 py-3 text-left text-white hover:text-brand-secondary transition-colors duration-200 font-medium"
                      >
                        <span>{item.name}</span>
                        {openSubmenu === item.name ? (
                          <ChevronDown className="h-5 w-5" />
                        ) : (
                          <ChevronRight className="h-5 w-5" />
                        )}
                      </button>
                      
                      {openSubmenu === item.name && (
                        <div className="ml-4 space-y-1 border-l border-white/20 pl-4">
                          {item.submenu.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              onClick={handleLinkClick}
                              className="block px-3 py-2 text-white/80 hover:text-brand-secondary transition-colors duration-200"
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
                      className="block px-3 py-3 text-white hover:text-brand-secondary transition-colors duration-200 font-medium"
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </nav>

          {/* CTA Buttons */}
          <div className="p-4 border-t border-white/20 space-y-3">
            <Button
              asChild
              className="w-full btn-primary"
              onClick={handleLinkClick}
            >
              <Link href="/contact">Get Started</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="w-full btn-outline-white"
              onClick={handleLinkClick}
            >
              <Link href="tel:+918866114756">Call Now</Link>
            </Button>
          </div>

          {/* Contact Info */}
          <div className="p-4 border-t border-white/20 bg-brand-primary/50">
            <div className="text-sm text-white/80 space-y-2">
              <div className="flex items-center space-x-2">
                <span className="text-brand-secondary">📞</span>
                <span>+91 88661 14756</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-brand-secondary">✉️</span>
                <span>psquaregst@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-brand-secondary">🕒</span>
                <span>Mon-Sat: 9 AM - 7 PM</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
