import { Database, GitBranch, Cpu, ShieldCheck, Users, Search, LayoutDashboard, Store, CheckCircle2, Circle, Network } from 'lucide-react';
import './views.css';

const mvpStats = [
  { value: '12–18mo', label: 'Recommended Launch', sub: 'After integration debt is cleared' },
  { value: 'MVP Scope', label: 'Horizon 1', sub: 'SI-led Partner Exchange' },
  { value: '3', label: 'Target Verticals', sub: 'BFSI, Telecom, Healthcare' },
  { value: '70/30', label: 'Revenue Share (H3)', sub: 'Partner / Uniphore split' },
];

// Priority Matrix quadrants
const priorityMatrix = [
  {
    quadrant: 'Build Now', sub: 'High Value · Low Effort', bg: 'bg-emerald-50', border: 'border-emerald-400', titleColor: 'text-emerald-700',
    items: [
      'Curated SI Discovery Catalog (search by vertical, asset type, partner)',
      '"Verified by Uniphore" trust badging system',
      '"Request Deployment" lead generation flow',
      'Rich asset profile pages (accuracy, latency, compliance specs)',
    ]
  },
  {
    quadrant: 'Strategic Bets', sub: 'High Value · High Effort', bg: 'bg-blue-50', border: 'border-blue-400', titleColor: 'text-blue-700',
    items: [
      'Private SI Publishing Portal with governance review workflow',
      'Admin Governance Console (submit → scan → approve/reject)',
      'Lead routing system to SI partner + AE for co-selling',
      'Asset version control for SLM and agent updates',
    ]
  },
  {
    quadrant: 'Fill When Ready', sub: 'Lower Value · Low Effort', bg: 'bg-amber-50', border: 'border-amber-400', titleColor: 'text-amber-700',
    items: [
      'Partner analytics dashboard (traffic, views, leads)',
      'API-first integration layer for ISV SDK access',
      'Marketplace search and filter UX improvements',
    ]
  },
  {
    quadrant: 'Defer to H2/H3', sub: 'Lower Value / High Effort', bg: 'bg-slate-50', border: 'border-slate-300', titleColor: 'text-slate-500',
    items: [
      'Self-serve developer onboarding (open marketplace)',
      '1-click automated agent installation & billing',
      'Independent developer revenue sharing engine',
      'Open hackathon & DevRel program infrastructure',
    ]
  },
];

const assetTypes = [
  {
    icon: Cpu, bg: 'bg-blue-50', border: 'border-blue-100', iconColor: 'text-accent-primary',
    title: 'Domain-Specific SLMs',
    tag: 'Highest Value',
    tagBg: 'bg-blue-100 text-blue-700',
    desc: 'Pre-trained, fine-tuned Small Language Models for specific verticals (e.g., "European Retail Banking Compliance SLM" built by KPMG). This is the highest-value asset class — directly monetizes the SLM Factory.',
  },
  {
    icon: GitBranch, bg: 'bg-indigo-50', border: 'border-indigo-100', iconColor: 'text-accent-secondary',
    title: 'Agents & Agent Templates',
    tag: 'High Value',
    tagBg: 'bg-indigo-100 text-indigo-700',
    desc: 'Fully packaged autonomous agents for standardized use cases, alongside pre-configured BPMN workflow templates that require "last mile" SI integration (e.g., "Automated Employee Onboarding").',
  },
  {
    icon: Network, bg: 'bg-fuchsia-50', border: 'border-fuchsia-100', iconColor: 'text-fuchsia-600',
    title: 'Domain-specific knowledge templates',
    tag: 'Time-to-Value',
    tagBg: 'bg-fuchsia-100 text-fuchsia-700',
    desc: 'A curated layer of anonymized, pre-built domain ontologies, entity taxonomies, and knowledge graph templates that accelerate time-to-value. A healthcare customer wouldn\'t have to build their clinical entity graph from zero — they\'d start from the knowledge scaffold and customize it with their proprietary data.',
  },
  {
    icon: Database, bg: 'bg-emerald-50', border: 'border-emerald-100', iconColor: 'text-emerald-600',
    title: 'Specialized Data Connectors',
    tag: 'High Growth',
    tagBg: 'bg-emerald-100 text-emerald-700',
    desc: 'Custom integrations to niche, industry-specific legacy systems (e.g., Epic EMR for healthcare, legacy telecom billing mainframes) that expand beyond Uniphore\'s first-party 200+ connector library.',
  },
  {
    icon: ShieldCheck, bg: 'bg-amber-50', border: 'border-amber-100', iconColor: 'text-amber-600',
    title: 'Governance & Guardrail Plugins',
    tag: 'Compliance Critical',
    tagBg: 'bg-amber-100 text-amber-700',
    desc: 'Modular compliance-checking logic blocks slotted into agent pipelines (e.g., a localized PII redaction filter for GDPR in Germany, or a FINRA audit trail block for US trading compliance).',
  },
];

