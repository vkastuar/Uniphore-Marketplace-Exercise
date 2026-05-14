import React from 'react';
import './views.css';

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="glass-panel p-8">
    <h3 style={{ fontSize: '0.72rem', fontWeight: 800, color: '#2563eb', textTransform: 'uppercase', letterSpacing: '0.1em', margin: '0 0 0.75rem 0' }}>{title}</h3>
    <div style={{ fontSize: '0.9rem', color: '#334155', lineHeight: 1.75 }}>{children}</div>
  </div>
);

const P = ({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) => (
  <p style={{ margin: '0 0 0.75rem 0', ...style }}>{children}</p>
);

const B = ({ children }: { children: React.ReactNode }) => (
  <strong style={{ color: '#0f172a', fontWeight: 700 }}>{children}</strong>
);

const TLDRView = () => {
  return (
    <div className="view-container animate-fade-in">
      <div className="view-header">
        <h2 className="view-title">TL;DR — One-Page Summary</h2>
        <p className="view-subtitle">The full strategy, compressed. Platform position, market, marketplace thesis, GTM, pricing, and MVP in one read.</p>
      </div>

      <Section title="The Platform">
        <P>Uniphore's <B>Business AI Cloud</B> (launched June 2025) is a four-layer enterprise AI platform — Agentic orchestration, SLM Factory, Knowledge, and Zero-Copy Data Fabric. The core bet: enterprises in regulated industries need sovereign AI (on-prem, air-gapped, multi-cloud) with a <B>turnkey SLM fine-tuning pipeline</B> they don't have to staff themselves. That is the differentiator no hyperscaler or CRM vendor offers today.</P>
        <P style={{ margin: 0 }}><B>Current state:</B> Early adoption / re-platforming. 2,000+ enterprise install base in BFSI and Telecom, backed by NVIDIA, AMD, Snowflake, and Databricks. Builder ecosystem is SI-only (KPMG, Cognizant) — no public developer community yet. Integration debt from four acquisitions (Orby, Autonom8, ActionIQ, Infoworks) is the main internal drag.</P>
      </Section>

      <Section title="Market & Competitive Position">
        <P>The enterprise AI agent market is <B>$11–12B today, heading to ~$50B by 2030</B> (43–50% CAGR). Only 11% of enterprises have scaled agents to production — the 89% who haven't are blocked by exactly the problems Uniphore solves: sovereignty fears, MLOps complexity, and TCO at scale.</P>
        <P>Four tailwinds: autonomous multi-agent workflows, the infrastructure squeeze pushing enterprises toward SLMs, the data sovereignty imperative (Gartner: 40% of projects at cancellation risk by 2027), and hyper-verticalization of AI agents (62% CAGR for vertical agents).</P>
        <P style={{ margin: 0 }}><B>Competitive moat:</B> Uniphore's platform combines true sovereignty + high composability + a native SLM Factory. Hyperscalers force DIY MLOps. CRM platforms (Salesforce Agentforce) are expensive LLM wrappers. Palantir is sovereign but rigid. The vulnerability is time-to-value — Salesforce is faster to deploy, and the hyperscalers have more enterprise trust.</P>
      </Section>

      <Section title="Why Build a Marketplace — and What It Should Do">
        <P>The marketplace solves three things simultaneously: it outsources vertical R&D to SIs and ISVs at near-zero engineering cost, it monetizes IP that Tier-1 SIs are already building anyway (currently just billable hours), and it creates switching costs — once a healthcare enterprise weaves a Cognizant-built clinical SLM into core operations, leaving Uniphore becomes structurally difficult.</P>
        <P><B>What it trades:</B> Five asset classes — domain-specific SLMs (highest value), agents and agent templates, knowledge templates (ontologies), specialized data connectors, and governance/compliance plugins.</P>
        <P style={{ margin: 0 }}><B>Critical constraint:</B> Do not launch an open marketplace now. There is no developer community. Launch a <B>Curated SI-Led Partner Exchange</B> first. Three horizons: SI Exchange (M1–12) → ISV Expansion (M12–24) → Open Developer Marketplace (M24–36). Six non-negotiables before launch: stable platform APIs, 10–15 seed assets from 3+ SIs, governance review pipeline live, Platform Credit billing live, signed SI rev-share contracts, and one production reference per target vertical.</P>
      </Section>

      <Section title="GTM & Pricing">
        <P><B>Motion:</B> Land with free agent templates (lowest friction, LOB buyer can immediately picture the ROI) → production traffic triggers the SLM Factory upsell (infrastructure squeeze becomes the CS team's expansion trigger). Buyers are CDAO/CISO, VP Enterprise Architecture, and LOB Operations leaders — not the old CCaaS VP.</P>
        <P><B>Go deep, not wide.</B> Lead with hyper-specific vertical claims ("HIPAA-compliant Claims Processing Agents" not "AI for healthcare") in BFSI, Telecom, and Healthcare. Co-fund 2–3 "Hero Assets" per vertical with Tier-1 SIs — when KPMG pitches a financial institution, the Hero Asset inherently pulls Uniphore through as mandatory infrastructure.</P>
        <P style={{ margin: 0 }}><B>Pricing — Razor and Blades:</B> Templates are free (the razor). Monetization comes from backend compute credits (the blades). Packaged agents are outcome-based (for example 50 platform credits/resolved ticket), with an 80–85% / 15–20% partner/Uniphore split. SLMs are pay-per-token with a rev-share markup for premium partner models. The unified <B>Platform Credit Model</B> (annual tiers ~$250K / $500K / $1M+) replaces rigid per-seat licensing and enables flexible consumption across seats, token inference, and GPU hours for SLM fine-tuning.</P>
      </Section>

      <Section title="MVP — Horizon 1">
        <P><B>Scope:</B> B2B Curated Partner Exchange. <B>Timeline:</B> 12–18 months (after acquisition integration debt is cleared).</P>
        <div style={{ overflowX: 'auto', margin: '0.5rem 0 0.75rem' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85rem' }}>
            <thead>
              <tr style={{ background: '#f1f5f9' }}>
                <th style={{ textAlign: 'left', padding: '0.5rem 0.75rem', color: '#0f172a', fontWeight: 700, borderBottom: '1px solid #e2e8f0' }}>Side</th>
                <th style={{ textAlign: 'left', padding: '0.5rem 0.75rem', color: '#0f172a', fontWeight: 700, borderBottom: '1px solid #e2e8f0' }}>What ships</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Demand (enterprises)', 'Curated vertical catalog · "Verified by Uniphore" badges · Rich asset profiles · "Request Deployment" lead flow (not 1-click buy)'],
                ['Supply (SI partners)', 'Private publishing portal · Asset version control · Partner analytics dashboard'],
                ['Host (Uniphore)', 'Admin governance console (submit → scan → approve) · Lead routing to SI + AE'],
                ['Billing', 'Platform Credit API integration · 4-tier pricing logic engine · Partner rev-share ledger'],
              ].map(([side, what]) => (
                <tr key={side} style={{ borderBottom: '1px solid #f1f5f9' }}>
                  <td style={{ padding: '0.5rem 0.75rem', fontWeight: 600, color: '#1e293b', whiteSpace: 'nowrap' }}>{side}</td>
                  <td style={{ padding: '0.5rem 0.75rem', color: '#475569' }}>{what}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <P><B>Roadmap:</B> M1–3 API stabilization → M4–6 private alpha (KPMG, Cognizant, Rackspace) → M7–12 Horizon 1 launch (target: 10+ certified assets, 5+ enterprise leads/month) → M13–24 ISV and connector expansion.</P>
        <P style={{ margin: 0 }}>The "Request Deployment" flow (not 1-click self-serve) is intentional — in Horizon 1, the marketplace is a lead-generation engine for SI co-selling, not a transactional store.</P>
      </Section>

      <Section title="About This Strategy App & Prototype">
        <ol style={{ paddingLeft: '1.25rem', margin: 0, display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
          <li>The app is optimized for desktop — the mobile experience has not been tested.</li>
          <li>The MVP prototype is a UI/UX only prototype.</li>
          <li>It attempts to visualize what the marketplace experience might look like. Not everything in the prototype works — for example, search will not return results.</li>
          <li>Clicking on any asset card takes you to the same flow, which demonstrates the Acme Insurance customer journey.</li>
          <li>Built with Claude Code in Google's Antigravity.</li>
        </ol>
      </Section>
    </div>
  );
};

export default TLDRView;
