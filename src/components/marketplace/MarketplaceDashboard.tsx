import React, { useState, useEffect } from 'react';
import {
  ShieldCheck, Cpu, ArrowRight, Activity, FileText, Database, ShieldAlert,
  ChevronLeft, ChevronRight, ChevronDown, ChevronUp, BarChart2, Building2, Calendar, Car, Heart,
  HeartPulse, MessageSquare, Network, Receipt, Search, Settings, Users,
  Zap, BookOpen, FlaskConical, Stethoscope, Scan, Wrench,
} from 'lucide-react';
import './marketplace.css';

interface MarketplaceDashboardProps {
  onSelectAgent: (asset: { title: string; vendor: string; type: string; desc: string }) => void;
  activeCategory: string;
  activeVertical: string;
}

const CARD_W = 500;
const CARD_GAP = 20;

const heroAssets = [
  {
    tag: 'BFSI · Insurance',
    title: 'Automate 80% of Inbound Claims.',
    description: 'The Auto-Claims Resolution Agent by Cognizant extracts data from FNOL emails, validates against legacy mainframes, and drafts responses — fully sovereign, zero cloud exposure.',
    builtBy: 'Cognizant',
    assetTitle: 'Auto-Claims Resolution Agent',
    assetType: 'Agent Template',
    assetDesc: 'Investigates, negotiates, and settles insurance claims after an accident. Acts as primary contact for policyholders, determining liability and assessing damages to vehicles and property.',
    gradientFrom: '#1e3a8a',
    gradientTo: '#3b82f6',
  },
  {
    tag: 'Banking',
    title: 'Cut KYC Onboarding Time by 70%.',
    description: 'The KYC Onboarding Orchestration Agent by KPMG automates identity verification, document validation, and regulatory screening — reducing manual review overhead.',
    builtBy: 'KPMG',
    assetTitle: 'KYC Onboarding Orchestration Agent',
    assetType: 'Agent Template',
    assetDesc: 'Assembles entity files, reviews source documents, and packages escalations for compliance review.',
    gradientFrom: '#064e3b',
    gradientTo: '#059669',
  },
  {
    tag: 'Healthcare',
    title: 'Resolve Prior Auth in Minutes, Not Days.',
    description: 'The Patient Prior Authorization Agent by Infosys integrates with Epic EMR, structures clinical documentation, and submits to payer portals for instant decisions.',
    builtBy: 'Infosys',
    assetTitle: 'Patient Prior Authorization Agent',
    assetType: 'Agent Template',
    assetDesc: 'Integrates with Epic EMR to structure clinical documentation and submit prior authorization requests to payer portals for fast decisions.',
    gradientFrom: '#3b0764',
    gradientTo: '#7c3aed',
  },
];

