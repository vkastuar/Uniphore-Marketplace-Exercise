import './views.css';

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
};

const tocItems = [
  { id: 'deliverables', label: 'Exercise Deliverables', desc: 'Four required sections plus extra credit vibe-code prototype' },
  { id: 'context', label: 'Context & Navigation', desc: 'The core question, the answer, and how to navigate this deck' },
];

const PromptView = () => {
  return (
    <div className="view-container animate-fade-in">
      <div className="view-header">
        <h2 className="view-title">Exercise Prompt</h2>
        <p className="view-subtitle">Uniphore Business AI Cloud Platform — Product Manager Exercise</p>
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

      <div id="deliverables" className="glass-panel overflow-hidden">
        <div className="p-8">
          <p className="text-lg mb-8 leading-relaxed text-primary max-w-4xl">
            As a B2B AI platform product manager for Uniphore's Business AI Cloud Platform, you need to determine <strong>whether or when you should introduce a marketplace</strong> as you expand the developer community adoption of the platform.
          </p>

          <h3 className="text-xl font-semibold mb-5 text-accent-primary">Please show your work details and your conclusion based on:</h3>

          <ol className="flex flex-col gap-3 mb-8">
            {[
              { n: '1', label: 'Market and competitive analysis', link: 'market' },
              { n: '2', label: 'Product positioning and high-level strategy', link: 'strategy' },
              { n: '3', label: 'GTM and pricing (if you suggest to do so)', link: 'strategy' },
              { n: '4', label: 'MVP plan', link: 'mvp' },
            ].map(item => (
              <li key={item.n} className="flex items-center gap-4 bg-slate-50 px-5 py-4 rounded-xl border border-slate-200">
                <div className="list-number">{item.n}</div>
                <span className="font-semibold text-primary">{item.label}</span>
              </li>
            ))}
          </ol>

          <div className="border-t border-slate-200 pt-6">
            <h4 className="text-sm font-bold uppercase tracking-wider text-accent-secondary mb-2">Extra Credit</h4>
            <div className="flex items-center gap-4 bg-indigo-50 px-5 py-4 rounded-xl border border-indigo-100">
              <div className="list-number" style={{ background: 'var(--accent-secondary)' }}>5</div>
              <span className="font-semibold text-primary">Vibe code a UI/UX prototype of your MVP</span>
            </div>
          </div>
        </div>
      </div>

      {/* Context callout boxes */}
      <div id="context" className="grid grid-cols-3 gap-5">
        <div className="glass-panel p-6 border-t-4 border-t-accent-primary">
          <div className="text-2xl mb-3">🎯</div>
          <h4 className="font-bold text-primary mb-2">The Core Question</h4>
          <p className="text-sm text-muted leading-relaxed">Should Uniphore introduce a marketplace now, later, or not at all — and if so, what form should it take given the platform's current state and developer community?</p>
        </div>
        <div className="glass-panel p-6 border-t-4 border-t-emerald-500">
          <div className="text-2xl mb-3">💡</div>
          <h4 className="font-bold text-primary mb-2">The Answer</h4>
          <p className="text-sm text-muted leading-relaxed">Yes — but not an open marketplace today. Launch a curated <strong>SI-Led Partner Exchange</strong> in 12–18 months, then expand to ISVs, then open developers. Phased to avoid the "empty store" failure mode.</p>
        </div>
        <div className="glass-panel p-6 border-t-4 border-t-amber-500">
          <div className="text-2xl mb-3">🗺️</div>
          <h4 className="font-bold text-primary mb-2">Navigate This Deck</h4>
          <p className="text-sm text-muted leading-relaxed">Use the sidebar to explore each section: platform assessment, market sizing, competitive landscape, 3-horizon strategy, and the full MVP feature definition.</p>
        </div>
      </div>
    </div>
  );
};

export default PromptView;
