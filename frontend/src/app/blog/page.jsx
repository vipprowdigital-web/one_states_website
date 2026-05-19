
"use client";

import BlogHero from "@/components/blog/BlogHero";
import BlogGrid from "@/components/blog/BlogGrid";

import FAQSection from "@/components/common/FAQSection";
import { blogFAQ } from "@/components/common/faqData";
import FeatureMarquee from "@/components/home/FeaturesMarquee";

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-white font-[Raleway] text-[#232627]">
      <BlogHero />
      <BlogGrid />
      <FeatureMarquee />

      <FAQSection
        eyebrow="Blog FAQ"
        title="Questions About Our Journal"
        faqs={blogFAQ}
      />
    </main>
  );
}

// "use client";

// import BlogHero from "@/components/blog/BlogHero";
// import BlogGrid from "@/components/blog/BlogGrid";


// import BlogTicker from "@/components/blog/BlogTicker";
// import BlogStyles from "@/components/blog/BlogStyles";
// import FeatureMarquee from "@/components/home/FeaturesMarquee";

// export default function BlogPage() {
//   return (
//     <main className="min-h-screen bg-white font-[Raleway] text-[#232627]">
//       <BlogStyles />
//       <BlogHero />
//       <BlogGrid />
//       <FeatureMarquee />
      
      
//     </main>
//   );
// }

// "use client";

// import BlogStyles from "@/components/blog/BlogStyles";
// import BlogHero from "@/components/blog/BlogHero";
// import BlogTicker from "@/components/blog/BlogTicker";
// import FeaturedPost from "@/components/blog/FeaturedPost";
// import BlogGrid from "@/components/blog/BlogGrid";

// import BlogReveal from "@/components/blog/BlogReveal";
// import { FEATURED } from "@/components/blog/BlogData";

// export default function BlogPage() {
//   return (
//     <>
//       <BlogStyles />

//       <main className="blg-page min-h-screen bg-white text-[#232627]">
//         <BlogHero />

//         <BlogTicker />

//         <section className="mx-auto max-w-[1160px] px-6 py-16 md:py-20">
//           <BlogReveal>
//             <p className="mb-7 text-xs font-bold uppercase tracking-[0.25em] text-[#ee7124]">
//               ✦ Featured Article
//             </p>
//           </BlogReveal>

//           <FeaturedPost post={FEATURED} />
//         </section>

//         <BlogGrid />

//       </main>
//     </>
//   );
// }