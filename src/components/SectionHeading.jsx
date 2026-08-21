import { motion } from 'framer-motion';
import SectionLabel from './SectionLabel.jsx';

const sizeMap = {
  lg: 'text-display-lg',
  md: 'text-display-md',
};

/**
 * Standard section intro block: eyebrow label + large heading + optional
 * supporting copy. `highlight` wraps a matching substring of `heading` in
 * the accent color for emphasis.
 */
export default function SectionHeading({
  id,
  label,
  heading,
  highlight,
  description,
  align = 'left',
  light = false,
  size = 'lg',
  as: HeadingTag = 'h2',
  divider = false,
}) {
  const parts = highlight && heading.includes(highlight) ? heading.split(highlight) : null;

  return (
    <div className={align === 'center' ? 'text-center' : 'text-left'}>
      {label && (
        <div className={align === 'center' ? 'flex justify-center' : ''}>
          <SectionLabel align={align} light={light} className="mb-5">
            {label}
          </SectionLabel>
        </div>
      )}

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1], delay: 0.08 }}
      >
        <HeadingTag
          id={id}
          className={`${sizeMap[size]} font-display font-semibold text-balance ${
            light ? 'text-cream-100' : 'text-ink-900'
          } ${align === 'center' ? 'mx-auto' : ''}`}
        >
          {parts ? (
            <>
              {parts[0]}
              <span className={light ? 'text-wine-300' : 'text-wine-500'}>{highlight}</span>
              {parts[1]}
            </>
          ) : (
            heading
          )}
        </HeadingTag>
      </motion.div>

      {divider && (
        <div className={`mt-5 h-px w-10 bg-wine-300 ${align === 'center' ? 'mx-auto' : ''}`} aria-hidden="true" />
      )}

      {description && (
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.18 }}
          className={`mt-5 max-w-2xl text-base sm:text-lg leading-relaxed ${
            light ? 'text-cream-100/75' : 'text-ink-500'
          } ${align === 'center' ? 'mx-auto' : ''}`}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
