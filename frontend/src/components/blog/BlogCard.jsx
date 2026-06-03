"use client";

import Image from "next/image";
import Link from "next/link";

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

export default function BlogCard({ blog }) {
  return (
    <Link
      href={`/blog/${blog.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-[20px] border-[1.5px] border-[#e8e8e8] bg-white text-inherit no-underline shadow-[0_4px_16px_rgba(0,0,0,.05)] transition-all duration-300 hover:-translate-y-2 hover:border-[#ee7124]/40 hover:shadow-[0_28px_60px_rgba(0,0,0,.1)]"
    >
      <div className="relative aspect-video overflow-hidden bg-[#f2f2f2]">
        <Image
          src={blog.thumbnail || "/images/blog/default.jpg"}
          alt={blog.title}
          width={1000}
          height={500}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />

        <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.15em] text-[#ee7124]">
          {getCategoryName(blog.category)}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-7">
        <h3 className="mb-3 text-lg font-extrabold leading-snug text-[#232627] transition-colors duration-300 group-hover:text-[#ee7124]">
          {blog.title}
        </h3>

        <p className="line-clamp-3 text-sm font-medium leading-7 text-[#666]">
          {blog.short_description}
        </p>

        <div className="mt-auto flex items-center justify-between border-t border-[#f0f0f0] pt-5">
          <p className="text-[11px] font-medium text-[#aaa]">
            {formatDate(blog.createdAt)}
          </p>

          {/* <p className="text-[11px] font-medium text-[#aaa]">
            {blog.read_time || "5 min"}
          </p> */}
        </div>
      </div>
    </Link>
  );
}

// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { useState } from "react";
// import BlogReveal from "./BlogReveal";

// export default function BlogCard({ post, index }) {
//   const [hovered, setHovered] = useState(false);

//   return (
//     <BlogReveal delay={index * 90} y={36}>
//       <Link
//         href={`/blog/${post.id}`}
//         className="block h-full text-inherit no-underline"
//         onMouseEnter={() => setHovered(true)}
//         onMouseLeave={() => setHovered(false)}
//       >
//         <article
//           className="flex h-full flex-col overflow-hidden rounded-[20px] border-[1.5px] bg-white transition-all duration-300"
//           style={{
//             borderColor: hovered ? "rgba(238,113,36,.35)" : "#e8e8e8",
//             boxShadow: hovered
//               ? "0 28px 60px rgba(0,0,0,.1)"
//               : "0 4px 16px rgba(0,0,0,.05)",
//             transform: hovered ? "translateY(-8px)" : "translateY(0)",
//           }}
//         >
//           <div className="relative aspect-video overflow-hidden">
//             <div
//               className="absolute inset-0 transition-transform duration-700"
//               style={{
//                 transform: hovered ? "scale(1.08)" : "scale(1)",
//               }}
//             >
//               <Image
//                 src={post.image}
//                 alt={post.title}
//                 fill
//                 className="object-cover"
//                 sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 380px"
//               />
//             </div>

//             <div
//               className="absolute inset-0 bg-[#ee7124]/15 transition-opacity duration-300"
//               style={{ opacity: hovered ? 1 : 0 }}
//             />

//             <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.15em] text-[#ee7124] backdrop-blur">
//               {post.category}
//             </span>
//           </div>

//           <div className="flex flex-1 flex-col p-7">
//             <h3
//               className="mb-3 text-lg font-extrabold leading-snug transition-colors duration-300"
//               style={{ color: hovered ? "#ee7124" : "#232627" }}
//             >
//               {post.title}
//             </h3>

//             <p className="line-clamp-3 text-sm font-medium leading-7 text-[#666]">
//               {post.excerpt}
//             </p>

//             <div className="mt-auto flex items-center justify-between border-t border-[#f0f0f0] pt-5">
//               <div className="flex items-center gap-2.5">
//                 <div className="flex h-[30px] w-[30px] shrink-0 items-center justify-center rounded-full bg-[#ee7124] text-[10px] font-extrabold text-white">
//                   {post.author
//                     .split(" ")
//                     .map((name) => name[0])
//                     .join("")}
//                 </div>

//                 <div>
//                   <p className="m-0 text-xs font-bold text-[#232627]">
//                     {post.author}
//                   </p>
//                   <p className="mt-0.5 text-[11px] font-medium text-[#aaa]">
//                     {post.readTime}
//                   </p>
//                 </div>
//               </div>

//               <span className="text-[11px] font-medium text-[#aaa]">
//                 {post.date}
//               </span>
//             </div>
//           </div>
//         </article>
//       </Link>
//     </BlogReveal>
//   );
// }
