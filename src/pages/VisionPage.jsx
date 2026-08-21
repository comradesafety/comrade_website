import { usePageTitle } from '../hooks/usePageTitle.js';
import Vision from '../sections/Vision.jsx';
import WhyComrade from '../sections/WhyComrade.jsx';

export default function VisionPage() {
  usePageTitle('Vision');
  return (
    <>
      <Vision />
      <WhyComrade />
    </>
  );
}
