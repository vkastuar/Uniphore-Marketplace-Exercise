import { useState } from 'react';
import { Store, LogIn } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import './auth.css';

type AuthMode = 'signin' | 'signup' | 'forgot';

const getErrorMessage = (code: string): string => {
  const map: Record<string, string> = {
    'auth/email-already-in-use':                    'An account with this email already exists. Sign in instead.',
    'auth/wrong-password':                          'Incorrect password. Try again or reset your password.',
    'auth/invalid-credential':                      'Incorrect email or password. Please try again.',
    'auth/user-not-found':                          'No account found with this email. Please sign up.',
    'auth/invalid-email':                           'Please enter a valid email address.',
    'auth/weak-password':                           'Password must be at least 6 characters.',
    'auth/too-many-requests':                       'Too many failed attempts. Please try again later.',
    'auth/network-request-failed':                  'Network error. Please check your connection.',
    'auth/account-exists-with-different-credential':'An account with this email exists with a different sign-in method.',
  };
  return map[code] ?? 'Something went wrong. Please try again.';
};

const isFirebaseError = (err: unknown): err is { code: string } =>
  typeof err === 'object' && err !== null && 'code' in err;

const isSilentError = (code: string) =>
  code === 'auth/popup-closed-by-user' || code === 'auth/cancelled-popup-request';

const GoogleIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
    <path d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.716v2.259h2.908C16.658 14.215 17.64 11.907 17.64 9.2z" fill="#4285F4"/>
    <path d="M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 0 0 9 18z" fill="#34A853"/>
    <path d="M3.964 10.71A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.996 8.996 0 0 0 0 9c0 1.452.348 2.827.957 4.042l3.007-2.332z" fill="#FBBC05"/>
    <path d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 0 0 .957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58z" fill="#EA4335"/>
  </svg>
);

const FacebookIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="white" aria-hidden="true">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const AuthPage = () => {
  const { signInWithGoogle, signInWithFacebook, signInWithEmail, signUpWithEmail, sendPasswordReset } = useAuth();

  const [mode, setMode] = useState<AuthMode>('signin');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const clear = () => { setError(''); setSuccess(''); };

  const switchMode = (m: AuthMode) => {
    setMode(m);
    clear();
    setName(''); setEmail(''); setPassword('');
  };

  const handleOAuth = async (provider: 'google' | 'facebook') => {
    setLoading(true);
    clear();
    try {
      if (provider === 'google') await signInWithGoogle();
      else await signInWithFacebook();
    } catch (err) {
      if (isFirebaseError(err) && !isSilentError(err.code)) {
        setError(getErrorMessage(err.code));
      }
    } finally {
      setLoading(false);
    }
  };

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    clear();
    try {
      await signInWithEmail(email, password);
    } catch (err) {
      setError(isFirebaseError(err) ? getErrorMessage(err.code) : 'Something went wrong.');
    } finally {
      setLoading(false);
    }
  };

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) { setError('Please enter your full name.'); return; }
    setLoading(true);
    clear();
    try {
      await signUpWithEmail(email, password, name.trim());
    } catch (err) {
      setError(isFirebaseError(err) ? getErrorMessage(err.code) : 'Something went wrong.');
    } finally {
      setLoading(false);
    }
  };

  const handleForgotPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    clear();
    try {
      await sendPasswordReset(email);
      setSuccess('Reset email sent — check your inbox.');
    } catch (err) {
      setError(isFirebaseError(err) ? getErrorMessage(err.code) : 'Something went wrong.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page">
      <div style={{ width: '100%', maxWidth: '420px' }}>

        {/* Brand */}
        <div className="auth-brand">
          <div className="auth-brand-logo">
            <div className="auth-brand-icon"><Store size={20} color="white" /></div>
            <h1>Uniphore BCAI</h1>
          </div>
          <p>Business AI Cloud Marketplace</p>
        </div>

        {/* Card */}
        <div className="auth-card">

          {mode !== 'forgot' && (
            <div className="auth-tabs">
              <button className={`auth-tab ${mode === 'signin' ? 'active' : ''}`} onClick={() => switchMode('signin')}>Sign In</button>
              <button className={`auth-tab ${mode === 'signup' ? 'active' : ''}`} onClick={() => switchMode('signup')}>Sign Up</button>
            </div>
          )}

          <div className="auth-form-body">

            {error   && <div className="auth-error">{error}</div>}
            {success && <div className="auth-success">{success}</div>}

            {/* ── Sign In ── */}
            {mode === 'signin' && (
              <>
                <button className="auth-social-btn auth-google-btn" onClick={() => handleOAuth('google')} disabled={loading}>
                  <GoogleIcon /> Continue with Google
                </button>
                <button className="auth-social-btn auth-facebook-btn" onClick={() => handleOAuth('facebook')} disabled={loading}>
                  <FacebookIcon /> Continue with Facebook
                </button>

                <div className="auth-divider">
                  <div className="auth-divider-line" /><span>or sign in with email</span><div className="auth-divider-line" />
                </div>

                <form onSubmit={handleSignIn}>
                  <div className="auth-field">
                    <label className="auth-label">Email</label>
                    <input className="auth-input" type="email" placeholder="you@company.com" value={email} onChange={e => setEmail(e.target.value)} required autoComplete="email" />
                  </div>
                  <div className="auth-field">
                    <label className="auth-label">Password</label>
                    <input className="auth-input" type="password" placeholder="••••••••" value={password} onChange={e => setPassword(e.target.value)} required autoComplete="current-password" />
                    <button type="button" className="auth-forgot-link" onClick={() => switchMode('forgot')}>Forgot password?</button>
                  </div>
                  <button type="submit" className="auth-submit-btn" disabled={loading}>
                    {loading ? <><span className="auth-spinner" /> Signing in…</> : <><LogIn size={15} /> Sign In</>}
                  </button>
                </form>

                <div className="auth-footer-link">
                  Don't have an account?{' '}<button onClick={() => switchMode('signup')}>Sign up</button>
                </div>
              </>
            )}

            {/* ── Sign Up ── */}
            {mode === 'signup' && (
              <>
                <button className="auth-social-btn auth-google-btn" onClick={() => handleOAuth('google')} disabled={loading}>
                  <GoogleIcon /> Continue with Google
                </button>
                <button className="auth-social-btn auth-facebook-btn" onClick={() => handleOAuth('facebook')} disabled={loading}>
                  <FacebookIcon /> Continue with Facebook
                </button>

                <div className="auth-divider">
                  <div className="auth-divider-line" /><span>or sign up with email</span><div className="auth-divider-line" />
                </div>

                <form onSubmit={handleSignUp}>
                  <div className="auth-field">
                    <label className="auth-label">Full Name</label>
                    <input className="auth-input" type="text" placeholder="Jane Smith" value={name} onChange={e => setName(e.target.value)} required autoComplete="name" />
                  </div>
                  <div className="auth-field">
                    <label className="auth-label">Work Email</label>
                    <input className="auth-input" type="email" placeholder="you@company.com" value={email} onChange={e => setEmail(e.target.value)} required autoComplete="email" />
                  </div>
                  <div className="auth-field">
                    <label className="auth-label">Password</label>
                    <input className="auth-input" type="password" placeholder="At least 6 characters" value={password} onChange={e => setPassword(e.target.value)} required autoComplete="new-password" minLength={6} />
                  </div>
                  <button type="submit" className="auth-submit-btn" disabled={loading}>
                    {loading ? <><span className="auth-spinner" /> Creating account…</> : 'Create Account'}
                  </button>
                </form>

                <div className="auth-footer-link">
                  Already have an account?{' '}<button onClick={() => switchMode('signin')}>Sign in</button>
                </div>
              </>
            )}

            {/* ── Forgot Password ── */}
            {mode === 'forgot' && (
              <>
                <div style={{ marginBottom: '1.25rem' }}>
                  <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#0f172a', margin: '0 0 0.25rem 0' }}>Reset your password</h3>
                  <p style={{ fontSize: '0.82rem', color: '#64748b', margin: 0, lineHeight: 1.5 }}>
                    Enter your email and we'll send you a reset link.
                  </p>
                </div>

                <form onSubmit={handleForgotPassword}>
                  <div className="auth-field">
                    <label className="auth-label">Email</label>
                    <input className="auth-input" type="email" placeholder="you@company.com" value={email} onChange={e => setEmail(e.target.value)} required autoComplete="email" />
                  </div>
                  <button type="submit" className="auth-submit-btn" disabled={loading || !!success}>
                    {loading ? <><span className="auth-spinner" /> Sending…</> : 'Send Reset Email'}
                  </button>
                </form>

                <div className="auth-footer-link" style={{ marginTop: '1rem' }}>
                  <button onClick={() => switchMode('signin')}>← Back to sign in</button>
                </div>
              </>
            )}

          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
