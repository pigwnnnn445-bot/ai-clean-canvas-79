import { Play } from "lucide-react";
import { useState } from "react";

interface ShowcaseItem {
  poster: string;
  video?: string;
  prompt?: string;
  span?: "tall" | "normal"; // controls height in masonry
}

const showcaseItems: ShowcaseItem[] = [
  {
    poster: "https://cdn.seedance2.ai/examples/seedance2/poster/1-poster.webp",
    span: "normal",
  },
  {
    poster: "https://cdn.seedance2.ai/examples/seedance2/poster/2-poster.webp",
    span: "tall",
  },
  {
    poster: "https://cdn.seedance2.ai/examples/seedance2/poster/19-poster.webp",
    span: "normal",
  },
  {
    poster: "https://cdn.seedance2.ai/examples/seedance2/poster/4-poster.webp",
    span: "tall",
  },
  {
    poster: "https://cdn.seedance2.ai/examples/seedance2/poster/5-poster.webp",
    span: "normal",
  },
  {
    poster: "https://cdn.seedance2.ai/examples/seedance2/poster/17-poster.webp",
    span: "tall",
  },
  {
    poster: "https://cdn.seedance2.ai/examples/seedance2/poster/40-poster.webp",
    span: "normal",
  },
  {
    poster: "https://cdn.seedance2.ai/examples/seedance2/poster/8-poster.webp",
    span: "normal",
  },
  {
    poster: "https://cdn.seedance2.ai/examples/seedance2/poster/14-poster.webp",
    span: "tall",
  },
  {
    poster: "https://cdn.seedance2.ai/examples/seedance2/poster/10-poster.webp",
    span: "normal",
  },
  {
    poster: "https://cdn.seedance2.ai/examples/seedance2/poster/30-poster.webp",
    span: "normal",
  },
  {
    poster: "https://cdn.seedance2.ai/examples/seedance2/poster/38-poster.webp",
    span: "normal",
  },
];

const ShowcaseCard = ({ item }: { item: ShowcaseItem }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`relative rounded-xl overflow-hidden cursor-pointer group ${
        item.span === "tall" ? "row-span-2" : ""
      }`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img
        src={item.poster}
        alt="AI generated video showcase"
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        loading="lazy"
      />
      {/* Play button overlay */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className={`w-12 h-12 rounded-full bg-background/60 backdrop-blur-sm flex items-center justify-center transition-all duration-300 ${
            hovered ? "scale-110 bg-background/80" : ""
          }`}
        >
          <Play className="w-5 h-5 text-foreground fill-foreground ml-0.5" />
        </div>
      </div>
      {/* Hover gradient overlay */}
      <div
        className={`absolute inset-0 bg-gradient-to-t from-background/40 to-transparent transition-opacity duration-300 ${
          hovered ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
};

const ShowcaseSection = () => {
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
        <div className="columns-2 md:columns-3 lg:columns-4 gap-3 space-y-3">
          {showcaseItems.map((item, i) => (
            <div key={i} className="break-inside-avoid">
              <ShowcaseCard item={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;
