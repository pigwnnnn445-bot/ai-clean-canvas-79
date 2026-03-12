import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { useTranslation } from "@/i18n";

const planPrices = [
  { monthly: "$9.90", yearly: "$118.80", yearlyMonthly: "$9.90", popular: false },
  { monthly: "$19.90", yearly: "$238.80", yearlyMonthly: "$19.90", popular: true },
  { monthly: "$49.90", yearly: "$598.80", yearlyMonthly: "$49.90", popular: false },
];

const PricingSection = () => {
  const [annual, setAnnual] = useState(true);
  const { t } = useTranslation();

  return (
    <section id="pricing" className="py-24">
      <div className="container max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">{t.pricing.title}</h2>
          <p className="mt-3 text-body-secondary">{t.pricing.subtitle}</p>

          <div className="mt-6 inline-flex items-center gap-1 rounded-full border border-border p-1 bg-card-secondary">
            <button
              onClick={() => setAnnual(false)}
              className={`px-4 py-2 text-sm rounded-full transition-colors cursor-pointer ${!annual ? "bg-primary text-primary-foreground" : "text-body-secondary hover:text-foreground"}`}
            >
              {t.pricing.monthly}
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`px-4 py-2 text-sm rounded-full transition-colors cursor-pointer ${annual ? "bg-primary text-primary-foreground" : "text-body-secondary hover:text-foreground"}`}
            >
              {t.pricing.annually} <span className="text-xs opacity-75">{t.pricing.save}</span>
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {t.pricing.plans.map((plan, i) => {
            const prices = planPrices[i];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative p-6 rounded-lg border bg-card shadow-soft ${prices.popular ? "border-primary ring-1 ring-primary/20" : "border-border"}`}
              >
                {prices.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 text-xs font-semibold bg-gradient-brand text-primary-foreground rounded-full">
                    {t.pricing.mostPopular}
                  </span>
                )}
                <h3 className="text-xl font-bold">{plan.name}</h3>
                <p className="text-sm text-body-muted mt-1">{plan.desc}</p>
                <div className="mt-4">
                  <span className="text-3xl font-bold text-foreground">{annual ? prices.yearlyMonthly : prices.monthly}</span>
                  <span className="text-body-secondary text-sm">{t.pricing.perMonth}</span>
                </div>
                <p className="text-xs text-body-muted mt-1">{plan.credits}</p>
                <Button variant={prices.popular ? "gradient" : "outline"} className="w-full mt-6">{t.pricing.subscribe}</Button>
                <ul className="mt-6 space-y-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-body-secondary">
                      <Check className="w-4 h-4 text-brand-teal flex-shrink-0 mt-0.5" />
                      {f}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
