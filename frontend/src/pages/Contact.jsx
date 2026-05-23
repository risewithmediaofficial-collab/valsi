import { useEffect, useRef, useState } from 'react';
import { ChevronDown, Mail, MessageCircle, Phone } from 'lucide-react';
import {
  CTASection,
  ContentCards,
  FAQSection,
  HeroSection,
  ProcessRail,
} from '../components/PremiumSections';
import { contactPage, siteConfig } from '../data/siteContent';

const initialValues = {
  name: '',
  email: '',
  phone: '',
  interest: '',
  message: '',
};

const closingCta = {
  heading: 'Prefer a faster response?',
  description: 'WhatsApp is the quickest path for first contact, introductions, and direct follow-up.',
  buttons: [
    { label: 'Open WhatsApp', href: siteConfig.whatsappGeneralUrl, external: true, variant: 'primary' },
    { label: 'Call Valsii', href: `tel:${siteConfig.phoneDigits}`, external: true, variant: 'secondary' },
  ],
};

const interestOptions = [
  { value: '', label: 'Select one' },
  { value: 'SkillNet Mastery', label: 'SkillNet Mastery' },
  { value: 'Farm-to-Home', label: 'Farm-to-Home' },
  { value: 'Partnership', label: 'Partnership' },
  { value: 'General Valsii Inquiry', label: 'General Valsii Inquiry' },
];

function FieldShell({ id, label, value, error, children, spanTwo = false, active = false, className = '' }) {
  return (
    <div
      className={`field-shell ${value || active ? 'filled' : ''} ${error ? 'has-error' : ''} ${spanTwo ? 'field-span-2' : ''} ${className}`.trim()}
    >
      {children}
      <label htmlFor={id}>{label}</label>
      {error ? <span className="field-error">{error}</span> : null}
    </div>
  );
}

function SelectField({ id, label, name, value, error, open, onToggle, onSelect, onClose }) {
  const shellRef = useRef(null);
  const selectedLabel = interestOptions.find((option) => option.value === value)?.label || 'Select one';

  useEffect(() => {
    if (!open) return undefined;

    function handlePointerDown(event) {
      if (shellRef.current && !shellRef.current.contains(event.target)) {
        onClose();
      }
    }

    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        onClose();
      }
    }

    document.addEventListener('mousedown', handlePointerDown);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('mousedown', handlePointerDown);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose, open]);

  return (
    <FieldShell
      id={id}
      label={label}
      value={value}
      error={error}
      active={open}
      className={`select-shell ${open ? 'open' : ''}`}
    >
      <div ref={shellRef} className="custom-select">
        <input type="hidden" name={name} value={value} />

        <button
          id={id}
          type="button"
          className="select-button"
          aria-haspopup="listbox"
          aria-expanded={open}
          aria-controls={`${id}-listbox`}
          aria-invalid={Boolean(error)}
          onClick={onToggle}
        >
          <span className={`select-button-value ${value ? 'selected' : ''}`}>{selectedLabel}</span>
          <ChevronDown size={18} />
        </button>

        {open ? (
          <div className="select-panel" id={`${id}-listbox`} role="listbox" aria-labelledby={id}>
            {interestOptions.map((option) => (
              <button
                key={option.label}
                type="button"
                role="option"
                className={`select-option ${value === option.value ? 'selected' : ''}`.trim()}
                aria-selected={value === option.value}
                onClick={() => onSelect(option.value)}
              >
                {option.label}
              </button>
            ))}
          </div>
        ) : null}
      </div>
    </FieldShell>
  );
}

