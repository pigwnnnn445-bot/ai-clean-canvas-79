import { Play, X } from "lucide-react";
import { useState, useRef, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ShowcaseItem {
  video: string;
  prompt: string;
}

const showcaseItems: ShowcaseItem[] = [
  { video: "/videos/1.mp4", prompt: "An editorial photograph of a grand organic modern kitchen with marble backsplash and waterfall island..." },
  { video: "/videos/2.mp4", prompt: "Ultra realistic photo of a vinyl record playing on a turntable, warm ambient lighting..." },
  { video: "/videos/3.mp4", prompt: "A cute little boy astronaut sitting and fishing from a crescent moon, clay animation..." },
  { video: "/videos/4.mp4", prompt: "Top view, premium ultra-realistic professional food photography, dark navy blue textured fabric..." },
  { video: "/videos/5.mp4", prompt: "Stylish couple dancing elegant waltz on reflective salt flat mirror surface, surreal fashion editorial..." },
  { video: "/videos/6.mp4", prompt: "A golden retriever puppy on skateboard doing stunt on air, wide angle lens, sunny daylight..." },
  { video: "/videos/7.mp4", prompt: "Minimal cosmetic cream jar, matte white container, natural stone pedestal, luxury skincare photography..." },
  { video: "/videos/8.mp4", prompt: "Feminine fantasy house architecture, soft flowing curved forms, pink and blush palette, dreamy garden..." },
  { video: "/videos/9.mp4", prompt: "A cute black cat with big eyes holding a cup of coffee, minimalist flat illustration style..." },
  { video: "/videos/10.mp4", prompt: "Low angle view through a dense field of soft peach and pastel pink flowers, shallow depth of field..." },
];

const distributeToColumns = (items: ShowcaseItem[], colCount: number): ShowcaseItem[][] => {
  const columns: ShowcaseItem[][] = Array.from({ length: colCount }, () => []);
  items.forEach((item, i) => columns[i % colCount].push(item));
  return columns;
};

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
      {/* Play button */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-12 h-12 rounded-full bg-background/60 backdrop-blur-sm flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
          <Play className="w-5 h-5 text-foreground fill-foreground ml-0.5" />
        </div>
      </div>
      {/* Prompt on hover */}
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
  const [playing] = useState(true);

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

  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    playing ? v.pause() : v.play();
    setPlaying(!playing);
  };

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
        className="relative max-w-4xl w-full mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-foreground/80 hover:bg-foreground flex items-center justify-center text-background transition-colors cursor-pointer z-10"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="rounded-xl overflow-hidden bg-card shadow-2xl">
          <video
            ref={videoRef}
            src={item.video}
            loop
            controls
            playsInline
            className="w-full h-auto block"
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

const ShowcaseSection = () => {
  const [activeItem, setActiveItem] = useState<ShowcaseItem | null>(null);
  const columns = distributeToColumns(showcaseItems, 4);

  const renderColumns = (colCount: number, hiddenClass: string) => (
    <div className={`${hiddenClass} grid-cols-${colCount} gap-3`}>
      {distributeToColumns(showcaseItems, colCount).map((col, ci) => (
        <div key={ci} className="flex flex-col gap-3">
          {col.map((item, i) => (
            <ShowcaseCard key={i} item={item} onClick={() => setActiveItem(item)} />
          ))}
        </div>
      ))}
    </div>
  );

  return (
    <section className="py-24" aria-label="Showcase gallery">
      <div className="container text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">
          Get <span className="text-gradient-brand">Inspired</span>
        </h2>
        <p className="mt-3 text-body-secondary max-w-xl mx-auto">
          Explore stunning video examples created with Seedance 2.0's multi-modal capabilities.
        </p>
      </div>

      <div className="container max-w-7xl">
        <div className="hidden lg:grid grid-cols-4 gap-3">
          {columns.map((col, ci) => (
            <div key={ci} className="flex flex-col gap-3">
              {col.map((item, i) => (
                <ShowcaseCard key={i} item={item} onClick={() => setActiveItem(item)} />
              ))}
            </div>
          ))}
        </div>
        <div className="hidden md:grid lg:hidden grid-cols-3 gap-3">
          {distributeToColumns(showcaseItems, 3).map((col, ci) => (
            <div key={ci} className="flex flex-col gap-3">
              {col.map((item, i) => (
                <ShowcaseCard key={i} item={item} onClick={() => setActiveItem(item)} />
              ))}
            </div>
          ))}
        </div>
        <div className="grid md:hidden grid-cols-2 gap-3">
          {distributeToColumns(showcaseItems, 2).map((col, ci) => (
            <div key={ci} className="flex flex-col gap-3">
              {col.map((item, i) => (
                <ShowcaseCard key={i} item={item} onClick={() => setActiveItem(item)} />
              ))}
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
