const originStyle = { transformBox: 'fill-box', transformOrigin: 'center' };

/**
 * Abstract, minimal background visual for the hero: soft ambient glow, a
 * slow-turning signal ring, an open cuff/band silhouette, and a few thin
 * connective lines. Purely decorative — no literal product depiction.
 */
export default function HeroVisual() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="absolute -right-24 top-[6%] h-[420px] w-[420px] rounded-full bg-wine-500/20 blur-[110px] animate-pulse-glow sm:h-[520px] sm:w-[520px]" />
      <div className="absolute right-[8%] top-[46%] h-[220px] w-[220px] rounded-full bg-wine-300/20 blur-[90px] animate-float-slow" />

      <svg
        viewBox="0 0 900 900"
        className="absolute -right-[10%] top-0 hidden h-full w-[80%] md:block lg:w-[65%]"
        preserveAspectRatio="xMidYMid meet"
      >
        <circle
          cx="620"
          cy="260"
          r="230"
          fill="none"
          stroke="#15120E"
          strokeOpacity="0.05"
          strokeWidth="1.5"
        />
        <circle
          cx="620"
          cy="260"
          r="178"
          fill="none"
          stroke="#8F0C45"
          strokeOpacity="0.22"
          strokeWidth="1.2"
          strokeDasharray="1 10"
          strokeLinecap="round"
          className="animate-spin-slow"
          style={originStyle}
        />

        <g className="animate-float-slow" style={originStyle}>
          <path
            d="M400 480 C368 566 404 656 528 682 C654 708 762 636 762 542 C762 458 700 396 616 388"
            fill="none"
            stroke="#8F0C45"
            strokeOpacity="0.28"
            strokeWidth="16"
            strokeLinecap="round"
          />
        </g>

        <g stroke="#15120E" strokeOpacity="0.14" strokeWidth="2" strokeLinecap="round">
          <path d="M672 146 L716 100" />
          <path d="M700 176 L754 152" className="animate-drift" style={originStyle} />
          <path d="M660 200 L700 226" opacity="0.7" />
        </g>
      </svg>
    </div>
  );
}
