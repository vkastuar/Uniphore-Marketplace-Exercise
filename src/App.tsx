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
  LogOut,
} from 'lucide-react';
import './App.css';
import './components/auth/auth.css';

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
import { AuthProvider, useAuth } from './contexts/AuthContext';
import AuthPage from './components/auth/AuthPage';

type ViewType = 'prompt' | 'overview' | 'market' | 'competitive' | 'strategy' | 'mvp' | 'gtm' | 'pricing' | 'journey';
type AppMode = 'presentation' | 'marketplace';

const getInitials = (displayName: string | null, email: string | null): string => {
  if (displayName) {
    return displayName.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase();
  }
  return email ? email[0].toUpperCase() : '?';
};

function AppContent() {
  const { user, loading, logout } = useAuth();
  const [appMode, setAppMode] = useState<AppMode>('presentation');
  const [activeView, setActiveView] = useState<ViewType>('prompt');

  if (loading) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#032D60' }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ width: '38px', height: '38px', border: '3px solid rgba(255,255,255,0.2)', borderTopColor: 'white', borderRadius: '50%', animation: 'spin 0.8s linear infinite', margin: '0 auto 0.875rem' }} />
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.85rem', margin: 0 }}>Loading…</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return <AuthPage />;
  }

  const navItems = [
    { id: 'prompt',      label: 'Exercise Prompt',      icon: FileText   },
    { id: 'overview',    label: 'Uniphore Overview',    icon: Globe      },
    { id: 'market',      label: 'Market Analysis',      icon: BarChart3  },
    { id: 'competitive', label: 'Competitive Analysis', icon: Swords     },
    { id: 'strategy',    label: 'Marketplace Strategy', icon: Lightbulb  },
    { id: 'gtm',         label: 'Marketplace GTM',      icon: TrendingUp },
    { id: 'pricing',     label: 'Pricing Strategy',     icon: DollarSign },
    { id: 'journey',     label: 'Customer Journey',     icon: Route      },
    { id: 'mvp',         label: 'MVP Definition',       icon: Rocket     },
  ] as const;

  const renderView = () => {
    switch (activeView) {
      case 'prompt':      return <PromptView />;
      case 'overview':    return <OverviewView />;
      case 'market':      return <MarketAnalysisView />;
      case 'competitive': return <CompetitiveAnalysisView />;
      case 'strategy':    return <StrategyView />;
      case 'mvp':         return <MVPView onLaunchPrototype={() => setAppMode('marketplace')} />;
      case 'gtm':         return <GTMView />;
      case 'pricing':     return <PricingView />;
      case 'journey':     return <CustomerJourneyView />;
      default:            return <PromptView />;
    }
  };

  if (appMode === 'marketplace') {
    return <MarketplaceApp onExit={() => setAppMode('presentation')} />;
  }

  const initials = getInitials(user.displayName, user.email);

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

        {/* User profile — pushed to bottom by marginTop: auto */}
        <div className="auth-user-panel" style={{ marginTop: 'auto' }}>
          <div className="auth-avatar">
            {user.photoURL
              ? <img src={user.photoURL} alt={user.displayName ?? 'User'} referrerPolicy="no-referrer" />
              : <span>{initials}</span>
            }
          </div>
          <div className="auth-user-info">
            <div className="auth-user-name">{user.displayName ?? user.email}</div>
            {user.displayName && <div className="auth-user-email">{user.email}</div>}
          </div>
          <button className="auth-logout-icon-btn" onClick={logout} title="Sign out" aria-label="Sign out">
            <LogOut size={13} />
          </button>
        </div>

        <div style={{ padding: '0.75rem 1.25rem 1.25rem' }}>
          <button
            className="primary-button"
            style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', fontSize: '0.95rem', fontWeight: 700, padding: '0.7rem 1rem' }}
            onClick={() => setAppMode('marketplace')}
          >
            <Rocket size={18} />
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

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;
