import { 
  Menu, 
  Bell, 
  Home as HomeIcon, 
  Layers, 
  Scan, 
  LineChart, 
  User,
  ArrowRight,
  Star,
  ChevronRight,
  Maximize2,
  X,
  HelpCircle,
  ZapOff,
  Image as ImageIcon,
  MapPin,
  Search,
  BarChart2,
  Mail,
  FileText,
  Users,
  Heart,
  MessageCircle
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Screen, CaseStudy, Restorer, Scheme } from './types';
import { useState, useEffect } from 'react';

// --- Shared Components ---

const NavBar = ({ current, onNavigate }: { current: Screen, onNavigate: (s: Screen) => void }) => (
  <nav className="fixed bottom-0 left-0 w-full flex justify-around items-end pt-2 pb-8 bg-surface/95 backdrop-blur-lg border-t border-outline-variant/20 shadow-[0_-4px_30px_rgba(51,51,51,0.03)] z-50 rounded-t-xl px-4">
    <button onClick={() => onNavigate(Screen.Home)} className={`flex flex-col items-center justify-center transition-colors w-1/5 ${current === Screen.Home ? 'text-primary' : 'text-secondary'}`}>
      <HomeIcon size={20} className={current === Screen.Home ? 'fill-current' : ''} />
      <span className="font-label text-[10px] mt-1">首页</span>
    </button>
    <button onClick={() => onNavigate(Screen.Assessment)} className={`flex flex-col items-center justify-center transition-colors w-1/5 ${current === Screen.Assessment ? 'text-primary' : 'text-secondary'}`}>
      <Layers size={20} className={current === Screen.Assessment ? 'fill-current' : ''} />
      <span className="font-label text-[10px] mt-1">修复</span>
    </button>
    <div className="flex flex-col items-center justify-center w-1/5 -mt-8">
      <button 
        onClick={() => onNavigate(Screen.Scan)}
        className="w-16 h-16 rounded-full flex items-center justify-center shadow-[0_4px_15px_rgba(212,175,55,0.4)] active:scale-95 transition-transform relative" 
        style={{ background: 'linear-gradient(135deg, #D4AF37 0%, #C9A962 100%)' }}
      >
        <div className="absolute inset-0 rounded-full animate-ping bg-primary/20 -z-10" />
        <Scan size={28} color="white" strokeWidth={1.5} />
      </button>
      <span className="font-label text-[10px] mt-2 text-secondary tracking-wider">立即扫描</span>
    </div>
    <button onClick={() => onNavigate(Screen.Progress)} className={`flex flex-col items-center justify-center transition-colors w-1/5 ${current === Screen.Progress ? 'text-primary' : 'text-secondary'}`}>
      <LineChart size={20} className={current === Screen.Progress ? 'fill-current' : ''} />
      <span className="font-label text-[10px] mt-1">进度</span>
    </button>
    <button className="flex flex-col items-center justify-center text-secondary transition-colors w-1/5">
      <User size={20} />
      <span className="font-label text-[10px] mt-1">我的</span>
    </button>
  </nav>
);

const Header = ({ variant = 'default' }: { variant?: 'default' | 'home' }) => {
  if (variant === 'home') {
    return (
      <nav className="sticky top-0 z-50 bg-surface/90 backdrop-blur-md px-4 pb-4 flex items-center gap-3 border-b border-outline-variant/5 pt-8">
        <div className="flex items-center gap-1 shrink-0">
          <MapPin size={22} className="text-[#8B6E3F]" />
          <span className="text-lg font-display font-semibold text-[#8B6E3F]">西安</span>
        </div>
        <div className="flex-grow relative flex items-center">
          <div className="w-full flex items-center bg-surface-container rounded-full px-4 py-1.5 border border-outline-variant/10 focus-within:border-primary-container/30 transition-all">
            <Search size={16} className="text-secondary/50 mr-2" />
            <input 
              className="bg-transparent border-none focus:ring-0 p-0 text-xs font-body text-on-surface w-full placeholder:text-secondary/40" 
              placeholder="搜索修复工艺或匠人名字" 
              type="text"
            />
          </div>
        </div>
        <button className="shrink-0 flex items-center justify-center text-on-surface/70">
          <Bell size={20} strokeWidth={1.5} />
        </button>
      </nav>
    );
  }

  return (
    <header className="flex justify-between items-center px-4 py-2 w-full sticky top-0 z-50 bg-surface/80 backdrop-blur-md border-b border-outline-variant/30">
      <div className="flex items-center gap-4">
        <Menu size={24} className="text-primary" />
        <h1 className="font-display text-xl font-light text-primary tracking-[0.2em]">修玩</h1>
      </div>
      <Bell size={24} className="text-primary" />
    </header>
  );
};

// --- Screen Components ---

