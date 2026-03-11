import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "Seedance 2.0's multi-modal input is a game-changer. I can finally reference a dance video and apply it to any character I want.",
    name: "Sarah Chen",
    role: "Content Creator",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop",
  },
  {
    quote: "The reference capability is mind-blowing. I uploaded a film clip and the model perfectly replicated the camera movement and pacing.",
    name: "Marcus Rodriguez",
    role: "Filmmaker",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop",
  },
  {
    quote: "Finally, character consistency that actually works! Faces, clothing, even small text - everything stays consistent throughout the video.",
    name: "Emily Watson",
    role: "Creative Director",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop",
  },
  {
    quote: "The built-in audio generation is fantastic. Sound effects match the action perfectly, and the music beat sync feature is incredibly useful.",
    name: "Alex Turner",
    role: "Music Video Director",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=80&h=80&fit=crop",
  },
  {
    quote: "The natural language control is so intuitive. I just describe what I want to reference and how, and the model understands perfectly.",
    name: "Mohammed Hassan",
    role: "Digital Artist",
    avatar: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=80&h=80&fit=crop",
  },
  {
    quote: "Video editing in Seedance 2.0 is revolutionary. I can modify specific segments without regenerating the entire video. Huge time saver!",
    name: "Olivia Martinez",
    role: "Video Editor",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&h=80&fit=crop",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-24">
      <div className="container max-w-5xl">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-primary uppercase tracking-wider mb-2">Testimonials</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
            Loved by Creators Worldwide
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.blockquote
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 rounded-lg border border-border bg-card"
            >
              <p className="text-sm text-muted-foreground leading-relaxed mb-6 italic">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover"
                  loading="lazy"
                />
                <div>
                  <p className="text-sm font-semibold text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
