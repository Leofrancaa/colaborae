export default function Footer() {
  return (
    <footer className="section-dark py-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="font-display font-bold text-2xl text-white mb-4">
              Colaboraê
            </h3>
            <p className="font-body text-white/70 mb-6 text-sm leading-relaxed">
              A casinha mais plural do Rio Vermelho. Onde música, gastronomia e
              cultura se encontram para criar experiências únicas.
            </p>
            <div className="flex gap-3">
              <a
                href="https://instagram.com/colaborae"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-[#9BD60C]/20 hover:text-[#9BD60C] transition-colors"
              >
                <span className="text-xs font-bold">IG</span>
              </a>
              <a
                href="https://youtube.com/@colaborae"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-[#FF5E5B]/20 hover:text-[#FF5E5B] transition-colors"
              >
                <span className="text-xs font-bold">YT</span>
              </a>
              <a
                href="https://facebook.com/colaborae"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-[#00D1FF]/20 hover:text-[#00D1FF] transition-colors"
              >
                <span className="text-xs font-bold">FB</span>
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display font-semibold text-white text-lg mb-4">
              Contato
            </h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-[#00D1FF] mt-0.5 flex-shrink-0"
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
                <div>
                  <p className="font-body text-white/90 text-sm">
                    Rua da Paciência, 42
                    <br />
                    Rio Vermelho - Salvador/BA
                    <br />
                    CEP: 40170-110
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <svg
                  className="w-5 h-5 text-[#9BD60C] flex-shrink-0"
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
                <p className="font-body text-white/90 text-sm">
                  (71) 4103-6584
                </p>
              </div>
              <div className="flex items-center gap-3">
                <svg
                  className="w-5 h-5 text-[#FF5E5B] flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 4.26c.3.16.67.16.97 0L20 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <p className="font-body text-white/90 text-sm">
                  contato@colaborae.com.br
                </p>
              </div>
            </div>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="font-display font-semibold text-white text-lg mb-4">
              Funcionamento
            </h4>
            <div className="space-y-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <svg
                    className="w-4 h-4 text-[#00D1FF]"
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
                  <span className="font-body text-white/70 text-sm font-medium">
                    Eventos
                  </span>
                </div>
                <p className="font-body text-white/90 text-sm ml-6">
                  Consulte a programação
                </p>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-2">
                  <svg
                    className="w-4 h-4 text-[#9BD60C]"
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
                  <span className="font-body text-white/70 text-sm font-medium">
                    Bistrô
                  </span>
                </div>
                <p className="font-body text-white/90 text-sm ml-6">
                  Ter-Dom: 12h às 00h
                  <br />
                  Seg: Fechado
                </p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-white text-lg mb-4">
              Links Rápidos
            </h4>
            <div className="space-y-2">
              <a
                href="/eventos"
                className="block font-body text-white/70 hover:text-[#00D1FF] transition-colors text-sm"
              >
                Eventos
              </a>
              <a
                href="/bistro"
                className="block font-body text-white/70 hover:text-[#00D1FF] transition-colors text-sm"
              >
                Bistrô
              </a>
              <a
                href="/estudio"
                className="block font-body text-white/70 hover:text-[#00D1FF] transition-colors text-sm"
              >
                Estúdio
              </a>
              <a
                href="/selo"
                className="block font-body text-white/70 hover:text-[#00D1FF] transition-colors text-sm"
              >
                Selo Musical
              </a>
              <a
                href="/contato"
                className="block font-body text-white/70 hover:text-[#00D1FF] transition-colors text-sm"
              >
                Contato
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-body text-white/60 text-sm">
            © 2024 Colaboraê. Todos os direitos reservados.
          </p>
          <div className="flex gap-6 text-sm">
            <a
              href="/privacidade"
              className="font-body text-white/60 hover:text-white transition-colors"
            >
              Privacidade
            </a>
            <a
              href="/termos"
              className="font-body text-white/60 hover:text-white transition-colors"
            >
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
