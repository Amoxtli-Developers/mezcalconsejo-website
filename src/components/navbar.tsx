'use client';

import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Globe } from 'lucide-react';
import logo from '@/assets/images/logo.png';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showLangMenu, setShowLangMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      closeMenu();
    }
  };

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setShowLangMenu(false);
  };

  const navItems = [
    { key: 'home', id: 'home' },
    { key: 'about', id: 'about' },
    { key: 'shop', id: 'shop' },
    { key: 'contact', id: 'contact' }
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md border-b border-gray-100' 
            : 'bg-transparent'
        }`}
      >
        <div className="container-notion">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="cursor-pointer"
              onClick={() => scrollToSection('home')}
            >
              <div className="flex items-center space-x-3">
                {/* Logo Image */}
                <div className="w-14 h-14 flex items-center justify-center">
                  <img
                    src={logo.src}
                    alt="Mezcal Consejo Logo"
                    className="w-12 h-12 object-contain"
                  />
                </div>
                {/* Brand Text */}
                <div className={`heading-small ${
                  isScrolled ? 'text-gray-900' : 'text-white'
                }`}>
                  MEZCAL CONSEJO
                </div>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.key}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-button transition-colors duration-300 hover:text-brand-primary ${
                    isScrolled ? 'text-gray-700' : 'text-white/90'
                  }`}
                >
                  {t(`navbar.${item.key}`)}
                </button>
              ))}
              
              {/* Language Selector */}
              <div className="relative">
                <button
                  onClick={() => setShowLangMenu(!showLangMenu)}
                  className={`flex items-center space-x-1 text-button transition-colors duration-300 hover:text-brand-primary ${
                    isScrolled ? 'text-gray-700' : 'text-white/90'
                  }`}
                >
                  <Globe className="w-4 h-4" />
                  <span className="uppercase">{i18n.language}</span>
                </button>
                
                <AnimatePresence>
                  {showLangMenu && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute right-0 top-full mt-2 bg-white border border-gray-100 shadow-sm py-2 min-w-[80px]"
                    >
                      <button
                        onClick={() => changeLanguage('es')}
                        className="block w-full text-left px-4 py-2 text-body-small text-gray-700 hover:bg-gray-50 transition-colors"
                      >
                        ES
                      </button>
                      <button
                        onClick={() => changeLanguage('en')}
                        className="block w-full text-left px-4 py-2 text-body-small text-gray-700 hover:bg-gray-50 transition-colors"
                      >
                        EN
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className={`lg:hidden p-2 transition-colors duration-300 ${
                isScrolled ? 'text-gray-900' : 'text-white'
              }`}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={closeMenu} />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="absolute right-0 top-0 bottom-0 w-80 bg-white"
            >
              <div className="p-6">
                {/* Mobile Logo */}
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 flex items-center justify-center">
                      <img
                        src={logo.src}
                        alt="Mezcal Consejo Logo"
                        className="w-8 h-8 object-contain"
                      />
                    </div>
                    <span className="heading-small text-gray-900">
                      MEZCAL CONSEJO
                    </span>
                  </div>
                  <button onClick={closeMenu} className="p-2 text-gray-500">
                    <X className="w-5 h-5" />
                  </button>
                </div>
                
                <div className="space-y-6">
                  {navItems.map((item) => (
                    <button
                      key={item.key}
                      onClick={() => scrollToSection(item.id)}
                      className="block w-full text-left text-body text-gray-900 hover:text-brand-primary transition-colors"
                    >
                      {t(`navbar.${item.key}`)}
                    </button>
                  ))}
                  
                  <div className="border-t border-gray-100 pt-6">
                    <div className="space-y-3">
                      <button
                        onClick={() => changeLanguage('es')}
                        className={`block text-body-small transition-colors ${
                          i18n.language === 'es' ? 'text-brand-primary font-medium' : 'text-gray-600'
                        }`}
                      >
                        Español
                      </button>
                      <button
                        onClick={() => changeLanguage('en')}
                        className={`block text-body-small transition-colors ${
                          i18n.language === 'en' ? 'text-brand-primary font-medium' : 'text-gray-600'
                        }`}
                      >
                        English
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
