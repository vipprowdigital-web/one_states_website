"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

function getCategoryName(category) {
  if (!category) return "Blog";
  if (typeof category === "string") return category;
  return category.name || category.title || "Blog";
}

function formatDate(date) {
  if (!date) return "";
  return new Date(date).toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

export default function BlogDetailPage() {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!slug) return;

    async function fetchBlog() {
      try {
        // ✅ FIX 1: correct endpoint — /api/v1/blog/:slug (not /api/v1/blog)
        const res = await fetch(`${API_BASE}/api/v1/blog/${slug}`, {
          cache: "no-store",
        });

        if (!res.ok) throw new Error(`HTTP ${res.status}`);

        const data = await res.json();

        // ✅ FIX 2: backend returns { success: true, data: blog }
        const blogData = data.data || data.blog || null;

        if (!blogData || !blogData.title) throw new Error("Empty blog data");

        setBlog(blogData);
      } catch (err) {
        console.error("Blog fetch error:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchBlog();
  }, [slug]);

  /* ── Loading ── */
  if (loading) {
    return (
      <main className="min-h-screen bg-white px-6 py-20 text-center font-[Raleway]">
        <div style={{
          display: "inline-block", width: 40, height: 40,
          border: "3px solid #f0f0f0",
          borderTop: "3px solid #ee7124",
          borderRadius: "50%",
          animation: "spin .8s linear infinite",
          marginBottom: 16,
        }} />
        <style>{`@keyframes spin{to{transform:rotate(360deg)}}`}</style>
        <p className="font-semibold text-[#232627]/60">Loading article...</p>
      </main>
    );
  }

  /* ── Not Found ── */
  if (error || !blog) {
    return (
      <main className="min-h-screen bg-white px-6 py-20 text-center font-[Raleway]">
        <p style={{ fontSize: 48, marginBottom: 16 }}>✦</p>
        <h1 className="text-3xl font-extrabold text-[#232627] mb-4">
          Article not found
        </h1>
        <p className="text-[#888] mb-8">
          The article you're looking for doesn't exist or has been removed.
        </p>
        <Link
          href="/blog"
          className="inline-block rounded-full bg-[#ee7124] px-7 py-3 text-sm font-bold text-white"
        >
          ← Back to Blog
        </Link>
      </main>
    );
  }

  /* ── Detail Page ── */
  return (
    <main className="min-h-screen bg-white font-[Raleway] text-[#232627]">

      {/* ── Hero / Header ── */}
      <section className="border-b border-[#ebebeb] px-6 py-16 md:py-24"
        style={{ background: "#fff" }}>
        <div className="mx-auto max-w-4xl">

          <Link
            href="/blog"
            className="mb-8 inline-flex items-center gap-2 text-sm font-bold tracking-[0.08em] text-[#ee7124]"
            style={{ textDecoration: "none" }}
          >
            ← Back to Blog
          </Link>

          {/* category */}
          {blog.category && (
            <p className="mt-6 mb-4 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.28em]"
              style={{ color: "#ee7124", display: "flex" }}>
              <span style={{ display: "block", width: 24, height: 1, background: "#ee7124" }} />
              {getCategoryName(blog.category)}
            </p>
          )}

          {/* title */}
          <h1 style={{
            fontSize: "clamp(2rem, 5vw, 3.6rem)",
            fontWeight: 900,
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            color: "#232627",
            margin: "0 0 20px",
          }}>
            {blog.title}
          </h1>

          {/* short description */}
          {blog.short_description && (
            <p style={{
              fontSize: "1.1rem", lineHeight: 1.8,
              color: "rgba(35,38,39,.6)",
              maxWidth: 680, marginBottom: 28,
            }}>
              {blog.short_description}
            </p>
          )}

          {/* meta row */}
          <div style={{ display: "flex", alignItems: "center", gap: 20, flexWrap: "wrap" }}>
            <span style={{
              display: "inline-flex", alignItems: "center", gap: 10,
            }}>
              <span style={{
                width: 34, height: 34, borderRadius: "50%",
                background: "#ee7124",
                display: "inline-flex", alignItems: "center", justifyContent: "center",
                color: "#fff", fontWeight: 800, fontSize: 12,
                flexShrink: 0,
              }}>
                {blog.createdBy?.name
                  ? blog.createdBy.name.split(" ").map(n => n[0]).join("").toUpperCase()
                  : "✦"}
              </span>
              {blog.createdBy?.name && (
                <span style={{ fontSize: 13, fontWeight: 700, color: "#232627" }}>
                  {blog.createdBy.name}
                </span>
              )}
            </span>

            <span style={{ fontSize: 13, color: "#aaa" }}>
              {formatDate(blog.createdAt)}
            </span>

            {blog.read_time && (
              <>
                <span style={{ color: "#ddd" }}>·</span>
                <span style={{ fontSize: 13, color: "#aaa" }}>
                  {blog.read_time} read
                </span>
              </>
            )}
          </div>
        </div>
      </section>

      {/* ── Thumbnail ── */}
      {blog.thumbnail && (
        <section className="px-6 pt-12 md:pt-16">
          <div className="mx-auto max-w-4xl">
            <div style={{
              position: "relative",
              aspectRatio: "16/8",
              overflow: "hidden",
              borderRadius: 20,
              background: "#f2f2f2",
            }}>
              <img
                src={blog.thumbnail}
                alt={blog.title}
                style={{
                  width: "100%", height: "100%",
                  objectFit: "cover", display: "block",
                }}
                onError={(e) => { e.currentTarget.style.display = "none"; }}
              />
              {/* orange top accent */}
              <div style={{
                position: "absolute", top: 0, left: 0, right: 0,
                height: 4, background: "#ee7124",
              }} />
            </div>
          </div>
        </section>
      )}

      {/* ── Body Content ── */}
      <section className="px-6 py-12 md:py-16">
        <div className="mx-auto max-w-4xl">

          {/* ✅ Renders HTML from rich-text editor (description field) */}
          {blog.description ? (
            <article
              className="prose prose-lg max-w-none
                prose-p:font-medium prose-p:leading-8 prose-p:text-[#232627]/75
                prose-headings:font-extrabold prose-headings:text-[#232627]
                prose-a:text-[#ee7124] prose-a:no-underline hover:prose-a:underline
                prose-strong:text-[#232627] prose-li:text-[#232627]/75
                prose-img:rounded-xl prose-blockquote:border-l-[#ee7124]"
              dangerouslySetInnerHTML={{ __html: blog.description }}
            />
          ) : (
            <p style={{ color: "#aaa", fontStyle: "italic" }}>
              No content available for this article.
            </p>
          )}

          {/* ── Gallery (if any) ── */}
          {blog.gallery_images?.length > 0 && (
            <div style={{ marginTop: 56 }}>
              <p style={{
                fontSize: 11, letterSpacing: "0.25em", textTransform: "uppercase",
                color: "#ee7124", fontWeight: 700, marginBottom: 20,
              }}>
                ✦ Gallery
              </p>
              <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
                gap: 16,
              }}>
                {blog.gallery_images.map((img, i) => (
                  <div key={i} style={{
                    borderRadius: 12, overflow: "hidden",
                    aspectRatio: "4/3", background: "#f5f5f5",
                  }}>
                    <img
                      src={img}
                      alt={`Gallery ${i + 1}`}
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                      onError={(e) => { e.currentTarget.style.display = "none"; }}
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ── Back link ── */}
          <div style={{ marginTop: 64, paddingTop: 40, borderTop: "1px solid #f0f0f0" }}>
            <Link
              href="/blog"
              style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                padding: "13px 32px", borderRadius: 50,
                background: "#232627", color: "#fff",
                fontWeight: 700, fontSize: 13, letterSpacing: "0.07em",
                textDecoration: "none",
                fontFamily: "Raleway, sans-serif",
              }}
            >
              ← Back to all articles
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
