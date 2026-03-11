import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const plans = [
  { name: "Basic", desc: "Ideal for hobbyists and beginners", monthly: "$9.90", yearly: "$118.80", yearlyMonthly: "$9.90", credits: "800 credits/month", features: ["Up to 80 videos/month", "Multiple AI video models", "Standard generation speed", "No watermark", "Commercial Use License"], popular: false },
  { name: "Standard", desc: "Perfect for most creators", monthly: "$19.90", yearly: "$238.80", yearlyMonthly: "$19.90", credits: "2,000 credits/month", features: ["Up to 200 videos/month", "Multiple AI video models", "Priority generation", "No watermark", "Priority support", "Commercial Use License"], popular: true },
  { name: "Pro", desc: "Ideal for power users", monthly: "$49.90", yearly: "$598.80", yearlyMonthly: "$49.90", credits: "6,000 credits/month", features: ["Up to 600 videos/month", "Multiple AI video models", "Fastest generation speed", "No watermark", "Expert team support", "Commercial Use License"], popular: false },
];

const PricingSection = () => {
  const [annual, setAnnual] = useState(true);

  return (
    <section id="pricing" className="py-24">
      <div className="container max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Pricing</h2>
          <p className="mt-3 text-body-secondary">Choose the plan that works best for you.</p>

          <div className="mt-6 inline-flex items-center gap-1 rounded-full border border-border p-1 bg-card-secondary">
            <button
              onClick={() => setAnnual(false)}
              className={`px-4 py-2 text-sm rounded-full transition-colors cursor-pointer ${!annual ? "bg-primary text-primary-foreground" : "text-body-secondary hover:text-foreground"}`}
            >
              Monthly
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`px-4 py-2 text-sm rounded-full transition-colors cursor-pointer ${annual ? "bg-primary text-primary-foreground" : "text-body-secondary hover:text-foreground"}`}
            >
              Annually <span className="text-xs opacity-75">Save 50%</span>
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative p-6 rounded-lg border bg-card shadow-soft ${plan.popular ? "border-primary ring-1 ring-primary/20" : "border-border"}`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 text-xs font-semibold bg-gradient-brand text-primary-foreground rounded-full">
                  Most Popular
                </span>
              )}
              <h3 className="text-xl font-bold">{plan.name}</h3>
              <p className="text-sm text-body-muted mt-1">{plan.desc}</p>
              <div className="mt-4">
                <span className="text-3xl font-bold text-foreground">{annual ? plan.yearlyMonthly : plan.monthly}</span>
                <span className="text-body-secondary text-sm">/month</span>
              </div>
              <p className="text-xs text-body-muted mt-1">{plan.credits}</p>
              <Button variant={plan.popular ? "gradient" : "outline"} className="w-full mt-6">Subscribe</Button>
              <ul className="mt-6 space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-body-secondary">
                    <Check className="w-4 h-4 text-brand-teal flex-shrink-0 mt-0.5" />
                    {f}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
