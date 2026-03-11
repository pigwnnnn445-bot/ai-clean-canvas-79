import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Upload, Image, Type, ChevronDown, Sparkles, Play, Volume2, Maximize2, MoreVertical } from "lucide-react";
import heroStill from "@/assets/hero-still.jpg";
import modelIcon15 from "@/assets/model-seedance-1.5.png";
import modelIcon20 from "@/assets/model-seedance-2.0.png";

const resolutions = ["480p", "720p", "1080p"];
const aspectRatios = [
  { label: "16:9", icon: "▬" },
  { label: "9:16", icon: "▮" },
  { label: "4:3", icon: "▬" },
  { label: "3:4", icon: "▮" },
  { label: "21:9", icon: "▬" },
  { label: "1:1", icon: "■" },
];

const models = [
  {
    id: "seedance-1.5-pro",
    name: "Seedance 1.5 Pro",
    icon: modelIcon15,
    description: "The movement in the footage is natural and fluid, the texture is delicate and realistic, and the overall style is consistent and highly polished.",
  },
  {
    id: "seedance-2.0",
    name: "Seedance 2.0",
    icon: modelIcon20,
    description: "More stable subjects, smoother transitions, and results closer to ready-to-use video output.",
  },
];

const HeroSection = () => {
  const [activeTab, setActiveTab] = useState<"image" | "text">("image");
  const [selectedRes, setSelectedRes] = useState("480p");
  const [selectedRatio, setSelectedRatio] = useState("16:9");
  const [selectedDuration, setSelectedDuration] = useState("5s");
  const [selectedModel, setSelectedModel] = useState(models[0]);
  const [modelDropdownOpen, setModelDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setModelDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <section className="pt-24 pb-16">
      {/* Title */}
      <div className="container text-center mb-10">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
          Seedance <span className="text-gradient-brand">2.0</span>
        </h1>
        <p className="mt-4 text-body-secondary max-w-3xl mx-auto leading-relaxed">
          Experience{" "}
          <span className="text-gradient-brand font-semibold">true multi-modal AI video creation</span>.
          Combine images, videos, audio, and text to generate cinematic content with
          precise reference capabilities, seamless video extension, and natural language control.
        </p>
      </div>

      {/* Tool + Preview */}
      <div className="container max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="rounded-xl bg-card shadow-soft p-4 md:p-6"
        >
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Left: Tool Panel */}
            <div className="lg:w-[400px] flex-shrink-0 space-y-5">
              {/* Tabs */}
              <div className="relative flex rounded-lg overflow-hidden bg-card-secondary p-1">
                {/* Sliding indicator */}
                <div
                  className="absolute top-1 bottom-1 rounded-md bg-menu-selected shadow-sm transition-all duration-300 ease-out"
                  style={{
                    left: activeTab === "image" ? "4px" : "50%",
                    width: "calc(50% - 4px)",
                  }}
                />
                <button
                  onClick={() => setActiveTab("image")}
                  className={`relative z-10 flex-1 flex items-center justify-center gap-2 py-2 text-sm font-medium transition-colors duration-300 cursor-pointer rounded-md ${
                    activeTab === "image"
                      ? "text-foreground"
                      : "text-body-secondary hover:text-foreground"
                  }`}
                >
                  <Image className="w-4 h-4" />
                  Image to Video
                </button>
                <button
                  onClick={() => setActiveTab("text")}
                  className={`relative z-10 flex-1 flex items-center justify-center gap-2 py-2 text-sm font-medium transition-colors duration-300 cursor-pointer rounded-md ${
                    activeTab === "text"
                      ? "text-foreground"
                      : "text-body-secondary hover:text-foreground"
                  }`}
                >
                  <Type className="w-4 h-4" />
                  Text to Video
                </button>
              </div>

              {/* AI Model */}
              <div ref={dropdownRef} className="relative">
                <label className="flex items-center gap-1.5 text-xs text-body-muted mb-2">
                  <Sparkles className="w-3.5 h-3.5" />
                  AI Model
                </label>
                <div
                  onClick={() => setModelDropdownOpen(!modelDropdownOpen)}
                  className="flex items-center justify-between p-3 rounded-lg bg-card-secondary cursor-pointer hover:bg-hover-bg transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <img src={selectedModel.icon} alt={selectedModel.name} className="w-10 h-10 rounded-lg object-cover flex-shrink-0" />
                    <div>
                      <span className="text-sm font-semibold text-foreground">{selectedModel.name}</span>
                      <p className="text-xs text-body-muted line-clamp-1">{selectedModel.description}</p>
                    </div>
                  </div>
                  <ChevronDown className={`w-4 h-4 text-body-muted transition-transform duration-200 ${modelDropdownOpen ? "rotate-180" : ""}`} />
                </div>

                {/* Dropdown */}
                {modelDropdownOpen && (
                  <div className="absolute z-50 left-0 right-0 mt-1 rounded-lg bg-popover shadow-lg overflow-hidden">
                    {models.map((model) => (
                      <div
                        key={model.id}
                        onClick={() => {
                          setSelectedModel(model);
                          setModelDropdownOpen(false);
                        }}
                        className={`flex items-center gap-3 p-3 cursor-pointer transition-colors ${
                          selectedModel.id === model.id
                            ? "bg-primary/10"
                            : "hover:bg-hover-bg"
                        }`}
                      >
                        <img src={model.icon} alt={model.name} className="w-10 h-10 rounded-lg object-cover flex-shrink-0" />
                        <div className="min-w-0">
                          <span className="text-sm font-semibold text-foreground">{model.name}</span>
                          <p className="text-xs text-body-muted line-clamp-2">{model.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Images Upload */}
              {activeTab === "image" && (
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="flex items-center gap-1.5 text-xs text-body-muted">
                      <Image className="w-3.5 h-3.5" />
                      Images
                    </label>
                    <div className="flex items-center gap-2 text-xs text-body-muted">
                      <span>Add end frame</span>
                      <div className="w-8 h-4 rounded-full bg-border relative cursor-pointer">
                        <div className="w-3 h-3 rounded-full bg-body-muted absolute left-0.5 top-0.5" />
                      </div>
                      <span>0/1</span>
                    </div>
                  </div>
                  <div className="border-2 border-dashed border-border rounded-lg p-8 flex flex-col items-center justify-center gap-2 cursor-pointer hover:border-primary/50 hover:bg-hover-bg transition-colors">
                    <Upload className="w-6 h-6 text-primary" />
                    <p className="text-sm text-foreground font-medium">Click to upload or drag & drop</p>
                    <p className="text-xs text-body-muted">PNG, JPG, JPEG, WEBP</p>
                  </div>
                  <p className="text-xs text-body-muted mt-2">
                    Don't have an image?{" "}
                    <span className="text-primary cursor-pointer hover:underline">✦ Generate images with AI</span>
                  </p>
                </div>
              )}

              {/* Prompt */}
              <div>
                <label className="flex items-center gap-1.5 text-xs text-body-muted mb-2">
                  <Type className="w-3.5 h-3.5" />
                  Prompt
                </label>
                <div className="relative">
                  <textarea
                    placeholder="Describe how you want your image to animate..."
                    className="w-full h-28 p-3 rounded-lg border border-border bg-background text-sm text-foreground placeholder:text-body-muted resize-none focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
                  />
                  <span className="absolute bottom-2 right-3 text-xs text-body-muted">0/5000</span>
                </div>
              </div>

              {/* Resolution */}
              <div>
                <label className="flex items-center gap-1.5 text-xs text-body-muted mb-2">Resolution</label>
                <div className="flex gap-2">
                  {resolutions.map((r) => (
                    <button
                      key={r}
                      onClick={() => setSelectedRes(r)}
                      className={`px-4 py-1.5 text-sm rounded-lg border transition-colors cursor-pointer ${
                        selectedRes === r
                          ? "border-primary bg-primary/10 text-primary"
                          : "border-border text-body-secondary hover:bg-hover-bg"
                      }`}
                    >
                      {r}
                    </button>
                  ))}
                </div>
              </div>

              {/* Duration */}
              <div>
                <label className="flex items-center gap-1.5 text-xs text-body-muted mb-2">Duration</label>
                <div className="flex gap-2">
                  {["5s", "10s"].map((d) => (
                    <button
                      key={d}
                      onClick={() => setSelectedDuration(d)}
                      className={`px-4 py-1.5 text-sm rounded-lg border transition-colors cursor-pointer ${
                        selectedDuration === d
                          ? "border-primary bg-primary/10 text-primary"
                          : "border-border text-body-secondary hover:bg-hover-bg"
                      }`}
                    >
                      {d}
                    </button>
                  ))}
                </div>
              </div>

              {/* Aspect Ratio */}
              <div>
                <label className="flex items-center gap-1.5 text-xs text-body-muted mb-2">Aspect Ratio</label>
                <div className="flex flex-wrap gap-2">
                  {aspectRatios.map((ar) => (
                    <button
                      key={ar.label}
                      onClick={() => setSelectedRatio(ar.label)}
                      className={`flex flex-col items-center justify-center w-14 h-14 rounded-lg border text-xs transition-colors cursor-pointer ${
                        selectedRatio === ar.label
                          ? "border-primary bg-primary/10 text-primary"
                          : "border-border text-body-secondary hover:bg-hover-bg"
                      }`}
                    >
                      <span className="text-base">{ar.icon}</span>
                      <span className="mt-0.5">{ar.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Generate Button */}
              <button className="w-full py-3 rounded-lg bg-gradient-brand text-primary-foreground font-semibold text-sm flex items-center justify-center gap-2 hover:opacity-90 hover:scale-[1.02] active:scale-100 transition-all cursor-pointer">
                <Sparkles className="w-4 h-4" />
                Generate
              </button>
            </div>

            {/* Right: Video Preview */}
            <div className="flex-1 flex flex-col items-center justify-center">
              <div className="relative w-full rounded-lg overflow-hidden bg-card-secondary border border-border shadow-soft">
                <div className="aspect-video relative">
                  <img
                    src={heroStill}
                    alt="Seedance 2.0 AI generated video preview"
                    className="w-full h-full object-cover"
                    loading="eager"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/90 to-transparent p-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Play className="w-5 h-5 text-foreground cursor-pointer hover:text-primary transition-colors" />
                        <span className="text-xs text-body-secondary">0:00 / 0:13</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Volume2 className="w-4 h-4 text-body-secondary cursor-pointer hover:text-foreground transition-colors" />
                        <Maximize2 className="w-4 h-4 text-body-secondary cursor-pointer hover:text-foreground transition-colors" />
                        <MoreVertical className="w-4 h-4 text-body-secondary cursor-pointer hover:text-foreground transition-colors" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2 mt-4">
                <div className="w-6 h-2 rounded-full bg-gradient-brand" />
                <div className="w-2 h-2 rounded-full bg-border" />
                <div className="w-2 h-2 rounded-full bg-border" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
