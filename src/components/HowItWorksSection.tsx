import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const steps = [
  {
    num: "01",
    title: "Upload Your Assets",
    description: "Upload images, videos, or audio files as references. Combine up to 12 files across different modalities.",
  },
  {
    num: "02",
    title: "Describe Your Vision",
    description: "Use natural language to describe what you want. Reference specific assets by tagging them in your prompt.",
  },
  {
    num: "03",
    title: "Generate & Iterate",
    description: "Generate your video in 4-15 seconds length. Extend, edit, or refine your creation with targeted adjustments.",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-24">
      <div className="container max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
            How to Create AI Videos
          </h2>
        </div>

        <div className="space-y-12">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-start gap-6"
            >
              <div className="flex-shrink-0 w-16 h-16 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center">
                <span className="font-heading text-2xl font-bold text-primary">{step.num}</span>
              </div>
              <div>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button variant="hero" size="xl">Start Creating Now</Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
