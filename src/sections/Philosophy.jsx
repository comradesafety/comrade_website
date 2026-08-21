import { BadgeCheck, Feather, Waves } from 'lucide-react';
import SectionHeading from '../components/SectionHeading.jsx';
import ValueCard from '../components/ValueCard.jsx';
import { philosophyPoints } from '../data/values.js';

const iconMap = { Waves, BadgeCheck, Feather };

export default function Philosophy() {
  return (
    <section id="philosophy" aria-labelledby="philosophy-heading" className="bg-cream-100 py-28 sm:py-32">
      <div className="container-comrade">
        <SectionHeading
          id="philosophy-heading"
          label="Our Philosophy"
          heading="How Comrade Thinks"
          align="center"
          size="md"
        />

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-6 lg:gap-8">
          {philosophyPoints.map((point, index) => (
            <ValueCard
              key={point.title}
              icon={iconMap[point.icon]}
              title={point.title}
              description={point.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
