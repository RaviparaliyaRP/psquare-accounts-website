import { Metadata } from 'next';
import Hero from '@/components/home/Hero';
import ServicesOverview from '@/components/home/ServicesOverview';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import Testimonials from '@/components/home/Testimonials';
import CTASections from '@/components/home/CTASections';

export const metadata: Metadata = {
  title: 'Psquare Accounts - Your Trusted Partner for Business Licensing & Registration',
  description: 'From Registration to Approval — We Handle It All. Expert business licensing, compliance, and registration services across India. 15+ years of experience, 1500+ happy clients.',
  keywords: 'business registration, company registration, GST registration, FSSAI license, trade license, compliance, licensing services, India, Ahmedabad',
  openGraph: {
    title: 'Psquare Accounts - Your Trusted Partner for Business Licensing & Registration',
    description: 'From Registration to Approval — We Handle It All. Expert business licensing, compliance, and registration services across India.',
    url: 'https://psquareaccounts.com',
    siteName: 'Psquare Accounts',
    images: [
      {
        url: '/psqaure-logo.png',
        width: 1200,
        height: 630,
        alt: 'Psquare Accounts Logo',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <ServicesOverview />
      <WhyChooseUs />
      <Testimonials />
      <CTASections />
    </main>
  );
}
