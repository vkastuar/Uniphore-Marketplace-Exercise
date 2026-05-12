import { useState } from 'react';
import { 
  FileText, 
  Globe, 
  BarChart3, 
  Swords, 
  Lightbulb, 
  Rocket 
} from 'lucide-react';
import './App.css';

// We will import these components later
import PromptView from './components/views/PromptView';
import OverviewView from './components/views/OverviewView';
import MarketAnalysisView from './components/views/MarketAnalysisView';
import CompetitiveAnalysisView from './components/views/CompetitiveAnalysisView';
import StrategyView from './components/views/StrategyView';
import MVPView from './components/views/MVPView';

type ViewType = 'prompt' | 'overview' | 'market' | 'competitive' | 'strategy' | 'mvp';

function App() {
  const [activeView, setActiveView] = useState<ViewType>('prompt');

  const navItems = [
    { id: 'prompt', label: 'Exercise Prompt', icon: FileText },
    { id: 'overview', label: 'Uniphore Overview', icon: Globe },
    { id: 'market', label: 'Market Analysis', icon: BarChart3 },
    { id: 'competitive', label: 'Competitive Analysis', icon: Swords },
    { id: 'strategy', label: 'Business AI Strategy', icon: Lightbulb },
    { id: 'mvp', label: 'MVP Definition', icon: Rocket },
  ] as const;

  const renderView = () => {
    switch (activeView) {
      case 'prompt': return <PromptView />;
      case 'overview': return <OverviewView />;
      case 'market': return <MarketAnalysisView />;
      case 'competitive': return <CompetitiveAnalysisView />;
      case 'strategy': return <StrategyView />;
      case 'mvp': return <MVPView />;
      default: return <PromptView />;
    }
  };

  return (
    <div className="app-container">
      <aside className="sidebar">
        <div className="sidebar-header">
          <h1 className="sidebar-title">Uniphore BCAI</h1>
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
      </aside>
      
      <main className="main-content">
        {renderView()}
      </main>
    </div>
  );
}

export default App;
