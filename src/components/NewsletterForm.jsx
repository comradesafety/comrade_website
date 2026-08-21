import { useId, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { AlertCircle, ArrowRight, CheckCircle2, Loader2, Mail } from 'lucide-react';

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Frontend-only newsletter signup form with validation and an elegant
 * success state. `onSubscribe` is the integration point for a real backend
 * or newsletter API — swap the mock implementation below for a fetch/axios
 * call to your provider (e.g. POST to /api/subscribe or a Mailchimp/Klaviyo
 * endpoint). It receives the email and should return a Promise.
 */
const defaultOnSubscribe = (email) =>
  new Promise((resolve) => {
    setTimeout(() => resolve({ ok: true, email }), 900);
  });

export default function NewsletterForm({ onSubscribe = defaultOnSubscribe, className = '' }) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [errorMessage, setErrorMessage] = useState('');
  const inputId = useId();
  const statusId = useId();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const trimmed = email.trim();

    if (!trimmed) {
      setStatus('error');
      setErrorMessage('Enter your email to join the journey.');
      return;
    }

    if (!EMAIL_PATTERN.test(trimmed)) {
      setStatus('error');
      setErrorMessage('That email address doesn’t look quite right.');
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    try {
      await onSubscribe(trimmed);
      setStatus('success');
    } catch (error) {
      setStatus('error');
      setErrorMessage('Something went wrong. Please try again.');
    }
  };

  const handleChange = (event) => {
    setEmail(event.target.value);
    if (status === 'error') {
      setStatus('idle');
      setErrorMessage('');
    }
  };

  const handleReset = () => {
    setEmail('');
    setStatus('idle');
    setErrorMessage('');
  };

  return (
    <div className={className}>
      <AnimatePresence mode="wait">
        {status === 'success' ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            role="status"
            className="flex flex-col items-center gap-3 rounded-2xl border border-wine-500/25 bg-wine-500/5 px-6 py-8 text-center sm:flex-row sm:justify-center sm:text-left"
          >
            <CheckCircle2 size={22} className="shrink-0 text-wine-600" aria-hidden="true" />
            <p className="text-sm text-ink-700">
              You&rsquo;re on the list. We&rsquo;ll be in touch as Comrade takes shape.
            </p>
            <button
              type="button"
              onClick={handleReset}
              className="text-sm font-medium text-wine-600 underline underline-offset-4 hover:text-wine-700 sm:ml-2"
            >
              Use a different email
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            onSubmit={handleSubmit}
            noValidate
            className="w-full"
          >
            <div className="flex flex-col gap-3 sm:flex-row">
              <div className="relative flex-1">
                <label htmlFor={inputId} className="sr-only">
                  Email address
                </label>
                <Mail
                  size={18}
                  className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-cream-100/50"
                  aria-hidden="true"
                />
                <input
                  id={inputId}
                  type="email"
                  inputMode="email"
                  autoComplete="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={handleChange}
                  aria-invalid={status === 'error'}
                  aria-describedby={status === 'error' ? statusId : undefined}
                  className="w-full rounded-full border border-cream-100/25 bg-cream-100/5 py-4 pl-12 pr-5 text-sm text-cream-50 placeholder:text-cream-100/40 outline-none transition-colors duration-300 focus:border-wine-300 focus-visible:outline-2 focus-visible:outline-wine-300"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-wine-500 px-7 py-4 text-sm font-medium tracking-wideish text-cream-50 transition-colors duration-300 ease-premium hover:bg-wine-600 disabled:cursor-wait disabled:opacity-70"
              >
                {status === 'loading' ? (
                  <Loader2 size={16} className="animate-spin" aria-hidden="true" />
                ) : (
                  <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden="true" />
                )}
                <span>{status === 'loading' ? 'Joining…' : 'Join the Journey'}</span>
              </button>
            </div>

            <div id={statusId} aria-live="polite" className="min-h-[1.5rem] pt-3">
              {status === 'error' && (
                <p role="alert" className="flex items-center gap-1.5 text-sm text-wine-200">
                  <AlertCircle size={14} aria-hidden="true" />
                  {errorMessage}
                </p>
              )}
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
