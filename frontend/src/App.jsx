import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
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

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="site-shell">
        <CinematicBackdrop />
        <Header />
        <main>
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
              <Route path="/seeding-synthesis" element={<Navigate to="/impact" replace />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
