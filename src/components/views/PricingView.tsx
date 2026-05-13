import { Package, FileCode, BookOpen, Cpu, Plug, CreditCard, ChevronRight } from 'lucide-react';
import './views.css';

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
};

const tocItems = [
  { id: 'tiers', label: 'Pricing Recommendations', desc: 'Asset-tier pricing model across 5 marketplace listing types' },
  { id: 'credit', label: 'The New Platform Credit Model', desc: 'Tiered annual commit replacing rigid per-seat licensing' },
];

const assetTiers = [
  {
    icon: Package,
    label: 'Fully Packaged Agents',
    model: 'Outcome / Transaction-Based',
    color: 'bg-indigo-50',
    border: 'border-indigo-200',
    iconColor: 'text-indigo-600',
    tagBg: 'bg-indigo-100',
    tagText: 'text-indigo-700',
    desc: 'Complex partner-built agents (e.g., IT Helpdesk Agent) priced per resolved outcome — burning a set amount of Platform Credits (e.g., 50 credits) per successfully completed ticket.',
    split: '80–85% partner / 15–20% Uniphore platform fee',
  },
  {
    icon: FileCode,
    label: 'Agent Templates & Workflows',
    model: 'Free (Loss-Leader)',
    color: 'bg-emerald-50',
    border: 'border-emerald-200',
    iconColor: 'text-emerald-600',
    tagBg: 'bg-emerald-100',
    tagText: 'text-emerald-700',
    desc: 'Templates are free to eliminate adoption friction. Uniphore monetizes the execution backend — charging for BPMN workflow node executions and SLM token inference required to run the agent.',
    split: 'No rev-share on the template itself — monetized through backend compute credits',
  },
  {
    icon: BookOpen,
    label: 'Domain Knowledge Templates (Ontologies)',
    model: 'Freemium + One-Time Credit Burn',
    color: 'bg-amber-50',
    border: 'border-amber-200',
    iconColor: 'text-amber-600',
    tagBg: 'bg-amber-100',
    tagText: 'text-amber-700',
    desc: 'Generic templates are free. Unlocking the full domain-specific expansion (e.g., a specialized oncology knowledge graph) incurs a one-time Platform Credit burn — letting partners monetize deep IP without upfront cash friction.',
    split: '80–85% partner / 15–20% Uniphore on credit unlocks',
  },
  {
    icon: Cpu,
    label: 'Small Language Models (SLMs)',
    model: 'Pay-As-You-Go + Rev-Share Markup',
    color: 'bg-blue-50',
    border: 'border-blue-200',
    iconColor: 'text-blue-600',
    tagBg: 'bg-blue-100',
    tagText: 'text-blue-700',
    desc: "Uniphore's base models operate on strict pay-as-you-go (per 1M tokens). Highly-specialized Premium SLMs listed by partners follow a Rev-Share Markup — customers pay a premium per token, split between Uniphore and the partner.",
    split: 'Variable per-token split based on partner agreement',
  },
  {
    icon: Plug,
    label: 'Data Connectors & ISV Plugins',
    model: 'Free (Core) + Freemium SaaS (ISV)',
    color: 'bg-slate-50',
    border: 'border-slate-200',
    iconColor: 'text-slate-600',
    tagBg: 'bg-slate-100',
    tagText: 'text-slate-600',
    desc: 'Foundational connectors (Salesforce, Zendesk) are included free to drive data gravity. Specialized ISV plugins operate on a Freemium + SaaS Subscription model.',
    split: 'Uniphore takes a standard transaction cut on paid ISV subscriptions',
  },
];


const creditUses = [
  { label: 'Human Agent Seat Licenses', desc: 'Maintain seat licenses for remaining human agents during the AI transition period.' },
  { label: 'SLM Token Consumption', desc: 'Charged per 1M tokens when automated marketplace agents execute tasks.' },
  { label: 'GPU Hours (SLM Factory)', desc: 'Rent compute in the SLM Factory to fine-tune custom sovereign models.' },
];

