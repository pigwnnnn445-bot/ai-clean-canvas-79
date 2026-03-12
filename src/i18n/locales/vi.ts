import { Translations } from "../types";
const vi: Translations = {
  nav: { features: "Tính năng", useCases: "Ứng dụng", howItWorks: "Cách hoạt động", pricing: "Bảng giá", faq: "Câu hỏi thường gặp", signIn: "Đăng nhập", signOut: "Đăng xuất" },
  hero: { title: "Seedance", subtitle: "Trải nghiệm", subtitleHighlight: "tạo video AI đa phương thức thực sự", imageToVideo: "Ảnh sang Video", textToVideo: "Văn bản sang Video", aiModel: "Mô hình AI", images: "Hình ảnh", addEndFrame: "Thêm khung cuối", uploadFirstFrame: "Tải lên Khung Đầu", uploadLastFrame: "Tải lên Khung Cuối", clickToUpload: "Nhấp để tải lên hoặc kéo và thả", supportedFormats: "PNG, JPG, JPEG, WEBP", prompt: "Prompt", promptPlaceholder: "Mô tả cách bạn muốn tạo hoạt ảnh cho hình ảnh...", resolution: "Độ phân giải", duration: "Thời lượng", aspectRatio: "Tỷ lệ khung hình", generate: "Tạo", generating: "Đang tạo...", cost: "Chi phí", credits: "credits", available: "Có sẵn", downloadVideo: "Tải xuống Video", downloadSuccess: "Tải video thành công", viewHistory: "Xem lịch sử", modelDesc20: "Chủ thể ổn định hơn, chuyển cảnh mượt mà hơn và kết quả gần hơn với video sẵn sàng sử dụng.", modelDesc15: "Chuyển động tự nhiên và mượt mà, kết cấu tinh tế và chân thực, phong cách tổng thể nhất quán và được trau chuốt cao." },
  showcase: { title: "Tìm", titleHighlight: "Cảm hứng", subtitle: "Khám phá các ví dụ video ấn tượng được tạo với khả năng đa phương thức của Seedance 2.0." },
  features: { title: "Tính năng chính của Seedance", titleHighlight: "2.0", subtitle: "Mô hình video AI đa phương thức có thể kiểm soát thực sự.", items: [
    { title: "Đầu vào Đa phương thức", description: "Tải lên tối đa 9 hình ảnh, 3 video và 3 tệp âm thanh." },
    { title: "Tham chiếu Bất kỳ", description: "Tham chiếu chuyển động, hiệu ứng, chuyển động camera bằng ngôn ngữ tự nhiên." },
    { title: "Tính nhất quán Vượt trội", description: "Duy trì sự nhất quán hoàn hảo cho khuôn mặt, trang phục và phong cách hình ảnh." },
    { title: "Sao chép Chuyển động Chính xác", description: "Tải lên video tham chiếu để sao chép vũ đạo phức tạp." },
    { title: "Mở rộng & Chỉnh sửa Video", description: "Mở rộng video hiện có hoặc chỉnh sửa các phân đoạn cụ thể." },
    { title: "Tạo Âm thanh Tích hợp", description: "Tự động tạo hiệu ứng âm thanh và nhạc nền." },
  ]},
  useCases: { label: "Ứng dụng", title: "Khả năng Vô hạn Cho Mọi Nhà sáng tạo", cta: "Bắt đầu Ngay", items: [
    { title: "Quảng cáo & Tiếp thị", desc: "Tạo nội dung quảng cáo hấp dẫn.", tags: ["Video Sản phẩm", "Nội dung Thương hiệu", "Quảng cáo"] },
    { title: "Kể chuyện Sáng tạo", desc: "Tạo câu chuyện độc đáo.", tags: ["Phim ngắn", "Dự án Nghệ thuật", "Video Âm nhạc"] },
    { title: "Nội dung Mạng xã hội", desc: "Tạo nội dung thu hút.", tags: ["Instagram Reels", "TikTok Video", "YouTube Shorts"] },
    { title: "Video Chuyển động & Nhảy", desc: "Tải lên vũ đạo tham chiếu.", tags: ["Dance Cover", "Chuỗi Hành động", "Vũ đạo"] },
    { title: "Tiền hình dung Phim", desc: "Tham chiếu clip phim.", tags: ["Storyboarding", "Lập kế hoạch Camera", "Chứng minh Khái niệm"] },
    { title: "Đồng bộ Âm nhạc", desc: "Tải lên track âm thanh và tạo video đồng bộ.", tags: ["Beat Sync", "Video Âm nhạc", "Thiết kế Âm thanh"] },
  ]},
  howItWorks: { title: "Cách Tạo Video AI", cta: "Bắt đầu Tạo", steps: [
    { title: "Tải lên Tài nguyên", description: "Tải lên hình ảnh, video hoặc tệp âm thanh làm tham chiếu." },
    { title: "Mô tả Tầm nhìn", description: "Sử dụng ngôn ngữ tự nhiên để mô tả điều bạn muốn." },
    { title: "Tạo & Lặp lại", description: "Tạo video 4-15 giây." },
  ]},
  testimonials: { label: "Đánh giá", title: "Được yêu thích bởi Nhà sáng tạo Toàn cầu" },
  pricing: { title: "Bảng giá", subtitle: "Chọn gói phù hợp nhất.", monthly: "Hàng tháng", annually: "Hàng năm", save: "Tiết kiệm 50%", perMonth: "/tháng", subscribe: "Đăng ký", mostPopular: "Phổ biến nhất", plans: [
    { name: "Cơ bản", desc: "Dành cho người mới", credits: "800 credits/tháng", features: ["Tối đa 80 video/tháng", "Nhiều mô hình AI", "Tốc độ tiêu chuẩn", "Không watermark", "Giấy phép thương mại"] },
    { name: "Tiêu chuẩn", desc: "Cho hầu hết nhà sáng tạo", credits: "2.000 credits/tháng", features: ["Tối đa 200 video/tháng", "Nhiều mô hình AI", "Tạo ưu tiên", "Không watermark", "Hỗ trợ ưu tiên", "Giấy phép thương mại"] },
    { name: "Pro", desc: "Cho người dùng nâng cao", credits: "6.000 credits/tháng", features: ["Tối đa 600 video/tháng", "Nhiều mô hình AI", "Tốc độ nhanh nhất", "Không watermark", "Hỗ trợ chuyên gia", "Giấy phép thương mại"] },
  ]},
  faq: { title: "Câu hỏi Thường gặp", contactText: "Còn câu hỏi? Liên hệ", items: [
    { q: "Seedance 2.0 là gì?", a: "Mô hình tạo video AI đa phương thức cách mạng." },
    { q: "Hỗ trợ đầu vào nào?", a: "Bốn phương thức: hình ảnh, video, âm thanh và văn bản." },
    { q: "Mở rộng video hoạt động thế nào?", a: "Tải lên video và chỉ định số giây cần thêm." },
    { q: "Có thể chỉnh sửa video hiện có?", a: "Có! Thay đổi nhân vật, sửa hành động, thêm hoặc xóa phần tử." },
    { q: "Hỗ trợ độ dài và độ phân giải nào?", a: "Video 4-15 giây với độ phân giải lên đến 1080p." },
    { q: "Có watermark không?", a: "Không! Tất cả video đều không có watermark." },
    { q: "Bắt đầu thế nào?", a: "Tạo tài khoản, chọn gói và bắt đầu tạo." },
  ]},
  footer: { title: "Sẵn sàng Tạo?", subtitle: "Tham gia cùng hàng ngàn nhà sáng tạo sử dụng Seedance 2.0.", cta: "Bắt đầu Tạo Ngay", multiModal: "Đầu vào đa phương thức", watermarkFree: "Không watermark", referenceAny: "Tham chiếu mọi nội dung" },
};
export default vi;
