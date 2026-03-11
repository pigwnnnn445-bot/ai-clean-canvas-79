import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroStill from "@/assets/hero-still.jpg";

const fullText = "One Image, One Blockbuster.";

const HeroSection = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const [typingDone, setTypingDone] = useState(false);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < fullText.length) {
        setDisplayedText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(interval);
        setTypingDone(true);
        setTimeout(() => {
          setShowCursor(false);
          setShowButton(true);
        }, 1000);
      }
    }, 80);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src={heroStill}
          alt="Dramatic dancer illuminated by amber spotlight"
          className="w-full h-full object-cover opacity-30"
          loading="eager"
        />
        <div className="absolute inset-0 bg-background/60" />
      </div>

      <div className="relative z-10 container text-center max-w-4xl mx-auto px-6">
        <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-foreground leading-tight min-h-[1.2em]">
          {displayedText}
          {showCursor && (
            <span className="cursor-blink inline-block w-[3px] h-[0.8em] bg-primary ml-1 align-baseline" />
          )}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5, duration: 0.8 }}
          className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-body"
        >
          Experience true multi-modal AI video creation. Combine images, videos,
          audio, and text to generate cinematic content with unprecedented control.
        </motion.p>

        <AnimatePresence>
          {showButton && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Button variant="hero" size="xl">
                Start Creating Now
              </Button>
              <Button variant="heroOutline" size="lg">
                View Showcase
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default HeroSection;
