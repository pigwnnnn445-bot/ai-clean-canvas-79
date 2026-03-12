import { Translations } from "../types";

const es: Translations = {
  nav: { features: "Características", useCases: "Casos de Uso", howItWorks: "Cómo Funciona", pricing: "Precios", faq: "Preguntas Frecuentes", signIn: "Iniciar Sesión", signOut: "Cerrar Sesión" },
  hero: {
    title: "Seedance", subtitle: "Experimenta", subtitleHighlight: "la verdadera creación de video con IA multimodal",
    subtitleDesc: "Combina imágenes, videos, audio y texto para generar contenido cinematográfico con capacidades de referencia precisas, extensión de video fluida y control por lenguaje natural.",
    imageToVideo: "Imagen a Video", textToVideo: "Texto a Video", aiModel: "Modelo IA", images: "Imágenes",
    addEndFrame: "Añadir fotograma final", uploadFirstFrame: "Subir Primer Fotograma", uploadLastFrame: "Subir Último Fotograma",
    clickToUpload: "Haz clic para subir o arrastra y suelta", supportedFormats: "PNG, JPG, JPEG, WEBP",
    prompt: "Prompt", promptPlaceholder: "Describe cómo quieres animar tu imagen...",
    resolution: "Resolución", duration: "Duración", aspectRatio: "Relación de Aspecto",
    generate: "Generar", generating: "Generando...",
    cost: "Costo", credits: "créditos", available: "Disponible",
    downloadVideo: "Descargar Video", downloadSuccess: "Video descargado exitosamente", viewHistory: "Ver Historial",
    modelDesc20: "Sujetos más estables, transiciones más suaves y resultados más cercanos a video listo para usar.",
    modelDesc15: "El movimiento es natural y fluido, la textura es delicada y realista, y el estilo general es consistente y altamente pulido.",
  },
  showcase: { title: "Obtén", titleHighlight: "Inspiración", subtitle: "Explora impresionantes ejemplos de video creados con las capacidades multimodales de Seedance 2.0." },
  features: {
    title: "Características Clave de Seedance", titleHighlight: "2.0",
    subtitle: "Un modelo de video IA multimodal verdaderamente controlable. Referencia todo, edita todo, crea todo.",
    items: [
      { title: "Entrada Multimodal", description: "Sube hasta 9 imágenes, 3 videos y 3 archivos de audio. Combina texto, imágenes, videos y audio libremente." },
      { title: "Referencia Cualquier Cosa", description: "Referencia movimiento, efectos, movimientos de cámara, personajes, escenas y sonidos usando lenguaje natural." },
      { title: "Consistencia Superior", description: "Mantén consistencia perfecta para rostros, ropa, texto, escenas y estilos visuales en tu video." },
      { title: "Replicación Precisa de Movimiento", description: "Sube un video de referencia para replicar coreografías complejas y movimientos de cámara." },
      { title: "Extensión y Edición de Video", description: "Extiende videos existentes, fusiona clips o edita segmentos específicos preservando el resto." },
      { title: "Generación de Audio Integrada", description: "Genera automáticamente efectos de sonido y música de fondo contextual." },
    ],
  },
  useCases: {
    label: "Casos de Uso", title: "Posibilidades Infinitas Para Cada Creador", subtitle: "Desde publicidad hasta narrativa creativa, explora las aplicaciones ilimitadas del video con IA", cta: "Comienza Ahora",
    items: [
      { title: "Publicidad y Marketing", desc: "Crea contenido promocional convincente referenciando plantillas publicitarias exitosas.", tags: ["Videos de Producto", "Contenido de Marca", "Anuncios Comerciales"] },
      { title: "Narrativa Creativa", desc: "Crea narrativas únicas usando entradas multimodales.", tags: ["Cortometrajes", "Proyectos Artísticos", "Videos Musicales"] },
      { title: "Contenido para Redes Sociales", desc: "Genera contenido irresistible referenciando plantillas y efectos trending.", tags: ["Instagram Reels", "TikTok Videos", "YouTube Shorts"] },
      { title: "Videos de Movimiento y Danza", desc: "Sube coreografía de referencia y aplícala a cualquier personaje.", tags: ["Covers de Baile", "Secuencias de Acción", "Coreografía"] },
      { title: "Previsualización de Películas", desc: "Referencia clips de películas para replicar movimientos de cámara y efectos visuales.", tags: ["Storyboarding", "Planificación de Cámara", "Prueba de Concepto"] },
      { title: "Sincronización Musical", desc: "Sube pistas de audio y crea videos perfectamente sincronizados.", tags: ["Sincronización Rítmica", "Videos Musicales", "Diseño de Sonido"] },
    ],
  },
  howItWorks: {
    title: "Cómo Crear Videos con IA", cta: "Comienza a Crear Ahora",
    steps: [
      { title: "Sube tus Recursos", description: "Sube imágenes, videos o archivos de audio como referencias. Combina hasta 12 archivos." },
      { title: "Describe tu Visión", description: "Usa lenguaje natural para describir lo que quieres. Etiqueta recursos específicos en tu prompt." },
      { title: "Genera e Itera", description: "Genera tu video de 4-15 segundos. Extiende, edita o refina tu creación." },
    ],
  },
  testimonials: { label: "Testimonios", title: "Amado por Creadores en Todo el Mundo" },
  pricing: {
    title: "Precios", subtitle: "Elige el plan que mejor te funcione.",
    monthly: "Mensual", annually: "Anual", save: "Ahorra 50%", perMonth: "/mes", subscribe: "Suscribirse", mostPopular: "Más Popular",
    plans: [
      { name: "Básico", desc: "Ideal para aficionados y principiantes", credits: "800 créditos/mes", features: ["Hasta 80 videos/mes", "Múltiples modelos de IA", "Velocidad estándar", "Sin marca de agua", "Licencia comercial"] },
      { name: "Estándar", desc: "Perfecto para la mayoría de creadores", credits: "2,000 créditos/mes", features: ["Hasta 200 videos/mes", "Múltiples modelos de IA", "Generación prioritaria", "Sin marca de agua", "Soporte prioritario", "Licencia comercial"] },
      { name: "Pro", desc: "Ideal para usuarios avanzados", credits: "6,000 créditos/mes", features: ["Hasta 600 videos/mes", "Múltiples modelos de IA", "Velocidad máxima", "Sin marca de agua", "Soporte experto", "Licencia comercial"] },
    ],
  },
  faq: {
    title: "Preguntas Frecuentes", contactText: "¿Aún tienes preguntas? Contacta",
    items: [
      { q: "¿Qué es Seedance 2.0?", a: "Seedance 2.0 es un modelo revolucionario de generación de video IA multimodal que soporta entradas de imagen, video, audio y texto." },
      { q: "¿Qué entradas soporta Seedance 2.0?", a: "Soporta cuatro modalidades: hasta 9 imágenes, 3 videos (≤15s), 3 archivos de audio (MP3, ≤15s) y prompts de texto. Hasta 12 archivos en total." },
      { q: "¿Cómo funciona la extensión de video?", a: "Sube tu video y especifica cuántos segundos añadir. El modelo mantiene la continuidad." },
      { q: "¿Puedo editar videos existentes?", a: "¡Sí! Puedes reemplazar personajes, modificar acciones, añadir elementos o eliminar contenido." },
      { q: "¿Qué duraciones y resoluciones se soportan?", a: "Seedance 2.0 genera videos de 4 a 15 segundos con resoluciones hasta 1080p." },
      { q: "¿Hay marcas de agua en los videos generados?", a: "¡No! Todos los videos están completamente libres de marcas de agua." },
      { q: "¿Cómo empiezo?", a: "Regístrate, elige un plan y comienza a crear." },
    ],
  },
  footer: {
    title: "¿Listo para Crear?",
    subtitle: "Únete a miles de creadores usando Seedance 2.0 para dar vida a sus visiones.",
    cta: "Comienza a Crear Ahora",
    multiModal: "Entrada multimodal", watermarkFree: "Sin marca de agua", referenceAny: "Referencia cualquier contenido",
  },
};

export default es;
