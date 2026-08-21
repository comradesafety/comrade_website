import { Accessibility, EyeOff, Infinity as InfinityIcon, Waypoints } from 'lucide-react';
import SectionHeading from '../components/SectionHeading.jsx';
import FeatureCard from '../components/FeatureCard.jsx';
import { innovationFeatures } from '../data/values.js';

const iconMap = { Waypoints, EyeOff, Accessibility, Infinity: InfinityIcon };

export default function Innovation() {
  return (
    <section id="innovation" aria-labelledby="innovation-heading" className="bg-cream-100 py-28 sm:py-32">
      <div className="container-comrade">
        <SectionHeading
          id="innovation-heading"
          label="How We Build"
          heading="Designed around intelligent protection."
          highlight="intelligent protection"
        />

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {innovationFeatures.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              icon={iconMap[feature.icon]}
              title={feature.title}
              description={feature.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
