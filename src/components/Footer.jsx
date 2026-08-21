import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Mail } from 'lucide-react';
import { footerLinks, legalLinks } from '../data/navigation.js';
import { InstagramGlyph } from './SocialIcons.jsx';

const channels = [
  { label: 'comradessafety@gmail.com', href: 'mailto:comradessafety@gmail.com', Icon: Mail },
  { label: '@comradesafe', href: 'https://www.instagram.com/comradesafe', Icon: InstagramGlyph },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-ink-900/10 bg-cream-200">
      <div className="container-comrade pt-12 sm:pt-14">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="text-center font-display text-3xl font-bold uppercase tracking-wideish text-ink-900 sm:text-4xl lg:text-5xl"
        >
          Comrades Born to <span className="text-wine-500">Defy</span>
        </motion.h2>

        <div className="mt-8 grid grid-cols-1 gap-8 border-t border-ink-900/10 pt-8 sm:grid-cols-3 sm:gap-8 lg:mt-9 lg:grid-cols-[1.3fr_1fr_1fr] lg:gap-10 lg:pt-9">
          <div>
            <Link
              to="/"
              className="inline-flex w-fit rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-wine-500"
            >
              <img src="/assets/logo/comrade-logo.png" alt="Comrade — Comrades Born to Defy" className="h-20 w-auto sm:h-24 object-contain" />
            </Link>
            <p className="mt-4 max-w-[26ch] text-sm leading-relaxed text-ink-500">
               Personal safety, reimagined for the way you actually live.
            </p>
            <div className="mt-5 flex items-center gap-3">
              <a
                href="https://www.instagram.com/comradesafe"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Comrade on Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-ink-900/10 text-ink-700 transition-colors hover:border-wine-500 hover:text-wine-600"
              >
                <InstagramGlyph size={16} />
              </a>
            </div>
          </div>

          <div>
            <span className="text-xs font-medium uppercase tracking-label text-wine-600">Navigate</span>
            <nav aria-label="Footer" className="mt-4 flex flex-col items-start gap-2.5">
              {footerLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-sm text-ink-600 transition-colors hover:text-wine-600"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <span className="text-xs font-medium uppercase tracking-label text-wine-600">Get in Touch</span>
            <div className="mt-4 flex flex-col items-start gap-2.5">
              {channels.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="inline-flex items-center gap-2.5 text-sm text-ink-600 transition-colors hover:text-wine-600"
                >
                  <Icon size={15} className="text-ink-400" aria-hidden="true" />
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-9 flex flex-col-reverse items-center gap-4 border-t border-ink-900/10 py-6 sm:flex-row sm:justify-between">
          <p className="text-xs text-ink-500">© {year} Comrade. All rights reserved.</p>

          <div className="flex items-center gap-5">
            {legalLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs text-ink-500 underline-offset-4 transition-colors hover:text-wine-600 hover:underline"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
