import './views.css';
import { Target, Shield, Zap, Link } from 'lucide-react';
import {
  RadarChart, PolarGrid, PolarAngleAxis, Radar, Legend, ResponsiveContainer, Tooltip,
} from 'recharts';

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
};

const tocItems = [
  { id: 'differentiator', label: "Uniphore's Winning Intersection", desc: 'The three capabilities that place Uniphore in a unique competitive position' },
  { id: 'radar', label: 'Capability Radar & Positioning Matrix', desc: '6-dimension comparison and Sovereignty vs. Composability 2×2' },
  { id: 'table', label: 'Detailed Capability Assessment', desc: 'Scoring each competitor archetype across Sovereignty, Composability, SLM Efficiency' },
];

const radarData = [
  { axis: 'Sovereignty', Uniphore: 95, 'AWS/Azure': 35, Palantir: 95, Salesforce: 15 },
  { axis: 'Composability', Uniphore: 88, 'AWS/Azure': 92, Palantir: 55, Salesforce: 55 },
  { axis: 'Security', Uniphore: 92, 'AWS/Azure': 90, Palantir: 95, Salesforce: 88 },
  { axis: 'SLM Efficiency', Uniphore: 95, 'AWS/Azure': 60, Palantir: 58, Salesforce: 20 },
  { axis: 'Ent. Readiness', Uniphore: 85, 'AWS/Azure': 92, Palantir: 82, Salesforce: 90 },
  { axis: 'Time to Value', Uniphore: 52, 'AWS/Azure': 50, Palantir: 40, Salesforce: 82 },
];

const radarColors = [
  { key: 'Uniphore', color: '#0176D3', dashed: false },
  { key: 'AWS/Azure', color: '#f59e0b', dashed: false },
  { key: 'Palantir', color: '#64748b', dashed: false },
  { key: 'Salesforce', color: '#10b981', dashed: false },
];

// x = Composability (0-100), y = Sovereignty (0-100, high = top)
const matrixPlayers = [
  { name: 'Uniphore ⭐', x: 80, y: 88, color: '#0176D3', bold: true },
  { name: 'Palantir AIP', x: 48, y: 92, color: '#64748b', bold: false },
  { name: 'AWS / Azure / GCP', x: 90, y: 32, color: '#f59e0b', bold: false },
  { name: 'Salesforce / ServiceNow', x: 52, y: 15, color: '#10b981', bold: false },
  { name: 'UiPath / AutomationAnywhere', x: 52, y: 48, color: '#8b5cf6', bold: false },
  { name: 'Kore.ai / Cognigy', x: 68, y: 52, color: '#ef4444', bold: false },
];

const competitors = [
  {
    archetype: 'Cloud Hyperscalers',
    examples: 'AWS Bedrock, Azure AI Foundry, Google Vertex AI',
    sovereignty: 'Low / Med', sov: 'low',
    composability: 'High', comp: 'high',
    efficiency: 'High Cap / DIY', eff: 'mid',
    uniphoreDiff: false,
    desc: 'Provide the raw infrastructure and world-class SLM families (Gemma, Phi-4), but the full burden of MLOps pipeline building falls on the customer\'s engineering team. They require expensive internal AI talent to stitch everything together, and ultimately lock customers into a single hyperscaler cloud.',
  },
  {
    archetype: 'Enterprise Data Platforms',
    examples: 'Palantir AIP, Databricks, Snowflake Cortex',
    sovereignty: 'Med / High', sov: 'mid',
    composability: 'Medium', comp: 'mid',
    efficiency: 'Medium', eff: 'mid',
    uniphoreDiff: false,
    desc: 'Strong on data security and governance, but force customers into highly opinionated, inflexible workflow paradigms. Lack the plug-and-play BPMN agent builder and turnkey SLM fine-tuning factory, requiring significant custom data engineering investment.',
  },
  {
    archetype: 'CRM / Workflow Native Platforms',
    examples: 'Salesforce Agentforce, ServiceNow AI Agents',
    sovereignty: 'Low', sov: 'low',
    composability: 'Medium (own ecosystem)', comp: 'mid',
    efficiency: 'Low (3rd-party LLM APIs)', eff: 'low',
    uniphoreDiff: false,
    desc: 'Act primarily as UX wrappers routing data to expensive 3rd-party LLMs via latency-heavy RAG. They suffer from high TCO at scale, cannot operate outside their own data models, and surrender data sovereignty to public cloud endpoints.',
  },
  {
    archetype: 'RPA Platform Extensions',
    examples: 'UiPath Autopilot, Automation Anywhere AI Studio',
    sovereignty: 'Medium', sov: 'mid',
    composability: 'Medium', comp: 'mid',
    efficiency: 'Low / Med', eff: 'low',
    uniphoreDiff: false,
    desc: 'Excel at hybrid RPA + AI approaches but require complex multi-component architectures. Scaling unstructured agentic reasoning forces reliance on expensive LLM APIs. Strong governance but limited zero-copy data capabilities.',
  },
  {
    archetype: 'Uniphore Business AI Cloud',
    examples: 'Sovereign · Composable · Secure · SLM-Driven',
    sovereignty: 'High', sov: 'high',
    composability: 'High', comp: 'high',
    efficiency: 'High (Native Factory)', eff: 'high',
    uniphoreDiff: true,
    desc: 'Provides a turnkey SLM Factory that abstracts MLOps complexity. Allows enterprises to securely inject domain knowledge into small, hyper-efficient models on-premise — slashing TCO, eliminating IP leakage, and delivering the low-latency performance required for enterprise-scale agentic workflows.',
  },
];

