import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/i18n";

const UseCasesSection = () => {
  const { t } = useTranslation();

  return (
    <section id="use-cases" className="py-24">
      <div className="container max-w-5xl">
        <div className="text-center mb-16">
          
          <h2 className="text-3xl md:text-4xl font-bold">
            {t.useCases.title}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {t.useCases.items.map((uc, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="p-6 rounded-lg border border-border bg-card shadow-soft hover:bg-hover-bg transition-colors cursor-pointer"
            >
              <h3 className="text-lg font-semibold mb-2">{uc.title}</h3>
              <p className="text-sm text-body-secondary mb-4">{uc.desc}</p>
              <div className="flex flex-wrap gap-2">
                {uc.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 text-xs rounded-full border border-border text-body-secondary bg-card-secondary">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="gradient" size="lg" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>{t.useCases.cta}</Button>
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;
