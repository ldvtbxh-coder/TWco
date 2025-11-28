import { Benefit, Module, Testimonial, PricingTier, FAQItem } from './types';

export const BENEFITS: Benefit[] = [
  {
    id: 1,
    title: "Tư Duy Đột Phá",
    description: "Phá bỏ những rào cản tâm lý giới hạn bản thân để đạt được mục tiêu lớn hơn.",
    iconName: "TrendingUp"
  },
  {
    id: 2,
    title: "Cộng Đồng Tích Cực",
    description: "Kết nối với những người cùng chí hướng, cùng nhau phát triển và hỗ trợ.",
    iconName: "Users"
  },
  {
    id: 3,
    title: "Chứng Nhận Uy Tín",
    description: "Nhận chứng chỉ hoàn thành khóa học được công nhận bởi các tổ chức hàng đầu.",
    iconName: "Award"
  },
  {
    id: 4,
    title: "Linh Hoạt Thời Gian",
    description: "Học mọi lúc mọi nơi với nền tảng trực tuyến hỗ trợ đa thiết bị.",
    iconName: "Clock"
  }
];

export const CURRICULUM: Module[] = [
  {
    id: 1,
    title: "Tuần 1: Khám Phá Bản Thân",
    duration: "3 Giờ video + Bài tập",
    lessons: ["Xác định giá trị cốt lõi", "Phân tích điểm mạnh/yếu (SWOT)", "Thiết lập bản đồ cuộc đời"]
  },
  {
    id: 2,
    title: "Tuần 2: Xây Dựng Kỷ Luật Thép",
    duration: "4 Giờ video + Coaching 1:1",
    lessons: ["Nghệ thuật quản lý thời gian", "Xây dựng thói quen nguyên tử", "Loại bỏ sự trì hoãn"]
  },
  {
    id: 3,
    title: "Tuần 3: Kỹ Năng Lãnh Đạo",
    duration: "5 Giờ video + Thảo luận nhóm",
    lessons: ["Giao tiếp hiệu quả", "Nghệ thuật đắc nhân tâm", "Lãnh đạo đội nhóm"]
  },
  {
    id: 4,
    title: "Tuần 4: Kế Hoạch Hành Động",
    duration: "3 Giờ video + Tốt nghiệp",
    lessons: ["Lập kế hoạch 90 ngày", "Chiến lược tài chính cá nhân", "Tổng kết và cam kết"]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Minh Hạnh",
    role: "Giám đốc Marketing",
    content: "Khóa học đã thay đổi hoàn toàn cách tôi nhìn nhận về sự nghiệp. Tôi đã được thăng chức chỉ sau 2 tháng áp dụng kiến thức.",
    avatar: "https://picsum.photos/100/100?random=1"
  },
  {
    id: 2,
    name: "Tuấn Anh",
    role: "Startup Founder",
    content: "Sự nhiệt huyết của Coach và cộng đồng học viên là điều tuyệt vời nhất. Không chỉ là kiến thức, đó là năng lượng.",
    avatar: "https://picsum.photos/100/100?random=2"
  },
  {
    id: 3,
    name: "Thu Trang",
    role: "Freelancer",
    content: "Tôi từng mất định hướng, nhưng lộ trình 4 tuần này đã giúp tôi tìm lại đam mê và xây dựng được kỷ luật cá nhân.",
    avatar: "https://picsum.photos/100/100?random=3"
  }
];

export const PRICING: PricingTier[] = [
  {
    id: 1,
    name: "Cơ Bản",
    price: "1.999.000đ",
    features: [
      "Truy cập trọn đời tài liệu",
      "20+ Video bài giảng",
      "Tham gia nhóm Facebook kín",
      "Hỗ trợ qua Email"
    ],
    buttonText: "Đăng Ký Cơ Bản",
    isPopular: false
  },
  {
    id: 2,
    name: "Chuyên Sâu (VIP)",
    price: "4.999.000đ",
    features: [
      "Tất cả quyền lợi gói Cơ Bản",
      "4 buổi Coaching 1:1 trực tiếp",
      "Sửa bài tập chi tiết hàng tuần",
      "Bộ công cụ (Template) độc quyền",
      "Ưu tiên hỗ trợ 24/7"
    ],
    buttonText: "Đăng Ký VIP",
    isPopular: true
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 1,
    question: "Khóa học này dành cho ai?",
    answer: "Khóa học phù hợp với những người đang cảm thấy mất phương hướng, muốn phát triển sự nghiệp, hoặc các chủ doanh nghiệp muốn nâng cao kỹ năng lãnh đạo bản thân."
  },
  {
    id: 2,
    question: "Hình thức học như thế nào?",
    answer: "Bạn sẽ học qua các video bài giảng được quay sẵn trên nền tảng website, kết hợp với các buổi Zoom trực tuyến hàng tuần và bài tập thực hành."
  },
  {
    id: 3,
    question: "Tôi có được hoàn tiền không?",
    answer: "Chúng tôi cam kết hoàn tiền 100% trong vòng 7 ngày đầu tiên nếu bạn cảm thấy khóa học không phù hợp mà không cần lý do."
  },
  {
    id: 4,
    question: "Tôi có thể xem lại bài giảng không?",
    answer: "Có, bạn được quyền truy cập trọn đời vào kho bài giảng và các tài liệu cập nhật sau này."
  }
];