export const SplashScreen = ({ onComplete }: { onComplete: () => void }) => {
  useEffect(() => {
    const timer = setTimeout(onComplete, 3000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-surface overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="relative flex flex-col items-center"
      >
        <div className="relative w-40 h-40 flex items-center justify-center">
          <div className="absolute inset-0 border border-dashed border-outline-variant/30 rounded-full scale-125 animate-[spin_20s_linear_infinite]" />
          <img 
            src="https://lh3.googleusercontent.com/aida/ADBb0ugm5qAXb6sWy2ox6iiIvA06lqyXSWgLzrlhGAAUDiXfMgaW_h9Gk9lAKcYCX-UzWEQa5CEkuu3STr3fKQiuJGxKm6GXFMkJzUfjdicNSphbl6-A3ktt8T_ohbVGBBDGWLZmrY13ite1bkhY86qRyEORd8Ucgphuv46r92rSt1CBBolh23j3AyRyEORd8Ucgphuv46r92rSt1CBBolh23j3AyRuSLeGmXJVeXjUw9nhZqL2jiV36CFsNZxzZf_AHVWq-JK3mwD2BDiXIHwYInaG1j-A_3I"
            alt="ロゴ"
            className="w-32 h-auto animate-kintsugi object-contain"
          />
        </div>
        <motion.h1 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-20 text-secondary font-light text-2xl tracking-[0.5em] ml-[0.5em]"
        >
          修玩
        </motion.h1>
      </motion.div>
      <div className="fixed bottom-16 w-full max-w-xs px-8">
        <div className="h-[1px] bg-outline-variant/20 overflow-hidden rounded-full mb-4">
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 3, ease: "easeInOut" }}
            className="h-full bg-primary-container"
          />
        </div>
        <p className="text-secondary/60 text-[10px] text-center tracking-widest uppercase">
          正在连接匠人网络...
        </p>
      </div>
    </div>
  );
};

export const IdentityScreen = ({ onSelect }: { onSelect: () => void }) => (
  <div className="min-h-screen bg-surface px-6 pt-20 flex flex-col items-center">
    <div className="w-32 h-32 relative mb-12">
      <svg className="w-full h-full opacity-60" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="45" fill="none" stroke="#eeeeee" strokeDasharray="2 4" />
        <ellipse cx="50" cy="50" rx="30" ry="22" fill="none" stroke="#333333" strokeWidth="0.8" />
        <path d="M40,35 L45,45 L42,55" fill="none" stroke="#c9a96e" strokeWidth="1.2" />
        <path d="M55,38 L60,48 L58,58" fill="none" stroke="#c9a96e" strokeWidth="1.2" />
      </svg>
    </div>
    <div className="w-12 h-[2px] bg-primary-container mb-12" />
    <h2 className="text-center text-on-surface tracking-widest mb-16 opacity-80">
      请选择您的身份，获取专属修复方案
    </h2>
    
    <div className="w-full max-w-lg space-y-4">
      {[
        { title: '我是文玩藏家', desc: '紫砂、瓷器、玉器、木器… 让岁月沉淀之美，完好如初', icon: 'trip_origin' },
        { title: '我是潮玩藏家', desc: '手办、模型、潮流玩具… 每一件都是心头好，坏了交给我们', icon: 'toys' }
      ].map((opt, i) => (
        <motion.button
          key={i}
          whileTap={{ scale: 0.98 }}
          onClick={onSelect}
          className="w-full flex items-start gap-4 p-6 bg-white border border-outline-variant/30 rounded-xl shadow-sm hover:border-primary-container transition-colors text-left"
        >
          <div className="w-12 h-12 rounded-full bg-surface-container-low flex items-center justify-center shrink-0">
             <div className="w-2 h-2 rounded-full bg-primary" />
          </div>
          <div className="flex-1 pt-1">
            <h3 className="font-display text-lg text-on-surface">{opt.title}</h3>
            <p className="text-xs text-secondary mt-2 leading-relaxed">{opt.desc}</p>
          </div>
          <ArrowRight size={18} className="text-secondary/40 self-end mb-1" />
        </motion.button>
      ))}
      
      <div className="pt-8 text-center">
        <button onClick={onSelect} className="text-secondary text-xs tracking-widest flex items-center justify-center gap-1 mx-auto hover:opacity-70">
          我先逛逛 <ChevronRight size={14} />
        </button>
      </div>
    </div>
    
    <p className="mt-auto pb-12 text-[10px] text-secondary/40 tracking-wider">
      选择后可在“我的”中随时切换
    </p>
  </div>
);

const CASES: CaseStudy[] = [
  {
    id: '1',
    title: '宋代影青瓷盘修复',
    technique: '金缮工艺',
    duration: '14 天',
    beforeImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAaf3VT1sE3f5_bnblXCvTEXpVcG3txCc07aNEPfbEDZMOUrz_cxu_GWZgkxTb6qzgBYXJM57X9CEDMgUG6ubEjP_443PG8SnxtDU9d9p0XQBIxFgX7BXpkFa_7NGLphYKgKggxYSvTF6TR44nxuxy0qywsXDSyqcXOvBGl8aOw9OtWJYhvza9KQ70acbWbToqZMGDiC5el_7CA6O5epzlZE0NacK1y6O2rXwLzfmjMl6jdXFmIqVmEW9vURvjs7c2FAqvpP1N8RQE',
    afterImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuACwhAkxAjv32-0w9O_QvFOgKVlBXKEkHL3zeWuLXxqU-4F7H2gT8rdJDAz0FkdwF4rLYQw_IrPj4ai8XOsNxO_WrRvDEDqxxLJ48kXhlpStGfDK1CsAmXszmDkgApKutGNn6zRS-n27_TkqCEsTo1K1IE20MdmWHN__zZ5HxAWkllO_3NuD2Hep0cLBK-GGK_cxgGDT1RH82ByRVCtvDTirA_qFKX2j4F1szxhZheeHvB6Oi8xJMhOBbI3jXGP6mg0dGA_NNgOwTs'
  },
  {
    id: '2',
    title: '限定版潮玩表面翻新',
    technique: '模型涂装',
    duration: '5 天',
    beforeImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBZj-FDnwNlE37NXlMbpgo5-sNOsxcDbzHhZ5sq7dFe5j0mZEuVUq76Wb5R6r55c_Vk4LRHAI3S1nWS7xi1IATFDXfPrWct8YkJzMh194PYTD-5uLwaa0AffhYbfQLGYpvQqquAfVUvo8Y-tTacJQEXXatQ2tjgarsaOAU9opSxz3uWBFz-djp-fUoMA0IgZUt4sLZx-VviS0y0m5KjyMMCJtU3Ai45cfL1LzJSk5EKjORJKFtArEdU0B0ulhPQIOxmyxvc2YWhyfQ',
    afterImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBAG95aRq07_ooWs44F8QdND5fq5yTuosSPyR13nSEV93XczTSG_Wypbv5O5ANIXk2GqlHgrAceYtzgBWNJkXx__QXTOzpmBjFfrjf3YPGcFZHEk19Y_LEbyMDCBLvK__yLxEm0pxJl3Y1w_uDZf_n1y3XhnQFf7wAcTc-T0c2gEUHTt9pMTSGHmXdL4h9gai9dl9V2qwG8pkwCy0EuP2a0n2pBrzjBqt6QCClnd-vnE7F_sw83D_I_-x1g_8iT6GDYP69mCQ5rnbE'
  }
];

