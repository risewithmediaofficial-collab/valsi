import { Component, lazy, Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Navigate, Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import { LanguageProvider } from './context/LanguageContext';
import { CartProvider } from './context/CartContext';
import { routeMeta, siteConfig } from './data/siteContent';

/* Lazy page imports */
const Home              = lazy(() => import('./pages/Home'));
const About             = lazy(() => import('./pages/About'));
const Products          = lazy(() => import('./pages/Products'));
const ProductDetails    = lazy(() => import('./pages/ProductDetails'));
const Cart              = lazy(() => import('./pages/Cart'));
const Checkout          = lazy(() => import('./pages/Checkout'));
const OrderConfirmation = lazy(() => import('./pages/OrderConfirmation'));
const WhyNatural        = lazy(() => import('./pages/WhyNatural'));
const OurFarmers        = lazy(() => import('./pages/OurFarmers'));
const Recipes           = lazy(() => import('./pages/Recipes'));
const Contact           = lazy(() => import('./pages/Contact'));
const Events            = lazy(() => import('./pages/Events'));

// Legacy programs page support
const Programs          = lazy(() => import('./pages/Programs'));
const Register          = lazy(() => import('./pages/Register'));
const AdminPanel        = lazy(() => import('./pages/AdminPanel'));

/* ─── ERROR BOUNDARY ─────────────────────────────────────────── */
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
        <section className="error-shell">
          <div className="section-inner narrow">
            <span className="section-eyebrow">Something went wrong</span>
            <h1>We could not load this page.</h1>
            <p>Please refresh the page or return to the Green VALSII home experience.</p>
            <a className="premium-button primary" href="/" style={{ marginTop: 24 }}>
              Return Home
            </a>
          </div>
        </section>
      );
    }
    return this.props.children;
  }
}

/* ─── SEO META UPDATER ───────────────────────────────────────── */
function upsertMeta(attribute, key, content) {
  let el = document.head.querySelector(`meta[${attribute}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attribute, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function upsertLink(rel, href) {
  let el = document.head.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

function RouteMetadata() {
  const { pathname } = useLocation();

  useEffect(() => {
    const meta        = routeMeta[pathname] || routeMeta['/'];
    const canonicalUrl = `${siteConfig.domain}${pathname === '/' ? '/' : pathname}`;

    if (meta) {
      document.title = meta.title;
      upsertMeta('name', 'description',       meta.description);
      upsertMeta('name', 'keywords',          meta.keywords);
      upsertMeta('property', 'og:title',      meta.title);
      upsertMeta('property', 'og:description',meta.description);
      upsertMeta('property', 'og:url',        canonicalUrl);
      upsertMeta('name', 'twitter:title',     meta.title);
      upsertMeta('name', 'twitter:description', meta.description);
      upsertLink('canonical', canonicalUrl);
    }
  }, [pathname]);

  return null;
}

/* ─── FLOATING WHATSAPP ─────────────────────────────────────── */
function FloatingWhatsApp() {
  return (
    <a
      href={siteConfig.whatsappGeneralUrl}
      className="floating-whatsapp"
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with Green VALSII on WhatsApp"
      title="Chat on WhatsApp"
      style={{ backgroundColor: '#25d366', color: 'white' }}
    >
      <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    </a>
  );
}

/* ─── APP ROUTES ─────────────────────────────────────────────── */
function AppRoutes() {
  const { pathname } = useLocation();

  return (
    <>
      <RouteMetadata />
      <ScrollToTop />
      <div className="site-shell">
        <Header />
        <main id="main-content">
          <ErrorBoundary key={pathname}>
            <Suspense fallback={<div className="route-loader">Loading Green VALSII...</div>}>
              <Routes>
                {/* Core pages */}
                <Route path="/"                   element={<Home />} />
                <Route path="/about"              element={<About />} />
                <Route path="/products"           element={<Products />} />
                <Route path="/product/:id"        element={<ProductDetails />} />
                <Route path="/cart"               element={<Cart />} />
                <Route path="/checkout"           element={<Checkout />} />
                <Route path="/order-confirmation" element={<OrderConfirmation />} />
                <Route path="/why-natural"        element={<WhyNatural />} />
                <Route path="/our-farmers"        element={<OurFarmers />} />
                <Route path="/recipes"            element={<Recipes />} />
                <Route path="/contact"            element={<Contact />} />
                <Route path="/events"             element={<Events />} />

                {/* Legacy programs page */}
                <Route path="/programs"           element={<Programs />} />
                <Route path="/register"           element={<Register />} />
                <Route path="/admin"              element={<AdminPanel />} />

                {/* Redirects */}
                <Route path="/skillnet-mastery"   element={<Navigate to="/products" replace />} />
                <Route path="/core-systems"       element={<Navigate to="/products" replace />} />
                <Route path="/farm-to-home"       element={<Navigate to="/" replace />} />
                <Route path="*"                   element={<Navigate to="/" replace />} />
              </Routes>
            </Suspense>
          </ErrorBoundary>
        </main>
        <Footer />
        <FloatingWhatsApp />
      </div>
    </>
  );
}

/* ─── ROOT APP ───────────────────────────────────────────────── */
export default function App() {
  return (
    <LanguageProvider>
      <CartProvider>
        <Router>
          <AppRoutes />
        </Router>
      </CartProvider>
    </LanguageProvider>
  );
}

