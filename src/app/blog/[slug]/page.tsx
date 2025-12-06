import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';
import TopNavbar from '@/components/nav/TopNavBar';
import { getPostBySlug, getAllPostSlugs } from '@/lib/posts';
import { formatDate } from '@/utils/format';

interface Props {
  params: {
    slug: string;
  };
}

// Generate static params for all posts
export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

export default function BlogPost({ params }: Props) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-background">
      <TopNavbar />
      <article className="container mx-auto px-4 py-20 max-w-3xl">
        <Link href="/blog" className="text-primary hover:text-primary/80 mb-8 inline-block">
          ← Back to Blog
        </Link>
        
        <header className="mb-12">
          {post.categories && (
             <div className="flex gap-2 mb-4">
               {post.categories.map(cat => (
                 <span key={cat} className="text-xs font-semibold px-2 py-1 bg-primary/10 text-primary border border-primary/20 rounded-full">
                   {cat}
                 </span>
               ))}
             </div>
          )}
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">{post.title}</h1>
          
          <div className="flex items-center text-muted-foreground">
            {post.author && (
                <div className="flex items-center mr-6">
                    {post.author.picture && (
                        <Image 
                            src={post.author.picture} 
                            alt={post.author.name} 
                            width={40} 
                            height={40} 
                            className="rounded-full mr-3"
                        />
                    )}
                    <span>{post.author.name}</span>
                </div>
            )}
            <time>{formatDate(new Date(post.date).getTime())}</time>
          </div>
        </header>

        {post.coverImage && (
          <div className="relative w-full h-[400px] mb-12 rounded-xl overflow-hidden">
            <img 
              src={post.coverImage} 
              alt={post.title}
              className="object-cover w-full h-full"
            />
          </div>
        )}

        <div className="prose dark:prose-invert prose-lg max-w-none">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw]}
          >
            {post.content}
          </ReactMarkdown>
        </div>
      </article>
    </main>
  );
}

