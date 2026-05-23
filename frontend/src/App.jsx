import { Component, lazy, Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Navigate, Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import { CinematicBackdrop, FloatingWhatsApp } from './components/PremiumSections';
import { routeMeta, siteConfig } from './data/siteContent';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const CoreSystems = lazy(() => import('./pages/CoreSystems'));
const SkillNetMastery = lazy(() => import('./pages/SkillNetMastery'));
const FarmToHome = lazy(() => import('./pages/FarmToHome'));
const AdminPanel = lazy(() => import('./pages/AdminPanel'));

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <section className="section-shell error-shell">
          <div className="section-inner narrow">
            <span className="section-eyebrow">Something went wrong</span>
            <h1>We could not load this page.</h1>
            <p>Please refresh the page or return to the Valsii home experience.</p>
            <a className="premium-button primary" href="/">
              <span>Return Home</span>
            </a>
          </div>
        </section>
      );
    }

    return this.props.children;
  }
}

function upsertMeta(attribute, key, content) {
  let element = document.head.querySelector(`meta[${attribute}="${key}"]`);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }
  element.setAttribute('content', content);
}

function upsertLink(rel, href) {
  let element = document.head.querySelector(`link[rel="${rel}"]`);
  if (!element) {
    element = document.createElement('link');
    element.setAttribute('rel', rel);
    document.head.appendChild(element);
  }
  element.setAttribute('href', href);
}

function RouteMetadata() {
  const { pathname } = useLocation();

  useEffect(() => {
    const meta = routeMeta[pathname] || routeMeta['/'];
    const canonicalPath = pathname === '/' ? '/' : pathname;
    const canonicalUrl = `${siteConfig.domain}${canonicalPath}`;

    document.title = meta.title;
    upsertMeta('name', 'description', meta.description);
    upsertMeta('name', 'keywords', meta.keywords);
    upsertMeta('property', 'og:title', meta.title);
    upsertMeta('property', 'og:description', meta.description);
    upsertMeta('property', 'og:url', canonicalUrl);
    upsertMeta('name', 'twitter:title', meta.title);
    upsertMeta('name', 'twitter:description', meta.description);
    upsertLink('canonical', canonicalUrl);
  }, [pathname]);

  return null;
}

function AppRoutes() {
  const { pathname } = useLocation();

  return (
    <>
      <RouteMetadata />
      <ScrollToTop />
      <div className="site-shell">
        <CinematicBackdrop />
        <Header />
        <main id="main-content">
          <ErrorBoundary key={pathname}>
            <Suspense fallback={<div className="route-loader">Loading Valsii...</div>}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/core-systems" element={<CoreSystems />} />
                <Route path="/skillnet-mastery" element={<SkillNetMastery />} />
                <Route path="/farm-to-home" element={<FarmToHome />} />
                <Route path="/admin" element={<AdminPanel />} />
                <Route path="/solutions" element={<Navigate to="/core-systems" replace />} />
                <Route path="/impact" element={<Navigate to="/core-systems" replace />} />
                <Route path="/learn" element={<Navigate to="/skillnet-mastery" replace />} />
                <Route path="/seeding-synthesis" element={<Navigate to="/core-systems" replace />} />
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </Suspense>
          </ErrorBoundary>
        </main>
        <Footer />
        <FloatingWhatsApp href={siteConfig.whatsappGeneralUrl} />
      </div>
    </>
  );
}

export default function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}
