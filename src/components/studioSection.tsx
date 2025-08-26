export default function StudioSection() {
  return (
    <section className="section-dark py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Text Content */}
            <div className="order-2 lg:order-1">
              <div className="mb-6">
                <span className="inline-block bg-[#00D1FF]/20 text-[#00D1FF] px-4 py-2 rounded-full font-body text-sm font-medium mb-4">
                  ESTÚDIO & SELO
                </span>
              </div>

              <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-white mb-6 leading-tight">
                Onde <span className="neon-green">novos talentos</span> nascem
              </h2>

              <p className="font-body text-lg md:text-xl text-white/80 mb-6 leading-relaxed">
                Nosso estúdio é equipado com tecnologia de ponta e nossa equipe
                está pronta para transformar ideias em realidade musical.
              </p>

              <p className="font-body text-lg text-white/80 mb-8 leading-relaxed">
                Através do nosso selo, promovemos artistas locais e conectamos a
                música baiana ao mundo.
              </p>

              {/* Features */}
              <div className="space-y-4 md:space-y-6 mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-[#9BD60C]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 md:w-7 md:h-7 text-[#9BD60C]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-white text-lg md:text-xl">
                      Gravação Profissional
                    </h4>
                    <p className="font-body text-sm text-white/70">
                      Equipamentos de alta qualidade
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-[#00D1FF]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 md:w-7 md:h-7 text-[#00D1FF]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-white text-lg md:text-xl">
                      Produção Musical
                    </h4>
                    <p className="font-body text-sm text-white/70">
                      Da composição à masterização
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-[#FF5E5B]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 md:w-7 md:h-7 text-[#FF5E5B]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2M7 4h10M7 4l-2 16h14L17 4M9 9v8m6-8v8"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-white text-lg md:text-xl">
                      Distribuição
                    </h4>
                    <p className="font-body text-sm text-white/70">
                      Plataformas digitais e físicas
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <button className="px-8 py-4 bg-transparent border-2 border-[#00D1FF] text-[#00D1FF] hover:bg-[#00D1FF] hover:text-white font-display font-semibold rounded-xl transition-all transform hover:scale-105">
                Conheça Nosso Selo
              </button>
            </div>

            {/* Image Side */}
            <div className="relative order-1 lg:order-2">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop"
                  alt="Estúdio Colaboraê"
                  className="w-full h-80 md:h-96 lg:h-[480px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#022744]/40 to-transparent" />
              </div>

              {/* Floating Elements */}
              <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 glass-card p-4 md:p-6">
                <div className="text-center">
                  <div className="text-xl md:text-2xl font-display font-bold text-[#9BD60C] mb-1 leading-none">
                    24/7
                  </div>
                  <div className="text-xs md:text-sm font-body text-white/80 leading-tight">
                    Estúdio
                    <br />
                    Disponível
                  </div>
                </div>
              </div>

              <div className="absolute -top-4 -left-4 md:-top-6 md:-left-6 bg-[#00D1FF]/20 backdrop-blur-md p-4 md:p-6 rounded-xl md:rounded-2xl border border-[#00D1FF]/30">
                <svg
                  className="w-6 h-6 md:w-8 md:h-8 text-[#00D1FF]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
                  />
                </svg>
              </div>

              {/* Elemento decorativo adicional */}
              <div className="absolute top-1/4 -right-2 w-6 h-6 md:w-8 md:h-8 bg-[#FF5E5B]/20 rounded-full flex items-center justify-center border border-[#FF5E5B]/30">
                <div className="w-2 h-2 md:w-3 md:h-3 bg-[#FF5E5B] rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
