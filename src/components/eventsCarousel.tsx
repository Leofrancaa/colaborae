"use client";

import { useState, useEffect } from "react";

interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  image: string;
}

const mockEvents: Event[] = [
  {
    id: "1",
    title: "A-Tributos Show Festival",
    date: "26 SET",
    time: "22H",
    location: "Colaboraê",
    description: "Um festival incrível com grandes artistas da cena baiana",
    image:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop",
  },
  {
    id: "2",
    title: "Gal Costa • Divino Maravilhoso",
    date: "15 OUT",
    time: "20H",
    location: "Colaboraê",
    description: "Uma homenagem especial à rainha da MPB",
    image:
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&h=600&fit=crop",
  },
  {
    id: "3",
    title: "Ferruz - Lançamento do Álbum",
    date: "19 SET",
    time: "20H",
    location: "Colaboraê",
    description: "Noite especial de lançamento do novo álbum",
    image:
      "https://images.unsplash.com/photo-1506157786151-b8491531f063?w=800&h=600&fit=crop",
  },
];

export default function EventsCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % mockEvents.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % mockEvents.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + mockEvents.length) % mockEvents.length
    );
  };

  return (
    <section className="section-hero min-h-screen relative overflow-hidden">
      {/* Background com imagens dos eventos */}
      <div className="absolute inset-0">
        {mockEvents.map((event, index) => (
          <div
            key={event.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50" />
          </div>
        ))}
      </div>

      {/* Content centralizado */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="glass-card p-8 md:p-12">
              <div className="mb-6">
                <span className="inline-block bg-colaborae-cyan/20 text-colaborae-cyan px-4 py-2 rounded-full font-body text-sm font-medium mb-4">
                  PRÓXIMO EVENTO
                </span>
              </div>

              <h1 className="font-display font-bold text-4xl md:text-6xl lg:text-7xl text-white mb-6">
                {mockEvents[currentSlide].title}
              </h1>

              <p className="font-body text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                {mockEvents[currentSlide].description}
              </p>

              <div className="flex flex-wrap justify-center gap-6 mb-8 text-white/80">
                <div className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5 text-colaborae-cyan"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <span className="font-body">
                    {mockEvents[currentSlide].date}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5 text-colaborae-cyan"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="font-body">
                    {mockEvents[currentSlide].time}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5 text-colaborae-cyan"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span className="font-body">
                    {mockEvents[currentSlide].location}
                  </span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-[#FF5E5B] hover:bg-[#FF5E5B]/80 text-white font-display font-semibold rounded-xl transition-all transform hover:scale-105 shadow-lg">
                  Comprar Ingresso
                </button>
                <button className="px-8 py-4 border-2 border-white/30 hover:border-colaborae-cyan text-white font-display font-semibold rounded-xl transition-all hover:bg-white/10">
                  Ver Detalhes
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/10 backdrop-blur-md text-white hover:bg-white/20 transition-colors"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/10 backdrop-blur-md text-white hover:bg-white/20 transition-colors"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
          {mockEvents.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide ? "bg-[#00D1FF]" : "bg-white/30"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
