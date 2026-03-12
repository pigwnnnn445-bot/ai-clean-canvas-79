import { Translations } from "../types";
const pt: Translations = {
  nav: { features: "Recursos", useCases: "Casos de Uso", howItWorks: "Como Funciona", pricing: "Preços", faq: "Perguntas Frequentes", signIn: "Entrar", signOut: "Sair" },
  hero: { title: "Seedance", subtitle: "Experimente", subtitleHighlight: "a verdadeira criação de vídeo IA multimodal", subtitleDesc: "Combine imagens, vídeos, áudio e texto para gerar conteúdo cinematográfico com capacidades de referência precisas, extensão de vídeo contínua e controle por linguagem natural.", imageToVideo: "Imagem para Vídeo", textToVideo: "Texto para Vídeo", aiModel: "Modelo IA", images: "Imagens", addEndFrame: "Adicionar quadro final", uploadFirstFrame: "Carregar Primeiro Quadro", uploadLastFrame: "Carregar Último Quadro", clickToUpload: "Clique para carregar ou arraste e solte", supportedFormats: "PNG, JPG, JPEG, WEBP", prompt: "Prompt", promptPlaceholder: "Descreva como deseja animar sua imagem...", resolution: "Resolução", duration: "Duração", aspectRatio: "Proporção", generate: "Gerar", generating: "Gerando...", cost: "Custo", credits: "créditos", available: "Disponível", downloadVideo: "Baixar Vídeo", downloadSuccess: "Vídeo baixado com sucesso", viewHistory: "Ver Histórico", modelDesc20: "Assuntos mais estáveis, transições mais suaves e resultados mais próximos de vídeo pronto para uso.", modelDesc15: "O movimento é natural e fluido, a textura é delicada e realista, e o estilo geral é consistente e altamente polido." },
  showcase: { title: "Inspire", titleHighlight: "-se", subtitle: "Explore exemplos de vídeo impressionantes criados com as capacidades multimodais do Seedance 2.0." },
  features: { title: "Recursos Principais do Seedance", titleHighlight: "2.0", subtitle: "Um modelo de vídeo IA multimodal verdadeiramente controlável.", items: [
    { title: "Entrada Multimodal", description: "Carregue até 9 imagens, 3 vídeos e 3 arquivos de áudio. Combine livremente." },
    { title: "Referencie Qualquer Coisa", description: "Referencie movimento, efeitos, movimentos de câmera, personagens e cenas usando linguagem natural." },
    { title: "Consistência Superior", description: "Mantenha consistência perfeita para rostos, roupas, texto, cenas e estilos visuais." },
    { title: "Replicação Precisa de Movimento", description: "Carregue um vídeo de referência para replicar coreografias e movimentos de câmera complexos." },
    { title: "Extensão e Edição de Vídeo", description: "Estenda vídeos existentes, mescle clipes ou edite segmentos específicos." },
    { title: "Geração de Áudio Integrada", description: "Gere automaticamente efeitos sonoros e música de fundo contextual." },
  ]},
  useCases: { label: "Casos de Uso", title: "Possibilidades Infinitas Para Cada Criador", subtitle: "Da publicidade à narrativa criativa, explore as infinitas aplicações do vídeo com IA", cta: "Comece Agora", items: [ "Casos de Uso", title: "Possibilidades Infinitas Para Cada Criador", cta: "Comece Agora", items: [
    { title: "Publicidade e Marketing", desc: "Crie conteúdo promocional envolvente.", tags: ["Vídeos de Produto", "Conteúdo de Marca", "Anúncios"] },
    { title: "Narrativa Criativa", desc: "Crie narrativas únicas com entradas multimodais.", tags: ["Curtas", "Projetos Artísticos", "Clipes Musicais"] },
    { title: "Conteúdo para Redes Sociais", desc: "Gere conteúdo cativante com templates em tendência.", tags: ["Instagram Reels", "TikTok Vídeos", "YouTube Shorts"] },
    { title: "Vídeos de Movimento e Dança", desc: "Carregue coreografia de referência e aplique a qualquer personagem.", tags: ["Covers de Dança", "Sequências de Ação", "Coreografia"] },
    { title: "Pré-visualização de Filmes", desc: "Referencie clipes de filmes para movimentos de câmera e efeitos visuais.", tags: ["Storyboarding", "Planejamento de Câmera", "Prova de Conceito"] },
    { title: "Sincronização Musical", desc: "Carregue faixas de áudio e crie vídeos perfeitamente sincronizados.", tags: ["Sincronização Rítmica", "Clipes Musicais", "Design de Som"] },
  ]},
  howItWorks: { title: "Como Criar Vídeos com IA", cta: "Comece a Criar Agora", steps: [
    { title: "Carregue seus Recursos", description: "Carregue imagens, vídeos ou arquivos de áudio como referências." },
    { title: "Descreva sua Visão", description: "Use linguagem natural para descrever o que você quer." },
    { title: "Gere e Itere", description: "Gere vídeos de 4-15 segundos. Estenda, edite ou refine sua criação." },
  ]},
  testimonials: { title: "Amado por Criadores em Todo o Mundo", subtitle: "Criadores do mundo inteiro compartilham suas experiências com o Seedance 2.0" }, "Depoimentos", title: "Amado por Criadores no Mundo Todo" },
  pricing: { title: "Preços", subtitle: "Escolha o plano ideal para você.", monthly: "Mensal", annually: "Anual", save: "Economize 50%", perMonth: "/mês", subscribe: "Assinar", mostPopular: "Mais Popular", plans: [
    { name: "Básico", desc: "Ideal para hobbyistas e iniciantes", credits: "800 créditos/mês", features: ["Até 80 vídeos/mês", "Vários modelos IA", "Velocidade padrão", "Sem marca d'água", "Licença comercial"] },
    { name: "Standard", desc: "Perfeito para a maioria dos criadores", credits: "2.000 créditos/mês", features: ["Até 200 vídeos/mês", "Vários modelos IA", "Geração prioritária", "Sem marca d'água", "Suporte prioritário", "Licença comercial"] },
    { name: "Pro", desc: "Ideal para usuários avançados", credits: "6.000 créditos/mês", features: ["Até 600 vídeos/mês", "Vários modelos IA", "Velocidade máxima", "Sem marca d'água", "Suporte especializado", "Licença comercial"] },
  ]},
  faq: { title: "Perguntas Frequentes", contactText: "Ainda tem dúvidas? Contate", items: [
    { q: "O que é o Seedance 2.0?", a: "Modelo revolucionário de geração de vídeo IA multimodal." },
    { q: "Quais entradas são suportadas?", a: "Quatro modalidades: até 9 imagens, 3 vídeos (≤15s), 3 áudios (MP3, ≤15s) e prompts de texto." },
    { q: "Como funciona a extensão de vídeo?", a: "Carregue o vídeo e especifique os segundos a adicionar." },
    { q: "Posso editar vídeos existentes?", a: "Sim! Substitua personagens, modifique ações, adicione ou remova elementos." },
    { q: "Quais durações e resoluções são suportadas?", a: "Vídeos de 4 a 15 segundos com resoluções até 1080p." },
    { q: "Há marca d'água nos vídeos?", a: "Não! Todos os vídeos são livres de marca d'água." },
    { q: "Como começar?", a: "Crie uma conta, escolha um plano e comece a criar." },
  ]},
  footer: { title: "Pronto para Criar?", subtitle: "Junte-se a milhares de criadores usando Seedance 2.0.", cta: "Comece a Criar Agora", multiModal: "Entrada multimodal", watermarkFree: "Sem marca d'água", referenceAny: "Referencie qualquer conteúdo" },
};
export default pt;
