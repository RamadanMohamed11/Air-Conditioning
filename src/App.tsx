import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  Clock, 
  Shield, 
  Star, 
  Wrench, 
  Thermometer, 
  Wind, 
  Settings, 
  CheckCircle, 
  MapPin, 
  Mail, 
  Award,
  Users,
  Calendar,
  Menu,
  X,
  Navigation,
  ArrowRight,
  Zap,
  Home,
  Building,
  Snowflake,
  Sun,
  PhoneCall,
  MessageCircle,
  ChevronDown,
  Play,
  DollarSign,
  Gauge,
  Droplets,
  Fan,
  AlertTriangle,
  Truck,
  UserCheck,
  CreditCard,
  Quote,
  ChevronRight,
  Filter,
  Lightbulb,
  Hammer
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeService, setActiveService] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const services = [
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "إصلاح المكيفات",
      description: "إصلاح سريع وموثوق لجميع أنواع المكيفات مع ضمان شامل على الخدمة والقطع",
      features: ["تشخيص مجاني", "إصلاح في نفس اليوم", "ضمان 6 أشهر", "جميع الماركات"],
      price: "ابتداءً من 120 ريال",
      image: "https://images.pexels.com/photos/8413299/pexels-photo-8413299.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "تركيب المكيفات",
      description: "تركيب احترافي لأنظمة التكييف الجديدة مع ضمان التشغيل الأمثل وكفاءة الطاقة",
      features: ["تركيب احترافي", "اختبار الأداء", "ضمان التركيب", "استشارة مجانية"],
      price: "ابتداءً من 300 ريال",
      image: "https://images.pexels.com/photos/5691627/pexels-photo-5691627.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
    },
    {
      icon: <Filter className="w-8 h-8" />,
      title: "صيانة وتنظيف",
      description: "خدمات صيانة دورية وتنظيف شامل لضمان الأداء الأمثل وإطالة عمر المكيف",
      features: ["تنظيف شامل", "تغيير الفلاتر", "فحص الغاز", "صيانة وقائية"],
      price: "ابتداءً من 80 ريال",
      image: "https://images.pexels.com/photos/4792509/pexels-photo-4792509.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "خدمة الطوارئ",
      description: "خدمة طوارئ على مدار الساعة للحالات العاجلة مع استجابة سريعة خلال 30 دقيقة",
      features: ["متاح 24/7", "استجابة سريعة", "فنيون مدربون", "معدات متطورة"],
      price: "ابتداءً من 150 ريال",
      image: "https://images.pexels.com/photos/5691658/pexels-photo-5691658.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
    }
  ];

  const whyChooseUs = [
    {
      icon: <UserCheck className="w-12 h-12" />,
      title: "فنيون معتمدون",
      description: "فريق من الفنيين المعتمدين والمدربين على أحدث التقنيات"
    },
    {
      icon: <Clock className="w-12 h-12" />,
      title: "خدمة سريعة",
      description: "وصول خلال 30 دقيقة في جميع أنحاء الرياض"
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: "ضمان شامل",
      description: "ضمان على جميع الخدمات والقطع المستخدمة"
    },
    {
      icon: <CreditCard className="w-12 h-12" />,
      title: "أسعار منافسة",
      description: "أفضل الأسعار في السوق مع شفافية كاملة"
    }
  ];

  const testimonials = [
    {
      name: "أحمد المالكي",
      location: "حي العليا",
      rating: 5,
      text: "خدمة ممتازة وسريعة! أصلحوا المكيف في منتصف الصيف خلال ساعة واحدة. فريق محترف جداً وأسعار معقولة.",
      date: "منذ أسبوع",
      avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "فاطمة العتيبي",
      location: "حي الملز",
      rating: 5,
      text: "أستخدم خدماتهم منذ سنتين. الصيانة الدورية ممتازة والفنيون مهذبون ومحترفون. أنصح بهم بشدة.",
      date: "منذ أسبوعين",
      avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "محمد الشهري",
      location: "حي النخيل",
      rating: 5,
      text: "خدمة طوارئ رائعة! اتصلت بهم في منتصف الليل وكانوا عندي خلال 20 دقيقة. حلوا المشكلة بسرعة.",
      date: "منذ 3 أيام",
      avatar: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face"
    }
  ];

  const serviceAreas = [
    "العليا", "الملز", "النخيل", "الروضة", "السليمانية", 
    "المروج", "الياسمين", "الفلاح", "الورود", "الربوة",
    "النرجس", "الغدير", "المحمدية", "الرحمانية"
  ];

  const stats = [
    { number: "8000+", label: "عميل سعيد", icon: <Users className="w-8 h-8" /> },
    { number: "15+", label: "سنة خبرة", icon: <Calendar className="w-8 h-8" /> },
    { number: "24/7", label: "خدمة طوارئ", icon: <Clock className="w-8 h-8" /> },
    { number: "99%", label: "نسبة الرضا", icon: <Award className="w-8 h-8" /> }
  ];

  const callNow = () => {
    window.location.href = 'tel:+966800266504';
  };

  const whatsappContact = () => {
    window.open('https://wa.me/966555123456?text=مرحباً، أحتاج خدمة إصلاح مكيف', '_blank');
  };

  return (
    <div className="min-h-screen bg-white" dir="rtl">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-lg shadow-xl py-2' 
          : 'bg-transparent py-4'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center group cursor-pointer">
              <div className="relative">
                <Snowflake className="w-12 h-12 text-blue-600 ml-3 animate-spin-slow group-hover:text-blue-700 transition-colors duration-300" />
                <div className="absolute inset-0 bg-blue-400 rounded-full opacity-20 animate-ping"></div>
              </div>
              <div>
                <span className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  بريز كول
                </span>
                <p className="text-sm text-gray-600 font-medium">خبراء التكييف في الرياض</p>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-reverse space-x-8">
              <a href="#home" className="nav-link">الرئيسية</a>
              <a href="#services" className="nav-link">خدماتنا</a>
              <a href="#about" className="nav-link">من نحن</a>
              <a href="#testimonials" className="nav-link">آراء العملاء</a>
              <a href="#contact" className="nav-link">اتصل بنا</a>
            </div>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-reverse space-x-4">
              <button 
                onClick={whatsappContact}
                className="btn-whatsapp flex items-center"
              >
                <MessageCircle className="w-5 h-5 ml-2" />
                واتساب
              </button>
              <button 
                onClick={callNow}
                className="btn-call flex items-center animate-pulse-glow"
              >
                <Phone className="w-5 h-5 ml-2" />
                800-266-504
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`p-2 rounded-lg transition-colors duration-300 ${
                  isScrolled ? 'hover:bg-gray-100' : 'hover:bg-white/10'
                }`}
              >
                {isMenuOpen ? 
                  <X className={`w-6 h-6 ${isScrolled ? 'text-gray-700' : 'text-white'}`} /> : 
                  <Menu className={`w-6 h-6 ${isScrolled ? 'text-gray-700' : 'text-white'}`} />
                }
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white/95 backdrop-blur-lg border-t border-gray-200 animate-slideDown shadow-xl">
            <div className="px-4 py-6 space-y-4">
              <a href="#home" className="mobile-nav-link">الرئيسية</a>
              <a href="#services" className="mobile-nav-link">خدماتنا</a>
              <a href="#about" className="mobile-nav-link">من نحن</a>
              <a href="#testimonials" className="mobile-nav-link">آراء العملاء</a>
              <a href="#contact" className="mobile-nav-link">اتصل بنا</a>
              <div className="flex space-x-reverse space-x-4 pt-4 border-t border-gray-200">
                <button onClick={whatsappContact} className="btn-whatsapp flex-1 justify-center">
                  <MessageCircle className="w-4 h-4 ml-2" />
                  واتساب
                </button>
                <button onClick={callNow} className="btn-call flex-1 justify-center">
                  <Phone className="w-4 h-4 ml-2" />
                  اتصل الآن
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center animate-ken-burns"
            style={{
              backgroundImage: 'url("https://images.pexels.com/photos/5691627/pexels-photo-5691627.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop")'
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/95 via-blue-800/90 to-purple-900/95"></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-20 w-32 h-32 bg-blue-400/10 rounded-full animate-float"></div>
          <div className="absolute top-40 right-32 w-24 h-24 bg-purple-400/10 rounded-full animate-float-delayed"></div>
          <div className="absolute bottom-32 left-40 w-40 h-40 bg-cyan-400/10 rounded-full animate-float-slow"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="animate-fadeInUp">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="block animate-slideInRight">أفضل شركة</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400 animate-slideInLeft animation-delay-300">
                صيانة مكيفات
              </span>
              <span className="block text-4xl md:text-5xl text-blue-200 animate-slideInRight animation-delay-600">
                في الرياض
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed animate-fadeInUp animation-delay-900 text-gray-100">
              خدمة احترافية على مدار الساعة • فنيون معتمدون • ضمان شامل
              <br />
              <span className="text-orange-300 font-semibold">وصول خلال 30 دقيقة في جميع أنحاء الرياض</span>
            </p>

            {/* Hero CTA */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12 animate-fadeInUp animation-delay-1200">
              <button 
                onClick={callNow}
                className="hero-btn-primary group"
              >
                <PhoneCall className="w-7 h-7 ml-3 group-hover:animate-bounce" />
                <div className="text-right">
                  <div className="text-xl font-bold">اتصل الآن</div>
                  <div className="text-sm opacity-90">800-266-504</div>
                </div>
              </button>
              
              <button 
                onClick={whatsappContact}
                className="hero-btn-secondary group"
              >
                <MessageCircle className="w-7 h-7 ml-3 group-hover:scale-110 transition-transform duration-300" />
                <div className="text-right">
                  <div className="text-xl font-bold">واتساب فوري</div>
                  <div className="text-sm opacity-90">رد خلال دقائق</div>
                </div>
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto animate-fadeInUp animation-delay-1500">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className="stat-card group"
                  style={{ animationDelay: `${1500 + index * 200}ms` }}
                >
                  <div className="text-orange-400 mb-3 group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-4xl font-bold mb-2 animate-countUp">{stat.number}</div>
                  <div className="text-sm opacity-90 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-white/70" />
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16 animate-fadeInUp">
            <div className="inline-flex items-center bg-blue-100 rounded-full px-6 py-2 mb-6">
              <Settings className="w-5 h-5 text-blue-600 ml-2" />
              <span className="text-blue-800 font-semibold">خدماتنا المتخصصة</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              حلول شاملة لجميع احتياجات التكييف
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              نقدم خدمات متكاملة لصيانة وإصلاح وتركيب أنظمة التكييف بأعلى معايير الجودة
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {services.map((service, index) => (
              <div 
                key={index}
                className="service-card-modern group"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="relative overflow-hidden rounded-2xl mb-6">
                  <img 
                    src={service.image}
                    alt={service.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-3 text-blue-600 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <div className="absolute bottom-4 right-4 bg-orange-500 text-white px-4 py-2 rounded-full font-bold text-sm">
                    {service.price}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-gray-700">
                        <CheckCircle className="w-4 h-4 text-green-500 ml-2 flex-shrink-0" />
                        <span className="text-sm font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <button className="btn-service w-full group-hover:bg-blue-600 group-hover:text-white">
                    احجز الخدمة
                    <ArrowRight className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Why Choose Us */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl animate-fadeInUp animation-delay-800">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                لماذا تختار بريز كول؟
              </h3>
              <p className="text-lg text-gray-600">
                نحن الخيار الأول لآلاف العملاء في الرياض
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {whyChooseUs.map((item, index) => (
                <div 
                  key={index}
                  className="text-center group animate-fadeInUp"
                  style={{ animationDelay: `${1000 + index * 200}ms` }}
                >
                  <div className="bg-gradient-to-br from-blue-500 to-blue-700 text-white p-6 rounded-2xl mb-4 mx-auto w-fit group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    {item.icon}
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative animate-slideLeft">
              <div className="relative">
                <img 
                  src="https://images.pexels.com/photos/8413299/pexels-photo-8413299.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                  alt="فني تكييف محترف في الرياض"
                  className="rounded-3xl shadow-2xl w-full h-96 object-cover hover:shadow-3xl transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent rounded-3xl"></div>
              </div>
              
              {/* Floating Badges */}
              <div className="absolute -top-6 -right-6 bg-gradient-to-r from-green-500 to-green-600 text-white p-4 rounded-2xl shadow-xl animate-float">
                <div className="text-center">
                  <Award className="w-8 h-8 mx-auto mb-2" />
                  <div className="text-lg font-bold">معتمدون</div>
                  <div className="text-xs">رسمياً</div>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-orange-500 to-red-500 text-white p-4 rounded-2xl shadow-xl animate-float-delayed">
                <div className="text-center">
                  <Clock className="w-8 h-8 mx-auto mb-2" />
                  <div className="text-lg font-bold">24/7</div>
                  <div className="text-xs">خدمة طوارئ</div>
                </div>
              </div>
            </div>
            
            <div className="text-right animate-slideRight">
              <div className="inline-flex items-center bg-blue-100 rounded-full px-6 py-2 mb-6">
                <Building className="w-5 h-5 text-blue-600 ml-2" />
                <span className="text-blue-800 font-semibold">من نحن</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                رواد التكييف في الرياض منذ 2008
              </h2>
              
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed mb-8">
                <p className="animate-fadeInUp">
                  نحن في <strong className="text-blue-600">بريز كول</strong> نفخر بخدمة مجتمع الرياض لأكثر من 15 عاماً، 
                  حيث نقدم خدمات التكييف والتبريد الأكثر موثوقية ومهنية في المملكة.
                </p>
                
                <p className="animate-fadeInUp animation-delay-300">
                  فريقنا من الفنيين المعتمدين والمدربين على أعلى المستويات يضمن لك خدمة استثنائية 
                  تفوق توقعاتك في كل مرة. نحن نفهم أهمية الراحة في منزلك ومكتبك.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="about-stat-modern">
                  <Home className="w-10 h-10 text-blue-600 mb-3" />
                  <div className="text-3xl font-bold text-gray-900 mb-1">8000+</div>
                  <div className="text-gray-600">منزل ومكتب</div>
                </div>
                <div className="about-stat-modern">
                  <Building className="w-10 h-10 text-green-600 mb-3" />
                  <div className="text-3xl font-bold text-gray-900 mb-1">500+</div>
                  <div className="text-gray-600">مشروع تجاري</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="btn-primary">
                  اعرف المزيد عن قصتنا
                  <ArrowRight className="w-5 h-5 mr-2" />
                </button>
                <button onClick={callNow} className="btn-outline">
                  <Phone className="w-5 h-5 ml-2" />
                  اتصل بنا الآن
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16 animate-fadeInUp">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
              <Quote className="w-5 h-5 text-orange-300 ml-2" />
              <span className="text-orange-300 font-semibold">آراء عملائنا</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              ماذا يقول عملاؤنا عنا؟
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              أكثر من 8000 عميل سعيد يثق في خدماتنا المتميزة
            </p>
          </div>

          {/* Featured Testimonial */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="testimonial-featured animate-fadeInUp">
              <div className="flex items-center mb-6">
                <img 
                  src={testimonials[currentTestimonial].avatar}
                  alt={testimonials[currentTestimonial].name}
                  className="w-20 h-20 rounded-full object-cover ml-6 ring-4 ring-white/30"
                />
                <div className="text-right">
                  <div className="font-bold text-2xl">{testimonials[currentTestimonial].name}</div>
                  <div className="text-blue-200 flex items-center justify-end mb-2">
                    <span>{testimonials[currentTestimonial].location}</span>
                    <MapPin className="w-4 h-4 mr-2" />
                  </div>
                  <div className="flex items-center justify-end">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              
              <blockquote className="text-2xl text-blue-100 mb-4 leading-relaxed text-right font-medium">
                "{testimonials[currentTestimonial].text}"
              </blockquote>
              
              <div className="text-sm text-blue-300 text-right">
                {testimonials[currentTestimonial].date}
              </div>
            </div>
          </div>

          {/* Testimonial Navigation */}
          <div className="flex justify-center space-x-reverse space-x-4 mb-12">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial 
                    ? 'bg-orange-400 scale-125' 
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>

          {/* All Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="testimonial-card group"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover ml-4 ring-2 ring-white/20"
                  />
                  <div className="text-right">
                    <div className="font-bold">{testimonial.name}</div>
                    <div className="text-blue-200 text-sm">{testimonial.location}</div>
                  </div>
                </div>
                
                <div className="flex items-center mb-3 justify-end">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-blue-100 text-sm leading-relaxed text-right">
                  "{testimonial.text}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fadeInUp">
            <div className="inline-flex items-center bg-blue-100 rounded-full px-6 py-2 mb-6">
              <MapPin className="w-5 h-5 text-blue-600 ml-2" />
              <span className="text-blue-800 font-semibold">مناطق الخدمة</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              نخدم جميع أحياء الرياض
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              خدمة سريعة وموثوقة في جميع أنحاء العاصمة مع وصول خلال 30 دقيقة
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
            {serviceAreas.map((area, index) => (
              <div 
                key={index}
                className="area-card-modern group"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <MapPin className="w-5 h-5 text-blue-600 mb-2 group-hover:text-blue-700 transition-colors duration-300" />
                <span className="font-semibold text-gray-900 group-hover:text-blue-700 transition-colors duration-300">
                  {area}
                </span>
              </div>
            ))}
          </div>

          <div className="text-center animate-fadeInUp animation-delay-800">
            <div className="bg-white rounded-2xl p-8 shadow-xl inline-block">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                لا تجد منطقتك؟
              </h3>
              <p className="text-gray-600 mb-6">
                نخدم جميع أنحاء الرياض والمناطق المجاورة
              </p>
              <button 
                onClick={callNow}
                className="btn-primary"
              >
                <Phone className="w-5 h-5 ml-2" />
                اتصل للاستفسار
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fadeInUp">
            <div className="inline-flex items-center bg-blue-100 rounded-full px-6 py-2 mb-6">
              <Phone className="w-5 h-5 text-blue-600 ml-2" />
              <span className="text-blue-800 font-semibold">تواصل معنا</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              احصل على خدمة فورية الآن
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              فريقنا مستعد لخدمتك على مدار الساعة طوال أيام الأسبوع
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div className="text-right animate-slideRight">
              <div className="space-y-8">
                <div className="contact-item-modern group">
                  <div className="contact-icon-modern bg-gradient-to-r from-green-500 to-green-700">
                    <Phone className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="contact-title-modern">اتصل بنا فوراً</h3>
                    <p className="contact-text-modern mb-2">خط الطوارئ: 800-266-504</p>
                    <p className="contact-text-modern mb-3">المكتب الرئيسي: 011-555-0123</p>
                    <button 
                      onClick={callNow}
                      className="btn-contact-action"
                    >
                      <PhoneCall className="w-4 h-4 mr-2" />
                      اتصل الآن
                    </button>
                  </div>
                </div>

                <div className="contact-item-modern group">
                  <div className="contact-icon-modern bg-gradient-to-r from-green-500 to-green-700">
                    <MessageCircle className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="contact-title-modern">واتساب</h3>
                    <p className="contact-text-modern mb-3">رد فوري على مدار الساعة</p>
                    <button 
                      onClick={whatsappContact}
                      className="btn-contact-action"
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      راسلنا على واتساب
                    </button>
                  </div>
                </div>

                <div className="contact-item-modern group">
                  <div className="contact-icon-modern bg-gradient-to-r from-blue-500 to-blue-700">
                    <Mail className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="contact-title-modern">البريد الإلكتروني</h3>
                    <p className="contact-text-modern">info@breezcool-riyadh.sa</p>
                  </div>
                </div>

                <div className="contact-item-modern group">
                  <div className="contact-icon-modern bg-gradient-to-r from-purple-500 to-purple-700">
                    <MapPin className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="contact-title-modern">موقعنا</h3>
                    <p className="contact-text-modern mb-3">الرياض، المملكة العربية السعودية</p>
                    <button className="btn-contact-action">
                      <Navigation className="w-4 h-4 mr-2" />
                      عرض على الخريطة
                    </button>
                  </div>
                </div>
              </div>

              {/* Emergency Banner */}
              <div className="emergency-banner-modern animate-fadeInUp animation-delay-600">
                <div className="flex items-center justify-between">
                  <div className="text-right">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      خدمة طوارئ 24/7
                    </h3>
                    <p className="text-orange-100 text-lg">
                      وصول خلال 30 دقيقة • جميع أحياء الرياض
                    </p>
                  </div>
                  <div className="bg-white/20 rounded-full p-4">
                    <Zap className="w-12 h-12 text-yellow-300 animate-pulse" />
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form-modern animate-slideLeft">
              <h3 className="text-3xl font-bold text-gray-900 mb-8 text-right">
                احجز خدمتك الآن
              </h3>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="form-group-modern">
                    <label className="form-label-modern">الاسم الأول</label>
                    <input type="text" className="form-input-modern" placeholder="اسمك الأول" />
                  </div>
                  <div className="form-group-modern">
                    <label className="form-label-modern">اسم العائلة</label>
                    <input type="text" className="form-input-modern" placeholder="اسم عائلتك" />
                  </div>
                </div>

                <div className="form-group-modern">
                  <label className="form-label-modern">رقم الهاتف</label>
                  <input type="tel" className="form-input-modern" placeholder="05xxxxxxxx" />
                </div>

                <div className="form-group-modern">
                  <label className="form-label-modern">نوع الخدمة</label>
                  <select className="form-input-modern">
                    <option>اختر نوع الخدمة</option>
                    <option>إصلاح طوارئ</option>
                    <option>تركيب مكيف جديد</option>
                    <option>صيانة دورية</option>
                    <option>تشخيص وفحص</option>
                  </select>
                </div>

                <div className="form-group-modern">
                  <label className="form-label-modern">تفاصيل المشكلة</label>
                  <textarea 
                    rows={4} 
                    className="form-input-modern" 
                    placeholder="صف مشكلة المكيف أو نوع الخدمة المطلوبة..."
                  ></textarea>
                </div>

                <button type="submit" className="btn-form-submit">
                  احجز الخدمة الآن
                  <ArrowRight className="w-5 h-5 mr-2" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-right">
            <div className="animate-slideUp">
              <div className="flex items-center mb-6 justify-end">
                <div>
                  <span className={`text-3xl font-bold transition-colors duration-300 ${
                    isScrolled 
                      ? 'bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent' 
                      : 'text-white'
                  }`}>
                    بريز كول
                  </span>
                  <p className={`text-sm font-medium transition-colors duration-300 ${
                    isScrolled ? 'text-gray-600' : 'text-white/80'
                  }`}>خبراء التكييف في الرياض</p>
                </div>
                <Snowflake className="w-12 h-12 text-blue-400 mr-3 animate-spin-slow" />
              </div>
              <p className="text-gray-300 leading-relaxed mb-6">
                الشركة الرائدة في خدمات التكييف والتبريد في الرياض منذ 2008. 
                نقدم خدمات احترافية على مدار الساعة بأعلى معايير الجودة.
              </p>
              <div className="flex space-x-reverse space-x-4">
                <button className="social-btn-modern">
                  <MessageCircle className="w-5 h-5" />
                </button>
                <button className="social-btn-modern">
                  <Phone className="w-5 h-5" />
                </button>
                <button className="social-btn-modern">
                  <Mail className="w-5 h-5" />
                </button>
              </div>
            </div>
            
            {/* Services */}
            <div className="animate-slideUp animation-delay-200">
              <h4 className="text-xl font-bold mb-6 text-blue-300">خدماتنا</h4>
              <ul className="space-y-3 text-gray-300">
                <li className="footer-link-modern">إصلاح المكيفات</li>
                <li className="footer-link-modern">تركيب أنظمة التبريد</li>
                <li className="footer-link-modern">صيانة دورية</li>
                <li className="footer-link-modern">خدمة طوارئ 24/7</li>
                <li className="footer-link-modern">تنظيف المكيفات</li>
              </ul>
            </div>
            
            {/* Service Areas */}
            <div className="animate-slideUp animation-delay-400">
              <h4 className="text-xl font-bold mb-6 text-blue-300">المناطق المخدومة</h4>
              <ul className="space-y-3 text-gray-300">
                <li className="footer-link-modern">العليا</li>
                <li className="footer-link-modern">الملز</li>
                <li className="footer-link-modern">النخيل</li>
                <li className="footer-link-modern">الروضة</li>
                <li className="footer-link-modern">جميع أحياء الرياض</li>
              </ul>
            </div>
            
            {/* Contact */}
            <div className="animate-slideUp animation-delay-600">
              <h4 className="text-xl font-bold mb-6 text-blue-300">تواصل معنا</h4>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-center justify-end">
                  <span>800-266-504</span>
                  <Phone className="w-4 h-4 mr-2 text-green-400" />
                </li>
                <li className="flex items-center justify-end">
                  <span>info@breezcool-riyadh.sa</span>
                  <Mail className="w-4 h-4 mr-2 text-blue-400" />
                </li>
                <li className="flex items-center justify-end">
                  <span>الرياض، المملكة العربية السعودية</span>
                  <MapPin className="w-4 h-4 mr-2 text-orange-400" />
                </li>
              </ul>
              
              <div className="mt-6 p-4 bg-gradient-to-r from-orange-600/20 to-red-600/20 rounded-lg border border-orange-500/30">
                <div className="flex items-center justify-end text-orange-300">
                  <span className="font-semibold">خدمة طوارئ 24/7</span>
                  <Clock className="w-4 h-4 mr-2" />
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-8 mt-12 text-center">
            <p className="text-gray-300 text-sm">
              مرخص من وزارة التجارة • مؤمن بالكامل • معتمد من الهيئة السعودية للمواصفات والمقاييس
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;