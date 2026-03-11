import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "What is Seedance 2.0?",
    a: "Seedance 2.0 is a revolutionary multi-modal AI video generation model that supports image, video, audio, and text inputs. It lets you reference any content — motion, effects, camera movements, characters, scenes, and sounds — using natural language descriptions.",
  },
  {
    q: "What inputs does Seedance 2.0 support?",
    a: "Seedance 2.0 supports four input modalities: up to 9 images, up to 3 videos (total ≤15s), up to 3 audio files (MP3, total ≤15s), and text prompts. You can combine up to 12 files total.",
  },
  {
    q: "How does video extension work?",
    a: "Upload your video and specify how many seconds to add. The model maintains continuity in motion, style, and content for seamless results.",
  },
  {
    q: "Can I edit existing videos?",
    a: "Yes! You can replace characters, modify actions, add new elements, or remove content — all while preserving the rest of your video.",
  },
  {
    q: "What video lengths and resolutions are supported?",
    a: "Seedance 2.0 generates videos from 4 to 15 seconds. Multiple aspect ratios are supported including 16:9, 9:16, 4:3, 3:4, 21:9, and 1:1, with resolutions up to 1080p.",
  },
  {
    q: "Are there watermarks on generated videos?",
    a: "No! All videos are completely watermark-free. You can download clean, professional-quality videos ready for immediate use.",
  },
  {
    q: "How do I get started?",
    a: "Sign up for an account, choose a plan, and start creating. Upload your references, describe what you want using natural language, and let Seedance 2.0 bring your vision to life.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-24">
      <div className="container max-w-3xl">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
          Frequently Asked Questions
        </h2>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="border border-border rounded-lg px-6 bg-card"
            >
              <AccordionTrigger className="text-left font-heading text-foreground hover:text-primary hover:no-underline">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <p className="text-center text-sm text-muted-foreground mt-8">
          Still have questions? Contact{" "}
          <a href="mailto:support@seedance2.ai" className="text-primary hover:underline">
            support@seedance2.ai
          </a>
        </p>
      </div>
    </section>
  );
};

export default FAQSection;
