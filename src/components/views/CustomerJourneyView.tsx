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
    description: 'Acme\'s VP of Operations discovers a free "Auto-Claims Resolution Agent Template" by Cognizant on the Uniphore Marketplace and installs it in a sandbox the same day — no procurement cycle, no friction.',
    insight: 'Free templates eliminate the biggest barrier to enterprise adoption: the decision to begin.',
    connector: 'Template installed → Acme identifies integration gap → engages Cognizant',
  },
  {
    id: 2,
    phase: 'Stage 02',
    label: 'Implementation',
    sublabel: 'SI Revenue',
    icon: Wrench,
    color: '#059669',
    bg: '#ecfdf5',
    description: 'The template is an "80% solution." Acme hires Cognizant to connect it to their legacy on-prem infrastructure — and Cognizant, having given away the IP, secures a $1.5M integration and change management contract.',
    insight: 'The free template is the loss-leader. The SI monetizes through services, pulling Uniphore through as required infrastructure.',
    connector: 'Deployment goes live → production traffic begins → Platform Credits start flowing',
  },
  {
    id: 3,
    phase: 'Stage 03',
    label: 'Execution',
    sublabel: 'Uniphore Baseline Revenue',
    icon: Activity,
    color: '#7c3aed',
    bg: '#f5f3ff',
    description: 'The agent handles 10,000 claims per day in production. Platform Credits begin flowing for BPMN orchestration and billions of SLM token inferences monthly, with a 15% rebate flowing back to Cognizant.',
    insight: 'The "free" template has converted into metered, recurring credit consumption — the annuity revenue stream.',
    connector: 'Generic model accuracy plateau reached → CS team identifies upsell trigger',
  },
  {
    id: 4,
    phase: 'Stage 04',
    label: 'Expansion',
    sublabel: 'SLM Factory Upsell',
    icon: TrendingUp,
    color: '#b45309',
    bg: '#fffbeb',
    description: 'After three months, the generic SLM struggles with complex medical coding in claims. Uniphore\'s CS team upsells the SLM Factory — Acme fine-tunes a specialized model on their sovereign data, locking Uniphore into the core of their architecture.',
    insight: 'A custom model trained on sovereign data is effectively irreplaceable. Uniphore transforms from a vendor into load-bearing infrastructure.',
    connector: '',
  },
];

