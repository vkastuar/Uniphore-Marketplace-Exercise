import React, { useState, useEffect, useRef } from 'react';
import {
  Search, LogOut, Grid, Cpu, Activity, Database, ShieldAlert, BarChart3,
  Building2, Phone, BriefcaseMedical, Store, BookOpen, ChevronDown,
} from 'lucide-react';
import './marketplace.css';
import '../auth/auth.css';
import MarketplaceDashboard from './MarketplaceDashboard';
import AgentDetailView from './AgentDetailView';
import { useAuth } from '../../contexts/AuthContext';

interface MarketplaceAppProps {
  onExit: () => void;
}

const getInitials = (displayName: string | null, email: string | null): string => {
  if (displayName) return displayName.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase();
  return email ? email[0].toUpperCase() : '?';
};

const getProviderLabel = (providerId: string): string => {
  if (providerId === 'google.com')   return 'via Google';
  if (providerId === 'facebook.com') return 'via Facebook';
  return 'via Email';
};

const MarketplaceApp: React.FC<MarketplaceAppProps> = ({ onExit }) => {
  const { user, logout } = useAuth();
  const [activeView, setActiveView]       = useState<'dashboard' | 'detail'>('dashboard');
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeVertical, setActiveVertical] = useState('all-v');
  const [showDropdown, setShowDropdown]   = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!showDropdown) return;
    const handleClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [showDropdown]);

  const initials     = getInitials(user?.displayName ?? null, user?.email ?? null);
  const providerLabel = getProviderLabel(user?.providerData[0]?.providerId ?? '');

  return (
    <div className="marketplace-container" style={{ animation: 'fadeIn 0.3s ease' }}>

      {/* Sidebar */}
      <aside className="mp-sidebar">
        <div className="mp-sidebar-header">
          <Store size={24} color="#2563eb" />
          <h1>Uniphore BCAI</h1>
        </div>

        <div className="mp-nav">
          <div className="mp-nav-section">
            <div className="mp-nav-title">Discover</div>
            <div className={`mp-nav-item ${activeCategory === 'all' ? 'active' : ''}`} onClick={() => { setActiveCategory('all'); setActiveView('dashboard'); }}>
              <Grid size={18} /> All Assets
            </div>
            <div className={`mp-nav-item ${activeCategory === 'agents-templates' ? 'active' : ''}`} onClick={() => setActiveCategory('agents-templates')}>
              <Activity size={18} /> Agents and Agent Templates
            </div>
            <div className={`mp-nav-item ${activeCategory === 'slms' ? 'active' : ''}`} onClick={() => setActiveCategory('slms')}>
              <Cpu size={18} /> Domain SLMs
            </div>
            <div className={`mp-nav-item ${activeCategory === 'connectors' ? 'active' : ''}`} onClick={() => setActiveCategory('connectors')}>
              <Database size={18} /> Data Connectors
            </div>
            <div className={`mp-nav-item ${activeCategory === 'knowledge' ? 'active' : ''}`} onClick={() => setActiveCategory('knowledge')}>
              <BookOpen size={18} /> Knowledge Templates
            </div>
            <div className={`mp-nav-item ${activeCategory === 'plugins' ? 'active' : ''}`} onClick={() => setActiveCategory('plugins')}>
              <ShieldAlert size={18} /> Plugins
            </div>
          </div>

          <div className="mp-nav-section">
            <div className="mp-nav-title">Verticals</div>
            <div className={`mp-nav-item ${activeVertical === 'all-v' ? 'active' : ''}`} onClick={() => setActiveVertical('all-v')}>
              <BarChart3 size={18} /> Cross-Industry
            </div>
            <div className={`mp-nav-item ${activeVertical === 'bfsi' ? 'active' : ''}`} onClick={() => setActiveVertical('bfsi')}>
              <Building2 size={18} /> BFSI
            </div>
            <div className={`mp-nav-item ${activeVertical === 'telecom' ? 'active' : ''}`} onClick={() => setActiveVertical('telecom')}>
              <Phone size={18} /> Telecommunications
            </div>
            <div className={`mp-nav-item ${activeVertical === 'health' ? 'active' : ''}`} onClick={() => setActiveVertical('health')}>
              <BriefcaseMedical size={18} /> Healthcare
            </div>
          </div>
        </div>

        <div style={{ padding: '1rem', borderTop: '1px solid #e2e8f0' }}>
          <button
            onClick={onExit}
            style={{ width: '100%', padding: '0.75rem', background: '#f1f5f9', border: '1px solid #cbd5e1', borderRadius: '0.5rem', color: '#475569', fontWeight: 600, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', cursor: 'pointer' }}
          >
            <LogOut size={16} />
            Exit Marketplace
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="mp-main">

        {/* Topbar */}
        <div className="mp-topbar">
          <div className="mp-search">
            <Search size={18} color="#94a3b8" />
            <input type="text" placeholder="Search templates, SLMs, partners..." />
          </div>

          {/* User dropdown */}
          <div className="auth-topbar-user" ref={dropdownRef}>
            <button className="auth-topbar-trigger" onClick={() => setShowDropdown(d => !d)} aria-label="Account menu">
              <div style={{ textAlign: 'right', marginRight: '0.25rem' }}>
                <div style={{ fontSize: '0.78rem', color: '#0f172a', fontWeight: 600, lineHeight: 1.2 }}>
                  {user?.displayName ?? user?.email ?? 'Account'}
                </div>
                <div style={{ fontSize: '0.7rem', color: '#64748b' }}>{providerLabel}</div>
              </div>
              <div className="auth-topbar-avatar">
                {user?.photoURL
                  ? <img src={user.photoURL} alt={user.displayName ?? 'User'} referrerPolicy="no-referrer" />
                  : <span>{initials}</span>
                }
              </div>
              <ChevronDown size={14} className="auth-topbar-chevron" />
            </button>

            {showDropdown && (
              <div className="auth-dropdown">
                <div className="auth-dropdown-header">
                  <div className="auth-dropdown-name">{user?.displayName ?? 'User'}</div>
                  <div className="auth-dropdown-email">{user?.email}</div>
                  <div className="auth-dropdown-provider">{providerLabel}</div>
                </div>
                <button className="auth-dropdown-logout" onClick={async () => { setShowDropdown(false); await logout(); }}>
                  <LogOut size={15} /> Sign out
                </button>
              </div>
            )}
          </div>
        </div>

        {/* View Router */}
        <div className="mp-content">
          {activeView === 'dashboard' ? (
            <MarketplaceDashboard
              onSelectAgent={() => setActiveView('detail')}
              activeCategory={activeCategory}
              activeVertical={activeVertical}
            />
          ) : (
            <AgentDetailView onBack={() => setActiveView('dashboard')} />
          )}
        </div>
      </main>

    </div>
  );
};

export default MarketplaceApp;
