export default function AboutSection() {
  return (
    <section className="section-light py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Text Content */}
            <div className="order-2 lg:order-1">
              <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-[#022744] mb-6 leading-tight">
                A casinha mais <span className="text-[#9BD60C]">plural</span> do
                Rio Vermelho
              </h2>

              <p className="font-body text-lg md:text-xl text-gray-600 mb-6 leading-relaxed">
                O Colaboraê é mais que um espaço de entretenimento. Somos um
                ponto de encontro onde a cultura baiana se mistura com a
                inovação, criando experiências únicas que conectam pessoas
                através da música, gastronomia e arte.
              </p>

              <p className="font-body text-lg text-gray-600 mb-8 leading-relaxed">
                Localizado no coração do Rio Vermelho, oferecemos eventos
                únicos, um bistrô acolhedor e um estúdio para novos talentos
                florescerem.
              </p>

              {/* Features Grid - Responsivo */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8">
                <div className="text-center sm:text-left">
                  <div className="w-16 h-16 mx-auto sm:mx-0 mb-4 bg-[#9BD60C]/10 rounded-xl flex items-center justify-center">
                    <svg
                      className="w-8 h-8 text-[#9BD60C]"
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
                  <h3 className="font-display font-semibold text-lg text-[#022744] mb-2">
                    Eventos
                  </h3>
                  <p className="font-body text-sm text-gray-600">
                    Shows e festivais únicos
                  </p>
                </div>

                <div className="text-center sm:text-left">
                  <div className="w-16 h-16 mx-auto sm:mx-0 mb-4 bg-[#FF5E5B]/10 rounded-xl flex items-center justify-center">
                    <svg
                      className="w-8 h-8 text-[#FF5E5B]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="font-display font-semibold text-lg text-[#022744] mb-2">
                    Bistrô
                  </h3>
                  <p className="font-body text-sm text-gray-600">
                    Sabores autênticos
                  </p>
                </div>

                <div className="text-center sm:text-left">
                  <div className="w-16 h-16 mx-auto sm:mx-0 mb-4 bg-[#00D1FF]/10 rounded-xl flex items-center justify-center">
                    <svg
                      className="w-8 h-8 text-[#00D1FF]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="font-display font-semibold text-lg text-[#022744] mb-2">
                    Comunidade
                  </h3>
                  <p className="font-body text-sm text-gray-600">
                    Conexões genuínas
                  </p>
                </div>
              </div>
            </div>

            {/* Image Side */}
            <div className="relative order-1 lg:order-2">
              <div className="relative overflow-hidden rounded-3xl">
                <img
                  src="https://images.unsplash.com/photo-1543007630-9710e4a00a20?w=600&h=400&fit=crop"
                  alt="Interior do Colaboraê"
                  className="w-full h-80 md:h-96 lg:h-[480px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#022744]/30 to-transparent" />
              </div>

              {/* Floating Card - Responsivo */}
              <div className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 bg-white p-4 md:p-6 rounded-xl md:rounded-2xl shadow-xl border border-gray-100">
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-display font-bold text-[#022744] leading-none">
                    5+
                  </div>
                  <div className="text-xs md:text-sm font-body text-gray-600 mt-1">
                    Anos de história
                  </div>
                </div>
              </div>

              {/* Floating Element - Decorativo */}
              <div className="absolute -top-4 -right-4 w-12 h-12 md:w-16 md:h-16 bg-[#9BD60C]/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-[#9BD60C]/30">
                <svg
                  className="w-6 h-6 md:w-8 md:h-8 text-[#9BD60C]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
