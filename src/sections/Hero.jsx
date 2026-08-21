import { motion } from 'framer-motion';
import SectionLabel from '../components/SectionLabel.jsx';
import PrimaryButton from '../components/PrimaryButton.jsx';
import HeroVisual from '../components/HeroVisual.jsx';

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.14, delayChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] } },
};

export default function Hero() {
  return (
    <section
      id="home"
      aria-label="Home"
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-cream-100 pt-28 pb-20"
    >
      <HeroVisual />

      <div className="container-comrade relative">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="max-w-2xl"
        >
          <motion.div variants={item}>
            <SectionLabel>Personal Safety, Reimagined</SectionLabel>
          </motion.div>

          <motion.h1
            variants={item}
            className="mt-7 text-display-xl font-display font-semibold text-ink-900 text-balance"
          >
            Safety that
            <br />
            <span className="text-wine-500">stays</span> with you.
          </motion.h1>

          <motion.p variants={item} className="mt-7 max-w-lg text-base leading-relaxed text-ink-600 sm:text-lg">
            Comrade is rethinking personal safety through intelligent everyday products designed to
            blend naturally into the way you live, move, and explore.
          </motion.p>

          <motion.div variants={item} className="mt-10 flex flex-col gap-4 sm:flex-row">
            <PrimaryButton to="/vision" variant="primary">
              Explore Our Vision
            </PrimaryButton>
            <PrimaryButton to="/products" variant="secondary">
              What&rsquo;s Coming
            </PrimaryButton>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
