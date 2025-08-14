
import React from 'react';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import About from '../components/About';
import Products from '../components/Products';
import Differentials from '../components/Differentials';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';

const Index = () => {
  React.useEffect(() => {
    // SEO Meta tags
    document.title = 'Isamar Pescados e Frutos do Mar - Qualidade Premium para sua Cozinha Profissional';
    
    // Meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Isamar Pescados - Distribuição e venda de frutos do mar e pescados no atacado. Camarões, lagostas, peixes frescos. Qualidade premium para restaurantes, buffets e hotéis.');
    }

    // Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', 'Isamar Pescados e Frutos do Mar - Qualidade Premium');
    }

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', 'O parceiro de confiança para sua cozinha profissional. Frutos do mar e pescados premium direto das embarcações.');
    }
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <About />
      <Products />
      <Differentials />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
