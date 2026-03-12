import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/i18n";

const HowItWorksSection = () => {
  const { t } = useTranslation();

  return (
    <section id="how-it-works" className="py-24">
      <div className="container max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            {t.howItWorks.title}
          </h2>
        </div>

        <div className="space-y-12">
          {t.howItWorks.steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-start gap-6"
            >
              <div className="flex-shrink-0 w-16 h-16 rounded-lg bg-gradient-brand flex items-center justify-center">
                <span className="text-2xl font-bold text-primary-foreground">{String(i + 1).padStart(2, '0')}</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-body-secondary leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button variant="gradient" size="xl" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>{t.howItWorks.cta}</Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
