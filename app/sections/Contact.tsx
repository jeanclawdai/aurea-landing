"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useLang } from "../context/LanguageContext";

export default function Contact() {
  const { lang } = useLang();
  return (
    <section id="contact" className="py-32 px-6 bg-gray-50">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-4 block">
            {lang === "pt" ? "CONTACTO" : "CONTACT"}
          </span>
          <h2 className="text-5xl sm:text-6xl font-extrabold text-gray-950 leading-tight mb-6">
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
          className="bg-white rounded-3xl border border-gray-100 p-10"
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
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </form>
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
