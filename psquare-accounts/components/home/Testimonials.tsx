'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { Testimonial } from '@/types';

// Mock testimonials data (in real app, this would come from API)
const testimonials: Testimonial[] = [
  {
    id: 'testimonial-1',
    name: 'Ritika Verma',
    designation: 'Founder',
    company: 'FinEdge Group',
    content: 'Psqaure Accounts truly stands by their words. They handled our company registration, GST setup, and compliance without a single delay. The process was so smooth that we didn\'t have to follow up even once. Exceptional professionalism!',
    rating: 5,
  },
  {
    id: 'testimonial-2',
    name: 'Rahul Singh',
    designation: 'CEO',
    company: 'UrbanMark Realtors',
    content: 'One of the most trustworthy and transparent service providers we\'ve worked with. Their team explained every process clearly and helped us avoid unnecessary costs. You can genuinely feel the honesty in their approach.',
    rating: 5,
  },
  {
    id: 'testimonial-3',
    name: 'Nikhil Bhatia',
    designation: 'Director',
    company: 'Alpha Build Systems',
    content: 'We\'ve been associated with Psqaure Accounts for over three years now. Their consistency and commitment to quality are remarkable. Every compliance and accounting update is handled on time, without stress.',
    rating: 5,
  },
  {
    id: 'testimonial-4',
    name: 'Shruti Jain',
    designation: 'Co-founder',
    company: 'NovaEdge Technologies',
    content: 'As a startup founder, I was nervous about legal formalities, but Psqaure Accounts made everything effortless. They guided me step-by-step and completed my company registration within days. Highly recommended for new entrepreneurs!',
    rating: 5,
  },
  {
    id: 'testimonial-5',
    name: 'Amit Khanna',
    designation: 'Managing Director',
    company: 'BlueSky Solutions Pvt. Ltd.',
    content: 'The team at Psqaure Accounts doesn\'t just work for you; they work with you. Their personal attention and clarity at every step made us feel like we were in safe hands. True professionals with a human touch.',
    rating: 5,
  },
  {
    id: 'testimonial-6',
    name: 'Neha Kapoor',
    designation: 'CFO',
    company: 'TruMark India',
    content: 'What I liked most is their transparency. No hidden fees, no surprises — just clear communication and dependable service. I rarely give reviews, but Psqaure Accounts deserves it.',
    rating: 5,
  },
  {
    id: 'testimonial-7',
    name: 'Deepak Tiwari',
    designation: 'Founder',
    company: 'ProLink Ventures',
    content: 'Our company had multiple compliance issues before we came across Psqaure Accounts. Within weeks, their team streamlined everything and restored our peace of mind. The kind of reliability every business needs.',
    rating: 5,
  },
  {
    id: 'testimonial-8',
    name: 'Simran Arora',
    designation: 'Partner',
    company: 'GlobeLine Associates',
    content: 'I\'ve worked with big consulting firms before, but none matched the personal care and accountability Psqaure Accounts provides. They treat every client like a long-term partner, not just another project.',
    rating: 5,
  },
  {
    id: 'testimonial-9',
    name: 'Manish Patel',
    designation: 'COO',
    company: 'BrightAxis Group',
    content: 'Their support team is available literally anytime you need them. Whether it\'s a compliance doubt or a tax query, they respond immediately with clarity. That kind of service is rare these days.',
    rating: 5,
  },
  {
    id: 'testimonial-10',
    name: 'Priya Deshmukh',
    designation: 'Managing Partner',
    company: 'Vertex Builders',
    content: 'Psqaure Accounts helped us restructure our business legally and financially with complete precision. Their advice saved us both time and money. Truly a company you can depend on for the long run.',
    rating: 5,
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
    setIsAutoPlaying(false);
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-5 w-5 ${
          i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-6">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Don&apos;t just take our word for it. Here&apos;s what our satisfied clients have to say 
            about their experience with Psquare Accounts.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative">
          {/* Main Testimonial */}
          <Card className="max-w-4xl mx-auto shadow-lg border-0 bg-white">
            <CardContent className="p-8 md:p-12">
              <div className="text-center">
                {/* Quote Icon */}
                <div className="mb-6">
                  <Quote className="h-12 w-12 text-brand-orange mx-auto opacity-20" />
                </div>

                {/* Rating */}
                <div className="flex justify-center mb-6">
                  {renderStars(testimonials[currentIndex].rating)}
                </div>

                {/* Content */}
                <blockquote className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8 italic">
                  &ldquo;{testimonials[currentIndex].content}&rdquo;
                </blockquote>

                {/* Author */}
                <div className="border-t pt-6">
                  <div className="font-semibold text-brand-navy text-lg">
                    {testimonials[currentIndex].name}
                  </div>
                  <div className="text-gray-600">
                    {testimonials[currentIndex].designation}, {testimonials[currentIndex].company}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="sm"
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg hover:bg-gray-50"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          
          <Button
            variant="outline"
            size="sm"
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg hover:bg-gray-50"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                index === currentIndex ? 'bg-brand-orange' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-brand-navy mb-2">1500+</div>
              <div className="text-gray-600">Happy Clients</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-brand-navy mb-2">4.9/5</div>
              <div className="text-gray-600">Average Rating</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-brand-navy mb-2">98%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-lg text-gray-600 mb-6">
            Ready to join our satisfied clients?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-brand-orange hover:bg-brand-orange/90 text-white px-8 py-4 text-lg font-semibold"
            >
              <a href="/contact">Get Started Today</a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-2 border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white px-8 py-4 text-lg font-semibold"
            >
              <a href="tel:+918866114756">Call Now</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
