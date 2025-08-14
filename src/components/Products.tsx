
import React from 'react';
import { Fish, Star } from 'lucide-react';

const Products = () => {
  const products = [
    {
      name: 'Camarão Rosa',
      description: 'Inteiro e limpo, premium quality',
      category: 'Camarões',
      image: '🦐',
      popular: true
    },
    {
      name: 'Camarão Vannamei',
      description: 'Inteiro e limpo, sabor excepcional',
      category: 'Camarões',
      image: '🦐',
      popular: true
    },
    {
      name: 'Lagosta',
      description: 'Inteira e cauda, frescor garantido',
      category: 'Lagostas',
      image: '🦞',
      popular: true
    },
    {
      name: 'Filé de Salmão',
      description: 'Premium, corte perfeito',
      category: 'Peixes',
      image: '🐟',
      popular: false
    },
    {
      name: 'Lula Nacional',
      description: 'Fresca, qualidade superior',
      category: 'Lulas',
      image: '🦑',
      popular: false
    },
    {
      name: 'Polvo Nacional',
      description: 'Premium, direto da costa',
      category: 'Polvos',
      image: '🐙',
      popular: true
    },
    {
      name: 'Filé de Tilápia',
      description: 'Fresco, sem espinhas',
      category: 'Peixes',
      image: '🐟',
      popular: false
    },
    {
      name: 'Atum',
      description: 'Premium, ideal para pratos gourmet',
      category: 'Peixes',
      image: '🐟',
      popular: false
    }
  ];

  const categories = ['Todos', 'Camarões', 'Lagostas', 'Peixes', 'Lulas', 'Polvos'];
  const [activeCategory, setActiveCategory] = React.useState('Todos');

  const filteredProducts = activeCategory === 'Todos' 
    ? products 
    : products.filter(product => product.category === activeCategory);

  return (
    <section id="produtos" className="section-padding bg-gray-50">
      <div className="container-width">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-ocean-800 mb-6">
            Nossos <span className="gradient-text">Produtos</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            Oferecemos uma ampla variedade de frutos do mar e pescados premium, 
            sempre frescos e com a qualidade que sua cozinha profissional merece.
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-ocean-gradient text-white shadow-lg'
                    : 'bg-white text-ocean-600 hover:bg-ocean-50 border border-ocean-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg card-hover overflow-hidden">
              <div className="relative p-8 bg-gradient-to-br from-ocean-50 to-coral-50">
                <div className="text-6xl text-center mb-4">{product.image}</div>
                {product.popular && (
                  <div className="absolute top-4 right-4 bg-coral-gradient text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                    <Star className="w-3 h-3" />
                    Popular
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <Fish className="w-4 h-4 text-ocean-500" />
                  <span className="text-sm text-ocean-500 font-medium">{product.category}</span>
                </div>
                <h3 className="text-xl font-bold text-ocean-800 mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                
                <button className="w-full bg-ocean-gradient text-white py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-300">
                  Solicitar Orçamento
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-xl p-8 shadow-lg max-w-2xl mx-auto">
            <Fish className="w-12 h-12 text-coral-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-ocean-800 mb-4">E muito mais!</h3>
            <p className="text-gray-600 mb-6">
              Trabalhamos com diversos outros produtos. Entre em contato conosco para 
              consultar disponibilidade e preços personalizados para seu estabelecimento.
            </p>
            <button className="btn-hero">
              Ver Catálogo Completo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
