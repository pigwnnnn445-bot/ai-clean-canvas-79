const showcaseImages = [
  "https://cdn.seedance2.ai/examples/seedance2/poster/1-poster.webp",
  "https://cdn.seedance2.ai/examples/seedance2/poster/2-poster.webp",
  "https://cdn.seedance2.ai/examples/seedance2/poster/19-poster.webp",
  "https://cdn.seedance2.ai/examples/seedance2/poster/4-poster.webp",
  "https://cdn.seedance2.ai/examples/seedance2/poster/5-poster.webp",
  "https://cdn.seedance2.ai/examples/seedance2/poster/17-poster.webp",
  "https://cdn.seedance2.ai/examples/seedance2/poster/40-poster.webp",
  "https://cdn.seedance2.ai/examples/seedance2/poster/8-poster.webp",
  "https://cdn.seedance2.ai/examples/seedance2/poster/14-poster.webp",
  "https://cdn.seedance2.ai/examples/seedance2/poster/10-poster.webp",
  "https://cdn.seedance2.ai/examples/seedance2/poster/30-poster.webp",
  "https://cdn.seedance2.ai/examples/seedance2/poster/38-poster.webp",
];

const ShowcaseSection = () => {
  const doubled = [...showcaseImages, ...showcaseImages];

  return (
    <section className="py-24 overflow-hidden" aria-label="Showcase gallery">
      <div className="container text-center mb-12">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
          Get Inspired
        </h2>
        <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
          Stunning video examples created with Seedance 2.0's multi-modal capabilities.
        </p>
      </div>

      {/* Film strip */}
      <div className="relative">
        <div className="flex gap-4 animate-filmstrip" style={{ width: "max-content" }}>
          {doubled.map((src, i) => (
            <div
              key={i}
              className="w-64 h-40 md:w-80 md:h-48 flex-shrink-0 rounded-lg overflow-hidden border border-border"
            >
              <img
                src={src}
                alt={`Seedance 2.0 showcase example ${(i % showcaseImages.length) + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;
