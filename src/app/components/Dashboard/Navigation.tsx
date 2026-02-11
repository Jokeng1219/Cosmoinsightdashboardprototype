import React from 'react';
import { motion } from 'motion/react';
import { Home, BarChart2, BookOpen, User } from 'lucide-react';
import { clsx } from 'clsx';

type Tab = 'home' | 'insight' | 'learning' | 'profile';

interface NavigationProps {
  activeTab: Tab;
  onTabChange: (tab: Tab) => void;
}

export const Navigation: React.FC<NavigationProps> = ({ activeTab, onTabChange }) => {
  const tabs = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'insight', label: 'Insight', icon: BarChart2 },
    { id: 'learning', label: 'Learning', icon: BookOpen },
    { id: 'profile', label: 'Profile', icon: User },
  ] as const;

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-[#1A1A1A] border-t border-[#333333] pb-4 safe-area-bottom">
      <div className="flex items-center justify-around h-16 px-2">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <motion.button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className="flex flex-col items-center justify-center w-full h-full space-y-1"
              whileTap={{ scale: 0.95 }}
            >
              <tab.icon
                size={24}
                className={clsx(
                  "transition-colors duration-200",
                  isActive ? "text-accent" : "text-muted-foreground"
                )}
              />
              <span
                className={clsx(
                  "text-[10px] font-medium transition-colors duration-200",
                  isActive ? "text-accent" : "text-muted-foreground"
                )}
              >
                {tab.label}
              </span>
            </motion.button>
          );
        })}
      </div>
    </nav>
  );
};
