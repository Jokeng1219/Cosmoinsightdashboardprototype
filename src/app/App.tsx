import React, { useState } from 'react';
import { Header } from './components/Dashboard/Header';
import { Navigation } from './components/Dashboard/Navigation';
import { IdentityCard } from './components/Dashboard/IdentityCard';
import { MarketValueChart } from './components/Dashboard/MarketValueChart';
import { RiskAnalysis } from './components/Dashboard/RiskAnalysis';
import { CompetencyRadar } from './components/Dashboard/CompetencyRadar';
import { GrowthPlan } from './components/Dashboard/GrowthPlan';
import { motion, AnimatePresence } from 'motion/react';

type Tab = 'home' | 'insight' | 'learning' | 'profile';

export default function App() {
  const [activeTab, setActiveTab] = useState<Tab>('insight');

  return (
    <div className="min-h-screen bg-[#1A1A1A] text-foreground font-sans overflow-x-hidden">
      <Header />
      
      <main className="pt-20 pb-28 px-4 max-w-md mx-auto min-h-screen">
        <AnimatePresence mode="wait">
          {activeTab === 'insight' ? (
            <motion.div
              key="insight"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-4"
            >
              <IdentityCard />
              <MarketValueChart />
              <RiskAnalysis />
              <CompetencyRadar />
              <GrowthPlan />
            </motion.div>
          ) : (
            <motion.div
              key="other"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex items-center justify-center h-[60vh] text-muted-foreground"
            >
              <div className="text-center">
                <p className="text-lg font-medium capitalize">{activeTab} Page</p>
                <p className="text-sm mt-2">Under Construction</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <Navigation activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
}
