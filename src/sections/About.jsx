import { motion } from 'framer-motion';
import SectionLabel from '../components/SectionLabel.jsx';

export default function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="relative overflow-hidden bg-cream-100 py-28 sm:py-36">
      <div className="container-comrade">
        <SectionLabel>Who We Are</SectionLabel>

        <div className="mt-8 grid grid-cols-1 gap-x-10 gap-y-14 lg:grid-cols-12">
          <motion.h2
            id="about-heading"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="text-display-lg font-display font-semibold text-ink-900 text-balance lg:col-span-7"
          >
            Safety should never be something you have to remember to carry.
          </motion.h2>

          <div className="flex flex-col gap-10 lg:col-span-5 lg:col-start-8 lg:mt-6">
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
              className="text-base leading-relaxed text-ink-600 sm:text-lg"
            >
              Comrade is being built around a simple idea: personal safety should integrate naturally
              into everyday life. We are exploring new ways to bring thoughtful design and intelligent
              technology together in products made for the real world.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
              className="relative border-l-2 border-wine-500 py-1 pl-6"
            >
              <p className="font-display text-xl font-semibold text-ink-900 sm:text-2xl">
                &ldquo;Protection should feel present, not intrusive.&rdquo;
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="relative mx-auto mt-4 hidden h-40 w-40 items-center justify-center sm:flex lg:ml-auto lg:mr-6"
              aria-hidden="true"
            >
              <span className="absolute inset-0 rounded-full border border-ink-900/10" />
              <span className="absolute inset-6 rounded-full border border-wine-500/25" />
              <span className="absolute right-3 top-6 h-3 w-3 rounded-full bg-wine-500 animate-pulse-glow" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
