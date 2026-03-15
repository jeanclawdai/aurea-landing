"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useLang } from "../context/LanguageContext";
import { SectionPill } from "@/components/ui/section-pill";

const floatingIcons = [
  { icon: "✉", x: -140, y: -60, delay: 0, rotate: -12 },
  { icon: "⭐", x: 160, y: -80, delay: 0.3, rotate: 8 },
  { icon: "💬", x: -160, y: 100, delay: 0.6, rotate: -6 },
  { icon: "✨", x: 150, y: 120, delay: 0.9, rotate: 15 },
  { icon: "📈", x: -120, y: 200, delay: 1.2, rotate: -10 },
  { icon: "🏆", x: 130, y: 220, delay: 1.5, rotate: 5 },
];

export default function Contact() {
  const { lang } = useLang();
  return (
    <section id="contact" className="py-32 px-6 bg-white relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-blue-50 via-violet-50 to-pink-50 rounded-full blur-3xl opacity-60" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-48 bg-gradient-to-t from-blue-100/40 to-transparent blur-2xl" />
      </div>
      <div className="max-w-2xl mx-auto relative">
        {/* Floating icons */}
        {floatingIcons.map((item, i) => (
          <motion.div
            key={i}
            className="absolute hidden lg:flex items-center justify-center w-12 h-12 bg-white rounded-2xl shadow-lg border border-gray-100 text-xl pointer-events-none"
            style={{ left: `calc(50% + ${item.x}px)`, top: `calc(50% + ${item.y}px)`, rotate: item.rotate }}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: item.delay, type: "spring", stiffness: 300 }}
          >
            <motion.span
              animate={{ y: [0, -6, 0] }}
              transition={{ type: "tween", duration: 2 + i * 0.3, delay: item.delay, repeat: Infinity, ease: "easeInOut" }}
            >
              {item.icon}
            </motion.span>
          </motion.div>
        ))}

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <SectionPill className="mb-6">{lang === "pt" ? "CONTACTO" : "CONTACT"}</SectionPill>
          <h2 className="text-5xl sm:text-6xl font-bold text-gray-950 leading-tight mb-6">
            {lang === "pt" ? (
              <>Vamos <span className="font-serif-italic font-normal">falar.</span></>
            ) : (
              <>{"Let's"} <span className="font-serif-italic font-normal">talk.</span></>
            )}
          </h2>
          <p className="text-xl text-gray-400">
            {lang === "pt"
              ? "Pronto para transformar o marketing da sua clínica?"
              : "Ready to transform your clinic's marketing?"}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="relative bg-white rounded-3xl border border-gray-100 p-10 shadow-xl shadow-gray-200/60"
        >
          <form className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  {lang === "pt" ? "Nome" : "First Name"}
                </label>
                <input type="text"
                  placeholder={lang === "pt" ? "João" : "John"}
                  className="w-full px-5 py-4 rounded-2xl border border-gray-200 bg-gray-50 focus:border-gray-400 focus:bg-white focus:outline-none transition-all text-gray-900 placeholder:text-gray-300 text-base"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  {lang === "pt" ? "Apelido" : "Last Name"}
                </label>
                <input type="text"
                  placeholder={lang === "pt" ? "Silva" : "Doe"}
                  className="w-full px-5 py-4 rounded-2xl border border-gray-200 bg-gray-50 focus:border-gray-400 focus:bg-white focus:outline-none transition-all text-gray-900 placeholder:text-gray-300 text-base"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
              <input type="email"
                placeholder={lang === "pt" ? "joao@clinica.pt" : "john@clinic.com"}
                className="w-full px-5 py-4 rounded-2xl border border-gray-200 bg-gray-50 focus:border-gray-400 focus:bg-white focus:outline-none transition-all text-gray-900 placeholder:text-gray-300 text-base"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                {lang === "pt" ? "Nome da Clínica" : "Clinic Name"}
              </label>
              <input type="text"
                placeholder={lang === "pt" ? "Clínica Estética Lisboa" : "Your Aesthetic Clinic"}
                className="w-full px-5 py-4 rounded-2xl border border-gray-200 bg-gray-50 focus:border-gray-400 focus:bg-white focus:outline-none transition-all text-gray-900 placeholder:text-gray-300 text-base"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                {lang === "pt" ? "Mensagem" : "Message"}
              </label>
              <textarea rows={4}
                placeholder={lang === "pt" ? "Conta-nos sobre a tua clínica e objetivos..." : "Tell us about your clinic and goals..."}
                className="w-full px-5 py-4 rounded-2xl border border-gray-200 bg-gray-50 focus:border-gray-400 focus:bg-white focus:outline-none transition-all text-gray-900 placeholder:text-gray-300 text-base resize-none"
              />
            </div>
            <motion.button type="submit"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className="btn-shimmer w-full py-5 bg-gray-950 text-white rounded-2xl font-semibold text-lg flex items-center justify-center gap-3"
            >
              {lang === "pt" ? "Enviar Mensagem" : "Send Message"}
              <ArrowRight size={20} className="text-white" />
            </motion.button>
          </form>

          {/* Pulsing gradient glow */}
          <motion.div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-32 -z-10"
            animate={{ opacity: [0.3, 0.7, 0.3], scale: [1, 1.1, 1] }}
            transition={{ type: "tween", duration: 3, repeat: Infinity, ease: "easeInOut" }}
            style={{ background: "radial-gradient(ellipse, rgba(111,168,255,0.25) 0%, transparent 70%)" }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-8 mt-12 text-gray-400 text-sm"
        >
          <span>hello@aureaai.studio</span>
          <span className="hidden sm:block">·</span>
          <span>{lang === "pt" ? "Lisboa, Portugal" : "Lisbon, Portugal"}</span>
          <span className="hidden sm:block">·</span>
          <span>{lang === "pt" ? "Resposta em 24h" : "Reply within 24h"}</span>
        </motion.div>
      </div>
    </section>
  );
}
