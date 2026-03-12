export interface Translations {
  nav: {
    features: string;
    useCases: string;
    howItWorks: string;
    pricing: string;
    faq: string;
    signIn: string;
    signOut: string;
  };
  hero: {
    title: string;
    subtitle: string;
    subtitleHighlight: string;
    imageToVideo: string;
    textToVideo: string;
    aiModel: string;
    images: string;
    addEndFrame: string;
    uploadFirstFrame: string;
    uploadLastFrame: string;
    clickToUpload: string;
    supportedFormats: string;
    prompt: string;
    promptPlaceholder: string;
    resolution: string;
    duration: string;
    aspectRatio: string;
    generate: string;
    generating: string;
    cost: string;
    credits: string;
    available: string;
    downloadVideo: string;
    downloadSuccess: string;
    viewHistory: string;
    modelDesc20: string;
    modelDesc15: string;
  };
  showcase: {
    title: string;
    titleHighlight: string;
    subtitle: string;
  };
  features: {
    title: string;
    titleHighlight: string;
    subtitle: string;
    items: { title: string; description: string }[];
  };
  useCases: {
    label: string;
    title: string;
    cta: string;
    items: { title: string; desc: string; tags: string[] }[];
  };
  howItWorks: {
    title: string;
    cta: string;
    steps: { title: string; description: string }[];
  };
  testimonials: {
    label: string;
    title: string;
  };
  pricing: {
    title: string;
    subtitle: string;
    monthly: string;
    annually: string;
    save: string;
    perMonth: string;
    subscribe: string;
    mostPopular: string;
    plans: {
      name: string;
      desc: string;
      credits: string;
      features: string[];
    }[];
  };
  faq: {
    title: string;
    contactText: string;
    items: { q: string; a: string }[];
  };
  footer: {
    title: string;
    subtitle: string;
    cta: string;
    multiModal: string;
    watermarkFree: string;
    referenceAny: string;
  };
}
