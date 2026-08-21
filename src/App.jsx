import { Route, Routes } from 'react-router-dom';
import { MotionConfig } from 'framer-motion';
import Navbar from './components/Navbar.jsx';
import ScrollProgress from './components/ScrollProgress.jsx';
import ScrollManager from './components/ScrollManager.jsx';
import Footer from './components/Footer.jsx';
import HomePage from './pages/HomePage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import VisionPage from './pages/VisionPage.jsx';
import ProductsPage from './pages/ProductsPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <ScrollManager />
      <ScrollProgress />
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/vision" element={<VisionPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>

      <Footer />
    </MotionConfig>
  );
}
