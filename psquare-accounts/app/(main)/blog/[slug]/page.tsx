import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, User, Share2, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { blogPosts, blogCategories } from '@/data/blog';

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = blogPosts.find(p => p.slug === params.slug);
  
  if (!post) {
    return {
      title: 'Post Not Found - Psquare Accounts Blog',
    };
  }

  return {
    title: `${post.title} - Psquare Accounts Blog`,
    description: post.excerpt,
    keywords: post.tags.join(', '),
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.publishedAt,
      authors: [post.author],
    },
  };
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find(p => p.slug === params.slug);
  const category = blogCategories.find(cat => cat.slug === post?.category);
  const relatedPosts = blogPosts
    .filter(p => p.id !== post?.id && p.category === post?.category)
    .slice(0, 3);

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Post Not Found</h1>
          <p className="text-xl text-gray-600 mb-8">The blog post you&apos;re looking for doesn&apos;t exist.</p>
          <Link href="/blog">
            <Button className="bg-brand-navy hover:bg-brand-navy/90 text-white">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Blog
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-white py-8 border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-6">
            <Link href="/blog">
              <Button variant="outline" size="sm">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Blog
              </Button>
            </Link>
          </div>
          
          <div className="mb-6">
            <div className="flex items-center space-x-4 mb-4">
              <span className="px-3 py-1 bg-brand-orange text-white rounded-full text-sm font-semibold">
                {category?.name}
              </span>
              <div className="flex items-center text-sm text-gray-500">
                <Calendar className="h-4 w-4 mr-1" />
                {new Date(post.publishedAt).toLocaleDateString()}
              </div>
              <div className="flex items-center text-sm text-gray-500">
                <Clock className="h-4 w-4 mr-1" />
                {post.readTime} min read
              </div>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {post.title}
            </h1>
            
            <p className="text-xl text-gray-600 mb-6">
              {post.excerpt}
            </p>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center text-gray-600">
                <User className="h-5 w-5 mr-2" />
                <span className="font-medium">{post.author}</span>
              </div>
              
              <Button variant="outline" size="sm">
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3">
              <Card className="border-0 shadow-none">
                <CardContent className="p-0">
                  <div className="prose prose-lg max-w-none">
                    <div 
                      className="whitespace-pre-wrap text-gray-700 leading-relaxed"
                      dangerouslySetInnerHTML={{ 
                        __html: post.content
                          .replace(/\n/g, '<br>')
                          .replace(/# (.*?)\n/g, '<h1 class="text-3xl font-bold text-gray-900 mb-4 mt-8">$1</h1>')
                          .replace(/## (.*?)\n/g, '<h2 class="text-2xl font-bold text-gray-900 mb-3 mt-6">$1</h2>')
                          .replace(/### (.*?)\n/g, '<h3 class="text-xl font-bold text-gray-900 mb-2 mt-4">$1</h3>')
                          .replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-gray-900">$1</strong>')
                          .replace(/\*(.*?)\*/g, '<em class="italic">$1</em>')
                          .replace(/^- (.*?)\n/gm, '<li class="ml-4 mb-1">$1</li>')
                          .replace(/(<li.*?<\/li>)/g, '<ul class="list-disc list-inside mb-4">$1</ul>')
                      }}
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Tags */}
              <div className="mt-8 pt-8 border-t">
                <div className="flex items-center mb-4">
                  <Tag className="h-5 w-5 mr-2 text-gray-600" />
                  <span className="font-medium text-gray-900">Tags:</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 cursor-pointer"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-8 space-y-6">
                {/* Author Info */}
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">About the Author</h3>
                    <div className="flex items-center mb-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-brand-navy to-brand-orange rounded-full flex items-center justify-center">
                        <User className="h-6 w-6 text-white" />
                      </div>
                      <div className="ml-3">
                        <div className="font-semibold text-gray-900">{post.author}</div>
                        <div className="text-sm text-gray-600">Business Expert</div>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600">
                      Expert in business registration, compliance, and growth strategies with over 15 years of experience.
                    </p>
                  </CardContent>
                </Card>

                {/* Related Posts */}
                {relatedPosts.length > 0 && (
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-lg font-bold text-gray-900 mb-4">Related Articles</h3>
                      <div className="space-y-4">
                        {relatedPosts.map((relatedPost) => (
                          <div key={relatedPost.id} className="border-b pb-4 last:border-b-0">
                            <Link href={`/blog/${relatedPost.slug}`}>
                              <h4 className="font-semibold text-gray-900 hover:text-brand-navy mb-2 line-clamp-2">
                                {relatedPost.title}
                              </h4>
                            </Link>
                            <div className="flex items-center text-xs text-gray-500">
                              <Calendar className="h-3 w-3 mr-1" />
                              {new Date(relatedPost.publishedAt).toLocaleDateString()}
                              <Clock className="h-3 w-3 ml-2 mr-1" />
                              {relatedPost.readTime} min
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )}

                {/* CTA */}
                <Card className="bg-gradient-to-r from-brand-navy to-brand-orange text-white">
                  <CardContent className="p-6 text-center">
                    <h3 className="text-lg font-bold mb-3">Need Help?</h3>
                    <p className="text-sm opacity-90 mb-4">
                      Get expert assistance with your business registration and compliance needs.
                    </p>
                    <Link href="/contact">
                      <Button className="bg-white text-brand-navy hover:bg-gray-100 font-bold w-full">
                        Contact Us
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-12 bg-white border-t">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <Link href="/blog">
              <Button variant="outline">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to All Articles
              </Button>
            </Link>
            
            <Link href="/contact">
              <Button className="bg-brand-navy hover:bg-brand-navy/90 text-white">
                Get Expert Help
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
