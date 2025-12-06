import React, { Suspense } from 'react';
import TopNavbar from '@/components/nav/TopNavBar';
import Loading from '@/components/loaders/Loading';
import BlogCard from '@/components/cards/BlogCard';
import { getSortedPosts } from '@/lib/posts';

// Server Component
export default function BlogIndex() {
  const posts = getSortedPosts();
  console.log(`Rendering BlogIndex with ${posts.length} posts`);

  return (
    <main>
      <TopNavbar />
      {/* Added pt-32 to account for fixed navbar, z-0 to ensure it's behind navbar if needed, but navbar is z-50 */}
      <div className="min-h-screen bg-background bg-cover bg-center bg-no-repeat pt-32 pb-20">
        <div className="container mx-auto px-6 relative z-10">
            <h1 className="text-4xl font-bold text-foreground mb-12 text-center">Orchestra Blog</h1>
            
            {posts.length === 0 && (
                <div className="text-center text-muted-foreground">
                    <p>No posts found.</p>
                </div>
            )}

          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
            <Suspense fallback={<Loading />}>
              {posts.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </Suspense>
          </div>
        </div>
      </div>
    </main>
  );
}
