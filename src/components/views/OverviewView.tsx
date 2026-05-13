import './views.css';
import { Shield, AlertTriangle, TrendingUp, Zap } from 'lucide-react';

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
};

const tocItems = [
  { id: 'company',   label: 'Company Overview',              desc: 'About Uniphore and the Business AI Cloud' },
  { id: 'platform',  label: 'Platform Architecture',         desc: 'Four composable layers enabling sovereign AI' },
  { id: 'state',     label: 'State of the Platform',         desc: 'Current lifecycle phase and developer reality' },
  { id: 'personas',  label: 'Key Buyer Personas',            desc: 'The three primary enterprise buyer profiles' },
  { id: 'swot',      label: 'SWOT Analysis',                 desc: 'Competitive position assessment for the BCAI platform' },
];

const swotData = [
  {
    key: 'S', title: 'Strengths', borderColor: 'border-emerald-500', bg: 'bg-emerald-50', icon: Shield, iconColor: 'text-emerald-600',
    items: [
      'Native SLM Factory with RAFT — end-to-end automated fine-tuning lifecycle',
      'True Sovereignty — on-prem, air-gapped, and multi-cloud deployment',
      'Zero-Copy Data Fabric — AI computes where data lives, no migration needed',
      '2,000+ enterprise install base in BFSI & Telecom with existing security clearances',
      'Strategic investors: NVIDIA, AMD, Snowflake, Databricks',
    ]
  },
  {
    key: 'W', title: 'Weaknesses', borderColor: 'border-red-500', bg: 'bg-red-50', icon: AlertTriangle, iconColor: 'text-red-600',
    items: [
      'No independent developer ecosystem — no public sandboxes or monetization engine',
      'Integration debt from rapid acquisitions: Orby AI, Autonom8, ActionIQ, Infoworks',
      'CCaaS heritage limits brand perception as an enterprise-wide AI platform',
      'Heavy dependency on Tier 1 SIs (KPMG, Cognizant) to build vertical agents',
    ]
  },
  {
    key: 'O', title: 'Opportunities', borderColor: 'border-blue-500', bg: 'bg-blue-50', icon: TrendingUp, iconColor: 'text-blue-600',
    items: [
      '$11–12B agent market growing at 43–50% CAGR to ~$50B by 2030',
      'Only 11% of enterprises have scaled AI agents to full production',
      'Regulated industries (BFSI, Healthcare, Gov) urgently need sovereign AI',
      'Agent Marketplace — outsource vertical R&D to the SI/ISV ecosystem',
      'Cross-sell Business AI Cloud to 2,000+ existing CCaaS customers',
    ]
  },
  {
    key: 'T', title: 'Threats', borderColor: 'border-amber-500', bg: 'bg-amber-50', icon: Zap, iconColor: 'text-amber-600',
    items: [
      'Hyperscaler expansion — AWS Bedrock, Azure AI Foundry, Google Vertex AI',
      'Enterprise software incumbents adding AI (Salesforce Agentforce, ServiceNow)',
      'Rapid AI model commoditization compressing differentiation windows',
      '40% of enterprise agentic AI projects at risk of cancellation by 2027',
    ]
  },
];

const platformLayers = [
  { name: 'Agentic Layer', desc: 'Natural-language agent builder · BPMN workflow orchestration · Multi-agent systems', emoji: '🤖', bg: 'bg-indigo-950' },
  { name: 'Model Layer', desc: 'SLM Factory · RAFT automated fine-tuning · Interoperable LLM/SLM architecture', emoji: '🧠', bg: 'bg-indigo-800' },
  { name: 'Knowledge Layer', desc: 'Enterprise data contextualization · Domain SLM injection · RAG optimization', emoji: '📚', bg: 'bg-blue-700' },
  { name: 'Data Layer', desc: 'Composable data fabric · 200+ connectors · Zero-copy architecture · No data migration', emoji: '🗄️', bg: 'bg-sky-900' },
];

