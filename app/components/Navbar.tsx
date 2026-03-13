"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { MenuIcon, XIcon, ChevronDownIcon } from "lucide-animated";
import { useLang } from "../context/LanguageContext";

const navHrefs = [
  { key: "features" as const, href: "#features" },
  { key: "howItWorks" as const, href: "#how-it-works" },
  { key: "pricing" as const, href: "#pricing" },
  { key: "contact" as const, href: "#contact" },
];

const langOptions = [
  { code: "en" as const, flag: "🇬🇧", label: "EN" },
  { code: "pt" as const, flag: "🇵🇹", label: "PT" },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);
  const { lang, setLang, t } = useLang();

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setIsLangOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const currentLang = langOptions.find((o) => o.code === lang)!;

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 py-4"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div
          className={`flex items-center justify-between transition-all duration-300 bg-white/90 backdrop-blur-xl border border-gray-100 shadow-sm liquid-glass px-6 py-3`}
        >
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gray-950 flex items-center justify-center">
              <span className="text-white font-bold text-sm">A</span>
            </div>
            <span className="text-xl font-bold text-gray-950">Aurea</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-4">
            {navHrefs.map((link) => (
              <motion.a
                key={link.key}
                href={link.href}
                whileHover={{ x: 2 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="text-gray-500 hover:text-gray-900 text-sm font-medium transition-colors"
              >
                {t.nav[link.key]}
              </motion.a>
            ))}
          </div>

          {/* Desktop: CTA + Language */}
          <div className="hidden md:flex items-center gap-2">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="bg-gray-950 text-white px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-gray-800 transition-colors"
            >
              {t.nav.cta}
            </motion.button>

            {/* Language Dropdown */}
            <div ref={langRef} className="relative">
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-black/5 transition-all"
              >
                <span>{currentLang.flag}</span>
                <span>{currentLang.label}</span>
                <ChevronDownIcon size={12} className={`transition-transform ${isLangOpen ? "rotate-180" : ""}`} />
              </button>
              {isLangOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -4, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  className="absolute right-0 top-full mt-1 liquid-glass py-1 min-w-[90px]"
                  style={{ borderRadius: 12 }}
                >
                  {langOptions.map((opt) => (
                    <button
                      key={opt.code}
                      onClick={() => { setLang(opt.code); setIsLangOpen(false); }}
                      className={`flex items-center gap-2 w-full px-3 py-2 text-sm hover:bg-black/5 transition-colors ${lang === opt.code ? "font-semibold text-gray-900" : "text-gray-600"}`}
                    >
                      <span>{opt.flag}</span>
                      <span>{opt.label}</span>
                    </button>
                  ))}
                </motion.div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-700"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <XIcon size={24} className="text-gray-700" /> : <MenuIcon size={24} className="text-gray-700" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-3 liquid-glass p-6"
          >
            <div className="flex flex-col gap-4">
              {navHrefs.map((link) => (
                <a
                  key={link.key}
                  href={link.href}
                  className="text-gray-600 hover:text-gray-900 transition-colors font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t.nav[link.key]}
                </a>
              ))}
              <button className="mt-2 px-5 py-3 bg-gray-900 text-white rounded-xl font-medium">
                {t.nav.cta}
              </button>

              {/* Mobile Language Toggle */}
              <div className="flex items-center gap-2 pt-2 border-t border-gray-100">
                {langOptions.map((opt) => (
                  <button
                    key={opt.code}
                    onClick={() => setLang(opt.code)}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm transition-all ${lang === opt.code ? "bg-gray-900 text-white font-medium" : "text-gray-500 hover:text-gray-800"}`}
                  >
                    <span>{opt.flag}</span>
                    <span>{opt.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
