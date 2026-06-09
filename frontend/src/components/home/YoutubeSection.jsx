// components/YoutubeSection.jsx

const VIDEOS = [
  {
    id: "9BjS99Ajsn0", // ← replace with your YouTube video ID
   
  },
  {
    id: "sqM-KXITCbs", // ← replace
 
  },
  {
    id: "IeA46YpakR8", // ← replace
  
  },
];

export default function YoutubeSection() {
  return (
    <section className="bg-white px-6 py-20 md:px-16 lg:px-28">
      {/* heading */}
      <div className="mb-14 text-center">
        <p className="mb-4 inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.3em] text-[#ee7124]">
          <span className="block h-px w-6 bg-[#ee7124]" />
          Watch & Learn
          <span className="block h-px w-6 bg-[#ee7124]" />
        </p>
        <h2 className="text-3xl font-extrabold text-[#232627] md:text-4xl">
          Our Latest <span className="text-[#ee7124]">Videos</span>
        </h2>
      </div>

      {/* grid */}
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {VIDEOS.map((video) => (
          <div
            key={video.id + video.title}
            className="group overflow-hidden rounded-2xl border border-[#ebebeb] bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-[#ee7124]/40"
          >
            {/* iframe */}
            <div className="relative aspect-video w-full overflow-hidden">
              <iframe
                src={`https://www.youtube.com/embed/${video.id}`}
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="h-full w-full"
              />
              {/* orange top accent */}
              <div className="absolute left-0 right-0 top-0 h-1 bg-[#ee7124]" />
            </div>

            {/* title */}
            <div className="px-5 py-4">
              <p className="text-sm font-bold leading-snug text-[#232627] group-hover:text-[#ee7124] transition-colors duration-300">
                {video.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}