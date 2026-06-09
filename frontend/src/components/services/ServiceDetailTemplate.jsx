"use client";

import Image from "next/image";
import Link from "next/link";
import { scrollTo } from "../common/scrollTo";

export default function ServiceDetailTemplate({
  eyebrow,
  title,
  description,
  image,
  overviewTitle,
  overview,
  highlights,
  // processPoints = [],
  reverse = false,
  ctaTitle = "Discuss this service with our team",
  services,
  serviceHeading,
  ctaDesc,
}) {
  return (
    <main className="min-h-screen bg-white font-[Raleway] text-[#232627]">
      {/* Hero */}
      <section className="border-b border-[#ebebeb] bg-white px-6 py-16 md:py-20">
        <div className="mx-auto max-w-6xl mt-5 flex flex-col">
          <Link
            href="/services"
            className="mb-8 inline-block text-sm font-bold tracking-[0.08em] text-[#ee7124]"
          >
            ← Back to Services
          </Link>

          <p className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.32em] text-[#ee7124] md:text-sm">
            {/* <span className="block h-px w-8 bg-[#ee7124]" /> */}
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

            <h2 className="mb-6 text-2xl font-extrabold leading-tight tracking-[-0.02em] text-[#232627] md:text-3xl">
              {overviewTitle}
            </h2>

            <p className="text-md font-medium leading-8 text-[#232627]/65 md:text-md">
              {overview}
            </p>

            <div
              onClick={() => scrollTo("contact")}
              className="mt-8 inline-block rounded-full bg-[#ee7124] px-8 py-3.5 text-sm font-bold tracking-[0.06em] text-white no-underline shadow-[0_8px_28px_rgba(238,113,36,.28)] transition-transform duration-200 hover:-translate-y-0.5"
            >
              Get Consultation →
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-[#f9f9f9] px-6 py-16 md:py-24 font-[Raleway]">
        <div className="mx-auto max-w-6xl">
          {/* Section Header */}
          <div className="mb-14 text-center">
            <p className="mb-4 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.32em] text-[#ee7124] md:text-sm">
              <span className="block h-px w-8 bg-[#ee7124]" />
              Our Offerings
              <span className="block h-px w-8 bg-[#ee7124]" />
            </p>
            <h2 className="text-3xl font-extrabold leading-tight tracking-[-0.02em] text-[#232627] md:text-5xl">
              {serviceHeading}
            </h2>
          </div>

          {/* Services Grid */}
          {services.length !== 0 && (
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="group flex flex-col justify-between overflow-hidden rounded-3xl border border-[#ebebeb] bg-white p-6 shadow-[0_12px_40px_rgba(0,0,0,.03)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(238,113,36,0.08)]"
                >
                  <div>
                    {/* Meta & Typography */}
                    <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-[#ee7124]">
                      {service.eyebrow}
                    </p>
                    <h3 className="mb-3 text-2xl font-extrabold tracking-[-0.01em] text-[#232627]">
                      {service.title}
                    </h3>
                    <p className="mb-6 text-sm font-medium leading-7 text-[#232627]/65">
                      {service.description}
                    </p>

                    {/* Targeted Tags */}
                    {service.overview && service.overviewTitle && (
                      <div className="mb-6 border-t border-[#f2f2f2] pt-4">
                        <span className="text-xs font-bold uppercase tracking-wider text-[#232627]/40 block mb-2">
                          {service.overviewTitle}:
                        </span>
                        <div className="flex flex-wrap gap-2">
                          {service.overview.split(", ").map((tag) => (
                            <span
                              key={tag}
                              className="rounded-md bg-[#f9f9f9] px-2.5 py-1 text-xs font-semibold text-[#232627]/80 border border-[#ebebeb]"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Hightlights */}
                    {service.highlights.length !== 0 && (
                      <div className="mb-6 border-t border-[#f2f2f2] pt-4">
                        <span className="text-xs font-bold uppercase tracking-wider text-[#232627]/40 block mb-2">
                          {service.highlightTitle}
                        </span>
                        <div className="flex flex-wrap gap-2">
                          {service.highlights.map((tag) => (
                            <span
                              key={tag}
                              className="rounded-md bg-secondary/5 px-2.5 py-1 text-xs font-semibold text-secondary border border-secondary"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Highlighted Points */}
      <section className="border-t border-[#ebebeb] bg-[#f9f9f9] px-6 py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-left md:text-center">
            <p className="mb-5 inline-flex items-center justify-start gap-3 text-xs font-bold uppercase tracking-[0.32em] text-[#ee7124] md:justify-center md:text-sm">
              <span className="block h-px w-8 bg-[#ee7124]" />
              Industries
              <span className="block h-px w-8 bg-[#ee7124]" />
            </p>

            <h2 className="text-3xl font-extrabold leading-tight tracking-[-0.02em] text-[#232627] md:text-5xl">
              Industries We Work With
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
      {/* {processPoints.length > 0 && (
        <section className="bg-white px-6 py-16 md:py-20">
          <div className="mx-auto max-w-4xl">
            <div className="mb-10 text-left md:text-center">
              <p className="mb-5 inline-flex items-center justify-start gap-3 text-xs font-bold uppercase tracking-[0.32em] text-[#ee7124] md:justify-center md:text-sm">
                <span className="block h-px w-8 bg-[#ee7124]" />
                Our Approach
                <span className="block h-px w-8 bg-[#ee7124]" />
              </p>

              <h2 className="text-3xl font-extrabold leading-tight tracking-[-0.02em] text-[#232627] md:text-5xl">
                Industries We Work With
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
      )} */}
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
            {ctaDesc}
          </p>

          <div
            onClick={() => scrollTo("contact")}
            className="inline-block rounded-full bg-[#ee7124] px-9 py-4 text-sm font-bold tracking-[0.07em] text-white no-underline"
          >
            Connect With Our Team →
          </div>
        </div>
      </section>
    </main>
  );
}
