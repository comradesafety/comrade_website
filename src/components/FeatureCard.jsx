import { motion } from 'framer-motion';

/**
 * Minimal icon + title + description card. Used for the "Problem" situations
 * grid and the "Innovation" approach grid — any conceptual four-up layout.
 */
export default function FeatureCard({ icon: Icon, title, description, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1], delay: index * 0.08 }}
      className="group relative rounded-2xl border border-ink-900/10 bg-cream-50/60 p-7 sm:p-8 transition-all duration-300 ease-premium hover:-translate-y-1.5 hover:border-wine-500/35 hover:shadow-soft"
    >
      <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-wine-500/8 text-wine-600 transition-colors duration-300 group-hover:bg-wine-500/12">
        {Icon && <Icon size={22} strokeWidth={1.75} aria-hidden="true" />}
      </div>
      <h3 className="font-display text-lg font-semibold text-ink-900">{title}</h3>
      <p className="mt-2.5 text-pretty text-sm leading-relaxed text-ink-500">{description}</p>
    </motion.div>
  );
}
