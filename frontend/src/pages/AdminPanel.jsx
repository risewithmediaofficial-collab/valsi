import { Link } from 'react-router-dom';
import { siteConfig } from '../data/siteContent';

export default function AdminPanel() {
  return (
    <div style={{ padding: '60px 0', minHeight: '80vh' }}>
      <div className="section-inner narrow animate-text-reveal">
        <div style={{ textAlign: 'center', marginBottom: 40 }}>
          <span className="section-eyebrow" style={{ margin: '0 auto 16px', display: 'table' }}>Admin</span>
          <h1
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(2.2rem, 5vw, 3.5rem)',
              fontWeight: 900,
              color: 'var(--primary)',
              margin: '16px 0 8px 0',
              letterSpacing: '-0.02em',
            }}
          >
            VALSII Admin Workspace
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1rem', margin: 0 }}>
            Manage registrations, leads, and content operations.
          </p>
        </div>

        <div style={{ display: 'grid', gap: '32px' }} className="delay-200">
          <div
            style={{
              padding: '16px 0',
              borderBottom: '1px solid var(--divider)',
              fontSize: '0.9rem',
              color: 'var(--primary)',
              fontWeight: 600,
            }}
          >
            🔒 This admin route is a front-end scaffold. Connect authentication and API.
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
            {[
              { label: 'Registrations', value: '0', icon: '📋' },
              { label: 'Pending Approvals', value: '0', icon: '⏳' },
              { label: 'Active Students', value: '0', icon: '🎓' },
            ].map((stat) => (
              <div
                key={stat.label}
                style={{
                  padding: '16px 0',
                  textAlign: 'center',
                  borderRight: '1px solid var(--divider)',
                }}
              >
                <div style={{ fontSize: '1.5rem', marginBottom: 4 }}>{stat.icon}</div>
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', fontWeight: 900, color: 'var(--primary)' }}>
                  {stat.value}
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600 }}>{stat.label}</div>
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center', marginTop: '16px' }}>
            <Link to="/register" className="premium-button primary compact">View Registration Form</Link>
            <a
              href={siteConfig.whatsappAdminUrl}
              target="_blank"
              rel="noreferrer"
              className="premium-button ghost compact"
            >
              Contact Ops Team
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
