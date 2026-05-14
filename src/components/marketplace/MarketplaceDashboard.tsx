import React, { useState } from 'react';
import { ShieldCheck, Cpu, ArrowRight, Activity, FileText, Database, ShieldAlert, ChevronLeft, ChevronRight } from 'lucide-react';
import './marketplace.css';

interface MarketplaceDashboardProps {
  onSelectAgent: () => void;
}

const heroAssets = [
  {
    tag: 'BFSI · Insurance',
    title: 'Automate 80% of Inbound Claims.',
    description: 'The Auto-Claims Resolution Agent by Cognizant instantly extracts data from FNOL emails, validates against your legacy mainframes, and drafts responses — fully sovereign, zero cloud exposure.',
    builtBy: 'Cognizant',
    cost: '$0.00 (Consumption Only)',
  },
  {
    tag: 'Banking',
    title: 'Cut KYC Onboarding Time by 70%.',
    description: 'The KYC Onboarding Orchestration Agent by KPMG automates identity verification, document validation, and regulatory screening — reducing manual review overhead and accelerating customer onboarding.',
    builtBy: 'KPMG',
    cost: '$0.00 (Consumption Only)',
  },
  {
    tag: 'Healthcare',
    title: 'Resolve Prior Auth in Minutes, Not Days.',
    description: 'The Patient Prior Authorization Agent by Infosys integrates with Epic EMR, automatically structures clinical documentation, and submits to payer portals for instant authorization decisions.',
    builtBy: 'Infosys',
    cost: '$0.00 (Consumption Only)',
  },
];

const templates = [
  { id: 1, title: 'KYC Onboarding Workflow', vendor: 'KPMG', vertical: 'Banking', icon: Activity, type: 'Agent Template', color: '#10b981', bg: '#ecfdf5' },
  { id: 2, title: 'Network Outage Predictor', vendor: 'Infosys', vertical: 'Telecom', icon: Activity, type: 'Agent Template', color: '#8b5cf6', bg: '#f5f3ff' },
  { id: 3, title: 'Epic EMR Sync', vendor: 'Uniphore', vertical: 'Healthcare', icon: Database, type: 'Data Connector', color: '#3b82f6', bg: '#eff6ff' },
  { id: 4, title: 'GDPR PII Redactor', vendor: 'Deloitte', vertical: 'Cross-Industry', icon: ShieldAlert, type: 'Governance Plugin', color: '#f59e0b', bg: '#fffbeb' },
  { id: 5, title: 'Retail Banking SLM', vendor: 'Cognizant', vertical: 'Banking', icon: Cpu, type: 'Premium SLM', color: '#6366f1', bg: '#eef2ff' },
  { id: 6, title: 'Customer Churn Analyzer', vendor: 'Uniphore', vertical: 'Cross-Industry', icon: FileText, type: 'Agent Template', color: '#ec4899', bg: '#fdf2f8' },
];

const navBtnStyle: React.CSSProperties = {
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  background: 'rgba(255,255,255,0.15)',
  backdropFilter: 'blur(8px)',
  border: '1px solid rgba(255,255,255,0.25)',
  borderRadius: '50%',
  width: '40px',
  height: '40px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  color: 'white',
  zIndex: 2,
  transition: 'background 0.2s',
};

