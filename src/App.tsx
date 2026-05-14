import { useState } from 'react';
import {
  FileText,
  Globe,
  BarChart3,
  Swords,
  Lightbulb,
  Rocket,
  TrendingUp,
  DollarSign,
  Route,
} from 'lucide-react';
import './App.css';

// We will import these components later
import PromptView from './components/views/PromptView';
import OverviewView from './components/views/OverviewView';
import MarketAnalysisView from './components/views/MarketAnalysisView';
import CompetitiveAnalysisView from './components/views/CompetitiveAnalysisView';
import StrategyView from './components/views/StrategyView';
import MVPView from './components/views/MVPView';
import GTMView from './components/views/GTMView';
import PricingView from './components/views/PricingView';
import CustomerJourneyView from './components/views/CustomerJourneyView';
import MarketplaceApp from './components/marketplace/MarketplaceApp';

type ViewType = 'prompt' | 'overview' | 'market' | 'competitive' | 'strategy' | 'mvp' | 'gtm' | 'pricing' | 'journey';
type AppMode = 'presentation' | 'marketplace';

function App() {
  const [appMode, setAppMode] = useState<AppMode>('presentation');
  const [activeView, setActiveView] = useState<ViewType>('prompt');

  const navItems = [
    { id: 'prompt', label: 'Exercise Prompt', icon: FileText },
    { id: 'overview', label: 'Uniphore Overview', icon: Globe },
    { id: 'market', label: 'Market Analysis', icon: BarChart3 },
    { id: 'competitive', label: 'Competitive Analysis', icon: Swords },
    { id: 'strategy', label: 'Marketplace Strategy', icon: Lightbulb },
    { id: 'gtm', label: 'Marketplace GTM', icon: TrendingUp },
    { id: 'pricing', label: 'Pricing Strategy', icon: DollarSign },
    { id: 'journey', label: 'Customer Journey', icon: Route },
    { id: 'mvp', label: 'MVP Definition', icon: Rocket },
  ] as const;

  const renderView = () => {
    switch (activeView) {
      case 'prompt': return <PromptView />;
      case 'overview': return <OverviewView />;
      case 'market': return <MarketAnalysisView />;
      case 'competitive': return <CompetitiveAnalysisView />;
      case 'strategy': return <StrategyView />;
      case 'mvp': return <MVPView onLaunchPrototype={() => setAppMode('marketplace')} />;
      case 'gtm': return <GTMView />;
      case 'pricing': return <PricingView />;
      case 'journey': return <CustomerJourneyView />;
      default: return <PromptView />;
    }
  };

  if (appMode === 'marketplace') {
    return <MarketplaceApp onExit={() => setAppMode('presentation')} />;
  }

  return (
    <div className="app-container">
      <aside className="sidebar">
        <div className="sidebar-header">
          <h1 className="sidebar-title">Uniphore BAIC</h1>
          <p className="sidebar-subtitle">PM Strategy Exercise</p>
        </div>
        <nav className="nav-menu">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <div 
                key={item.id}
                className={`nav-item ${activeView === item.id ? 'active' : ''}`}
                onClick={() => setActiveView(item.id as ViewType)}
              >
                <Icon className="nav-icon" />
                <span>{item.label}</span>
              </div>
            );
          })}
        </nav>
        
        <div style={{ marginTop: 'auto', padding: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
           <button
             className="primary-button"
             style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', fontSize: '1rem', fontWeight: 700, padding: '0.75rem 1rem' }}
             onClick={() => setAppMode('marketplace')}
           >
             <Rocket size={20} />
             Launch Prototype
           </button>
        </div>
      </aside>
      
      <main className="main-content">
        {renderView()}
      </main>
    </div>
  );
}

export default App;
