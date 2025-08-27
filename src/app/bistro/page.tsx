"use client";

// src/pages/Bistro.tsx
import { useState } from "react";
import {
  ChefHat,
  Utensils,
  Heart,
  Download,
  Phone,
  Clock,
  Star,
} from "lucide-react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  category: "Pratos Principais" | "Petiscos" | "Sobremesas" | "Bebidas";
  image: string;
  featured?: boolean;
}

const menuItems: MenuItem[] = [
  {
    id: "1",
    name: "Moqueca Baiana Tradicional",
    description:
      "Peixe fresco no leite de coco com dendê, pimentões e coentro. Acompanha farofa de dendê e arroz de jasmim.",
    price: "R$ 45,00",
    category: "Pratos Principais",
    image:
      "https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    featured: true,
  },
  {
    id: "2",
    name: "Bobó de Camarão",
    description:
      "Cremoso bobó de mandioca com camarões frescos, leite de coco e temperos especiais da casa.",
    price: "R$ 38,00",
    category: "Pratos Principais",
    image:
      "https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    featured: true,
  },
  {
    id: "3",
    name: "Acarajé Gourmet",
    description:
      "Acarajé artesanal recheado com vatapá, caruru, camarão seco e pimenta de cheiro.",
    price: "R$ 18,00",
    category: "Petiscos",
    image:
      "https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "4",
    name: "Cocada de Forno Colaboraê",
    description:
      "Sobremesa exclusiva da casa com coco fresco, leite condensado e toque de canela.",
    price: "R$ 12,00",
    category: "Sobremesas",
    image:
      "https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "5",
    name: "Caipirinha de Cajá",
    description:
      "Drink refrescante com cachaça artesanal, cajá fresco e açúcar mascavo.",
    price: "R$ 16,00",
    category: "Bebidas",
    image:
      "https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "6",
    name: "Casquinha de Siri",
    description:
      "Tradicional casquinha com siri catado na hora, temperos baianos e farofa crocante.",
    price: "R$ 22,00",
    category: "Petiscos",
    image:
      "https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
];

const Bistro = () => {
  return (
    <div className="min-h-screen section-light">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div>
                <div className="mb-6">
                  <span
                    className="inline-block px-4 py-2 rounded-full font-body text-sm font-medium text-white"
                    style={{ backgroundColor: "#ff5e5b" }}
                  >
                    BISTRÔ COLABORAÊ
                  </span>
                </div>

                <h1
                  className="font-display font-bold text-5xl md:text-6xl mb-6"
                  style={{ color: "#022744" }}
                >
                  Sabores que <br />
                  <span style={{ color: "#ff5e5b" }}>contam histórias</span>
                </h1>

                <p className="font-body text-lg text-gray-600 mb-8 leading-relaxed">
                  Uma jornada gastronômica pelas tradições baianas, onde cada
                  prato carrega o sabor autêntico da nossa terra e o carinho de
                  quem prepara com paixão.
                </p>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <button
                    className="font-display font-bold py-4 px-8 rounded-lg transition-colors text-white hover:opacity-90 flex items-center gap-2 justify-center"
                    style={{ backgroundColor: "#022744" }}
                  >
                    <Download className="w-5 h-5" />
                    Baixar Cardápio Completo
                  </button>
                  <button
                    className="bg-transparent border-2 font-display font-bold py-4 px-8 rounded-lg transition-colors flex items-center gap-2 justify-center hover:bg-gray-50"
                    style={{ borderColor: "#022744", color: "#022744" }}
                  >
                    <Phone className="w-5 h-5" />
                    (71) 99999-9999
                  </button>
                </div>

                {/* Opening Hours */}
                <div className="flex items-center gap-2 text-gray-600">
                  <Clock className="w-5 h-5" style={{ color: "#9bd60c" }} />
                  <span className="font-body">
                    Ter-Dom: 12h às 00h | Seg: Fechado
                  </span>
                </div>
              </div>

              {/* Right Image */}
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Interior do Bistrô Colaboraê"
                    className="w-full h-96 object-cover"
                  />
                </div>

                {/* Review Card */}
                <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg max-w-xs">
                  <div className="flex gap-1 mb-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className="w-4 h-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <p className="font-body text-sm text-gray-800 mb-2">
                    A melhor moqueca do Rio Vermelho!
                  </p>
                  <p className="font-body text-xs text-gray-500">
                    Maria Santos
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h2
              className="font-display font-bold text-4xl mb-6"
              style={{ color: "#022744" }}
            >
              Nossa Filosofia Gastronômica
            </h2>
            <p className="font-body text-lg text-gray-600 max-w-3xl mx-auto mb-16">
              Cada prato é uma celebração da rica cultura culinária baiana,
              preparado com técnicas tradicionais e ingredientes selecionados.
            </p>

            <div className="grid md:grid-cols-3 gap-12">
              <div className="text-center">
                <div
                  className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "rgba(155, 214, 12, 0.1)" }}
                >
                  <ChefHat className="w-10 h-10" style={{ color: "#9bd60c" }} />
                </div>
                <h3
                  className="font-display font-bold text-xl mb-4"
                  style={{ color: "#022744" }}
                >
                  Chef Especializado
                </h3>
                <p className="font-body text-gray-600">
                  Comando do Chef Baiano com 15 anos de experiência na culinária
                  regional
                </p>
              </div>

              <div className="text-center">
                <div
                  className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "rgba(155, 214, 12, 0.1)" }}
                >
                  <Utensils
                    className="w-10 h-10"
                    style={{ color: "#9bd60c" }}
                  />
                </div>
                <h3
                  className="font-display font-bold text-xl mb-4"
                  style={{ color: "#022744" }}
                >
                  Ingredientes Frescos
                </h3>
                <p className="font-body text-gray-600">
                  Selecionamos os melhores ingredientes direto dos produtores
                  locais
                </p>
              </div>

              <div className="text-center">
                <div
                  className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "rgba(155, 214, 12, 0.1)" }}
                >
                  <Heart className="w-10 h-10" style={{ color: "#9bd60c" }} />
                </div>
                <h3
                  className="font-display font-bold text-xl mb-4"
                  style={{ color: "#022744" }}
                >
                  Receitas Tradicionais
                </h3>
                <p className="font-body text-gray-600">
                  Pratos preparados seguindo receitas ancestrais passadas por
                  gerações
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Items Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {menuItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                >
                  {item.featured && (
                    <div
                      className="text-white text-center py-3 text-sm font-bold flex items-center justify-center gap-2"
                      style={{ backgroundColor: "#ff5e5b" }}
                    >
                      <Star className="w-4 h-4 fill-current" />
                      DESTAQUE DA CASA
                    </div>
                  )}

                  <div className="relative">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 right-4">
                      <span
                        className="bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full font-display font-bold"
                        style={{ color: "#022744" }}
                      >
                        {item.price}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="mb-3">
                      <span
                        className="px-3 py-1 rounded-full text-xs font-medium"
                        style={{ backgroundColor: "#022744", color: "white" }}
                      >
                        {item.category}
                      </span>
                    </div>

                    <h3
                      className="font-display font-bold text-xl mb-3"
                      style={{ color: "#022744" }}
                    >
                      {item.name}
                    </h3>

                    <p className="font-body text-gray-600 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <button
              className="font-display font-bold py-4 px-8 rounded-lg transition-colors text-white hover:opacity-90 flex items-center gap-2 mx-auto"
              style={{ backgroundColor: "#022744" }}
            >
              <Download className="w-5 h-5" />
              Ver Cardápio Completo (PDF)
            </button>
          </div>
        </div>
      </section>

      {/* Reservation Section */}
      <section className="py-16" style={{ backgroundColor: "#022744" }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display font-bold text-4xl text-white mb-6">
              Reserve sua Mesa
            </h2>
            <p className="font-body text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Garante seu lugar na nossa mesa e desfrute de uma experiência
              gastronômica única no coração do Rio Vermelho.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <button
                className="font-display font-bold py-4 px-8 rounded-lg transition-colors text-white hover:opacity-90 flex items-center gap-2 justify-center"
                style={{ backgroundColor: "#ff5e5b" }}
              >
                <Phone className="w-5 h-5" />
                Ligar: (71) 99999-9999
              </button>
              <button className="bg-transparent border-2 border-white/30 text-white hover:bg-white/10 font-display font-bold py-4 px-8 rounded-lg transition-colors flex items-center gap-2 justify-center">
                WhatsApp: Reservar Mesa
              </button>
            </div>

            <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl max-w-2xl mx-auto">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Clock className="w-5 h-5 text-yellow-400" />
                <span className="font-body text-white/90 text-sm">
                  Dica: Reservas com antecedência garantem melhor atendimento
                </span>
              </div>
              <p className="font-body text-white/80 text-sm">
                ⚡ Funcionamento: Ter-Dom 12h-00h | Seg: Fechado
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Bistro;
