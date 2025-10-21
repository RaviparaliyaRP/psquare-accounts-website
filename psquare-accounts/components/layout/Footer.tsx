import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, Clock, Instagram, Facebook, Linkedin, Twitter, Youtube } from 'lucide-react';

const navigation = {
  main: [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Packages', href: '/packages' },
    { name: 'Contact', href: '/contact' },
    { name: 'Blog', href: '/blog' },
  ],
  services: [
    { name: 'New Registration', href: '/services/new-registration' },
    { name: 'License Services', href: '/services/license-services' },
    { name: 'Compliance & Returns', href: '/services/compliance-returns' },
    { name: 'Renewal Services', href: '/services/renewal-services' },
    { name: 'Import/Export', href: '/services/import-export' },
    { name: 'Certification Services', href: '/services/certification-services' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Refund Policy', href: '/refund' },
    { name: 'Disclaimer', href: '/disclaimer' },
  ],
};

const socialLinks = [
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/psquare_accounts?igsh=dWd0aHBkZW9sYzNo',
    icon: Instagram,
    active: true,
  },
  {
    name: 'Facebook',
    href: '#',
    icon: Facebook,
    active: false,
  },
  {
    name: 'LinkedIn',
    href: '#',
    icon: Linkedin,
    active: false,
  },
  {
    name: 'Twitter',
    href: '#',
    icon: Twitter,
    active: false,
  },
  {
    name: 'YouTube',
    href: '#',
    icon: Youtube,
    active: false,
  },
];

export default function Footer() {
  return (
    <footer className="bg-brand-navy text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <Image
                src="/psqaure-logo.png"
                alt="Psquare Accounts Logo"
                width={40}
                height={40}
                className="h-10 w-auto"
              />
              <div className="flex flex-col">
                <span className="text-xl font-bold text-white">Psquare</span>
                <span className="text-sm text-brand-orange font-medium">Accounts</span>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              From Registration to Approval — We Handle It All. Your trusted partner for business licensing and compliance across India.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-brand-orange flex-shrink-0" />
                <span className="text-sm text-gray-300">
                  331, 3rd floor, Avadh pride, Opp metro pillar No 139, Near Nirant cross road, Vastral, Ahmedabad - 382418, Gujarat IND
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-brand-orange flex-shrink-0" />
                <div className="text-sm text-gray-300">
                  <div>+91 88661 14756</div>
                  <div>+91 74339 98866</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-brand-orange flex-shrink-0" />
                <span className="text-sm text-gray-300">psquaregst@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-brand-orange flex-shrink-0" />
                <div className="text-sm text-gray-300">
                  <div>Mon-Sat: 9:00 AM - 7:00 PM</div>
                  <div>Sunday: Closed</div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-300 hover:text-brand-orange transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Our Services</h3>
            <ul className="space-y-3">
              {navigation.services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-300 hover:text-brand-orange transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Social */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Legal</h3>
            <ul className="space-y-3 mb-8">
              {navigation.legal.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-300 hover:text-brand-orange transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Social Media */}
            <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              {socialLinks.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`p-2 rounded-lg transition-colors duration-200 ${
                      item.active
                        ? 'bg-brand-orange text-white hover:bg-brand-orange/90'
                        : 'bg-gray-700 text-gray-400 hover:bg-gray-600 hover:text-white'
                    }`}
                    aria-label={item.name}
                  >
                    <Icon className="h-5 w-5" />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            <div className="text-sm text-gray-400">
              © 2024 Psquare Accounts. All rights reserved. | Established 2010 | Made with ❤️ in India
            </div>
            <div className="text-sm text-blue-600 font-medium italic">
              Trust is the foundation of relationships
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
