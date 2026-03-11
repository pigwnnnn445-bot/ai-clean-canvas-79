import { Play, Pause } from "lucide-react";
import { useState, useRef, useCallback } from "react";

interface ShowcaseItem {
  video: string;
  prompt: string;
}

const showcaseItems: ShowcaseItem[] = [
  {
    video: "/videos/1.mp4",
    prompt: "An editorial photograph of a grand organic modern kitchen with marble backsplash and waterfall island...",
  },
  {
    video: "/videos/2.mp4",
    prompt: "Ultra realistic photo of a vinyl record playing on a turntable, warm ambient lighting...",
  },
  {
    video: "/videos/3.mp4",
    prompt: "A cute little boy astronaut sitting and fishing from a crescent moon, clay animation...",
  },
  {
    video: "/videos/4.mp4",
    prompt: "Top view, premium ultra-realistic professional food photography, dark navy blue textured fabric...",
  },
  {
    video: "/videos/5.mp4",
    prompt: "Stylish couple dancing elegant waltz on reflective salt flat mirror surface, surreal fashion editorial...",
  },
  {
    video: "/videos/6.mp4",
    prompt: "A golden retriever puppy on skateboard doing stunt on air, wide angle lens, sunny daylight...",
  },
  {
    video: "/videos/7.mp4",
    prompt: "Minimal cosmetic cream jar, matte white container, natural stone pedestal, luxury skincare photography...",
  },
  {
    video: "/videos/8.mp4",
    prompt: "Feminine fantasy house architecture, soft flowing curved forms, pink and blush palette, dreamy garden...",
  },
  {
    video: "/videos/9.mp4",
    prompt: "A cute black cat with big eyes holding a cup of coffee, minimalist flat illustration style...",
  },
  {
    video: "/videos/10.mp4",
    prompt: "Low angle view through a dense field of soft peach and pastel pink flowers, shallow depth of field...",
  },
];

// Distribute items into columns for masonry layout
const distributeToColumns = (items: ShowcaseItem[], colCount: number): ShowcaseItem[][] => {
  const columns: ShowcaseItem[][] = Array.from({ length: colCount }, () => []);
  items.forEach((item, i) => {
    columns[i % colCount].push(item);
  });
  return columns;
};

const ShowcaseCard = ({ item }: { item: ShowcaseItem }) => {
  const [playing, setPlaying] = useState(false);
  const [hovered, setHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;
    if (playing) {
      video.pause();
    } else {
      video.play();
    }
    setPlaying(!playing);
  }, [playing]);

  return (
    <div
      className="relative rounded-xl overflow-hidden cursor-pointer group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => {
        setHovered(false);
        if (videoRef.current && playing) {
          videoRef.current.pause();
          setPlaying(false);
        }
      }}
      onClick={togglePlay}
    >
      <video
        ref={videoRef}
        src={item.video}
        muted
        loop
        playsInline
        preload="metadata"
        className="w-full h-auto object-cover block"
      />

      {/* Play/Pause button */}
      <div
        className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
          playing && !hovered ? "opacity-0" : "opacity-100"
        }`}
      >
        <div className="w-12 h-12 rounded-full bg-background/60 backdrop-blur-sm flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
          {playing ? (
            <Pause className="w-5 h-5 text-foreground fill-foreground" />
          ) : (
            <Play className="w-5 h-5 text-foreground fill-foreground ml-0.5" />
          )}
        </div>
      </div>

      {/* Prompt tooltip on hover */}
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

const ShowcaseSection = () => {
  const columns = distributeToColumns(showcaseItems, 4);

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
        {/* Desktop: 4 columns */}
        <div className="hidden lg:grid grid-cols-4 gap-3">
          {columns.map((col, ci) => (
            <div key={ci} className="flex flex-col gap-3">
              {col.map((item, i) => (
                <ShowcaseCard key={i} item={item} />
              ))}
            </div>
          ))}
        </div>
        {/* Tablet: 3 columns */}
        <div className="hidden md:grid lg:hidden grid-cols-3 gap-3">
          {distributeToColumns(showcaseItems, 3).map((col, ci) => (
            <div key={ci} className="flex flex-col gap-3">
              {col.map((item, i) => (
                <ShowcaseCard key={i} item={item} />
              ))}
            </div>
          ))}
        </div>
        {/* Mobile: 2 columns */}
        <div className="grid md:hidden grid-cols-2 gap-3">
          {distributeToColumns(showcaseItems, 2).map((col, ci) => (
            <div key={ci} className="flex flex-col gap-3">
              {col.map((item, i) => (
                <ShowcaseCard key={i} item={item} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;
