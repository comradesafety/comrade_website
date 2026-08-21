import { useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';

const MotionLink = motion.create(Link);

const panelVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1], staggerChildren: 0.06, delayChildren: 0.1 },
  },
  exit: { opacity: 0, transition: { duration: 0.25, ease: [0.16, 1, 0.3, 1] } },
};

const linkVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] } },
};

export default function MobileMenu({ isOpen, onClose, links, activePath, triggerRef }) {
  const firstLinkRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    firstLinkRef.current?.focus();

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
        triggerRef?.current?.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose, triggerRef]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          variants={panelVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
          className="fixed inset-0 z-50 flex flex-col bg-cream-100/98 backdrop-blur-md md:hidden"
        >
          <div className="flex items-center justify-between px-6 py-5">
            <span className="font-display text-sm font-semibold uppercase tracking-label text-ink-900">
              Menu
            </span>
            <button
              type="button"
              onClick={() => {
                onClose();
                triggerRef?.current?.focus();
              }}
              aria-label="Close menu"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-ink-900/10 text-ink-900 transition-colors hover:border-wine-500 hover:text-wine-600"
            >
              <X size={20} aria-hidden="true" />
            </button>
          </div>

          <nav className="flex flex-1 flex-col justify-center gap-2 px-8" aria-label="Mobile">
            {links.map((link, index) => (
              <MotionLink
                key={link.path}
                ref={index === 0 ? firstLinkRef : undefined}
                to={link.path}
                variants={linkVariants}
                onClick={onClose}
                aria-current={activePath === link.path ? 'page' : undefined}
                className={`font-display text-4xl font-semibold py-3 transition-colors ${
                  activePath === link.path ? 'text-wine-600' : 'text-ink-900 hover:text-wine-600'
                }`}
              >
                {link.label}
              </MotionLink>
            ))}
          </nav>

          <motion.div variants={linkVariants} className="px-8 pb-10 pt-4">
            <Link
              to="/contact"
              onClick={onClose}
              className="inline-flex w-full items-center justify-center rounded-full bg-wine-500 px-7 py-4 text-sm font-medium tracking-wideish text-cream-50 transition-colors hover:bg-wine-600"
            >
              Coming Soon
            </Link>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
