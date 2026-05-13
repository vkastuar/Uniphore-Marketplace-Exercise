import React, { useState } from 'react';
import { ArrowLeft, ShieldCheck, Database, Cpu, Play, Server, GitBranch, CheckCircle2 } from 'lucide-react';
import './marketplace.css';
import DeploymentModal from './DeploymentModal';

interface AgentDetailViewProps {
  onBack: () => void;
}

const AgentDetailView: React.FC<AgentDetailViewProps> = ({ onBack }) => {
  const [showModal, setShowModal] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div style={{ animation: 'fadeIn 0.3s ease' }}>
      <button 
        onClick={onBack}
        style={{ background: 'none', border: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#64748b', fontWeight: 600, cursor: 'pointer', marginBottom: '2rem' }}
      >
        <ArrowLeft size={18} />
        Back to Marketplace
      </button>

      <div className="mp-detail-header">
        <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
          <div style={{ width: '80px', height: '80px', background: '#eff6ff', borderRadius: '1rem', border: '1px solid #bfdbfe', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Cpu size={40} color="#2563eb" />
          </div>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
              <h1 style={{ fontSize: '2rem', fontWeight: 900, color: '#0f172a', margin: 0 }}>Auto-Claims Resolution Agent</h1>
              <div className="mp-badge verified">
                <ShieldCheck size={14} />
                Verified by Uniphore
              </div>
            </div>
            <p style={{ color: '#475569', fontSize: '1.1rem', margin: '0 0 1rem 0' }}>
              Built by <strong style={{ color: '#0f172a' }}>Cognizant</strong> for BFSI (Insurance)
            </p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <div className="mp-badge price" style={{ fontSize: '0.85rem', padding: '0.4rem 0.75rem' }}>
                <strong style={{ color: '#16a34a' }}>$0</strong> Template Cost
              </div>
              <div className="mp-badge price" style={{ fontSize: '0.85rem', padding: '0.4rem 0.75rem' }}>
                Uniphore Token Pricing Applies
              </div>
            </div>
          </div>
        </div>
        
        <div style={{ display: 'flex', gap: '1rem' }}>
          <button className="mp-btn-primary" style={{ background: '#f1f5f9', color: '#0f172a' }}>
            <Play size={18} />
            View Demo
          </button>
          <button className="mp-btn-primary" onClick={() => setShowModal(true)}>
            <Server size={18} />
            Deploy to Sandbox
          </button>
        </div>
      </div>

      <div className="mp-tabs">
        <div className={`mp-tab ${activeTab === 'overview' ? 'active' : ''}`} onClick={() => setActiveTab('overview')}>Overview</div>
        <div className={`mp-tab ${activeTab === 'architecture' ? 'active' : ''}`} onClick={() => setActiveTab('architecture')}>Architecture & Integrations</div>
        <div className={`mp-tab ${activeTab === 'security' ? 'active' : ''}`} onClick={() => setActiveTab('security')}>Security & Compliance</div>
      </div>

      <div className="mp-content-body">
        {activeTab === 'overview' && (
          <div style={{ display: 'flex', gap: '3rem' }}>
            <div style={{ flex: 2 }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#0f172a', marginBottom: '1rem' }}>About this Agent</h3>
              <p style={{ color: '#475569', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                The Auto-Claims Resolution Agent, architected by Cognizant, automates up to 80% of inbound first-notice-of-loss (FNOL) claims. It extracts unstructured data from claim emails, validates policy coverage against legacy Guidewire/Mainframe systems, and drafts automated resolution responses.
              </p>
              
              <h4 style={{ fontSize: '1rem', fontWeight: 'bold', color: '#0f172a', marginBottom: '1rem' }}>Key Capabilities</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start', color: '#475569' }}>
                  <CheckCircle2 size={18} color="#2563eb" style={{ marginTop: '0.1rem' }} />
                  Extracts entity data (Policy Number, Date of Loss, Injury Type) from unstructured text.
                </li>
                <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start', color: '#475569' }}>
                  <CheckCircle2 size={18} color="#2563eb" style={{ marginTop: '0.1rem' }} />
                  Cross-references structured data in legacy databases using Zero-Copy architecture.
                </li>
                <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start', color: '#475569' }}>
                  <CheckCircle2 size={18} color="#2563eb" style={{ marginTop: '0.1rem' }} />
                  Automatically routes complex medical claims to human adjusters with summarized context.
                </li>
              </ul>
            </div>
            
            <div style={{ flex: 1 }}>
              <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '1rem', padding: '1.5rem' }}>
                <h4 style={{ fontSize: '0.9rem', fontWeight: 'bold', color: '#0f172a', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1rem' }}>Performance Metrics</h4>
                
                <div style={{ marginBottom: '1.5rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.25rem' }}>
                    <span style={{ color: '#64748b', fontSize: '0.9rem' }}>Automation Rate</span>
                    <span style={{ color: '#0f172a', fontWeight: 'bold', fontSize: '0.9rem' }}>78%</span>
                  </div>
                  <div style={{ height: '6px', background: '#e2e8f0', borderRadius: '3px', overflow: 'hidden' }}>
                    <div style={{ width: '78%', height: '100%', background: '#2563eb' }}></div>
                  </div>
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.25rem' }}>
                    <span style={{ color: '#64748b', fontSize: '0.9rem' }}>Avg. Processing Time</span>
                    <span style={{ color: '#0f172a', fontWeight: 'bold', fontSize: '0.9rem' }}>1.2s</span>
                  </div>
                  <div style={{ height: '6px', background: '#e2e8f0', borderRadius: '3px', overflow: 'hidden' }}>
                    <div style={{ width: '15%', height: '100%', background: '#16a34a' }}></div>
                  </div>
                </div>

                <div style={{ paddingTop: '1rem', borderTop: '1px solid #e2e8f0' }}>
                  <span style={{ color: '#64748b', fontSize: '0.85rem' }}>Requires Uniphore Credits:</span>
                  <div style={{ color: '#0f172a', fontWeight: 'bold', fontSize: '1.1rem', marginTop: '0.25rem' }}>~1,200 Tokens / Claim</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'architecture' && (
          <div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#0f172a', marginBottom: '1.5rem' }}>Required Dependencies</h3>
            <div className="mp-grid">
              <div className="mp-card" style={{ padding: '1.5rem', background: '#f8fafc', border: '1px solid #cbd5e1' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                  <Database color="#2563eb" />
                  <h4 style={{ fontWeight: 'bold', color: '#0f172a', margin: 0 }}>Legacy Mainframe DB2</h4>
                </div>
                <p style={{ color: '#475569', fontSize: '0.9rem', margin: 0 }}>Requires Cognizant SI integration to securely map on-prem DB2 endpoints to the agent's zero-copy data fabric.</p>
              </div>
              <div className="mp-card" style={{ padding: '1.5rem', background: '#f8fafc', border: '1px solid #cbd5e1' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                  <Cpu color="#8b5cf6" />
                  <h4 style={{ fontWeight: 'bold', color: '#0f172a', margin: 0 }}>Uniphore Claims SLM v2</h4>
                </div>
                <p style={{ color: '#475569', fontSize: '0.9rem', margin: 0 }}>The baseline small language model used for intent extraction. Can be fine-tuned via the SLM factory.</p>
              </div>
              <div className="mp-card" style={{ padding: '1.5rem', background: '#f8fafc', border: '1px solid #cbd5e1' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                  <GitBranch color="#10b981" />
                  <h4 style={{ fontWeight: 'bold', color: '#0f172a', margin: 0 }}>BPMN Orchestrator</h4>
                </div>
                <p style={{ color: '#475569', fontSize: '0.9rem', margin: 0 }}>Executes the 14-step routing logic defined in this template.</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'security' && (
          <div style={{ background: '#f0fdf4', padding: '2rem', borderRadius: '1rem', border: '1px solid #bbf7d0' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
              <ShieldCheck size={32} color="#16a34a" />
              <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#0f172a', margin: 0 }}>Sovereign Deployment Ready</h3>
            </div>
            <p style={{ color: '#166534', lineHeight: 1.6, margin: 0 }}>
              This agent template is certified for <strong>Zero-Copy Data Architectures</strong>. No PII or claim data is ingested or stored by the agent or the SLM. All data remains within your sovereign infrastructure. Fully compliant with SOC2, GDPR, and HIPAA.
            </p>
          </div>
        )}
      </div>

      {showModal && <DeploymentModal onClose={() => setShowModal(false)} />}
    </div>
  );
};

export default AgentDetailView;
