import { motion } from "framer-motion";
import { Layers, Compass, UserCheck, Video, Scissors, Music } from "lucide-react";
import { useTranslation } from "@/i18n";

const icons = [Layers, Compass, UserCheck, Video, Scissors, Music];

const FeaturesSection = () => {
  const { t } = useTranslation();

  return (
    <section id="features" className="py-24">
      <div className="container max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            {t.features.title} <span className="text-gradient-brand">{t.features.titleHighlight}</span>
          </h2>
          <p className="mt-3 text-body-secondary max-w-2xl mx-auto">
            {t.features.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.features.items.map((feature, i) => {
            const Icon = icons[i];
            return (
              <motion.article
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="group p-6 rounded-lg border border-border bg-card shadow-soft transition-all duration-200 hover:border-primary/40 hover:bg-hover-bg cursor-pointer"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 transition-colors group-hover:bg-primary/20">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-body-secondary leading-relaxed">{feature.description}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
