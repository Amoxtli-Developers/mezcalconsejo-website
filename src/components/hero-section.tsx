'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowDown } from 'lucide-react';
import heroImage from '@/assets/images/hero.jpg'

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center overflow-hidden w-full">
      {/* Background Video */}
      <div className="absolute inset-0 w-full">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/video/mezcal-hero.mp4" type="video/mp4" />
          <img
            src={heroImage.src}
            alt="Mezcal artesanal"
            className="w-full h-full object-cover"
          />
        </video>
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container-notion section-padding w-full">
        <div className="max-w-4xl w-full">
          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mb-8"
          >
            <div className="divider-minimal mb-4"></div>
            <span className="text-white/80 text-caption uppercase tracking-widest">
              {t('hero.subtitle')}
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="heading-display text-white mb-8"
          >
            Auténtico
            <br />
            <span className="text-brand-primary italic">Mezcal Artesanal</span>
          </motion.h1>
          
          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-body-large text-white/90 mb-12 max-w-2xl"
          >
            {t('hero.subtitle1')}
          </motion.p>
          
          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-16 w-full"
          >
            <button
              onClick={() => {
                const shopElement = document.getElementById('shop');
                if (shopElement) {
                  shopElement.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="group btn-primary px-8 py-4"
            >
              {t('hero.cta1')}
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button
              onClick={() => {
                const aboutElement = document.getElementById('about');
                if (aboutElement) {
                  aboutElement.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="group inline-flex items-center justify-center px-8 py-4 text-white border border-white/40 text-button transition-all duration-300 hover:bg-white hover:text-gray-900 transform hover:translate-y-[-1px] focus-ring"
            >
              {t('hero.cta2')}
            </button>
          </motion.div>

          {/* Stats - Minimal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex items-center space-x-8 sm:space-x-12 overflow-x-auto sm:overflow-x-visible"
          >
            <div className="text-left">
              <div className="heading-tertiary text-white">20+</div>
              <div className="text-caption text-white/70 uppercase tracking-wider">{t('hero.stats.experience')}</div>
            </div>
            <div className="w-px h-8 bg-white/20"></div>
            <div className="text-left">
              <div className="heading-tertiary text-white">100%</div>
              <div className="text-caption text-white/70 uppercase tracking-wider">{t('hero.stats.agave')}</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator - Minimal */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <div className="flex flex-col items-center space-y-3">
          <div className="w-px h-8 bg-white/40"></div>
          <ArrowDown className="w-4 h-4 text-white/60 animate-bounce" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
