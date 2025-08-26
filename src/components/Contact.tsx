import React from 'react';
import { Phone, Mail, MapPin, Clock, Instagram } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: 'Telefone',
      info: '(11) 94757-3497 / (11) 94755-8918',
      link: 'tel:+5511947573497',
      color: 'ocean'
    },
    {
      icon: Mail,
      title: 'E-mail',
      info: 'isamarpescados@gmail.com',
      link: 'mailto:isamarpescados@gmail.com',
      color: 'coral'
    },
    {
      icon: MapPin,
      title: 'Endereço',
      info: 'Rua Estevão Porto, 32',
      link: 'https://maps.google.com/?q=Rua+Estevão+Porto,+32',
      color: 'ocean'
    },
    {
      icon: Instagram,
      title: 'Instagram',
      info: '@isamar_pescados',
      link: 'https://www.instagram.com/isamar_pescados?igsh=NWpyNnoxY2g4Z3Bt',
      color: 'coral'
    }
  ];

  return (
    <section id="contato" className="section-padding bg-gray-50">
      <div className="container-width">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-ocean-800 mb-6">
            Entre em <span className="gradient-text">Contato</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Estamos prontos para atender sua cozinha profissional com os melhores 
            frutos do mar e pescados. Fale conosco e solicite seu orçamento.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold text-ocean-800 mb-8">Informações de Contato</h3>
            
            <div className="space-y-6 mb-8">
              {contactInfo.map((item, index) => {
                const Icon = item.icon;
                const gradientClass = item.color === 'ocean' ? 'bg-ocean-gradient' : 'bg-coral-gradient';
                
                return (
                  <a
                    key={index}
                    href={item.link}
                    target={item.title === 'Instagram' ? '_blank' : '_self'}
                    rel={item.title === 'Instagram' ? 'noopener noreferrer' : ''}
                    className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 card-hover"
                  >
                    <div className={`flex items-center justify-center w-12 h-12 ${gradientClass} rounded-full`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-ocean-800">{item.title}</h4>
                      <p className="text-gray-600">{item.info}</p>
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Business Hours */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center justify-center w-12 h-12 bg-ocean-gradient rounded-full">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-xl font-bold text-ocean-800">Horário de Atendimento</h4>
              </div>
              <div className="space-y-2 text-gray-600">
                <p><span className="font-medium">Segunda à Sexta:</span> 8h às 18h</p>
                <p><span className="font-medium">Sábado:</span> 8h às 14h</p>
                <p><span className="font-medium">Domingo:</span> Fechado</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-ocean-800 mb-6">Solicite seu Orçamento</h3>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Nome</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ocean-500 focus:border-transparent transition-all duration-200"
                      placeholder="Seu nome"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Telefone</label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ocean-500 focus:border-transparent transition-all duration-200"
                      placeholder="Seu telefone"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">E-mail</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ocean-500 focus:border-transparent transition-all duration-200"
                    placeholder="Seu e-mail"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Empresa</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ocean-500 focus:border-transparent transition-all duration-200"
                    placeholder="Nome da empresa"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Produtos de Interesse</label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ocean-500 focus:border-transparent transition-all duration-200">
                    <option value="">Selecione os produtos</option>
                    <option value="camarao">Camarões</option>
                    <option value="lagosta">Lagostas</option>
                    <option value="peixes">Peixes</option>
                    <option value="lulas">Lulas</option>
                    <option value="polvos">Polvos</option>
                    <option value="varios">Vários produtos</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Mensagem</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ocean-500 focus:border-transparent transition-all duration-200 resize-none"
                    placeholder="Conte-nos mais sobre suas necessidades..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full btn-hero justify-center"
                >
                  Enviar Solicitação
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
