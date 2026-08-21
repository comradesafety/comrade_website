import { motion } from 'framer-motion';

/**
 * Editorial principle card used in "How Comrade Thinks" (Wear It / Trust It /
 * Move Freely). Distinct from FeatureCard: a circular icon badge and a large
 * faint index numeral for a premium, spec-sheet feel.
 */
export default function ValueCard({ icon: Icon, title, description, index = 0 }) {
  const number = String(index + 1).padStart(2, '0');

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 }}
      className="group relative rounded-2xl border border-ink-900/10 bg-cream-50/60 p-8 lg:p-10 transition-all duration-300 ease-premium hover:-translate-y-1.5 hover:border-wine-500/35 hover:shadow-soft"
    >
      <span
        className="pointer-events-none absolute top-6 right-6 font-display text-5xl font-semibold leading-none text-ink-900/[0.08] transition-colors duration-300 group-hover:text-wine-500/15"
        aria-hidden="true"
      >
        {number}
      </span>

      <div className="relative flex h-14 w-14 items-center justify-center rounded-full border border-wine-500/25 text-wine-600 transition-colors duration-300 group-hover:border-wine-500 group-hover:bg-wine-500/5">
        {Icon && <Icon size={24} strokeWidth={1.6} aria-hidden="true" />}
      </div>

      <h3 className="relative mt-7 font-display text-xl font-semibold text-ink-900">{title}</h3>
      <p className="relative mt-3 text-pretty text-sm leading-relaxed text-ink-500">{description}</p>
    </motion.div>
  );
}
