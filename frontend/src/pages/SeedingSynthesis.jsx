import React from 'react';
import SeedlingHero from '../components/SeedlingHero';
import SeedlingStoryFlow from '../components/SeedlingStoryFlow';
import './SeedingSynthesis.css';

const SeedingSynthesis = () => (
  <main className="ss-page">
    <SeedlingHero />
    <SeedlingStoryFlow />
  </main>
);

export default SeedingSynthesis;
