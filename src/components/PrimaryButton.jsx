import { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

const MotionLink = motion.create(Link);

const variantClasses = {
  primary: 'bg-wine-500 text-cream-50 hover:bg-wine-600 shadow-wine border border-wine-500',
  secondary: 'bg-transparent text-ink-900 border border-ink-900/15 hover:border-wine-500 hover:text-wine-600',
  'secondary-light': 'bg-transparent text-cream-50 border border-cream-50/30 hover:border-cream-50 hover:bg-cream-50/5',
  ghost: 'bg-transparent text-ink-900 border border-transparent hover:bg-ink-900/5',
};

const MAGNETIC_RANGE = 10;

/**
 * Shared CTA button used across the site. Renders a client-side route link
 * when `to` is given (page navigation), a plain anchor when `href` is given
 * (same-page hash anchors or external links), or a native button otherwise
 * (form submit, generic actions). Includes a subtle magnetic hover effect
 * that nudges the button toward the cursor, disabled for reduced-motion
 * users.
 */
export default function PrimaryButton({
  children,
  to,
  href,
  onClick,
  type = 'button',
  variant = 'primary',
  icon: Icon = ArrowUpRight,
  showIcon = true,
  className = '',
  ...rest
}) {
  const ref = useRef(null);
  const [reduceMotion] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 20, mass: 0.5 });
  const springY = useSpring(y, { stiffness: 300, damping: 20, mass: 0.5 });

  const handleMouseMove = (event) => {
    if (reduceMotion || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const relX = event.clientX - (rect.left + rect.width / 2);
    const relY = event.clientY - (rect.top + rect.height / 2);
    x.set((relX / rect.width) * MAGNETIC_RANGE);
    y.set((relY / rect.height) * MAGNETIC_RANGE);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const classes = `group relative inline-flex items-center justify-center gap-2.5 rounded-full px-7 py-3.5 text-sm font-medium tracking-wideish transition-colors duration-300 ease-premium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-wine-500 ${variantClasses[variant]} ${className}`;

  const content = (
    <>
      <span>{children}</span>
      {showIcon && Icon && (
        <Icon
          size={16}
          strokeWidth={2}
          className="transition-transform duration-300 ease-premium group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          aria-hidden="true"
        />
      )}
    </>
  );

  const sharedProps = {
    ...rest,
    ref,
    className: classes,
    style: { x: springX, y: springY },
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
    whileTap: { scale: 0.96 },
  };

  if (to) {
    return (
      <MotionLink to={to} onClick={onClick} {...sharedProps}>
        {content}
      </MotionLink>
    );
  }

  if (href) {
    return (
      <motion.a href={href} onClick={onClick} {...sharedProps}>
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button type={type} onClick={onClick} {...sharedProps}>
      {content}
    </motion.button>
  );
}