const MarketplaceDashboard: React.FC<MarketplaceDashboardProps> = ({ onSelectAgent }) => {
  const [slide, setSlide] = useState(0);
  const hero = heroAssets[slide];

  const prev = () => setSlide(s => (s - 1 + heroAssets.length) % heroAssets.length);
  const next = () => setSlide(s => (s + 1) % heroAssets.length);

  return (
    <div style={{ animation: 'fadeIn 0.3s ease' }}>

      {/* Landing Page Header */}
      <div style={{ textAlign: 'center', padding: '2rem 1rem 1.75rem' }}>
        <h1 style={{ fontSize: '2.75rem', fontWeight: 900, color: '#0f172a', marginBottom: '0.75rem', letterSpacing: '-0.02em', lineHeight: 1.1 }}>
          Uniphore Marketplace
        </h1>
        <p style={{ fontSize: '1.05rem', color: '#64748b', maxWidth: '620px', margin: '0 auto', lineHeight: 1.65 }}>
          Design, Deploy and Orchestrate Your AI Agents with Scale, Security and Control on Uniphore's Business AI Cloud
        </p>
      </div>

      {/* Hero Carousel */}
      <div className="mp-hero" style={{ position: 'relative', overflow: 'hidden' }}>
        {/* Prev arrow */}
        <button onClick={prev} style={{ ...navBtnStyle, left: '1rem' }}>
          <ChevronLeft size={20} />
        </button>

        {/* Card content */}
        <div style={{ maxWidth: '600px', zIndex: 1 }} key={slide}>
          <div style={{ display: 'inline-block', background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '2rem', padding: '0.3rem 0.9rem', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.05em', color: '#bfdbfe', marginBottom: '1rem' }}>
            {hero.tag}
          </div>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 900, marginBottom: '1rem', lineHeight: 1.1 }}>
            {hero.title}
          </h2>
          <p style={{ fontSize: '1.05rem', color: '#94a3b8', marginBottom: '2rem', lineHeight: 1.5 }}>
            {hero.description}
          </p>
          <button
            className="mp-btn-primary"
            style={{ fontSize: '1.05rem', padding: '0.8rem 2rem' }}
            onClick={onSelectAgent}
          >
            View Asset Details <ArrowRight size={18} />
          </button>
        </div>

        {/* Stats cards */}
        <div style={{ zIndex: 1, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div style={{ background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)', padding: '1rem 1.5rem', borderRadius: '1rem', border: '1px solid rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <Cpu color="#60a5fa" size={32} />
            <div>
              <div style={{ fontSize: '0.8rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Built By</div>
              <div style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>{hero.builtBy}</div>
            </div>
          </div>
          <div style={{ background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)', padding: '1rem 1.5rem', borderRadius: '1rem', border: '1px solid rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <ShieldCheck color="#34d399" size={32} />
            <div>
              <div style={{ fontSize: '0.8rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Template Cost</div>
              <div style={{ fontWeight: 'bold', fontSize: '1.2rem', color: '#34d399' }}>{hero.cost}</div>
            </div>
          </div>
        </div>

        {/* Next arrow */}
        <button onClick={next} style={{ ...navBtnStyle, right: '1rem' }}>
          <ChevronRight size={20} />
        </button>

        {/* Dot indicators */}
        <div style={{ position: 'absolute', bottom: '1.25rem', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '0.5rem', zIndex: 2 }}>
          {heroAssets.map((_, i) => (
            <button
              key={i}
              onClick={() => setSlide(i)}
              style={{ width: i === slide ? '20px' : '8px', height: '8px', borderRadius: '4px', background: i === slide ? 'white' : 'rgba(255,255,255,0.4)', border: 'none', cursor: 'pointer', padding: 0, transition: 'all 0.25s ease' }}
            />
          ))}
        </div>
      </div>

      {/* Trending section */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '1.5rem' }}>
        <div>
          <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#0f172a', margin: 0 }}>Trending Templates & Connectors</h3>
          <p style={{ color: '#64748b', marginTop: '0.25rem' }}>Discover assets built by Uniphore and our Tier-1 partners.</p>
        </div>
      </div>

      <div className="mp-grid">
        {templates.map(t => {
          const Icon = t.icon;
          return (
            <div key={t.id} className="mp-card">
              <div className="mp-card-header">
                <div className="mp-card-icon" style={{ background: t.bg, color: t.color }}>
                  <Icon size={24} />
                </div>
                <div className="mp-badge price">
                  {t.type === 'Premium SLM' ? 'Rev-Share' : '$0'}
                </div>
              </div>
              <h4 style={{ fontSize: '1.1rem', fontWeight: 'bold', color: '#0f172a', margin: '0 0 0.25rem 0' }}>{t.title}</h4>
              <p style={{ color: '#64748b', fontSize: '0.9rem', margin: '0 0 1rem 0' }}>By <strong style={{ color: '#0f172a' }}>{t.vendor}</strong></p>
              <div style={{ marginTop: 'auto', display: 'flex', gap: '0.5rem' }}>
                <span style={{ fontSize: '0.75rem', background: '#f1f5f9', color: '#475569', padding: '0.25rem 0.6rem', borderRadius: '2rem', fontWeight: 600 }}>{t.vertical}</span>
                <span style={{ fontSize: '0.75rem', background: '#f1f5f9', color: '#475569', padding: '0.25rem 0.6rem', borderRadius: '2rem', fontWeight: 600 }}>{t.type}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MarketplaceDashboard;