export default function Contact() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');
  const [interestOpen, setInterestOpen] = useState(false);

  function updateField(event) {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: '' }));
    setStatus('idle');
  }

  function updateInterest(value) {
    setValues((current) => ({ ...current, interest: value }));
    setErrors((current) => ({ ...current, interest: '' }));
    setStatus('idle');
    setInterestOpen(false);
  }

  function validate() {
    const nextErrors = {};
    if (!values.name.trim()) nextErrors.name = 'Enter your full name.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
      nextErrors.email = 'Enter a valid email address.';
    }
    if (!/^[+()0-9\s-]{8,}$/.test(values.phone.trim())) {
      nextErrors.phone = 'Enter a valid phone number.';
    }
    if (!values.interest) nextErrors.interest = 'Choose your area of interest.';
    return nextErrors;
  }

  function handleSubmit(event) {
    event.preventDefault();
    setInterestOpen(false);
    const nextErrors = validate();
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length) {
      setStatus('error');
      return;
    }

    const subject = encodeURIComponent(`Valsii inquiry from ${values.name.trim()}`);
    const body = encodeURIComponent(
      [
        `Name: ${values.name.trim()}`,
        `Email: ${values.email.trim()}`,
        `Phone: ${values.phone.trim()}`,
        `Interest: ${values.interest}`,
        '',
        `Message: ${values.message.trim() || 'No extra message provided.'}`,
      ].join('\n'),
    );

    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
    setStatus('sent');
    setValues(initialValues);
  }

  return (
    <>
      <HeroSection data={contactPage.hero} />
      <ContentCards data={contactPage.channels} compact />

      <section className="section-shell contact-shell" id="contact-form">
        <div className="section-inner">
          <div className="contact-studio">
            <div className="contact-story-panel">
              <span className="section-eyebrow">Direct Contact</span>
              <h2>Choose the right Valsii conversation.</h2>
              <p>
                Use the form for structured questions, or jump straight to WhatsApp for the
                fastest route into SkillNet Mastery, Farm-to-Home, or broader ecosystem conversations.
              </p>

              <div className="contact-pill-row">
                <span>Calm response flow</span>
                <span>No pressure follow-up</span>
                <span>Clear next steps</span>
              </div>

              <div className="contact-link-stack">
                <a href={siteConfig.whatsappGeneralUrl} target="_blank" rel="noreferrer">
                  <MessageCircle size={18} />
                  <span>WhatsApp Valsii</span>
                </a>
                <a href={`mailto:${siteConfig.email}`}>
                  <Mail size={18} />
                  <span>{siteConfig.email}</span>
                </a>
                <a href={`tel:${siteConfig.phoneDigits}`}>
                  <Phone size={18} />
                  <span>{siteConfig.phone}</span>
                </a>
              </div>

              <div className="contact-assurance-strip">
                <span>Admissions guidance, partnerships, and future brand conversations are all routed clearly.</span>
              </div>
            </div>

            <div className="contact-form-shell">
              <div className="form-intro">
                <h3>Send an inquiry</h3>
                <p>We will guide you to the right next step clearly, calmly, and without pressure.</p>
              </div>

              <form className="contact-form" onSubmit={handleSubmit} noValidate>
                <div className="contact-form-grid">
                  <FieldShell id="contact-name" label="Full name" value={values.name} error={errors.name}>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      value={values.name}
                      onChange={updateField}
                      autoComplete="name"
                      placeholder=" "
                      aria-invalid={Boolean(errors.name)}
                    />
                  </FieldShell>

                  <FieldShell id="contact-email" label="Email address" value={values.email} error={errors.email}>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      value={values.email}
                      onChange={updateField}
                      autoComplete="email"
                      placeholder=" "
                      aria-invalid={Boolean(errors.email)}
                    />
                  </FieldShell>

                  <FieldShell id="contact-phone" label="Phone number" value={values.phone} error={errors.phone}>
                    <input
                      id="contact-phone"
                      type="tel"
                      name="phone"
                      value={values.phone}
                      onChange={updateField}
                      autoComplete="tel"
                      placeholder=" "
                      aria-invalid={Boolean(errors.phone)}
                    />
                  </FieldShell>

                  <SelectField
                    id="contact-interest"
                    name="interest"
                    label="Area of interest"
                    value={values.interest}
                    error={errors.interest}
                    open={interestOpen}
                    onToggle={() => setInterestOpen((current) => !current)}
                    onSelect={updateInterest}
                    onClose={() => setInterestOpen(false)}
                  />

                  <FieldShell
                    id="contact-message"
                    label="How can we help?"
                    value={values.message}
                    error={errors.message}
                    spanTwo
                  >
                    <textarea
                      id="contact-message"
                      name="message"
                      rows="6"
                      value={values.message}
                      onChange={updateField}
                      placeholder=" "
                    />
                  </FieldShell>
                </div>

                <button type="submit" className="premium-button primary form-submit">
                  <span>{status === 'sent' ? 'Email Draft Opened' : 'Send Inquiry'}</span>
                </button>

                {status === 'sent' ? (
                  <p className="form-note success" role="status">
                    Your email app should now open with a prepared Valsii inquiry draft.
                  </p>
                ) : null}

                {status === 'error' ? (
                  <p className="form-note" role="alert">
                    Please correct the highlighted fields before sending your request.
                  </p>
                ) : null}
              </form>
            </div>
          </div>
        </div>
      </section>

      <ProcessRail data={contactPage.contactProcess} />
      <FAQSection eyebrow="Support" title="Frequently asked questions" items={contactPage.faqs} />
      <CTASection data={closingCta} />
    </>
  );
}
