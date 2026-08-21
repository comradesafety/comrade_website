import { motion } from 'framer-motion';

/**
 * Small tracked-out eyebrow label used above section headings,
 * e.g. "WHO WE ARE", "OUR VISION".
 */
export default function SectionLabel({ children, align = 'left', light = false, className = '' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className={`flex items-center gap-3 ${align === 'center' ? 'justify-center' : 'justify-start'} ${className}`}
    >
      <span className={`h-px w-8 ${light ? 'bg-wine-300' : 'bg-wine-500'}`} aria-hidden="true" />
      <span
        className={`text-xs font-medium uppercase tracking-label ${
          light ? 'text-cream-100/80' : 'text-ink-500'
        }`}
      >
        {children}
      </span>
    </motion.div>
  );
}
