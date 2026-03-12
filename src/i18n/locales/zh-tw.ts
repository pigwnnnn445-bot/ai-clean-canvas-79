import { Translations } from "../types";
const zhTw: Translations = {
  nav: { features: "功能", useCases: "應用場景", howItWorks: "使用方法", pricing: "定價", faq: "常見問題", signIn: "登入", signOut: "登出" },
  hero: { title: "Seedance", subtitle: "體驗", subtitleHighlight: "真正的多模態AI影片創作", subtitleDesc: "結合圖片、影片、音訊和文字，生成具有精準參考能力、無縫影片擴展和自然語言控制的電影級內容。", imageToVideo: "圖片轉影片", textToVideo: "文字轉影片", aiModel: "AI 模型", images: "圖片", addEndFrame: "新增結束幀", uploadFirstFrame: "上傳首幀", uploadLastFrame: "上傳末幀", clickToUpload: "點擊上傳或拖曳檔案", supportedFormats: "PNG, JPG, JPEG, WEBP", prompt: "提示詞", promptPlaceholder: "描述您想要的動畫效果...", resolution: "解析度", duration: "時長", aspectRatio: "寬高比", generate: "生成", generating: "生成中...", cost: "消耗", credits: "積分", available: "可用", downloadVideo: "下載影片", downloadSuccess: "影片下載成功", viewHistory: "查看歷史記錄", modelDesc20: "主體更穩定，轉場更流暢，輸出結果更接近可直接使用的影片。", modelDesc15: "畫面運動自然流暢，質感細膩逼真，整體風格統一且高度精緻。" },
  showcase: { title: "獲取", titleHighlight: "靈感", subtitle: "探索使用 Seedance 2.0 多模態功能創作的精彩影片範例。" },
  features: { title: "Seedance 主要功能", titleHighlight: "2.0", subtitle: "真正可控的多模態 AI 影片模型。", items: [
    { title: "多模態輸入", description: "上傳最多 9 張圖片、3 個影片和 3 個音訊檔案。" },
    { title: "參考任何內容", description: "使用自然語言參考動作、效果和相機運動。" },
    { title: "卓越的一致性", description: "保持面部、服裝和視覺風格的完美一致性。" },
    { title: "精確的動作複製", description: "上傳參考影片以複製複雜的編舞。" },
    { title: "影片擴展與編輯", description: "擴展現有影片或編輯特定片段。" },
    { title: "內建音訊生成", description: "自動生成音效和背景音樂。" },
  ]},
  useCases: { label: "應用場景", title: "為每位創作者提供無限可能", subtitle: "從廣告行銷到創意敘事，探索AI影片在各行各業的無限應用", cta: "立即開始", items: [
    { title: "廣告與行銷", desc: "透過參考成功的廣告範本建立引人注目的推廣內容。", tags: ["產品影片", "品牌內容", "商業廣告"] },
    { title: "創意敘事", desc: "使用多模態輸入打造獨特敘事。", tags: ["短片", "藝術專案", "音樂影片"] },
    { title: "社群媒體內容", desc: "透過參考熱門範本和特效生成吸引眼球的內容。", tags: ["Instagram Reels", "TikTok 影片", "YouTube Shorts"] },
    { title: "動作與舞蹈影片", desc: "上傳參考編舞並將其應用到任何角色。", tags: ["舞蹈翻跳", "動作序列", "編舞"] },
    { title: "電影預視覺化", desc: "參考電影片段來複製攝影機運動、轉場和視覺特效。", tags: ["分鏡", "鏡頭規劃", "概念驗證"] },
    { title: "音樂與音訊同步", desc: "上傳音訊軌道並建立完美節拍同步的影片。", tags: ["節拍同步", "音樂影片", "音效設計"] },
  ]},
  howItWorks: { title: "如何製作 AI 影片", cta: "開始創作", steps: [
    { title: "上傳素材", description: "上傳圖片、影片或音訊檔案作為參考。" },
    { title: "描述您的願景", description: "使用自然語言描述您想要的效果。" },
    { title: "生成與迭代", description: "生成 4-15 秒的影片。" },
  ]},
  testimonials: { title: "全球創作者的選擇", subtitle: "來自世界各地的創作者分享使用 Seedance 2.0 的體驗" },
  pricing: { title: "定價", subtitle: "選擇適合您的方案。", monthly: "每月", annually: "每年", save: "節省 50%", perMonth: "/月", subscribe: "訂閱", mostPopular: "最受歡迎", plans: [
    { name: "基本", desc: "適合愛好者和初學者", credits: "800 積分/月", features: ["每月最多 80 部影片", "多種 AI 模型", "標準速度", "無浮水印", "商業授權"] },
    { name: "標準", desc: "適合大多數創作者", credits: "2,000 積分/月", features: ["每月最多 200 部影片", "多種 AI 模型", "優先生成", "無浮水印", "優先支援", "商業授權"] },
    { name: "專業", desc: "適合進階使用者", credits: "6,000 積分/月", features: ["每月最多 600 部影片", "多種 AI 模型", "最快速度", "無浮水印", "專家支援", "商業授權"] },
  ]},
  faq: { title: "常見問題", contactText: "還有其他問題？請聯絡", items: [
    { q: "什麼是 Seedance 2.0？", a: "一款革命性的多模態 AI 影片生成模型。" },
    { q: "支援哪些輸入？", a: "四種模態：圖片、影片、音訊和文字。" },
    { q: "影片擴展如何運作？", a: "上傳影片並指定要新增的秒數。" },
    { q: "我可以編輯現有影片嗎？", a: "可以！更換角色、修改動作。" },
    { q: "支援哪些長度和解析度？", a: "4-15 秒的影片，最高可達 1080p。" },
    { q: "影片有浮水印嗎？", a: "沒有！所有影片都沒有浮水印。" },
    { q: "如何開始使用？", a: "建立帳戶、選擇方案並開始創作。" },
  ]},
  footer: { title: "準備好開始創作了嗎？", subtitle: "加入使用 Seedance 2.0 的數千名創作者行列。", cta: "開始創作", multiModal: "多模態輸入", watermarkFree: "無浮水印", referenceAny: "參考任何內容" },
};
export default zhTw;
