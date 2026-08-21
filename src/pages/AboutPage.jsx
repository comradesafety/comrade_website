import { usePageTitle } from '../hooks/usePageTitle.js';
import About from '../sections/About.jsx';
import Problem from '../sections/Problem.jsx';
import Philosophy from '../sections/Philosophy.jsx';

export default function AboutPage() {
  usePageTitle('About');
  return (
    <>
      <About />
      <Problem />
      <Philosophy />
    </>
  );
}
