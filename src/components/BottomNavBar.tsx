import { motion } from 'motion/react';
import { Home, Hammer, Scan, Sparkles, User } from 'lucide-react';
import { cn } from '../lib/utils';

interface BottomNavBarProps {
  currentPath?: string;
  onNavigate?: (path: string) => void;
}

export function BottomNavBar({ currentPath = '/', onNavigate }: BottomNavBarProps) {
  const navItems = [
    { label: '首页', icon: Home, path: '/' },
    { label: '工坊', icon: Hammer, path: '/artisans' },
    { label: '扫描', icon: Scan, path: '/scan', isMain: true },
    { label: '灵感', icon: Sparkles, path: '/inspiration' },
    { label: '我的', icon: User, path: '/commissions' },
  ];

  const handleNavigate = (path: string) => {
    if (onNavigate) {
      onNavigate(path);
    }
  };

  return (
    <nav className="fixed bottom-0 left-0 w-full flex justify-around items-end px-4 py-3 pb-[calc(12px+env(safe-area-inset-bottom))] bg-surface/90 backdrop-blur-md z-50 rounded-t-2xl shadow-[0_-4px_30px_rgba(51,51,51,0.03)] border-t border-outline-variant/10">
      {navItems.map((item) => {
        const isActive = currentPath === item.path;
        const Icon = item.icon;

        if (item.isMain) {
          return (
            <div key={item.path} className="flex flex-col items-center justify-center -mt-8 mx-2">
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => handleNavigate(item.path)}
                className="w-16 h-16 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#C9A962] shadow-[0_4px_15px_rgba(212,175,55,0.4)] flex items-center justify-center relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/20 animate-pulse" />
                <Icon className="text-white w-8 h-8 relative z-10" strokeWidth={1.5} />
              </motion.button>
              <span className="mt-2 text-[12px] text-secondary font-label-md tracking-wider">立即扫描</span>
            </div>
          );
        }

        return (
          <button
            key={item.path}
            onClick={() => handleNavigate(item.path)}
            className={cn(
              "flex flex-col items-center justify-center transition-all duration-300 px-2",
              isActive ? "text-primary scale-110" : "text-secondary opacity-60 hover:opacity-100"
            )}
          >
            <Icon className="w-6 h-6 mb-1" strokeWidth={1.5} fill={isActive ? "currentColor" : "none"} />
            <span className="font-label-md text-[12px]">{item.label}</span>
          </button>
        );
      })}
    </nav>
  );
}
