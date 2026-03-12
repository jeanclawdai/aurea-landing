"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Core",
    price: "$299",
    period: "/month",
    description: "Perfect for solo practitioners getting started with AI marketing.",
    features: [
      "AI content generation (20 posts/month)",
      "Social media scheduling",
      "Basic analytics dashboard",
      "Email support",
      "1 clinic location",
    ],
    cta: "Start Free Trial",
    popular: false,
  },
  {
    name: "Growth",
    price: "$599",
    period: "/month",
    description: "For growing clinics ready to scale their digital presence.",
    features: [
      "AI content generation (unlimited)",
      "Video creation & editing",
      "Advanced analytics & reporting",
      "Priority support",
      "Up to 3 clinic locations",
      "Patient engagement automation",
      "Reputation management",
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
      "Custom AI training",
      "Dedicated account manager",
      "White-label options",
      "Unlimited locations",
      "API access",
      "Custom integrations",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 px-4 sm:px-6 lg:px-8">
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
            Pricing
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-navy mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-navy-light max-w-2xl mx-auto">
            Choose the plan that fits your clinic. All plans include a 14-day free trial.
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
                  ? "bg-gradient-to-b from-primary/5 to-accent/5 border-2 border-primary/20"
                  : "glass-card"
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
                <h3 className="text-xl font-semibold text-navy mb-2">{plan.name}</h3>
                <p className="text-navy-light text-sm mb-6">{plan.description}</p>

                {/* Price */}
                <div className="mb-8">
                  <span className="text-5xl font-bold text-navy">{plan.price}</span>
                  <span className="text-navy-light">{plan.period}</span>
                </div>

                {/* Features */}
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      <span className="text-navy-light text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <button
                  className={`w-full py-4 rounded-2xl font-medium transition-all ${
                    plan.popular
                      ? "bg-primary text-white shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30"
                      : "glass-card text-navy hover:bg-white/80"
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