const summary = [
  { icon: DollarSign, label: 'Template Cost',       value: '$0',            sub: 'Zero acquisition friction',          color: '#2563eb', bg: '#eff6ff' },
  { icon: Wrench,     label: 'SI Services Revenue',  value: '$1.5M',         sub: 'Cognizant integration contract',      color: '#059669', bg: '#ecfdf5' },
  { icon: Cpu,        label: 'Daily Throughput',      value: '10,000',        sub: 'Claims processed per day',            color: '#7c3aed', bg: '#f5f3ff' },
  { icon: ShieldCheck,label: 'Strategic Outcome',    value: 'Sovereign Lock-in', sub: 'Custom SLM on proprietary data',  color: '#b45309', bg: '#fffbeb' },
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
          <div style={{ flexShrink: 0, width: '56px', height: '56px', borderRadius: '1rem', background: '#0c2461', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ fontSize: '1.2rem', fontWeight: 900, color: 'white', letterSpacing: '-0.04em' }}>AC</span>
          </div>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.4rem' }}>
              <h3 className="text-xl font-bold text-primary">Acme Insurance</h3>
              <span style={{ fontSize: '0.72rem', fontWeight: 700, background: '#eff6ff', color: '#2563eb', border: '1px solid #bfdbfe', padding: '0.15rem 0.6rem', borderRadius: '2rem' }}>Mid-Market Carrier</span>
              <span style={{ fontSize: '0.72rem', fontWeight: 700, background: '#ecfdf5', color: '#059669', border: '1px solid #a7f3d0', padding: '0.15rem 0.6rem', borderRadius: '2rem' }}>$1.0M Platform Credit Commit</span>
            </div>
            <p className="text-sm text-muted" style={{ lineHeight: 1.65, maxWidth: 720 }}>
              A mid-market insurance carrier looking to automate inbound claims processing — under pressure to reduce cycle times without a large-scale IT overhaul.
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
              <div style={{ padding: '1.5rem 2rem' }}>

                {/* Stage header */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                  <div style={{ width: '42px', height: '42px', borderRadius: '0.75rem', background: stage.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Icon size={20} color={stage.color} strokeWidth={2} />
                  </div>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.15rem' }}>
                      <span style={{ fontSize: '0.68rem', fontWeight: 800, color: stage.color, textTransform: 'uppercase', letterSpacing: '0.1em', background: stage.bg, padding: '0.12rem 0.5rem', borderRadius: '0.3rem' }}>{stage.phase}</span>
                      <span style={{ fontSize: '0.73rem', color: '#94a3b8' }}>— {stage.sublabel}</span>
                    </div>
                    <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#0a1628', margin: 0 }}>{stage.label}</h3>
                  </div>
                </div>

                {/* Body */}
                <p style={{ fontSize: '0.9rem', color: '#334155', lineHeight: 1.65, margin: '0 0 0.85rem 0' }}>{stage.description}</p>
                <p style={{ fontSize: '0.82rem', color: '#64748b', lineHeight: 1.55, borderLeft: `3px solid ${stage.color}`, paddingLeft: '0.85rem', margin: 0, fontStyle: 'italic' }}>
                  {stage.insight}
                </p>
              </div>

              {/* Connector to next stage */}
              {stage.connector && (
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.55rem 2rem', background: '#f8fafc', borderTop: '1px solid #f1f5f9' }}>
                  <ChevronRight size={13} color="#94a3b8" />
                  <span style={{ fontSize: '0.71rem', color: '#94a3b8', fontWeight: 600 }}>{stage.connector}</span>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Revenue summary strip */}
      <div className="glass-panel p-8" style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)', border: 'none' }}>
        <h3 style={{ fontSize: '1rem', fontWeight: 800, color: 'white', margin: '0 0 0.3rem 0' }}>Journey Summary — Value Created from a Single Free Download</h3>
        <p style={{ fontSize: '0.8rem', color: '#64748b', margin: '0 0 1.5rem 0' }}>From the same template that cost Acme $0 to acquire.</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem' }}>
          {summary.map((s) => {
            const Icon = s.icon;
            return (
              <div key={s.label} style={{ background: 'rgba(255,255,255,0.07)', borderRadius: '0.75rem', padding: '1.1rem', border: '1px solid rgba(255,255,255,0.1)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.65rem' }}>
                  <div style={{ width: '28px', height: '28px', borderRadius: '0.4rem', background: s.bg, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Icon size={14} color={s.color} />
                  </div>
                  <span style={{ fontSize: '0.65rem', fontWeight: 700, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.07em' }}>{s.label}</span>
                </div>
                <div style={{ fontSize: s.value.length > 8 ? '1rem' : '1.4rem', fontWeight: 900, color: 'white', lineHeight: 1, marginBottom: '0.25rem' }}>{s.value}</div>
                <div style={{ fontSize: '0.7rem', color: '#64748b' }}>{s.sub}</div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Strategic takeaway */}
      <div className="glass-panel p-8" style={{ background: '#eff6ff', border: '1px solid #bfdbfe' }}>
        <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}>
          <div style={{ width: '40px', height: '40px', borderRadius: '0.75rem', background: '#2563eb', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <TrendingUp size={20} color="white" />
          </div>
          <div>
            <h4 style={{ fontSize: '0.95rem', fontWeight: 800, color: '#1e3a8a', margin: '0 0 0.4rem 0' }}>The Strategic Logic of the Marketplace Model</h4>
            <p style={{ fontSize: '0.85rem', color: '#1e40af', lineHeight: 1.7, margin: 0 }}>
              By making templates free, Uniphore removes the biggest barrier to adoption. The SI ecosystem does the selling and implementation in exchange for partner rebates, pulling Uniphore into enterprises without a direct sales motion. Once production traffic flows, Platform Credits create a metered, recurring revenue stream. The SLM Factory upsell then converts Uniphore from a workflow tool into core AI infrastructure — deeply embedded in sovereign data and essentially impossible to replace.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerJourneyView;
