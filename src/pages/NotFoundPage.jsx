import { usePageTitle } from '../hooks/usePageTitle.js';
import PrimaryButton from '../components/PrimaryButton.jsx';

export default function NotFoundPage() {
  usePageTitle('Page Not Found');
  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center px-6 py-28 text-center">
      <span className="font-display text-sm font-medium uppercase tracking-label text-wine-500">404</span>
      <h1 className="mt-5 text-display-md font-display font-semibold text-ink-900">
        This page hasn&rsquo;t been built yet.
      </h1>
      <p className="mt-4 max-w-md text-base leading-relaxed text-ink-500">
        The page you&rsquo;re looking for doesn&rsquo;t exist, or may have moved.
      </p>
      <div className="mt-9">
        <PrimaryButton to="/">Back to Home</PrimaryButton>
      </div>
    </section>
  );
}
