import { motion } from 'framer-motion';
import SectionLabel from '../components/SectionLabel.jsx';

export default function WhyComrade() {
  return (
    <section
      id="why-comrade"
      aria-labelledby="why-comrade-heading"
      className="relative overflow-hidden bg-cream-200 py-28 sm:py-36"
    >
      <div className="container-comrade relative">
        <div className="flex justify-center">
          <SectionLabel align="center">Why Comrade</SectionLabel>
        </div>

        <motion.h2
          id="why-comrade-heading"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mt-7 max-w-3xl text-balance text-center font-display text-display-lg font-semibold text-ink-900"
        >
          Because safety should feel <span className="text-wine-500">invisible</span>, until you need
          it.
        </motion.h2>
      </div>
    </section>
  );
}
