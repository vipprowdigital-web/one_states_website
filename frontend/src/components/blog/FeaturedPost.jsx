"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import BlogReveal from "./BlogReveal";
import { CATEGORY_COLORS } from "./BlogData";

export default function FeaturedPost({ post }) {
  const [hovered, setHovered] = useState(false);

  return (
    <BlogReveal>
      <Link
        href={`/blog/${post.id}`}
        className="block text-inherit no-underline"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div
          className="feat-grid grid overflow-hidden rounded-3xl border-[1.5px] bg-white transition-all duration-500"
          style={{
            borderColor: hovered ? "rgba(238,113,36,.35)" : "#e8e8e8",
            boxShadow: hovered
              ? "0 40px 80px rgba(0,0,0,.12)"
              : "0 8px 32px rgba(0,0,0,.06)",
            transform: hovered ? "translateY(-6px)" : "translateY(0)",
          }}
        >
          <div className="relative min-h-[320px] overflow-hidden md:min-h-[420px]">
            <div
              className="absolute inset-0 transition-transform duration-700"
              style={{
                transform: hovered ? "scale(1.06)" : "scale(1)",
              }}
            >
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
                sizes="(max-width:768px) 100vw, 600px"
              />
            </div>

            <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent_60%,rgba(255,255,255,.15)_100%)]" />

            <div className="absolute left-6 top-6 rounded-full bg-[#ee7124] px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-white">
              ✦ Featured
            </div>
          </div>

          <div className="blog-featured-content flex flex-col justify-center p-8 md:p-12">
            <span
              className="mb-5 inline-block self-start rounded-full px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.12em]"
              style={CATEGORY_COLORS[post.category]}
            >
              {post.category}
            </span>

            <h2
              className="mb-[18px] text-2xl font-extrabold leading-tight transition-colors duration-300 md:text-3xl"
              style={{ color: hovered ? "#ee7124" : "#232627" }}
            >
              {post.title}
            </h2>

            <div className="mb-[18px] h-0.5 w-10 rounded bg-[#ee7124]" />

            <p className="mb-8 text-[0.95rem] font-medium leading-8 text-[#555]">
              {post.excerpt}
            </p>

            <div className="flex items-center gap-4">
              <div className="flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-full bg-[#ee7124] text-[13px] font-extrabold text-white">
                {post.author
                  .split(" ")
                  .map((name) => name[0])
                  .join("")}
              </div>

              <div>
                <p className="m-0 text-sm font-bold text-[#232627]">
                  {post.author}
                </p>
                <p className="mt-1 text-xs font-medium text-[#888]">
                  {post.date} · {post.readTime}
                </p>
              </div>

              <div
                className="ml-auto flex h-10 w-10 items-center justify-center rounded-full border-[1.5px] border-[#e8e8e8] text-base font-bold text-[#ee7124] transition-transform duration-300"
                style={{
                  transform: hovered ? "translate(3px,-3px)" : "translate(0,0)",
                }}
              >
                →
              </div>
            </div>
          </div>
        </div>
      </Link>
    </BlogReveal>
  );
}