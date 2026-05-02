export function RibbonsSVG() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      style={{ top: "280px" }}
    >
      {/* Left ribbon — gentle curve from center-top towards left edge */}
      <svg
        className="absolute top-0 left-0 w-full h-full"
        preserveAspectRatio="none"
        viewBox="0 0 1000 4000"
        fill="none"
      >
        <path
          d="M500,0 C480,200 350,500 180,900 C100,1200 60,1600 40,2000 C20,2400 30,2800 25,3200 C20,3600 15,3800 10,4000"
          stroke="var(--ink-sage)"
          strokeWidth="1.2"
          opacity="0.15"
          fill="none"
        />
        <path
          d="M500,0 C478,200 345,500 175,900 C95,1200 55,1600 35,2000 C15,2400 25,2800 20,3200 C15,3600 10,3800 5,4000"
          stroke="var(--ink-sage)"
          strokeWidth="0.6"
          opacity="0.08"
          fill="none"
        />
      </svg>
      {/* Right ribbon — mirror */}
      <svg
        className="absolute top-0 left-0 w-full h-full"
        preserveAspectRatio="none"
        viewBox="0 0 1000 4000"
        fill="none"
      >
        <path
          d="M500,0 C520,200 650,500 820,900 C900,1200 940,1600 960,2000 C980,2400 970,2800 975,3200 C980,3600 985,3800 990,4000"
          stroke="var(--ink-sage)"
          strokeWidth="1.2"
          opacity="0.15"
          fill="none"
        />
        <path
          d="M500,0 C522,200 655,500 825,900 C905,1200 945,1600 965,2000 C985,2400 975,2800 980,3200 C985,3600 990,3800 995,4000"
          stroke="var(--ink-sage)"
          strokeWidth="0.6"
          opacity="0.08"
          fill="none"
        />
      </svg>
    </div>
  );
}
