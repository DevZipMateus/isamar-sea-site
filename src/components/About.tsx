
import React from 'react';
import { Fish, Users, Award, MapPin } from 'lucide-react';

const About = () => {
  return (
    <section id="sobre" className="section-padding bg-white">
      <div className="container-width">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-ocean-800 mb-6">
            Sobre a <span className="gradient-text">Isamar Pescados</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Uma empresa especializada em distribuição e venda de frutos do mar e pescados no atacado, 
            levando qualidade, frescor e confiança aos nossos clientes.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Content */}
          <div>
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-ocean-800 mb-4">Nossa História</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Com uma sólida experiência no mercado, trabalhamos diretamente com parcerias estratégicas 
                junto a embarcações de pesca, o que nos permite ter acesso aos melhores e mais frescos produtos.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Essas parcerias garantem não apenas a rapidez no fornecimento, mas também o controle de 
                qualidade direto na origem, assegurando que cada produto chegue até você pronto para ser 
                utilizado com excelência.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-bold text-ocean-800 mb-4">Nosso Foco</h3>
              <p className="text-gray-600 leading-relaxed">
                Atendemos as necessidades de restaurantes, buffets, hotéis e chefs de cozinha, 
                entregando produtos que fazem a diferença em pratos sofisticados e saborosos.
              </p>
            </div>

            <div className="flex items-center gap-3 text-coral-600 font-semibold text-lg">
              <Fish className="w-6 h-6" />
              "O parceiro de confiança para sua cozinha profissional"
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-ocean-50 p-6 rounded-xl text-center card-hover">
              <div className="flex items-center justify-center w-16 h-16 bg-ocean-gradient rounded-full mb-4 mx-auto">
                <Fish className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-2xl font-bold text-ocean-800 mb-2">Qualidade</h4>
              <p className="text-gray-600">Premium garantida</p>
            </div>

            <div className="bg-coral-50 p-6 rounded-xl text-center card-hover">
              <div className="flex items-center justify-center w-16 h-16 bg-coral-gradient rounded-full mb-4 mx-auto">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-2xl font-bold text-coral-700 mb-2">Parceria</h4>
              <p className="text-gray-600">Direta com embarcações</p>
            </div>

            <div className="bg-coral-50 p-6 rounded-xl text-center card-hover">
              <div className="flex items-center justify-center w-16 h-16 bg-coral-gradient rounded-full mb-4 mx-auto">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-2xl font-bold text-coral-700 mb-2">Experiência</h4>
              <p className="text-gray-600">Sólida no mercado</p>
            </div>

            <div className="bg-ocean-50 p-6 rounded-xl text-center card-hover">
              <div className="flex items-center justify-center w-16 h-16 bg-ocean-gradient rounded-full mb-4 mx-auto">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-2xl font-bold text-ocean-800 mb-2">Entrega</h4>
              <p className="text-gray-600">Rápida e pontual</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
