import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  AreaChart, Area, Cell,
} from 'recharts';
import { TrendingUp, ServerCrash, Lock, Workflow, ExternalLink } from 'lucide-react';
import './views.css';

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
};

const tocItems = [
  { id: 'stats', label: 'Key Market Statistics', desc: '$11–12B market size, 11% production adoption, 40% embed forecast' },
  { id: 'growth', label: 'Market Growth & Adoption', desc: 'Enterprise AI agent growth curve and adoption reality check' },
  { id: 'market-sizing', label: 'TAM / SAM / SOM', desc: "Uniphore's layered addressable market breakdown and estimates" },
  { id: 'trends', label: 'Four Defining Trends', desc: 'Macro forces shaping enterprise AI adoption and Uniphore\'s positioning' },
];

const marketData = [
  { year: '2025', size: 8 },
  { year: '2026', size: 12 },
  { year: '2027', size: 18 },
  { year: '2028', size: 26 },
  { year: '2029', size: 36 },
  { year: '2030', size: 50 },
];

const adoptionBars = [
  { label: 'Use AI in some capacity', pct: 88, color: '#93c5fd', source: 'https://kpmg.com/us/en/articles/2025/ai-quarterly-pulse-survey.html', sourceLabel: 'KPMG AI Pulse Survey' },
  { label: 'Experimenting with agents', pct: 62, color: '#3b82f6', source: 'https://www.marketsandmarkets.com/Market-Reports/ai-agents-market-15761548.html', sourceLabel: 'MarketsandMarkets' },
  { label: 'Scaled agents to production', pct: 11, color: '#1e40af', source: 'https://kpmg.com/us/en/articles/2025/ai-quarterly-pulse-survey.html', sourceLabel: 'KPMG AI Pulse Survey' },
];

const verticalGrowthData = [
  { vertical: 'Vertical AI Agents', cagr: 62, estimated: false },
  { vertical: 'Multi-Agent Systems', cagr: 48.5, estimated: false },
  { vertical: 'Enterprise AI Overall', cagr: 43, estimated: false },
  { vertical: 'SLM Adoption', cagr: 38, estimated: true },
  { vertical: 'Gen AI Copilots', cagr: 28, estimated: true },
];

const trends = [
  {
    icon: Workflow, color: 'text-accent-secondary', border: 'border-t-accent-secondary', bg: 'bg-indigo-50',
    title: '1. Autonomous Agentic Workflows',
    cagr: 'Multi-agent: ~48.5% CAGR',
    cagrBg: 'bg-indigo-100 text-indigo-700',
    desc: 'The market is rapidly moving past reactive chatbots toward proactive, multi-agent, BPMN-orchestrated systems capable of autonomous, multi-step back-office execution. Platforms must have robust orchestration, not just LLM wrappers.',
    source: 'https://www.marketsandmarkets.com/Market-Reports/ai-agents-market-15761548.html',
    sourceLabel: 'MarketsandMarkets AI Agents Report',
  },
  {
    icon: ServerCrash, color: 'text-red-500', border: 'border-t-red-500', bg: 'bg-red-50',
    title: '2. Infrastructure Squeeze & TCO Drive',
    cagr: 'SLM adoption accelerating',
    cagrBg: 'bg-red-100 text-red-700',
    desc: 'Scaling billions of routine LLM API calls is economically unviable. Enterprises are pivoting to SLMs fine-tuned on proprietary data. Uniphore\'s native SLM Factory directly solves this — delivering 10x lower TCO with higher accuracy.',
    source: null,
    sourceLabel: null,
  },
  {
    icon: Lock, color: 'text-emerald-600', border: 'border-t-emerald-500', bg: 'bg-emerald-50',
    title: '3. Data Sovereignty Imperative',
    cagr: '40% of projects at risk',
    cagrBg: 'bg-emerald-100 text-emerald-700',
    desc: 'Gartner estimates 40%+ of enterprise agentic AI projects will be cancelled by 2027 due to data governance gaps and IP leakage fears. Zero-copy and on-prem deployment are becoming non-negotiable table stakes — Uniphore\'s core strength.',
    source: 'https://www.uctoday.com/unified-communications/gartner-predicts-40-of-enterprise-apps-will-feature-ai-agents-by-2026/',
    sourceLabel: 'Gartner via UC Today',
  },
  {
    icon: TrendingUp, color: 'text-amber-600', border: 'border-t-amber-500', bg: 'bg-amber-50',
    title: '4. Hyper-Verticalization of AI Agents',
    cagr: 'Vertical agents: ~62% CAGR',
    cagrBg: 'bg-amber-100 text-amber-700',
    desc: 'Generic foundation models are proving insufficient for complex, regulated enterprise tasks. Domain-specific agents for BFSI, Healthcare, and Telecom see the fastest adoption — requiring an ecosystem marketplace no single vendor can staff alone.',
    source: 'https://www.marketsandmarkets.com/Market-Reports/ai-agents-market-15761548.html',
    sourceLabel: 'MarketsandMarkets AI Agents Report',
  },
];

