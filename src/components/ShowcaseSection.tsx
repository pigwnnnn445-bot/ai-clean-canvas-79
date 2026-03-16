import { Play, X, Copy, Check } from "lucide-react";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "@/i18n";

interface ShowcaseItem {
  video: string;
  prompt: string;
}

const showcaseItems: ShowcaseItem[] = [
  { video: "/videos/1.mp4", prompt: "Cozy everyday lifestyle video with multiple shots inside a coffee shop. Barista making coffee, hot coffee poured with steam rising, person sitting down with coffee, slowly drinking near a window with soft daylight. Warm cozy lighting, calm daily life atmosphere, cinematic style" },
  { video: "/videos/2.mp4", prompt: "Boxing exhibition event with UFC-style visuals. Two fighters boxing as near-silhouettes with visible muscle outlines, subtle crowd in background, dramatic spotlight from above, smoke and light beams, intense atmosphere" },
  { video: "/videos/3.mp4", prompt: "A realistic cinematic video of a fluffy orange cat driving a small car, paws on the steering wheel, looking focused on a quiet street. Camera moves from front windshield to side tracking shot. Soft daylight, shallow depth of field, ultra detailed" },
  { video: "/videos/4.mp4", prompt: "A man driving on a long empty highway when a massive tornado appears in the distance. Dark storm clouds, strong winds blowing dust. Driver grips steering wheel in shock. Wide shot of tornado approaching. Dramatic lighting, cinematic style, ultra detailed" },
  { video: "/videos/5.mp4", prompt: "A cute cat sleeping on a trash can in a quiet street. A dog walks past and accidentally bumps it, waking the cat who jumps up in shock while the dog looks confused. Funny moment, cinematic camera, bright natural lighting" },
  { video: "/videos/6.mp4", prompt: "Luxury seaside scene: crystal champagne flutes and chilled bottle in ice bucket on infinity pool edge, turquoise ocean horizon. Straw sun hat and sunglasses on white linen lounger. Cinematic push-in, shallow depth of field, ultra-realistic editorial style, 4K" },
  { video: "/videos/7.mp4", prompt: "A car driving forward while scenery transforms through seasons: summer rainforest with dense green trees, autumn with golden leaves falling, then snowy winter landscape. Smooth cinematic transitions, tracking shot, natural lighting, 4K" },
  { video: "/videos/8.mp4", prompt: "A parkour athlete running across city rooftops, leaping between buildings with fast moves. Camera follows closely over gaps and ledges. Dramatic city skyline at sunset, cinematic tracking shots, ultra realistic action scene, 4K" },
  { video: "/videos/9.mp4", prompt: "Beautiful female cats designed like K-pop idols dancing street dance together. Natural feline proportions, realistic fur, Korean idol street fashion. Dynamic synchronized moves, pastel urban backdrop with graffiti and neon lights, cinematic shallow depth of field" },
  { video: "/videos/10.mp4", prompt: "A confident brown tabby cat surfing on a colorful surfboard wearing stylish tortoiseshell eyeglasses. Riding ocean waves with water splashing, tropical beach with palm trees. Low-angle camera, realistic fur in wind, cinematic surf photography, 4K" },
  { video: "/videos/11.mp4", prompt: "A miniature ice-cream café shaped like a giant waffle cone on a floating cloud island, topped with strawberry and vanilla ice-cream swirl as the roof. Warm light from round windows, tiny café tables, flower bushes, glowing lanterns. Camera slowly circles the cozy fantasy café, cinematic lighting, 4K" },
  { video: "/videos/12.mp4", prompt: "Golden hour on the African savanna. A tabby house cat taking a selfie with big adorable eyes and a gentle smile. An African lion stands behind. Warm dry grassland landscape, surreal style with cinematic lighting and shallow depth of field, exquisite fur detail" },
  { video: "/videos/13.mp4", prompt: "Minimalist skincare product photography: cylindrical face cream jar, matte white container on natural stone pedestal with driftwood-textured base. Neutral beige background, warm sunlight, soft natural shadows, ultra-photorealistic studio shoot, 8K" },
  { video: "/videos/14.mp4", prompt: "A cute little black kitten with big eyes holding a cup of coffee and taking a sip. Minimalist flat illustration style with simple clean lines, solid-color background, children's picture book aesthetic, light cute and warm" },
  { video: "/videos/15.mp4", prompt: "A golden retriever puppy performing a skateboard trick in mid-air. Ultra-wide 10mm lens, low ground-level angle, skate park under bright natural sunlight. Puppy leaps with paws spread out, energetic sports visual style" },
  { video: "/videos/16.mp4", prompt: "A stylish couple dancing waltz on a reflective salt lake mirror surface, surreal high-fashion editorial. Woman in flowing yellow haute couture gown, man in tailored suit with hat. Symmetrical composition, blue sky, 85mm fashion photography style" },
  { video: "/videos/17.mp4", prompt: "A hidden tropical lagoon with crystal-clear luminous turquoise water, surrounded by towering limestone cliffs with dense jungle. Small wooden hut on rock, sunlight filtering through canopy. Cinematic drone aerial style, HDR lighting, 8K" },
  { video: "/videos/18.mp4", prompt: "A vinyl record spinning on a turntable, stylus gently resting on the rotating surface. Warm ambient lighting, soft highlights on black vinyl, fine groove textures visible. Cozy atmosphere, shallow depth of field, cinematic lighting, photorealistic" },
  { video: "/videos/19.mp4", prompt: "A cute small kitten sleeping peacefully, then slowly waking up, stretching and yawning wide. Soft natural light, cozy atmosphere, close-up camera, ultra realistic fur, cinematic style, 4K" },
];


