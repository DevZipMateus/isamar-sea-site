
import React from 'react';
import { Anchor, Clock, Shield, Truck, Users, Award } from 'lucide-react';

const Differentials = () => {
  const differentials = [
    {
      icon: Anchor,
      title: 'Parcerias Diretas',
      description: 'Trabalhamos diretamente com embarcações confiáveis, garantindo origem e qualidade.',
      color: 'ocean'
    },
    {
      icon: Shield,
      title: 'Qualidade Premium',
      description: 'Produtos selecionados com o mais alto padrão de qualidade do mercado.',
      color: 'coral'
    },
    {
      icon: Truck,
      title: 'Logística Eficiente',
      description: 'Entregas rápidas e pontuais, mantendo o frescor dos produtos.',
      color: 'ocean'
    },
    {
      icon: Users,
      title: 'Atendimento Personalizado',
      description: 'Conhecemos as particularidades do segmento gastronômico e hoteleiro.',
      color: 'coral'
    },
    {
      icon: Clock,
      title: 'Controle de Origem',
      description: 'Controle de qualidade direto na origem, desde a captura até a entrega.',
      color: 'ocean'
    },
    {
      icon: Award,
      title: 'Experiência Comprovada',
      description: 'Sólida experiência no mercado de frutos do mar e pescados.',
      color: 'coral'
    }
  ];

  return (
    <section id="diferenciais" className="section-padding bg-white">
      <div className="container-width">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-ocean-800 mb-6">
            Nossos <span className="gradient-text">Diferenciais</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            O que nos torna únicos no mercado de frutos do mar e pescados. 
            Descubra porque somos a escolha certa para sua cozinha profissional.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {differentials.map((item, index) => {
            const Icon = item.icon;
            const gradientClass = item.color === 'ocean' ? 'bg-ocean-gradient' : 'bg-coral-gradient';
            const bgClass = item.color === 'ocean' ? 'bg-ocean-50' : 'bg-coral-50';
            
            return (
              <div key={index} className={`${bgClass} p-8 rounded-xl card-hover`}>
                <div className={`flex items-center justify-center w-16 h-16 ${gradientClass} rounded-full mb-6`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-ocean-800 mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="bg-hero-gradient rounded-2xl p-12 text-center text-white wave-bg">
          <h3 className="text-3xl font-bold mb-4">
            Pronto para experimentar a diferença?
          </h3>
          <p className="text-xl text-ocean-100 mb-8 max-w-2xl mx-auto">
            Entre em contato conosco e descubra como podemos elevar o padrão 
            da sua cozinha com nossos produtos premium.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-hero bg-white text-ocean-600 hover:bg-gray-100">
              Solicitar Orçamento
            </button>
            <button className="btn-secondary bg-transparent border-white text-white hover:bg-white hover:text-ocean-600">
              Falar no WhatsApp
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Differentials;
