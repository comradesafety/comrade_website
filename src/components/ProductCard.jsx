import { motion } from 'framer-motion';
import ProductVisual from './ProductVisual.jsx';

const badgeClasses = {
  solid: 'bg-wine-500 text-cream-50',
  outline: 'border border-wine-500/50 text-wine-600',
};

export default function ProductCard({ product, index = 0 }) {
  const { name, subtitle, status, statusTone, visual } = product;

  return (
    <motion.article
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1], delay: index * 0.12 }}
      className="group relative flex flex-col overflow-hidden rounded-3xl border border-ink-900/10 bg-cream-50/70 transition-all duration-300 ease-premium hover:-translate-y-2 hover:border-wine-500/35 hover:shadow-card"
    >
      <div className="relative aspect-[6/5] overflow-hidden bg-gradient-to-b from-cream-200/70 to-cream-200/20">
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-wine-500/20 blur-3xl transition-opacity duration-500 group-hover:opacity-80"
          aria-hidden="true"
        />
        <div className="relative flex h-full w-full items-center justify-center p-8">
          <ProductVisual type={visual} />
        </div>

        <span
          className={`absolute left-5 top-5 rounded-full px-3.5 py-1.5 text-[0.65rem] font-semibold uppercase tracking-label ${badgeClasses[statusTone]}`}
        >
          {status}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-7 sm:p-8">
        <h3 className="font-display text-2xl font-semibold text-ink-900">{name}</h3>
        <p className="mt-2 text-sm leading-relaxed text-ink-500">{subtitle}</p>
      </div>
    </motion.article>
  );
}