const ShowcaseCard = ({ item, onClick }: { item: ShowcaseItem; onClick: () => void }) => {
  const [hovered, setHovered] = useState(false);
  const [copied, setCopied] = useState(false);

  return (
    <div
      className="relative rounded-xl overflow-hidden cursor-pointer group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
    >
      <video
        src={item.video}
        muted
        playsInline
        preload="metadata"
        className="w-full h-auto object-cover block"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-12 h-12 rounded-full bg-background/60 backdrop-blur-sm flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
          <Play className="w-5 h-5 text-foreground fill-foreground ml-0.5" />
        </div>
      </div>
      <div
        className={`absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-background/80 to-transparent transition-opacity duration-300 ${
          hovered ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="flex items-start gap-1.5">
          <p className="text-xs text-foreground/90 line-clamp-2 flex-1">{item.prompt}</p>
          <button
            onClick={(e) => {
              e.stopPropagation();
              navigator.clipboard.writeText(item.prompt);
              setCopied(true);
              setTimeout(() => setCopied(false), 1500);
            }}
            className="shrink-0 p-1 rounded-md hover:bg-foreground/10 text-foreground/70 hover:text-foreground transition-colors cursor-pointer"
            aria-label="Copy prompt"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-green-500" /> : <Copy className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>
    </div>
  );
};

const VideoModal = ({ item, onClose }: { item: ShowcaseItem; onClose: () => void }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    videoRef.current?.play();
    const handleKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-background/80 backdrop-blur-md"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.85, opacity: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="relative max-w-4xl w-full mx-4 max-h-[85vh] flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 w-8 h-8 rounded-full bg-foreground/80 hover:bg-foreground flex items-center justify-center text-background transition-colors cursor-pointer z-10"
        >
          <X className="w-4 h-4" />
        </button>
        <div className="rounded-xl overflow-hidden bg-card shadow-2xl max-h-[85vh]">
          <video
            ref={videoRef}
            src={item.video}
            loop
            controls
            playsInline
            className="w-full h-full max-h-[85vh] object-contain block"
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

const ShowcaseSection = () => {
  const [activeItem, setActiveItem] = useState<ShowcaseItem | null>(null);
  
  const { t } = useTranslation();

  return (
    <section className="py-24" aria-label="Showcase gallery">
      <div className="container text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">
          {t.showcase.title} <span className="text-gradient-brand">{t.showcase.titleHighlight}</span>
        </h2>
        <p className="mt-3 text-body-secondary max-w-xl mx-auto">
          {t.showcase.subtitle}
        </p>
      </div>

      <div className="container max-w-7xl">
        <div className="columns-2 md:columns-3 lg:columns-4 gap-3 [column-fill:balanced]">
          {showcaseItems.map((item, i) => (
            <div key={i} className="mb-3 break-inside-avoid">
              <ShowcaseCard item={item} onClick={() => setActiveItem(item)} />
            </div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {activeItem && <VideoModal item={activeItem} onClose={() => setActiveItem(null)} />}
      </AnimatePresence>
    </section>
  );
};

export default ShowcaseSection;
