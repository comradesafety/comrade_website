import { motion } from 'framer-motion';

/**
 * Centered value/pillar card: circular icon badge, thin accent divider,
 * colored title. Distinct from FeatureCard (left-aligned, square icon chip)
 * so this style stays scoped to where it's actually used rather than
 * changing every icon-grid section on the site.
 */
export default function PillarCard({ icon: Icon, title, description, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1], delay: index * 0.08 }}
      className="group flex flex-col items-center rounded-2xl border border-ink-900/10 bg-cream-50/70 px-6 py-9 text-center transition-all duration-300 ease-premium hover:-translate-y-1.5 hover:border-wine-500/35 hover:shadow-soft"
    >
      <div className="flex h-16 w-16 items-center justify-center rounded-full border border-wine-500/25 text-wine-600 transition-colors duration-300 group-hover:border-wine-500 group-hover:bg-wine-50">
        {Icon && <Icon size={26} strokeWidth={1.75} aria-hidden="true" />}
      </div>

      <span className="mt-4 h-px w-6 bg-wine-300" aria-hidden="true" />

      <h3 className="mt-4 font-display text-lg font-semibold text-wine-600">{title}</h3>
      <p className="mt-2.5 text-pretty text-sm leading-relaxed text-ink-500">{description}</p>
    </motion.div>
  );
}
