import { Component, lazy, Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import { CinematicBackdrop } from './components/PremiumSections';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const CoreSystems = lazy(() => import('./pages/CoreSystems'));
const SkillNetMastery = lazy(() => import('./pages/SkillNetMastery'));
const FarmToHome = lazy(() => import('./pages/FarmToHome'));

const routeMeta = {
  '/': {
    title: 'Valsii - Skill & Supply Systems',
    description: 'Valsii builds practical skill training and honest product supply systems for steady earning opportunities.',
  },
  '/about': {
    title: 'About Valsii - Skill & Supply Company',
    description: 'Learn about Valsii values, mission, SkillNet Mastery, and Farm-to-Home.',
  },
  '/contact': {
    title: 'Contact Valsii - Request Introduction',
    description: 'Request a free, pressure-free introduction to understand Valsii training and product supply programs.',
  },
  '/core-systems': {
    title: 'Valsii Core Systems - SkillNet and Farm-to-Home',
    description: 'See how Valsii combines practical skill training with honest product supply work.',
  },
  '/skillnet-mastery': {
    title: 'SkillNet Mastery - Structured Skill Development',
    description: 'Build real skills, clear thinking, communication, leadership, and preparation for field work through SkillNet Mastery.',
  },
  '/farm-to-home': {
    title: 'Farm-to-Home - Honest Product Supply',
    description: 'Direct farm product sourcing, clear pricing, and trained field work for households and communities.',
  },
};

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
        <section className="page-intro error-state">
          <div className="section-inner narrow">
            <span className="eyebrow">Something went wrong</span>
            <h1>We could not load this page.</h1>
            <p>Please refresh the page or return home. If the issue continues, contact Valsii for support.</p>
            <a className="premium-button" href="/">Return Home</a>
          </div>
        </section>
      );
    }

    return this.props.children;
  }
}

function RouteMetadata() {
  const { pathname } = useLocation();

  useEffect(() => {
    const meta = routeMeta[pathname] || routeMeta['/'];
    document.title = meta.title;
    const description = document.querySelector('meta[name="description"]');
    if (description) description.setAttribute('content', meta.description);
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
            <Suspense fallback={<div className="route-loader" role="status" aria-live="polite">Loading Valsii</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/solutions" element={<Navigate to="/core-systems" replace />} />
              <Route path="/impact" element={<Navigate to="/core-systems" replace />} />
              <Route path="/learn" element={<Navigate to="/skillnet-mastery" replace />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/core-systems" element={<CoreSystems />} />
              <Route path="/skillnet-mastery" element={<SkillNetMastery />} />
              <Route path="/farm-to-home" element={<FarmToHome />} />
              <Route path="/seeding-synthesis" element={<Navigate to="/core-systems" replace />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
            </Suspense>
          </ErrorBoundary>
        </main>
        <Footer />
      </div>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default App;
