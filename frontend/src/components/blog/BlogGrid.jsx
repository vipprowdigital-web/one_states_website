"use client";

import { useState } from "react";
import BlogReveal from "./BlogReveal";
import BlogCard from "./BlogCard";
import { CATEGORIES, POSTS } from "./BlogData";

export default function BlogGrid() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? POSTS
      : POSTS.filter((post) => post.category === activeCategory);

  return (
    <section className="mx-auto max-w-[1160px] px-6 pb-[100px] pt-5">
      <BlogReveal>
        <div className="mb-12 flex flex-wrap gap-2.5 border-b border-[#f0f0f0] pb-8">
          <p className="mr-3 shrink-0 text-[11px] font-bold uppercase tracking-[0.2em] text-[#aaa]">
            Filter:
          </p>

          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              className={`cat-pill rounded-full border-[1.5px] px-[18px] py-2 text-xs font-bold ${
                activeCategory === cat ? "active" : ""
              }`}
              onClick={() => setActiveCategory(cat)}
              style={{
                borderColor: "#e0e0e0",
                background: "transparent",
                color: "#555",
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </BlogReveal>

      <BlogReveal delay={60}>
        <div className="mb-10 flex flex-wrap items-baseline justify-between gap-3">
          <h2 className="m-0 text-2xl font-extrabold text-[#232627]">
            {activeCategory === "All" ? "All Articles" : activeCategory}
            <span className="ml-3 text-base font-medium text-[#aaa]">
              ({filtered.length})
            </span>
          </h2>
        </div>
      </BlogReveal>

      <div className="blg-grid">
        {filtered.map((post, index) => (
          <BlogCard key={post.id} post={post} index={index} />
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="py-20 text-center text-[#aaa]">
          <p className="text-3xl">✦</p>
          <p className="mt-4 text-base font-medium">
            No articles in this category yet.
          </p>
        </div>
      )}
    </section>
  );
}