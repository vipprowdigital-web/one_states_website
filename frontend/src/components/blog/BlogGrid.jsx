
"use client";

import { useEffect, useMemo, useState } from "react";
import BlogCard from "./BlogCard";
import FeaturedPost from "./FeaturedPost";

const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

function getCategoryName(category) {
  if (!category) return "Blog";
  if (typeof category === "string") return category;
  return category.name || category.title || "Blog";
}

export default function BlogGrid() {
  const [blogs, setBlogs] = useState([]);
  const [activeCategory, setActiveCategory] = useState("All");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchBlogs() {
      try {
        const res = await fetch(`${API_BASE}/api/v1/blog`, {
          cache: "no-store",
        });

        const data = await res.json();

        const list = Array.isArray(data)
          ? data
          : data.blogs || data.data || [];

        const activeBlogs = list.filter((blog) => blog.isActive !== false);

        setBlogs(activeBlogs);
      } catch (error) {
        console.log("Blog fetch error:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchBlogs();
  }, []);

  const categories = useMemo(() => {
    const names = blogs.map((blog) => getCategoryName(blog.category));
    return ["All", ...new Set(names)];
  }, [blogs]);

  const featuredBlog = blogs.find((blog) => blog.isFeature) || blogs[0];

  const filtered =
    activeCategory === "All"
      ? blogs
      : blogs.filter(
          (blog) => getCategoryName(blog.category) === activeCategory
        );

  const normalBlogs = featuredBlog
    ? filtered.filter((blog) => blog._id !== featuredBlog._id)
    : filtered;

  if (loading) {
    return (
      <section className="px-6 py-20 text-center">
        <p className="font-semibold text-[#232627]/60">Loading blogs...</p>
      </section>
    );
  }

  if (blogs.length === 0) {
    return (
      <section className="px-6 py-20 text-center">
        <h2 className="text-3xl font-extrabold text-[#232627]">
          No blogs available
        </h2>

        <p className="mt-4 text-base font-medium text-[#232627]/60">
          Blogs added from admin will appear here.
        </p>
      </section>
    );
  }

  return (
    <>
      {featuredBlog && activeCategory === "All" && (
        <section className="mx-auto max-w-[1160px] px-6 py-16 md:py-20">
          <p className="mb-7 text-xs font-bold uppercase tracking-[0.25em] text-[#ee7124]">
            Featured Article
          </p>

          <FeaturedPost blog={featuredBlog} />
        </section>
      )}

      <section className="mx-auto max-w-[1160px] px-6 pb-[100px] pt-8">
        <div className="mb-12 flex flex-wrap gap-2.5 border-b border-[#f0f0f0] pb-8">
          <p className="mr-3 shrink-0 text-[11px] font-bold uppercase tracking-[0.2em] text-[#aaa]">
            Filter:
          </p>

          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`rounded-full border-[1.5px] px-[18px] py-2 text-xs font-bold transition-all duration-200 ${
                activeCategory === cat
                  ? "border-[#232627] bg-[#232627] text-white"
                  : "border-[#e0e0e0] bg-transparent text-[#555] hover:border-[#ee7124] hover:text-[#ee7124]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="mb-10">
          <h2 className="text-2xl font-extrabold text-[#232627]">
            {activeCategory === "All" ? "All Articles" : activeCategory}
            <span className="ml-3 text-base font-medium text-[#aaa]">
              ({normalBlogs.length})
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
          {normalBlogs.map((blog, index) => (
            <BlogCard key={blog._id} blog={blog} index={index} />
          ))}
        </div>
      </section>
    </>
  );
}

// "use client";

// import { useState } from "react";
// import BlogReveal from "./BlogReveal";
// import BlogCard from "./BlogCard";
// import { CATEGORIES, POSTS } from "./BlogData";

// export default function BlogGrid() {
//   const [activeCategory, setActiveCategory] = useState("All");

//   const filtered =
//     activeCategory === "All"
//       ? POSTS
//       : POSTS.filter((post) => post.category === activeCategory);

//   return (
//     <section className="mx-auto max-w-[1160px] px-6 pb-[100px] pt-5">
//       <BlogReveal>
//         <div className="mb-12 flex flex-wrap gap-2.5 border-b border-[#f0f0f0] pb-8">
//           <p className="mr-3 shrink-0 text-[11px] font-bold uppercase tracking-[0.2em] text-[#aaa]">
//             Filter:
//           </p>

//           {CATEGORIES.map((cat) => (
//             <button
//               key={cat}
//               className={`cat-pill rounded-full border-[1.5px] px-[18px] py-2 text-xs font-bold ${
//                 activeCategory === cat ? "active" : ""
//               }`}
//               onClick={() => setActiveCategory(cat)}
//               style={{
//                 borderColor: "#e0e0e0",
//                 background: "transparent",
//                 color: "#555",
//               }}
//             >
//               {cat}
//             </button>
//           ))}
//         </div>
//       </BlogReveal>

//       <BlogReveal delay={60}>
//         <div className="mb-10 flex flex-wrap items-baseline justify-between gap-3">
//           <h2 className="m-0 text-2xl font-extrabold text-[#232627]">
//             {activeCategory === "All" ? "All Articles" : activeCategory}
//             <span className="ml-3 text-base font-medium text-[#aaa]">
//               ({filtered.length})
//             </span>
//           </h2>
//         </div>
//       </BlogReveal>

//       <div className="blg-grid">
//         {filtered.map((post, index) => (
//           <BlogCard key={post.id} post={post} index={index} />
//         ))}
//       </div>

//       {filtered.length === 0 && (
//         <div className="py-20 text-center text-[#aaa]">
//           <p className="text-3xl">✦</p>
//           <p className="mt-4 text-base font-medium">
//             No articles in this category yet.
//           </p>
//         </div>
//       )}
//     </section>
//   );
// }