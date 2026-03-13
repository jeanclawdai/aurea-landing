"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { useLang } from "../context/LanguageContext";

const plans = [
  {
    name: "Starter",
    price: "$299",
    period: "/month",
    description: "Perfect for solo practitioners ready to automate their social media.",
    features: [
      "20 AI-generated videos/month",
      "Voice cloning setup",
      "Auto-editing with subtitles",
      "Instagram & TikTok posting",
      "Trend research & content planning",
      "Basic analytics dashboard",
      "Email support",
    ],
    cta: "Start Free Trial",
    popular: false,
  },
  {
    name: "Growth",
    price: "$599",
    period: "/month",
    description: "For clinics ready to scale with unlimited content and full automation.",
    features: [
      "Unlimited AI-generated videos",
      "Advanced voice cloning & customization",
      "Auto-editing with premium templates",
      "All platforms: IG, TikTok, YouTube",
      "Real-time trend intelligence",
      "AI content calendar & scheduling",
      "Priority support",
      "Conversational editing requests",
      "Performance analytics & insights",
    ],
    cta: "Start Free Trial",
    popular: true,
  },
  {
    name: "Studio",
    price: "Custom",
    period: "",
    description: "Enterprise solution for multi-location aesthetic groups.",
    features: [
      "Everything in Growth",
      "Multiple clinic locations",
      "Custom AI training",
      "White-label options",
      "API access",
      "Dedicated account manager",
      "Custom integrations",
      "SLA guarantee",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

export default function Pricing() {
  const { t, lang } = useLang();
  return (
    <section id="pricing" className="py-32 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-4 block">
            {t.pricing.eyebrow}
          </span>
          <h2 className="text-6xl sm:text-7xl font-extrabold text-gray-950 leading-tight mb-6">
            {lang === "pt" ? <>Simples, <span className="font-serif-italic font-normal">sem surpresas</span>.</> : <>Simple, <span className="font-serif-italic font-normal">no surprises</span>.</>}
          </h2>
          <p className="text-xl text-gray-400 max-w-xl mx-auto">
            {lang === "pt" ? "Todos os planos incluem 14 dias grátis. Cancela quando quiseres." : "All plans include a 14-day free trial. Cancel anytime."}
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className={`relative rounded-3xl ${
                plan.popular
                  ? "bg-gray-950 text-white border border-gray-900 shadow-2xl shadow-black/20"
                  : "bg-gray-50 border border-gray-100"
              }`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1.5 bg-white text-gray-950 text-sm font-semibold rounded-full shadow-md">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="p-10">
                {/* Plan name */}
                <h3 className={`text-2xl font-bold mb-2 ${plan.popular ? "text-white" : "text-gray-950"}`}>{plan.name}</h3>
                <p className={`text-sm mb-8 leading-relaxed ${plan.popular ? "text-white/60" : "text-gray-500"}`}>{plan.description}</p>

                {/* Price */}
                <div className="mb-10">
                  <span className={`text-6xl font-bold tracking-tight ${plan.popular ? "text-white" : "text-gray-950"}`}>{plan.price}</span>
                  <span className={`text-lg ml-1 ${plan.popular ? "text-white/50" : "text-gray-400"}`}>{plan.period}</span>
                </div>

                {/* Features */}
                <ul className="space-y-4 mb-10">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${plan.popular ? "bg-white/15" : "bg-gray-200"}`}>
                        <Check className={`w-3 h-3 ${plan.popular ? "text-white" : "text-gray-700"}`} />
                      </div>
                      <span className={`text-sm leading-relaxed ${plan.popular ? "text-white/75" : "text-gray-600"}`}>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <button
                  className={`w-full py-5 rounded-2xl text-lg font-semibold transition-all ${
                    plan.popular
                      ? "bg-white text-gray-950 hover:bg-gray-100 shadow-lg"
                      : "bg-gray-950 text-white hover:bg-gray-800"
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-14 text-gray-400 text-base"
        >
          All plans include voice cloning setup, trend monitoring, and hands-free posting.
          No hidden fees. Cancel anytime.
        </motion.p>
      </div>
    </section>
  );
}
