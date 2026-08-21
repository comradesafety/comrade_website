import { usePageTitle } from '../hooks/usePageTitle.js';
import Products from '../sections/Products.jsx';
import Innovation from '../sections/Innovation.jsx';

export default function ProductsPage() {
  usePageTitle('Products');
  return (
    <>
      <Products />
      <Innovation />
    </>
  );
}
