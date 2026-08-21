const floatStyle = { transformBox: 'fill-box', transformOrigin: 'center' };

/**
 * Abstract, hand-drawn line-art visualizations for the concept products.
 * Deliberately non-literal: built only from circles, arcs, and dots so no
 * illustration reads as a specific product category or form factor — mood
 * and presence only, nothing to disclose.
 */
function ConceptOneVisual() {
  return (
    <svg viewBox="0 0 240 200" className="h-full w-full" role="img" aria-label="Abstract concept illustration, orbiting rings">
      <g style={floatStyle} opacity="0.4">
        <circle cx="118" cy="100" r="66" fill="none" stroke="#15120E" strokeOpacity="0.14" strokeWidth="1.5" />
      </g>
      <g className="animate-spin-slow" style={floatStyle}>
        <circle
          cx="118"
          cy="100"
          r="48"
          fill="none"
          stroke="#8F0C45"
          strokeOpacity="0.25"
          strokeWidth="1.2"
          strokeDasharray="1 9"
          strokeLinecap="round"
        />
      </g>
      <g className="animate-float" style={floatStyle}>
        <circle cx="150" cy="72" r="26" fill="none" stroke="#8F0C45" strokeWidth="7" strokeLinecap="round" />
        <g className="animate-pulse-glow" style={floatStyle}>
          <circle cx="176" cy="52" r="4" fill="#8F0C45" />
          <circle cx="190" cy="68" r="2.4" fill="#8F0C45" opacity="0.55" />
          <circle cx="192" cy="86" r="1.6" fill="#8F0C45" opacity="0.3" />
        </g>
      </g>
    </svg>
  );
}

function ConceptTwoVisual() {
  return (
    <svg viewBox="0 0 240 200" className="h-full w-full" role="img" aria-label="Abstract concept illustration, connected forms">
      <g stroke="#8F0C45" strokeOpacity="0.25" strokeWidth="1.3" strokeDasharray="1 7" strokeLinecap="round">
        <path d="M84 122 L142 84" />
        <path d="M158 76 L188 56" />
      </g>
      <g className="animate-float-slow" style={floatStyle}>
        <circle cx="66" cy="130" r="28" fill="none" stroke="#8F0C45" strokeWidth="6.5" strokeLinecap="round" />
      </g>
      <g className="animate-float" style={floatStyle}>
        <circle cx="150" cy="78" r="16" fill="none" stroke="#8F0C45" strokeOpacity="0.65" strokeWidth="4" />
      </g>
      <g className="animate-drift" style={floatStyle}>
        <circle cx="192" cy="50" r="8" fill="#8F0C45" />
      </g>
      <g style={floatStyle} opacity="0.3">
        <circle cx="66" cy="130" r="40" fill="none" stroke="#15120E" strokeWidth="1" />
      </g>
    </svg>
  );
}

function ConceptThreeVisual() {
  return (
    <svg viewBox="0 0 240 200" className="h-full w-full" role="img" aria-label="Abstract collection of everyday product forms">
      <g className="animate-float" style={floatStyle}>
        <circle cx="82" cy="82" r="34" fill="none" stroke="#8F0C45" strokeWidth="8" />
      </g>
      <g className="animate-float-slow" style={floatStyle}>
        <rect
          x="118"
          y="102"
          width="76"
          height="56"
          rx="16"
          transform="rotate(6 156 130)"
          fill="#FBF3E6"
          stroke="#15120E"
          strokeOpacity="0.8"
          strokeWidth="2"
        />
        <circle cx="134" cy="117" r="3.2" transform="rotate(6 156 130)" fill="#15120E" fillOpacity="0.8" />
      </g>
      <g className="animate-drift" style={floatStyle}>
        <circle cx="176" cy="56" r="11" fill="#8F0C45" />
      </g>
      <g style={floatStyle} opacity="0.35">
        <circle cx="82" cy="82" r="44" fill="none" stroke="#15120E" strokeWidth="1" />
      </g>
    </svg>
  );
}

const visuals = {
  one: ConceptOneVisual,
  two: ConceptTwoVisual,
  three: ConceptThreeVisual,
};

export default function ProductVisual({ type }) {
  const Visual = visuals[type] ?? ConceptOneVisual;
  return <Visual />;
}
