import { usePageTitle } from '../hooks/usePageTitle.js';
import ComingSoon from '../sections/ComingSoon.jsx';
import Contact from '../sections/Contact.jsx';

export default function ContactPage() {
  usePageTitle('Contact');
  return (
    <>
      <ComingSoon />
      <Contact />
    </>
  );
}
