"use client";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { useLang } from "../context/LanguageContext";
import { SectionPill } from "@/components/ui/section-pill";

const plans = [
  {
    name: "Starter",
    namePt: "Starter",
    badge: "14-day free trial",
    badgePt: "14 dias grátis",
    price: "$299",
    pricePeriod: "/month",
    pricePeriodPt: "/mês",
    desc: "For solo practitioners getting started.",
    descPt: "Para clínicos individuais a começar.",
    popular: false,
    gets: [
      "20 AI posts/month",
      "Pattern intelligence engine",
      "Canva integration",
      "1 platform (IG or TikTok)",
      "Smart scheduling",
      "Basic analytics dashboard",
      "Brand kit setup",
    ],
    getsPt: [
      "20 posts IA/mês",
      "Motor de inteligência de padrões",
      "Integração Canva",
      "1 plataforma (IG ou TikTok)",
      "Agendamento inteligente",
      "Dashboard analytics básico",
      "Configuração brand kit",
    ],
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
    desc: "For clinics ready to scale.",
    descPt: "Para clínicas prontas para crescer.",
    popular: true,
    gets: [
      "Unlimited AI posts",
      "Pattern intelligence engine",
      "Canva integration",
      "All platforms (IG, TikTok, YouTube)",
      "AI content calendar",
      "Advanced analytics & insights",
      "Daily trending hashtags",
      "Caption voice matching",
      "Priority support",
    ],
    getsPt: [
      "Posts IA ilimitados",
      "Motor de inteligência de padrões",
      "Integração Canva",
      "Todas plataformas (IG, TikTok, YouTube)",
      "Calendário de conteúdo IA",
      "Analytics & insights avançados",
      "Hashtags trending diários",
      "Legendas na tua voz",
      "Suporte prioritário",
    ],
    cta: "Start Free Trial",
    ctaPt: "Começar Gratuitamente",
  },
  {
    name: "Studio",
    namePt: "Studio",
    badge: "Coming Soon",
    badgePt: "Em Breve",
    price: "$999",
    pricePeriod: "/month",
    pricePeriodPt: "/mês",
    desc: "Full AI video with your voice & face.",
    descPt: "Vídeo IA completo com a tua voz e cara.",
    popular: false,
    gets: [
      "Everything in Growth",
      "Voice cloning (5-min setup)",
      "AI talking-head videos",
      "Reels & TikToks with your likeness",
      "Multi-location support",
      "Dedicated account manager",
      "Custom AI training",
      "API access",
    ],
    getsPt: [
      "Tudo do Growth",
      "Clonagem de voz (setup 5-min)",
      "Vídeos talking-head IA",
      "Reels & TikToks com a tua imagem",
      "Suporte multi-localização",
      "Gestor de conta dedicado",
      "Treino IA personalizado",
      "Acesso API",
    ],
    cta: "Join Waitlist",
    ctaPt: "Entrar na Lista",
  },
];

export default function Pricing() {
  const { lang } = useLang();

  return (
    <section id="pricing" className="py-32 px-6 bg-white dark:bg-[#0a0a0f]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <SectionPill className="mb-6">{lang === "pt" ? "PREÇOS" : "PRICING"}</SectionPill>
          <h2 className="text-6xl sm:text-7xl font-bold text-gray-950 dark:text-white leading-tight mb-6">
            {lang === "pt"
              ? <>Simples, <span className="font-serif-italic font-normal">sem surpresas.</span></>
              : <>Simple, <span className="font-serif-italic font-normal">no surprises.</span></>}
          </h2>
          <p className="text-xl text-gray-400 dark:text-gray-500 max-w-xl mx-auto">
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
              className={`rounded-3xl p-10 flex flex-col ${plan.popular ? "bg-gray-950 holographic-border" : "bg-gray-100 dark:bg-[#111118]"}`}
            >
              {/* Top badge */}
              <div className="mb-8">
                <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${plan.popular ? "bg-white/10 text-gray-300" : "bg-white dark:bg-white/10 text-gray-500 dark:text-gray-400"}`}>
                  {lang === "pt" ? plan.badgePt : plan.badge}
                </span>
              </div>

              {/* Plan name */}
              <h3 className={`text-2xl font-extrabold mb-2 ${plan.popular ? "text-white" : "text-gray-950 dark:text-white"}`}>
                {lang === "pt" ? plan.namePt : plan.name}
              </h3>
              <p className={`text-sm mb-8 ${plan.popular ? "text-gray-400" : "text-gray-500"}`}>
                {lang === "pt" ? plan.descPt : plan.desc}
              </p>

              {/* Price */}
              <div className="mb-10">
                <span className={`text-6xl font-extrabold ${plan.popular ? "text-white" : "text-gray-950 dark:text-white"}`}>
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

              {/* What you get */}
              <div className={`border-t pt-8 ${plan.popular ? "border-white/10" : "border-gray-200"}`}>
                <ul className="space-y-3">
                  {(lang === "pt" ? plan.getsPt : plan.gets).map((item) => (
                    <li key={item} className={`text-sm flex items-start gap-3 ${plan.popular ? "text-gray-300" : "text-gray-600"}`}>
                      <Check size={16} className={`mt-0.5 flex-shrink-0 ${plan.popular ? "text-white" : "text-gray-900"}`} />
                      {item}
                    </li>
                  ))}
                </ul>
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
