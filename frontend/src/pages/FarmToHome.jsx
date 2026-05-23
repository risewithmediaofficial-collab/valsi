import {
  BentoSection,
  CTASection,
  HeroSection,
  ProductCategoriesSection,
  TextContentSection,
  TrustSection,
} from '../components/PremiumSections';
import { farmToHome } from '../data/siteContent';

export default function FarmToHome() {
  return (
    <>
      <HeroSection data={farmToHome.hero} />
      <TrustSection data={farmToHome.trust} />
      <BentoSection data={farmToHome.promiseBento} />
      <ProductCategoriesSection data={farmToHome.products} />
      <TextContentSection data={farmToHome.farmStory} />
      <TextContentSection data={farmToHome.healthLifestyle} />
      <TextContentSection data={farmToHome.delivery} />
      <TextContentSection data={farmToHome.futureVision} />
      <CTASection data={farmToHome.finalCta} />
    </>
  );
}
