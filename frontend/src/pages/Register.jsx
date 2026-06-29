import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { CheckCircle2, ArrowLeft, ArrowRight, ExternalLink } from 'lucide-react';
import { siteConfig, innerPowerTraining } from '../data/siteContent';

const STEPS = [
  { label: 'Student Details', sublabel: 'Your info' },
  { label: 'Course Selection', sublabel: 'Choose tracks' },
  { label: 'Payment',         sublabel: 'Secure checkout' },
  { label: 'Confirmation',    sublabel: 'You\'re in!' },
];

const PROFESSIONS = [
  'School Student',
  'College Student',
  'Job Seeker',
  'Working Professional',
  'Entrepreneur',
  'Other',
];

function StepIndicator({ current }) {
  return (
    <div className="register-progress" role="list" aria-label="Registration steps">
      {STEPS.map((step, i) => {
        const state = i < current ? 'done' : i === current ? 'active' : '';
        return (
          <div
            key={step.label}
            className={`progress-step ${state}`}
            role="listitem"
            aria-current={i === current ? 'step' : undefined}
          >
            <div className="progress-dot">
              {i < current ? <CheckCircle2 size={18} /> : i + 1}
            </div>
            <span className="progress-label">{step.label}</span>
          </div>
        );
      })}
    </div>
  );
}

/* ─── STEP 1: STUDENT DETAILS ───────────────────────────────── */
function StudentDetailsForm({ data, onChange, onNext }) {
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!data.firstName.trim()) e.firstName = 'Required';
    if (!data.lastName.trim())  e.lastName  = 'Required';
    if (!data.email.trim())     e.email     = 'Required';
    if (!data.phone.trim())     e.phone     = 'Required';
    if (!data.profession)       e.profession= 'Required';
    if (!data.city.trim())      e.city      = 'Required';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    if (validate()) onNext();
  };

  const field = (name, label, type = 'text', placeholder = '') => (
    <div className="form-field">
      <label className="form-label" htmlFor={`field-${name}`}>{label}</label>
      <input
        id={`field-${name}`}
        type={type}
        className="form-input"
        placeholder={placeholder || label}
        value={data[name]}
        onChange={(e) => onChange(name, e.target.value)}
        required
      />
      {errors[name] && (
        <span style={{ color: 'var(--primary)', fontSize: '0.8rem', fontWeight: 600 }}>
          {errors[name]}
        </span>
      )}
    </div>
  );

  return (
    <form onSubmit={handleSubmit} noValidate>
      <h2>Your Details</h2>
      <p>Tell us a little about yourself so we can personalise your learning experience.</p>

      <div className="form-grid">
        <div className="form-row">
          {field('firstName', 'First Name', 'text', 'John')}
          {field('lastName',  'Last Name',  'text', 'Doe')}
        </div>
        {field('email', 'Email Address', 'email', 'you@example.com')}
        {field('phone', 'Phone Number',  'tel',   '+91 99999 99999')}

        <div className="form-field">
          <label className="form-label" htmlFor="field-profession">I am a...</label>
          <select
            id="field-profession"
            className="form-input"
            value={data.profession}
            onChange={(e) => onChange('profession', e.target.value)}
            required
          >
            <option value="">Select your profile</option>
            {PROFESSIONS.map((p) => (
              <option key={p} value={p}>{p}</option>
            ))}
          </select>
          {errors.profession && (
            <span style={{ color: 'var(--primary)', fontSize: '0.8rem', fontWeight: 600 }}>
              {errors.profession}
            </span>
          )}
        </div>

        {field('city', 'City', 'text', 'Krishnagiri')}
      </div>

      <div className="register-actions">
        <span />
        <button type="submit" id="student-details-next-btn" className="premium-button primary">
          Continue <ArrowRight size={16} />
        </button>
      </div>
    </form>
  );
}

