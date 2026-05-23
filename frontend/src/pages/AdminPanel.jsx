import {
  CTASection,
  ContentCards,
  HeroSection,
  MetricStrip,
  QuotePanel,
} from '../components/PremiumSections';
import { adminPanel, siteConfig } from '../data/siteContent';

const adminQuote = {
  text: 'This admin route is a front-end scaffold for future operational wiring, not a live back-office system yet.',
  byline: 'Current implementation note',
};

const adminCta = {
  heading: 'Need to turn this into a real admin system?',
  description:
    'The UI is ready to connect to authentication, lead storage, CMS controls, and analytics whenever the backend path is chosen.',
  buttons: [
    { label: 'Review Contact Flow', to: '/contact', variant: 'primary' },
    { label: 'Message Ops', href: siteConfig.whatsappAdminUrl, external: true, variant: 'secondary' },
  ],
};

export default function AdminPanel() {
  return (
    <>
      <HeroSection data={adminPanel.hero} />
      <MetricStrip items={adminPanel.stats} />
      <ContentCards data={adminPanel.panels} />
      <ContentCards data={adminPanel.checklist} compact />
      <QuotePanel data={adminQuote} />
      <CTASection data={adminCta} />
    </>
  );
}
