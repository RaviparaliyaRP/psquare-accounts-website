import { Metadata } from 'next';
import { FileText, Shield, Users, CreditCard, Lock, AlertTriangle, Phone, Mail, MapPin, Clock } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms of Service - Psquare Accounts | Legal Terms & Conditions',
  description: 'Read our Terms of Service for Psquare Accounts. Learn about our service terms, user responsibilities, and legal conditions for using our platform.',
  keywords: 'terms of service, legal terms, conditions, Psquare Accounts, user agreement',
};

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-[#273F4F] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Terms of Service
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto">
              Legal terms and conditions for using our services
            </p>
            <div className="flex justify-center items-center space-x-8 text-white/80">
              <div className="text-center">
                <div className="text-2xl font-bold">Legal</div>
                <div className="text-sm">Compliant</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">Secure</div>
                <div className="text-sm">Platform</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">Transparent</div>
                <div className="text-sm">Terms</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Last Updated */}
        <div className="text-center mb-12">
          <p className="text-lg text-gray-600">
            <strong>Last Updated:</strong> 20 Oct 2025
          </p>
        </div>

        {/* Introduction */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center text-2xl text-[#273F4F]">
              <FileText className="h-6 w-6 mr-3" />
              Welcome to Psquare Accounts
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-700 leading-relaxed">
              These Terms of Service ("Terms") govern your use of our website psquareaccounts.in and the services we provide related to company registration, GST registration, tax filings, and other corporate documentation support.
            </p>
            <p className="text-gray-700 leading-relaxed">
              By accessing or using our website, you agree to comply with these Terms.
            </p>
          </CardContent>
        </Card>

        {/* Terms Sections */}
        <div className="space-y-8">
          {/* 1. Eligibility */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-xl text-[#273F4F]">
                <Users className="h-5 w-5 mr-3" />
                1. Eligibility
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed">
                By using this website, you confirm that you are at least 18 years old and legally capable of entering into binding contracts under Indian law.
              </p>
            </CardContent>
          </Card>

          {/* 2. Services Offered */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-xl text-[#273F4F]">
                <Shield className="h-5 w-5 mr-3" />
                2. Services Offered
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed mb-4">
                Psquare Accounts provides documentation and consultancy services including but not limited to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Company Incorporation and ROC Filings</li>
                <li>GST Registration & Returns</li>
                <li>MSME / Udyam Registration</li>
                <li>Legal Document Drafting</li>
                <li>Trademark and Compliance Assistance</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                These services are subject to availability, and the scope may change at any time.
              </p>
            </CardContent>
          </Card>

          {/* 3. User Responsibilities */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-xl text-[#273F4F]">
                <Users className="h-5 w-5 mr-3" />
                3. User Responsibilities
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>You agree to provide accurate, current, and complete information.</li>
                <li>You are responsible for maintaining the confidentiality of your login credentials.</li>
                <li>You agree not to use the website for unlawful purposes or to harm others.</li>
                <li>Any misuse, fraudulent submission, or false information may lead to account suspension.</li>
              </ul>
            </CardContent>
          </Card>

          {/* 4. Payments & Refunds */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-xl text-[#273F4F]">
                <CreditCard className="h-5 w-5 mr-3" />
                4. Payments & Refunds
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>All payments for services must be made in advance through authorized payment methods available on our site.</li>
                <li>Fees once paid are non-refundable, except in cases of proven service failure from our side.</li>
                <li>We reserve the right to change our pricing at any time.</li>
              </ul>
            </CardContent>
          </Card>

          {/* 5. Intellectual Property */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-xl text-[#273F4F]">
                <Lock className="h-5 w-5 mr-3" />
                5. Intellectual Property
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>All materials, text, graphics, logos, and designs available on this site are the intellectual property of Psquare Accounts.</li>
                <li>You may not copy, modify, or reuse any content without prior written permission.</li>
              </ul>
            </CardContent>
          </Card>

          {/* 6. Limitation of Liability */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-xl text-[#273F4F]">
                <AlertTriangle className="h-5 w-5 mr-3" />
                6. Limitation of Liability
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed mb-4">
                We strive to ensure accuracy and timely delivery; however, Psquare Accounts shall not be liable for:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Any indirect, incidental, or consequential losses arising from your use of our website.</li>
                <li>Delays caused by government authorities, technical issues, or third-party systems.</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                Our total liability shall not exceed the amount paid by you for the specific service.
              </p>
            </CardContent>
          </Card>

          {/* 7. Privacy */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-xl text-[#273F4F]">
                <Lock className="h-5 w-5 mr-3" />
                7. Privacy
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed">
                Your data is collected and used in accordance with our <Link href="/privacy" className="text-[#273F4F] hover:underline font-medium">Privacy Policy</Link> available on our website. By using our services, you consent to such processing.
              </p>
            </CardContent>
          </Card>

          {/* 8. Termination */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-xl text-[#273F4F]">
                <AlertTriangle className="h-5 w-5 mr-3" />
                8. Termination
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>We reserve the right to suspend or terminate your access at any time if you violate these Terms or applicable laws.</li>
                <li>You may also discontinue use of our services at any time by notifying us.</li>
              </ul>
            </CardContent>
          </Card>

          {/* 9. Changes to Terms */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-xl text-[#273F4F]">
                <FileText className="h-5 w-5 mr-3" />
                9. Changes to Terms
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>We may modify or update these Terms from time to time.</li>
                <li>Any changes will be posted on this page with the updated date.</li>
                <li>Continued use of the site after changes means you accept the updated Terms.</li>
              </ul>
            </CardContent>
          </Card>

          {/* 10. Governing Law & Jurisdiction */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-xl text-[#273F4F]">
                <Shield className="h-5 w-5 mr-3" />
                10. Governing Law & Jurisdiction
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>These Terms are governed by and construed under the laws of India.</li>
                <li>Any disputes shall be subject to the exclusive jurisdiction of courts located in Ahmedabad Gujarat.</li>
              </ul>
            </CardContent>
          </Card>

          {/* 11. Contact Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-xl text-[#273F4F]">
                <Phone className="h-5 w-5 mr-3" />
                11. Contact Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you have any questions about these Terms, please contact us at:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <FileText className="h-5 w-5 text-[#273F4F]" />
                    <span className="font-semibold text-gray-800">Psquare Accounts</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-[#273F4F]" />
                    <span className="text-gray-700">psquaregst@gmail.com</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-[#273F4F] mt-1" />
                    <span className="text-gray-700">
                      331, 3rd floor, Avadh pride, Opp metro pillar No 139, Near Nirant cross road, Vastral, Ahmedabad - 382418
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-[#273F4F]" />
                    <div className="text-gray-700">
                      <div>+91 88661 14756</div>
                      <div>+91 74339 98866</div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
