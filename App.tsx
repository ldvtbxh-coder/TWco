import React, { useState, useEffect } from 'react';
import { 
  TrendingUp, 
  Users, 
  Award, 
  Clock, 
  Menu, 
  X, 
  CheckCircle, 
  Star,
  PlayCircle,
  ArrowRight,
  Mail,
  Facebook,
  Instagram,
  Linkedin
} from 'lucide-react';
import { BENEFITS, CURRICULUM, TESTIMONIALS, PRICING, FAQS } from './constants';
import Button from './components/Button';
import Accordion from './components/Accordion';

const App: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const IconMap: Record<string, React.ReactNode> = {
    TrendingUp: <TrendingUp className="w-8 h-8 text-white" />,
    Users: <Users className="w-8 h-8 text-white" />,
    Award: <Award className="w-8 h-8 text-white" />,
    Clock: <Clock className="w-8 h-8 text-white" />,
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center cursor-pointer" onClick={() => window.scrollTo(0,0)}>
              <div className="w-10 h-10 rounded-lg bg-indigo-600 flex items-center justify-center mr-2">
                <TrendingUp className="text-white w-6 h-6" />
              </div>
              <span className={`text-2xl font-bold ${scrolled ? 'text-gray-900' : 'text-gray-900 lg:text-white'}`}>
                CoachPro
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {['Lợi Ích', 'Chương Trình', 'Cảm Nhận', 'Học Phí'].map((item, index) => {
                const ids = ['benefits', 'curriculum', 'testimonials', 'pricing'];
                return (
                  <button 
                    key={item}
                    onClick={() => scrollToSection(ids[index])}
                    className={`font-medium hover:text-indigo-500 transition-colors ${scrolled ? 'text-gray-600' : 'text-white/90 hover:text-white'}`}
                  >
                    {item}
                  </button>
                );
              })}
              <Button 
                variant={scrolled ? 'primary' : 'white'} 
                size="sm"
                onClick={() => scrollToSection('pricing')}
              >
                Đăng Ký Ngay
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`p-2 rounded-md ${scrolled ? 'text-gray-900' : 'text-gray-900 lg:text-white'}`}
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Content */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white absolute top-full left-0 w-full shadow-lg py-4 px-4 flex flex-col space-y-4">
             {['Lợi Ích', 'Chương Trình', 'Cảm Nhận', 'Học Phí'].map((item, index) => {
                const ids = ['benefits', 'curriculum', 'testimonials', 'pricing'];
                return (
                  <button 
                    key={item}
                    onClick={() => scrollToSection(ids[index])}
                    className="text-left font-medium text-gray-700 py-2 border-b border-gray-100"
                  >
                    {item}
                  </button>
                );
              })}
              <Button className="w-full mt-2" onClick={() => scrollToSection('pricing')}>Đăng Ký Ngay</Button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/1920/1080?random=10" 
            alt="Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/90 to-indigo-800/75 mix-blend-multiply"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block px-4 py-1.5 rounded-full bg-indigo-500/30 border border-indigo-400/30 backdrop-blur-sm text-indigo-100 text-sm font-semibold mb-6">
            🚀 Khai giảng khóa mới: 15/10/2023
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white tracking-tight leading-tight mb-6">
            Đánh Thức Tiềm Năng <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
              Dẫn Lối Thành Công
            </span>
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-indigo-100 mb-10">
            Hành trình 30 ngày chuyển hóa tư duy, xây dựng kỹ năng lãnh đạo và kiến tạo cuộc đời bạn mơ ước cùng chuyên gia hàng đầu.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" onClick={() => scrollToSection('pricing')}>
              Tham Gia Ngay <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-indigo-900">
              <PlayCircle className="mr-2 w-5 h-5" /> Xem Video Giới Thiệu
            </Button>
          </div>
          
          {/* Social Proof */}
          <div className="mt-12 flex items-center justify-center space-x-2 text-white/80 text-sm">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <img key={i} className="inline-block h-8 w-8 rounded-full ring-2 ring-indigo-900" src={`https://picsum.photos/50/50?random=${20+i}`} alt=""/>
              ))}
            </div>
            <span className="pl-3">Hơn <strong>5,000+</strong> học viên đã thay đổi cuộc sống</span>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-indigo-600 font-semibold tracking-wide uppercase text-sm mb-2">Tại sao chọn chúng tôi?</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900">Giá trị bạn sẽ nhận được</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {BENEFITS.map((benefit) => (
              <div key={benefit.id} className="bg-gray-50 rounded-2xl p-8 transition-transform hover:-translate-y-2 duration-300">
                <div className="w-14 h-14 bg-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-500/20 mb-6">
                  {IconMap[benefit.iconName]}
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h4>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Coach Section */}
      <section className="py-20 bg-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="w-full lg:w-1/2 relative">
              <div className="absolute top-4 left-4 w-full h-full bg-indigo-200 rounded-3xl transform translate-x-4 translate-y-4"></div>
              <img 
                src="https://picsum.photos/600/700?random=15" 
                alt="Coach Portrait" 
                className="relative rounded-3xl shadow-2xl w-full object-cover z-10"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl z-20 hidden md:block">
                <div className="flex items-center gap-4">
                   <div className="text-4xl font-bold text-indigo-600">10+</div>
                   <div className="text-gray-600 leading-tight">Năm kinh nghiệm<br/>đào tạo</div>
                </div>
              </div>
            </div>
            
            <div className="w-full lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Gặp Gỡ Mentor Của Bạn <br/>
                <span className="text-indigo-600">Nguyễn Văn A</span>
              </h2>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                Là một chuyên gia khai vấn (Life Coach) được chứng nhận quốc tế ICF, tôi đã dành hơn 10 năm để nghiên cứu về tâm lý học hành vi và phát triển con người.
              </p>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Sứ mệnh của tôi là giúp bạn tìm ra phiên bản tốt nhất của chính mình, vượt qua nỗi sợ hãi và xây dựng một cuộc sống ý nghĩa, hạnh phúc.
              </p>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-emerald-500 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Tác giả 2 cuốn sách bán chạy về phát triển bản thân.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-emerald-500 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Diễn giả tại TEDx và nhiều hội thảo doanh nghiệp lớn.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-emerald-500 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Đã đào tạo trực tiếp cho 500+ CEO và quản lý cấp cao.</span>
                </li>
              </ul>
              
              <Button onClick={() => scrollToSection('pricing')}>Đồng Hành Cùng Tôi</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section id="curriculum" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Lộ Trình Khóa Học</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Chương trình được thiết kế khoa học trong 4 tuần để đảm bảo bạn tiếp thu và áp dụng kiến thức hiệu quả nhất.</p>
          </div>

          <div className="space-y-4">
            {CURRICULUM.map((module) => (
              <Accordion key={module.id} title={module.title}>
                <div className="space-y-4">
                  <div className="flex items-center text-sm text-indigo-600 font-semibold bg-indigo-50 w-fit px-3 py-1 rounded-full">
                    <Clock className="w-4 h-4 mr-2" /> {module.duration}
                  </div>
                  <ul className="space-y-3">
                    {module.lessons.map((lesson, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <PlayCircle className="w-5 h-5 text-gray-400 mr-3" />
                        {lesson}
                      </li>
                    ))}
                  </ul>
                </div>
              </Accordion>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Học Viên Nói Gì?</h2>
            <p className="text-gray-600">Câu chuyện thành công từ những người đã trải nghiệm.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((testimonial) => (
              <div key={testimonial.id} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <div className="flex space-x-1 text-yellow-400 mb-6">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                </div>
                <p className="text-gray-600 mb-8 leading-relaxed italic">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <img src={testimonial.avatar} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover mr-4" />
                  <div>
                    <h5 className="font-bold text-gray-900">{testimonial.name}</h5>
                    <span className="text-sm text-gray-500">{testimonial.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Đầu Tư Cho Tương Lai</h2>
            <p className="text-indigo-200 max-w-2xl mx-auto">Chọn gói phù hợp với mục tiêu và ngân sách của bạn.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {PRICING.map((tier) => (
              <div 
                key={tier.id} 
                className={`relative rounded-2xl p-8 ${
                  tier.isPopular 
                    ? 'bg-white text-gray-900 ring-4 ring-emerald-400 transform md:-translate-y-4' 
                    : 'bg-indigo-800 text-white border border-indigo-700'
                }`}
              >
                {tier.isPopular && (
                  <div className="absolute top-0 right-0 bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg uppercase tracking-wider">
                    Phổ biến nhất
                  </div>
                )}
                <h3 className={`text-2xl font-bold mb-2 ${tier.isPopular ? 'text-gray-900' : 'text-white'}`}>{tier.name}</h3>
                <div className="flex items-baseline mb-8">
                  <span className={`text-4xl font-extrabold ${tier.isPopular ? 'text-indigo-600' : 'text-white'}`}>{tier.price}</span>
                  <span className={`ml-2 text-sm ${tier.isPopular ? 'text-gray-500' : 'text-indigo-300'}`}>/khóa</span>
                </div>

                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle className={`w-5 h-5 mr-3 flex-shrink-0 ${tier.isPopular ? 'text-indigo-600' : 'text-emerald-400'}`} />
                      <span className={tier.isPopular ? 'text-gray-600' : 'text-indigo-100'}>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  variant={tier.isPopular ? 'primary' : 'outline'} 
                  className={`w-full ${!tier.isPopular && 'border-indigo-400 text-white hover:bg-indigo-700 hover:text-white'}`}
                >
                  {tier.buttonText}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Câu Hỏi Thường Gặp</h2>
          </div>
          {FAQS.map((faq) => (
            <Accordion key={faq.id} title={faq.question}>
              <p className="text-gray-600">{faq.answer}</p>
            </Accordion>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center mb-4">
                 <div className="w-8 h-8 rounded bg-indigo-600 flex items-center justify-center mr-2">
                  <TrendingUp className="text-white w-5 h-5" />
                </div>
                <span className="text-xl font-bold text-white">CoachPro</span>
              </div>
              <p className="text-gray-400 max-w-xs leading-relaxed">
                Nền tảng đào tạo kỹ năng sống và phát triển bản thân hàng đầu. Giúp bạn khai phá tiềm năng vô hạn.
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">Liên Kết</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">Về Chúng Tôi</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Khóa Học</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Liên Hệ</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">Kết Nối</h4>
              <div className="flex space-x-4 mb-4">
                <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-indigo-600 transition-colors"><Facebook size={20} /></a>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-pink-600 transition-colors"><Instagram size={20} /></a>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-colors"><Linkedin size={20} /></a>
              </div>
              <div className="flex items-center text-gray-400">
                <Mail size={16} className="mr-2" />
                contact@coachpro.com
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-sm text-center md:text-left flex flex-col md:flex-row justify-between items-center">
            <p>&copy; 2023 CoachPro. All rights reserved.</p>
            <div className="mt-4 md:mt-0 space-x-6">
              <a href="#" className="hover:text-white">Điều khoản</a>
              <a href="#" className="hover:text-white">Chính sách bảo mật</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;