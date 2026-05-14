import { Search, Wrench, Activity, TrendingUp, ChevronRight, DollarSign, Cpu, ShieldCheck } from 'lucide-react';
import './views.css';

const stages = [
  {
    id: 1,
    phase: 'Stage 01',
    label: 'Discovery',
    sublabel: 'The Magnet',
    icon: Search,
    color: '#2563eb',
    bg: '#eff6ff',
    description: 'Acme\'s VP of Operations discovers a "Free Auto-Claims Resolution Agent Template" built by Cognizant (a Tier-1 SI) on the Uniphore Marketplace. Because it is free, Acme\'s IT team installs it in a sandbox environment the same day — no procurement, no procurement cycle, no friction.',
    insight: 'Free templates eliminate the single biggest barrier to enterprise software adoption: the decision to begin. The low-stakes install is the first strategic foothold.',
    metric: { label: 'Acquisition Cost', value: '$0', note: 'Installed in hours, not quarters' },
    who: 'VP of Operations',
    action: 'Discovers & installs free template',
  },
  {
    id: 2,
    phase: 'Stage 02',
    label: 'Implementation',
    sublabel: 'SI Revenue',
    icon: Wrench,
    color: '#059669',
    bg: '#ecfdf5',
    description: 'Acme quickly realizes the template is an "80% solution." To connect it securely to their legacy, highly-customized on-prem infrastructure, they hire Cognizant. Cognizant — having given away the intellectual property for free — now secures a large integration and change management contract, pulling Uniphore through as the mandatory foundational architecture.',
    insight: 'The free template is the loss-leader. Cognizant monetizes through professional services. Uniphore becomes required infrastructure — pulled in by the SI, not pushed by a salesperson.',
    metric: { label: 'Cognizant Contract', value: '$1.5M', note: 'Integration & change management' },
    who: 'Cognizant (Tier-1 SI)',
    action: 'Customizes template for on-prem infra',
  },
  {
    id: 3,
    phase: 'Stage 03',
    label: 'Execution',
    sublabel: 'Uniphore Baseline Revenue',
    icon: Activity,
    color: '#7c3aed',
    bg: '#f5f3ff',
    description: 'Once deployed in production, the agent handles 10,000 claims per day. Uniphore begins quietly utilizing Acme\'s Platform Credits, monetizing the BPMN orchestration compute and processing billions of SLM tokens every month. To incentivize continued ecosystem investment, Uniphore shares a 15% partner rebate with Cognizant based on the exact credits the deployed agent utilizes.',
    insight: 'The "free" template has converted into metered, recurring Platform Credit consumption. This is the annuity revenue stream — invisible to procurement, unstoppable in production.',
    metric: { label: 'Claims Automated', value: '10K / day', note: 'Billions of SLM tokens/month' },
    who: 'Uniphore Platform',
    action: 'Credits drawn down per claim processed',
  },
  {
    id: 4,
    phase: 'Stage 04',
    label: 'Expansion',
    sublabel: 'SLM Factory Upsell',
    icon: TrendingUp,
    color: '#b45309',
    bg: '#fffbeb',
    description: 'After three months, Acme realizes the generic baseline SLM occasionally struggles with complex medical coding language in the claims. To increase accuracy, Uniphore\'s Customer Success team steps in and upsells the Uniphore SLM Factory. Acme uses the factory to fine-tune a specialized model on their sovereign data — utilizing massive compute credits during training — and locking Uniphore into the absolute core of their enterprise architecture.',
    insight: 'The SLM Factory upsell is the endgame. A custom model trained on Acme\'s sovereign data is effectively irreplaceable. Uniphore transforms from a vendor into unmovable, load-bearing infrastructure.',
    metric: { label: 'Architectural Position', value: 'Core Lock-in', note: 'Sovereign SLM on proprietary data' },
    who: 'Uniphore Customer Success',
    action: 'Upsells SLM Factory fine-tuning',
  },
];

