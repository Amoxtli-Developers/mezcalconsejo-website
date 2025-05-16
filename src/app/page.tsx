import Navbar from '@/components/navbar';
import HeroSection from '@/components/hero-section';
import AboutSection from '@/components/about-section';
import QuoteSection from '@/components/quote-section';
import ShopSection from '@/components/shop-section';
import GallerySection from '@/components/gallery-section';
import CTABanner from '@/components/cta-banner';
import ContactSection from '@/components/contact-section';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <QuoteSection />
      <ShopSection />
      <GallerySection />
      <CTABanner />
      <ContactSection />
      <Footer />
    </main>
  );
}
