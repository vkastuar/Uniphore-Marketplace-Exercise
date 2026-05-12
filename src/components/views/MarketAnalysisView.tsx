import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, AreaChart, Area, Legend,
} from 'recharts';
import { TrendingUp, ServerCrash, Lock, Workflow } from 'lucide-react';
import './views.css';

const marketData = [
  { year: '2025', size: 8 },
  { year: '2026', size: 12 },
  { year: '2027', size: 18 },
  { year: '2028', size: 26 },
  { year: '2029', size: 36 },
  { year: '2030', size: 50 },
];

const adoptionData = [
  { name: 'Scaled to Production', value: 11, color: '#2563eb' },
  { name: 'Experimenting / Stuck', value: 51, color: '#93c5fd' },
  { name: 'Not Yet Started', value: 38, color: '#e2e8f0' },
];

const verticalGrowthData = [
  { vertical: 'Vertical AI Agents', cagr: 62 },
  { vertical: 'Multi-Agent Systems', cagr: 48.5 },
  { vertical: 'Enterprise AI Overall', cagr: 43 },
  { vertical: 'SLM Adoption', cagr: 38 },
  { vertical: 'Gen AI Copilots', cagr: 28 },
];

const trends = [
  {
    icon: Workflow, color: 'text-accent-secondary', border: 'border-t-accent-secondary', bg: 'bg-indigo-50',
    title: '1. Autonomous Agentic Workflows',
    cagr: 'Multi-agent: ~48.5% CAGR',
    cagrBg: 'bg-indigo-100 text-indigo-700',
    desc: 'The market is rapidly moving past reactive chatbots toward proactive, multi-agent, BPMN-orchestrated systems capable of autonomous, multi-step back-office execution. Platforms must have robust orchestration, not just LLM wrappers.',
  },
  {
    icon: ServerCrash, color: 'text-red-500', border: 'border-t-red-500', bg: 'bg-red-50',
    title: '2. Infrastructure Squeeze & TCO Drive',
    cagr: 'SLM adoption accelerating',
    cagrBg: 'bg-red-100 text-red-700',
    desc: 'Scaling billions of routine LLM API calls is economically unviable. Enterprises are pivoting to SLMs fine-tuned on proprietary data. Uniphore\'s native SLM Factory directly solves this — delivering 10x lower TCO with higher accuracy.',
  },
  {
    icon: Lock, color: 'text-emerald-600', border: 'border-t-emerald-500', bg: 'bg-emerald-50',
    title: '3. Data Sovereignty Imperative',
    cagr: '40% of projects at risk',
    cagrBg: 'bg-emerald-100 text-emerald-700',
    desc: 'Gartner estimates 40%+ of enterprise agentic AI projects will be cancelled by 2027 due to data governance gaps and IP leakage fears. Zero-copy and on-prem deployment are becoming non-negotiable table stakes — Uniphore\'s core strength.',
  },
  {
    icon: TrendingUp, color: 'text-amber-600', border: 'border-t-amber-500', bg: 'bg-amber-50',
    title: '4. Hyper-Verticalization of AI Agents',
    cagr: 'Vertical agents: ~62% CAGR',
    cagrBg: 'bg-amber-100 text-amber-700',
    desc: 'Generic foundation models are proving insufficient for complex, regulated enterprise tasks. Domain-specific agents for BFSI, Healthcare, and Telecom see the fastest adoption — requiring an ecosystem marketplace no single vendor can staff alone.',
  },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white border border-slate-200 rounded-lg shadow-lg p-3">
        <p className="font-bold text-primary text-sm">{label}</p>
        <p className="text-accent-primary font-semibold">${payload[0].value}B</p>
      </div>
    );
  }
  return null;
};

