import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import SectionHeading from '../components/SectionHeading.jsx';

const bgWordStyle = { WebkitTextStroke: '1px rgba(251,243,230,0.22)' };

export default function Vision() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const yProtection = useTransform(scrollYProgress, [0, 1], [-30, 60]);
  const yPresence = useTransform(scrollYProgress, [0, 1], [40, -50]);
  const yFreedom = useTransform(scrollYProgress, [0, 1], [-20, 40]);

  return (
    <section
      id="vision"
      ref={sectionRef}
      aria-labelledby="vision-heading"
      className="relative overflow-hidden bg-ink-900 py-36 sm:py-48"
    >
      <div className="pointer-events-none absolute inset-0 select-none overflow-hidden" aria-hidden="true">
        <motion.span
          style={{ y: yProtection, ...bgWordStyle }}
          className="absolute -left-4 top-[6%] whitespace-nowrap font-display text-display-huge font-semibold leading-none text-cream-50/[0.08]"
        >
          PROTECTION
        </motion.span>
        <motion.span
          style={{ y: yPresence, ...bgWordStyle }}
          className="absolute right-[-2%] top-[42%] whitespace-nowrap font-display text-display-huge font-semibold leading-none text-cream-50/[0.08]"
        >
          PRESENCE
        </motion.span>
        <motion.span
          style={{ y: yFreedom, ...bgWordStyle }}
          className="absolute -left-2 bottom-[2%] whitespace-nowrap font-display text-display-huge font-semibold leading-none text-cream-50/[0.08]"
        >
          FREEDOM
        </motion.span>
      </div>

      <div className="container-comrade relative">
        <div className="max-w-2xl">
          <SectionHeading
            id="vision-heading"
            label="Our Vision"
            heading="A future where safety is seamlessly built into everyday life."
            highlight="safety"
            description="We envision a world where the products you already wear and use can become thoughtful companions, bringing together design, technology, and a stronger sense of confidence."
            light
          />
        </div>
      </div>
    </section>
  );
}
