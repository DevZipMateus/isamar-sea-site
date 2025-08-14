
import React from 'react';
import { ArrowRight, Fish, Award, Truck } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contato');
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  const scrollToProducts = () => {
    const element = document.querySelector('#produtos');
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center bg-hero-gradient overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
      
      <div className="container-width relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-white animate-fade-in">
            <div className="flex items-center gap-2 mb-6">
              <Fish className="w-8 h-8 text-coral-400" />
              <span className="text-coral-300 font-medium">Qualidade Premium</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Frutos do Mar
              <span className="block gradient-text">Frescos e Premium</span>
            </h1>
            
            <p className="text-xl text-ocean-100 mb-8 leading-relaxed max-w-xl">
              O parceiro de confiança para sua cozinha profissional. Oferecemos os melhores pescados e frutos do mar com qualidade garantida direto das embarcações.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mb-10">
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-coral-500/20 rounded-full mb-2 mx-auto">
                  <Fish className="w-6 h-6 text-coral-300" />
                </div>
                <div className="text-2xl font-bold text-white">15+</div>
                <div className="text-sm text-ocean-200">Tipos de Produtos</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-coral-500/20 rounded-full mb-2 mx-auto">
                  <Award className="w-6 h-6 text-coral-300" />
                </div>
                <div className="text-2xl font-bold text-white">100%</div>
                <div className="text-sm text-ocean-200">Qualidade</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-coral-500/20 rounded-full mb-2 mx-auto">
                  <Truck className="w-6 h-6 text-coral-300" />
                </div>
                <div className="text-2xl font-bold text-white">24h</div>
                <div className="text-sm text-ocean-200">Entrega Rápida</div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button onClick={scrollToProducts} className="btn-hero">
                Ver Produtos
                <ArrowRight className="w-5 h-5" />
              </button>
              <button onClick={scrollToContact} className="btn-secondary">
                Solicitar Orçamento
              </button>
            </div>
          </div>

          {/* Image */}
          <div className="relative lg:ml-8 animate-fade-in">
            <div className="relative">
              <img
                src="/lovable-uploads/c4520a86-0065-46dc-9433-809ef341a63b.png"
                alt="Isamar Pescados - Logo"
                className="w-full max-w-md mx-auto animate-float"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ocean-600/20 to-transparent rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg className="w-full h-24 text-white" fill="currentColor" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