const roadmap = [
  {
    phase: 'M1–3', color: 'bg-blue-600', title: 'Platform API Stabilization',
    items: [
      'Complete integration of Orby, Autonom8, ActionIQ, Infoworks acquisitions',
      'Define stable, versioned Marketplace SDK for SI partners',
      'Internal governance workflow tools and security scan pipeline',
    ]
  },
  {
    phase: 'M4–6', color: 'bg-indigo-600', title: 'Partner Exchange Alpha',
    items: [
      'Private catalog UI with BFSI and Telecom asset categories',
      'Onboard 3 SI partners (KPMG, Cognizant, Rackspace) with first listings',
      '"Verified by Uniphore" badging and asset profile pages live',
    ]
  },
  {
    phase: 'M7–12', color: 'bg-emerald-600', title: 'Horizon 1 Launch & Iteration',
    items: [
      '"Request Deployment" flow wired to SI partner CRM lead routing',
      'Partner analytics dashboard shipped to SI partners',
      'Target: 10+ certified assets, 5+ enterprise leads/month from catalog',
    ]
  },
  {
    phase: 'M13–24', color: 'bg-amber-600', title: 'Horizon 2 — ISV Expansion',
    items: [
      'Open marketplace to certified ISVs with self-serve SDK and sandbox',
      'Launch specialized data connector and governance plugin categories',
      'Target: 50+ ISV integrations, API utilization growth metrics hit',
    ]
  },
];

interface MVPViewProps {
  onLaunchPrototype?: () => void;
}