const PricingView = () => {
  return (
    <div className="view-container animate-fade-in">
      <div className="view-header">
        <h2 className="view-title">Pricing Strategy</h2>
        <p className="view-subtitle">A "Razor and Blades" marketplace pricing architecture — free templates drive adoption while backend compute and token consumption drive revenue, unified through the Platform Credit model.</p>
      </div>

      {/* TOC */}
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

      {/* 1. Pricing Recommendations */}
      <div id="tiers" className="glass-panel p-8">
        <h3 className="text-xl font-bold text-primary mb-1">Pricing Recommendations for the Marketplace</h3>
        <p className="text-sm text-muted mb-6">Five distinct asset types, each with a pricing model optimized for adoption and monetization.</p>
        <div className="flex flex-col gap-4">
          {assetTiers.map((tier, i) => {
            const Icon = tier.icon;
            return (
              <div key={tier.label} className={`rounded-xl border ${tier.border} ${tier.color} p-5 flex items-start gap-5`}>
                <div className="flex flex-col items-center gap-2 shrink-0">
                  <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-sm">
                    <Icon className={tier.iconColor} size={20} />
                  </div>
                  <span className="text-3xl font-black" style={{ color: '#e2e8f0' }}>0{i + 1}</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-1 flex-wrap">
                    <span className="font-bold text-primary">{tier.label}</span>
                    <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${tier.tagBg} ${tier.tagText}`}>{tier.model}</span>
                  </div>
                  <p className="text-sm text-muted leading-relaxed mb-3">{tier.desc}</p>
                  <div className="flex items-center gap-2 bg-white rounded-lg px-3 py-2 border border-slate-100 w-fit">
                    <ChevronRight className="text-slate-400" size={14} />
                    <span className="text-xs text-slate-600 font-medium">{tier.split}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 2. Platform Credit Model */}
      <div id="credit" className="glass-panel p-8 border-l-4 border-l-accent-primary">
        <div className="flex items-start gap-3 mb-2">
          <CreditCard className="text-accent-primary shrink-0 mt-1" size={22} />
          <h3 className="text-xl font-bold text-primary">The New Platform Credit Model</h3>
        </div>
        <p className="text-sm text-muted leading-relaxed mb-6">
          Historically, Uniphore has relied on a traditional Enterprise SaaS model—selling top-down to Contact Center VPs based on rigid <strong>Per-Seat Licensing</strong> (charging per human agent) combined with heavy professional service fees. To bridge the legacy enterprise business with the modern Business AI Cloud, Uniphore must transition to a <strong>Platform Credit Model</strong> (similar to Snowflake or AWS).
        </p>

        {/* Credit Tiers */}
        <div className="mb-6">
          <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Annual Commit Tiers</span>
          <p className="text-sm text-muted mt-2 leading-relaxed">
            Enterprises make an annual commit against tiered credit pools — indicatively structured around <strong>Starter</strong>, <strong>Growth</strong>, and <strong>Enterprise</strong> tiers (e.g., ~$250K, ~$500K, ~$1M+), with built-in overage fees enabling seamless upgrades as usage grows.
          </p>
          <p className="text-xs text-slate-400 italic mt-2">Exact tier thresholds and breakpoints should be validated through customer and partner research before finalizing.</p>
        </div>

        {/* Flexible Credit Usage */}
        <div>
          <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Flexible Credit Usage</span>
          <p className="text-sm text-muted mt-1 mb-3">Instead of rigid seat licenses, the enterprise credit pool is consumed flexibly across the entire Uniphore ecosystem:</p>
          <div className="flex flex-col gap-3">
            {creditUses.map(use => (
              <div key={use.label} className="flex items-start gap-3 bg-blue-50 rounded-xl px-4 py-3 border border-blue-100">
                <ChevronRight className="text-accent-primary shrink-0 mt-0.5" size={16} />
                <div>
                  <span className="text-sm font-semibold text-primary">{use.label}</span>
                  <span className="text-sm text-muted ml-1">— {use.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingView;