const summary = [
  { icon: DollarSign, label: 'Template Cost', value: '$0', sub: 'Zero acquisition friction', color: '#2563eb', bg: '#eff6ff' },
  { icon: Wrench,     label: 'SI Services Revenue', value: '$1.5M', sub: 'Cognizant integration contract', color: '#059669', bg: '#ecfdf5' },
  { icon: Cpu,        label: 'Daily Throughput', value: '10,000', sub: 'Claims processed per day', color: '#7c3aed', bg: '#f5f3ff' },
  { icon: ShieldCheck,label: 'Strategic Outcome', value: 'Sovereign Lock-in', sub: 'Custom SLM on proprietary data', color: '#b45309', bg: '#fffbeb' },
];

const CustomerJourneyView = () => {
  return (
    <div className="view-container animate-fade-in">
      <div className="view-header">
        <h2 className="view-title">A Marketplace Customer Journey Example</h2>
        <p className="view-subtitle">The Monetization Journey — how a single free template download grows from zero-friction discovery into sovereign platform lock-in.</p>
      </div>

      {/* Setup context */}
      <div className="glass-panel p-8">
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '2rem' }}>
          <div style={{ flexShrink: 0, width: '60px', height: '60px', borderRadius: '1rem', background: '#0c2461', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ fontSize: '1.4rem', fontWeight: 900, color: 'white', letterSpacing: '-0.04em' }}>AC</span>
          </div>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
              <h3 className="text-xl font-bold text-primary">Acme Insurance</h3>
              <span style={{ fontSize: '0.72rem', fontWeight: 700, background: '#eff6ff', color: '#2563eb', border: '1px solid #bfdbfe', padding: '0.15rem 0.6rem', borderRadius: '2rem' }}>Mid-Market Carrier</span>
              <span style={{ fontSize: '0.72rem', fontWeight: 700, background: '#ecfdf5', color: '#059669', border: '1px solid #a7f3d0', padding: '0.15rem 0.6rem', borderRadius: '2rem' }}>$1.0M Platform Credit Commit</span>
            </div>
            <p className="text-sm text-muted" style={{ lineHeight: 1.7, maxWidth: 760 }}>
              A mid-market insurance carrier looking to automate their inbound claims processing. Acme's VP of Operations is under pressure to reduce claims cycle times without a large-scale IT overhaul — making the zero-risk, free-template entry point on the Uniphore Marketplace the perfect entry vector.
            </p>
          </div>
        </div>
      </div>

      {/* Journey stages */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
        {stages.map((stage, i) => {
          const Icon = stage.icon;
          return (
            <div key={stage.id} className="glass-panel" style={{ overflow: 'hidden', borderTop: `4px solid ${stage.color}` }}>
              <div style={{ padding: '1.75rem 2rem' }}>

                {/* Stage header */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.25rem' }}>
                  <div style={{ width: '46px', height: '46px', borderRadius: '0.75rem', background: stage.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Icon size={22} color={stage.color} strokeWidth={2} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.2rem' }}>
                      <span style={{ fontSize: '0.7rem', fontWeight: 800, color: stage.color, textTransform: 'uppercase', letterSpacing: '0.1em', background: stage.bg, padding: '0.15rem 0.55rem', borderRadius: '0.3rem' }}>{stage.phase}</span>
                      <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>— {stage.sublabel}</span>
                    </div>
                    <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0a1628', margin: 0, letterSpacing: '-0.01em' }}>{stage.label}</h3>
                  </div>
                  {/* Who does what */}
                  <div style={{ textAlign: 'right', flexShrink: 0 }}>
                    <div style={{ fontSize: '0.68rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.15rem' }}>Actor</div>
                    <div style={{ fontSize: '0.82rem', fontWeight: 600, color: '#334155' }}>{stage.who}</div>
                    <div style={{ fontSize: '0.75rem', color: '#64748b' }}>{stage.action}</div>
                  </div>
                </div>

                {/* Body: description + metric */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 196px', gap: '2rem', alignItems: 'start' }}>
                  <div>
                    <p style={{ fontSize: '0.92rem', color: '#334155', lineHeight: 1.7, margin: '0 0 1rem 0' }}>{stage.description}</p>
                    <p style={{ fontSize: '0.82rem', color: '#64748b', lineHeight: 1.6, borderLeft: `3px solid ${stage.color}`, paddingLeft: '0.85rem', margin: 0, fontStyle: 'italic' }}>
                      {stage.insight}
                    </p>
                  </div>

                  {/* Metric callout */}
                  <div style={{ background: stage.bg, border: `1px solid ${stage.color}30`, borderRadius: '0.9rem', padding: '1.25rem', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '0.35rem' }}>
                    <div style={{ fontSize: '0.65rem', fontWeight: 800, color: stage.color, textTransform: 'uppercase', letterSpacing: '0.08em' }}>{stage.metric.label}</div>
                    <div style={{ fontSize: stage.metric.value.length > 8 ? '1.15rem' : '1.85rem', fontWeight: 900, color: '#0a1628', lineHeight: 1.1 }}>{stage.metric.value}</div>
                    <div style={{ fontSize: '0.72rem', color: '#64748b', lineHeight: 1.4 }}>{stage.metric.note}</div>
                  </div>
                </div>
              </div>

              {/* Connector to next stage */}
              {i < stages.length - 1 && (
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.6rem 2rem', background: '#f8fafc', borderTop: '1px solid #f1f5f9' }}>
                  <ChevronRight size={14} color="#94a3b8" />
                  <span style={{ fontSize: '0.72rem', color: '#94a3b8', fontWeight: 600 }}>
                    {i === 0 && 'Template installed → Acme identifies integration gap → engages Cognizant'}
                    {i === 1 && 'Deployment goes live → production traffic begins → Platform Credits start flowing'}
                    {i === 2 && 'Generic model accuracy plateau reached → CS team identifies upsell trigger'}
                  </span>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Revenue summary strip */}
      <div className="glass-panel p-8" style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)', color: 'white', border: 'none' }}>
        <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'white', margin: '0 0 0.35rem 0' }}>Journey Summary — Value Created from a Single Free Download</h3>
        <p style={{ fontSize: '0.82rem', color: '#94a3b8', margin: '0 0 1.75rem 0' }}>From the same template that cost Acme $0 to acquire.</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem' }}>
          {summary.map((s, i) => {
            const Icon = s.icon;
            return (
              <div key={i} style={{ background: 'rgba(255,255,255,0.07)', borderRadius: '0.75rem', padding: '1.25rem', border: '1px solid rgba(255,255,255,0.1)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                  <div style={{ width: '32px', height: '32px', borderRadius: '0.5rem', background: s.bg, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Icon size={16} color={s.color} />
                  </div>
                  <span style={{ fontSize: '0.68rem', fontWeight: 700, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.07em' }}>{s.label}</span>
                </div>
                <div style={{ fontSize: s.value.length > 8 ? '1.1rem' : '1.5rem', fontWeight: 900, color: 'white', lineHeight: 1, marginBottom: '0.3rem' }}>{s.value}</div>
                <div style={{ fontSize: '0.72rem', color: '#64748b' }}>{s.sub}</div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Strategic takeaway */}
      <div className="glass-panel p-8" style={{ background: '#eff6ff', border: '1px solid #bfdbfe' }}>
        <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}>
          <div style={{ width: '44px', height: '44px', borderRadius: '0.75rem', background: '#2563eb', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <TrendingUp size={22} color="white" />
          </div>
          <div>
            <h4 style={{ fontSize: '1rem', fontWeight: 800, color: '#1e3a8a', margin: '0 0 0.5rem 0' }}>The Strategic Logic of the Marketplace Model</h4>
            <p style={{ fontSize: '0.88rem', color: '#1e40af', lineHeight: 1.7, margin: 0 }}>
              The Acme story illustrates why the marketplace flywheel is so powerful for Uniphore. By making templates free, Uniphore removes the biggest barrier to adoption — the decision to start. The SI ecosystem (Cognizant, KPMG, Deloitte) does the selling and implementation work in exchange for partner rebates, pulling Uniphore into enterprises at scale without a direct sales motion. Once production traffic flows, Platform Credits create a metered, recurring revenue stream that grows with the customer's usage. The SLM Factory upsell then converts Uniphore from a workflow tool into a core AI infrastructure provider — one that is deeply embedded in the customer's sovereign data and architecture, and essentially impossible to replace.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerJourneyView;
