"use client";

import BlogReveal from "./BlogReveal";

export default function BlogNewsletter() {
  return (
    <section className="blog-newsletter relative mx-6 mb-20 overflow-hidden rounded-[28px] bg-[linear-gradient(135deg,#232627_0%,#2f3334_100%)] px-8 py-16 md:mx-auto md:max-w-[1160px] md:px-16 md:py-[72px]">
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.04) 1px,transparent 1px)",
          backgroundSize: "52px 52px",
        }}
      />

      <div className="absolute -right-[60px] -top-[60px] h-[260px] w-[260px] rounded-full bg-[radial-gradient(circle,rgba(238,113,36,.25)_0%,transparent_65%)]" />

      <div className="nl-grid relative grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-12">
        <BlogReveal>
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-[#ee7124]">
            Stay Informed
          </p>

          <h2 className="mb-4 text-3xl font-extrabold leading-tight text-white md:text-5xl">
            Get Insights Delivered to Your Inbox
          </h2>

          <p className="text-sm font-medium leading-8 text-white/55 md:text-base">
            Join hospitality professionals who receive our market intelligence
            and transaction insights.
          </p>
        </BlogReveal>

        <BlogReveal delay={120}>
          <div className="flex flex-col gap-3.5">
            <input
              className="nl-input rounded-xl border-[1.5px] border-white/15 bg-white/10 px-5 py-4 text-sm font-medium text-white placeholder:text-white/35"
              type="text"
              placeholder="Your full name"
            />

            <input
              className="nl-input rounded-xl border-[1.5px] border-white/15 bg-white/10 px-5 py-4 text-sm font-medium text-white placeholder:text-white/35"
              type="email"
              placeholder="Your email address"
            />

            <button className="rounded-xl bg-[#ee7124] px-7 py-4 text-[13px] font-bold uppercase tracking-[0.07em] text-white shadow-[0_8px_28px_rgba(238,113,36,.4)] transition-opacity duration-200 hover:opacity-90">
              Subscribe to the Journal →
            </button>

            <p className="text-center text-[11px] font-medium text-white/35">
              No spam. Unsubscribe any time.
            </p>
          </div>
        </BlogReveal>
      </div>
    </section>
  );
}