const RESTORERS: Restorer[] = [
  { id: '1', name: '林修平', id_title: '国家二级文物修复师', portrait: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDUyLuq3McL6isiteJU2nSZqg4KlKowPr1UTgEOPeTyF9jowWwjN4V4zBQs6NFGv1AvPaFrhKfxW-WLFKnvao-aFh23SEBs__QsZMoy_pjd_MVo-K_jXVvB16zwiP8IKrhfu9FkOTxYIosdWEvYpP9HCflcf6gdwH1mHN4NGdCT1ouyN5aojoYgXEJ2K7oPbiGiqDoZpEJFaUfc1XBUgSb4yxGRG8eIumrw0KEdWPRhJ9sVIRcnxtDgTdWv642gWDmY5ntPecuC5Po', rating: 4.9, repairs: '128' },
  { id: '2', name: '苏婉儿', id_title: '高级潮玩涂装专家', portrait: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCsagk60Rcs8OXvGjTz0aH9RUK2f2gFWefjfc8fandYslPsZ9K8OEBwYLSczJKxdM5d8BKHSzFJcS831P4LmOj8tfLdUWdbmz7XJgJJrRknGpc2huRQy8AkKY6D35D71HrM-ifbvBISUQpBlZHWSBbM0pZwkaIkoqYOyRD80IEw4-WuPGEbMG-0lrvX04kcYTeOLF_9us9RI-OBKUJE6AsAZ1r80-5EaSg1Aci3VHsjuQ1n8zuK5nB15IhIb1Idr1QM1SYDpmAEbtE', rating: 5.0, repairs: '342' }
];

export const HomeScreen = ({ onScan, onNavigate }: { onScan: () => void, onNavigate: (s: Screen) => void }) => (
  <div className="bg-surface min-h-screen">
    <Header variant="home" />
    <main className="pb-32">
      {/* Hero Section */}
      <section className="px-4 pt-2">
        <div className="relative w-full rounded-xl overflow-hidden shadow-2xl group h-[200px]">
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCRsXsb3NSsiTd8yhk5oj-ts2HGtAft616o6-ko3vgAVGSy_rzwHaDWXHg58EmyOSr4Javz00mWDHXAZLi5J3pi9xHoLXVOQkCyl7BSlBDAT-BybfNjCxiDa8A2aNvYu_MjRNuqCzkRCwZvrQvNwbMu5Fe5rmNGuGoxk9ZJPNlCnMFUY3dnjHXaOufyz48Z7GT1Nh0bRQ4QOKOatm0VYIoxgkM_N5zWPV-66Rvlq_id0QjDriDd1Ar7WVKBh7GQl19Ou5arkl5gabM"
            alt="Hero"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex flex-col justify-end p-4">
            <h2 className="font-display text-2xl text-white mb-1">万物有灵，修旧如新</h2>
            <p className="text-white/80 text-xs mb-3 max-w-xs">专业文物级修复工艺，为您的心爱之物赋予二次生命。</p>
            <button onClick={onScan} className="bg-primary-container text-white px-8 py-2 rounded-lg font-label tracking-widest flex items-center justify-center gap-2 w-max transition-transform active:scale-95 shadow-lg">
              开启修复 <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* Quick Access Section */}
      <section className="px-4 mt-8 mb-4">
        <div className="grid grid-cols-4 gap-4">
          {[
            { icon: BarChart2, label: '在线评估' },
            { icon: Mail, label: '到店寄修' },
            { icon: FileText, label: '我的委托' },
            { icon: Users, label: '匠人名录' }
          ].map((item, i) => (
            <button key={i} className="flex flex-col items-center gap-2 group">
              <div className="w-14 h-14 rounded-full bg-surface-container flex items-center justify-center text-primary transition-all group-hover:bg-primary-container group-hover:text-white">
                <item.icon size={24} strokeWidth={1.5} />
              </div>
              <span className="text-[13px] font-label text-on-surface-variant">{item.label}</span>
            </button>
          ))}
        </div>
      </section>

      {/* Restoration Cases Section */}
      <section className="mt-8">
        <div className="px-4 flex justify-between items-end mb-6">
          <div>
            <h3 className="font-display text-[22px] text-on-surface">修复案例</h3>
            <p className="text-xs text-secondary mt-1">赋予破碎以新生之美</p>
          </div>
          <button className="text-primary text-xs font-label flex items-center gap-1">查看全部 <ChevronRight size={14} /></button>
        </div>
        <div className="flex overflow-x-auto gap-stack-gap-md px-4 hide-scrollbar snap-x pb-2">
          {CASES.map((item) => (
            <div key={item.id} className="min-w-[280px] md:min-w-[400px] snap-start bg-white rounded-xl overflow-hidden shadow-[0_4px_30px_rgba(51,51,51,0.03)] border border-outline-variant/10">
              <div className="grid grid-cols-2 h-44">
                <div className="relative">
                  <img src={item.beforeImage} className="w-full h-full object-cover" alt="Before" />
                  <span className="absolute top-2 left-2 bg-black/40 backdrop-blur-md text-white text-[10px] px-2 py-1 rounded font-label">BEFORE</span>
                </div>
                <div className="relative border-l border-white/10">
                  <img src={item.afterImage} className="w-full h-full object-cover" alt="After" />
                  <span className="absolute top-2 left-2 bg-primary/80 backdrop-blur-md text-white text-[10px] px-2 py-1 rounded font-label">AFTER</span>
                </div>
              </div>
              <div className="p-4">
                <h4 className="font-display text-[18px] text-on-surface mb-1">{item.title}</h4>
                <div className="flex items-center gap-2">
                  <span className="bg-primary/10 text-primary text-[10px] px-2 py-0.5 rounded-full font-label">{item.technique}</span>
                  <span className="text-[10px] text-secondary">历时 {item.duration}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Nearby Collectors' Dynamics Section */}
      <section className="px-4 mt-10">
        <div className="flex justify-between items-end mb-6">
          <div>
            <h3 className="font-display text-[22px] text-on-surface">附近藏家动态</h3>
            <p className="text-xs text-secondary mt-1">发现周边的修复灵感</p>
          </div>
          <button className="text-primary text-xs font-label flex items-center gap-1">更多 <ChevronRight size={14} /></button>
        </div>
        <div className="space-y-6">
          {/* Dynamic Card 1 */}
          <div className="bg-white rounded-2xl p-4 shadow-[0_8px_24px_rgba(0,0,0,0.03)] border border-outline-variant/5">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCsagk60Rcs8OXvGjTz0aH9RUK2f2gFWefjfc8fandYslPsZ9K8OEBwYLSczJKxdM5d8BKHSzFJcS831P4LmOj8tfLdUWdbmz7XJgJJrRknGpc2huRQy8AkKY6D35D71HrM-ifbvBISUQpBlZHWSBbM0pZwkaIkoqYOyRD80IEw4-WuPGEbMG-0lrvX04kcYTeOLF_9us9RI-OBKUJE6AsAZ1r80-5EaSg1Aci3VHsjuQ1n8zuK5nB15IhIb1Idr1QM1SYDpmAEbtE" alt="Avatar" className="w-10 h-10 rounded-full object-cover border border-primary/10" />
                <div>
                  <h4 className="font-label text-on-surface text-sm">墨色春秋</h4>
                  <p className="text-[10px] text-secondary">300米内 · 刚刚</p>
                </div>
              </div>
              <span className="grow bg-surface-container text-on-surface-variant text-[10px] px-2 py-1 rounded font-label text-center max-w-[80px]">发起了修复</span>
            </div>
            <p className="font-body text-sm text-on-surface/90 mb-4 line-clamp-2">这件家传的宣德炉经过林老师的金缮修复，真的焕发了第二次生命，那种残缺的美感简直无法言喻。</p>
            <div className="grid grid-cols-2 gap-2 rounded-xl overflow-hidden mb-4 h-40">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCRsXsb3NSsiTd8yhk5oj-ts2HGtAft616o6-ko3vgAVGSy_rzwHaDWXHg58EmyOSr4Javz00mWDHXAZLi5J3pi9xHoLXVOQkCyl7BSlBDAT-BybfNjCxiDa8A2aNvYu_MjRNuqCzkRCwZvrQvNwbMu5Fe5rmNGuGoxk9ZJPNlCnMFUY3dnjHXaOufyz48Z7GT1Nh0bRQ4QOKOatm0VYIoxgkM_N5zWPV-66Rvlq_id0QjDriDd1Ar7WVKBh7GQl19Ou5arkl5gabM" alt="Work 1" className="w-full h-full object-cover" />
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuACwhAkxAjv32-0w9O_QvFOgKVlBXKEkHL3zeWuLXxqU-4F7H2gT8rdJDAz0FkdwF4rLYQw_IrPj4ai8XOsNxO_WrRvDEDqxxLJ48kXhlpStGfDK1CsAmXszmDkgApKutGNn6zRS-n27_TkqCEsTo1K1IE20MdmWHN__zZ5HxAWkllO_3NuD2Hep0cLBK-GGK_cxgGDT1RH82ByRVCtvDTirA_qFKX2j4F1szxhZheeHvB6Oi8xJMhOBbI3jXGP6mg0dGA_NNgOwTs" alt="Work 2" className="w-full h-full object-cover" />
            </div>
            <div className="flex items-center gap-4">
              <button className="flex items-center gap-1.5 text-secondary text-xs">
                <Heart size={18} /> 12
              </button>
              <button className="flex items-center gap-1.5 text-secondary text-xs">
                <MessageCircle size={18} /> 4
              </button>
            </div>
          </div>
          {/* Dynamic Card 2 */}
          <div className="bg-white rounded-2xl p-4 shadow-[0_8px_24px_rgba(0,0,0,0.03)] border border-outline-variant/5">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDUyLuq3McL6isiteJU2nSZqg4KlKowPr1UTgEOPeTyF9jowWwjN4V4zBQs6NFGv1AvPaFrhKfxW-WLFKnvao-aFh23SEBs__QsZMoy_pjd_MVo-K_jXVvB16zwiP8IKrhfu9FkOTxYIosdWEvYpP9HCflcf6gdwH1mHN4NGdCT1ouyN5aojoYgXEJ2K7oPbiGiqDoZpEJFaUfc1XBUgSb4yxGRG8eIumrw0KEdWPRhJ9sVIRcnxtDgTdWv642gWDmY5ntPecuC5Po" alt="Avatar" className="w-10 h-10 rounded-full object-cover border border-primary/10" />
                <div>
                  <h4 className="font-label text-on-surface text-sm">清音雅集</h4>
                  <p className="text-[10px] text-secondary">800米内 · 2小时前</p>
                </div>
              </div>
              <span className="grow bg-primary/10 text-primary text-[10px] px-2 py-1 rounded font-label text-center max-w-[80px]">已完成修复</span>
            </div>
            <p className="font-body text-sm text-on-surface/90 mb-4 line-clamp-2">苏婉儿老师的潮玩涂装技术真的是国内顶尖，我的Bearbrick重获新生了！</p>
            <div className="rounded-xl overflow-hidden mb-4 h-48">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBAG95aRq07_ooWs44F8QdND5fq5yTuosSPyR13nSEV93XczTSG_Wypbv5O5ANIXk2GqlHgrAceYtzgBWNJkXx__QXTOzpmBjFfrjf3YPGcFZHEk19Y_LEbyMDCBLvK__yLxEm0pxJl3Y1w_uDZf_n1y3XhnQFf7wAcTc-T0c2gEUHTt9pMTSGHmXdL4h9gai9dl9V2qwG8pkwCy0EuP2a0n2pBrzjBqt6QCClnd-vnE7F_sw83D_I_-x1g_8iT6GDYP69mCQ5rnbE" alt="Work 3" className="w-full h-full object-cover" />
            </div>
            <div className="flex items-center gap-4">
              <button className="flex items-center gap-1.5 text-secondary text-xs">
                <Heart size={18} /> 45
              </button>
              <button className="flex items-center gap-1.5 text-secondary text-xs">
                <MessageCircle size={18} /> 8
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
    <NavBar current={Screen.Home} onNavigate={onNavigate} />
  </div>
);

export const AssessmentScreen = ({ onNext, onNavigate }: { onNext: () => void, onNavigate: (s: Screen) => void }) => (
  <div className="bg-surface min-h-screen">
    <Header />
    <main className="pb-40 max-w-4xl mx-auto overflow-x-hidden">
      <section className="relative w-full aspect-[4/3] bg-surface-container-low overflow-hidden">
        <img 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDLVYPcbF6Dn6UtEAywKrmW9rT3GxuDnVzJUZ_c5in1BqpQj3P3SR9RZb0GC6BY_prSOG15xpWevCscFA-Smosxg1BY5SGCjwK7FNXcLNlFuqgSDU-Lq1y6dq2_8r8S5Ah4Ijn3LKRDrZAlY9ChSQRDghzInZdWpmGBXh4C2qk4l7NrUkByflVYq0-x5_d1QOWohsUtVDAtPWeLVmVVPzgJCmgDnwaPRzER8zcZKZNAwPHZfH_HXuc2ew-2Zw7_Qeq5eRUhZK9MI8g"
          alt="Scan"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 p-6 pointer-events-none">
          <div className="flex justify-between items-start">
            <div className="bg-primary px-3 py-1 text-[10px] text-white tracking-widest">AI 实时扫描中...</div>
            <div className="bg-white/40 backdrop-blur-sm px-2 py-1 text-[10px] text-primary">FPS: 60 / LAT: 12ms</div>
          </div>
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex bg-white/80 backdrop-blur-md rounded-full p-1 shadow-sm border border-outline-variant/30 pointer-events-auto">
            <button className="px-6 py-2 rounded-full text-xs font-label bg-primary text-white">损伤模型</button>
            <button className="px-6 py-2 rounded-full text-xs font-label text-secondary">修复预览</button>
          </div>
        </div>
      </section>

      <div className="px-4 pt-12">
        <div className="flex flex-col gap-2 mb-10">
          <span className="text-[10px] text-primary tracking-[0.3em] uppercase">Assessment Report</span>
          <h2 className="font-display text-2xl text-on-surface">损伤分析报告</h2>
          <div className="flex items-center gap-2 opacity-60">
            <Scan size={14} className="text-secondary" />
            <span className="text-[10px] italic">深度神经网络算法支持</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl border border-outline-variant/20 shadow-sm flex flex-col justify-between h-48">
             <div className="flex justify-between">
                <Maximize2 size={24} className="text-primary" />
                <span className="bg-primary/10 text-primary text-[10px] px-2 py-1 rounded">高风险</span>
             </div>
             <div>
                <p className="text-[10px] text-secondary uppercase tracking-widest">综合损伤程度</p>
                <h3 className="font-display text-5xl text-primary mt-2">74<span className="text-xl">%</span></h3>
             </div>
          </div>
          
          <div className="md:col-span-2 bg-white p-6 rounded-xl border border-outline-variant/20 shadow-sm space-y-6">
            {[
              { title: '漆面氧化与开裂', detail: '由于紫外线照射导致的颜料层物理损伤', status: '严重' },
              { title: '机械关节磨损', detail: '左侧肢体连接件活动度降低 15%', status: '中度' },
              { title: '结构性缺损', detail: '背部装饰件缺失，需进行3D打印复原', status: '待补件' }
            ].map((err, i) => (
              <div key={i} className={`flex items-center justify-between gap-4 ${i < 2 ? 'pb-6 border-b border-outline-variant/10' : ''}`}>
                <div>
                  <h4 className="text-sm font-medium">{err.title}</h4>
                  <p className="text-[10px] text-secondary mt-1">{err.detail}</p>
                </div>
                <span className="text-[10px] text-primary whitespace-nowrap">{err.status}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 flex flex-col md:flex-row gap-10 items-start pb-20">
          <div className="flex-1 space-y-4">
            <h3 className="font-display text-xl">修复专家建议</h3>
            <p className="text-sm text-secondary leading-relaxed">
              基于AI分析，您的藏品属于“精密机械类”损耗。建议优先进行漆面稳定处理，防止进一步剥落。我们将匹配具备<span className="text-primary font-medium">10年以上经验</span>的古物修复师为您提供针对性方案。
            </p>
            <button onClick={onNext} className="mt-6 w-full py-4 bg-primary-container text-on-primary-container font-label tracking-[0.2em] rounded-xl shadow-lg active:scale-95 transition-all flex items-center justify-center gap-2 text-xs">
              获取修复师方案
            </button>
          </div>
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBMGhdjrMl0U85bBg8RuIoJ0wdgPMzu0OTtWbjBy0HFKTCzQcKUOMSVbmn_-KyAKsWvh9Wek29VpysvkqHDTEyGV7aioxinMSWZZOITg0Xu61ZkI_DcTP715ul_SKrHHgH0dMSi515m3KVGDoG3n6OeEKjseVSTy4rOsRMgcnWEFRTmhLz44E90e3SoaBhJcWSC8gRs9iWpQxJ9Jp3jGtlgFpXeB-gcI_osJ7N7fRuQx0oHN9-mqXXvUics4-1V-Bne0LJasHHYaNU"
            className="w-full md:w-64 aspect-square rounded-xl object-cover grayscale brightness-90"
            alt="Advisor"
          />
        </div>
      </div>
    </main>
    <NavBar current={Screen.Assessment} onNavigate={onNavigate} />
  </div>
);

const SCHEMES: Scheme[] = [
  { id: '1', name: '林清泉 师傅', type: '匠心推选', philosophy: '遵循“修旧如旧”的原则，采用传统天然大漆工艺，最大程度保留岁月的痕迹。', duration: '45', price: '8,200', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBHgrQeng3QRt6_Q5dD9jr5rz6rv3BI_O0_3W6zTeDjHkX8pJUciRsMjVMnlS5t6auJy4_bK3uILLEu_LtdOLF-umqq-nJ8_vVYrkmyUx1--dC2wb0sL43iy9Wp97q2R68HhGI7MKBkLSHXBg8u8mUauzNSdC8qtN1tMWUjwFZ44bKHjjq3JhhCzVOTiPcGvawc_oz-4h3XKDS7H1oFikjEDE4JNQjlX1U-_X2wm6dHDr5CdPiAt8D1OvVUjxrzLPVTXmLs9gv11lE' },
  { id: '2', name: '苏博文 实验室', type: '科技融合', philosophy: '利用3D扫描与纳米粘合技术。在分子层面进行结构加固，呈现出极简的现代美感。', duration: '20', price: '12,500', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC2ifCe6qja7jZnUQ6ma6EyPQN9QBO28ew9nibXBNSvih4Cx1h4jTvyEqFKOcUrZ4zAea3BcSb1UHIC0qqPj7m3cQFvlsPIXBWMNY1TdnlPcDi0GujHWEmS1oIKGiEL57J3GruD19KQljCBLn8t2qty3w7qHSAqeH7d0xlVA0in6eNpJS7xFTLAgOC6IJqaxKnznvLM-PY4b2UVp5RxMs2aTraqu6wKRLoOKSqQKqYScbRjQ7BUsl1QsiDA1w82H1B09dcqa8JHgI0' }
];

export const SchemeScreen = ({ onSelect, onNavigate }: { onSelect: () => void, onNavigate: (s: Screen) => void }) => (
  <div className="bg-surface min-h-screen">
    <Header />
    <main className="px-4 pt-10 pb-40 max-w-6xl mx-auto">
      <section className="mb-20 border-l-2 border-primary-container pl-6 py-2">
        <span className="font-label text-[10px] text-primary uppercase tracking-widest mb-2 block">Scheme Selection</span>
        <h2 className="font-display text-4xl text-on-surface">修复方案</h2>
        <p className="text-secondary text-sm mt-4 max-w-md">针对您的藏品状态，我们甄选了三位顶级修复师提供的定制化方案。</p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {SCHEMES.map((scheme) => (
          <div key={scheme.id} className="bg-white border border-outline-variant/30 rounded-xl overflow-hidden shadow-sm flex flex-col group hover:border-primary-container/50 transition-all duration-500">
            <div className="relative h-48 overflow-hidden">
              <img src={scheme.image} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={scheme.name} />
              <div className="absolute top-4 right-4 px-3 py-1 bg-primary text-white text-[10px] rounded-full tracking-widest">{scheme.type}</div>
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-display text-xl">{scheme.name}</h3>
                <div className="flex items-center gap-1 text-primary-container">
                  <Star size={14} fill="currentColor" />
                  <span className="text-xs">4.9</span>
                </div>
              </div>
              <div className="space-y-4 mb-8">
                <div>
                  <span className="text-[10px] text-primary font-medium block mb-1">修复思路</span>
                  <p className="text-xs text-secondary leading-relaxed">{scheme.philosophy}</p>
                </div>
                <div className="flex gap-10 pt-4 border-t border-outline-variant/10">
                  <div>
                    <span className="text-[10px] text-secondary block">修复工期</span>
                    <p className="font-display text-lg">{scheme.duration} <span className="text-xs font-light">天</span></p>
                  </div>
                  <div>
                    <span className="text-[10px] text-secondary block">报价</span>
                    <p className="font-display text-lg text-primary-container">¥{scheme.price}</p>
                  </div>
                </div>
              </div>
              <button onClick={onSelect} className="mt-auto w-full py-4 bg-primary text-white text-xs font-label tracking-widest rounded-lg flex items-center justify-center gap-2 active:scale-95 transition-all">
                查看详情 <ArrowRight size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </main>
    <NavBar current={Screen.Assessment} onNavigate={onNavigate} />
  </div>
);

export const ProgressScreen = ({ onNavigate }: { onNavigate: (s: Screen) => void }) => (
  <div className="bg-surface min-h-screen">
    <Header />
    <main className="px-4 py-12 max-w-4xl mx-auto pb-40">
      <section className="flex flex-col md:flex-row gap-12 items-start mb-20">
        <div className="w-full md:w-1/3 aspect-square rounded-xl overflow-hidden shadow-sm border border-outline-variant/10">
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCMPzEz-YRyAxXKRhCnp_iwheBep8hfGTHd0rD8yW-lvDgb19dv35sJhryggLjL5mqQyk-EnCH0XjY7LvLWfwn9ZAH-PveKNb7vVxE6WR2brIGJwqM3SjEvv14jjgy14ty2RlbAOYMeHnpWTF9jmxNqq5Z1iDkV44gtg0msWCH3siTA3b8cjG-xVOSJDZD1RY0GqkBdeAvru4UA_6QeynayfQpv7wh5lHfcFJdkZ_pg4XzkCF63CuaQrAPkDpLdB_MGD0u9z_6VEtE"
            className="w-full h-full object-cover"
            alt="Item"
          />
        </div>
        <div className="flex-1 space-y-4">
          <div className="inline-block px-3 py-1 bg-primary/10 rounded-full">
            <span className="text-[10px] text-primary tracking-widest uppercase">Ongoing Project</span>
          </div>
          <h2 className="font-display text-3xl">青瓷金缮修复 · #8291</h2>
          <p className="text-secondary text-base max-w-xl">
            正在由高级工艺师进行“精细修复”阶段。项目采用传统金缮工艺，力求保留历史痕迹，赋予其现代审美。
          </p>
          <div className="pt-6 flex gap-4">
            <button className="px-8 py-3 bg-primary text-white text-xs font-label rounded-lg">联系修复师</button>
            <button className="px-8 py-3 border border-outline-variant text-secondary text-xs font-label rounded-lg">订单详情</button>
          </div>
        </div>
      </section>

      <section className="bg-white p-10 rounded-xl shadow-sm border border-outline-variant/20 relative">
        <div className="absolute left-[31px] top-12 bottom-12 w-[1px] bg-outline-variant/30" />
        <div className="space-y-12">
          {[
            { title: '物品寄送', desc: '已确认收货，正在建立修复档案', date: '2023.10.24', state: 'done' },
            { title: '专家拆解', desc: '专家已完成受损评估与清理', date: '2023.10.25', state: 'done' },
            { title: '精细修复', desc: '正在进行金粉填充与打磨 (当前进度 65%)', date: '进行中', state: 'active' },
            { title: '品质质检', desc: '待修复完成后进行多维质量校验', date: '', state: 'pending' }
          ].map((step, i) => (
            <div key={i} className={`relative pl-12 ${step.state === 'pending' ? 'opacity-30' : ''}`}>
              <div className={`absolute left-[-10px] top-1 w-6 h-6 rounded-full flex items-center justify-center z-10 
                ${step.state === 'done' ? 'bg-primary' : step.state === 'active' ? 'bg-primary-container border-2 border-primary' : 'border-2 border-outline-variant bg-white'}`}>
                {step.state === 'done' && <Star size={10} color="white" />}
              </div>
              <div className="flex justify-between items-start gap-4">
                <div>
                  <h4 className={`text-lg transition-colors ${step.state === 'active' ? 'text-primary' : 'text-on-surface'}`}>{step.title}</h4>
                  <p className="text-xs text-secondary mt-1">{step.desc}</p>
                </div>
                {step.date && <span className="text-[10px] text-secondary whitespace-nowrap">{step.date}</span>}
              </div>
              {step.state === 'active' && (
                <div className="mt-8 grid grid-cols-2 gap-4">
                  <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuChbRchXOEVHpm4KMCSPpZCjSDMLJLhlS1ujGQwK2YytWJQ6ytbzeZh3ZUzzRyVoO-Cs6jYKVF0XIR7dQN6R_SyrAhZmhJpAupKl-A4V6d1qxlmdPWl2elLH3b8i1g1Nv0bFxvq9skK2WRFMv6wEYMJzNH32szaTfG998ExMqjdY01QqBgKWUBPQR4V29r-Tf0-q6bOWqqZl8JYYlexg8BOPTyGJa1v3YngIVYZPd_h5Kw_ZmanIPR1VP-qPzaDLmmo8mCND34dZlA" className="rounded-lg aspect-video object-cover" />
                  <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJx47epu5YSI59tSFyrIfMmvopU487TWseaV4zGxCope_8PVOxJwnJkxzT9-HdbCParJtv7Gu6u2YmhnKdNh5M-vX_ULuexaf5WdCZubfIsj2xOFbGGdgW_AC3ecHw6v88zGMUJlgTfclRyZPoTq-qj7BpWfXHXOAM-YsX9kDmXCXp68Dw9RyEQ4molCO4hV7EyGO8WEcSi-ubg2h2dW0iVe4OH2yvsyzdcfMjTNmSIo61JmPfK_C6OAVimETlyQovG1FaZGeZcJY" className="rounded-lg aspect-video object-cover" />
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </main>
    <NavBar current={Screen.Progress} onNavigate={onNavigate} />
  </div>
);

export const ScanScreen = ({ onClose, onCapture }: { onClose: () => void, onCapture: () => void }) => (
  <div className="h-screen w-full bg-black overflow-hidden relative">
    {/* Camera View */}
    <div className="absolute inset-0">
      <img 
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAWNO-JJALYa62whjI_QdvZSgEh5Gor2SKSg6SOzIMW1TMgaYbSFSMo6zXQhr0jsl5DXkap_MxVcjZ2YSFzZ4MIAoSdt9XV3JjKQPGmeyxvcJbLkbcayCH6iQa8AV50yIJxV3UgZOdOzSGgaDh8pGsosWlbbnmAzdqQUMQh_CxXQvFXcWByRGwdY-5XnTrzFjeQVoAy3SnxdFwe5hfcjIVNiIjTsmKvSBN6Zk_Jfpafya-8uNx7vvbiqMOTCwmAtE7sqOuCVWE9v6M"
        className="w-full h-full object-cover"
        alt="Camera View"
      />
    </div>

    {/* Content Shell */}
    <div className="relative z-10 h-full flex flex-col">
      {/* Header */}
      <header className="flex justify-between items-center px-4 py-4 text-white">
        <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-full transition-colors active:scale-95">
          <X size={24} />
        </button>
        <h1 className="font-display text-xl tracking-[0.2em]">修玩</h1>
        <button className="p-2 hover:bg-white/10 rounded-full transition-colors active:scale-95">
          <HelpCircle size={24} />
        </button>
      </header>

      {/* Viewfinder Main */}
      <main className="flex-1 flex flex-col items-center justify-center px-6">
        <div className="relative w-full max-w-[320px] aspect-[4/5] rounded-xl font-sans">
          {/* knockout ring mask */}
          <div className="absolute inset-0 ring-[200vw] ring-black/60 rounded-xl pointer-events-none" />
          
          {/* Brackets */}
          <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary-container rounded-tl-xl" />
          <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-primary-container rounded-tr-xl" />
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-primary-container rounded-bl-xl" />
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-primary-container rounded-br-xl" />
          
          {/* AI Detection Elements */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div 
               animate={{ opacity: [0.6, 1, 0.6] }}
               transition={{ duration: 1.5, repeat: Infinity }}
               className="relative"
            >
              <div className="w-32 h-16 border-2 border-dashed border-red-500 rounded-full rotate-12" />
              <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-primary-container text-on-primary-container px-3 py-1 rounded-full shadow-lg whitespace-nowrap flex items-center gap-1">
                <span className="text-[10px] font-label font-medium">已检测到 2 处损伤</span>
              </div>
            </motion.div>
          </div>

          <p className="absolute bottom-10 left-0 w-full text-center text-white/70 text-xs leading-relaxed font-light">
            请将破损物品置于框内<br/>保持光线充足
          </p>
        </div>
      </main>

      {/* Footer Controls */}
      <footer className="pb-16 pt-10 px-8 bg-gradient-to-t from-black/90 to-transparent">
        <div className="flex items-center justify-between max-w-md mx-auto mb-6">
          <button className="flex flex-col items-center gap-2 group">
            <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-active:bg-white/10 transition-colors">
              <ZapOff size={20} className="text-white" />
            </div>
          </button>

          <div className="flex flex-col items-center gap-4">
            <button 
              onClick={onCapture}
              className="w-20 h-20 rounded-full bg-white p-2 shadow-[0_0_0_4px_#C9A96E] active:scale-95 transition-transform"
            >
              <div className="w-full h-full rounded-full border-2 border-outline-variant/30" />
            </button>
          </div>

          <button className="flex flex-col items-center gap-2 group">
            <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-active:bg-white/10 transition-colors">
              <ImageIcon size={20} className="text-white" />
            </div>
          </button>
        </div>
        <p className="text-center text-[10px] text-white/40 tracking-widest uppercase">轻点拍照，长按录像</p>
      </footer>
    </div>
  </div>
);