const templates = [
  // BFSI — Agents
  { id: 1,  title: 'Valuation Reviewer',              vendor: 'Uniphore',  vertical: 'bfsi',          icon: BarChart2,    type: 'Agent',            color: '#6366f1', bg: '#eef2ff',  desc: 'Checks valuations against comparables, methodology, and the firm\'s review standards.' },
  { id: 2,  title: 'General Ledger Reconciler',        vendor: 'Uniphore',  vertical: 'bfsi',          icon: Receipt,      type: 'Agent',            color: '#0369a1', bg: '#e0f2fe',  desc: 'Reconciles general ledger accounts and runs NAV calculations against books of record.' },
  { id: 3,  title: 'Financial Model Builder',          vendor: 'Uniphore',  vertical: 'bfsi',          icon: Cpu,          type: 'Agent',            color: '#7c3aed', bg: '#f5f3ff',  desc: 'Creates and maintains financial models from filings, data feeds, and analyst inputs.' },
  { id: 4,  title: 'Market Researcher',                vendor: 'Uniphore',  vertical: 'bfsi',          icon: Search,       type: 'Agent',            color: '#059669', bg: '#ecfdf5',  desc: 'Tracks sector and issuer developments, synthesizes news, filings, and broker research, and flags items for credit and risk review.' },
  // BFSI — Agent Templates
  { id: 5,  title: 'Lending Agent Template',           vendor: 'KPMG',      vertical: 'bfsi',          icon: Building2,    type: 'Agent Template',   color: '#0176D3', bg: '#eff6ff',  desc: 'Automates the entire borrower journey from applications and collections to back-office work.' },
  { id: 6,  title: 'Month-End Closer Template',        vendor: 'Deloitte',  vertical: 'bfsi',          icon: Calendar,     type: 'Agent Template',   color: '#6d28d9', bg: '#f5f3ff',  desc: 'Runs the close checklist, prepares journal entries, and produces close reports.' },
  { id: 7,  title: 'Statement Auditor Template',       vendor: 'Deloitte',  vertical: 'bfsi',          icon: FileText,     type: 'Agent Template',   color: '#b45309', bg: '#fffbeb',  desc: 'Reviews financial statements for consistency, completeness, and audit-readiness.' },
  { id: 8,  title: 'KYC Screener Template',            vendor: 'KPMG',      vertical: 'bfsi',          icon: ShieldCheck,  type: 'Agent Template',   color: '#10b981', bg: '#ecfdf5',  desc: 'Assembles entity files, reviews source documents, and packages escalations for compliance review.' },
  { id: 9,  title: 'Auto-Claims Resolution Template',  vendor: 'Cognizant', vertical: 'bfsi',          icon: Car,          type: 'Agent Template',   color: '#dc2626', bg: '#fef2f2',  desc: 'Investigates, negotiates, and settles insurance claims after an accident. Acts as primary contact for policyholders, determining liability and assessing damages to vehicles and property.' },
  // BFSI — Knowledge Template
  { id: 10, title: 'BFSI Regulatory Compliance KB',   vendor: 'KPMG',      vertical: 'bfsi',          icon: BookOpen,     type: 'Knowledge Template', color: '#0891b2', bg: '#ecfeff', desc: 'Curated knowledge base covering Basel III, DORA, and APRA compliance frameworks.' },
  // Healthcare — Agents
  { id: 11, title: 'Clinical Documentation Agent',    vendor: 'Infosys',   vertical: 'healthcare',    icon: Stethoscope,  type: 'Agent',            color: '#0891b2', bg: '#ecfeff',  desc: 'Generates consultation summaries, updates EHRs, and manages follow-up administrative tasks.' },
  { id: 12, title: 'Revenue Cycle Agent',             vendor: 'Uniphore',  vertical: 'healthcare',    icon: Receipt,      type: 'Agent',            color: '#059669', bg: '#ecfdf5',  desc: 'Automates billing, coding, and prior authorization to streamline administrative workflows.' },
  { id: 13, title: 'Pre-Appointment Prep Agent',      vendor: 'Infosys',   vertical: 'healthcare',    icon: Calendar,     type: 'Agent',            color: '#7c3aed', bg: '#f5f3ff',  desc: 'Reviews patient history, lab reports, and imaging, presenting summarized predictive analysis to doctors.' },
  { id: 14, title: 'Clinical Trials Matching Agent',  vendor: 'Uniphore',  vertical: 'healthcare',    icon: FlaskConical, type: 'Agent',            color: '#2563eb', bg: '#eff6ff',  desc: 'Reviews patient records and matches them to relevant clinical trials, tracking progress throughout.' },
  // Healthcare — Agent Templates
  { id: 15, title: 'Patient Onboarding Template',     vendor: 'Cognizant', vertical: 'healthcare',    icon: Users,        type: 'Agent Template',   color: '#0176D3', bg: '#eff6ff',  desc: 'Completes intake processes before patients arrive, streamlining registration and data collection.' },
  { id: 16, title: 'Diagnostic Imaging AI Template',  vendor: 'Infosys',   vertical: 'healthcare',    icon: Scan,         type: 'Agent Template',   color: '#6366f1', bg: '#eef2ff',  desc: 'AI-powered diagnostic imaging analysis and structured reporting for radiology workflows.' },
  { id: 17, title: 'Chronic Care Management Template',vendor: 'Uniphore',  vertical: 'healthcare',    icon: HeartPulse,   type: 'Agent Template',   color: '#e11d48', bg: '#fff1f2',  desc: 'Supports patients with diabetes or heart failure by monitoring device data, providing medication reminders, and offering lifestyle coaching to reduce readmissions.' },
  { id: 18, title: 'HIPAA Compliance Template',       vendor: 'Deloitte',  vertical: 'healthcare',    icon: ShieldCheck,  type: 'Agent Template',   color: '#0284c7', bg: '#f0f9ff',  desc: 'Ensures HIPAA-ready infrastructure and compliance workflows across healthcare operations.' },
  // Healthcare — Knowledge Template
  { id: 19, title: 'Healthcare Coding & Billing KB',  vendor: 'Deloitte',  vertical: 'healthcare',    icon: BookOpen,     type: 'Knowledge Template', color: '#059669', bg: '#ecfdf5', desc: 'ICD-10, CPT codes, and payer-specific billing rules for accurate revenue cycle management.' },
  // Telecom — Agents
  { id: 20, title: 'CX Improvement Agent',            vendor: 'Cognizant', vertical: 'telecom',       icon: MessageSquare,type: 'Agent',            color: '#7c3aed', bg: '#f5f3ff',  desc: 'Handles complex, multi-step customer inquiries, providing personalized billing explanations, plan recommendations, and real-time troubleshooting.' },
  { id: 21, title: 'Marketing Segmentation Agent',    vendor: 'Uniphore',  vertical: 'telecom',       icon: BarChart2,    type: 'Agent',            color: '#f59e0b', bg: '#fffbeb',  desc: 'Segments customers by usage, demographics, and history to initiate tailored campaigns automatically.' },
  { id: 22, title: 'Autonomous Network Management',   vendor: 'Infosys',   vertical: 'telecom',       icon: Network,      type: 'Agent',            color: '#0369a1', bg: '#e0f2fe',  desc: 'Detects network anomalies, analyzes telemetry data, and initiates self-healing protocols to resolve service disruptions, reducing Mean Time To Repair (MTTR).' },
  // Telecom — Agent Templates
  { id: 23, title: 'Field Operations Agent Template', vendor: 'KPMG',      vertical: 'telecom',       icon: Wrench,       type: 'Agent Template',   color: '#059669', bg: '#ecfdf5',  desc: 'Optimizes technician schedules, routes tasks by skill set, and provides guided repair procedures.' },
  { id: 24, title: 'Service Provisioning Template',   vendor: 'Cognizant', vertical: 'telecom',       icon: Zap,          type: 'Agent Template',   color: '#dc2626', bg: '#fef2f2',  desc: 'Automates the quote-to-order process, reducing human intervention in service ordering between operators and enterprise customers.' },
  // Telecom — Knowledge Template
  { id: 25, title: 'Telecom Network Topology KB',     vendor: 'Infosys',   vertical: 'telecom',       icon: BookOpen,     type: 'Knowledge Template', color: '#7c3aed', bg: '#f5f3ff', desc: 'Network topology, SLA standards, and 5G infrastructure knowledge for agentic network operations.' },
  // Cross-Industry
  { id: 26, title: 'Epic EMR Sync',                   vendor: 'Uniphore',  vertical: 'cross-industry',icon: Database,     type: 'Data Connector',   color: '#3b82f6', bg: '#eff6ff',  desc: 'Zero-copy bidirectional sync with Epic EMR — no data migration required.' },
  { id: 27, title: 'Retail Banking SLM',              vendor: 'Cognizant', vertical: 'bfsi',          icon: Cpu,          type: 'Premium SLM',      color: '#6366f1', bg: '#eef2ff',  desc: 'Domain-tuned small language model for retail banking inquiry handling and decisioning.' },
  { id: 28, title: 'GDPR PII Redactor',               vendor: 'Deloitte',  vertical: 'cross-industry',icon: ShieldAlert,  type: 'Plugin',           color: '#f59e0b', bg: '#fffbeb',  desc: 'Automatically detects and redacts PII to enforce GDPR compliance across all agent outputs.' },
  { id: 29, title: 'Customer Churn Analyzer',         vendor: 'Uniphore',  vertical: 'cross-industry',icon: Activity,     type: 'Agent',            color: '#ec4899', bg: '#fdf2f8',  desc: 'Predicts churn risk from behavioral signals and triggers retention workflows automatically.' },
  { id: 30, title: 'Audit Trail Plugin',              vendor: 'Deloitte',  vertical: 'cross-industry',icon: FileText,     type: 'Plugin',           color: '#64748b', bg: '#f8fafc',  desc: 'Immutable, tamper-evident logging of all agent decisions and actions for regulatory audit.' },
  { id: 31, title: 'Salesforce CRM Connector',        vendor: 'Uniphore',  vertical: 'cross-industry',icon: Database,     type: 'Data Connector',   color: '#0176D3', bg: '#eff6ff',  desc: 'Real-time bidirectional sync between agent workflows and Salesforce CRM objects.' },
  { id: 32, title: 'Snowflake Data Connector',        vendor: 'Uniphore',  vertical: 'cross-industry',icon: Database,     type: 'Data Connector',   color: '#22d3ee', bg: '#ecfeff',  desc: 'Zero-copy query against Snowflake — agents compute where data lives, no migration.' },
  { id: 33, title: 'Healthcare SLM',                  vendor: 'Infosys',   vertical: 'healthcare',    icon: Heart,        type: 'Premium SLM',      color: '#e11d48', bg: '#fff1f2',  desc: 'HIPAA-trained SLM for clinical documentation, coding assistance, and care pathway support.' },
  { id: 34, title: 'Enterprise Knowledge Plugin',     vendor: 'Uniphore',  vertical: 'cross-industry',icon: Settings,     type: 'Plugin',           color: '#6366f1', bg: '#eef2ff',  desc: 'Connects agents to enterprise wikis, SharePoint, and Confluence for grounded knowledge retrieval.' },
];

