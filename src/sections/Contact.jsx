import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import SectionHeading from '../components/SectionHeading.jsx';
import { InstagramGlyph } from '../components/SocialIcons.jsx';

const channels = [
  {
    label: 'Email',
    value: 'comradessafety@gmail.com',
    href: 'mailto:comradessafety@gmail.com',
    Icon: Mail,
  },
  {
    label: 'Instagram',
    value: '@comradesafe',
    href: 'https://www.instagram.com/comradesafe',
    Icon: InstagramGlyph,
  },
];

export default function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-heading" className="bg-cream-100 py-28 sm:py-32">
      <div className="container-comrade">
        <SectionHeading
          id="contact-heading"
          label="Get in Touch"
          heading="Let&rsquo;s start a conversation."
          description="Have a question, collaboration idea, or want to learn more about Comrade? We&rsquo;d love to hear from you."
          align="center"
        />

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-5 sm:grid-cols-2">
          {channels.map(({ label, value, href, Icon }, index) => (
            <motion.a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 }}
              className="flex flex-col items-center gap-3 rounded-2xl border border-ink-900/10 bg-cream-50/60 px-6 py-9 text-center transition-all duration-300 hover:border-wine-500/35 hover:shadow-subtle hover:-translate-y-0.5"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-wine-500/25 text-wine-600">
                <Icon size={18} aria-hidden="true" />
              </span>
              <span className="mt-1 text-xs font-medium uppercase tracking-label text-ink-500">{label}</span>
              <span className="text-sm font-medium text-ink-900">{value}</span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
