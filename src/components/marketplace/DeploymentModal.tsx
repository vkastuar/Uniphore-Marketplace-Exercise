import React, { useState } from 'react';
import { CheckCircle2, ShieldAlert, Server, X } from 'lucide-react';
import './marketplace.css';

interface DeploymentModalProps {
  onClose: () => void;
}

const DeploymentModal: React.FC<DeploymentModalProps> = ({ onClose }) => {
  const [step, setStep] = useState(1);

  return (
    <div className="mp-modal-overlay">
      <div className="mp-modal">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
          <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#0f172a' }}>
            {step === 1 ? 'Deploy to Sandbox' : 'Deployment Initiated'}
          </h2>
          <button onClick={onClose} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#64748b' }}>
            <X size={20} />
          </button>
        </div>

        {step === 1 ? (
          <div>
            <div style={{ background: '#f8fafc', padding: '1rem', borderRadius: '0.5rem', marginBottom: '1.5rem', border: '1px solid #e2e8f0' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <span style={{ color: '#475569', fontSize: '0.9rem', fontWeight: 500 }}>Template Cost:</span>
                <span style={{ color: '#16a34a', fontSize: '0.9rem', fontWeight: 700 }}>$0.00</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: '#475569', fontSize: '0.9rem', fontWeight: 500 }}>Est. Execution Cost:</span>
                <span style={{ color: '#0f172a', fontSize: '0.9rem', fontWeight: 700 }}>$0.002 / Node</span>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start', marginBottom: '2rem', padding: '1rem', background: '#eff6ff', borderRadius: '0.5rem' }}>
              <ShieldAlert size={20} color="#2563eb" style={{ marginTop: '0.1rem', flexShrink: 0 }} />
              <p style={{ fontSize: '0.85rem', color: '#1e3a8a', margin: 0, lineHeight: 1.5 }}>
                <strong>Enterprise Integration Required:</strong> This agent connects to sovereign on-prem infrastructure. Deployment will provision your BAIC Sandbox and automatically notify the <strong>Cognizant SI Team</strong> to assist with legacy mainframe routing.
              </p>
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '1rem' }}>
              <button 
                onClick={onClose}
                style={{ padding: '0.75rem 1.5rem', borderRadius: '0.5rem', background: 'transparent', border: '1px solid #cbd5e1', fontWeight: 600, color: '#475569', cursor: 'pointer' }}
              >
                Cancel
              </button>
              <button 
                className="mp-btn-primary"
                onClick={() => setStep(2)}
              >
                <Server size={18} />
                Deploy & Request SI Support
              </button>
            </div>
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '1rem 0' }}>
            <div style={{ width: '64px', height: '64px', background: '#f0fdf4', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem' }}>
              <CheckCircle2 size={32} color="#16a34a" />
            </div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#0f172a', marginBottom: '0.5rem' }}>Sandbox Provisioning</h3>
            <p style={{ color: '#64748b', fontSize: '0.95rem', marginBottom: '2rem', lineHeight: 1.5 }}>
              The Auto-Claims Resolution agent is being deployed to your secure sandbox.<br/><br/>
              A notification has been sent to your <strong>Cognizant Implementation Lead</strong> to begin the integration sprint for your on-prem mainframes.
            </p>
            <button 
              className="mp-btn-primary"
              style={{ width: '100%', justifyContent: 'center' }}
              onClick={onClose}
            >
              Return to Marketplace
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default DeploymentModal;
