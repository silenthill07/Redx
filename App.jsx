import React, { useState, useEffect } from 'react';
import { 
  Shield, 
  Cpu, 
  Code2, 
  ChevronRight, 
  Layers, 
  Target, 
  Zap,
  CheckCircle2,
  MousePointer2,
  Menu,
  X,
  Linkedin,
  Twitter,
  Mail,
  MapPin,
  Globe,
  ArrowUpRight
} from 'lucide-react';

/**
 * Red X - Official Identity Platform 2026
 * Location: Egypt
 * Philosophy: Minimalism with Depth
 */

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // التحكم في شفافية القائمة عند التمرير
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      title: "هندسة البرمجيات",
      desc: "بناء تطبيقات معقدة وقابلة للتوسع باستخدام أحدث الأطر البرمجية لعام 2026.",
      icon: <Code2 className="text-red-500" size={28} />
    },
    {
      title: "حلول البنية التحتية",
      desc: "تصميم وإدارة السحب الهجينة (Hybrid Cloud) بأعلى مستويات التوافر.",
      icon: <Layers className="text-red-500" size={28} />
    },
    {
      title: "الأمن السيبراني",
      desc: "تأمين الأصول الرقمية من خلال استراتيجيات Zero Trust وتشفير متقدم.",
      icon: <Shield className="text-red-500" size={28} />
    },
    {
      title: "ذكاء النظم",
      desc: "دمج حلول الذكاء الاصطناعي التوليدي في العمليات التشغيلية لزيادة الكفاءة.",
      icon: <Cpu className="text-red-500" size={28} />
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-red-500 selection:text-white" dir="rtl">
      
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-950/90 backdrop-blur-lg border-b border-white/5 py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center transform group-hover:rotate-12 transition-transform shadow-[0_0_20px_rgba(220,38,38,0.3)]">
              <span className="text-2xl font-black text-white italic">X</span>
            </div>
            <span className="text-xl font-bold tracking-tighter">RED <span className="text-red-600">X</span></span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#about" className="text-slate-400 hover:text-red-500 transition-colors">من نحن</a>
            <a href="#services" className="text-slate-400 hover:text-red-500 transition-colors">خدماتنا</a>
            <a href="#vision" className="text-slate-400 hover:text-red-500 transition-colors">رؤيتنا</a>
            <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-xl transition-all shadow-lg shadow-red-600/20 active:scale-95 font-bold">
              تواصل معنا
            </button>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-slate-900 border-b border-white/10 p-6 flex flex-col gap-4 animate-in slide-in-from-top duration-300">
            <a href="#about" onClick={() => setIsMenuOpen(false)}>من نحن</a>
            <a href="#services" onClick={() => setIsMenuOpen(false)}>خدماتنا</a>
            <a href="#vision" onClick={() => setIsMenuOpen(false)}>رؤيتنا</a>
            <button className="bg-red-600 text-white py-3 rounded-xl font-bold">تواصل معنا</button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 px-6 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[120px] -z-10 animate-pulse"></div>
        <div className="absolute bottom-1/4 left-0 w-[300px] h-[300px] bg-blue-600/5 rounded-full blur-[100px] -z-10"></div>
        
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-600/10 border border-red-600/20 text-red-500 text-xs font-bold tracking-widest uppercase animate-bounce-slow">
              <Zap size={14} fill="currentColor" /> حلول تقنية من قلب مصر
            </div>
            <h1 className="text-6xl md:text-8xl font-black tracking-tight leading-[0.9]">
              نحن <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-red-500 to-orange-500 uppercase">Red X</span>
            </h1>
            <p className="text-xl text-slate-400 max-w-lg leading-relaxed border-r-4 border-red-600 pr-6">
              شريكك الاستراتيجي في صياغة الحلول الرقمية التي تجمع بين الأداء المذهل والبساطة المتناهية. انطلقنا من جمهورية مصر العربية لنصنع تجارب للمستقبل.
            </p>
            <div className="flex gap-4">
              <button className="p-4 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all group">
                <Linkedin size={20} className="text-slate-400 group-hover:text-blue-400" />
              </button>
              <button className="p-4 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all group">
                <Twitter size={20} className="text-slate-400 group-hover:text-sky-400" />
              </button>
              <button className="p-4 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all group">
                <Mail size={20} className="text-slate-400 group-hover:text-red-400" />
              </button>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative hidden md:block">
             <div className="w-full aspect-square bg-gradient-to-br from-red-600/20 to-transparent rounded-[4rem] border border-white/10 flex items-center justify-center relative group overflow-hidden">
                <span className="text-[18rem] font-black text-white/5 group-hover:text-red-600/10 transition-all duration-700 select-none">X</span>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 bg-red-600 rounded-3xl rotate-12 flex items-center justify-center shadow-[0_0_60px_rgba(220,38,38,0.5)] group-hover:rotate-0 transition-transform duration-500">
                   <Code2 size={90} className="text-white -rotate-12 group-hover:rotate-0 transition-transform duration-500" />
                </div>
                {/* Decorative floating icons */}
                <div className="absolute top-10 left-10 animate-bounce transition-all">
                  <Shield className="text-red-500/40" size={32} />
                </div>
                <div className="absolute bottom-10 right-10 animate-pulse">
                  <Cpu className="text-red-500/40" size={32} />
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 px-6 bg-slate-900/30 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-4xl font-bold italic">بماذا نتميز؟</h2>
            <div className="w-24 h-1 bg-red-600 mx-auto rounded-full"></div>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">نجمع بين الكفاءة التقنية العالية وفهم احتياجات السوق المصري والعالمي.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, idx) => (
              <div key={idx} className="p-8 rounded-3xl bg-white/5 border border-white/5 hover:border-red-600/30 transition-all group hover:-translate-y-2 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-0 bg-red-600 group-hover:h-full transition-all duration-300"></div>
                <div className="w-14 h-14 rounded-2xl bg-red-600/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section id="vision" className="py-32 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-20 items-center">
          <div className="md:w-1/2 grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="h-48 rounded-3xl bg-red-600/20 border border-red-600/20 flex flex-col items-center justify-center text-center p-4 group hover:bg-red-600/30 transition-colors">
                <Target size={32} className="text-red-500 mb-2 group-hover:scale-110 transition-transform" />
                <span className="font-bold text-sm uppercase tracking-tighter">الدقة في التنفيذ</span>
              </div>
              <div className="h-64 rounded-3xl bg-white/5 border border-white/10 flex flex-col items-center justify-center text-center p-4">
                 <CheckCircle2 size={32} className="text-green-500 mb-2" />
                 <span className="font-bold text-sm uppercase tracking-tighter">الجودة العالمية</span>
              </div>
            </div>
            <div className="space-y-4 pt-12">
              <div className="h-64 rounded-3xl bg-white/5 border border-white/10 flex flex-col items-center justify-center text-center p-4">
                 <MousePointer2 size={32} className="text-blue-500 mb-2" />
                 <span className="font-bold text-sm uppercase tracking-tighter">بساطة الاستخدام</span>
              </div>
              <div className="h-48 rounded-3xl bg-red-600/20 border border-red-600/20 flex flex-col items-center justify-center text-center p-4 group hover:bg-red-600/30 transition-colors">
                 <Cpu size={32} className="text-red-500 mb-2 group-hover:scale-110 transition-transform" />
                 <span className="font-bold text-sm uppercase tracking-tighter">تكنولوجيا ذكية</span>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-4xl font-black italic leading-tight">فلسفة Red X: <br /> <span className="text-red-500">التعقيد يكمن في البساطة.</span></h2>
            <p className="text-slate-400 text-lg leading-relaxed border-r-2 border-slate-800 pr-6">
              نحن نؤمن أن أفضل الحلول هي تلك التي لا يراها المستخدم، بل يشعر بأثرها. نركز في Red X على إزالة العوائق التقنية بين شركتك وبين أهدافها الكبرى باستخدام أحدث معايير الأداء لعام 2026.
            </p>
            <ul className="space-y-4 pt-4">
              {['تطوير يعتمد على النتائج الملموسة', 'شفافية كاملة في مراحل العمل', 'دعم فني متخصص من القاهرة'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 font-semibold group cursor-default">
                  <div className="w-2 h-2 rounded-full bg-red-600 group-hover:w-4 transition-all"></div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-6 border-t border-white/5 text-center bg-slate-950">
        <div className="max-w-xl mx-auto space-y-10">
          <div className="flex items-center justify-center gap-2">
            <div className="w-8 h-8 bg-red-600 rounded flex items-center justify-center">
              <span className="text-lg font-black text-white italic">X</span>
            </div>
            <span className="text-xl font-bold tracking-tighter">RED <span className="text-red-600">X</span></span>
          </div>
          
          <p className="text-slate-500 text-sm italic font-medium leading-relaxed">
            "نحن هنا لنحول تحدياتك التقنية إلى فرص نمو حقيقية من قلب القاهرة."
          </p>

          <div className="flex flex-col md:flex-row justify-center items-center gap-6 text-sm">
             <a href="mailto:info@redx.com" className="hover:text-red-500 transition-colors flex items-center gap-2 font-bold">
               <Mail size={18} className="text-red-600" /> info@redx.com
             </a>
             <span className="hidden md:inline text-slate-800">|</span>
             <div className="flex items-center gap-2 text-slate-400 font-bold">
               <MapPin size={18} className="text-red-600" />
               <span>جمهورية مصر العربية</span>
             </div>
          </div>

          <div className="text-[10px] text-slate-700 pt-10 uppercase tracking-[0.2em] font-black">
            © 2026 Red X Software Solutions. Engineered in Egypt.
          </div>
        </div>
      </footer>

      {/* Custom Styles for Animations */}
      <style jsx global>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 3s infinite ease-in-out;
        }
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
};

export default App;

              
