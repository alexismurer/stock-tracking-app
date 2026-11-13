"use client";

import { MARKETS, Market, toMarket } from "@/lib/constants";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const Flag = ({ market }: { market: Market }) =>
  market === "fr" ? (
    <svg viewBox="0 0 3 2" className="h-3.5 w-5 rounded-[2px]" aria-hidden>
      <rect width="1" height="2" fill="#002395" />
      <rect x="1" width="1" height="2" fill="#fff" />
      <rect x="2" width="1" height="2" fill="#ed2939" />
    </svg>
  ) : (
    <svg viewBox="0 0 19 10" className="h-3.5 w-5 rounded-[2px]" aria-hidden>
      <rect width="19" height="10" fill="#b22234" />
      {[1, 3, 5, 7, 9].map((y) => (
        <rect key={y} y={(y * 10) / 13} width="19" height={10 / 13} fill="#fff" />
      ))}
      <rect width="7.6" height={(7 * 10) / 13} fill="#3c3b6e" />
    </svg>
  );

const MarketSwitch = () => {
  const active = toMarket(useSearchParams().get("market") ?? undefined);

  return (
    <div className="flex gap-1 rounded-full bg-gray-700 p-1">
      {(Object.keys(MARKETS) as Market[]).map((market) => (
        <Link
          key={market}
          href={market === "fr" ? "/" : `/?market=${market}`}
          aria-current={market === active ? "page" : undefined}
          className={cn(
            "flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium transition-colors",
            market === active
              ? "bg-yellow-500 text-gray-900"
              : "text-gray-400 hover:text-gray-100"
          )}
        >
          <Flag market={market} />
          {MARKETS[market].label}
        </Link>
      ))}
    </div>
  );
};
export default MarketSwitch;