const badge = (val: string, level: 'high' | 'mid' | 'low') => {
  const styles = {
    high: 'bg-green-100 text-green-700 border-green-200',
    mid: 'bg-yellow-100 text-yellow-700 border-yellow-200',
    low: 'bg-red-100 text-red-700 border-red-200',
  };
  return (
    <span className={`px-3 py-1.5 rounded-full text-xs font-bold border ${styles[level]}`}>{val}</span>
  );
};

const CompetitiveAnalysisView = () => {
  return (
    <div className="view-container animate-fade-in">
      <div className="view-header">
        <h2 className="view-title">Competitive Analysis</h2>
        <p className="view-subtitle">Evaluating the enterprise AI landscape against Uniphore's core tenets: Sovereignty, Composability, Security, and SLM Efficiency.</p>
      </div>

      {/* Winning Intersection — moved to top */}
      <div id="differentiator" className="glass-panel p-8 border-l-4 border-l-accent-primary bg-white">
        <div className="flex items-center gap-3 mb-4">
          <Target className="text-accent-primary" size={28} />
          <h3 className="text-xl font-bold text-primary">Uniphore's Winning Intersection</h3>
        </div>
        <p className="text-md text-muted leading-relaxed mb-6">
          While CRM platforms act as wrappers routing to expensive 3rd-party LLMs via latency-heavy RAG, and Hyperscalers force customers to build their own MLOps pipelines from scratch, Uniphore occupies a unique position: the <strong>only platform offering true sovereignty + high composability + a native, turnkey SLM Factory</strong>.
        </p>
        <div className="grid grid-cols-3 gap-4">
          {[
            { icon: Shield, emoji: '🏛️', title: 'Sovereign by Design', desc: 'True on-prem, multi-cloud, or hybrid deployment. Zero cloud lock-in. Enterprises retain 100% data control across any deployment model.', bg: 'bg-blue-50' },
            { icon: Zap, emoji: '⚡', title: 'Native SLM Factory', desc: 'End-to-end automated fine-tuning — from enterprise data curation to RAFT to deployment — without requiring the customer to staff an MLOps team.', bg: 'bg-indigo-50' },
            { icon: Link, emoji: '🔗', title: 'Zero-Copy Composability', desc: 'AI computes where the data lives. No data migrations. Integrate any model, any app, any data source without moving sensitive data outside its perimeter.', bg: 'bg-emerald-50' },
          ].map(d => (
            <div key={d.title} className={`${d.bg} rounded-xl p-5`}>
              <div className="text-2xl mb-2">{d.emoji}</div>
              <div className="font-bold text-sm text-primary mb-2">{d.title}</div>
              <p className="text-xs text-muted leading-relaxed">{d.desc}</p>
            </div>
          ))}
        </div>
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

      {/* Radar + Positioning Matrix */}
      <div id="radar" className="grid-2">
        <div className="glass-panel p-8">
          <h3 className="text-xl font-bold mb-1 text-primary">Capability Radar</h3>
          <p className="text-sm text-muted mb-4">Uniphore vs. key archetypes across six capability dimensions</p>
          <ResponsiveContainer width="100%" height={340}>
            <RadarChart data={radarData} margin={{ top: 10, right: 30, bottom: 10, left: 30 }}>
              <PolarGrid stroke="#e2e8f0" />
              <PolarAngleAxis dataKey="axis" tick={{ fontSize: 11, fill: '#475569', fontWeight: 600 }} />
              <Tooltip contentStyle={{ fontSize: 12, borderRadius: 8, border: '1px solid #e2e8f0' }} />
              {radarColors.map(r => (
                <Radar key={r.key} name={r.key} dataKey={r.key} stroke={r.color} fill={r.color} fillOpacity={r.key === 'Uniphore' ? 0.15 : 0.05} strokeWidth={r.key === 'Uniphore' ? 2.5 : 1.5} dot={r.key === 'Uniphore'} />
              ))}
              <Legend iconType="circle" iconSize={10} formatter={(v) => <span style={{ fontSize: 12, color: '#475569' }}>{v}</span>} />
            </RadarChart>
          </ResponsiveContainer>
        </div>

        <div className="glass-panel p-8">
          <h3 className="text-xl font-bold mb-1 text-primary">Strategic Positioning Matrix</h3>
          <p className="text-sm text-muted mb-4">
            <span className="font-semibold text-slate-600">Y-axis: Data Sovereignty</span>
            <span className="mx-2 text-slate-300">·</span>
            <span className="font-semibold text-slate-600">X-axis: Platform Composability</span>
          </p>
          <div className="relative bg-slate-50 rounded-xl border border-slate-200" style={{ height: 340 }}>
            {/* Y-axis label */}
            <span
              className="absolute text-xs font-bold text-slate-500 uppercase tracking-widest"
              style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)', top: '50%', left: 4, marginTop: -48, lineHeight: 1 }}
            >
              ↑ Sovereignty ↓
            </span>
            <span className="absolute text-xs font-semibold text-slate-400" style={{ top: 8, left: '50%', transform: 'translateX(-50%)' }}>High</span>
            <span className="absolute text-xs font-semibold text-slate-400" style={{ bottom: 28, left: '50%', transform: 'translateX(-50%)' }}>Low</span>

            {/* X-axis label */}
            <span className="absolute text-xs font-bold text-slate-500 uppercase tracking-widest" style={{ bottom: 6, left: '50%', transform: 'translateX(-50%)' }}>← Composability →</span>
            <span className="absolute text-xs font-semibold text-slate-400" style={{ top: '50%', left: 20, transform: 'translateY(-50%)' }}>Low</span>
            <span className="absolute text-xs font-semibold text-slate-400" style={{ top: '50%', right: 8, transform: 'translateY(-50%)' }}>High</span>

            {/* Crosshairs */}
            <div className="absolute left-1/2 top-6 bottom-6" style={{ width: 1, background: '#cbd5e1' }} />
            <div className="absolute top-1/2 left-6 right-6" style={{ height: 1, background: '#cbd5e1' }} />

            {/* Quadrant shading */}
            <div className="absolute top-6 right-1 bottom-1/2 left-1/2 rounded-tr-xl" style={{ background: 'rgba(1,118,211,0.04)' }} />

            {/* Players */}
            {matrixPlayers.map((p) => {
              const left = `${8 + p.x * 0.84}%`;
              const top = `${94 - p.y * 0.84}%`;
              return (
                <div key={p.name} className="absolute flex flex-col items-center" style={{ left, top, transform: 'translate(-50%, -50%)' }}>
                  <div className="w-3 h-3 rounded-full border-2 border-white shadow" style={{ background: p.color }} />
                  <span className={`text-xs mt-1 whitespace-nowrap px-1.5 py-0.5 rounded ${p.bold ? 'font-bold bg-blue-100 text-blue-700' : 'font-semibold text-slate-600'}`} style={{ fontSize: 10 }}>
                    {p.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Detailed table */}
      <div id="table" className="glass-panel overflow-hidden">
        <div className="p-6 border-b border-slate-100">
          <h3 className="text-xl font-bold text-primary">Detailed Capability Assessment</h3>
          <p className="text-sm text-muted mt-1">Scoring each archetype across Uniphore's four core platform tenets</p>
        </div>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-200">
              <th className="p-5 text-xs font-bold text-primary uppercase tracking-wider">Archetype / Examples</th>
              <th className="p-5 text-xs font-bold text-primary uppercase tracking-wider text-center">Sovereignty</th>
              <th className="p-5 text-xs font-bold text-primary uppercase tracking-wider text-center">Composability</th>
              <th className="p-5 text-xs font-bold text-primary uppercase tracking-wider text-center">SLM Efficiency</th>
            </tr>
          </thead>
          <tbody>
            {competitors.map((c, i) => (
              <tr key={i} className={`border-b border-slate-100 transition-colors ${c.uniphoreDiff ? 'bg-blue-50/60' : 'bg-white hover:bg-slate-50'}`}>
                <td className="p-5" style={{ maxWidth: 360 }}>
                  <div className={`font-bold text-base mb-1 ${c.uniphoreDiff ? 'text-accent-primary' : 'text-primary'}`}>{c.archetype}</div>
                  <div className="text-xs font-semibold text-accent-secondary mb-3">{c.examples}</div>
                  <div className="text-sm text-muted leading-relaxed">{c.desc}</div>
                </td>
                <td className="p-5 text-center align-top pt-7">{badge(c.sovereignty, c.sov as any)}</td>
                <td className="p-5 text-center align-top pt-7">{badge(c.composability, c.comp as any)}</td>
                <td className="p-5 text-center align-top pt-7">{badge(c.efficiency, c.eff as any)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CompetitiveAnalysisView;