/* ─── STEP 2: COURSE SELECTION ───────────────────────────────── */
function CourseSelectionForm({ selected, onToggle, onNext, onBack }) {
  const courses = innerPowerTraining.courses.items;
  const [error, setError] = useState('');

  const handleNext = () => {
    if (selected.length === 0) {
      setError('Please select at least one course track.');
      return;
    }
    setError('');
    onNext();
  };

  return (
    <div>
      <h2>Select Your Course Track(s)</h2>
      <p>Choose one or more Inner Power Training tracks to enroll in.</p>

      <div className="course-selection-grid">
        {courses.map((course) => {
          const isSelected = selected.includes(course.title);
          return (
            <label
              key={course.title}
              className={`course-checkbox-item ${isSelected ? 'selected' : ''}`}
              htmlFor={`course-cb-${course.number}`}
            >
              <input
                id={`course-cb-${course.number}`}
                type="checkbox"
                checked={isSelected}
                onChange={() => onToggle(course.title)}
              />
              <span>{course.icon}</span>
              <span>{course.title}</span>
            </label>
          );
        })}
      </div>

      {error && (
        <p style={{ color: 'var(--primary)', fontSize: '0.88rem', fontWeight: 600, marginTop: 12 }}>
          {error}
        </p>
      )}

      <div className="register-actions">
        <button type="button" id="course-back-btn" className="premium-button ghost" onClick={onBack}>
          <ArrowLeft size={16} /> Back
        </button>
        <button type="button" id="course-next-btn" className="premium-button primary" onClick={handleNext}>
          Continue to Payment <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
}

/* ─── STEP 3: PAYMENT ────────────────────────────────────────── */
function PaymentStep({ studentData, selectedCourses, onNext, onBack }) {
  const [processing, setProcessing] = useState(false);

  const handlePayment = () => {
    setProcessing(true);
    // Simulate redirect to payment gateway
    setTimeout(() => {
      // In production: window.location.href = PAYMENT_GATEWAY_URL
      // For now, simulate success
      onNext();
    }, 2000);
  };

  return (
    <div>
      <h2>Payment Details</h2>
      <p>Review your selection and proceed to secure checkout.</p>

      {/* Order Summary */}
      <div
        style={{
          padding: '20px 24px',
          background: 'var(--bg-soft)',
          borderRadius: 'var(--radius-md)',
          border: '1.5px solid var(--stroke)',
          marginBottom: 24,
        }}
      >
        <p style={{ fontWeight: 700, color: 'var(--text)', margin: '0 0 12px', fontSize: '0.92rem' }}>
          📋 Order Summary
        </p>
        <div style={{ display: 'grid', gap: 8 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem' }}>
            <span style={{ color: 'var(--text-muted)' }}>Student Name</span>
            <span style={{ fontWeight: 600 }}>{studentData.firstName} {studentData.lastName}</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem' }}>
            <span style={{ color: 'var(--text-muted)' }}>Email</span>
            <span style={{ fontWeight: 600 }}>{studentData.email}</span>
          </div>
          <div style={{ borderTop: '1px solid var(--divider)', paddingTop: 10, marginTop: 4 }}>
            <span style={{ color: 'var(--text-muted)', fontSize: '0.88rem', display: 'block', marginBottom: 6 }}>
              Selected Courses:
            </span>
            {selectedCourses.map((c) => (
              <div key={c} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: '0.9rem', marginBottom: 4 }}>
                <CheckCircle2 size={14} color="var(--secondary)" />
                <span>{c}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div
        style={{
          padding: '14px 20px',
          background: 'var(--secondary-light)',
          borderRadius: 'var(--radius-sm)',
          border: '1.5px solid rgba(120,166,69,0.2)',
          marginBottom: 24,
          fontSize: '0.88rem',
          color: 'var(--secondary-dark)',
          fontWeight: 600,
        }}
      >
        🔒 Payment is processed through a secure payment gateway. Contact us for fee details.
      </div>

      <div className="register-actions">
        <button type="button" id="payment-back-btn" className="premium-button ghost" onClick={onBack}>
          <ArrowLeft size={16} /> Back
        </button>
        <button
          id="payment-proceed-btn"
          type="button"
          className="premium-button primary"
          onClick={handlePayment}
          disabled={processing}
          style={{ opacity: processing ? 0.7 : 1 }}
        >
          {processing ? 'Processing...' : 'Proceed to Payment →'}
        </button>
      </div>
    </div>
  );
}

/* ─── STEP 4: CONFIRMATION ───────────────────────────────────── */
function ConfirmationStep({ studentData, selectedCourses }) {
  return (
    <div className="confirmation-card">
      <div className="confirmation-icon" aria-hidden="true">✅</div>
      <h2 className="confirmation-title">You're Successfully Enrolled!</h2>
      <p className="confirmation-text">
        Welcome to VALSII, <strong>{studentData.firstName}</strong>! Your registration for{' '}
        <strong>{selectedCourses.join(', ')}</strong> has been received. Your login credentials
        will be sent to <strong>{studentData.email}</strong> shortly. Our admin team will review
        and approve your enrollment within 24 hours.
      </p>

      <div
        style={{
          padding: '16px 20px',
          background: 'var(--bg-soft)',
          borderRadius: 'var(--radius-md)',
          border: '1.5px solid var(--stroke)',
          marginBottom: 28,
          fontSize: '0.9rem',
          color: 'var(--text-muted)',
          lineHeight: 1.7,
          textAlign: 'left',
        }}
      >
        <strong style={{ color: 'var(--text)', display: 'block', marginBottom: 6 }}>Next Steps:</strong>
        ✅ Registration received &nbsp;→&nbsp;
        📧 Credentials emailed &nbsp;→&nbsp;
        ✔️ Admin approval &nbsp;→&nbsp;
        🎓 Start learning on our platform
      </div>

      <a
        id="go-to-lms-btn"
        href={siteConfig.lmsUrl}
        target="_blank"
        rel="noreferrer"
        className="premium-button primary"
        style={{ margin: '0 auto 12px', display: 'flex' }}
      >
        Go to Student Dashboard <ExternalLink size={16} />
      </a>

      <p style={{ fontSize: '0.82rem', color: 'var(--text-light)', marginTop: 8 }}>
        Need help? Contact us on{' '}
        <a
          href={siteConfig.whatsappJoinUrl}
          target="_blank"
          rel="noreferrer"
          style={{ color: 'var(--primary)', fontWeight: 600 }}
        >
          WhatsApp
        </a>
      </p>
    </div>
  );
}

/* ─── MAIN REGISTER PAGE ─────────────────────────────────────── */
const INITIAL_STUDENT = {
  firstName: '', lastName: '', email: '', phone: '', profession: '', city: '',
};

export default function Register() {
  const location = useLocation();
  const [step, setStep]           = useState(0);
  const [studentData, setStudentData] = useState(INITIAL_STUDENT);
  const [selectedCourses, setSelected] = useState(
    location.state?.course ? [location.state.course] : []
  );

  const changeField = (name, value) => setStudentData((d) => ({ ...d, [name]: value }));

  const toggleCourse = (title) => {
    setSelected((prev) =>
      prev.includes(title) ? prev.filter((c) => c !== title) : [...prev, title]
    );
  };

  return (
    <div className="register-page" style={{ padding: '60px 0' }}>
      <div className="section-inner narrow">
        {/* Page Title */}
        <div style={{ textAlign: 'center', marginBottom: 40 }} className="animate-text-reveal">
          <span className="section-eyebrow" style={{ margin: '0 auto 12px', display: 'table' }}>
            Registration
          </span>
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
            Join VALSII
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1rem', margin: 0 }}>
            Complete the steps below to enroll.
          </p>
        </div>

        <div className="register-shell">
          <StepIndicator current={step} />

          <div className="register-card">
            {step === 0 && (
              <StudentDetailsForm
                data={studentData}
                onChange={changeField}
                onNext={() => setStep(1)}
              />
            )}
            {step === 1 && (
              <CourseSelectionForm
                selected={selectedCourses}
                onToggle={toggleCourse}
                onNext={() => setStep(2)}
                onBack={() => setStep(0)}
              />
            )}
            {step === 2 && (
              <PaymentStep
                studentData={studentData}
                selectedCourses={selectedCourses}
                onNext={() => setStep(3)}
                onBack={() => setStep(1)}
              />
            )}
            {step === 3 && (
              <ConfirmationStep
                studentData={studentData}
                selectedCourses={selectedCourses}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
