import Navbar from '@/components/navbar';
import HeroSection from '@/components/hero-section';
import VideoSection from '@/components/video-section';
import AboutSection from '@/components/about-section';
import FoundersSection from '@/components/founders-section';
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
      <div id="video">
        <VideoSection />
      </div>
      <AboutSection />
      <FoundersSection />
      <ShopSection />
      <GallerySection />
      <CTABanner />
      <ContactSection />
      <Footer />
    </main>
  );
}
