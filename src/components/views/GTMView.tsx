import { Layers, Target, Star, Users, TrendingUp, Rocket, Building2, ChevronRight } from 'lucide-react';
import './views.css';

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
};

const tocItems = [
  { id: 'vertical', label: 'Hyper-Verticalized Approach', desc: 'BFSI, Healthcare, Telecom — localized solutions over generic AI' },
  { id: 'land', label: 'Land with Agent Templates and Turnkey Agents', desc: 'Lowest barrier to entry — LOB buyers visualize immediate ROI' },
  { id: 'hero', label: 'Strategic Co-Selling & Hero Assets', desc: 'Tier-1 SIs as vanguard; co-funded Hero Assets per vertical' },
  { id: 'align', label: 'Sales, Marketing & CS Alignment', desc: 'Data-driven targeting and guided deployment to the "Aha!" moment' },
  { id: 'expand', label: 'Expand: SLM Factory Upsell', desc: 'Infrastructure squeeze as the trigger for SLM Factory adoption' },
  { id: 'maturity', label: 'Maturity: Lead Generation Engine', desc: 'Marketplace transitions into a primary inbound growth engine' },
];

const GTMView = () => {
  return (
    <div className="view-container animate-fade-in">
      <div className="view-header">
        <h2 className="view-title">Marketplace GTM Strategy</h2>
        <p className="view-subtitle">A phased "Land and Expand" playbook — mirroring the successful GTM motions of modern data platforms like Databricks and Snowflake to drive rapid adoption of the BCAI marketplace.</p>
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

      {/* 1. Hyper-Verticalized Approach */}
      <div id="vertical" className="glass-panel p-8 border-l-4 border-l-emerald-500">
        <div className="flex items-start gap-6">
          <div className="flex flex-col items-center gap-2 shrink-0">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center">
              <Target className="text-emerald-600" size={24} />
            </div>
            <span className="text-4xl font-black" style={{ color: '#e2e8f0' }}>01</span>
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-primary mb-1">The Hyper-Verticalized Approach</h3>
            <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">Deep Vertical Partnerships</span>
            <div className="mt-4 space-y-4">
              <div>
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Target Verticals</span>
                <div className="flex gap-3 mt-2">
                  {['BFSI (Insurtech / Banking)', 'Healthcare Providers', 'Telecom'].map(v => (
                    <span key={v} className="px-3 py-1.5 bg-emerald-100 text-emerald-800 rounded-full text-xs font-bold border border-emerald-200">{v}</span>
                  ))}
                </div>
              </div>
              <p className="text-sm text-muted leading-relaxed">Generic, horizontal AI solutions are failing to gain traction in complex enterprises. Marketing and sales messaging abandons generic "AI productivity" claims in favor of highly specific, localized solutions.</p>
              <div className="bg-emerald-50 rounded-xl p-4 border border-emerald-100">
                <div className="flex items-center gap-2 mb-1">
                  <ChevronRight className="text-emerald-600" size={16} />
                  <span className="text-sm font-bold text-emerald-700">The Motion</span>
                </div>
                <p className="text-sm text-emerald-700 leading-relaxed">Lead with highly specific, localized solutions — e.g., <em>"HIPAA-compliant Claims Processing Agents"</em> rather than generic "AI for healthcare." The more specific the claim, the faster the enterprise buyer can picture the ROI.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Land with Agent Templates and Turnkey Agents */}
      <div id="land" className="glass-panel p-8 border-l-4 border-l-accent-primary">
        <div className="flex items-start gap-6">
          <div className="flex flex-col items-center gap-2 shrink-0">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center">
              <Layers className="text-accent-primary" size={24} />
            </div>
            <span className="text-4xl font-black" style={{ color: '#e2e8f0' }}>02</span>
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-primary mb-1">Land with Agent Templates and Turnkey Agents</h3>
            <span className="text-xs font-bold text-accent-primary uppercase tracking-wider">Lowest Barrier to Entry</span>
            <div className="mt-4 space-y-4">
              <div>
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">The Rationale</span>
                <p className="text-sm text-muted leading-relaxed mt-1">Selling the core "Business AI Cloud" or "SLM Factory" requires complex, top-down technical sales cycles. The GTM strategy leads instead with <strong>Agents, Agent Templates & BPMN Workflows</strong>. Templates represent the lowest barrier to platform adoption — allowing Line-of-Business (LOB) buyers to immediately visualize a solved problem (e.g., "Automated Employee Onboarding") rather than evaluating abstract infrastructure. Turnkey Agents are designed for rapid deployment, allowing companies to quickly move to production.</p>
              </div>
              <div className="bg-blue-50 rounded-xl p-4 border border-blue-100">
                <div className="flex items-center gap-2 mb-1">
                  <ChevronRight className="text-accent-primary" size={16} />
                  <span className="text-sm font-bold text-accent-primary">The Motion</span>
                </div>
                <p className="text-sm text-blue-700 leading-relaxed">Uniphore's composable architecture allows these templates to be deployed quickly, proving immediate ROI and establishing Uniphore's footprint within the enterprise — creating a natural pull toward deeper platform investment.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Strategic Co-Selling & Hero Asset */}
      <div id="hero" className="glass-panel p-8 border-l-4 border-l-amber-500">
        <div className="flex items-start gap-6">
          <div className="flex flex-col items-center gap-2 shrink-0">
            <div className="w-12 h-12 rounded-2xl bg-amber-50 flex items-center justify-center">
              <Star className="text-amber-600" size={24} />
            </div>
            <span className="text-4xl font-black" style={{ color: '#e2e8f0' }}>03</span>
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-primary mb-1">Strategic Co-Selling & The "Hero Asset" Motion</h3>
            <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">Tier-1 SIs as the Vanguard</span>
            <div className="mt-4 space-y-4">
              <p className="text-sm text-muted leading-relaxed">Tier-1 System Integrators (KPMG, Cognizant) and leading Cloud Providers serve as the vanguard — establishing immediate enterprise credibility and driving initial platform gravity while the open developer marketplace matures.</p>
              <div className="bg-amber-50 rounded-xl p-5 border border-amber-200">
                <div className="flex items-center gap-2 mb-3">
                  <Star className="text-amber-600" size={18} />
                  <span className="font-bold text-amber-900">The Hero Asset Strategy</span>
                </div>
                <p className="text-sm text-amber-800 leading-relaxed mb-3">Rather than diluting the launch with hundreds of generic plugins, Uniphore co-funds and intensely markets <strong>2–3 "Hero Assets" per vertical</strong>. These are comprehensive, highly polished, end-to-end agentic workflows architected exclusively by top-tier SIs.</p>
                <div className="bg-white rounded-lg p-4 border border-amber-100">
                  <div className="flex items-center gap-2 mb-1">
                    <ChevronRight className="text-amber-600" size={16} />
                    <span className="text-sm font-bold text-amber-700">The Motion</span>
                  </div>
                  <p className="text-sm text-amber-700 leading-relaxed">Hero Assets function as the gold standard for enterprise deployment. When a Tier-1 SI pitches a massive digital transformation initiative to a financial institution, they lead with the Hero Asset — <strong>inherently pulling Uniphore through as the mandatory foundational architecture</strong> required to run it.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 4. Sales, Marketing & CS Alignment */}
      <div id="align" className="glass-panel p-8 border-l-4 border-l-indigo-500">
        <div className="flex items-start gap-6">
          <div className="flex flex-col items-center gap-2 shrink-0">
            <div className="w-12 h-12 rounded-2xl bg-indigo-50 flex items-center justify-center">
              <Users className="text-indigo-600" size={24} />
            </div>
            <span className="text-4xl font-black" style={{ color: '#e2e8f0' }}>04</span>
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-primary mb-1">Aligning Sales, Marketing & Customer Success</h3>
            <span className="text-xs font-bold text-indigo-700 uppercase tracking-wider">Internal Alignment is Critical</span>
            <div className="mt-4 space-y-4">
              <p className="text-sm text-muted leading-relaxed">Internal alignment ensures the "Land and Expand" motion actually expands. Marketing and Sales target specific accounts based on early adoption data and telemetry from the marketplace.</p>
              <div className="bg-indigo-50 rounded-xl p-4 border border-indigo-100">
                <div className="flex items-center gap-2 mb-1">
                  <ChevronRight className="text-indigo-600" size={16} />
                  <span className="text-sm font-bold text-indigo-700">The Motion</span>
                </div>
                <p className="text-sm text-indigo-700 leading-relaxed">When an enterprise downloads a specific vertical template, the CS team is immediately alerted to guide the deployment — ensuring the customer successfully reaches the <strong>"Aha!" moment</strong> rather than abandoning the project at the pilot stage. This transforms CS from reactive support into a proactive expansion function.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 5. Expand: Upselling the SLM Factory */}
      <div id="expand" className="glass-panel p-8 border-l-4 border-l-blue-400">
        <div className="flex items-start gap-6">
          <div className="flex flex-col items-center gap-2 shrink-0">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center">
              <TrendingUp className="text-blue-600" size={24} />
            </div>
            <span className="text-4xl font-black" style={{ color: '#e2e8f0' }}>05</span>
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-primary mb-1">Expand: Upselling the SLM Factory</h3>
            <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">The Infrastructure Squeeze Trigger</span>
            <div className="mt-4 space-y-4">
              <p className="text-sm text-muted leading-relaxed">As customers successfully deploy agent templates, they will inevitably hit the <em>"infrastructure squeeze"</em> — scaling massive LLM token costs and latency bottlenecks for billions of routine workflow executions.</p>
              <div className="bg-blue-50 rounded-xl p-4 border border-blue-100">
                <div className="flex items-center gap-2 mb-1">
                  <ChevronRight className="text-blue-600" size={16} />
                  <span className="text-sm font-bold text-blue-700">The Motion</span>
                </div>
                <p className="text-sm text-blue-700 leading-relaxed">This pain point is the trigger for the CS and Sales teams to upsell the <strong>Uniphore SLM Factory</strong>. By shifting the customer from expensive, generic foundation models to hyper-efficient, fine-tuned Small Language Models (SLMs), Uniphore dramatically lowers their TCO and deeply integrates into their core architecture — creating significant switching costs.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 6. Maturity: Lead Gen Engine */}
      <div id="maturity" className="glass-panel p-8 border-l-4 border-l-emerald-400">
        <div className="flex items-start gap-6">
          <div className="flex flex-col items-center gap-2 shrink-0">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center">
              <Rocket className="text-emerald-600" size={24} />
            </div>
            <span className="text-4xl font-black" style={{ color: '#e2e8f0' }}>06</span>
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-primary mb-1">Maturity: The Launchpad & Lead Generation Engine</h3>
            <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">Horizon 3 — Platform as a Growth Engine</span>
            <div className="mt-4 space-y-4">
              <p className="text-sm text-muted leading-relaxed">In its early days, the marketplace serves primarily as an SI co-sell facilitation portal. As it reaches maturity (Horizon 3), it transforms into a primary growth engine — no longer dependent on top-down enterprise sales to initiate new relationships.</p>
              <div className="bg-emerald-50 rounded-xl p-4 border border-emerald-100">
                <div className="flex items-center gap-2 mb-1">
                  <ChevronRight className="text-emerald-600" size={16} />
                  <span className="text-sm font-bold text-emerald-700">The Motion</span>
                </div>
                <p className="text-sm text-emerald-700 leading-relaxed">Agent templates and SLM adoption become the launchpad for the full Business AI Cloud stack. At maturity, the marketplace transitions into a powerful <strong>inbound lead generation engine</strong> — capturing bottoms-up developer interest and surfacing new enterprise demand automatically, without proportional sales investment.</p>
              </div>
              <div className="grid grid-cols-3 gap-4 mt-2">
                {[
                  { icon: Building2, label: 'SI Co-Sell Portal', sub: 'Horizon 1 state', bg: 'bg-slate-50', col: 'text-slate-500' },
                  { icon: TrendingUp, label: 'Ecosystem Flywheel', sub: 'Horizon 2 state', bg: 'bg-blue-50', col: 'text-blue-600' },
                  { icon: Rocket, label: 'Inbound Lead Engine', sub: 'Horizon 3 maturity', bg: 'bg-emerald-50', col: 'text-emerald-600' },
                ].map(s => {
                  const Icon = s.icon;
                  return (
                    <div key={s.label} className={`${s.bg} rounded-xl p-4 text-center`}>
                      <Icon className={`${s.col} mx-auto mb-2`} size={20} />
                      <div className={`font-bold text-sm ${s.col}`}>{s.label}</div>
                      <div className="text-xs text-muted mt-0.5">{s.sub}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GTMView;
