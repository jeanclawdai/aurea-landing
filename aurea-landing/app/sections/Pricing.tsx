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
  const { t } = useLang();
  return (
    <section id="pricing" className="py-24 px-4 sm:px-6 lg:px-8 section-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            {t.pricing.eyebrow}
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-navy mb-4">
            {t.pricing.headline}
          </h2>
          <p className="text-lg text-navy-light max-w-2xl mx-auto">
            Choose your level of automation. All plans include a 14-day free trial.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative rounded-3xl ${
                plan.popular
                  ? "bg-gray-900 text-white border border-gray-900 shadow-md"
                  : "bg-white border border-gray-200 shadow-sm"
              }`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1.5 bg-primary text-white text-sm font-medium rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="p-8">
                {/* Plan name */}
                <h3 className={`text-xl font-semibold mb-2 ${plan.popular ? "text-white" : "text-gray-900"}`}>{plan.name}</h3>
                <p className={`text-sm mb-6 ${plan.popular ? "text-white/70" : "text-gray-500"}`}>{plan.description}</p>

                {/* Price */}
                <div className="mb-8">
                  <span className={`text-5xl font-bold ${plan.popular ? "text-white" : "text-gray-900"}`}>{plan.price}</span>
                  <span className={plan.popular ? "text-white/60" : "text-gray-400"}>{plan.period}</span>
                </div>

                {/* Features */}
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${plan.popular ? "bg-white/20" : "bg-primary/10"}`}>
                        <Check className={`w-3 h-3 ${plan.popular ? "text-white" : "text-primary"}`} />
                      </div>
                      <span className={`text-sm ${plan.popular ? "text-white/80" : "text-gray-500"}`}>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <button
                  className={`w-full py-4 rounded-2xl font-medium transition-all ${
                    plan.popular
                      ? "bg-white text-gray-900 shadow-lg hover:bg-white/90"
                      : "bg-gray-900 text-white hover:bg-gray-800"
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
          className="text-center mt-12 text-gray-400"
        >
          All plans include voice cloning setup, trend monitoring, and hands-free posting. 
          No hidden fees. Cancel anytime.
        </motion.p>
      </div>
    </section>
  );
}
