import { Building2, AppWindow, Code2, Users, Briefcase, Server, DollarSign, TrendingUp, CheckCircle2, XCircle, AlertCircle } from 'lucide-react';
import './views.css';

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
};

const tocItems = [
  { id: 'ecosystem', label: 'Fulfilling Ecosystem Needs', desc: 'Why enterprises, SIs, and Uniphore all need this exchange' },
  { id: 'pros-cons', label: 'Pros, Cons & Success Factors', desc: 'Strategic trade-offs and what must hold true for marketplace success' },
  { id: 'answer', label: 'The Strategic Answer', desc: 'Should Uniphore build? Yes — but phased, starting with SI-Led Exchange' },
  { id: 'horizons', label: '3-Horizon Execution Plan', desc: 'SI-Led Exchange → ISV Expansion → Open Developer Marketplace' },
  { id: 'pillars', label: 'Five Platform Strategy Pillars', desc: 'The broader BCAI platform strategy the marketplace sits within' },
];

const pillars = [
  {
    num: '01', title: 'Install Base Expansion', color: 'border-t-accent-primary',
    desc: 'Aggressively cross-sell Business AI Cloud to all 2,000+ existing enterprise customers. Leverage existing security clearances and vendor approvals in BFSI and Telecom to eliminate procurement friction. Target CDAOs and IT Architects — not just CCaaS buyers.',
  },
  {
    num: '02', title: 'Regulated Industry Dominance', color: 'border-t-emerald-500',
    desc: 'Become the de facto sovereign AI platform for BFSI, Healthcare, Telecom, and Public Sector. These verticals cannot use hyperscaler public cloud AI due to compliance mandates — Uniphore\'s architecture is purpose-built for this constraint.',
  },
  {
    num: '03', title: 'SLM Factory as a Moat', color: 'border-t-amber-500',
    desc: 'Position the native SLM Factory as an irreversible competitive moat. As enterprises fine-tune domain-specific models on their proprietary data within Uniphore\'s platform, switching costs become extraordinarily high — creating durable, multi-year account lock-in.',
  },
  {
    num: '04', title: 'Curated Partner Marketplace', color: 'border-t-indigo-500',
    desc: 'Build an SI/ISV partner ecosystem via a phased Agent Marketplace. Start with a private SI-led Partner Exchange (Horizon 1), expand to ISVs (Horizon 2), then open to independent developers (Horizon 3) — outsourcing vertical R&D while creating network effects.',
  },
  {
    num: '05', title: 'Outcome-Driven Sales Motion', color: 'border-t-red-500',
    desc: 'Shift the narrative from platform features to measurable business outcomes: "Cut back-office processing costs by 60%," "Zero IP leakage risk." Lead with ROI-proven case studies from BFSI/Telecom deployments to shorten enterprise sales cycles.',
  },
];

const pros = [
  'Outsources vertical R&D to the SI/ISV ecosystem at near-zero internal engineering cost',
  'Creates compounding network effects — each marketplace asset woven into enterprise operations raises exit barriers significantly',
  'Unlocks new recurring revenue streams: 15–20% platform fee on every SI-built SLM or agent transaction processed',
  'Accelerates enterprise time-to-value without scaling internal headcount proportionally',
  'Transforms Uniphore from a point solution into a platform standard — the foundational "infrastructure layer" that others build on',
  'Aligns SI partner incentives with Uniphore growth: partners earn recurring software revenue, not just one-off billable hours',
];

const cons = [
  '"Empty store" paradox: without an existing developer community, cold-starting supply is the critical execution blocker',
  'Integration debt from rapid acquisitions (Orby, Autonom8, ActionIQ, Infoworks) means platform APIs are not yet stable enough for external developers',
  'Quality & trust erosion risk: a failed 3rd-party asset in a regulated deployment can damage enterprise credibility catastrophically and irreversibly',
  'Ongoing curation cost: governing sovereign-grade AI assets requires significant security review overhead at every new submission',
  'Channel conflict risk: SI partners may resist listing IP if they fear Uniphore will commoditize or absorb it in-house at a later stage',
  'Billing complexity: managing 15–20% platform fees and rev-share accounting at scale requires dedicated infrastructure investment upfront',
];

