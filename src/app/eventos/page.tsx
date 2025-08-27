"use client";

// src/pages/Eventos.tsx
import { useState } from "react";
import { Calendar, Clock, MapPin, ChevronDown, Ticket } from "lucide-react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  image: string;
  description: string;
  category: string;
  price: string;
  status: "available" | "sold-out" | "coming-soon";
}

const mockEvents: Event[] = [
  {
    id: "1",
    title: "Noite Eletrônica",
    date: "15 SET 2024",
    time: "22:00",
    location: "Colaboraê",
    image:
      "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description:
      "Uma noite inesquecível com os melhores DJs da cena eletrônica baiana. Prepare-se para uma viagem sonora única.",
    category: "eletronica",
    price: "R$ 30,00",
    status: "available",
  },
  {
    id: "2",
    title: "Samba de Roda",
    date: "22 SET 2024",
    time: "20:00",
    location: "Colaboraê",
    image:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description:
      "Tradição e cultura baiana em uma noite especial de samba de roda com mestres da música tradicional.",
    category: "samba",
    price: "R$ 25,00",
    status: "available",
  },
  {
    id: "3",
    title: "Jazz & Blues Night",
    date: "29 SET 2024",
    time: "21:00",
    location: "Colaboraê",
    image:
      "https://images.unsplash.com/photo-1415201364774-f6f0bb35f28f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description:
      "Os clássicos do jazz e blues em uma atmosfera intimista com músicos renomados.",
    category: "jazz",
    price: "R$ 35,00",
    status: "coming-soon",
  },
  {
    id: "4",
    title: "Axé Music Festival",
    date: "05 OUT 2024",
    time: "19:00",
    location: "Colaboraê",
    image:
      "https://images.unsplash.com/photo-1506157786151-b8491531f063?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description:
      "Celebração da música baiana com grandes nomes do axé music em uma festa inesquecível.",
    category: "axe",
    price: "R$ 40,00",
    status: "sold-out",
  },
  {
    id: "5",
    title: "Rap Nacional",
    date: "12 OUT 2024",
    time: "21:30",
    location: "Colaboraê",
    image:
      "https://images.unsplash.com/photo-1571266028243-d220e99ac909?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description:
      "Os melhores MCs do rap nacional em uma noite de rimas, batidas e muita energia.",
    category: "rap",
    price: "R$ 28,00",
    status: "available",
  },
  {
    id: "6",
    title: "Bossa Nova Experience",
    date: "19 OUT 2024",
    time: "20:30",
    location: "Colaboraê",
    image:
      "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description:
      "Uma homenagem à bossa nova com interpretações sofisticadas dos grandes clássicos.",
    category: "bossa",
    price: "R$ 32,00",
    status: "available",
  },
];

const categories = [
  { id: "todos", label: "Todos" },
  { id: "eletronica", label: "Eletrônica" },
  { id: "samba", label: "Samba" },
  { id: "jazz", label: "Jazz" },
  { id: "axe", label: "Axé" },
  { id: "rap", label: "Rap" },
  { id: "bossa", label: "Bossa Nova" },
];

