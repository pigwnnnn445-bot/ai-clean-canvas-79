import { Translations } from "../types";

const ko: Translations = {
  nav: { features: "기능", useCases: "활용 사례", howItWorks: "사용 방법", pricing: "가격", faq: "FAQ", signIn: "로그인", signOut: "로그아웃" },
  hero: {
    title: "Seedance", subtitle: "경험하세요", subtitleHighlight: "진정한 멀티모달 AI 비디오 제작",
    subtitleDesc: "이미지, 비디오, 오디오, 텍스트를 결합하여 정밀한 참조 기능, 원활한 비디오 확장, 자연어 제어로 시네마틱 콘텐츠를 생성하세요.",
    imageToVideo: "이미지를 비디오로", textToVideo: "텍스트를 비디오로", aiModel: "AI 모델", images: "이미지",
    addEndFrame: "첫 번째 및 마지막 프레임 추가", uploadFirstFrame: "첫 번째 프레임 업로드", uploadLastFrame: "마지막 프레임 업로드",
    clickToUpload: "클릭하여 업로드 또는 드래그 앤 드롭", supportedFormats: "PNG, JPG, JPEG, WEBP",
    prompt: "프롬프트", promptPlaceholder: "이미지 애니메이션 방법을 설명하세요...",
    resolution: "해상도", duration: "길이", aspectRatio: "화면 비율",
    generate: "생성", generating: "생성 중...",
    cost: "비용", credits: "크레딧", available: "사용 가능",
    downloadVideo: "비디오 다운로드", downloadSuccess: "비디오가 성공적으로 다운로드되었습니다", viewHistory: "기록 보기",
    modelDesc20: "더 안정적인 피사체, 더 부드러운 전환, 바로 사용 가능한 비디오에 가까운 결과물.",
    modelDesc15: "영상 속 움직임이 자연스럽고 유연하며, 질감이 섬세하고 사실적이며, 전체적인 스타일이 일관되고 매우 세련됩니다.",
    generationFailed: "생성 실패",
    generationFailedDesc: "서버가 현재 바쁩니다. 나중에 다시 시도하거나 설정을 조정해 주세요.",
    retry: "재시도",
    generationFailedToast: "생성에 실패했습니다. 서버가 바쁩니다. 나중에 다시 시도해 주세요.",
  },
  showcase: { title: "", titleHighlight: "영감을 얻으세요", subtitle: "Seedance 2.0의 멀티모달 기능으로 만든 놀라운 비디오 예시를 살펴보세요." },
  features: {
    title: "Seedance 핵심 기능", titleHighlight: "2.0",
    subtitle: "진정으로 제어 가능한 멀티모달 AI 비디오 모델. 무엇이든 참조하고, 편집하고, 만드세요.",
    items: [
      { title: "멀티모달 입력", description: "최대 9개의 이미지, 3개의 비디오, 3개의 오디오 파일을 업로드하세요. 텍스트, 이미지, 비디오, 오디오를 자유롭게 결합하세요." },
      { title: "무엇이든 참조", description: "자연어를 사용하여 모션, 효과, 카메라 움직임, 캐릭터, 장면 및 사운드를 참조하세요." },
      { title: "뛰어난 일관성", description: "비디오 전체에서 얼굴, 의상, 텍스트, 장면 및 시각적 스타일의 완벽한 일관성을 유지합니다." },
      { title: "정밀한 모션 복제", description: "참조 비디오를 업로드하여 복잡한 안무, 카메라 움직임 및 액션 시퀀스를 복제하세요." },
      { title: "비디오 확장 및 편집", description: "기존 비디오를 확장하거나 클립을 병합하거나 특정 세그먼트를 편집하세요." },
      { title: "내장 오디오 생성", description: "맥락 인식 음향 효과와 배경 음악을 자동 생성합니다." },
    ],
  },
  useCases: {
    label: "활용 사례", title: "모든 크리에이터를 위한 무한한 가능성", subtitle: "광고부터 창의적 스토리텔링까지, AI 비디오의 무한한 활용을 탐색하세요", cta: "지금 시작하기",
    items: [
      { title: "광고 및 마케팅", desc: "성공적인 광고 템플릿을 참조하여 매력적인 프로모션 콘텐츠를 만드세요.", tags: ["제품 비디오", "브랜드 콘텐츠", "상업 광고"] },
      { title: "창의적 스토리텔링", desc: "멀티모달 입력으로 독특한 내러티브를 만드세요.", tags: ["단편 영화", "아트 프로젝트", "뮤직 비디오"] },
      { title: "소셜 미디어 콘텐츠", desc: "트렌드 템플릿을 참조하여 눈길을 끄는 콘텐츠를 생성하세요.", tags: ["Instagram Reels", "TikTok 비디오", "YouTube Shorts"] },
      { title: "모션 및 댄스 비디오", desc: "참조 안무를 업로드하여 모든 캐릭터에 적용하세요.", tags: ["댄스 커버", "액션 시퀀스", "안무"] },
      { title: "영화 프리비주얼라이제이션", desc: "영화 클립을 참조하여 카메라 움직임과 시각 효과를 복제하세요.", tags: ["스토리보드", "카메라 계획", "컨셉 검증"] },
      { title: "음악 및 오디오 동기화", desc: "오디오 트랙을 업로드하여 완벽하게 비트 동기화된 비디오를 만드세요.", tags: ["비트 싱크", "뮤직 비디오", "사운드 디자인"] },
    ],
  },
  howItWorks: {
    title: "AI 비디오 만드는 방법", cta: "지금 만들기 시작",
    steps: [
      { title: "에셋 업로드", description: "이미지, 비디오 또는 오디오 파일을 참조로 업로드하세요. 최대 12개 파일을 결합할 수 있습니다." },
      { title: "비전 설명", description: "자연어로 원하는 내용을 설명하세요." },
      { title: "생성 및 반복", description: "4-15초 비디오를 생성하세요. 확장, 편집 또는 조정으로 작품을 다듬으세요." },
    ],
  },
  testimonials: { title: "전 세계 크리에이터들이 사랑합니다", subtitle: "전 세계 크리에이터들이 Seedance 2.0 경험을 공유합니다" },
  pricing: {
    title: "가격", subtitle: "가장 적합한 플랜을 선택하세요.",
    monthly: "월간", annually: "연간", save: "50% 절약", perMonth: "/월", subscribe: "구독하기", mostPopular: "가장 인기",
    plans: [
      { name: "베이직", desc: "취미와 초보자에게 적합", credits: "800 크레딧/월", features: ["월 최대 80개 비디오", "다양한 AI 모델", "표준 속도", "워터마크 없음", "상업용 라이선스"] },
      { name: "스탠다드", desc: "대부분의 크리에이터에게 적합", credits: "2,000 크레딧/월", features: ["월 최대 200개 비디오", "다양한 AI 모델", "우선 생성", "워터마크 없음", "우선 지원", "상업용 라이선스"] },
      { name: "프로", desc: "파워 유저에게 적합", credits: "6,000 크레딧/월", features: ["월 최대 600개 비디오", "다양한 AI 모델", "최고 속도", "워터마크 없음", "전문가 지원", "상업용 라이선스"] },
    ],
  },
  faq: {
    title: "자주 묻는 질문", contactText: "질문이 있으신가요? 연락하세요",
    items: [
      { q: "Seedance 2.0이란?", a: "Seedance 2.0은 이미지, 비디오, 오디오, 텍스트 입력을 지원하는 혁신적인 멀티모달 AI 비디오 생성 모델입니다." },
      { q: "어떤 입력을 지원하나요?", a: "4가지 모달리티: 최대 9개 이미지, 3개 비디오(≤15초), 3개 오디오(MP3, ≤15초), 텍스트 프롬프트. 총 최대 12개 파일." },
      { q: "비디오 확장은 어떻게 작동하나요?", a: "비디오를 업로드하고 추가할 초를 지정하세요. 모델이 연속성을 유지합니다." },
      { q: "기존 비디오를 편집할 수 있나요?", a: "네! 캐릭터 교체, 액션 수정, 요소 추가 또는 제거가 가능합니다." },
      { q: "지원되는 비디오 길이와 해상도는?", a: "4~15초 비디오 생성. 최대 1080p 해상도 지원." },
      { q: "생성된 비디오에 워터마크가 있나요?", a: "아니요! 모든 비디오는 워터마크가 없습니다." },
      { q: "어떻게 시작하나요?", a: "계정을 만들고, 플랜을 선택하고, 만들기를 시작하세요." },
    ],
  },
  footer: {
    title: "만들 준비가 되셨나요?", subtitle: "Seedance 2.0을 사용하는 수천 명의 크리에이터와 함께하세요.", cta: "지금 만들기 시작",
    multiModal: "멀티모달 입력", watermarkFree: "워터마크 없음", referenceAny: "모든 콘텐츠 참조",
  },
};

export default ko;
