"use client";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { useLang } from "../context/LanguageContext";

const plans = [
  {
    name: "Starter",
    namePt: "Starter",
    badge: "14-day free trial",
    badgePt: "14 dias grátis",
    price: "$299",
    pricePeriod: "/month",
    pricePeriodPt: "/mês",
    desc: "For solo practitioners ready to automate social media.",
    descPt: "Para clínicos individuais prontos para automatizar.",
    popular: false,
    needs: ["Brand guidelines", "1 voice recording (5 min)", "Instagram/TikTok access"],
    needsPt: ["Guia de marca", "1 gravação de voz (5 min)", "Acesso Instagram/TikTok"],
    gets: ["20 AI videos/month", "Voice cloning", "Auto-editing + subtitles", "Smart scheduling", "Basic analytics"],
    getsPt: ["20 vídeos IA/mês", "Clonagem de voz", "Edição automática + legendas", "Publicação inteligente", "Analytics básico"],
    cta: "Start Free Trial",
    ctaPt: "Começar Gratuitamente",
  },
  {
    name: "Growth",
    namePt: "Growth",
    badge: "Most popular",
    badgePt: "Mais popular",
    price: "$599",
    pricePeriod: "/month",
    pricePeriodPt: "/mês",
    desc: "For clinics ready to scale with unlimited content.",
    descPt: "Para clínicas prontas para crescer com conteúdo ilimitado.",
    popular: true,
    needs: ["Brand guidelines", "1–3 voice recordings", "All platform access", "Monthly strategy call"],
    needsPt: ["Guia de marca", "1–3 gravações de voz", "Acesso a todas as plataformas", "Reunião mensal de estratégia"],
    gets: ["Unlimited AI videos", "Advanced voice cloning", "All platforms (IG, TikTok, YT)", "AI content calendar", "Priority support", "Performance insights"],
    getsPt: ["Vídeos IA ilimitados", "Clonagem de voz avançada", "Todas as plataformas (IG, TikTok, YT)", "Calendário IA", "Suporte prioritário", "Análise de desempenho"],
    cta: "Start Free Trial",
    ctaPt: "Começar Gratuitamente",
  },
  {
    name: "Studio",
    namePt: "Studio",
    badge: "Enterprise",
    badgePt: "Empresa",
    price: "Custom",
    pricePeriod: "",
    pricePeriodPt: "",
    desc: "For multi-location aesthetic groups.",
    descPt: "Para grupos com múltiplas clínicas.",
    popular: false,
    needs: ["Multiple locations", "Team onboarding", "Custom AI training brief"],
    needsPt: ["Múltiplas localizações", "Formação da equipa", "Brief de treino IA personalizado"],
    gets: ["Everything in Growth", "Multi-location management", "White-label options", "API access", "Dedicated account manager", "SLA guarantee"],
    getsPt: ["Tudo do Growth", "Gestão multi-localização", "White-label", "Acesso API", "Gestor de conta dedicado", "Garantia SLA"],
    cta: "Contact Sales",
    ctaPt: "Falar com Vendas",
  },
];

export default function Pricing() {
  const { lang } = useLang();

  return (
    <section id="pricing" className="py-32 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="section-pill inline-flex items-center px-4 py-1.5 text-xs font-semibold tracking-widest uppercase mb-6">
            {lang === "pt" ? "PREÇOS" : "PRICING"}
          </span>
          <h2 className="text-6xl sm:text-7xl font-bold text-gray-950 leading-tight mb-6">
            {lang === "pt"
              ? <>Simples, <span className="font-serif-italic font-normal">sem surpresas.</span></>
              : <>Simple, <span className="font-serif-italic font-normal">no surprises.</span></>}
          </h2>
          <p className="text-xl text-gray-400 max-w-xl mx-auto">
            {lang === "pt"
              ? "Todos os planos incluem 14 dias grátis. Sem cartão de crédito."
              : "All plans include a 14-day free trial. No credit card required."}
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -6, transition: { type: "spring", stiffness: 300, damping: 20 } }}
              className={`rounded-3xl p-10 flex flex-col ${plan.popular ? "bg-gray-950 holographic-border" : "bg-gray-100"}`}
            >
              {/* Top badge */}
              <div className="mb-8">
                <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${plan.popular ? "bg-white/10 text-gray-300" : "bg-white text-gray-500"}`}>
                  {lang === "pt" ? plan.badgePt : plan.badge}
                </span>
              </div>

              {/* Plan name */}
              <h3 className={`text-2xl font-extrabold mb-2 ${plan.popular ? "text-white" : "text-gray-950"}`}>
                {lang === "pt" ? plan.namePt : plan.name}
              </h3>
              <p className={`text-sm mb-8 ${plan.popular ? "text-gray-400" : "text-gray-500"}`}>
                {lang === "pt" ? plan.descPt : plan.desc}
              </p>

              {/* Price */}
              <div className="mb-10">
                <span className={`text-6xl font-extrabold ${plan.popular ? "text-white" : "text-gray-950"}`}>
                  {plan.price}
                </span>
                {plan.pricePeriod && (
                  <span className={`text-lg ml-1 ${plan.popular ? "text-gray-500" : "text-gray-400"}`}>
                    {lang === "pt" ? plan.pricePeriodPt : plan.pricePeriod}
                  </span>
                )}
              </div>

              {/* CTA */}
              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                className={`btn-shimmer w-full py-5 rounded-full font-semibold text-base mb-10 ${plan.popular ? "bg-white text-gray-950" : "bg-gray-950 text-white"}`}
              >
                {lang === "pt" ? plan.ctaPt : plan.cta}
              </motion.button>

              {/* Two-column breakdown */}
              <div className={`border-t pt-8 ${plan.popular ? "border-white/10" : "border-gray-200"}`}>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <div className={`text-xs font-semibold uppercase tracking-wider mb-4 ${plan.popular ? "text-gray-500" : "text-gray-400"}`}>
                      {lang === "pt" ? "Precisamos de" : "What we need"}
                    </div>
                    <ul className="space-y-2">
                      {(lang === "pt" ? plan.needsPt : plan.needs).map((item) => (
                        <li key={item} className={`text-xs flex items-start gap-2 ${plan.popular ? "text-gray-400" : "text-gray-500"}`}>
                          <span className="mt-0.5 opacity-40">→</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <div className={`text-xs font-semibold uppercase tracking-wider mb-4 ${plan.popular ? "text-gray-500" : "text-gray-400"}`}>
                      {lang === "pt" ? "O que recebes" : "What you get"}
                    </div>
                    <ul className="space-y-2">
                      {(lang === "pt" ? plan.getsPt : plan.gets).map((item) => (
                        <li key={item} className={`text-xs flex items-start gap-2 ${plan.popular ? "text-gray-300" : "text-gray-600"}`}>
                          <Check size={12} className={`mt-0.5 flex-shrink-0 ${plan.popular ? "text-gray-500" : "text-gray-400"}`} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-10 text-gray-400 text-sm"
        >
          {lang === "pt"
            ? "Todos os planos incluem clonagem de voz, monitorização de tendências e publicação automática. Sem taxas ocultas. Cancela quando quiseres."
            : "All plans include voice cloning, trend monitoring, and auto-publishing. No hidden fees. Cancel anytime."}
        </motion.p>
      </div>
    </section>
  );
}