const MarketAnalysisView = () => {
  return (
    <div className="view-container animate-fade-in">
      <div className="view-header">
        <h2 className="view-title">Market Analysis</h2>
        <p className="view-subtitle">The $50B Enterprise AI Agent Opportunity — sizing the market and the four trends defining the next wave of adoption.</p>
      </div>

      {/* Key stats */}
      <div className="grid grid-cols-4 gap-5">
        {[
          { value: '$11–12B', label: 'Market Size (2026E)', sub: 'Enterprise AI Agent market' },
          { value: '~$50B', label: 'Projected (2030)', sub: '43–50% CAGR growth rate' },
          { value: '11%', label: 'Scaled to Production', sub: 'Of enterprises using AI agents' },
          { value: '40%', label: 'App Embed by 2026', sub: 'Gartner forecast (up from <5%)' },
        ].map(s => (
          <div key={s.label} className="glass-panel p-6 text-center">
            <div className="text-3xl font-black text-accent-primary">{s.value}</div>
            <div className="text-sm font-bold text-primary mt-2">{s.label}</div>
            <div className="text-xs text-muted mt-1">{s.sub}</div>
          </div>
        ))}
      </div>

      {/* Market Growth + Adoption */}
      <div className="grid-2">
        <div className="glass-panel p-8">
          <h3 className="text-xl font-bold mb-1 text-primary">Enterprise AI Agent Market Growth</h3>
          <p className="text-sm text-muted mb-6">Projected market size 2025–2030 ($B), 43–50% CAGR</p>
          <ResponsiveContainer width="100%" height={280}>
            <AreaChart data={marketData}>
              <defs>
                <linearGradient id="marketGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#2563eb" stopOpacity={0.2} />
                  <stop offset="95%" stopColor="#2563eb" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" vertical={false} />
              <XAxis dataKey="year" stroke="#94a3b8" tick={{ fontSize: 12 }} />
              <YAxis stroke="#94a3b8" tickFormatter={(v) => `$${v}B`} tick={{ fontSize: 12 }} />
              <Tooltip content={<CustomTooltip />} />
              <Area type="monotone" dataKey="size" stroke="#2563eb" strokeWidth={3} fill="url(#marketGrad)" dot={{ fill: '#2563eb', r: 5 }} />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <div className="glass-panel p-8 flex flex-col">
          <h3 className="text-xl font-bold mb-1 text-primary">Adoption Reality Check</h3>
          <p className="text-sm text-muted mb-6">Enterprise AI agent deployment status — why the gap is Uniphore's opportunity.</p>
          <div className="flex justify-center" style={{ height: 200 }}>
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie data={adoptionData} cx="50%" cy="50%" innerRadius={65} outerRadius={90} paddingAngle={3} dataKey="value" stroke="none">
                  {adoptionData.map((entry, i) => <Cell key={i} fill={entry.color} />)}
                </Pie>
                <Legend iconType="circle" iconSize={10} formatter={(value) => <span style={{ fontSize: 12, color: '#64748b' }}>{value}</span>} />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-4 p-4 bg-blue-50 rounded-xl border border-blue-100">
            <p className="text-sm font-bold text-blue-800 mb-1">The 89% Opportunity</p>
            <p className="text-sm text-blue-700 leading-relaxed">The vast majority of enterprises experimenting with agents are stuck at proof-of-concept. They're blocked by data sovereignty fears, infrastructure costs, and MLOps complexity — Uniphore's core differentiators solve all three.</p>
          </div>
        </div>
      </div>

      {/* TAM/SAM/SOM + Vertical Growth */}
      <div className="grid-2">
        <div className="glass-panel p-8">
          <h3 className="text-xl font-bold mb-1 text-primary">Addressable Market — TAM / SAM / SOM</h3>
          <p className="text-sm text-muted mb-6">Uniphore's layered market opportunity (2026 estimates)</p>
          <div className="space-y-4">
            {[
              { label: 'TAM', value: '$50B+ (2030)', desc: 'Total enterprise AI agent platform market globally — all industries and use cases.', bg: 'bg-blue-900', width: 'w-full' },
              { label: 'SAM', value: '$18B (2026)', desc: 'Regulated industries (BFSI, Telecom, Healthcare, Gov) requiring sovereign AI with on-prem deployment.', bg: 'bg-blue-600', width: 'w-3/4' },
              { label: 'SOM', value: '$3.5B (2026)', desc: "Uniphore's 2,000+ BFSI/Telecom footprint — cross-sell Business AI Cloud into existing accounts.", bg: 'bg-blue-400', width: 'w-1/3' },
            ].map(t => (
              <div key={t.label} className="space-y-2">
                <div className={`${t.bg} ${t.width} rounded-lg px-4 py-3 flex items-center justify-between`}>
                  <span className="font-bold text-white text-sm">{t.label}</span>
                  <span className="font-black text-white">{t.value}</span>
                </div>
                <p className="text-xs text-muted pl-2">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="glass-panel p-8">
          <h3 className="text-xl font-bold mb-1 text-primary">Growth by Segment (CAGR)</h3>
          <p className="text-sm text-muted mb-6">Vertical AI agents and multi-agent systems are the fastest-growing categories</p>
          <ResponsiveContainer width="100%" height={260}>
            <BarChart data={verticalGrowthData} layout="vertical" margin={{ left: 10 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" horizontal={false} />
              <XAxis type="number" stroke="#94a3b8" tickFormatter={v => `${v}%`} tick={{ fontSize: 11 }} />
              <YAxis type="category" dataKey="vertical" stroke="#94a3b8" tick={{ fontSize: 11 }} width={140} />
              <Tooltip formatter={(v: number) => [`${v}%`, 'CAGR']} contentStyle={{ fontSize: 12, borderRadius: 8, border: '1px solid #e2e8f0' }} />
              <Bar dataKey="cagr" radius={[0, 6, 6, 0]}>
                {verticalGrowthData.map((_, i) => (
                  <Cell key={i} fill={i === 0 ? '#1e40af' : i === 1 ? '#2563eb' : i === 2 ? '#3b82f6' : '#60a5fa'} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Top Trends */}
      <div>
        <h3 className="text-2xl font-bold mb-2 text-primary">Four Defining Market Trends</h3>
        <p className="text-sm text-muted mb-6">Macro forces shaping enterprise AI adoption — and their implications for Uniphore's strategy.</p>
        <div className="grid grid-cols-2 gap-5">
          {trends.map((t) => {
            const Icon = t.icon;
            return (
              <div key={t.title} className={`glass-panel p-6 border-t-4 ${t.border}`}>
                <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold mb-4 ${t.cagrBg}`}>
                  {t.cagr}
                </div>
                <div className={`flex items-center gap-3 mb-3 ${t.color}`}>
                  <Icon size={22} strokeWidth={2} />
                  <h4 className="font-bold text-primary text-base">{t.title}</h4>
                </div>
                <p className="text-sm text-muted leading-relaxed">{t.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MarketAnalysisView;
