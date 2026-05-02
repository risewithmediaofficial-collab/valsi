import { useMemo, useState } from 'react';
import { BookOpen } from 'lucide-react';
import { OptimizedImage, PageIntro } from '../components/PremiumSections';
import { articles } from '../data/siteContent';

const filters = ['All', 'Agriculture', 'Knowledge', 'Sustainability', 'Technology'];

export default function Learn() {
  const [active, setActive] = useState('All');
  const [selectedArticle, setSelectedArticle] = useState(null);
  const visibleArticles = useMemo(
    () => active === 'All' ? articles : articles.filter((article) => article.category === active),
    [active]
  );
  const article = selectedArticle || visibleArticles[0] || articles[0];

  function chooseFilter(filter) {
    setActive(filter);
    setSelectedArticle(null);
  }

  return (
    <>
      <PageIntro
        eyebrow="Learn"
        title="A knowledge hub for organic agriculture and sustainable systems."
        text="Read field notes, frameworks, and reflections designed for calm, useful learning."
      />
      <section className="cinematic-section">
        <div className="section-inner">
          <div className="filter-row reveal" aria-label="Article filters">
            {filters.map((filter) => (
              <button
                type="button"
                key={filter}
                className={active === filter ? 'is-active' : ''}
                onClick={() => chooseFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="article-grid">
            {visibleArticles.map((item) => (
              <article className="article-card reveal" key={item.title}>
                <OptimizedImage
                  src={item.image}
                  alt={item.title}
                  sizes="(min-width: 980px) 33vw, (min-width: 640px) 50vw, 100vw"
                  position={item.position}
                />
                <div>
                  <span>{item.category} &middot; {item.read}</span>
                  <h2>{item.title}</h2>
                  <p>{item.excerpt}</p>
                  <button type="button" className="inline-action" onClick={() => setSelectedArticle(item)}>
                    Read preview <BookOpen size={16} />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="reading-panel">
        <div className="section-inner reading-layout reveal">
          <div>
            <span className="eyebrow">Reading preview</span>
            <h2>{article.title}</h2>
            <p>{article.excerpt}</p>
            <p>
              Long-form articles use generous line height, quiet contrast, warm backgrounds,
              and strong image pacing so complex sustainability ideas stay easy to absorb.
            </p>
          </div>
          <OptimizedImage
            src={article.image}
            alt={article.title}
            sizes="(min-width: 980px) 38vw, 100vw"
            position={article.position}
          />
        </div>
      </section>
    </>
  );
}
