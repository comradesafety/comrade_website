import { Bird, HeartHandshake, Lightbulb, Zap } from 'lucide-react';
import SectionHeading from '../components/SectionHeading.jsx';
import PillarCard from '../components/PillarCard.jsx';
import { problemPoints } from '../data/values.js';

const iconMap = { Bird, HeartHandshake, Lightbulb, Zap };

export default function Problem() {
  return (
    <section id="problem" aria-labelledby="problem-heading" className="bg-cream-200 py-28 sm:py-32">
      <div className="container-comrade">
        <SectionHeading
          id="problem-heading"
          heading="Safety should never stand in the way of living."
          description="At Comrade, we believe everyone deserves the freedom to live, explore, and pursue their dreams with confidence and peace of mind."
          align="center"
          size="md"
          divider
        />

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {problemPoints.map((point, index) => (
            <PillarCard
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
