import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { CatalogProvider } from './context/catalog';
import { Screen } from './types';
import { 
  SplashScreen, 
  IdentityScreen, 
  HomeScreen, 
  AssessmentScreen, 
  SchemeScreen, 
  ProgressScreen,
  ScanScreen
} from './Screens';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>(Screen.Splash);

  const navigateTo = (screen: Screen) => {
    setCurrentScreen(screen);
    window.scrollTo(0, 0);
  };

  return (
    <CatalogProvider>
    <div className="relative min-h-screen">
      <AnimatePresence mode="wait">
        {currentScreen === Screen.Splash && (
          <motion.div
            key="splash"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <SplashScreen onComplete={() => navigateTo(Screen.Identity)} />
          </motion.div>
        )}

        {currentScreen === Screen.Identity && (
          <motion.div
            key="identity"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <IdentityScreen onSelect={() => navigateTo(Screen.Home)} />
          </motion.div>
        )}

        {currentScreen === Screen.Home && (
          <motion.div
            key="home"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            <HomeScreen onScan={() => navigateTo(Screen.Scan)} onNavigate={navigateTo} />
          </motion.div>
        )}

        {currentScreen === Screen.Scan && (
          <motion.div
            key="scan"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ScanScreen onClose={() => navigateTo(Screen.Home)} onCapture={() => navigateTo(Screen.Assessment)} />
          </motion.div>
        )}

        {currentScreen === Screen.Assessment && (
          <motion.div
            key="assessment"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4 }}
          >
            <AssessmentScreen onNext={() => navigateTo(Screen.Scheme)} onNavigate={navigateTo} />
          </motion.div>
        )}

        {currentScreen === Screen.Scheme && (
          <motion.div
            key="scheme"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4 }}
          >
            <SchemeScreen onSelect={() => navigateTo(Screen.Progress)} onNavigate={navigateTo} />
          </motion.div>
        )}

        {currentScreen === Screen.Progress && (
          <motion.div
            key="progress"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            <ProgressScreen onNavigate={navigateTo} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
    </CatalogProvider>
  );
}

