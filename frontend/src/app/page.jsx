"use client";

import AboutSection from "@/components/home/AboutSection";
import Clients from "@/components/home/Clients";
import Experience from "@/components/home/Experience";
import FAQs from "@/components/home/FAQs";
import FeatureMarquee from "@/components/home/FeaturesMarquee";
import Hero from "@/components/home/Hero";
import Industries from "@/components/home/Industries";
import Stats from "@/components/home/Stats";
import Testimonials from "@/components/home/Testimonials";
import WhatWeDo from "@/components/home/WhatWeDo";
import WhyUs from "@/components/home/WhyUs";

export default function Home() {
  return (
    <div className="bg-white">
      <Hero />
      <FeatureMarquee />
      <AboutSection />
      <Industries />
      <WhatWeDo />
      <Stats />
      <WhyUs />
      <Experience />
      <Clients />
      <Testimonials />
      <FAQs />
    </div>
  );
}

// export default function Home() {
//   return (
//     <div className="bg-white p-5 h-screen text-black pt-25">
//       <div className="grid grid-cols-1 md:grid-cols-2">
//         <div className="flex flex-col gap-4 justify-center">
//           <h1 className="font-extrabold text-3xl md:text-6xl text-black tracking-tighter w-3/4">
//             Lorem, ipsum dolor sit amet consectetur adipisicing.
//           </h1>
//           <p>
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem soluta
//             itaque excepturi sint at esse perspiciatis sed velit. Laboriosam
//             esse eveniet, quis enim blanditiis culpa perspiciatis?
//           </p>
//           <button className="bg-secondary px-5 py-3 w-1/2 md:w-1/2 text-black font-extrabold text-md md:text-xl">
//             Know More
//           </button>
//         </div>
//         <div>
//           <Image
//             width="400"
//             height="600"
//             src="/images/hero-image.png"
//             alt="Hero Image"
//             className="w-full h-full"
//           />
//         </div>
//       </div>
//     </div>
//   );
// }
