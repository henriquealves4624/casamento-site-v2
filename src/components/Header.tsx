import { useEffect, useRef, useState } from "react";

export function Header() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    audioRef.current = new Audio(
      "https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=relaxing-145038.mp3",
    );
    audioRef.current.loop = true;
    audioRef.current.volume = 0.4;
    return () => {
      audioRef.current?.pause();
      audioRef.current = null;
    };
  }, []);

  const toggle = () => {
    if (!audioRef.current) return;
    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
    } else {
      audioRef.current.play().catch(() => undefined);
      setPlaying(true);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 md:px-10 py-4 flex items-center justify-between backdrop-blur-[2px]">
      <p className="text-[0.72rem] md:text-xs tracking-[0.18em] text-[var(--ink-sage)] font-serif italic">
        Luiza &amp; Henrique <span className="opacity-60">| Wedding Information</span>
      </p>
      <button
        onClick={toggle}
        aria-label={playing ? "Pause music" : "Play music"}
        className="w-8 h-8 rounded-full border border-[var(--ink-sage)]/60 flex items-center justify-center text-[var(--ink-sage)] hover:bg-[var(--ink-sage)] hover:text-[var(--paper)] transition-colors"
      >
        {playing ? (
          <svg width="10" height="12" viewBox="0 0 10 12" fill="currentColor">
            <rect x="0" y="0" width="3" height="12" />
            <rect x="7" y="0" width="3" height="12" />
          </svg>
        ) : (
          <svg width="10" height="12" viewBox="0 0 10 12" fill="currentColor">
            <path d="M0 0 L10 6 L0 12 Z" />
          </svg>
        )}
      </button>
    </header>
  );
}
