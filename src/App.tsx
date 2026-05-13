import { useState } from 'react';
import { Screen } from './types';
import { SplashScreen, IdentityScreen, HomeScreen, AssessmentScreen, SchemeScreen, ProgressScreen, ScanScreen, ProfileScreen, HomeFeatureCallback } from './Screens';
import { EvaluationStep1, EvaluationStep2, EvaluationStep3 } from './views/EvaluationFlow';
import { CommissionListView } from './views/CommissionListView';
import { ArtisanDirectoryView } from './views/ArtisanDirectoryView';
import { StudioSelectionView } from './views/StudioSelectionView';
import { ShipmentView } from './views/ShipmentView';
import { LabelSuccessView } from './views/LabelSuccessView';

// 所有页面路径
type RouteKey = 
  | 'splash' | 'identity' | 'home' | 'assessment' | 'scheme' | 'progress' | 'scan' | 'profile'
  | 'evaluationStep1' | 'evaluationStep2' | 'evaluationStep3'
  | 'commissions' | 'artisans' | 'studios' | 'shipment' | 'success';

const ROUTES: Record<RouteKey, RouteKey> = {
  splash: 'splash',
  identity: 'identity',
  home: 'home',
  assessment: 'assessment',
  scheme: 'scheme',
  progress: 'progress',
  scan: 'scan',
  profile: 'profile',
  evaluationStep1: 'evaluationStep1',
  evaluationStep2: 'evaluationStep2',
  evaluationStep3: 'evaluationStep3',
  commissions: 'commissions',
  artisans: 'artisans',
  studios: 'studios',
  shipment: 'shipment',
  success: 'success',
};

// 新功能页面列表
const ROUTE_PAGES: RouteKey[] = [
  'evaluationStep1', 'evaluationStep2', 'evaluationStep3',
  'commissions', 'artisans', 'studios', 'shipment', 'success'
];

export default function App() {
  const [currentRoute, setCurrentRoute] = useState<RouteKey>(ROUTES.home);
  
  // 检查是否是新的功能页面
  const isRoutePage = ROUTE_PAGES.includes(currentRoute);

  // 跳转到原始 screen 页面
  const navigateTo = (screen: Screen) => {
    switch (screen) {
      case Screen.Splash: setCurrentRoute(ROUTES.splash); break;
      case Screen.Identity: setCurrentRoute(ROUTES.identity); break;
      case Screen.Home: setCurrentRoute(ROUTES.home); break;
      case Screen.Assessment: setCurrentRoute(ROUTES.assessment); break;
      case Screen.Scheme: setCurrentRoute(ROUTES.scheme); break;
      case Screen.Progress: setCurrentRoute(ROUTES.progress); break;
      case Screen.Scan: setCurrentRoute(ROUTES.scan); break;
      case Screen.Profile: setCurrentRoute(ROUTES.profile); break;
    }
    window.scrollTo(0, 0);
  };

  // 跳转到新功能路由页面
  const navigateToRoute = (route: RouteKey) => {
    setCurrentRoute(route);
    window.scrollTo(0, 0);
  };

  // 返回到首页
  const goHome = () => {
    setCurrentRoute(ROUTES.home);
    window.scrollTo(0, 0);
  };

  // 首页功能导航回调
  const handleHomeFeature: HomeFeatureCallback = (feature) => {
    switch (feature) {
      case 'evaluation': navigateToRoute(ROUTES.evaluationStep1); break;
      case 'studios': navigateToRoute(ROUTES.studios); break;
      case 'commissions': navigateToRoute(ROUTES.commissions); break;
      case 'artisans': navigateToRoute(ROUTES.artisans); break;
    }
  };

  // 新功能页面
  if (isRoutePage) {
    switch (currentRoute) {
      case 'evaluationStep1':
        return <EvaluationStep1 onNext={() => navigateToRoute('evaluationStep2')} onBack={goHome} />;
      case 'evaluationStep2':
        return <EvaluationStep2 onNext={() => navigateToRoute('evaluationStep3')} onBack={() => navigateToRoute('evaluationStep1')} />;
      case 'evaluationStep3':
        return <EvaluationStep3 onBack={goHome} />;
      case 'commissions':
        return <CommissionListView onBack={goHome} />;
      case 'artisans':
        return <ArtisanDirectoryView onBack={goHome} />;
      case 'studios':
        return <StudioSelectionView onNext={() => navigateToRoute('shipment')} onBack={goHome} />;
      case 'shipment':
        return <ShipmentView onNext={() => navigateToRoute('success')} onBack={() => navigateToRoute('studios')} />;
      case 'success':
        return <LabelSuccessView onNext={goHome} onBack={goHome} />;
      default:
        return <HomeScreen onScan={() => navigateTo(Screen.Scan)} onNavigate={navigateTo} onFeatureNavigate={handleHomeFeature} />;
    }
  }

  // 原始页面
  switch (currentRoute) {
    case 'splash':
      return <SplashScreen onComplete={() => setCurrentRoute(ROUTES.identity)} />;
    case 'identity':
      return <IdentityScreen onSelect={() => setCurrentRoute(ROUTES.home)} />;
    case 'home':
      return <HomeScreen onScan={() => navigateTo(Screen.Scan)} onNavigate={navigateTo} onFeatureNavigate={handleHomeFeature} />;
    case 'scan':
      return <ScanScreen onClose={() => navigateTo(Screen.Home)} onCapture={() => navigateTo(Screen.Assessment)} />;
    case 'assessment':
      return <AssessmentScreen onNext={() => navigateTo(Screen.Scheme)} onNavigate={navigateTo} />;
    case 'scheme':
      return <SchemeScreen onSelect={() => navigateTo(Screen.Progress)} onNavigate={navigateTo} />;
    case 'progress':
      return <ProgressScreen onNavigate={navigateTo} />;
    case 'profile':
      return <ProfileScreen onNavigate={navigateTo} />;
    default:
      return <HomeScreen onScan={() => navigateTo(Screen.Scan)} onNavigate={navigateTo} onFeatureNavigate={handleHomeFeature} />;
  }
}
