/**
 * Minimal, original outline glyphs for social placeholders, drawn in the
 * same stroke language as the Lucide icon set used across the rest of the
 * site (24x24 grid, round caps/joins, currentColor). These are generic
 * pictograms — not reproductions of any brand's trademarked logo artwork.
 */

export function InstagramGlyph({ size = 20, className = '', ...rest }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      {...rest}
    >
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  );
}
