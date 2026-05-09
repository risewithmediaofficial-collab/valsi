import { useState } from 'react';
import { CalendarClock, Mail, MapPin, Phone } from 'lucide-react';
import { ContentCards, FAQSection, OptimizedImage, ProcessRail } from '../components/PremiumSections';
import { images } from '../data/siteContent';

const initialValues = { name: '', email: '', phone: '', interest: '', message: '' };

const contactCards = [
  { title: 'Phone', text: '+91 98765 43210\nMon-Fri, 10 AM - 6 PM', icon: 'Phone' },
  { title: 'Email', text: 'orientation@valsii.com\nResponse within 24 hours', icon: 'MessageCircle' },
  { title: 'Office Location', text: 'Valsii LLP (Registered Entity)\nChennai, Tamil Nadu', icon: 'Route' },
  { title: 'Intro Session Hours', text: 'Weekly introduction sessions\nBy appointment only', icon: 'Clock3' },
];

const process = [
  { title: 'Request Introduction', text: 'Fill the form or contact us directly' },
  { title: 'Schedule Session', text: "We'll schedule a convenient time for the session" },
  { title: 'Understand the Programs', text: 'Clear explanation of SkillNet and Farm-to-Home' },
  { title: 'Next Steps', text: 'Ask questions and decide without pressure' },
];

const notes = [
  { title: 'Introduction is completely free', text: 'Understand everything before making any decision.', icon: 'CheckCircle2' },
  { title: 'No pressure to join after the session', text: 'All details are shared clearly and questions are answered honestly.', icon: 'CheckCircle2' },
  { title: 'Field work explanation', text: 'Farm-to-Home is a product supply model where trained people handle essential goods from farmers to households.', icon: 'Sprout' },
];

const faqs = [
  {
    question: 'What happens after the introduction?',
    answer: "After the session, you'll understand both programs. You can start SkillNet Mastery training, take more time, or ask more questions. No commitment required.",
  },
  {
    question: 'Is there any fee for the introduction or training?',
    answer: 'The introduction is completely free. Training fees are explained clearly during the session. No hidden costs.',
  },
  {
    question: 'Can I visit your office before the introduction?',
    answer: 'Yes, office visits can be scheduled. We recommend starting with an online or in-person introduction so you understand the programs first.',
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
    const subject = encodeURIComponent(`Introduction request from ${values.name.trim()}`);
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
            <p>Understand our programs, ask questions, and start with a free introduction.</p>
            <div className="contact-list">
              <span><Mail size={17} /> orientation@valsii.com</span>
              <span><Phone size={17} /> +91 98765 43210</span>
              <span><MapPin size={17} /> Chennai, Tamil Nadu</span>
              <span><CalendarClock size={17} /> Training-first, no-pressure approach</span>
            </div>
          </div>

          <form className="contact-form reveal" onSubmit={handleSubmit} noValidate>
            <div>
              <h2>Request Introduction</h2>
              <p>Fill this form to schedule a free introduction session</p>
            </div>
            <label htmlFor="field-name">
              Full Name *
              <input id="field-name" type="text" name="name" value={values.name} onChange={updateField} autoComplete="name" required aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? 'name-error' : undefined} />
              {errors.name && <span className="field-error" id="name-error">{errors.name}</span>}
            </label>
            <label htmlFor="field-email">
              Email Address *
              <input id="field-email" type="email" name="email" value={values.email} onChange={updateField} autoComplete="email" required aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? 'email-error' : undefined} />
              {errors.email && <span className="field-error" id="email-error">{errors.email}</span>}
            </label>
            <label htmlFor="field-phone">
              Phone Number *
              <input id="field-phone" type="tel" name="phone" placeholder="+91 98765 43210" value={values.phone} onChange={updateField} autoComplete="tel" required aria-invalid={Boolean(errors.phone)} aria-describedby={errors.phone ? 'phone-error' : undefined} />
              {errors.phone && <span className="field-error" id="phone-error">{errors.phone}</span>}
            </label>
            <label htmlFor="field-interest">
              I'm interested in *
              <select id="field-interest" name="interest" value={values.interest} onChange={updateField} required aria-invalid={Boolean(errors.interest)} aria-describedby={errors.interest ? 'interest-error' : undefined}>
                <option value="" disabled>Select one</option>
                <option>Program Introduction</option>
                <option>SkillNet Mastery Training</option>
                <option>Farm-to-Home Participation</option>
                <option>General Inquiry</option>
              </select>
              {errors.interest && <span className="field-error" id="interest-error">{errors.interest}</span>}
            </label>
            <label htmlFor="field-message">
              Message / Questions
              <textarea id="field-message" name="message" rows="5" placeholder="Any specific questions..." value={values.message} onChange={updateField} />
            </label>
            <button type="submit" className="premium-button" disabled={status === 'sending'}>
              {status === 'sending' ? 'Preparing Request...' : status === 'sent' ? 'Email Draft Opened' : 'Send Introduction Request'}
            </button>
            {status === 'idle' && <p className="form-note success">We'll contact you within 24 hours after your request is sent.</p>}
            {status === 'sent' && <p className="form-note success" role="status">Your email app should now have a prepared request. Send it to complete the request.</p>}
            {status === 'error' && <p className="form-note" role="alert">Please fix the highlighted fields and try again.</p>}
          </form>
        </div>
      </section>

      <ContentCards eyebrow="Contact info" title="Start with the right channel." items={contactCards} warm variant="glass" />
      <ProcessRail eyebrow="Introduction Process" title="Introduction Process" items={process} />
      <ContentCards eyebrow="Important notes" title="Clear, pressure-free introduction." items={notes} variant="spotlight" />
      <FAQSection title="Common Questions" subtitle="Quick answers to help you prepare for the session" items={faqs} />
      <section className="reading-panel">
        <div className="section-inner narrow direct-contact reveal">
          <span className="eyebrow">Prefer Direct Contact?</span>
          <h2>Call us directly for help with session scheduling</h2>
          <a className="premium-button" href="tel:+919876543210">Call Now: +91 98765 43210</a>
          <p>Available Monday to Friday, 10 AM - 6 PM</p>
        </div>
      </section>
    </>
  );
}
