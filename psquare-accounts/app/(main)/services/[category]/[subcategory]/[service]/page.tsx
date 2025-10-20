import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Calendar, CheckCircle, FileText, FolderOpen, ListChecks, ShieldCheck, Star, ArrowRight } from 'lucide-react';
import { services as categories } from '@/data/services';

interface ServicePageProps {
  params: {
    category: string;
    subcategory: string;
    service: string;
  };
}

function findService(params: ServicePageProps['params']) {
  const cat = categories.find(c => c.id === params.category);
  if (!cat) return null;
  const sub = cat.subCategories.find(s => s.id === params.subcategory);
  if (!sub) return null;
  const svc = sub.services.find(s => s.id === params.service);
  if (!svc) return null;
  return { cat, sub, svc };
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const match = findService(params);
  if (!match) {
    return { title: 'Service Not Found' };
  }
  const { svc } = match;
  const title = `${svc.name} Services in India | Fast & Hassle-Free`;
  const description = `Get ${svc.name} done online with expert support. Quick, reliable, and compliant service for businesses in India.`;
  return {
    title,
    description,
    openGraph: { title, description },
  };
}

export async function generateStaticParams() {
  const params: Array<{ category: string; subcategory: string; service: string }> = [];
  for (const cat of categories) {
    for (const sub of cat.subCategories) {
      for (const svc of sub.services) {
        params.push({ category: cat.id, subcategory: sub.id, service: svc.id });
      }
    }
  }
  return params;
}

export default function ServiceDetailPage({ params }: ServicePageProps) {
  const match = findService(params);
  if (!match) return notFound();
  const { cat, sub, svc } = match;

  const contactHref = `/contact?service=${encodeURIComponent(svc.name)}`;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-navy via-brand-navy to-brand-orange text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="mb-6 text-sm text-white/80">
            <Link href="/services" className="hover:text-white">Services</Link>
            <span className="mx-2">/</span>
            <Link href={`/services/${cat.id}`} className="hover:text-white">{cat.name}</Link>
            <span className="mx-2">/</span>
            <Link href={`/services/${cat.id}/${sub.id}`} className="hover:text-white">{sub.name}</Link>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-3xl md:text-5xl font-bold mb-4">{svc.name}</h1>
              <p className="text-lg md:text-xl text-white/90 max-w-2xl mb-6">{svc.description}</p>
              <div className="flex flex-wrap gap-3 mb-8">
                <span className="inline-flex items-center px-3 py-1 bg-white/10 rounded-full text-sm"><Star className="h-4 w-4 mr-1" /> Trusted Experts</span>
                <span className="inline-flex items-center px-3 py-1 bg-white/10 rounded-full text-sm"><ShieldCheck className="h-4 w-4 mr-1" /> 100% Compliant</span>
                <span className="inline-flex items-center px-3 py-1 bg-white/10 rounded-full text-sm"><Calendar className="h-4 w-4 mr-1" /> Quick Turnaround</span>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href={contactHref} className="px-6 py-3 bg-white text-brand-navy font-bold rounded-lg hover:bg-gray-100">Get Started</Link>
                <a href="#contact" className="px-6 py-3 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10">Talk to Expert</a>
              </div>
            </div>
            <div className="relative">{/* Decorative graphic */}
              <div className="aspect-[4/3] rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20" />
            </div>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">What is {svc.name}?</h2>
                <p className="text-gray-700 leading-relaxed">{svc.name} is a key compliance/service for businesses in India. We manage the complete process end-to-end so you can stay focused on growth.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Why it matters</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex"><CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5" /> Builds trust with customers and suppliers</li>
                  <li className="flex"><CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5" /> Enables expansion and avoids penalties</li>
                  <li className="flex"><CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5" /> Makes your business legally recognized</li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Our Process</h3>
                <ol className="space-y-2 text-gray-700">
                  <li className="flex"><ListChecks className="h-5 w-5 text-brand-navy mr-2 mt-0.5" /> Free consultation and scope</li>
                  <li className="flex"><ListChecks className="h-5 w-5 text-brand-navy mr-2 mt-0.5" /> Secure document collection</li>
                  <li className="flex"><ListChecks className="h-5 w-5 text-brand-navy mr-2 mt-0.5" /> Application filing and tracking</li>
                  <li className="flex"><ListChecks className="h-5 w-5 text-brand-navy mr-2 mt-0.5" /> Approval and post-approval support</li>
                </ol>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Documents Required</h3>
                <div className="text-gray-700">
                  <p className="mb-2">Exact documents vary by case. Commonly required:</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>PAN, Aadhaar, photographs</li>
                    <li>Business address proof</li>
                    <li>Entity proof (Incorporation/Deed), as applicable</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Why Choose Us</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex"><ShieldCheck className="h-5 w-5 text-brand-navy mr-2 mt-0.5" /> 10+ Years Experience</li>
                  <li className="flex"><ShieldCheck className="h-5 w-5 text-brand-navy mr-2 mt-0.5" /> 1500+ Happy Clients</li>
                  <li className="flex"><ShieldCheck className="h-5 w-5 text-brand-navy mr-2 mt-0.5" /> Dedicated Expert Support</li>
                </ul>
                <Link href={contactHref} className="inline-flex items-center mt-4 px-4 py-2 bg-brand-orange text-white rounded-md hover:bg-brand-orange/90">
                  Get Started <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-3">FAQs</h3>
                <div className="text-gray-700 space-y-3">
                  <div>
                    <p className="font-semibold">How long does it take?</p>
                    <p>Typically 3–5 working days depending on verification.</p>
                  </div>
                  <div>
                    <p className="font-semibold">Do you help after approval?</p>
                    <p>Yes, we can manage filings and ongoing compliance.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact attach (existing page via anchor) */}
      <section id="contact" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Ready to start {svc.name}?</h3>
          <p className="text-gray-600 mb-6">We&apos;ll prefill your inquiry for faster assistance.</p>
          <Link href={contactHref} className="inline-flex items-center px-6 py-3 bg-brand-navy text-white rounded-lg hover:bg-brand-navy/90">
            Go to Contact Form
          </Link>
        </div>
      </section>
    </div>
  );
}


