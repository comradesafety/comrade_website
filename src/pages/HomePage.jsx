import { usePageTitle } from '../hooks/usePageTitle.js';
import Hero from '../sections/Hero.jsx';

export default function HomePage() {
  usePageTitle('Comrades Born to Defy');
  return <Hero />;
}