const personas = [
  {
    emoji: '👩‍💼',
    title: 'CDAO / CISO',
    role: 'Chief Data & AI Officer · Chief Information Security Officer',
    bg: 'bg-indigo-50',
    accent: 'text-indigo-700',
    dot: 'bg-indigo-500',
    priorities: [
      'Sovereign AI — no cloud lock-in or IP leakage risk',
      'Zero-copy architecture meets HIPAA, GDPR, FINRA mandates',
      'SLM guardrails preventing hallucinations at scale',
      'Enterprise audit trail & governance for compliance',
    ]
  },
  {
    emoji: '👨‍💻',
    title: 'VP Enterprise Architecture',
    role: 'Head of IT Automation · Enterprise Architect',
    bg: 'bg-emerald-50',
    accent: 'text-emerald-700',
    dot: 'bg-emerald-500',
    priorities: [
      'Composability — plugs into existing enterprise stack seamlessly',
      '10x lower TCO vs. hyperscaler LLM API costs at scale',
      'Replace brittle RPA with intelligent, maintainable agents',
      'Zero-copy integration — no painful ETL migrations',
    ]
  },
  {
    emoji: '👩‍🏦',
    title: 'LOB Operations Leader',
    role: 'Head of HR · Finance · Procurement',
    bg: 'bg-amber-50',
    accent: 'text-amber-700',
    dot: 'bg-amber-500',
    priorities: [
      'Business outcomes — not technology features',
      'Automate complex multi-step back-office workflows',
      'Reduce manual process overhead and labor costs',
      'Measurable ROI within 6 months of deployment',
    ]
  },
];

