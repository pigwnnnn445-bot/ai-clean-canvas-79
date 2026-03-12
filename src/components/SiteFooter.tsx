import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const FooterCTA = () => {
  return (
    <section className="py-24 border-t border-border">
      <div className="container max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold">Ready to Create?</h2>
          <p className="mt-4 text-body-secondary max-w-xl mx-auto">
            Join thousands of creators using Seedance 2.0 to bring their visions to life.
            Reference anything, edit anything, create anything.
          </p>
          <div className="mt-8">
            <Button variant="gradient" size="xl" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Start Creating Now</Button>
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 md:gap-8 text-sm text-body-muted">
            <span>Multi-modal input</span>
            <span className="w-1 h-1 rounded-full bg-border hidden md:block" />
            <span>Watermark-free</span>
            <span className="w-1 h-1 rounded-full bg-border hidden md:block" />
            <span>Reference any content</span>
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
      <footer className="border-t border-border py-8">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm font-bold text-foreground">
            Seedance <span className="text-gradient-brand">2.0</span>
          </p>
          <p className="text-xs text-body-muted">
            © {new Date().getFullYear()} Seedance. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default SiteFooter;
