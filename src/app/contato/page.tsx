"use client";

// src/pages/Contato.tsx
import { useState, useRef } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  Instagram,
  Youtube,
  Facebook,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import emailjs from "@emailjs/browser";

const Contato = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Substitua pelos seus dados do EmailJS
      const result = await emailjs.sendForm(
        "YOUR_SERVICE_ID", // Substitua pelo seu Service ID
        "YOUR_TEMPLATE_ID", // Substitua pelo seu Template ID
        form.current,
        "YOUR_PUBLIC_KEY" // Substitua pela sua Public Key
      );

      console.log("Email enviado com sucesso:", result.text);
      setSubmitStatus("success");
      form.current.reset();
    } catch (error) {
      console.error("Erro ao enviar email:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen section-light">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1
              className="font-display font-bold text-5xl md:text-6xl mb-6"
              style={{ color: "#022744" }}
            >
              Fale <span style={{ color: "#9bd60c" }}>Conosco</span>
            </h1>
            <p className="font-body text-xl text-gray-600 max-w-2xl mx-auto">
              Estamos sempre prontos para receber você! Entre em contato para
              tirar dúvidas, fazer reservas ou conhecer nossos espaços.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info & Form Section */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div>
                <h2
                  className="font-display font-bold text-3xl mb-8"
                  style={{ color: "#022744" }}
                >
                  Informações de Contato
                </h2>

                {/* Address */}
                <div className="mb-8">
                  <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-lg border">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                      style={{ backgroundColor: "rgba(0, 209, 255, 0.1)" }}
                    >
                      <MapPin
                        className="w-6 h-6"
                        style={{ color: "#00d1ff" }}
                      />
                    </div>
                    <div>
                      <h3
                        className="font-display font-semibold text-lg mb-2"
                        style={{ color: "#022744" }}
                      >
                        Endereço
                      </h3>
                      <p className="font-body text-gray-600">
                        Rua Borges dos Reis, 81
                        <br />
                        Rio Vermelho, Salvador - BA
                        <br />
                        CEP: 41950-602
                      </p>
                    </div>
                  </div>
                </div>

                {/* Phone */}
                <div className="mb-8">
                  <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-lg border">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                      style={{ backgroundColor: "rgba(155, 214, 12, 0.1)" }}
                    >
                      <Phone className="w-6 h-6" style={{ color: "#9bd60c" }} />
                    </div>
                    <div>
                      <h3
                        className="font-display font-semibold text-lg mb-2"
                        style={{ color: "#022744" }}
                      >
                        Telefone & WhatsApp
                      </h3>
                      <p className="font-body text-gray-600 mb-2">
                        (71) 99999-9999
                      </p>
                      <p className="font-body text-sm text-gray-500">
                        Atendimento: Seg-Sex 9h às 18h
                      </p>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="mb-8">
                  <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-lg border">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                      style={{ backgroundColor: "rgba(255, 94, 91, 0.1)" }}
                    >
                      <Mail className="w-6 h-6" style={{ color: "#ff5e5b" }} />
                    </div>
                    <div>
                      <h3
                        className="font-display font-semibold text-lg mb-2"
                        style={{ color: "#022744" }}
                      >
                        E-mail
                      </h3>
                      <p className="font-body text-gray-600 mb-2">
                        contato@soucolaborae.com
                      </p>
                      <p className="font-body text-sm text-gray-500">
                        Respondemos em até 24h
                      </p>
                    </div>
                  </div>
                </div>

                {/* Operating Hours */}
                <div className="mb-8">
                  <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-lg border">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                      style={{ backgroundColor: "rgba(2, 39, 68, 0.1)" }}
                    >
                      <Clock className="w-6 h-6" style={{ color: "#022744" }} />
                    </div>
                    <div>
                      <h3
                        className="font-display font-semibold text-lg mb-3"
                        style={{ color: "#022744" }}
                      >
                        Funcionamento
                      </h3>
                      <div className="space-y-2">
                        <div>
                          <p className="font-body font-medium text-gray-700">
                            Bistrô:
                          </p>
                          <p className="font-body text-gray-600 text-sm">
                            Ter-Dom: 12h às 00h
                          </p>
                          <p className="font-body text-gray-600 text-sm">
                            Segunda: Fechado
                          </p>
                        </div>
                        <div className="mt-3">
                          <p className="font-body font-medium text-gray-700">
                            Eventos:
                          </p>
                          <p className="font-body text-gray-600 text-sm">
                            Conforme programação
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Social Media */}
                <div>
                  <h3
                    className="font-display font-semibold text-lg mb-4"
                    style={{ color: "#022744" }}
                  >
                    Siga-nos nas redes sociais
                  </h3>
                  <div className="flex gap-4">
                    <a
                      href="https://instagram.com/colaborae"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-xl flex items-center justify-center transition-colors hover:opacity-80"
                      style={{
                        backgroundColor: "rgba(255, 94, 91, 0.1)",
                        color: "#ff5e5b",
                      }}
                    >
                      <Instagram className="w-6 h-6" />
                    </a>
                    <a
                      href="https://youtube.com/@colaborae"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-xl flex items-center justify-center transition-colors hover:opacity-80"
                      style={{
                        backgroundColor: "rgba(255, 94, 91, 0.1)",
                        color: "#ff5e5b",
                      }}
                    >
                      <Youtube className="w-6 h-6" />
                    </a>
                    <a
                      href="https://facebook.com/colaborae"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-xl flex items-center justify-center transition-colors hover:opacity-80"
                      style={{
                        backgroundColor: "rgba(0, 209, 255, 0.1)",
                        color: "#00d1ff",
                      }}
                    >
                      <Facebook className="w-6 h-6" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <h2
                  className="font-display font-bold text-3xl mb-8"
                  style={{ color: "#022744" }}
                >
                  Envie sua Mensagem
                </h2>

                <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        className="block font-body font-medium mb-2"
                        style={{ color: "#022744" }}
                      >
                        Nome *
                      </label>
                      <input
                        type="text"
                        name="user_name"
                        placeholder="Seu nome completo"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-600 font-body"
                      />
                    </div>
                    <div>
                      <label
                        className="block font-body font-medium mb-2"
                        style={{ color: "#022744" }}
                      >
                        Telefone
                      </label>
                      <input
                        type="tel"
                        name="user_phone"
                        placeholder="(71) 99999-9999"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-600 font-body"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      className="block font-body font-medium mb-2"
                      style={{ color: "#022744" }}
                    >
                      E-mail *
                    </label>
                    <input
                      type="email"
                      name="user_email"
                      placeholder="seu@email.com"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-600 font-body"
                    />
                  </div>

                  <div>
                    <label
                      className="block font-body font-medium mb-2"
                      style={{ color: "#022744" }}
                    >
                      Assunto *
                    </label>
                    <select
                      name="subject"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-600 font-body"
                    >
                      <option value="">Selecione o assunto</option>
                      <option value="reserva">Reserva de mesa - Bistrô</option>
                      <option value="evento">Informações sobre eventos</option>
                      <option value="estudio">Estúdio e gravações</option>
                      <option value="parcerias">
                        Parcerias e colaborações
                      </option>
                      <option value="outros">Outros assuntos</option>
                    </select>
                  </div>

                  <div>
                    <label
                      className="block font-body font-medium mb-2"
                      style={{ color: "#022744" }}
                    >
                      Mensagem *
                    </label>
                    <textarea
                      name="message"
                      placeholder="Escreva sua mensagem aqui..."
                      rows={5}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-600 resize-none font-body"
                    />
                  </div>

                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="privacy"
                      name="privacy_agreed"
                      required
                      className="mt-1 rounded border-gray-300 text-blue-600 focus:ring-2 focus:ring-blue-200"
                    />
                    <label
                      htmlFor="privacy"
                      className="font-body text-sm text-gray-600"
                    >
                      Concordo com a{" "}
                      <a
                        href="/privacidade"
                        className="hover:underline"
                        style={{ color: "#022744" }}
                      >
                        política de privacidade
                      </a>{" "}
                      e autorizo o contato via e-mail e/ou telefone.
                    </label>
                  </div>

                  {/* Submit Status */}
                  {submitStatus === "success" && (
                    <div className="flex items-center gap-2 p-4 bg-green-50 rounded-lg border border-green-200">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <p className="font-body text-green-800">
                        Mensagem enviada com sucesso! Entraremos em contato em
                        breve.
                      </p>
                    </div>
                  )}

                  {submitStatus === "error" && (
                    <div className="flex items-center gap-2 p-4 bg-red-50 rounded-lg border border-red-200">
                      <AlertCircle className="w-5 h-5 text-red-600" />
                      <p className="font-body text-red-800">
                        Erro ao enviar mensagem. Tente novamente ou entre em
                        contato por telefone.
                      </p>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 py-4 px-6 rounded-lg font-display font-bold text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed hover:opacity-90"
                    style={{ backgroundColor: "#022744" }}
                  >
                    <Send className="w-5 h-5" />
                    {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <h2
                className="font-display font-bold text-3xl mb-4"
                style={{ color: "#022744" }}
              >
                Como Chegar
              </h2>
              <p className="font-body text-lg text-gray-600">
                Estamos localizados no coração do Rio Vermelho, próximo aos
                principais pontos turísticos de Salvador.
              </p>
            </div>

            {/* Map Placeholder */}
            <div className="bg-gray-200 rounded-2xl h-96 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-12 h-12 mx-auto mb-4 text-gray-400" />
                <p className="font-body text-gray-600">
                  Mapa interativo
                  <br />
                  <small className="text-sm">
                    Integração com Google Maps em breve
                  </small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contato;
