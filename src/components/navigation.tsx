"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            href="/"
            className="font-display font-bold text-2xl text-white hover:text-colaborae-cyan transition-colors"
          >
            Colaboraê
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="font-body text-white hover:text-colaborae-cyan transition-colors"
            >
              Início
            </Link>
            <Link
              href="/eventos"
              className="font-body text-white hover:text-colaborae-cyan transition-colors"
            >
              Eventos
            </Link>
            <Link
              href="/bistro"
              className="font-body text-white hover:text-colaborae-cyan transition-colors"
            >
              Bistrô
            </Link>
            <Link
              href="/contato"
              className="font-body text-white hover:text-colaborae-cyan transition-colors"
            >
              Contato
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white p-2 hover:text-colaborae-cyan transition-colors"
              aria-label="Menu"
            >
              {isOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-black/90 rounded-lg mt-2">
              <Link
                href="/"
                className="text-white hover:text-colaborae-cyan block px-3 py-2 text-base font-body transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Início
              </Link>
              <Link
                href="/eventos"
                className="text-white hover:text-colaborae-cyan block px-3 py-2 text-base font-body transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Eventos
              </Link>
              <Link
                href="/bistro"
                className="text-white hover:text-colaborae-cyan block px-3 py-2 text-base font-body transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Bistrô
              </Link>
              <Link
                href="/contato"
                className="text-white hover:text-colaborae-cyan block px-3 py-2 text-base font-body transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Contato
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
