import { useEffect, useState } from "react";

const TARGET = new Date("2027-07-03T16:00:00-03:00").getTime();

function pad(n: number) {
  return n.toString().padStart(2, "0");
}

export function Countdown() {
  const [now, setNow] = useState(() => Date.now());

  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);

  const diff = Math.max(0, TARGET - now);
  const days = Math.floor(diff / 86_400_000);
  const hours = Math.floor((diff % 86_400_000) / 3_600_000);
  const minutes = Math.floor((diff % 3_600_000) / 60_000);
  const seconds = Math.floor((diff % 60_000) / 1000);

  const cells = [
    { v: pad(days), l: "dias" },
    { v: pad(hours), l: "horas" },
    { v: pad(minutes), l: "min" },
    { v: pad(seconds), l: "seg" },
  ];

  return (
    <div className="flex items-start justify-center gap-6 md:gap-12">
      {cells.map((c, i) => (
        <div key={c.l} className="flex items-start gap-6 md:gap-12">
          <div className="text-center">
            <div className="font-display text-4xl md:text-6xl text-[var(--ink-sage)] font-light tabular-nums">
              {c.v}
            </div>
            <div className="text-[0.6rem] md:text-xs tracking-[0.3em] uppercase text-[var(--ink-sage-soft)] mt-1">
              {c.l}
            </div>
          </div>
          {i < cells.length - 1 && (
            <span className="font-display text-3xl md:text-5xl text-[var(--ink-sage)]/40 leading-none mt-1">
              ·
            </span>
          )}
        </div>
      ))}
    </div>
  );
}
