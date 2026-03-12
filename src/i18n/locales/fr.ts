import { Translations } from "../types";

const fr: Translations = {
  nav: { features: "Fonctionnalités", useCases: "Cas d'Usage", howItWorks: "Comment ça Marche", pricing: "Tarifs", faq: "FAQ", signIn: "Connexion", signOut: "Déconnexion" },
  hero: {
    title: "Seedance", subtitle: "Découvrez", subtitleHighlight: "la création vidéo IA multimodale",
    imageToVideo: "Image vers Vidéo", textToVideo: "Texte vers Vidéo", aiModel: "Modèle IA", images: "Images",
    addEndFrame: "Ajouter image finale", uploadFirstFrame: "Télécharger Première Image", uploadLastFrame: "Télécharger Dernière Image",
    clickToUpload: "Cliquez pour télécharger ou glissez-déposez", supportedFormats: "PNG, JPG, JPEG, WEBP",
    prompt: "Prompt", promptPlaceholder: "Décrivez l'animation souhaitée...",
    resolution: "Résolution", duration: "Durée", aspectRatio: "Rapport d'Aspect",
    generate: "Générer", generating: "Génération en cours...",
    cost: "Coût", credits: "crédits", available: "Disponible",
    downloadVideo: "Télécharger la Vidéo", downloadSuccess: "Vidéo téléchargée avec succès", viewHistory: "Voir l'Historique",
  },
  showcase: { title: "Trouvez", titleHighlight: "l'Inspiration", subtitle: "Explorez des exemples vidéo époustouflants créés avec les capacités multimodales de Seedance 2.0." },
  features: {
    title: "Fonctionnalités Clés de Seedance", titleHighlight: "2.0",
    subtitle: "Un modèle vidéo IA multimodal véritablement contrôlable. Référencez, éditez et créez tout.",
    items: [
      { title: "Entrée Multimodale", description: "Téléchargez jusqu'à 9 images, 3 vidéos et 3 fichiers audio. Combinez librement texte, images, vidéos et audio." },
      { title: "Référencez Tout", description: "Référencez mouvements, effets, mouvements de caméra, personnages, scènes et sons en langage naturel." },
      { title: "Consistance Supérieure", description: "Maintenez une consistance parfaite pour les visages, vêtements, textes, scènes et styles visuels." },
      { title: "Réplication Précise du Mouvement", description: "Téléchargez une vidéo de référence pour répliquer des chorégraphies et mouvements de caméra complexes." },
      { title: "Extension & Édition Vidéo", description: "Étendez des vidéos existantes, fusionnez des clips ou éditez des segments spécifiques." },
      { title: "Génération Audio Intégrée", description: "Générez automatiquement des effets sonores et de la musique de fond contextuels." },
    ],
  },
  useCases: {
    label: "Cas d'Usage", title: "Des Possibilités Infinies Pour Chaque Créateur", cta: "Commencer Maintenant",
    items: [
      { title: "Publicité & Marketing", desc: "Créez du contenu promotionnel convaincant en référençant des modèles publicitaires réussis.", tags: ["Vidéos Produit", "Contenu de Marque", "Publicités"] },
      { title: "Narration Créative", desc: "Créez des récits uniques avec des entrées multimodales.", tags: ["Courts Métrages", "Projets Artistiques", "Clips Musicaux"] },
      { title: "Contenu Réseaux Sociaux", desc: "Générez du contenu accrocheur en référençant des tendances.", tags: ["Instagram Reels", "TikTok Vidéos", "YouTube Shorts"] },
      { title: "Vidéos de Mouvement & Danse", desc: "Téléchargez une chorégraphie de référence et appliquez-la à n'importe quel personnage.", tags: ["Covers de Danse", "Séquences d'Action", "Chorégraphie"] },
      { title: "Prévisualisation de Films", desc: "Référencez des clips de films pour répliquer les mouvements de caméra et effets visuels.", tags: ["Storyboarding", "Planification Caméra", "Validation de Concept"] },
      { title: "Synchronisation Musicale", desc: "Téléchargez des pistes audio et créez des vidéos parfaitement synchronisées.", tags: ["Sync Rythmique", "Clips Musicaux", "Design Sonore"] },
    ],
  },
  howItWorks: {
    title: "Comment Créer des Vidéos IA", cta: "Commencer à Créer",
    steps: [
      { title: "Téléchargez vos Ressources", description: "Téléchargez images, vidéos ou fichiers audio comme références. Combinez jusqu'à 12 fichiers." },
      { title: "Décrivez votre Vision", description: "Utilisez le langage naturel pour décrire ce que vous voulez." },
      { title: "Générez & Itérez", description: "Générez votre vidéo de 4-15 secondes. Étendez, éditez ou affinez votre création." },
    ],
  },
  testimonials: { label: "Témoignages", title: "Adoré par les Créateurs du Monde Entier" },
  pricing: {
    title: "Tarifs", subtitle: "Choisissez le plan qui vous convient.",
    monthly: "Mensuel", annually: "Annuel", save: "Économisez 50%", perMonth: "/mois", subscribe: "S'abonner", mostPopular: "Le Plus Populaire",
    plans: [
      { name: "Basique", desc: "Idéal pour les amateurs et débutants", credits: "800 crédits/mois", features: ["Jusqu'à 80 vidéos/mois", "Plusieurs modèles IA", "Vitesse standard", "Sans filigrane", "Licence commerciale"] },
      { name: "Standard", desc: "Parfait pour la plupart des créateurs", credits: "2 000 crédits/mois", features: ["Jusqu'à 200 vidéos/mois", "Plusieurs modèles IA", "Génération prioritaire", "Sans filigrane", "Support prioritaire", "Licence commerciale"] },
      { name: "Pro", desc: "Idéal pour les utilisateurs avancés", credits: "6 000 crédits/mois", features: ["Jusqu'à 600 vidéos/mois", "Plusieurs modèles IA", "Vitesse maximale", "Sans filigrane", "Support expert", "Licence commerciale"] },
    ],
  },
  faq: {
    title: "Questions Fréquemment Posées", contactText: "Des questions ? Contactez",
    items: [
      { q: "Qu'est-ce que Seedance 2.0 ?", a: "Seedance 2.0 est un modèle révolutionnaire de génération vidéo IA multimodal supportant les entrées image, vidéo, audio et texte." },
      { q: "Quelles entrées supporte Seedance 2.0 ?", a: "Quatre modalités : jusqu'à 9 images, 3 vidéos (≤15s), 3 fichiers audio (MP3, ≤15s) et des prompts texte. Jusqu'à 12 fichiers au total." },
      { q: "Comment fonctionne l'extension vidéo ?", a: "Téléchargez votre vidéo et spécifiez les secondes à ajouter. Le modèle maintient la continuité." },
      { q: "Puis-je éditer des vidéos existantes ?", a: "Oui ! Remplacez des personnages, modifiez des actions, ajoutez des éléments ou supprimez du contenu." },
      { q: "Quelles durées et résolutions sont supportées ?", a: "Seedance 2.0 génère des vidéos de 4 à 15 secondes avec des résolutions jusqu'à 1080p." },
      { q: "Y a-t-il des filigranes sur les vidéos ?", a: "Non ! Toutes les vidéos sont sans filigrane." },
      { q: "Comment commencer ?", a: "Inscrivez-vous, choisissez un plan et commencez à créer." },
    ],
  },
  footer: {
    title: "Prêt à Créer ?", subtitle: "Rejoignez des milliers de créateurs utilisant Seedance 2.0.", cta: "Commencer à Créer",
    multiModal: "Entrée multimodale", watermarkFree: "Sans filigrane", referenceAny: "Référencez tout",
  },
};

export default fr;
