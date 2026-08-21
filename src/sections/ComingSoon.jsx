import { motion } from 'framer-motion';
import NewsletterForm from '../components/NewsletterForm.jsx';
import SectionLabel from '../components/SectionLabel.jsx';

export default function ComingSoon() {
  return (
    <section
      id="join"
      aria-labelledby="coming-soon-heading"
      className="relative overflow-hidden bg-ink-900 py-28 sm:py-36"
    >
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[640px] -translate-x-1/2 rounded-full bg-wine-500/20 blur-[130px] animate-pulse-glow"
        aria-hidden="true"
      />

      <div className="container-comrade relative mx-auto max-w-2xl text-center">
        <div className="flex justify-center">
          <SectionLabel align="center" light>
            Coming Soon
          </SectionLabel>
        </div>

        <motion.h2
          id="coming-soon-heading"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mt-7 text-balance font-display text-display-md font-semibold text-cream-50"
        >
          We&rsquo;re building something worth waiting for.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          className="mx-auto mt-5 max-w-md text-base leading-relaxed text-cream-100/70"
        >
          Join us as we explore a new future for everyday personal safety.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.28 }}
          className="mx-auto mt-10 max-w-md"
        >
          <NewsletterForm />
          <p className="mt-5 text-xs text-cream-100/45">No spam. Just meaningful updates from Comrade.</p>
        </motion.div>
      </div>
    </section>
  );
}
