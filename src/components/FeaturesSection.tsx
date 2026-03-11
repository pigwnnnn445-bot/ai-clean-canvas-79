import { motion } from "framer-motion";
import { Layers, Compass, UserCheck, Video, Scissors, Music } from "lucide-react";

const features = [
  {
    icon: Layers,
    title: "Multi-Modal Input",
    description: "Upload up to 9 images, 3 videos, and 3 audio files. Combine text, images, videos, and audio freely.",
  },
  {
    icon: Compass,
    title: "Reference Anything",
    description: "Reference motion, effects, camera movements, characters, scenes, and sounds using natural language.",
  },
  {
    icon: UserCheck,
    title: "Superior Consistency",
    description: "Maintain perfect consistency for faces, clothing, text, scenes, and visual styles across your video.",
  },
  {
    icon: Video,
    title: "Precise Motion Replication",
    description: "Upload a reference video to replicate complex choreography, camera movements, and action sequences.",
  },
  {
    icon: Scissors,
    title: "Video Extension & Editing",
    description: "Extend existing videos, merge clips, or edit specific segments while preserving the rest.",
  },
  {
    icon: Music,
    title: "Built-in Audio Generation",
    description: "Auto-generate context-aware sound effects and background music. Sync video to uploaded audio.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24">
      <div className="container max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
            Key Features of Seedance 2.0
          </h2>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
            A truly controllable multi-modal AI video model. Reference anything, edit anything, create anything.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <motion.article
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group p-6 rounded-lg border border-border bg-card transition-all duration-300 hover:border-primary/40 hover:shadow-[var(--shadow-amber)]"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 transition-colors group-hover:bg-primary/20">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