const SourceLink = ({ href, label }: { href: string; label: string }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-1 text-xs text-blue-600 hover:text-blue-800 hover:underline mt-1"
  >
    <ExternalLink size={10} />
    {label}
  </a>
);

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

      {/* Key stats */}
      <div id="stats" className="grid grid-cols-4 gap-5">
        {[
          {
            value: '$11–12B', label: 'Market Size (2026E)', sub: 'Enterprise AI Agent market',
            source: 'https://www.grandviewresearch.com/industry-analysis/ai-agents-market-report',
            sourceLabel: 'Grand View Research',
          },
          {
            value: '~$50B', label: 'Projected (2030)', sub: '43–50% CAGR growth rate',
            source: 'https://www.prnewswire.com/news-releases/ai-agents-market-worth-52-62-billion-by-2030---exclusive-report-by-marketsandmarkets-302435486.html',
            sourceLabel: 'MarketsandMarkets via PRNewswire',
          },
          {
            value: '11%', label: 'Scaled to Production', sub: 'Of enterprises using AI agents',
            source: 'https://kpmg.com/us/en/articles/2025/ai-quarterly-pulse-survey.html',
            sourceLabel: 'KPMG AI Pulse Survey',
          },
          {
            value: '40%', label: 'App Embed by 2026', sub: 'Gartner forecast (up from <5%)',
            source: 'https://www.uctoday.com/unified-communications/gartner-predicts-40-of-enterprise-apps-will-feature-ai-agents-by-2026/',
            sourceLabel: 'Gartner via UC Today',
          },
        ].map(s => (
          <div key={s.label} className="glass-panel p-6 text-center">
            <div className="text-3xl font-black text-accent-primary">{s.value}</div>
            <div className="text-sm font-bold text-primary mt-2">{s.label}</div>
            <div className="text-xs text-muted mt-1">{s.sub}</div>
            <div className="flex justify-center mt-2">
              <SourceLink href={s.source} label={s.sourceLabel} />
            </div>
          </div>
        ))}
      </div>

      {/* Market Growth + Adoption */}
      <div id="growth" className="grid-2">
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
          <p className="text-sm text-muted mb-5">These are independent survey figures — not parts of a whole. Each measures a different threshold of AI adoption.</p>
          <div className="flex flex-col gap-5 flex-1 justify-center">
            {adoptionBars.map((bar) => (
              <div key={bar.label}>
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-sm font-medium text-slate-700">{bar.label}</span>
                  <span className="text-sm font-black" style={{ color: bar.color }}>{bar.pct}%</span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-3">
                  <div
                    className="h-3 rounded-full transition-all"
                    style={{ width: `${bar.pct}%`, backgroundColor: bar.color }}
                  />
                </div>
                <div className="mt-1">
                  <SourceLink href={bar.source} label={bar.sourceLabel} />
                </div>
              </div>
            ))}
          </div>
          <div className="mt-5 p-4 bg-blue-50 rounded-xl border border-blue-100">
            <p className="text-sm font-bold text-blue-800 mb-1">The 89% Opportunity</p>
            <p className="text-sm text-blue-700 leading-relaxed">Only 11% of enterprises have scaled AI agents to full production. The vast majority are blocked by data sovereignty fears, infrastructure costs, and MLOps complexity — Uniphore's core differentiators solve all three.</p>
          </div>
        </div>
      </div>

      {/* TAM/SAM/SOM + Vertical Growth */}
      <div id="market-sizing" className="grid-2">
        <div className="glass-panel p-8">
          <h3 className="text-xl font-bold mb-1 text-primary">Addressable Market — TAM / SAM / SOM</h3>
          <p className="text-sm text-muted mb-1">Uniphore's layered market opportunity (2026 estimates)</p>
          <p className="text-xs text-slate-400 italic mb-5">* Rough estimates, need further validation</p>
          <div className="space-y-4">
            {[
              {
                label: 'TAM', value: '$50B+ (2030)', desc: 'Total enterprise AI agent platform market globally — all industries and use cases.',
                bg: 'bg-blue-900', width: 'w-full', estimated: false, valueClass: 'font-black text-white text-base',
              },
              {
                label: 'SAM', value: '$18B (2026)', desc: 'Regulated industries (BFSI, Telecom, Healthcare, Gov) requiring sovereign AI with on-prem deployment.',
                bg: 'bg-blue-600', width: 'w-3/4', estimated: true, valueClass: 'font-black text-white text-base',
              },
              {
                label: 'SOM', value: '$3.5B (2026)', desc: "Uniphore's 2,000+ BFSI/Telecom footprint — cross-sell Business AI Cloud into existing accounts.",
                bg: 'bg-blue-400', width: 'w-1/3', estimated: true, valueClass: 'font-bold text-white text-xs leading-tight',
              },
            ].map(t => (
              <div key={t.label} className="space-y-2">
                <div className={`${t.bg} ${t.width} rounded-lg px-4 py-3 flex items-center justify-between`}>
                  <span className="font-bold text-white text-sm shrink-0">{t.label}</span>
                  <div className="flex items-center gap-1.5 min-w-0">
                    {t.estimated && (
                      <span className="text-xs font-medium text-blue-200 bg-white/10 px-1.5 py-0.5 rounded shrink-0">Est.</span>
                    )}
                    <span className={`${t.valueClass} whitespace-nowrap`}>{t.value}</span>
                  </div>
                </div>
                <p className="text-xs text-muted pl-2">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="glass-panel p-8">
          <h3 className="text-xl font-bold mb-1 text-primary">Growth by Segment (CAGR)</h3>
          <p className="text-sm text-muted mb-1">Vertical AI agents and multi-agent systems are the fastest-growing categories</p>
          <div className="flex items-center gap-3 mb-5">
            <span className="inline-flex items-center gap-1 text-xs text-blue-700 bg-blue-50 px-2 py-0.5 rounded-full border border-blue-100">
              Top 3 sourced
            </span>
            <span className="inline-flex items-center gap-1 text-xs text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full">
              Bottom 2 estimated
            </span>
            <SourceLink href="https://www.marketsandmarkets.com/Market-Reports/ai-agents-market-15761548.html" label="MarketsandMarkets" />
          </div>
          <ResponsiveContainer width="100%" height={260}>
            <BarChart data={verticalGrowthData} layout="vertical" margin={{ left: 10 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" horizontal={false} />
              <XAxis type="number" stroke="#94a3b8" tickFormatter={v => `${v}%`} tick={{ fontSize: 11 }} />
              <YAxis
                type="category"
                dataKey="vertical"
                stroke="#94a3b8"
                tick={({ x, y, payload }: any) => {
                  const item = verticalGrowthData.find(d => d.vertical === payload.value);
                  return (
                    <g transform={`translate(${x},${y})`}>
                      <text x={-5} y={0} dy={4} textAnchor="end" fill={item?.estimated ? '#94a3b8' : '#475569'} fontSize={11}>
                        {payload.value}
                      </text>
                    </g>
                  );
                }}
                width={145}
              />
              <Tooltip
                formatter={(v: string | number | readonly (string | number)[] | undefined) => {
                  const num = typeof v === 'number' ? v : undefined;
                  const item = num !== undefined ? verticalGrowthData.find(d => d.cagr === num) : undefined;
                  return [`${num ?? v}%${item?.estimated ? ' (Est.)' : ''}`, 'CAGR'];
                }}
                contentStyle={{ fontSize: 12, borderRadius: 8, border: '1px solid #e2e8f0' }}
              />
              <Bar dataKey="cagr" radius={[0, 6, 6, 0]}>
                {verticalGrowthData.map((entry, i) => (
                  <Cell
                    key={i}
                    fill={entry.estimated
                      ? (i === 3 ? '#cbd5e1' : '#e2e8f0')
                      : (i === 0 ? '#1e40af' : i === 1 ? '#2563eb' : '#3b82f6')
                    }
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Top Trends */}
      <div id="trends">
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
                <p className="text-sm text-muted leading-relaxed mb-3">{t.desc}</p>
                {t.source && (
                  <SourceLink href={t.source} label={t.sourceLabel!} />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MarketAnalysisView;