const OverviewView = () => {
  return (
    <div className="view-container animate-fade-in">
      <div className="view-header">
        <h2 className="view-title">Uniphore Overview</h2>
        <p className="view-subtitle">Platform assessment, SWOT analysis, and the state of the platform and its users as of 2026.</p>
      </div>

      {/* 1. Company Overview */}
      <div id="company" className="glass-panel p-8 flex items-start gap-8">
        {/* Logo mark */}
        <div className="shrink-0 flex flex-col items-center gap-2">
          <div className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-md" style={{ backgroundColor: 'var(--accent-primary)' }}>
            <span className="text-white font-black text-3xl" style={{ fontFamily: 'system-ui', letterSpacing: '-1px' }}>U</span>
          </div>
          <span className="text-xs font-bold text-primary tracking-wide">Uniphore</span>
        </div>
        {/* Text */}
        <p className="text-base text-primary leading-relaxed" style={{ maxWidth: 760 }}>
          Uniphore is a global, privately-held software company specializing in enterprise-grade artificial intelligence, specifically focusing on <strong>"Business AI"</strong> and agentic AI platforms. Uniphore has evolved from an early pioneer in conversational AI into a comprehensive AI platform provider. The <strong>Business AI Cloud</strong> platform was launched in June 2025.
        </p>
      </div>

      {/* 2. Table of Contents */}
      <div className="glass-panel p-8">
        <h3 className="text-base font-bold text-primary uppercase tracking-wider mb-5">On This Page</h3>
        <div className="flex flex-col divide-y divide-slate-100">
          {tocItems.map((item, i) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="flex items-center gap-4 py-3 text-left hover:bg-slate-50 rounded-lg px-2 transition-colors group"
            >
              <span className="w-6 h-6 rounded-full bg-slate-100 text-slate-500 text-xs font-bold flex items-center justify-center shrink-0 group-hover:bg-accent-primary group-hover:text-white transition-colors">
                {i + 1}
              </span>
              <div>
                <span className="text-sm font-semibold text-accent-primary group-hover:underline">{item.label}</span>
                <span className="text-xs text-muted ml-2">— {item.desc}</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* 3. Platform Architecture + State of Platform */}
      <div id="platform" className="grid-2">
        <div className="glass-panel p-8">
          <h3 className="text-xl font-bold text-primary mb-2">Business AI Cloud Architecture</h3>
          <p className="text-sm text-muted mb-5">Four composable layers enabling sovereign enterprise AI.</p>
          <div className="flex flex-col gap-2">
            {platformLayers.map((layer) => (
              <div key={layer.name} className={`${layer.bg} rounded-xl p-5 flex items-center gap-4`}>
                <span className="text-3xl">{layer.emoji}</span>
                <div>
                  <div className="font-bold text-white text-base">{layer.name}</div>
                  <div className="text-xs text-blue-200 mt-1 leading-relaxed">{layer.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div id="state" className="flex flex-col gap-5">
          <div className="glass-panel p-8">
            <h3 className="text-xl font-bold text-primary mb-4">State of the Platform</h3>
            <div className="space-y-3">
              {[
                { label: 'Lifecycle Phase', value: 'Early Adoption / Re-platforming', tag: 'bg-amber-100 text-amber-700' },
                { label: 'GTM Motion', value: 'Pivot & Expand', tag: 'bg-blue-100 text-blue-700' },
                { label: 'Core Heritage', value: 'CCaaS / Conversational AI', tag: 'bg-indigo-100 text-indigo-700' },
                { label: 'Key Differentiator', value: 'Sovereign SLM Factory', tag: 'bg-emerald-100 text-emerald-700' },
                { label: 'Developer Ecosystem', value: 'SI-Only (No Public Devs Yet)', tag: 'bg-red-100 text-red-700' },
              ].map(item => (
                <div key={item.label} className="flex items-center justify-between py-2 border-b border-slate-100 last:border-0">
                  <span className="text-sm text-muted">{item.label}</span>
                  <span className={`text-xs font-bold px-3 py-1 rounded-full ${item.tag}`}>{item.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-panel p-6 bg-slate-50">
            <h4 className="font-bold text-sm text-primary mb-3">The Builder Reality — Three Closed Tiers</h4>
            {[
              { tier: 'Tier 1', label: 'SI Partners', desc: 'KPMG, Cognizant building vertical agents for enterprise clients.', color: 'bg-blue-500' },
              { tier: 'Tier 2', label: 'Enterprise IT', desc: 'Customer IT teams configuring BPMN workflows via low-code tools.', color: 'bg-indigo-400' },
              { tier: 'Tier 3', label: 'Internal Eng', desc: 'Uniphore engineers building the core platform itself.', color: 'bg-slate-400' },
            ].map(t => (
              <div key={t.tier} className="flex gap-3 items-start py-2 border-b border-slate-200 last:border-0">
                <span className={`text-xs font-bold text-white px-2 py-0.5 rounded mt-0.5 shrink-0 ${t.color}`}>{t.tier}</span>
                <div>
                  <span className="text-sm font-semibold text-primary">{t.label}</span>
                  <span className="text-sm text-muted ml-1">— {t.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 4. Personas */}
      <div id="personas" className="glass-panel p-8">
        <h3 className="text-xl font-bold text-primary mb-2">Key Buyer Personas</h3>
        <p className="text-sm text-muted mb-6">The Business AI Cloud shifts the buyer from VP Customer Service to enterprise technology and operations leaders.</p>
        <div className="grid grid-cols-3 gap-6">
          {personas.map((persona) => (
            <div key={persona.title} className={`${persona.bg} rounded-xl p-6`}>
              <div className="text-4xl mb-3">{persona.emoji}</div>
              <div className={`font-bold text-lg ${persona.accent}`}>{persona.title}</div>
              <div className="text-xs text-muted mt-1 mb-5 leading-relaxed">{persona.role}</div>
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">Core Priorities</div>
              <ul className="space-y-2">
                {persona.priorities.map((p, i) => (
                  <li key={i} className="text-sm text-slate-700 flex gap-2 leading-snug">
                    <span className={`w-1.5 h-1.5 rounded-full ${persona.dot} shrink-0 mt-1.5`}></span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* 5. SWOT */}
      <div id="swot" className="glass-panel p-8">
        <h3 className="text-xl font-bold mb-1 text-primary">SWOT Analysis — Business AI Cloud Platform</h3>
        <p className="text-sm text-muted mb-6">Assessment of Uniphore's competitive position heading into 2026.</p>
        <div className="grid grid-cols-2 gap-4">
          {swotData.map((q) => {
            const Icon = q.icon;
            return (
              <div key={q.key} className={`rounded-xl border-t-4 ${q.borderColor} p-6 ${q.bg}`}>
                <div className={`flex items-center gap-2 mb-4 ${q.iconColor}`}>
                  <Icon size={18} strokeWidth={2.5} />
                  <span className="font-bold text-sm uppercase tracking-wider">{q.title}</span>
                </div>
                <ul className="space-y-2">
                  {q.items.map((item, i) => (
                    <li key={i} className="flex gap-2 text-sm text-slate-700 leading-snug">
                      <span className="mt-1 shrink-0 text-slate-400">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default OverviewView;
