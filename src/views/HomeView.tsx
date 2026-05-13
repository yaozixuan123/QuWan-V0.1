import { motion } from 'motion/react';
import { Search, MapPin, ArrowRight, Star, Heart, MessageCircle, ChevronRight, ScanLine, ClipboardList, Package, Users, Store, LineChart } from 'lucide-react';
import { ARTISANS, CASES, DYNAMIC_UPDATES } from '../constants';
import { BottomNavBar } from '../components/BottomNavBar';
import { useNavigate } from 'react-router-dom';

export function HomeView() {
  const navigate = useNavigate();

  return (
    <div className="pb-32 bg-surface min-h-screen">
      {/* Top Bar */}
      <nav className="sticky top-0 z-50 bg-surface/90 backdrop-blur-md px-5 pb-4 pt-8 border-b border-outline-variant/5">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1 shrink-0 text-primary">
            <MapPin className="w-5 h-5" fill="currentColor" strokeWidth={1} />
            <span className="text-[18px] font-headline-md font-semibold">西安</span>
          </div>
          <div className="flex-grow">
            <div className="flex items-center bg-surface-container-low rounded-full px-4 py-2 border border-outline-variant/10">
              <Search className="w-4 h-4 text-secondary/40 mr-2" />
              <input 
                className="bg-transparent border-none focus:ring-0 p-0 text-[13px] w-full placeholder:text-secondary/40" 
                placeholder="在珍修中寻找匠人或工艺"
              />
            </div>
          </div>
          <button className="shrink-0 text-on-surface/70">
            <ScanLine className="w-6 h-6 stroke-[1.2]" />
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="px-5 pt-3">
        <div className="relative h-[220px] rounded-2xl overflow-hidden shadow-2xl group">
          <img 
            className="w-full h-full object-cover" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCRsXsb3NSsiTd8yhk5oj-ts2HGtAft616o6-ko3vgAVGSy_rzwHaDWXHg58EmyOSr4Javz00mWDHXAZLi5J3pi9xHoLXVOQkCyl7BSlBDAT-BybfNjCxiDa8A2aNvYu_MjRNuqCzkRCwZvrQvNwbMu5Fe5rmNGuGoxk9ZJPNlCnMFUY3dnjHXaOufyz48Z7GT1Nh0bRQ4QOKOatm0VYIoxgkM_N5zWPV-66Rvlq_id0QjDriDd1Ar7WVKBh7GQl19Ou5arkl5gabM" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-6">
            <motion.h2 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="font-headline-lg text-[28px] text-white mb-2"
            >
              万物有灵，修旧如新
            </motion.h2>
            <p className="font-body-md text-white/80 text-sm mb-5 max-w-[80%]">专业文物级修复工艺，为您的心爱之物赋予二次生命。</p>
            <motion.button 
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/evaluation/step1')}
              className="bg-primary-container text-white px-8 py-3 rounded-xl font-label-md tracking-widest flex items-center gap-2 w-max shadow-lg"
            >
              开启修复
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="px-5 mt-10 grid grid-cols-4 gap-4">
        {[
          { label: '在线评估', icon: LineChart, path: '/evaluation/step1' },
          { label: '到店寄修', icon: Store, path: '/studios' },
          { label: '我的委托', icon: ClipboardList, path: '/commissions' },
          { label: '匠人名录', icon: Users, path: '/artisans' }
        ].map((action) => (
          <motion.button 
            key={action.label}
            whileTap={{ scale: 0.9 }}
            onClick={() => navigate(action.path)}
            className="flex flex-col items-center gap-2 group"
          >
            <div className="w-14 h-14 rounded-full bg-surface-container-high flex items-center justify-center text-primary group-hover:bg-primary-container group-hover:text-white transition-colors">
              <action.icon className="w-6 h-6 stroke-[1.5]" />
            </div>
            <span className="text-[13px] font-label-md text-on-surface-variant group-hover:text-primary transition-colors">{action.label}</span>
          </motion.button>
        ))}
      </section>

      {/* Featured Cases */}
      <section className="mt-12">
        <div className="px-5 flex justify-between items-end mb-6">
          <div>
            <h3 className="font-headline-md text-xl text-on-surface">修复案例</h3>
            <p className="font-caption text-secondary">赋予破碎以新生之美</p>
          </div>
          <button className="font-label-md text-primary flex items-center gap-1 text-sm">
            查看全部 <ChevronRight className="w-4 h-4" />
          </button>
        </div>
        <div className="flex overflow-x-auto gap-5 px-5 no-scrollbar snap-x pb-4">
          {CASES.map((item) => (
            <div key={item.id} className="min-w-[280px] snap-start bg-surface-container-lowest rounded-2xl overflow-hidden border border-outline-variant/10 neo-shadow">
              <div className="grid grid-cols-2 h-44">
                <div className="relative">
                  <img className="w-full h-full object-cover" src={item.beforeImage} />
                  <span className="absolute top-2 left-2 bg-black/40 backdrop-blur-md text-white text-[10px] px-2 py-0.5 rounded font-label-md">BEFORE</span>
                </div>
                <div className="relative">
                  <img className="w-full h-full object-cover" src={item.afterImage} />
                  <span className="absolute top-2 left-2 bg-primary/80 backdrop-blur-md text-white text-[10px] px-2 py-0.5 rounded font-label-md">AFTER</span>
                </div>
              </div>
              <div className="p-4">
                <h4 className="font-headline-md text-lg mb-1">{item.title}</h4>
                <div className="flex items-center gap-2">
                  <span className="bg-primary/10 text-primary text-[10px] px-2 py-0.5 rounded-full font-label-md">{item.category}</span>
                  <span className="text-[11px] text-secondary">{item.duration}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Dynamic Activity */}
      <section className="px-5 mt-10">
        <div className="flex justify-between items-end mb-6">
          <div>
            <h3 className="font-headline-md text-xl text-on-surface">附近藏家动态</h3>
            <p className="font-caption text-secondary">发现周边的修复灵感</p>
          </div>
          <button className="font-label-md text-primary flex items-center gap-1 text-sm">
            更多 <ChevronRight className="w-4 h-4" />
          </button>
        </div>
        <div className="space-y-6">
          {DYNAMIC_UPDATES.map((update) => (
            <div key={update.id} className="bg-surface-container-lowest rounded-3xl p-5 border border-outline-variant/5 neo-shadow">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <img className="w-10 h-10 rounded-full object-cover shadow-sm" src={update.user.avatar} />
                  <div>
                    <h4 className="font-label-md text-on-surface text-sm">{update.user.name}</h4>
                    <p className="text-[10px] text-secondary">{update.user.location} · {update.user.time}</p>
                  </div>
                </div>
                <span className="bg-surface-container text-on-surface-variant text-[10px] px-2 py-1 rounded-full font-label-md">{update.type}</span>
              </div>
              <p className="font-body-md text-on-surface/90 text-sm mb-4 leading-relaxed">{update.content}</p>
              <div className="grid grid-cols-2 gap-2 rounded-2xl overflow-hidden h-40">
                {update.images.map((img, idx) => (
                  <img key={idx} className="w-full h-full object-cover" src={img} />
                ))}
              </div>
              <div className="flex items-center gap-6 mt-5">
                <button className="flex items-center gap-1.5 text-secondary text-[12px]">
                  <Heart className="w-4 h-4" /> {update.stats.likes}
                </button>
                <button className="flex items-center gap-1.5 text-secondary text-[12px]">
                  <MessageCircle className="w-4 h-4" /> {update.stats.comments}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <BottomNavBar />
    </div>
  );
}
