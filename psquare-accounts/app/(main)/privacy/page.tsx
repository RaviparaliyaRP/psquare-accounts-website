import { Metadata } from 'next';
import { Shield, Lock, Eye, Users, FileText, Phone, Mail, MapPin, Clock } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'Privacy Policy - Psquare Accounts | Data Protection & Privacy',
  description: 'Learn how Psquare Accounts protects your personal information and data. Our comprehensive privacy policy covers data collection, usage, and security measures.',
  keywords: 'privacy policy, data protection, personal information, security, Psquare Accounts',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-brand-navy via-brand-navy to-brand-orange text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto">
              Your privacy and data security are our top priorities
            </p>
            <div className="flex justify-center items-center space-x-8 text-white/80">
              <div className="text-center">
                <div className="text-2xl font-bold">GDPR</div>
                <div className="text-sm">Compliant</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">SSL</div>
                <div className="text-sm">Encrypted</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">Secure</div>
                <div className="text-sm">Storage</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Privacy Policy Content */}
      <div className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            {/* Effective Date */}
            <div className="mb-8 p-4 bg-blue-50 rounded-lg border-l-4 border-brand-navy">
              <div className="flex items-center space-x-2 mb-2">
                <FileText className="h-5 w-5 text-brand-navy" />
                <span className="font-semibold text-brand-navy">Policy Information</span>
              </div>
              <p className="text-gray-700">
                <strong>Effective Date:</strong> [Insert Date]<br />
                <strong>Last Updated:</strong> [Insert Date]
              </p>
            </div>

            {/* Introduction */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Shield className="h-6 w-6 text-brand-navy mr-2" />
                1. Introduction
              </h2>
              <div className="prose prose-gray max-w-none">
                <p className="text-gray-700 mb-4">
                  Welcome to <strong>Psqaure Accounts</strong>. We are committed to protecting your privacy and ensuring the security of your personal information.
                </p>
                <p className="text-gray-700 mb-4">
                  This Privacy Policy explains how we collect, use, store, and share your data when you visit our website — <strong>https://psqaure-accounts-sz3a.vercel.app</strong> — or use our services, including:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                  <li>Company Registration (Private Limited, LLP, OPC, Partnership Firm)</li>
                  <li>GST Registration and Filing</li>
                  <li>MSME Registration</li>
                  <li>Trademark and Intellectual Property Registration</li>
                  <li>Accounting and Bookkeeping Services</li>
                  <li>Tax Filing and Compliance Support</li>
                  <li>Business Advisory Services</li>
                </ul>
                <p className="text-gray-700 mb-4">
                  By accessing or using our Website, you agree to the terms outlined in this Privacy Policy.
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Compliance:</h3>
                  <p className="text-gray-700">This Privacy Policy follows:</p>
                  <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
                    <li>The Information Technology Act, 2000 and SPDI Rules, 2011</li>
                    <li>General Data Protection Regulation (GDPR) for EU users</li>
                    <li>Other applicable data protection laws</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Information We Collect */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Eye className="h-6 w-6 text-brand-navy mr-2" />
                2. Information We Collect
              </h2>
              
              <div className="space-y-6">
                <Card className="border border-gray-200">
                  <CardHeader>
                    <CardTitle className="text-lg text-gray-900">2.1 Personal Information</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-3">We may collect information such as:</p>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li>Full Name, Email Address, Phone Number</li>
                      <li>Business Name, PAN, Aadhaar, GSTIN</li>
                      <li>Business & Registered Office Address</li>
                      <li>Bank Account Details (for payments)</li>
                      <li>Director / Partner Details</li>
                      <li>Business Documents (MOA, AOA, Partnership Deeds, etc.)</li>
                      <li>Financial Information (Balance Sheets, Tax Returns)</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border border-gray-200">
                  <CardHeader>
                    <CardTitle className="text-lg text-gray-900">2.2 Non-Personal Information</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-3">Automatically collected data includes:</p>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li>IP Address, Browser Type, Device Information</li>
                      <li>Pages Visited, Time Spent, Referring Source</li>
                      <li>Cookies & Tracking Technologies</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border border-gray-200">
                  <CardHeader>
                    <CardTitle className="text-lg text-gray-900">2.3 Third-Party Information</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-3">We may receive data from:</p>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li>Government Portals (MCA, GST, Trademark)</li>
                      <li>Payment Gateways</li>
                      <li>Authorized Business Partners</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* How We Use Information */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Users className="h-6 w-6 text-brand-navy mr-2" />
                3. How We Use Your Information
              </h2>
              <Card className="border border-gray-200">
                <CardContent className="p-6">
                  <p className="text-gray-700 mb-3">We use your information to:</p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Process company/GST/trademark applications</li>
                    <li>Prepare and file statutory documents</li>
                    <li>Provide accounting and compliance services</li>
                    <li>Respond to queries and provide support</li>
                    <li>Send updates, reminders, and notifications</li>
                    <li>Ensure legal and regulatory compliance</li>
                    <li>Improve our website and services</li>
                  </ul>
                </CardContent>
              </Card>
            </section>

            {/* Data Security */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Lock className="h-6 w-6 text-brand-navy mr-2" />
                5. Data Security
              </h2>
              <div className="space-y-4">
                <Card className="border border-gray-200">
                  <CardHeader>
                    <CardTitle className="text-lg text-gray-900">5.1 Technical Measures</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li>SSL/TLS Encryption for secure communication</li>
                      <li>Firewalls & Intrusion Detection Systems</li>
                      <li>Secure Cloud Data Storage</li>
                      <li>Regular Security Audits</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border border-gray-200">
                  <CardHeader>
                    <CardTitle className="text-lg text-gray-900">5.2 Organizational Measures</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li>Restricted Access for authorized staff only</li>
                      <li>Employee Training on confidentiality</li>
                      <li>NDAs for all employees & contractors</li>
                    </ul>
                  </CardContent>
                </Card>

                <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
                  <p className="text-gray-700">
                    <strong>5.3 Limitation:</strong> No system is 100% secure. We notify you promptly if a breach occurs.
                  </p>
                </div>
              </div>
            </section>

            {/* Cookies Policy */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Cookies Policy</h2>
              <Card className="border border-gray-200">
                <CardContent className="p-6">
                  <p className="text-gray-700 mb-4">We use cookies to improve your browsing experience.</p>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-300">
                      <thead>
                        <tr className="bg-gray-50">
                          <th className="border border-gray-300 p-3 text-left font-semibold">Type</th>
                          <th className="border border-gray-300 p-3 text-left font-semibold">Purpose</th>
                          <th className="border border-gray-300 p-3 text-left font-semibold">Duration</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 p-3">Essential</td>
                          <td className="border border-gray-300 p-3">Required for website functionality</td>
                          <td className="border border-gray-300 p-3">Session</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-3">Performance</td>
                          <td className="border border-gray-300 p-3">Analyze website traffic</td>
                          <td className="border border-gray-300 p-3">24 months</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-3">Functional</td>
                          <td className="border border-gray-300 p-3">Remember preferences</td>
                          <td className="border border-gray-300 p-3">12 months</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-3">Marketing</td>
                          <td className="border border-gray-300 p-3">Deliver ads, track conversions</td>
                          <td className="border border-gray-300 p-3">12 months</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="text-gray-700 mt-4">
                    You can manage cookies via browser settings (Chrome, Firefox, Safari).
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* Contact Information */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Contact Information</h2>
              <Card className="border-2 border-brand-navy">
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-4">Psqaure Accounts</h3>
                      <div className="space-y-3">
                        <div className="flex items-center space-x-3">
                          <MapPin className="h-5 w-5 text-brand-navy" />
                          <div>
                            <div className="text-gray-700">📍 Registered Address:</div>
                            <div className="text-gray-600">[Address, City, State, PIN]</div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Mail className="h-5 w-5 text-brand-navy" />
                          <div>
                            <div className="text-gray-700">📧 Email:</div>
                            <div className="text-gray-600">psquaregst@gmail.com</div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Phone className="h-5 w-5 text-brand-navy" />
                          <div>
                            <div className="text-gray-700">📞 Phone:</div>
                            <div className="text-gray-600">+91 88661 14756</div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Clock className="h-5 w-5 text-brand-navy" />
                          <div>
                            <div className="text-gray-700">Business Hours:</div>
                            <div className="text-gray-600">Mon – Sat: 9:00 AM – 7:00 PM</div>
                            <div className="text-gray-600">Sunday: Closed</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">For questions or data requests:</h4>
                      <p className="text-gray-700 text-sm">
                        Contact us using any of the information provided above. We&apos;re here to help with any privacy-related concerns or data requests.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Consent Acknowledgment */}
            <div className="bg-gradient-to-r from-brand-navy to-brand-orange text-white p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Consent Acknowledgment</h3>
              <p className="text-white/90 mb-4">
                By using our Website and Services, you agree to this Privacy Policy. If you disagree, please discontinue using our services.
              </p>
              <p className="text-white/80 text-sm">
                © 2025 Psqaure Accounts. All Rights Reserved.
              </p>
              <p className="text-white/70 text-xs mt-2">
                Disclaimer: This Privacy Policy should be reviewed by a legal professional to ensure compliance with applicable laws.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