const caseStudies = [
  {
    id: 1, company: 'Liberty Mutual', vertical: 'Insurance',
    gradientFrom: '#0c2461', gradientTo: '#1a56db',
    headline: 'Liberty Mutual eliminates painstaking auto-claims resolution with Uniphore Marketplace Claims Resolution Agent',
  },
  {
    id: 2, company: 'HDFC Bank', vertical: 'Banking',
    gradientFrom: '#052e16', gradientTo: '#047857',
    headline: 'HDFC Bank cuts KYC onboarding from 5 days to under 4 hours using Uniphore AI Workflows',
  },
  {
    id: 3, company: 'Cigna Healthcare', vertical: 'Healthcare',
    gradientFrom: '#2e1065', gradientTo: '#6d28d9',
    headline: 'Cigna resolves prior authorizations in minutes, not days, transforming member care outcomes',
  },
  {
    id: 4, company: 'Vodafone', vertical: 'Telecom',
    gradientFrom: '#450a0a', gradientTo: '#b91c1c',
    headline: 'Vodafone cuts network incident response time by 60% with Uniphore Predictive AI Agent',
  },
];

const TYPE_BADGE: Record<string, React.CSSProperties> = {
  'Agent':             { background: '#eff6ff', color: '#1d4ed8', border: '1px solid #bfdbfe' },
  'Agent Template':    { background: '#f5f3ff', color: '#6d28d9', border: '1px solid #ddd6fe' },
  'Premium SLM':       { background: '#faf5ff', color: '#7e22ce', border: '1px solid #e9d5ff' },
  'Data Connector':    { background: '#f0f9ff', color: '#0369a1', border: '1px solid #bae6fd' },
  'Knowledge Template':{ background: '#f0fdf4', color: '#166534', border: '1px solid #bbf7d0' },
  'Plugin':            { background: '#fffbeb', color: '#b45309', border: '1px solid #fde68a' },
};

