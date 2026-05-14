import React, { useState } from 'react';
import { ShieldCheck, Cpu, ArrowRight, Activity, FileText, Database, ShieldAlert, ChevronLeft, ChevronRight } from 'lucide-react';
import './marketplace.css';

interface MarketplaceDashboardProps {
  onSelectAgent: () => void;
}

const CARD_W = 500;
const CARD_GAP = 20;

const heroAssets = [
  {
    tag: 'BFSI · Insurance',
    title: 'Automate 80% of Inbound Claims.',
    description: 'The Auto-Claims Resolution Agent by Cognizant extracts data from FNOL emails, validates against legacy mainframes, and drafts responses — fully sovereign, zero cloud exposure.',
    builtBy: 'Cognizant',
    gradientFrom: '#1e3a8a',
    gradientTo: '#3b82f6',
  },
  {
    tag: 'Banking',
    title: 'Cut KYC Onboarding Time by 70%.',
    description: 'The KYC Onboarding Orchestration Agent by KPMG automates identity verification, document validation, and regulatory screening — reducing manual review overhead.',
    builtBy: 'KPMG',
    gradientFrom: '#064e3b',
    gradientTo: '#059669',
  },
  {
    tag: 'Healthcare',
    title: 'Resolve Prior Auth in Minutes, Not Days.',
    description: 'The Patient Prior Authorization Agent by Infosys integrates with Epic EMR, structures clinical documentation, and submits to payer portals for instant decisions.',
    builtBy: 'Infosys',
    gradientFrom: '#3b0764',
    gradientTo: '#7c3aed',
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

const MarketplaceDashboard: React.FC<MarketplaceDashboardProps> = ({ onSelectAgent }) => {
  const [slide, setSlide] = useState(0);

  const maxSlide = heroAssets.length - 2;
  const prev = () => setSlide(s => Math.max(0, s - 1));
  const next = () => setSlide(s => Math.min(maxSlide, s + 1));

  const navBtn = (disabled: boolean): React.CSSProperties => ({
    width: '34px',
    height: '34px',
    borderRadius: '50%',
    border: '1px solid #e2e8f0',
    background: disabled ? '#f8fafc' : 'white',
    color: disabled ? '#cbd5e1' : '#475569',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: disabled ? 'not-allowed' : 'pointer',
    transition: 'all 0.2s',
    flexShrink: 0,
  });

  return (
    <div style={{ animation: 'fadeIn 0.3s ease' }}>

      {/* Landing Page Header */}
      <div style={{ textAlign: 'center', padding: '1.75rem 1rem 1.5rem' }}>
        <h1 style={{ fontSize: '2.25rem', fontWeight: 900, color: '#0f172a', marginBottom: '0.5rem', letterSpacing: '-0.02em', lineHeight: 1.1 }}>
          Uniphore Marketplace
        </h1>
        <p style={{ fontSize: '0.95rem', color: '#64748b', maxWidth: '580px', margin: '0 auto', lineHeight: 1.65 }}>
          Design, Deploy and Orchestrate Your AI Agents with Scale, Security and Control on Uniphore's Business AI Cloud
        </p>
      </div>

      {/* Featured section header + nav arrows */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '1rem' }}>
        <div>
          <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0f172a', margin: 0 }}>Featured Agents</h3>
          <p style={{ color: '#94a3b8', fontSize: '0.8rem', marginTop: '0.2rem', marginBottom: 0 }}>Verified agents from Tier-1 partners, ready to deploy.</p>
        </div>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <button onClick={prev} disabled={slide === 0} style={navBtn(slide === 0)}>
            <ChevronLeft size={16} />
          </button>
          <button onClick={next} disabled={slide === maxSlide} style={navBtn(slide === maxSlide)}>
            <ChevronRight size={16} />
          </button>
        </div>
      </div>

      {/* Carousel track */}
      <div style={{ overflow: 'hidden', marginBottom: '2.5rem' }}>
        <div style={{
          display: 'flex',
          gap: `${CARD_GAP}px`,
          transform: `translateX(-${slide * (CARD_W + CARD_GAP)}px)`,
          transition: 'transform 0.4s cubic-bezier(0.25, 1, 0.5, 1)',
        }}>
          {heroAssets.map((asset, i) => (
            <div
              key={i}
              onClick={onSelectAgent}
              style={{
                minWidth: `${CARD_W}px`,
                height: '210px',
                background: 'white',
                borderRadius: '1rem',
                border: '1px solid #e2e8f0',
                display: 'flex',
                overflow: 'hidden',
                boxShadow: '0 1px 4px rgba(0,0,0,0.05)',
                cursor: 'pointer',
              }}
            >
              {/* Left gradient panel */}
              <div style={{
                width: '185px',
                flexShrink: 0,
                background: `linear-gradient(160deg, ${asset.gradientFrom} 0%, ${asset.gradientTo} 100%)`,
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                padding: '1rem',
                overflow: 'hidden',
              }}>
                {/* Decorative circles */}
                <div style={{ position: 'absolute', top: '-24px', right: '-24px', width: '110px', height: '110px', borderRadius: '50%', background: 'rgba(255,255,255,0.06)' }} />
                <div style={{ position: 'absolute', top: '40px', left: '-28px', width: '80px', height: '80px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)' }} />
                <div style={{ position: 'absolute', bottom: '45px', right: '10px', width: '50px', height: '50px', borderRadius: '50%', background: 'rgba(255,255,255,0.06)' }} />
                {/* Industry tag pill */}
                <span style={{
                  display: 'inline-block',
                  background: 'rgba(255,255,255,0.2)',
                  backdropFilter: 'blur(4px)',
                  border: '1px solid rgba(255,255,255,0.25)',
                  color: 'white',
                  fontSize: '0.68rem',
                  fontWeight: 700,
                  padding: '0.2rem 0.6rem',
                  borderRadius: '2rem',
                  letterSpacing: '0.04em',
                  position: 'relative',
                }}>
                  {asset.tag}
                </span>
              </div>

              {/* Right text content */}
              <div style={{ flex: 1, padding: '1.25rem 1.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minWidth: 0 }}>
                <div>
                  <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#0f172a', margin: '0 0 0.5rem 0', lineHeight: 1.3 }}>
                    {asset.title}
                  </h4>
                  <p style={{
                    fontSize: '0.82rem', color: '#64748b', margin: 0, lineHeight: 1.6,
                    display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden',
                  }}>
                    {asset.description}
                  </p>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                    <span style={{ fontSize: '0.75rem', color: '#64748b' }}>
                      By <strong style={{ color: '#0f172a' }}>{asset.builtBy}</strong>
                    </span>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.25rem', background: '#f0fdf4', color: '#16a34a', border: '1px solid #bbf7d0', fontSize: '0.67rem', fontWeight: 700, padding: '0.15rem 0.55rem', borderRadius: '2rem', width: 'fit-content' }}>
                      <ShieldCheck size={10} strokeWidth={2.5} />
                      Verified by Uniphore
                    </span>
                  </div>
                  <div style={{ color: '#2563eb', display: 'flex', alignItems: 'center', gap: '0.25rem', fontSize: '0.8rem', fontWeight: 600, flexShrink: 0 }}>
                    View details <ArrowRight size={14} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Trending section */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '1.25rem' }}>
        <div>
          <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0f172a', margin: 0 }}>Trending Templates & Connectors</h3>
          <p style={{ color: '#64748b', marginTop: '0.2rem', marginBottom: 0, fontSize: '0.82rem' }}>Discover assets built by Uniphore and our Tier-1 partners.</p>
        </div>
      </div>

      <div className="mp-grid">
        {templates.map(t => {
          const Icon = t.icon;
          return (
            <div key={t.id} className="mp-card">
              <div className="mp-card-header">
                <div className="mp-card-icon" style={{ background: t.bg, color: t.color }}>
                  <Icon size={22} />
                </div>
                <div className="mp-badge price">
                  {t.type === 'Premium SLM' ? 'Rev-Share' : '$0'}
                </div>
              </div>
              <h4 style={{ fontSize: '0.92rem', fontWeight: 700, color: '#0f172a', margin: '0 0 0.2rem 0' }}>{t.title}</h4>
              <p style={{ color: '#64748b', fontSize: '0.8rem', margin: '0 0 0.75rem 0' }}>By <strong style={{ color: '#0f172a' }}>{t.vendor}</strong></p>
              <div style={{ marginTop: 'auto', display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                <span style={{ fontSize: '0.68rem', background: '#f1f5f9', color: '#475569', padding: '0.2rem 0.55rem', borderRadius: '2rem', fontWeight: 600 }}>{t.vertical}</span>
                <span style={{ fontSize: '0.68rem', background: '#f1f5f9', color: '#475569', padding: '0.2rem 0.55rem', borderRadius: '2rem', fontWeight: 600 }}>{t.type}</span>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.2rem', fontSize: '0.68rem', background: '#f0fdf4', color: '#16a34a', border: '1px solid #bbf7d0', padding: '0.2rem 0.55rem', borderRadius: '2rem', fontWeight: 600 }}>
                  <ShieldCheck size={9} strokeWidth={2.5} /> Verified
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MarketplaceDashboard;
