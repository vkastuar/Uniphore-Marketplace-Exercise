import React, { useState } from 'react';
import { Search, LogOut, Grid, Cpu, Activity, Database, ShieldAlert, BarChart3, Building2, Phone, BriefcaseMedical, Store, BookOpen } from 'lucide-react';
import './marketplace.css';
import MarketplaceDashboard from './MarketplaceDashboard';
import AgentDetailView from './AgentDetailView';

interface MarketplaceAppProps {
  onExit: () => void;
}

const MarketplaceApp: React.FC<MarketplaceAppProps> = ({ onExit }) => {
  const [activeView, setActiveView] = useState<'dashboard' | 'detail'>('dashboard');
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeVertical, setActiveVertical] = useState('all-v');
  const [selectedAsset, setSelectedAsset] = useState<{ title: string; vendor: string; type: string; desc: string } | null>(null);

  return (
    <div className="marketplace-container" style={{ animation: 'fadeIn 0.3s ease' }}>

      {/* Sidebar */}
      <aside className="mp-sidebar">
        <div className="mp-sidebar-header">
          <Store size={24} color="#2563eb" />
          <h1>Uniphore BAIC</h1>
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
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontSize: '0.8rem', color: '#64748b', fontWeight: 600 }}>Acme Insurance</div>
              <div style={{ fontSize: '0.8rem', color: '#2563eb', fontWeight: 700 }}>$1.0M Credit Commit</div>
            </div>
            <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: '#1e293b', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>
              AC
            </div>
          </div>
        </div>

        {/* View Router */}
        <div className="mp-content">
          {activeView === 'dashboard' ? (
            <MarketplaceDashboard
              onSelectAgent={(asset) => { setSelectedAsset(asset); setActiveView('detail'); }}
              activeCategory={activeCategory}
              activeVertical={activeVertical}
            />
          ) : (
            <AgentDetailView
              onBack={() => setActiveView('dashboard')}
              asset={selectedAsset ?? { title: '', vendor: '', type: '', desc: '' }}
            />
          )}
        </div>
      </main>

    </div>
  );
};

export default MarketplaceApp;