const MarketplaceDashboard: React.FC<MarketplaceDashboardProps> = ({ onSelectAgent, activeCategory, activeVertical }) => {
  const [slide, setSlide] = useState(0);

  const [expanded, setExpanded] = useState(false);

  const maxSlide = heroAssets.length - 2;
  const prev = () => setSlide(s => Math.max(0, s - 1));
  const next = () => setSlide(s => Math.min(maxSlide, s + 1));

  // Collapse grid whenever filters change
  useEffect(() => { setExpanded(false); }, [activeCategory, activeVertical]);

  const navBtn = (disabled: boolean): React.CSSProperties => ({
    width: '34px', height: '34px', borderRadius: '50%',
    border: '1px solid #e2e8f0', background: disabled ? '#f8fafc' : 'white',
    color: disabled ? '#cbd5e1' : '#475569',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    cursor: disabled ? 'not-allowed' : 'pointer', transition: 'all 0.2s', flexShrink: 0,
  });

  // Filter cards by category and vertical
  const filtered = templates.filter(t => {
    const catMatch =
      activeCategory === 'all' ||
      (activeCategory === 'agents-templates' && (t.type === 'Agent' || t.type === 'Agent Template')) ||
      (activeCategory === 'slms' && t.type === 'Premium SLM') ||
      (activeCategory === 'connectors' && t.type === 'Data Connector') ||
      (activeCategory === 'knowledge' && t.type === 'Knowledge Template') ||
      (activeCategory === 'plugins' && t.type === 'Plugin');

    const vertMatch =
      activeVertical === 'all-v' ||
      (activeVertical === 'bfsi' && t.vertical === 'bfsi') ||
      (activeVertical === 'telecom' && t.vertical === 'telecom') ||
      (activeVertical === 'health' && t.vertical === 'healthcare') ||
      (t.vertical === 'cross-industry'); // cross-industry always shows alongside vertical filters

    return catMatch && vertMatch;
  });

  const VISIBLE_COUNT = 6;
  const displayedCards = expanded ? filtered : filtered.slice(0, VISIBLE_COUNT);
  const hasMore = filtered.length > VISIBLE_COUNT;

  const isFiltered = activeCategory !== 'all' || activeVertical !== 'all-v';

  const CATEGORY_LABELS: Record<string, string> = {
    'all': 'All Assets', 'agents-templates': 'Agents & Agent Templates',
    'slms': 'Domain SLMs', 'connectors': 'Data Connectors',
    'knowledge': 'Knowledge Templates', 'plugins': 'Plugins',
  };
  const VERTICAL_LABELS: Record<string, string> = {
    'all-v': 'All Industries', 'bfsi': 'BFSI', 'telecom': 'Telecom', 'health': 'Healthcare',
  };

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
          <button onClick={prev} disabled={slide === 0} style={navBtn(slide === 0)}><ChevronLeft size={16} /></button>
          <button onClick={next} disabled={slide === maxSlide} style={navBtn(slide === maxSlide)}><ChevronRight size={16} /></button>
        </div>
      </div>

      {/* Hero Carousel */}
      <div style={{ overflow: 'hidden', marginBottom: '2.5rem' }}>
        <div style={{
          display: 'flex', gap: `${CARD_GAP}px`,
          transform: `translateX(-${slide * (CARD_W + CARD_GAP)}px)`,
          transition: 'transform 0.4s cubic-bezier(0.25, 1, 0.5, 1)',
        }}>
          {heroAssets.map((asset, i) => (
            <div key={i} onClick={() => onSelectAgent({ title: asset.assetTitle, vendor: asset.builtBy, type: asset.assetType, desc: asset.assetDesc })}
              style={{ minWidth: `${CARD_W}px`, height: '210px', background: 'white', borderRadius: '1rem', border: '1px solid #e2e8f0', display: 'flex', overflow: 'hidden', boxShadow: '0 1px 4px rgba(0,0,0,0.05)', cursor: 'pointer' }}
            >
              <div style={{ width: '185px', flexShrink: 0, background: `linear-gradient(160deg, ${asset.gradientFrom} 0%, ${asset.gradientTo} 100%)`, position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '1rem', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: '-24px', right: '-24px', width: '110px', height: '110px', borderRadius: '50%', background: 'rgba(255,255,255,0.06)' }} />
                <div style={{ position: 'absolute', top: '40px', left: '-28px', width: '80px', height: '80px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)' }} />
                <span style={{ display: 'inline-block', background: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(4px)', border: '1px solid rgba(255,255,255,0.25)', color: 'white', fontSize: '0.68rem', fontWeight: 700, padding: '0.2rem 0.6rem', borderRadius: '2rem', letterSpacing: '0.04em', position: 'relative' }}>
                  {asset.tag}
                </span>
              </div>
              <div style={{ flex: 1, padding: '1.25rem 1.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minWidth: 0 }}>
                <div>
                  <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#0f172a', margin: '0 0 0.5rem 0', lineHeight: 1.3 }}>{asset.title}</h4>
                  <p style={{ fontSize: '0.82rem', color: '#64748b', margin: 0, lineHeight: 1.6, display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{asset.description}</p>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                    <span style={{ fontSize: '0.75rem', color: '#64748b' }}>By <strong style={{ color: '#0f172a' }}>{asset.builtBy}</strong></span>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.25rem', background: '#f0fdf4', color: '#16a34a', border: '1px solid #bbf7d0', fontSize: '0.67rem', fontWeight: 700, padding: '0.15rem 0.55rem', borderRadius: '2rem', width: 'fit-content' }}>
                      <ShieldCheck size={10} strokeWidth={2.5} /> Verified by Uniphore
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

      {/* Asset Grid — filtered */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '1.25rem' }}>
        <div>
          {isFiltered ? (
            <>
              <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0f172a', margin: 0 }}>
                {filtered.length} Result{filtered.length !== 1 ? 's' : ''}
              </h3>
              <p style={{ color: '#94a3b8', fontSize: '0.8rem', marginTop: '0.2rem', marginBottom: 0 }}>
                {CATEGORY_LABELS[activeCategory]} · {VERTICAL_LABELS[activeVertical]}
              </p>
            </>
          ) : (
            <>
              <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0f172a', margin: 0 }}>Trending Templates & Connectors</h3>
              <p style={{ color: '#64748b', fontSize: '0.82rem', marginTop: '0.2rem', marginBottom: 0 }}>Discover assets built by Uniphore and our Tier-1 partners.</p>
            </>
          )}
        </div>
      </div>

      {filtered.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '4rem 2rem', color: '#94a3b8' }}>
          <Settings size={40} style={{ marginBottom: '1rem', opacity: 0.4 }} />
          <p style={{ fontSize: '0.95rem', fontWeight: 600, color: '#64748b', margin: '0 0 0.25rem' }}>No assets found</p>
          <p style={{ fontSize: '0.82rem', margin: 0 }}>Try adjusting your category or vertical filter.</p>
        </div>
      ) : (
        <div className="mp-grid">
          {displayedCards.map(t => {
            const Icon = t.icon;
            return (
              <div key={t.id} className="mp-card" onClick={() => onSelectAgent({ title: t.title, vendor: t.vendor, type: t.type, desc: t.desc })}>
                <div className="mp-card-header">
                  <div className="mp-card-icon" style={{ background: t.bg, color: t.color }}>
                    <Icon size={22} />
                  </div>
                  <div className="mp-badge price">
                    {t.type === 'Premium SLM' ? 'Rev-Share' : '$0'}
                  </div>
                </div>
                <h4 style={{ fontSize: '0.92rem', fontWeight: 700, color: '#0f172a', margin: '0 0 0.5rem 0' }}>{t.title}</h4>
                <p style={{ color: '#64748b', fontSize: '0.78rem', margin: '0 0 0.75rem 0' }}>By <strong style={{ color: '#0f172a' }}>{t.vendor}</strong></p>
                <div style={{ marginTop: 'auto', display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                  <span style={{ ...TYPE_BADGE[t.type], fontSize: '0.68rem', fontWeight: 700, padding: '0.2rem 0.55rem', borderRadius: '2rem' }}>{t.type}</span>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.2rem', fontSize: '0.68rem', background: '#f0fdf4', color: '#16a34a', border: '1px solid #bbf7d0', padding: '0.2rem 0.55rem', borderRadius: '2rem', fontWeight: 600 }}>
                    <ShieldCheck size={9} strokeWidth={2.5} /> Verified
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Expand / collapse toggle */}
      {hasMore && (
        <div style={{ textAlign: 'center', margin: '1.5rem 0 0' }}>
          <button
            onClick={() => setExpanded(e => !e)}
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.85rem', fontWeight: 600, color: '#2563eb', background: 'white', border: '1px solid #bfdbfe', borderRadius: '2rem', padding: '0.5rem 1.25rem', cursor: 'pointer' }}
          >
            {expanded ? <><ChevronUp size={15} /> Show less</> : <><ChevronDown size={15} /> Show all {filtered.length} assets</>}
          </button>
        </div>
      )}

      {/* Customer Case Studies */}
      <div style={{ marginTop: '3rem' }}>
        <div style={{ marginBottom: '1.25rem' }}>
          <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0f172a', margin: 0 }}>Customer Case Studies</h3>
          <p style={{ color: '#64748b', fontSize: '0.82rem', marginTop: '0.2rem', marginBottom: 0 }}>See how enterprises are transforming operations with Uniphore's Business AI Cloud.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
          {caseStudies.map((cs) => (
            <div key={cs.id} style={{ background: 'white', borderRadius: '1rem', border: '1px solid #e2e8f0', overflow: 'hidden', cursor: 'pointer', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
              <div style={{ height: '175px', background: `linear-gradient(140deg, ${cs.gradientFrom} 0%, ${cs.gradientTo} 100%)`, position: 'relative', overflow: 'hidden' }}>

                {cs.id === 1 && (
                  <svg viewBox="0 0 400 175" fill="none" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
                    <circle cx="310" cy="88" r="150" stroke="rgba(255,255,255,0.05)" strokeWidth="1.5"/>
                    <circle cx="310" cy="88" r="110" stroke="rgba(255,255,255,0.07)" strokeWidth="1.5"/>
                    <circle cx="310" cy="88" r="75" stroke="rgba(255,255,255,0.09)" strokeWidth="1.5"/>
                    <circle cx="310" cy="88" r="45" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5"/>
                    <circle cx="310" cy="88" r="20" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.2)" strokeWidth="1"/>
                    <circle cx="310" cy="88" r="5" fill="white" fillOpacity="0.85"/>
                    <line x1="310" y1="88" x2="160" y2="22" stroke="rgba(255,255,255,0.2)" strokeWidth="1"/>
                    <line x1="310" y1="88" x2="145" y2="88" stroke="rgba(255,255,255,0.2)" strokeWidth="1"/>
                    <line x1="310" y1="88" x2="160" y2="154" stroke="rgba(255,255,255,0.2)" strokeWidth="1"/>
                    <line x1="310" y1="88" x2="200" y2="18" stroke="rgba(255,255,255,0.12)" strokeWidth="1"/>
                    <line x1="310" y1="88" x2="200" y2="160" stroke="rgba(255,255,255,0.12)" strokeWidth="1"/>
                    <line x1="310" y1="88" x2="238" y2="32" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
                    <line x1="310" y1="88" x2="238" y2="146" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
                    <circle cx="160" cy="22" r="9" fill="#fb923c"/>
                    <circle cx="145" cy="88" r="9" fill="#2dd4bf"/>
                    <circle cx="160" cy="154" r="8" fill="#a78bfa"/>
                    <circle cx="200" cy="18" r="7" fill="#f472b6"/>
                    <circle cx="200" cy="160" r="7" fill="#a3e635"/>
                    <circle cx="238" cy="32" r="6" fill="#fbbf24"/>
                    <circle cx="238" cy="146" r="6" fill="#60a5fa"/>
                    <circle cx="268" cy="52" r="5" fill="#f472b6" fillOpacity="0.7"/>
                    <circle cx="268" cy="126" r="5" fill="#2dd4bf" fillOpacity="0.7"/>
                  </svg>
                )}
                {cs.id === 2 && (
                  <svg viewBox="0 0 400 175" fill="none" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
                    <line x1="75" y1="88" x2="175" y2="40" stroke="rgba(255,255,255,0.18)" strokeWidth="1"/>
                    <line x1="75" y1="88" x2="175" y2="136" stroke="rgba(255,255,255,0.18)" strokeWidth="1"/>
                    <line x1="175" y1="40" x2="275" y2="60" stroke="rgba(255,255,255,0.15)" strokeWidth="1"/>
                    <line x1="175" y1="136" x2="275" y2="115" stroke="rgba(255,255,255,0.15)" strokeWidth="1"/>
                    <line x1="175" y1="40" x2="175" y2="136" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
                    <line x1="275" y1="60" x2="275" y2="115" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
                    <line x1="275" y1="60" x2="355" y2="30" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
                    <line x1="275" y1="115" x2="355" y2="148" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
                    <line x1="75" y1="88" x2="38" y2="30" stroke="rgba(255,255,255,0.08)" strokeWidth="1"/>
                    <line x1="75" y1="88" x2="38" y2="148" stroke="rgba(255,255,255,0.08)" strokeWidth="1"/>
                    <line x1="175" y1="40" x2="275" y2="115" stroke="rgba(255,255,255,0.06)" strokeWidth="1" strokeDasharray="3 5"/>
                    <line x1="175" y1="136" x2="275" y2="60" stroke="rgba(255,255,255,0.06)" strokeWidth="1" strokeDasharray="3 5"/>
                    <circle cx="75" cy="88" r="17" fill="rgba(52,211,153,0.2)" stroke="#34d399" strokeWidth="1.5"/>
                    <circle cx="75" cy="88" r="8" fill="#34d399"/>
                    <circle cx="275" cy="88" r="13" fill="rgba(52,211,153,0.15)" stroke="#34d399" strokeWidth="1" opacity="0.7"/>
                    <circle cx="275" cy="88" r="6" fill="#34d399" fillOpacity="0.7"/>
                    <circle cx="175" cy="40" r="11" fill="rgba(255,255,255,0.12)" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5"/>
                    <circle cx="175" cy="40" r="5" fill="white" fillOpacity="0.9"/>
                    <circle cx="175" cy="136" r="11" fill="rgba(255,255,255,0.12)" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5"/>
                    <circle cx="175" cy="136" r="5" fill="white" fillOpacity="0.9"/>
                    <circle cx="275" cy="60" r="8" fill="#60a5fa"/>
                    <circle cx="275" cy="115" r="8" fill="#fbbf24"/>
                    <circle cx="355" cy="30" r="6" fill="#f472b6" fillOpacity="0.85"/>
                    <circle cx="355" cy="148" r="6" fill="#a78bfa" fillOpacity="0.85"/>
                    <circle cx="38" cy="30" r="5" fill="rgba(255,255,255,0.4)"/>
                    <circle cx="38" cy="148" r="5" fill="rgba(255,255,255,0.4)"/>
                  </svg>
                )}
                {cs.id === 3 && (
                  <svg viewBox="0 0 400 175" fill="none" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
                    <line x1="0" y1="88" x2="400" y2="88" stroke="rgba(255,255,255,0.08)" strokeWidth="1"/>
                    <line x1="0" y1="50" x2="400" y2="50" stroke="rgba(255,255,255,0.04)" strokeWidth="1" strokeDasharray="4 8"/>
                    <line x1="0" y1="126" x2="400" y2="126" stroke="rgba(255,255,255,0.04)" strokeWidth="1" strokeDasharray="4 8"/>
                    <line x1="100" y1="0" x2="100" y2="175" stroke="rgba(255,255,255,0.04)" strokeWidth="1"/>
                    <line x1="200" y1="0" x2="200" y2="175" stroke="rgba(255,255,255,0.04)" strokeWidth="1"/>
                    <line x1="300" y1="0" x2="300" y2="175" stroke="rgba(255,255,255,0.04)" strokeWidth="1"/>
                    <path d="M 0,100 L 25,100 L 35,90 L 42,100 L 47,100 L 52,22 L 57,165 L 62,100 L 80,100 L 125,100 L 135,90 L 142,100 L 147,100 L 152,22 L 157,165 L 162,100 L 180,100 L 225,100 L 235,90 L 242,100" stroke="rgba(167,139,250,0.3)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                    <path d="M 0,88 L 30,88 L 40,78 L 48,88 L 53,88 L 58,18 L 63,158 L 68,88 L 90,88 L 130,88 L 140,78 L 148,88 L 153,88 L 158,18 L 163,158 L 168,88 L 190,88 L 230,88 L 240,78 L 248,88 L 253,88 L 258,18 L 263,158 L 268,88 L 400,88" stroke="rgba(167,139,250,0.95)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                    <circle cx="268" cy="88" r="5" fill="#a78bfa"/>
                    <circle cx="268" cy="88" r="13" fill="rgba(167,139,250,0.2)" stroke="rgba(167,139,250,0.45)" strokeWidth="1"/>
                  </svg>
                )}
                {cs.id === 4 && (
                  <svg viewBox="0 0 400 175" fill="none" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
                    <path d="M 55,175 A 55,55 0 0 0 0,120" stroke="rgba(255,255,255,0.3)" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M 108,175 A 108,108 0 0 0 0,67" stroke="rgba(255,255,255,0.22)" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M 165,175 A 165,165 0 0 0 0,10" stroke="rgba(255,255,255,0.15)" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M 222,175 A 222,222 0 0 0 57,0" stroke="rgba(255,255,255,0.1)" strokeWidth="1.5" strokeLinecap="round"/>
                    <path d="M 280,175 A 280,280 0 0 0 105,0" stroke="rgba(255,255,255,0.07)" strokeWidth="1.5" strokeLinecap="round"/>
                    <path d="M 340,175 A 340,340 0 0 0 165,0" stroke="rgba(255,255,255,0.05)" strokeWidth="1" strokeLinecap="round"/>
                    <circle cx="39" cy="136" r="5" fill="#fca5a5" fillOpacity="0.9"/>
                    <circle cx="76" cy="99" r="5" fill="#fca5a5" fillOpacity="0.75"/>
                    <circle cx="117" cy="64" r="4" fill="#fca5a5" fillOpacity="0.6"/>
                    <circle cx="160" cy="34" r="3.5" fill="#fca5a5" fillOpacity="0.45"/>
                    <circle cx="0" cy="175" r="28" fill="rgba(252,165,165,0.12)"/>
                    <circle cx="0" cy="175" r="14" fill="rgba(252,165,165,0.2)" stroke="rgba(252,165,165,0.5)" strokeWidth="1.5"/>
                    <circle cx="0" cy="175" r="6" fill="#fca5a5"/>
                    <rect x="290" y="20" width="88" height="22" rx="4" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.2)" strokeWidth="1"/>
                    <rect x="290" y="52" width="68" height="22" rx="4" fill="rgba(255,255,255,0.07)" stroke="rgba(255,255,255,0.15)" strokeWidth="1"/>
                    <rect x="290" y="84" width="78" height="22" rx="4" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
                  </svg>
                )}

                <div style={{ position: 'absolute', top: '1rem', left: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                  <span style={{ fontSize: '0.72rem', fontWeight: 800, color: 'rgba(255,255,255,0.55)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{cs.vertical}</span>
                  <span style={{ fontSize: '1rem', fontWeight: 700, color: 'white', lineHeight: 1.2 }}>{cs.company}</span>
                </div>
              </div>
              <div style={{ padding: '1.25rem 1.5rem' }}>
                <p style={{ fontSize: '0.88rem', fontWeight: 600, color: '#0f172a', lineHeight: 1.55, margin: '0 0 1rem 0' }}>{cs.headline}</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', color: '#2563eb', fontSize: '0.82rem', fontWeight: 600 }}>
                  Read their story <ArrowRight size={14} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MarketplaceDashboard;
