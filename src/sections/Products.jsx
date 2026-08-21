import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading.jsx';
import ProductCard from '../components/ProductCard.jsx';
import PrimaryButton from '../components/PrimaryButton.jsx';
import { products } from '../data/products.js';

export default function Products() {
  return (
    <section id="products" aria-labelledby="products-heading" className="bg-cream-200 py-28 sm:py-32">
      <div className="container-comrade">
        <SectionHeading
          id="products-heading"
          label="What We're Exploring"
          heading="The future of safety is taking shape."
          highlight="taking shape"
          description="Comrade is exploring a new generation of everyday products designed with personal safety at their core."
        />

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="mt-14 flex justify-center"
        >
          <PrimaryButton to="/contact" variant="primary">
            Be First to Know
          </PrimaryButton>
        </motion.div>
      </div>
    </section>
  );
}
