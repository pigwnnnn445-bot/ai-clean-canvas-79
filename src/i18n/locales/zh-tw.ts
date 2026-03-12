import { Translations } from "../types";
const zhTw: Translations = {
  nav: { features: "功能", useCases: "應用場景", howItWorks: "使用方法", pricing: "定價", faq: "常見問題", signIn: "登入", signOut: "登出" },
  hero: { title: "Seedance", subtitle: "體驗", subtitleHighlight: "真正的多模態AI影片創作", imageToVideo: "圖片轉影片", textToVideo: "文字轉影片", aiModel: "AI 模型", images: "圖片", addEndFrame: "新增結束幀", uploadFirstFrame: "上傳首幀", uploadLastFrame: "上傳末幀", clickToUpload: "點擊上傳或拖曳檔案", supportedFormats: "PNG, JPG, JPEG, WEBP", prompt: "提示詞", promptPlaceholder: "描述您想要的動畫效果...", resolution: "解析度", duration: "時長", aspectRatio: "寬高比", generate: "生成", generating: "生成中...", cost: "消耗", credits: "積分", available: "可用", downloadVideo: "下載影片", downloadSuccess: "影片下載成功", viewHistory: "查看歷史記錄" },
  showcase: { title: "獲取", titleHighlight: "靈感", subtitle: "探索使用 Seedance 2.0 多模態功能創作的精彩影片範例。" },
  features: { title: "Seedance 核心功能", titleHighlight: "2.0", subtitle: "真正可控的多模態AI影片模型。參考一切，編輯一切，創造一切。", items: [
    { title: "多模態輸入", description: "上傳最多9張圖片、3個影片和3個音訊檔案。自由組合文字、圖片、影片和音訊。" },
    { title: "參考任何內容", description: "使用自然語言參考動作、特效、攝影機運動、角色、場景和聲音。" },
    { title: "卓越一致性", description: "在整個影片中保持面部、服裝、文字、場景和視覺風格的完美一致性。" },
    { title: "精確動作複製", description: "上傳參考影片以複製複雜的編舞、攝影機運動和動作序列。" },
    { title: "影片擴展與編輯", description: "擴展現有影片、合併片段或編輯特定片段，同時保留其餘部分。" },
    { title: "內建音訊生成", description: "自動生成情境感知的音效和背景音樂。將影片同步到上傳的音訊。" },
  ]},
  useCases: { label: "應用場景", title: "為每位創作者提供無限可能", cta: "立即開始", items: [
    { title: "廣告與行銷", desc: "透過參考成功的廣告範本建立引人注目的推廣內容。", tags: ["產品影片", "品牌內容", "商業廣告"] },
    { title: "創意敘事", desc: "使用多模態輸入打造獨特敘事。", tags: ["短片", "藝術專案", "音樂影片"] },
    { title: "社群媒體內容", desc: "透過參考熱門範本生成吸引眼球的內容。", tags: ["Instagram Reels", "TikTok 影片", "YouTube Shorts"] },
    { title: "動作與舞蹈影片", desc: "上傳參考編舞並將其應用到任何角色。", tags: ["舞蹈翻跳", "動作序列", "編舞"] },
    { title: "電影預視覺化", desc: "參考電影片段來複製攝影機運動和視覺特效。", tags: ["分鏡", "鏡頭規劃", "概念驗證"] },
    { title: "音樂與音訊同步", desc: "上傳音訊軌道並建立完美節拍同步的影片。", tags: ["節拍同步", "音樂影片", "音效設計"] },
  ]},
  howItWorks: { title: "如何建立AI影片", cta: "立即開始創作", steps: [
    { title: "上傳素材", description: "上傳圖片、影片或音訊檔案作為參考。最多可組合12個不同模態的檔案。" },
    { title: "描述您的願景", description: "使用自然語言描述您想要的內容。" },
    { title: "生成與迭代", description: "生成4-15秒的影片。擴展、編輯或調整您的作品。" },
  ]},
  testimonials: { label: "使用者評價", title: "全球創作者的選擇" },
  pricing: { title: "定價", subtitle: "選擇最適合您的方案。", monthly: "月付", annually: "年付", save: "節省50%", perMonth: "/月", subscribe: "訂閱", mostPopular: "最受歡迎", plans: [
    { name: "基礎版", desc: "適合愛好者和初學者", credits: "800 積分/月", features: ["每月最多80個影片", "多種AI影片模型", "標準生成速度", "無浮水印", "商業使用許可"] },
    { name: "標準版", desc: "適合大多數創作者", credits: "2,000 積分/月", features: ["每月最多200個影片", "多種AI影片模型", "優先生成", "無浮水印", "優先支援", "商業使用許可"] },
    { name: "專業版", desc: "適合進階使用者", credits: "6,000 積分/月", features: ["每月最多600個影片", "多種AI影片模型", "最快生成速度", "無浮水印", "專家團隊支援", "商業使用許可"] },
  ]},
  faq: { title: "常見問題", contactText: "還有其他問題？聯繫", items: [
    { q: "什麼是 Seedance 2.0？", a: "Seedance 2.0 是一個革命性的多模態AI影片生成模型。" },
    { q: "Seedance 2.0 支援哪些輸入？", a: "四種模態：最多9張圖片、3個影片、3個音訊檔案和文字提示。" },
    { q: "影片擴展如何運作？", a: "上傳影片並指定要新增的秒數。" },
    { q: "我可以編輯現有影片嗎？", a: "可以！替換角色、修改動作、新增或刪除元素。" },
    { q: "支援哪些影片長度和解析度？", a: "4到15秒的影片，解析度最高達1080p。" },
    { q: "生成的影片有浮水印嗎？", a: "沒有！所有影片完全無浮水印。" },
    { q: "如何開始使用？", a: "註冊帳戶，選擇方案，然後開始創作。" },
  ]},
  footer: { title: "準備好創作了嗎？", subtitle: "加入數千名使用 Seedance 2.0 的創作者。", cta: "立即開始創作", multiModal: "多模態輸入", watermarkFree: "無浮水印", referenceAny: "參考任何內容" },
};
export default zhTw;
