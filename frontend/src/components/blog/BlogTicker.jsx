import { TICKER_ITEMS } from "./BlogData";

export default function BlogTicker() {
  return (
    <div className="overflow-hidden border-y border-[#ebebeb] bg-[#fafafa] py-3.5">
      <div className="blg-ticker-inner flex w-max whitespace-nowrap">
        {[...Array(2)].map((_, repeatIndex) => (
          <span key={repeatIndex} className="flex items-center">
            {TICKER_ITEMS.map((item) => (
              <span
                key={`${repeatIndex}-${item}`}
                className="inline-flex items-center gap-5 px-7"
              >
                <span className="text-[10px] text-[#ee7124]">✦</span>
                <span className="text-xs font-bold uppercase tracking-[0.15em] text-[#555]">
                  {item}
                </span>
              </span>
            ))}
          </span>
        ))}
      </div>
    </div>
  );
}