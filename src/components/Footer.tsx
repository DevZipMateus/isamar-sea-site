
import React from 'react';
import { Fish, Phone, Mail, MapPin, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-ocean-900 text-white">
      <div className="container-width section-padding">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img 
                src="/lovable-uploads/9ef773bd-5af3-4905-8617-933f20d3d7e2.png" 
                alt="Isamar Pescados" 
                className="h-12 w-auto"
              />
            </div>
            <p className="text-ocean-200 leading-relaxed mb-6 max-w-md">
              O parceiro de confiança para sua cozinha profissional. 
              Oferecemos os melhores frutos do mar e pescados com qualidade premium.
            </p>
            <div className="flex items-center gap-2 text-coral-400">
              <Fish className="w-5 h-5" />
              <span className="font-medium">"Qualidade, frescor e confiança"</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Links Rápidos</h4>
            <nav className="space-y-3">
              {[
                { href: '#inicio', label: 'Início' },
                { href: '#sobre', label: 'Sobre' },
                { href: '#produtos', label: 'Produtos' },
                { href: '#diferenciais', label: 'Diferenciais' },
                { href: '#contato', label: 'Contato' }
              ].map((link) => (
                <button
                  key={link.href}
                  onClick={() => {
                    const element = document.querySelector(link.href) as HTMLElement;
                    if (element) {
                      const offsetTop = element.offsetTop - 80;
                      window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                      });
                    }
                  }}
                  className="block text-ocean-200 hover:text-coral-400 transition-colors duration-200"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6">Contato</h4>
            <div className="space-y-4">
              <a 
                href="tel:+5511947573497"
                className="flex items-center gap-3 text-ocean-200 hover:text-coral-400 transition-colors duration-200"
              >
                <Phone className="w-4 h-4" />
                (11) 94757-3497
              </a>
              <a 
                href="mailto:isamarpescados@gmail.com"
                className="flex items-center gap-3 text-ocean-200 hover:text-coral-400 transition-colors duration-200"
              >
                <Mail className="w-4 h-4" />
                isamarpescados@gmail.com
              </a>
              <div className="flex items-center gap-3 text-ocean-200">
                <MapPin className="w-4 h-4" />
                Rua Estevão Porto, 32
              </div>
              <a 
                href="https://www.instagram.com/isamar_pescados?igsh=NWpyNnoxY2g4Z3Bt"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-ocean-200 hover:text-coral-400 transition-colors duration-200"
              >
                <Instagram className="w-4 h-4" />
                @isamar_pescados
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-ocean-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-ocean-300 text-sm">
              © {currentYear} Isamar Pescados e Frutos do Mar. Todos os direitos reservados.
            </p>
            <p className="text-ocean-400 text-sm">
              Desenvolvido com ❤️ para qualidade premium
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
