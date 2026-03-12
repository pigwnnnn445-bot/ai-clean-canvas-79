import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Upload, Image, Type, ChevronDown, Sparkles, Play, Plus, ArrowRight, X, Download, History, ChevronLeft, ChevronRight, Volume2, Maximize2, MoreVertical } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { toast } from "sonner";
import { useTranslation } from "@/i18n";
import heroStill from "@/assets/hero-still.jpg";
import modelIcon15 from "@/assets/model-seedance-1.5.png";
import modelIcon20 from "@/assets/model-seedance-2.0.png";

const resolutions = ["720p", "1080p"];
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
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [selectedRes, setSelectedRes] = useState("720p");
  const [selectedRatio, setSelectedRatio] = useState("16:9");
  const [selectedDuration, setSelectedDuration] = useState("5s");
  const [selectedModel, setSelectedModel] = useState(models[0]);
  const [modelDropdownOpen, setModelDropdownOpen] = useState(false);
  const [endFrameEnabled, setEndFrameEnabled] = useState(false);
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [firstFrame, setFirstFrame] = useState<string | null>(null);
  const [lastFrame, setLastFrame] = useState<string | null>(null);
  const [prompt, setPrompt] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [modalVideoSrc, setModalVideoSrc] = useState<string | null>(null);
  const [hasGenerated, setHasGenerated] = useState(false);
  const [hasHistory, setHasHistory] = useState(false);
  const [activePreviewIndex, setActivePreviewIndex] = useState(0);

  const presetVideos = ["/videos/1.mp4", "/videos/2.mp4", "/videos/3.mp4"];
  const isGenerateDisabled = (() => {
    const hasPrompt = prompt.trim().length > 0;
    if (activeTab === "text") {
      return !hasPrompt;
    }
    // image tab - need prompt + at least first frame (or single upload)
    if (endFrameEnabled) {
      return !(hasPrompt && firstFrame);
    }
    return !(hasPrompt && uploadedImage);
  })();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, setter: (url: string | null) => void) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setter(url);
    }
  };

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
          {t.hero.title} <span className="text-gradient-brand">2.0</span>
        </h1>
        <p className="mt-4 text-body-secondary max-w-3xl mx-auto leading-relaxed">
          {t.hero.subtitle}{" "}
          <span className="text-gradient-brand font-semibold">{t.hero.subtitleHighlight}</span>.
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
                  {t.hero.imageToVideo}
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
                  {t.hero.textToVideo}
                </button>
              </div>

              {/* AI Model */}
              <div ref={dropdownRef} className="relative">
                <label className="flex items-center gap-1.5 text-xs text-body-muted mb-2">
                  <Sparkles className="w-3.5 h-3.5" />
                  {t.hero.aiModel}
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
                  <div className="absolute z-50 left-0 right-0 mt-1 rounded-lg bg-popover border border-border shadow-lg overflow-hidden">
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
                      {t.hero.images}
                    </label>
                    <div className="flex items-center gap-2 text-xs text-body-muted">
                      <span>{t.hero.addEndFrame}</span>
                      <div
                        onClick={() => setEndFrameEnabled(!endFrameEnabled)}
                        className={`w-9 h-5 rounded-full relative cursor-pointer transition-colors ${
                          endFrameEnabled ? "bg-primary" : "bg-border"
                        }`}
                      >
                        <div
                          className={`w-3.5 h-3.5 rounded-full bg-white absolute top-[3px] transition-all ${
                            endFrameEnabled ? "left-[18px]" : "left-[3px]"
                          }`}
                        />
                      </div>
                    </div>
                  </div>
                  {endFrameEnabled ? (
                    <div className="flex items-center gap-3">
                      <div className="flex-1 relative rounded-lg overflow-hidden border border-border h-32">
                        {firstFrame ? (
                          <>
                            <img src={firstFrame} alt="First frame" className="w-full h-full object-cover" />
                            <button onClick={() => setFirstFrame(null)} className="absolute top-1 right-1 w-6 h-6 rounded-full bg-background/80 flex items-center justify-center hover:bg-background transition-colors cursor-pointer">
                              <X className="w-3.5 h-3.5 text-foreground" />
                            </button>
                          </>
                        ) : (
                          <label className="w-full h-full border-2 border-dashed border-border rounded-lg flex flex-col items-center justify-center gap-2 cursor-pointer hover:border-primary/50 hover:bg-hover-bg transition-colors">
                            <input type="file" accept="image/png,image/jpg,image/jpeg,image/webp" className="hidden" onChange={(e) => handleFileChange(e, setFirstFrame)} />
                            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                              <Plus className="w-5 h-5 text-primary" />
                            </div>
                            <p className="text-xs text-foreground font-medium text-center">Upload First Frame</p>
                          </label>
                        )}
                      </div>
                      <ArrowRight className="w-5 h-5 text-body-muted flex-shrink-0" />
                      <div className="flex-1 relative rounded-lg overflow-hidden border border-border h-32">
                        {lastFrame ? (
                          <>
                            <img src={lastFrame} alt="Last frame" className="w-full h-full object-cover" />
                            <button onClick={() => setLastFrame(null)} className="absolute top-1 right-1 w-6 h-6 rounded-full bg-background/80 flex items-center justify-center hover:bg-background transition-colors cursor-pointer">
                              <X className="w-3.5 h-3.5 text-foreground" />
                            </button>
                          </>
                        ) : (
                          <label className="w-full h-full border-2 border-dashed border-border rounded-lg flex flex-col items-center justify-center gap-2 cursor-pointer hover:border-primary/50 hover:bg-hover-bg transition-colors">
                            <input type="file" accept="image/png,image/jpg,image/jpeg,image/webp" className="hidden" onChange={(e) => handleFileChange(e, setLastFrame)} />
                            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                              <Plus className="w-5 h-5 text-primary" />
                            </div>
                            <p className="text-xs text-foreground font-medium text-center">Upload Last Frame</p>
                          </label>
                        )}
                      </div>
                    </div>
                  ) : (
                    uploadedImage ? (
                      <div className="relative rounded-lg overflow-hidden border border-border">
                        <img src={uploadedImage} alt="Uploaded" className="w-full aspect-video object-cover" />
                        <button onClick={() => setUploadedImage(null)} className="absolute top-2 right-2 w-7 h-7 rounded-full bg-background/80 flex items-center justify-center hover:bg-background transition-colors cursor-pointer">
                          <X className="w-4 h-4 text-foreground" />
                        </button>
                      </div>
                    ) : (
                      <label className="border-2 border-dashed border-border rounded-lg p-8 flex flex-col items-center justify-center gap-2 cursor-pointer hover:border-primary/50 hover:bg-hover-bg transition-colors">
                        <input type="file" accept="image/png,image/jpg,image/jpeg,image/webp" className="hidden" onChange={(e) => handleFileChange(e, setUploadedImage)} />
                        <Upload className="w-6 h-6 text-primary" />
                        <p className="text-sm text-foreground font-medium">Click to upload or drag & drop</p>
                        <p className="text-xs text-body-muted">PNG, JPG, JPEG, WEBP</p>
                      </label>
                    )
                  )}

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
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value.slice(0, 5000))}
                    placeholder="Describe how you want your image to animate..."
                    className="w-full h-28 p-3 rounded-lg border border-border bg-background text-sm text-foreground placeholder:text-body-muted resize-none focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
                  />
                  <span className="absolute bottom-2 right-3 text-xs text-body-muted">{prompt.length}/5000</span>
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
              <button
                disabled={isGenerateDisabled || isGenerating}
                onClick={() => {
                  if (!isGenerateDisabled && !isGenerating) {
                    setIsGenerating(true);
                    setTimeout(() => {
                      setIsGenerating(false);
                      setHasGenerated(true);
                      setHasHistory(true);
                    }, 5000);
                  }
                }}
                className={`w-full py-3 rounded-lg bg-gradient-brand text-primary-foreground font-semibold text-sm flex items-center justify-center gap-2 transition-all ${
                  isGenerateDisabled || isGenerating
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:opacity-90 hover:scale-[1.02] active:scale-100 cursor-pointer"
                }`}
              >
                <Sparkles className="w-4 h-4" />
                {isGenerating ? "生成中..." : "生成"}
              </button>

              {/* Credits Info */}
              <div className="flex items-center justify-center gap-3 text-xs text-body-muted mt-2">
                <span>Cost <span className="font-semibold text-foreground">{selectedRes === "1080p" ? 20 : 10}{selectedDuration === "10s" ? " × 2" : ""}</span> credits</span>
                <span className="text-border">|</span>
                <span>Available <span className="font-semibold text-foreground">0</span></span>
              </div>
            </div>

            {/* Right: Video Preview */}
            <div className="flex-1 flex flex-col">
              {/* Main video card with carousel */}
              <div className="relative w-full rounded-xl overflow-hidden bg-[#1a1a1a] border border-border shadow-soft">
                <div className="aspect-video relative">
                  {isGenerating ? (
                    <div className="w-full h-full flex flex-col items-center justify-center gap-4">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        className="text-body-muted"
                      >
                        <Sparkles className="w-12 h-12" />
                      </motion.div>
                      <div className="absolute bottom-4 left-4 flex items-center gap-1">
                        <span className="text-sm text-body-muted font-medium">Generating...</span>
                        <motion.span
                          animate={{ opacity: [0.3, 1, 0.3] }}
                          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                          className="text-primary font-bold text-sm"
                        >
                          ❯❯❯
                        </motion.span>
                      </div>
                    </div>
                  ) : (
                    <>
                      <video
                        key={presetVideos[activePreviewIndex]}
                        src={presetVideos[activePreviewIndex]}
                        muted
                        playsInline
                        preload="metadata"
                        className="w-full h-full object-contain bg-black"
                      />
                      {/* Left arrow */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setActivePreviewIndex((prev) => (prev - 1 + presetVideos.length) % presetVideos.length);
                        }}
                        className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-background/40 backdrop-blur-sm flex items-center justify-center text-foreground/80 hover:bg-background/60 transition-colors cursor-pointer"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>
                      {/* Right arrow */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setActivePreviewIndex((prev) => (prev + 1) % presetVideos.length);
                        }}
                        className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-background/40 backdrop-blur-sm flex items-center justify-center text-foreground/80 hover:bg-background/60 transition-colors cursor-pointer"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>
                      {/* Bottom controls bar */}
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent px-4 pb-2 pt-8">
                        {/* Progress bar */}
                        <div className="w-full h-0.5 bg-foreground/20 rounded-full mb-2">
                          <div className="w-1/5 h-full bg-primary rounded-full" />
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <Play
                              className="w-5 h-5 text-foreground cursor-pointer hover:text-primary transition-colors"
                              onClick={(e) => {
                                e.stopPropagation();
                                setModalVideoSrc(presetVideos[activePreviewIndex]);
                                setVideoModalOpen(true);
                              }}
                            />
                            <span className="text-xs text-foreground/70">0:00 / 0:05</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <Volume2 className="w-4 h-4 text-foreground/60 cursor-pointer hover:text-foreground transition-colors" />
                            <Maximize2
                              className="w-4 h-4 text-foreground/60 cursor-pointer hover:text-foreground transition-colors"
                              onClick={(e) => {
                                e.stopPropagation();
                                setModalVideoSrc(presetVideos[activePreviewIndex]);
                                setVideoModalOpen(true);
                              }}
                            />
                            <MoreVertical className="w-4 h-4 text-foreground/60 cursor-pointer hover:text-foreground transition-colors" />
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>

              {/* Dot indicators */}
              <div className="flex items-center justify-center gap-2 mt-3">
                {presetVideos.map((_, idx) => (
                  <div
                    key={idx}
                    onClick={() => setActivePreviewIndex(idx)}
                    className={`rounded-full cursor-pointer transition-all ${
                      activePreviewIndex === idx
                        ? "w-6 h-2 bg-primary"
                        : "w-2 h-2 bg-foreground/20 hover:bg-foreground/40"
                    }`}
                  />
                ))}
              </div>

              {/* Action buttons */}
              {(hasGenerated || hasHistory) && (
                <div className="flex items-center gap-1 mt-2">
                  {/* Download: only when current session has a successfully generated video */}
                  {hasGenerated && (
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <button
                          onClick={() => toast.success("下载视频成功")}
                          className="p-1.5 rounded-md text-body-muted hover:text-foreground hover:bg-hover-bg transition-colors cursor-pointer"
                        >
                          <Download className="w-4 h-4" />
                        </button>
                      </TooltipTrigger>
                      <TooltipContent>下载视频</TooltipContent>
                    </Tooltip>
                  )}
                  {/* History: only when user has past generated records */}
                  {hasHistory && (
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <button
                          onClick={() => navigate("/video-history")}
                          className="p-1.5 rounded-md text-body-muted hover:text-foreground hover:bg-hover-bg transition-colors cursor-pointer"
                        >
                          <History className="w-4 h-4" />
                        </button>
                      </TooltipTrigger>
                      <TooltipContent>查看历史记录</TooltipContent>
                    </Tooltip>
                  )}
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {videoModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-background/80 backdrop-blur-md"
            onClick={() => setVideoModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative max-w-4xl w-full mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setVideoModalOpen(false)}
                className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-foreground/80 hover:bg-foreground flex items-center justify-center text-background transition-colors cursor-pointer z-10"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="rounded-xl overflow-hidden bg-card shadow-2xl">
                <video
                  src={modalVideoSrc || presetVideos[0]}
                  controls
                  autoPlay
                  loop
                  playsInline
                  className="w-full h-auto block"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default HeroSection;
