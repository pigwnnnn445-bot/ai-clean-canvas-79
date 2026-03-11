import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const useCases = [
  { title: "Advertising & Marketing", desc: "Create compelling promotional content by referencing successful ad templates.", tags: ["Product Videos", "Brand Content", "Commercial Ads"] },
  { title: "Creative Storytelling", desc: "Craft unique narratives using multi-modal inputs. Reference film techniques and cinematic styles.", tags: ["Short Films", "Art Projects", "Music Videos"] },
  { title: "Social Media Content", desc: "Generate scroll-stopping content by referencing trending templates and effects.", tags: ["Instagram Reels", "TikTok Videos", "YouTube Shorts"] },
  { title: "Motion & Dance Videos", desc: "Upload reference choreography and apply them to any character.", tags: ["Dance Covers", "Action Sequences", "Choreography"] },
  { title: "Film Pre-Visualization", desc: "Reference film clips to replicate camera movements, transitions, and visual effects.", tags: ["Storyboarding", "Camera Planning", "Concept Proofing"] },
  { title: "Music & Audio Sync", desc: "Upload audio tracks and create perfectly beat-synced videos.", tags: ["Beat Sync", "Music Videos", "Sound Design"] },
];

const UseCasesSection = () => {
  return (
    <section id="use-cases" className="py-24">
      <div className="container max-w-5xl">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-primary uppercase tracking-wider mb-2">Use Cases</p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Endless Possibilities For Every Creator
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {useCases.map((uc, i) => (
            <motion.div
              key={uc.title}
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
          <Button variant="gradient" size="lg">Get Started Now</Button>
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;
