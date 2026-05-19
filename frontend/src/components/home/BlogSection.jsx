"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Calendar, User, ArrowRight } from "lucide-react";
import { GridPattern } from "../common/Patterns";
import Image from "next/image";
import Link from "next/link";

const RECENT_POSTS = [
  {
    title:
      "The Future of Destination Resorts: Post-Pandemic Scaling Strategies",
    excerpt:
      "An in-depth analysis of high-yield hospitality asset management and the rise of boutique luxury partnerships in emerging markets.",
    image:
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=600&q=80",
    date: "May 14, 2026",
    author: "Hospitality Advisory Team",
    slug: "future-of-destination-resorts",
  },
  {
    title: "Navigating Zoning & Municipal Compliance in Commercial Retail",
    excerpt:
      "How strategic consulting mitigates legal friction and shortens timelines during the initial pre-construction approval cycle.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80",
    date: "April 28, 2026",
    author: "Market Strategy Group",
    slug: "navigating-zoning-compliance",
  },
  {
    title: "The Role of Corporate DNA in Long-Term Value-Driven Alliances",
    excerpt:
      "Applying fast-moving consumer goods (FMCG) market execution methodologies to optimize scale across industrial logistics parks.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80",
    date: "April 15, 2026",
    author: "Leadership Council",
    slug: "corporate-dna-value-alliances",
  },
];

export default function BlogSection() {
  return (
    <section className="relative bg-white py-20 md:py-28 overflow-hidden z-10 border-t border-primary/10">
      {/* Background visual texture */}
      <GridPattern opacity={0.02} />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* ─── SECTION HEADER WITH 'VIEW ALL' CTA ─── */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-0.5 bg-secondary" />
              <span className="text-secondary text-xs font-black tracking-[0.3em] uppercase">
                Knowledge & Insights
              </span>
            </div>
            <h2 className="text-primary font-black text-3xl md:text-5xl tracking-tight">
              Latest From Our <span className="text-secondary">Blog</span>
            </h2>
          </div>

          {/* Header CTA: Redirects to the central Blog Page */}
          <motion.div
            whileHover={{ x: 4 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <a
              href="/blog"
              className="inline-flex items-center gap-2 text-primary hover:text-secondary font-black text-sm tracking-wider uppercase transition-colors duration-300 group"
            >
              <span>View All Articles</span>
              <ArrowRight
                size={16}
                className="text-secondary transform group-hover:translate-x-1 transition-transform"
              />
            </a>
          </motion.div>
        </div>

        {/* ─── BLOG CARDS GRID ─── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {RECENT_POSTS.map((post, index) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="flex flex-col h-full bg-white rounded-2xl border border-primary/20 overflow-hidden group shadow-sm hover:shadow-xl hover:border-secondary/30 transition-all duration-300"
            >
              {/* Card Image Wrapper Window */}
              <div className="relative aspect-16/10 overflow-hidden bg-primary/5">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={1000}
                  height={500}
                  className="w-full h-full object-cover grayscale-20 contrast-105 group-hover:scale-105 group-hover:grayscale-0 transition-transform duration-500 ease-out"
                />
                {/* Floating Category Badge over the card image overlay */}
                <div className="absolute top-4 left-4 bg-primary/90 backdrop-blur-md text-white text-[10px] font-black tracking-widest uppercase px-3 py-1 rounded-md border border-white/10">
                  Insights
                </div>
              </div>

              {/* Card Content Details */}
              <div className="p-6 flex flex-col grow">
                {/* Meta Details Row */}
                <div className="flex items-center gap-4 text-primary/40 text-xs mb-4 font-medium">
                  <div className="flex items-center gap-1.5">
                    <Calendar size={13} className="text-secondary" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <User size={13} />
                    <span>{post.author}</span>
                  </div>
                </div>

                {/* Article Title Header */}
                <h3 className="text-primary font-bold text-xl tracking-tight mb-3 line-clamp-2 group-hover:text-secondary transition-colors duration-200">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h3>

                {/* Article Snippet Excerpt */}
                <p className="text-primary/60 text-sm leading-relaxed mb-6 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Card-Level Individual CTA Link */}
                <div className="mt-auto pt-4 border-t border-primary/5">
                  <a
                    href={`/blog/${post.slug}`} // Direct path routing to target individual sub-post page
                    className="inline-flex items-center gap-2 text-primary font-bold text-sm tracking-wide group-hover:text-secondary transition-colors duration-200"
                  >
                    <span>Read Full Article</span>
                    <ArrowUpRight
                      size={16}
                      className="text-primary/40 group-hover:text-secondary transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                    />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
