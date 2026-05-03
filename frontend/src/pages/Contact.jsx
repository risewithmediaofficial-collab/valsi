import { useState } from 'react';
import { CalendarClock, Mail, MapPin, Phone } from 'lucide-react';
import { ContentCards, FAQSection, OptimizedImage, ProcessRail } from '../components/PremiumSections';
import { images } from '../data/siteContent';

const initialValues = { name: '', email: '', phone: '', interest: '', message: '' };

const contactCards = [
  { title: 'Phone', text: '+91 98765 43210\nMon-Fri, 10 AM - 6 PM', icon: 'Phone' },
  { title: 'Email', text: 'orientation@valsii.com\nResponse within 24 hours', icon: 'MessageCircle' },
  { title: 'Office Location', text: 'Valsii LLP (Registered Entity)\nChennai, Tamil Nadu', icon: 'Route' },
  { title: 'Orientation Hours', text: 'Weekly Orientation Sessions\nBy appointment only', icon: 'Clock3' },
];

const process = [
  { title: 'Request Orientation', text: 'Fill the form or contact us directly' },
  { title: 'Schedule Session', text: "We'll schedule a convenient time for orientation" },
  { title: 'System Understanding', text: 'Detailed explanation of both systems' },
  { title: 'Clarity & Next Steps', text: 'Get clarity and decide on participation' },
];

const notes = [
  { title: 'Orientation is completely free', text: 'Start with clarity before making any participation decision.', icon: 'CheckCircle2' },
  { title: 'No pressure to join after orientation', text: 'All system details are shared transparently and questions are answered honestly.', icon: 'CheckCircle2' },
  { title: 'Field explanation', text: 'Farm-to-Home is a product supply system where trained individuals handle essential goods responsibly from producers to households.', icon: 'Sprout' },
];

const faqs = [
  {
    question: 'What happens after orientation?',
    answer: "After orientation, you'll have complete clarity about both systems. You can start with SkillNet Mastery training, understand more before deciding, or ask more questions. No commitment required.",
  },
  {
    question: 'Is there any fee for orientation or training?',
    answer: 'Orientation is completely free. Training programs have structured fees that are clearly explained during orientation. No hidden costs.',
  },
  {
    question: 'Can I visit your office before orientation?',
    answer: 'Yes, office visits can be scheduled. However, we recommend starting with orientation, online or in-person, to understand the systems first for better clarity.',
  },
];

export default function Contact() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');

  function updateField(event) {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: '' }));
    setStatus('idle');
  }

  function validate() {
    const nextErrors = {};
    if (!values.name.trim()) nextErrors.name = 'Please enter your full name.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) nextErrors.email = 'Enter a valid email address.';
    if (!/^[+()0-9\s-]{8,}$/.test(values.phone)) nextErrors.phone = 'Enter a valid phone number.';
    if (!values.interest) nextErrors.interest = 'Choose an area of interest.';
    return nextErrors;
  }

  function handleSubmit(event) {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setStatus('error');
      return;
    }
    setStatus('sending');
    const subject = encodeURIComponent(`Orientation request from ${values.name.trim()}`);
    const body = encodeURIComponent([
      `Name: ${values.name.trim()}`,
      `Email: ${values.email.trim()}`,
      `Phone: ${values.phone.trim()}`,
      `Interest: ${values.interest}`,
      '',
      `Message: ${values.message.trim() || 'No additional message.'}`,
    ].join('\n'));
    window.location.href = `mailto:orientation@valsii.com?subject=${subject}&body=${body}`;
    setStatus('sent');
    setValues(initialValues);
  }

  return (
    <>
      <section className="contact-page image-depth">
        <OptimizedImage src={images.contact} alt="" loading="eager" sizes="100vw" className="parallax-image" />
        <div className="hero-shade" />
        <div className="section-inner contact-grid">
          <div className="contact-copy reveal">
            <span className="eyebrow">Get in Touch</span>
            <h1>Contact Valsii</h1>
            <p>Get clarity about our systems. Understand the process. Start with orientation.</p>
            <div className="contact-list">
              <span><Mail size={17} /> orientation@valsii.com</span>
              <span><Phone size={17} /> +91 98765 43210</span>
              <span><MapPin size={17} /> Chennai, Tamil Nadu</span>
              <span><CalendarClock size={17} /> Training-first, pressure-free approach</span>
            </div>
          </div>

          <form className="contact-form reveal" onSubmit={handleSubmit} noValidate>
            <div>
              <h2>Request Orientation</h2>
              <p>Fill this form to schedule a system orientation session</p>
            </div>
            <label>
              Full Name *
              <input type="text" name="name" value={values.name} onChange={updateField} autoComplete="name" required aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? 'name-error' : undefined} />
              {errors.name && <span className="field-error" id="name-error">{errors.name}</span>}
            </label>
            <label>
              Email Address *
              <input type="email" name="email" value={values.email} onChange={updateField} autoComplete="email" required aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? 'email-error' : undefined} />
              {errors.email && <span className="field-error" id="email-error">{errors.email}</span>}
            </label>
            <label>
              Phone Number *
              <input type="tel" name="phone" placeholder="+91 98765 43210" value={values.phone} onChange={updateField} autoComplete="tel" required aria-invalid={Boolean(errors.phone)} aria-describedby={errors.phone ? 'phone-error' : undefined} />
              {errors.phone && <span className="field-error" id="phone-error">{errors.phone}</span>}
            </label>
            <label>
              I'm interested in *
              <select name="interest" value={values.interest} onChange={updateField} required aria-invalid={Boolean(errors.interest)} aria-describedby={errors.interest ? 'interest-error' : undefined}>
                <option value="" disabled>Select one</option>
                <option>System Orientation</option>
                <option>SkillNet Mastery Training</option>
                <option>Farm-to-Home Participation</option>
                <option>General Inquiry</option>
              </select>
              {errors.interest && <span className="field-error" id="interest-error">{errors.interest}</span>}
            </label>
            <label>
              Message / Questions
              <textarea name="message" rows="5" placeholder="Any specific questions or requirements..." value={values.message} onChange={updateField} />
            </label>
            <button type="submit" className="premium-button" disabled={status === 'sending'}>
              {status === 'sending' ? 'Preparing Request...' : status === 'sent' ? 'Email Draft Opened' : 'Send Orientation Request'}
            </button>
            {status === 'idle' && <p className="form-note success">We'll contact you within 24 hours after your request is sent.</p>}
            {status === 'sent' && <p className="form-note success" role="status">Your email app should now have a prepared orientation request. Send it to complete the request.</p>}
            {status === 'error' && <p className="form-note" role="alert">Please fix the highlighted fields and try again.</p>}
          </form>
        </div>
      </section>

      <ContentCards eyebrow="Contact info" title="Start with the right channel." items={contactCards} warm />
      <ProcessRail eyebrow="Orientation Process" title="Orientation Process" items={process} />
      <ContentCards eyebrow="Important notes" title="Clear, pressure-free orientation." items={notes} />
      <FAQSection title="Common Questions" subtitle="Quick answers to help you prepare for orientation" items={faqs} />
      <section className="reading-panel">
        <div className="section-inner narrow direct-contact reveal">
          <span className="eyebrow">Prefer Direct Contact?</span>
          <h2>Call us directly for immediate assistance with orientation scheduling</h2>
          <a className="premium-button" href="tel:+919876543210">Call Now: +91 98765 43210</a>
          <p>Available Monday to Friday, 10 AM - 6 PM</p>
        </div>
      </section>
    </>
  );
}
