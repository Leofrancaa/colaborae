export default function BistroSection() {
  return (
    <section className="section-bistro py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image Side */}
            <div className="relative order-1 lg:order-1">
              {/* Nome Bistrô acima da imagem */}
              <div className="mb-6">
                <span className="inline-block bg-[#FF5E5B]/10 text-[#FF5E5B] px-4 py-2 rounded-full font-body text-sm font-medium">
                  BISTRÔ
                </span>
              </div>

              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop"
                  alt="Bistrô Colaboraê"
                  className="w-full h-80 md:h-96 lg:h-[480px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>

              {/* Floating Badge - Funcionamento */}
              <div className="absolute top-4 right-4 md:top-8 md:right-[-20] bg-[#9BD60C] text-white p-3 md:py-4 md:px-6 rounded-xl shadow-lg">
                <div className="text-center">
                  <svg
                    className="w-4 h-4 md:w-5 md:h-5 mx-auto mb-1"
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
                  <div className="text-xs font-body font-medium leading-tight">
                    Ter-Dom
                    <br />
                    12h-00h
                  </div>
                </div>
              </div>

              {/* Floating Card - Reservas */}
              <div className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 bg-white p-3 md:p-4 rounded-xl shadow-xl border border-gray-100">
                <div className="text-center">
                  <svg
                    className="w-4 h-4 md:w-5 md:h-5 mx-auto mb-1 text-[#FF5E5B]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <div className="text-xs font-body font-medium text-[#022744] leading-tight">
                    Reservas
                    <br />
                    (71) 4103-6584
                  </div>
                </div>
              </div>
            </div>

            {/* Text Content */}
            <div className="order-2 lg:order-2">
              <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-[#022744] mb-6 leading-tight">
                Sabores que{" "}
                <span className="text-[#FF5E5B]">contam histórias</span>
              </h2>

              <p className="font-body text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
                Nossa cozinha celebra os sabores baianos, onde tradição e
                criatividade se encontram. Cada prato é preparado com
                ingredientes frescos e muito carinho.
              </p>

              {/* Features Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-[#9BD60C]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-5 h-5 md:w-6 md:h-6 text-[#9BD60C]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-[#022744] text-base md:text-lg">
                      Pratos Autorais
                    </h4>
                    <p className="font-body text-sm text-gray-600">
                      Receitas exclusivas
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-[#FF5E5B]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-5 h-5 md:w-6 md:h-6 text-[#FF5E5B]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-[#022744] text-base md:text-lg">
                      Chef Especializado
                    </h4>
                    <p className="font-body text-sm text-gray-600">
                      Culinária baiana
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-6 py-4 bg-[#9BD60C] hover:bg-[#9BD60C]/80 text-white font-display font-semibold rounded-xl transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  Ver Cardápio Completo
                </button>
                <button className="px-6 py-4 bg-[#FF5E5B] hover:bg-[#FF5E5B]/80 text-white font-display font-semibold rounded-xl transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2">
                  <svg
                    className="w-5 h-5"
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
                  Reservar Mesa
                </button>
              </div>

              {/* Status */}
              <div className="mt-8 flex items-center justify-center sm:justify-start gap-4 text-gray-600">
                <div className="w-2 h-2 bg-[#9BD60C] rounded-full animate-pulse"></div>
                <span className="font-body text-sm">
                  <strong className="text-[#022744]">Aberto agora</strong> -
                  Segunda fechado
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