const mustHoldTrue = [
  { label: 'API Stability First', desc: 'External developers cannot build on moving foundations. Acquisition integration debt must be fully cleared before public APIs are stable enough to build on reliably.' },
  { label: 'Minimum Viable Supply', desc: '10–15 high-quality "Verified by Uniphore" assets from 3+ SI partners must exist before any enterprise buyer is invited to browse the catalog.' },
  { label: 'Governance Infrastructure Live', desc: 'The "Verified by Uniphore" security review pipeline must be fully operational before any asset goes live. Trust cannot be retrofitted after the fact.' },
  { label: 'Platform Billing Foundation', desc: 'The Platform Credit model must be live in core Uniphore admin before marketplace transactions can be processed and partner rev-share can be calculated.' },
  { label: 'SI Partnership Agreements Signed', desc: 'Explicit rev-share contracts, IP ownership clarity, and co-sell commitments with at least Cognizant and KPMG must be in place before launch day.' },
  { label: 'One Reference Per Target Vertical', desc: 'At least one production SI-led deployment in BFSI, Telecom, and Healthcare before any broad market announcement or press release is made.' },
];

const StrategyView = () => {
  return (
    <div className="view-container animate-fade-in">
      <div className="view-header">
        <h2 className="view-title">Marketplace Strategy</h2>
        <p className="view-subtitle">The strategic imperative for the BCAI Agent Marketplace — why, when, and how to build it in three phased horizons.</p>
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

      {/* Fulfilling Ecosystem Needs */}
      <div id="ecosystem" className="glass-panel p-8">
        <h3 className="text-xl font-bold text-primary mb-1">Fulfilling Ecosystem Needs</h3>
        <p className="text-md text-muted mb-6 leading-relaxed">
          A successful marketplace bridges the fragmented needs of three groups. Uniphore must build this exchange to scale hyper-verticalization, but must do so in phases to avoid the fatal "empty store" risk.
        </p>
        <div className="grid grid-cols-3 gap-5">
          {[
            { icon: Briefcase, color: 'text-blue-600', bg: 'bg-blue-50', title: 'For Enterprises (Demand)', desc: 'Drastically accelerates time-to-value. Most organizations lack the AI engineering talent to build domain-specific agents or fine-tune SLMs from scratch. The marketplace provides pre-certified, secure assets ready to deploy.' },
            { icon: Users, color: 'text-indigo-600', bg: 'bg-indigo-50', title: 'For SIs & ISVs (Supply)', desc: 'Provides distribution and monetization. SIs can take the proprietary IP they build (e.g., a custom telecom billing agent) and sell it repeatedly across Uniphore\'s 2,000+ install base, shifting from one-off services to recurring software revenue.' },
            { icon: Server, color: 'text-emerald-600', bg: 'bg-emerald-50', title: 'For Uniphore (Host)', desc: 'Effectively outsources R&D and creates an insurmountable defensive moat. Once enterprises weave third-party marketplace assets into core operations, the switching costs to leave Uniphore become exceptionally high.' },
          ].map(item => {
            const Icon = item.icon;
            return (
              <div key={item.title} className={`${item.bg} rounded-xl p-6`}>
                <div className={`flex items-center gap-2 mb-3 ${item.color}`}>
                  <Icon size={20} strokeWidth={2} />
                  <h4 className="font-bold text-primary text-sm">{item.title}</h4>
                </div>
                <p className="text-sm text-muted leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Pros & Cons + What Must Hold True */}
      <div id="pros-cons">
        <h3 className="text-2xl font-bold text-primary mb-2">Pros, Cons & Success Factors</h3>
        <p className="text-sm text-muted mb-6">Strategic trade-offs of building a marketplace, and six non-negotiable conditions that must hold true before launch.</p>

        <div className="grid-2 mb-5">
          <div className="glass-panel p-6 border-t-4 border-t-emerald-500">
            <div className="flex items-center gap-2 mb-4">
              <CheckCircle2 className="text-emerald-600" size={20} />
              <h4 className="font-bold text-primary">Strategic Benefits</h4>
            </div>
            <ul className="space-y-3">
              {pros.map((p, i) => (
                <li key={i} className="flex gap-3 text-sm text-slate-700 leading-snug">
                  <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">{i + 1}</span>
                  {p}
                </li>
              ))}
            </ul>
          </div>

          <div className="glass-panel p-6 border-t-4 border-t-red-500">
            <div className="flex items-center gap-2 mb-4">
              <XCircle className="text-red-500" size={20} />
              <h4 className="font-bold text-primary">Strategic Risks</h4>
            </div>
            <ul className="space-y-3">
              {cons.map((c, i) => (
                <li key={i} className="flex gap-3 text-sm text-slate-700 leading-snug">
                  <span className="w-5 h-5 rounded-full bg-red-100 text-red-700 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">{i + 1}</span>
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="glass-panel p-8 border-t-4 border-t-amber-500">
          <div className="flex items-center gap-2 mb-2">
            <AlertCircle className="text-amber-600" size={20} />
            <h4 className="font-bold text-primary text-lg">What Must Hold True for Marketplace Success</h4>
          </div>
          <p className="text-sm text-muted mb-5">Six non-negotiable conditions before launch — failing any one of these will result in the "empty store" failure mode.</p>
          <div className="grid grid-cols-3 gap-4">
            {mustHoldTrue.map((m, i) => (
              <div key={i} className="bg-amber-50 rounded-xl p-5 border border-amber-100">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-6 h-6 rounded-full bg-amber-200 text-amber-800 text-xs font-black flex items-center justify-center shrink-0">{i + 1}</span>
                  <span className="font-bold text-sm text-amber-900">{m.label}</span>
                </div>
                <p className="text-xs text-amber-800 leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Strategic Answer */}
      <div id="answer" className="glass-panel p-8">
        <h3 className="text-xl font-bold text-primary mb-4">Should Uniphore Build a Marketplace? — The Strategic Answer</h3>
        <div className="grid grid-cols-3 gap-4">
          <div className="p-5 bg-blue-50 rounded-xl border border-blue-200">
            <div className="flex items-center gap-2 mb-2">
              <DollarSign className="text-blue-600" size={20} />
              <span className="font-bold text-blue-800">Yes — but NOT an open marketplace today.</span>
            </div>
            <p className="text-sm text-blue-700 leading-relaxed">Build a marketplace, but in phases. Uniphore currently lacks a bottoms-up developer community. An open marketplace launched now would be an empty store. The answer is a <strong>Curated SI-Led Partner Exchange</strong> first, then expand.</p>
          </div>
          <div className="p-5 bg-amber-50 rounded-xl border border-amber-200">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="text-amber-700" size={20} />
              <span className="font-bold text-amber-800">Why now matters: the 2026 inflection point</span>
            </div>
            <p className="text-sm text-amber-700 leading-relaxed">By late 2026, Gartner forecasts 40% of enterprise apps will embed AI agents. The SI partners Uniphore relies on are already building vertical assets. Without a marketplace, Uniphore cannot monetize or retain that IP — it just becomes SI billable hours.</p>
          </div>
          <div className="p-5 bg-emerald-50 rounded-xl border border-emerald-200">
            <div className="flex items-center gap-2 mb-2">
              <Building2 className="text-emerald-700" size={20} />
              <span className="font-bold text-emerald-800">Recommended timeline: 12–18 months to launch H1</span>
            </div>
            <p className="text-sm text-emerald-700 leading-relaxed">Wait until integration debt from acquisitions (Orby, Autonom8, ActionIQ, Infoworks) is cleared and core platform APIs are stable. Then launch the SI-led Partner Exchange as the first horizon.</p>
          </div>
        </div>
      </div>

      {/* 3-Horizon Timeline */}
      <div id="horizons">
        <h3 className="text-2xl font-bold text-primary mb-2">The 3-Horizon Execution Plan (24–36 Months)</h3>
        <p className="text-sm text-muted mb-8">Phased approach to build the marketplace without the "empty store" risk.</p>
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="glass-panel p-8 border-l-4 border-l-accent-primary">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-blue-50 rounded-lg">
                  <Building2 className="text-accent-primary" size={24} />
                </div>
                <h3 className="text-xl font-bold text-primary">Horizon 1: The SI-Led "Partner Exchange"</h3>
              </div>
              <span className="text-xs font-bold text-accent-primary bg-blue-50 inline-block px-3 py-1 rounded-full border border-blue-100 mb-5">Months 1–12 · Focus: Demand validation & high-value supply</span>
              <p className="text-md text-muted mb-5 leading-relaxed">
                Do not launch a public, open portal. Launch a private, white-glove exchange that promotes Tier 1 SI partners (KPMG, Cognizant, Rackspace) led and Uniphore certified listings. Allow them to co-sell the vertical SLMs and complex agent workflows they are already building for BFSI/Telecom clients. Engineering focuses on stabilizing core platform APIs rather than self-serve developer portals.
              </p>
              <div className="grid grid-cols-2 gap-3 mb-5">
                {[
                  'Curated catalog of SI-built vertical SLMs',
                  'Private publishing portal for SI asset submission',
                  '"Verified by Uniphore" security badging system',
                  '"Request Deployment" lead generation flow',
                ].map(f => (
                  <div key={f} className="flex gap-2 text-sm text-muted bg-slate-50 p-3 rounded-lg border border-slate-100">
                    <span className="text-accent-primary font-bold mt-0.5 shrink-0">✓</span>
                    {f}
                  </div>
                ))}
              </div>
              <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 flex gap-2 items-center">
                <span className="text-sm font-bold text-primary uppercase tracking-wider">Success Metric:</span>
                <span className="text-sm text-muted">Revenue flowing through SI-built SLM deployments; number of co-sell engagements closed.</span>
              </div>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot" style={{ borderColor: 'var(--accent-secondary)' }}></div>
            <div className="glass-panel p-8 border-l-4 border-l-accent-secondary">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-indigo-50 rounded-lg">
                  <AppWindow className="text-accent-secondary" size={24} />
                </div>
                <h3 className="text-xl font-bold text-primary">Horizon 2: ISV & Data Connector Expansion</h3>
              </div>
              <span className="text-xs font-bold text-accent-secondary bg-indigo-50 inline-block px-3 py-1 rounded-full border border-indigo-100 mb-5">Months 12–24 · Focus: Broadening the ecosystem & integrations</span>
              <p className="text-md text-muted mb-5 leading-relaxed">
                Open the marketplace to certified Independent Software Vendors (ISVs). Focus heavily on niche data connectors to expand beyond Uniphore's first-party 200+, and specialized governance plugins for GDPR, HIPAA, FINRA compliance. Introduce standardized SDKs and self-serve developer sandboxes for ISVs.
              </p>
              <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 flex gap-2 items-center">
                <span className="text-sm font-bold text-primary uppercase tracking-wider">Success Metric:</span>
                <span className="text-sm text-muted">Number of certified ISV integrations listed; API utilization rates across the platform.</span>
              </div>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot" style={{ borderColor: '#10b981' }}></div>
            <div className="glass-panel p-8 border-l-4 border-l-emerald-500">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-emerald-50 rounded-lg">
                  <Code2 className="text-emerald-600" size={24} />
                </div>
                <h3 className="text-xl font-bold text-primary">Horizon 3: Open Developer Agent Marketplace</h3>
              </div>
              <span className="text-xs font-bold text-emerald-700 bg-emerald-50 inline-block px-3 py-1 rounded-full border border-emerald-100 mb-5">Months 24–36 · Focus: Long-tail developer adoption & network effects</span>
              <p className="text-md text-muted mb-5 leading-relaxed">
                Launch the fully open developer marketplace for agent templates and BPMN workflow components. Implement a revenue-sharing model (e.g., 70/30 split) to incentivize independent builders. Host hackathons and launch a formal DevRel program now that platform APIs are fully stable and integration debt is cleared.
              </p>
              <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 flex gap-2 items-center">
                <span className="text-sm font-bold text-primary uppercase tracking-wider">Success Metric:</span>
                <span className="text-sm text-muted">Number of active independent developers; monthly active third-party agents deployed by end-customers.</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Strategic Pillars */}
      <div id="pillars">
        <h3 className="text-2xl font-bold text-primary mb-2">Five Platform Strategy Pillars</h3>
        <p className="text-sm text-muted mb-6">The broader Business AI Cloud strategy that the Marketplace sits within.</p>
        <div className="grid grid-cols-3 gap-5">
          {pillars.slice(0, 3).map(p => (
            <div key={p.num} className={`glass-panel p-6 border-t-4 ${p.color}`}>
              <div className="text-5xl font-black mb-3" style={{ color: '#e2e8f0' }}>{p.num}</div>
              <h4 className="font-bold text-primary text-base mb-3">{p.title}</h4>
              <p className="text-sm text-muted leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-5 mt-5">
          {pillars.slice(3).map(p => (
            <div key={p.num} className={`glass-panel p-6 border-t-4 ${p.color}`}>
              <div className="text-5xl font-black mb-3" style={{ color: '#e2e8f0' }}>{p.num}</div>
              <h4 className="font-bold text-primary text-base mb-3">{p.title}</h4>
              <p className="text-sm text-muted leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StrategyView;
