import { motion } from 'motion/react';
import { ArrowLeft, Bell, Search, Info } from 'lucide-react';
import { cn } from '../lib/utils';

interface TopAppBarProps {
  title: string;
  showBack?: boolean;
  showSearch?: boolean;
  showNotifications?: boolean;
  showHelp?: boolean;
  onBack?: () => void;
  className?: string;
}

export function TopAppBar({ 
  title, 
  showBack = false, 
  showSearch = false, 
  showNotifications = false,
  showHelp = false,
  onBack,
  className 
}: TopAppBarProps) {
  return (
    <header className={cn(
      "fixed top-0 w-full z-50 h-16 bg-surface/80 backdrop-blur-lg border-b border-outline-variant/30 flex justify-between items-center px-5",
      className
    )}>
      <div className="flex items-center gap-4">
        {showBack && (
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={onBack}
            className="p-1"
          >
            <ArrowLeft className="text-primary w-6 h-6" strokeWidth={2} />
          </motion.button>
        )}
        <h1 className="font-headline-md text-[20px] text-primary tracking-widest">{title}</h1>
      </div>
      
      <div className="flex items-center gap-3">
        {showSearch && (
          <motion.button whileTap={{ scale: 0.9 }} className="p-2">
            <Search className="text-primary w-6 h-6" strokeWidth={1.5} />
          </motion.button>
        )}
        {showNotifications && (
          <motion.button whileTap={{ scale: 0.9 }} className="p-2 relative">
            <Bell className="text-primary w-6 h-6" strokeWidth={1.5} />
            <span className="absolute top-2 right-2 w-2 h-2 bg-primary-container rounded-full" />
          </motion.button>
        )}
        {showHelp && (
          <motion.button whileTap={{ scale: 0.9 }} className="p-2">
            <Info className="text-primary w-6 h-6" strokeWidth={1.5} />
          </motion.button>
        )}
      </div>
    </header>
  );
}
