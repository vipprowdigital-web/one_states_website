import Image from "next/image";
import Link from "next/link";

export default function ServiceDetailTemplate({
  eyebrow,
  title,
  description,
  image,
  overviewTitle,
  overview,
  highlights,
  processPoints = [],
  reverse = false,
  ctaTitle = "Discuss this service with our team",
}) {
  return (
    <main className="min-h-screen bg-white font-[Raleway] text-[#232627]">
      {/* Hero */}
      <section className="border-b border-[#ebebeb] bg-white px-6 py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <Link
            href="/services"
            className="mb-8 inline-block text-sm font-bold tracking-[0.08em] text-[#ee7124]"
          >
            ← Back to Services
          </Link>

          <p className="mb-5 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.32em] text-[#ee7124] md:text-sm">
            <span className="block h-px w-8 bg-[#ee7124]" />
            {eyebrow}
          </p>

          <h1 className="mb-6 text-4xl font-extrabold leading-tight tracking-[-0.02em] text-[#232627] md:text-6xl">
            {title}
          </h1>

          <p className="max-w-3xl text-base font-medium leading-8 text-[#232627]/65 md:text-lg">
            {description}
          </p>
        </div>
      </section>

      {/* Image + Content */}
      <section className="px-6 py-16 md:py-20">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-14">
          <div className={reverse ? "md:order-2" : "md:order-1"}>
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-[#f2f2f2] shadow-[0_20px_60px_rgba(0,0,0,.08)]">
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover object-center"
                sizes="(max-width:768px) 100vw, 50vw"
              />
              <div className="absolute left-0 right-0 top-0 h-1 bg-[#ee7124]" />
            </div>
          </div>

          <div className={reverse ? "md:order-1" : "md:order-2"}>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-[#ee7124]">
              Service Overview
            </p>

            <h2 className="mb-6 text-3xl font-extrabold leading-tight tracking-[-0.02em] text-[#232627] md:text-5xl">
              {overviewTitle}
            </h2>

            <p className="text-base font-medium leading-8 text-[#232627]/65 md:text-lg">
              {overview}
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-block rounded-full bg-[#ee7124] px-8 py-3.5 text-sm font-bold tracking-[0.06em] text-white no-underline shadow-[0_8px_28px_rgba(238,113,36,.28)] transition-transform duration-200 hover:-translate-y-0.5"
            >
              Get Consultation →
            </Link>
          </div>
        </div>
      </section>

      {/* Highlighted Points */}
      <section className="border-t border-[#ebebeb] bg-[#f9f9f9] px-6 py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-left md:text-center">
            <p className="mb-5 inline-flex items-center justify-start gap-3 text-xs font-bold uppercase tracking-[0.32em] text-[#ee7124] md:justify-center md:text-sm">
              <span className="block h-px w-8 bg-[#ee7124]" />
              Key Highlights
              <span className="block h-px w-8 bg-[#ee7124]" />
            </p>

            <h2 className="text-3xl font-extrabold leading-tight tracking-[-0.02em] text-[#232627] md:text-5xl">
              What We Cover
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-[#ebebeb] bg-white p-6 shadow-[0_8px_24px_rgba(0,0,0,.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(238,113,36,.12)]"
              >
                <span className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-[#ee7124]/10 text-lg font-extrabold text-[#ee7124]">
                  ✓
                </span>

                <h3 className="text-lg font-extrabold leading-tight text-[#232627]">
                  {item}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Numbered Points */}
     {/* Numbered Points */}
{processPoints.length > 0 && (
  <section className="bg-white px-6 py-16 md:py-20">
    <div className="mx-auto max-w-4xl">
      <div className="mb-10 text-left md:text-center">
        <p className="mb-5 inline-flex items-center justify-start gap-3 text-xs font-bold uppercase tracking-[0.32em] text-[#ee7124] md:justify-center md:text-sm">
          <span className="block h-px w-8 bg-[#ee7124]" />
          Our Approach
          <span className="block h-px w-8 bg-[#ee7124]" />
        </p>

        <h2 className="text-3xl font-extrabold leading-tight tracking-[-0.02em] text-[#232627] md:text-5xl">
          How We Work
        </h2>
      </div>

      <div className="space-y-6">
        {processPoints.map((point, index) => (
          <div
            key={point}
            className="flex gap-5 border-b border-[#ebebeb] pb-6 last:border-b-0"
          >
            <span className="shrink-0 text-2xl font-extrabold text-[#ee7124]">
              {index + 1}.
            </span>

            <p className="text-base font-medium leading-8 text-[#232627]/70 md:text-lg">
              {point}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
)}
      {/* CTA */}
      <section className="bg-[#232627] px-6 py-16 text-left md:text-center">
        <div className="mx-auto max-w-3xl">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-[#ee7124]">
            Need Help?
          </p>

          <h2 className="mb-5 text-3xl font-extrabold leading-tight text-white md:text-5xl">
            {ctaTitle}
          </h2>

          <p className="mx-auto mb-8 max-w-2xl text-base font-medium leading-8 text-white/65">
            Share your requirement and our team will guide you with the right
            hospitality or real estate solution.
          </p>

          <Link
            href="/contact"
            className="inline-block rounded-full bg-[#ee7124] px-9 py-4 text-sm font-bold tracking-[0.07em] text-white no-underline"
          >
            Contact Us →
          </Link>
        </div>
      </section>
    </main>
  );
}