import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/i18n";

const FooterCTA = () => {
  const { t } = useTranslation();

  return (
    <section className="py-24 border-t border-border">
      <div className="container max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold">{t.footer.title}</h2>
          <p className="mt-4 text-body-secondary max-w-xl mx-auto">
            {t.footer.subtitle}
          </p>
          <div className="mt-8">
            <Button variant="gradient" size="xl" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>{t.footer.cta}</Button>
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 md:gap-8 text-sm text-body-muted">
            <span>{t.footer.multiModal}</span>
            <span className="w-1 h-1 rounded-full bg-border hidden md:block" />
            <span>{t.footer.watermarkFree}</span>
            <span className="w-1 h-1 rounded-full bg-border hidden md:block" />
            <span>{t.footer.referenceAny}</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const SiteFooter = () => {
  return (
    <>
      <FooterCTA />
      <footer className="py-8">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
        </div>
      </footer>
    </>
  );
};

export default SiteFooter;