const MVPView = ({ onLaunchPrototype }: MVPViewProps) => {
  return (
    <div className="view-container animate-fade-in">
      <div className="view-header">
        <h2 className="view-title">MVP Definition</h2>
        <p className="view-subtitle">Architecting the B2B Curated Partner Exchange — Horizon 1 of the Business AI Cloud Marketplace.</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-4 gap-5">
        {mvpStats.map(s => (
          <div key={s.label} className="glass-panel p-6 text-center">
            <div className="text-2xl font-black text-accent-primary">{s.value}</div>
            <div className="text-sm font-bold text-primary mt-2">{s.label}</div>
            <div className="text-xs text-muted mt-1">{s.sub}</div>
          </div>
        ))}
      </div>

      {/* What the Exchange Hosts */}
      <div>
        <div className="flex items-center gap-3 mb-2">
          <Store className="text-primary" size={26} />
          <h3 className="text-2xl font-bold text-primary">The Exchange: What is Traded?</h3>
        </div>
        <p className="text-md text-muted mb-6 leading-relaxed max-w-4xl">
          Drawing inspiration from mature enterprise marketplaces like Salesforce AppExchange <span className="text-slate-500">(components, industry templates)</span> and Snowflake Data Cloud <span className="text-slate-500">(data apps, models)</span>, the Uniphore BCAI Marketplace will not host generic "prompt wrappers." It will be an exchange for deep, secure enterprise assets that require professional deployment.
        </p>
        <div className="grid grid-cols-2 gap-5">
          {assetTypes.map((a) => {
            const Icon = a.icon;
            return (
              <div key={a.title} className={`glass-panel p-6 flex items-start gap-4 ${a.bg} border ${a.border}`}>
                <div className={`p-3 bg-white rounded-xl shrink-0 border ${a.border} shadow-sm`}>
                  <Icon className={a.iconColor} size={24} />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-bold text-primary text-base">{a.title}</h4>
                    <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${a.tagBg}`}>{a.tag}</span>
                  </div>
                  <p className="text-sm text-muted leading-relaxed">{a.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Feature Priority Matrix */}
      <div>
        <h3 className="text-2xl font-bold text-primary mb-2">Feature Priority Matrix</h3>
        <p className="text-sm text-muted mb-6">Plotting MVP features by strategic value vs. development effort — what to build first for Horizon 1.</p>
        <div className="grid grid-cols-2 gap-1 rounded-xl overflow-hidden border border-slate-200">
          {priorityMatrix.map((q) => (
            <div key={q.quadrant} className={`${q.bg} p-6 border-t-4 ${q.border}`}>
              <div className={`text-xs font-bold uppercase tracking-wider mb-1 ${q.titleColor}`}>{q.quadrant}</div>
              <div className="text-xs text-muted mb-4">{q.sub}</div>
              <ul className="space-y-2">
                {q.items.map((item, i) => (
                  <li key={i} className="flex gap-2 text-sm text-slate-700 leading-snug">
                    <CheckCircle2 size={14} className={`shrink-0 mt-0.5 ${q.titleColor}`} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* MVP Feature Scope - 3 sides */}
      <div>
        <h3 className="text-2xl font-bold text-primary mb-6">MVP Feature Scope (Horizon 1)</h3>
        <div className="grid-2">
          {/* Demand Side */}
          <div className="glass-panel overflow-hidden border-t-4 border-t-accent-primary">
            <div className="p-6 bg-slate-50 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <Search className="text-accent-primary" size={24} />
                <h4 className="font-bold text-primary text-xl">Demand Side (Enterprises)</h4>
              </div>
            </div>
            <div className="p-6">
              <ul className="text-sm text-muted flex flex-col gap-4">
                <li className="flex gap-3">
                  <CheckCircle2 size={16} className="text-accent-primary shrink-0 mt-0.5" />
                  <span><strong>Curated Discovery Catalog:</strong> A secure, searchable storefront categorized by Vertical (BFSI, Telecom), Asset Type (SLM, Agent, Connector), and SI Partner.</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 size={16} className="text-accent-primary shrink-0 mt-0.5" />
                  <span><strong>"Verified by Uniphore" Badging:</strong> Visual indicators that an asset has passed strict security, sovereignty, and data-leakage reviews.</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 size={16} className="text-accent-primary shrink-0 mt-0.5" />
                  <span><strong>Rich Asset Profiles:</strong> Model accuracy metrics, latency benchmarks, compliance standards (HIPAA, GDPR), and architectural requirements.</span>
                </li>
                <li className="flex gap-3 bg-blue-50 p-4 rounded-xl border border-blue-100">
                  <CheckCircle2 size={16} className="text-accent-primary shrink-0 mt-0.5" />
                  <span><strong className="text-primary">"Request Deployment" Flow (NOT 1-click buy):</strong> A qualified lead-generation flow routing the request directly to the SI partner for a scoped professional services deployment engagement.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Supply Side */}
          <div className="glass-panel overflow-hidden border-t-4 border-t-accent-secondary">
            <div className="p-6 bg-slate-50 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <Users className="text-accent-secondary" size={24} />
                <h4 className="font-bold text-primary text-xl">Supply Side (SI Partners)</h4>
              </div>
            </div>
            <div className="p-6">
              <ul className="text-sm text-muted flex flex-col gap-4">
                <li className="flex gap-3">
                  <CheckCircle2 size={16} className="text-accent-secondary shrink-0 mt-0.5" />
                  <span><strong>Private Publishing Portal:</strong> A secure UI for partners to submit assets (SLMs, workflow packages) to Uniphore for technical and security review.</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 size={16} className="text-accent-secondary shrink-0 mt-0.5" />
                  <span><strong>Asset Version Control:</strong> Push updates to SLMs or agents as underlying models or regulations evolve over time.</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 size={16} className="text-accent-secondary shrink-0 mt-0.5" />
                  <span><strong>Partner Analytics Dashboard:</strong> Visibility into catalog traffic, asset views, and lead generation pipeline — who requested their agent and when.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Host Side - full width */}
          <div className="glass-panel overflow-hidden border-t-4 border-t-emerald-500 col-span-2">
            <div className="p-6 bg-slate-50 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <LayoutDashboard className="text-emerald-600" size={24} />
                <h4 className="font-bold text-primary text-xl">Host Features (Uniphore Admins)</h4>
              </div>
            </div>
            <div className="p-6 grid grid-cols-2 gap-8">
              <div className="flex gap-3 text-sm text-muted">
                <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Admin Governance Console:</strong> Internal workflow tools for Uniphore engineers to test, security-scan, and approve or reject partner submissions before they go live on the catalog.</span>
              </div>
              <div className="flex gap-3 text-sm text-muted">
                <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Lead Routing System:</strong> Infrastructure to capture enterprise demand from the catalog and route it to the appropriate SI partner and Uniphore account executive for co-selling engagement.</span>
              </div>
              <div className="flex gap-3 text-sm text-muted">
                <Circle size={16} className="text-slate-300 shrink-0 mt-0.5" />
                <span className="text-slate-400"><strong>Platform API Stability (Invisible MVP):</strong> The foundational APIs required for an SI's custom agent to dock into a customer's specific BCAI instance securely — the unsexy but critical foundation.</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Roadmap */}
      <div>
        <h3 className="text-2xl font-bold text-primary mb-2">Execution Roadmap</h3>
        <p className="text-sm text-muted mb-6">Phased milestones from platform stabilization through Horizon 2 marketplace expansion.</p>
        <div className="relative">
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-slate-200" />
          <div className="flex flex-col gap-6">
            {roadmap.map((r) => (
              <div key={r.phase} className="flex gap-6 items-start pl-0">
                <div className={`w-12 h-12 rounded-full ${r.color} flex items-center justify-center text-white font-bold text-xs shrink-0 z-10 shadow`}>{r.phase}</div>
                <div className="glass-panel p-5 flex-1">
                  <div className="font-bold text-primary text-base mb-3">{r.title}</div>
                  <ul className="space-y-2">
                    {r.items.map((item, i) => (
                      <li key={i} className="flex gap-2 text-sm text-muted leading-snug">
                        <span className="text-slate-300 mt-1 shrink-0">→</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Prototype Launch */}
      {onLaunchPrototype && (
        <div className="mt-12 glass-panel p-8 text-center border-accent-primary border-2 bg-slate-50/50">
          <h3 className="text-2xl font-bold text-primary mb-3">View the Acme Insurance Journey</h3>
          <p className="text-muted mb-6 max-w-2xl mx-auto">Launch the interactive UI prototype to see how the marketplace implements frictionless discovery, transparent pricing, and the SI lead generation hook.</p>
          <button 
            className="primary-button" 
            style={{ padding: '0.75rem 2rem', fontSize: '1.1rem' }}
            onClick={onLaunchPrototype}
          >
            Launch MVP Prototype
          </button>
        </div>
      )}
    </div>
  );
};

export default MVPView;