const Eventos = () => {
  const [selectedCategory, setSelectedCategory] = useState("todos");

  const filteredEvents =
    selectedCategory === "todos"
      ? mockEvents
      : mockEvents.filter((event) => event.category === selectedCategory);

  const getStatusBadge = (status: Event["status"]) => {
    switch (status) {
      case "available":
        return (
          <span className="bg-colaborae-green text-white px-3 py-1 rounded-full text-xs font-medium">
            Disponível
          </span>
        );
      case "sold-out":
        return (
          <span className="bg-colaborae-coral text-white px-3 py-1 rounded-full text-xs font-medium">
            Esgotado
          </span>
        );
      case "coming-soon":
        return (
          <span className="bg-colaborae-cyan text-white px-3 py-1 rounded-full text-xs font-medium">
            Em breve
          </span>
        );
    }
  };

  return (
    <div className="min-h-screen section-events">
      <Navigation />

      {/* Header Section - Centralizado */}
      <section className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="font-display font-bold text-5xl md:text-6xl text-white mb-6">
              Próximos <span className="neon-cyan">Eventos</span>
            </h1>
            <p className="font-body text-xl text-white/80 max-w-3xl mx-auto">
              Mergulhe na vibrante cena cultural do Rio Vermelho. Cada evento é
              uma experiência única que conecta pessoas através da música e da
              arte.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section - Centralizado */}
      <section className="pb-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center gap-4 mb-8">
              <ChevronDown className="w-5 h-5 text-colaborae-cyan" />
              <h2 className="font-display font-semibold text-white text-lg">
                Filtrar por categoria:
              </h2>
            </div>

            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-2 rounded-full font-body font-medium transition-all ${
                    selectedCategory === category.id
                      ? "bg-colaborae-cyan text-white shadow-lg shadow-colaborae-cyan/25"
                      : "bg-white/10 text-white/70 hover:bg-white/20 border border-white/20"
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Events Grid - Cards com mesmo tamanho */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredEvents.map((event) => (
                <div
                  key={event.id}
                  className="glass-card p-4 hover:bg-white/15 transition-all duration-300 group h-full flex flex-col max-w-sm mx-auto"
                >
                  {/* Event Image - Tamanho fixo */}
                  <div className="relative mb-4 overflow-hidden rounded-xl">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 right-3">
                      {getStatusBadge(event.status)}
                    </div>
                    {/* Purple gradient overlay like the design */}
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 via-purple-600/30 to-transparent" />
                  </div>

                  {/* Event Title */}
                  <h3 className="font-display font-bold text-xl text-white mb-3">
                    {event.title}
                  </h3>

                  {/* Event Description - Altura fixa */}
                  <p className="font-body text-white/70 text-sm mb-4 leading-relaxed flex-grow">
                    {event.description}
                  </p>

                  {/* Event Details */}
                  <div className="space-y-2 mb-4">
                    <div
                      className="flex items-center gap-2"
                      style={{ color: "#9bd60c" }}
                    >
                      <Calendar className="w-4 h-4" />
                      <span className="font-body text-sm">{event.date}</span>
                    </div>
                    <div
                      className="flex items-center gap-2"
                      style={{ color: "#ff5e5b" }}
                    >
                      <Clock className="w-4 h-4" />
                      <span className="font-body text-sm">{event.time}</span>
                    </div>
                    <div
                      className="flex items-center gap-2"
                      style={{ color: "#00d1ff" }}
                    >
                      <MapPin className="w-4 h-4" />
                      <span className="font-body text-sm">
                        {event.location}
                      </span>
                    </div>
                  </div>

                  {/* Ver Detalhes Button */}
                  <div className="mb-3">
                    <button className="w-full bg-white hover:bg-gray-100 text-black font-body py-2 px-4 rounded-lg transition-colors">
                      Ver detalhes
                    </button>
                  </div>

                  {/* Action Buttons */}
                  <div className="mt-auto">
                    {event.status === "available" ? (
                      <button
                        className="w-full font-display font-bold py-3 px-4 rounded-lg transition-colors flex items-center justify-center gap-2 text-white hover:opacity-90"
                        style={{ backgroundColor: "#9bd60c" }}
                      >
                        <Ticket className="w-4 h-4" />
                        Comprar - {event.price}
                      </button>
                    ) : event.status === "sold-out" ? (
                      <button
                        className="w-full bg-gray-600 text-gray-300 font-display font-bold py-3 px-4 rounded-lg cursor-not-allowed"
                        disabled
                      >
                        Ingressos Esgotados
                      </button>
                    ) : (
                      <button
                        className="w-full bg-transparent font-display font-bold py-3 px-4 rounded-lg transition-colors border-2 hover:text-white"
                        style={{
                          borderColor: "#00d1ff",
                          color: "#00d1ff",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = "#00d1ff";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = "transparent";
                        }}
                      >
                        Notificar quando abrir
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {filteredEvents.length === 0 && (
              <div className="text-center py-20">
                <div className="w-20 h-20 mx-auto mb-6 bg-white/10 rounded-2xl flex items-center justify-center">
                  <Calendar className="w-10 h-10 text-white/40" />
                </div>
                <h3 className="font-display font-semibold text-white text-xl mb-2">
                  Nenhum evento encontrado
                </h3>
                <p className="font-body text-white/60">
                  Não há eventos para a categoria selecionada no momento.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Eventos;
