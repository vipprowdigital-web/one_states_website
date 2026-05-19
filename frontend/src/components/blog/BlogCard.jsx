"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import BlogReveal from "./BlogReveal";

export default function BlogCard({ post, index }) {
  const [hovered, setHovered] = useState(false);

  return (
    <BlogReveal delay={index * 90} y={36}>
      <Link
        href={`/blog/${post.id}`}
        className="block h-full text-inherit no-underline"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <article
          className="flex h-full flex-col overflow-hidden rounded-[20px] border-[1.5px] bg-white transition-all duration-300"
          style={{
            borderColor: hovered ? "rgba(238,113,36,.35)" : "#e8e8e8",
            boxShadow: hovered
              ? "0 28px 60px rgba(0,0,0,.1)"
              : "0 4px 16px rgba(0,0,0,.05)",
            transform: hovered ? "translateY(-8px)" : "translateY(0)",
          }}
        >
          <div className="relative aspect-video overflow-hidden">
            <div
              className="absolute inset-0 transition-transform duration-700"
              style={{
                transform: hovered ? "scale(1.08)" : "scale(1)",
              }}
            >
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
                sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 380px"
              />
            </div>

            <div
              className="absolute inset-0 bg-[#ee7124]/15 transition-opacity duration-300"
              style={{ opacity: hovered ? 1 : 0 }}
            />

            <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.15em] text-[#ee7124] backdrop-blur">
              {post.category}
            </span>
          </div>

          <div className="flex flex-1 flex-col p-7">
            <h3
              className="mb-3 text-lg font-extrabold leading-snug transition-colors duration-300"
              style={{ color: hovered ? "#ee7124" : "#232627" }}
            >
              {post.title}
            </h3>

            <p className="line-clamp-3 text-sm font-medium leading-7 text-[#666]">
              {post.excerpt}
            </p>

            <div className="mt-auto flex items-center justify-between border-t border-[#f0f0f0] pt-5">
              <div className="flex items-center gap-2.5">
                <div className="flex h-[30px] w-[30px] shrink-0 items-center justify-center rounded-full bg-[#ee7124] text-[10px] font-extrabold text-white">
                  {post.author
                    .split(" ")
                    .map((name) => name[0])
                    .join("")}
                </div>

                <div>
                  <p className="m-0 text-xs font-bold text-[#232627]">
                    {post.author}
                  </p>
                  <p className="mt-0.5 text-[11px] font-medium text-[#aaa]">
                    {post.readTime}
                  </p>
                </div>
              </div>

              <span className="text-[11px] font-medium text-[#aaa]">
                {post.date}
              </span>
            </div>
          </div>
        </article>
      </Link>
    </BlogReveal>
  );
}