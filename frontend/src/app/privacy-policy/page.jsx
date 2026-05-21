"use client";

import { useEffect, useState } from "react";

export default function PrivacyPolicyPage() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPolicy() {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/policy/public`,
          {
            cache: "no-store",
          },
        );

        const json = await res.json();
        const policies = json.data || [];

        const found = policies.find(
          (p) =>
            p.slug === "privacy-policy" ||
            p.title?.toLowerCase().includes("privacy"),
        );

        if (!found) throw new Error("Privacy policy not found");

        const detailRes = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/policy/public/${found._id}`,
          { cache: "no-store" },
        );

        const detail = await detailRes.json();
        setData(detail.data || detail);
      } catch (err) {
        console.error("Privacy policy fetch error:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchPolicy();
  }, []);

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-white font-[Raleway]">
        <style>{`@keyframes spin { to { transform: rotate(360deg) } }`}</style>
        <div
          className="h-9 w-9 rounded-full border-[3px] border-[#f0f0f0] border-t-[#ee7124]"
          style={{ animation: "spin .8s linear infinite" }}
        />
      </main>
    );
  }

  if (!data) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-white font-[Raleway]">
        <p className="text-sm font-medium text-[#888]">
          Privacy Policy not available.
        </p>
      </main>
    );
  }

  // Detect whether the content is HTML or plain text
  const rawContent = data.content || data.description || "";
  const isHtml = /<[a-z][\s\S]*>/i.test(rawContent);

  return (
    <main className="min-h-screen bg-white font-[Raleway] text-[#232627]">
      {/* Header */}
      <section className="relative overflow-hidden bg-white px-6 pb-16 pt-20 text-left md:text-center">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(238,113,36,.06) 1px,transparent 1px),linear-gradient(90deg,rgba(238,113,36,.06) 1px,transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative mx-auto max-w-5xl pt-10 md:pt-20">
          <p className="mb-4 inline-flex items-center gap-3 text-[11px] font-extrabold uppercase tracking-[0.3em] text-[#ee7124]">
            <span className="block h-px w-6 bg-[#ee7124]" />
            Legal
            <span className="block h-px w-6 bg-[#ee7124]" />
          </p>

          <h1 className="mb-4 text-4xl font-extrabold leading-tight tracking-[-0.02em] text-[#232627] md:text-6xl">
            {data.title || "Privacy Policy"}
          </h1>

          {data.updatedAt && (
            <p className="text-sm font-semibold text-[#232627]/45">
              Last updated:{" "}
              {new Date(data.updatedAt).toLocaleDateString("en-IN", {
                day: "2-digit",
                month: "long",
                year: "numeric",
              })}
            </p>
          )}
        </div>
      </section>

      <div className="h-px w-full bg-[#ebebeb]" />

      {/* Content */}
      <section className="px-6 py-16 md:py-20">
        <div className="mx-auto">
          {isHtml ? (
            // HTML content: rendered via dangerouslySetInnerHTML with full styling
            <article
              style={{ overflowWrap: "anywhere", wordBreak: "break-word" }}
              className="
                w-full max-w-none overflow-hidden wrap-break-word font-[Raleway] text-base
                font-medium leading-8 text-[#232627]/70 md:text-lg

                [&_p]:mb-5
                [&_p]:font-medium
                [&_p]:leading-8
                [&_p]:text-[#232627]/70

                [&_h1]:mb-5
                [&_h1]:mt-10
                [&_h1]:text-4xl
                [&_h1]:font-extrabold
                [&_h1]:leading-tight
                [&_h1]:tracking-[-0.02em]
                [&_h1]:text-[#232627]

                [&_h2]:mb-4
                [&_h2]:mt-10
                [&_h2]:text-3xl
                [&_h2]:font-extrabold
                [&_h2]:leading-tight
                [&_h2]:tracking-[-0.02em]
                [&_h2]:text-[#232627]

                [&_h3]:mb-3
                [&_h3]:mt-8
                [&_h3]:text-2xl
                [&_h3]:font-extrabold
                [&_h3]:leading-tight
                [&_h3]:text-[#232627]

                [&_ul]:my-5
                [&_ul]:list-disc
                [&_ul]:pl-6

                [&_ol]:my-5
                [&_ol]:list-decimal
                [&_ol]:pl-6

                [&_li]:mb-2
                [&_li]:font-medium
                [&_li]:leading-8
                [&_li]:text-[#232627]/70

                [&_strong]:font-extrabold
                [&_strong]:text-[#232627]

                [&_a]:font-bold
                [&_a]:text-[#ee7124]
                [&_a]:no-underline
                hover:[&_a]:underline

                [&_blockquote]:border-l-4
                [&_blockquote]:border-[#ee7124]
                [&_blockquote]:pl-5
                [&_blockquote]:font-medium
                [&_blockquote]:text-[#232627]/60

                [&_img]:max-w-full
                [&_img]:h-auto
                [&_img]:rounded-xl

                [&_table]:w-full
                [&_table]:block
                [&_table]:overflow-x-auto

                [&_pre]:overflow-x-auto
                [&_pre]:whitespace-pre-wrap
                [&_pre]:wrap-break-word

                [&_code]:wrap-break-word
              "
              dangerouslySetInnerHTML={{ __html: rawContent }}
            />
          ) : (
            // Plain text content: preserve line breaks, wrap naturally
            <p
              style={{ overflowWrap: "anywhere", wordBreak: "break-word" }}
              className="
                w-full max-w-none whitespace-pre-wrap wrap-break-word font-[Raleway]
                text-base font-medium leading-8 text-[#232627]/70 md:text-lg
              "
            >
              {rawContent}
            </p>
          )}
        </div>
      </section>
    </main>
  );
}

