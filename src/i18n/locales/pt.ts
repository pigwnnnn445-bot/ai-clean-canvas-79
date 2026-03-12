import { Translations } from "../types";
const pt: Translations = {
  nav: { features: "Recursos", useCases: "Casos de Uso", howItWorks: "Como Funciona", pricing: "Preços", faq: "FAQ", signIn: "Entrar", signOut: "Sair" },
  hero: { title: "Seedance", subtitle: "Experimente", subtitleHighlight: "a verdadeira criação de vídeo IA multimodal", subtitleDesc: "Combine imagens, vídeos, áudio e texto para gerar conteúdo cinematográfico com capacidades de referência precisas, extensão de vídeo fluida e controle por linguagem natural.", imageToVideo: "Imagem para Vídeo", textToVideo: "Texto para Vídeo", aiModel: "Modelo IA", images: "Imagens", addEndFrame: "Adicionar quadro final", uploadFirstFrame: "Enviar Primeiro Quadro", uploadLastFrame: "Enviar Último Quadro", clickToUpload: "Clique para enviar ou arraste", supportedFormats: "PNG, JPG, JPEG, WEBP", prompt: "Prompt", promptPlaceholder: "Descreva como quer animar sua imagem...", resolution: "Resolução", duration: "Duração", aspectRatio: "Proporção", generate: "Gerar", generating: "Gerando...", cost: "Custo", credits: "créditos", available: "Disponível", downloadVideo: "Baixar Vídeo", downloadSuccess: "Vídeo baixado com sucesso", viewHistory: "Ver Histórico", modelDesc20: "Sujeitos mais estáveis, transições mais suaves e resultados mais próximos de vídeo pronto para uso.", modelDesc15: "O movimento é natural e fluido, a textura é delicada e realista, e o estilo geral é consistente e altamente refinado.", generationFailed: "Geração falhou", generationFailedDesc: "O servidor está ocupado. Tente novamente mais tarde ou ajuste as configurações.", retry: "Tentar novamente", generationFailedToast: "A geração falhou. O servidor está ocupado, tente novamente mais tarde." },
  showcase: { title: "Encontre", titleHighlight: "Inspiração", subtitle: "Explore exemplos de vídeos incríveis criados com as capacidades multimodais do Seedance 2.0." },
  features: { title: "Principais Recursos do Seedance", titleHighlight: "2.0", subtitle: "Um modelo de vídeo AI multimodal verdadeiramente controlável.", items: [
    { title: "Entrada Multimodal", description: "Envie até 9 imagens, 3 vídeos e 3 arquivos de áudio." },
    { title: "Referencie Qualquer Coisa", description: "Referencie movimento, efeitos e movimentos de câmera com linguagem natural." },
    { title: "Consistência Superior", description: "Mantenha consistência perfeita para rostos, roupas e estilos visuais." },
    { title: "Replicação de Movimento Precisa", description: "Envie um vídeo de referência para replicar coreografias complexas." },
    { title: "Extensão e Edição de Vídeo", description: "Estenda vídeos existentes ou edite segmentos específicos." },
    { title: "Geração de Áudio Integrada", description: "Gere automaticamente efeitos sonoros e música de fundo." },
  ]},
  useCases: { label: "Casos de Uso", title: "Possibilidades Infinitas Para Cada Criador", subtitle: "Da publicidade à narrativa criativa, explore as infinitas aplicações do vídeo com IA", cta: "Comece Agora", items: [
    { title: "Publicidade e Marketing", desc: "Crie conteúdo promocional envolvente.", tags: ["Vídeo de Produto", "Conteúdo de Marca", "Anúncios"] },
    { title: "Narrativa Criativa", desc: "Crie narrativas únicas com entradas multimodais.", tags: ["Curtas", "Projetos Artísticos", "Clipes Musicais"] },
    { title: "Conteúdo de Redes Sociais", desc: "Gere conteúdo cativante.", tags: ["Instagram Reels", "TikTok Vídeo", "YouTube Shorts"] },
    { title: "Vídeos de Movimento e Dança", desc: "Envie coreografia de referência.", tags: ["Cover de Dança", "Sequências de Ação", "Coreografia"] },
    { title: "Pré-visualização de Filmes", desc: "Referencie clipes de filmes.", tags: ["Storyboarding", "Planejamento de Câmera", "Prova de Conceito"] },
    { title: "Sincronização Musical", desc: "Envie faixas de áudio e crie vídeos sincronizados.", tags: ["Beat Sync", "Clipes Musicais", "Design de Som"] },
  ]},
  howItWorks: { title: "Como Criar um Vídeo com IA", cta: "Comece a Criar", steps: [
    { title: "Envie Seus Recursos", description: "Envie imagens, vídeos ou arquivos de áudio como referências." },
    { title: "Descreva Sua Visão", description: "Use linguagem natural para descrever o que você quer." },
    { title: "Gere e Itere", description: "Gere um vídeo de 4 a 15 segundos." },
  ]},
  testimonials: { title: "Amado por Criadores em Todo o Mundo", subtitle: "Criadores do mundo inteiro compartilham suas experiências com o Seedance 2.0" },
  pricing: { title: "Preços", subtitle: "Escolha o plano certo para você.", monthly: "Mensal", annually: "Anual", save: "Economize 50%", perMonth: "/mês", subscribe: "Assinar", mostPopular: "Mais Popular", plans: [
    { name: "Basic", desc: "Para amadores e iniciantes", credits: "800 créditos/mês", features: ["Até 80 vídeos/mês", "Vários modelos de IA", "Velocidade padrão", "Sem marca d'água", "Licença comercial"] },
    { name: "Standard", desc: "Para a maioria dos criadores", credits: "2.000 créditos/mês", features: ["Até 200 vídeos/mês", "Vários modelos de IA", "Geração prioritária", "Sem marca d'água", "Suporte prioritário", "Licença comercial"] },
    { name: "Pro", desc: "Para usuários avançados", credits: "6.000 créditos/mês", features: ["Até 600 vídeos/mês", "Vários modelos de IA", "Velocidade mais rápida", "Sem marca d'água", "Suporte especializado", "Licença comercial"] },
  ]},
  faq: { title: "Perguntas Frequentes", contactText: "Tem alguma pergunta? Contate-nos", items: [
    { q: "O que é o Seedance 2.0?", a: "Um modelo revolucionário de geração de vídeo com IA multimodal." },
    { q: "Quais entradas são suportadas?", a: "Quatro modalidades: imagens, vídeos, áudio e texto." },
    { q: "Como funciona a extensão de vídeo?", a: "Envie um vídeo e especifique os segundos a serem adicionados." },
    { q: "Posso editar vídeos existentes?", a: "Sim! Troque personagens, modifique ações." },
    { q: "Quais durações e resoluções são suportadas?", a: "Vídeos de 4 a 15 segundos até 1080p." },
    { q: "Existe uma marca d'água nos vídeos?", a: "Não! Todos os vídeos são sem marca d'água." },
    { q: "Como começo?", a: "Crie uma conta, escolha um plano e comece a criar." },
  ]},
  footer: { title: "Pronto Para Criar?", subtitle: "Junte-se a milhares de criadores que usam o Seedance 2.0.", cta: "Comece a Criar", multiModal: "Entrada multimodal", watermarkFree: "Sem marca d'água", referenceAny: "Referencie qualquer coisa" },
};
export default pt;
