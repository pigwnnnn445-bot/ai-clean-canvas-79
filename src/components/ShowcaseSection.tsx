import { Play, X } from "lucide-react";
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
];


const ShowcaseCard = ({ item, onClick }: { item: ShowcaseItem; onClick: () => void }) => {
  const [hovered, setHovered] = useState(false);

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
        <p className="text-xs text-foreground/90 line-clamp-2">{item.prompt}</p>
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
