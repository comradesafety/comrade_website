import { motion, useScroll, useSpring } from 'framer-motion';

/**
 * Thin fixed progress bar reflecting how far the visitor has scrolled
 * through the page.
 */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 220,
    damping: 32,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed left-0 top-0 z-[60] h-[3px] w-full origin-left bg-wine-500"
      aria-hidden="true"
    />
  );
}
