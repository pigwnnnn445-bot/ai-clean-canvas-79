import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useTranslation } from "@/i18n";

const FAQSection = () => {
  const { t } = useTranslation();

  return (
    <section id="faq" className="py-24">
      <div className="container max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          {t.faq.title}
        </h2>

        <Accordion type="single" collapsible className="space-y-3">
          {t.faq.items.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="border border-border rounded-lg px-6 bg-card shadow-soft"
            >
              <AccordionTrigger className="text-left text-foreground hover:text-primary hover:no-underline cursor-pointer">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-body-secondary leading-relaxed">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>


      </div>
    </section>
  );
};

export default FAQSection;
