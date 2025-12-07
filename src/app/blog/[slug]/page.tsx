import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import rehypeHighlight from "rehype-highlight";
import remarkGfm from "remark-gfm";
import "./code-highlight.css";
import TopNavbar from "@/components/nav/TopNavBar";
import { ImageWithPreview } from "@/components/ui/ImageWithPreview";
import { getPostBySlug, getAllPostSlugs } from "@/lib/posts";
import { formatDate } from "@/utils/format";

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
      <div className="absolute inset-0 h-[50vh] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      <article className="container relative z-10 mx-auto max-w-5xl px-4 py-32">
        <header className="mb-12">
          {post.categories && (
            <div className="mb-4 flex gap-2">
              {post.categories.map((cat) => (
                <span
                  key={cat}
                  className="rounded-full border border-primary/20 bg-primary/10 px-2 py-1 text-xs font-semibold text-primary"
                >
                  {cat}
                </span>
              ))}
            </div>
          )}
          <h1 className="mb-6 text-4xl font-bold text-foreground md:text-5xl">
            {post.title}
          </h1>

          <div className="flex items-center text-muted-foreground">
            {post.author && (
              <div className="mr-6 flex items-center">
                {post.author.picture && (
                  <Image
                    src={post.author.picture}
                    alt={post.author.name}
                    width={40}
                    height={40}
                    className="mr-3 rounded-full"
                  />
                )}
                <span>{post.author.name}</span>
              </div>
            )}
            <time>{formatDate(new Date(post.date).getTime())}</time>
          </div>
        </header>

        {post.coverImage && (
          <ImageWithPreview
            src={post.coverImage}
            alt={post.title}
            containerClassName="relative mb-12 aspect-video w-full overflow-hidden rounded-xl md:aspect-auto md:h-[400px]"
            imageClassName="h-full w-full object-cover"
          />
        )}

        <div className="prose prose-lg max-w-none dark:prose-invert">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw, rehypeHighlight]}
          >
            {post.content}
          </ReactMarkdown>
        </div>
      </article>
    </main>
  );
}
