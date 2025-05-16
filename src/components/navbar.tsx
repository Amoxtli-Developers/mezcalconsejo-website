"use client";

import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "./theme-provider";
import Image from "next/image";
import logoImage from "@/assets/images/logo.png";

const Navbar = () => {
    const { t, i18n } = useTranslation();
    const { theme, toggleTheme } = useTheme();
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navItems = [
        { key: "home", href: "#home" },
        { key: "about", href: "#about" },
        { key: "shop", href: "#shop" },
        { key: "contact", href: "#contact" },
    ];

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
    };

    return (
        <nav
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${
                scrolled
                    ? "bg-white/95 dark:bg-gray-950/95 backdrop-blur-xl border-b border-gray-200/50 dark:border-gray-800/50 shadow-sm"
                    : "bg-transparent"
            }`}
        >
            <div className="container-notion section-padding py-4">
                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center">
                    {/* Left side - flex with space for actions */}
                    <div className="flex-1 flex justify-end pr-8">
                        {/* Theme Toggle */}
                        <button
                            onClick={toggleTheme}
                            className={`p-2 rounded-lg transition-all duration-200 hover:scale-110 ${
                                scrolled
                                    ? "hover:bg-gray-100 dark:hover:bg-gray-800"
                                    : "hover:bg-white/10"
                            }`}
                        >
                            {theme === "light" ? (
                                <Moon
                                    className={`w-5 h-5 ${
                                        scrolled
                                            ? "text-gray-600 dark:text-gray-400"
                                            : "text-white/90"
                                    }`}
                                />
                            ) : (
                                <Sun
                                    className={`w-5 h-5 ${
                                        scrolled
                                            ? "text-gray-600 dark:text-gray-400"
                                            : "text-white/90"
                                    }`}
                                />
                            )}
                        </button>
                    </div>

                    {/* Left Navigation Links */}
                    <div className="flex items-center space-x-2">
                        {navItems.slice(0, 2).map((item) => (
                            <a
                                key={item.key}
                                href={item.href}
                                className={`px-3 py-2 text-sm font-medium transition-all duration-200 hover:scale-105 ${
                                    scrolled
                                        ? "text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-100/80 dark:hover:bg-gray-800/80 rounded-lg"
                                        : "text-white/90 hover:text-white hover:bg-white/10 rounded-lg"
                                }`}
                            >
                                {t(`navbar.${item.key}`)}
                            </a>
                        ))}
                    </div>

                    {/* Center Logo/Brand */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="mx-8"
                    >
                        <a
                            href="#home"
                            className="transition-all duration-200 hover:scale-105"
                        >
                            <Image
                                src={logoImage}
                                alt="Mezcal Consejo"
                                className={` ${
                                    scrolled ? "opacity-100" : "opacity-90"
                                }`}
                                width={scrolled ? 32 : 50}
                                height={scrolled ? 32 : 50}
                            />
                        </a>
                    </motion.div>

                    {/* Right Navigation Links */}
                    <div className="flex items-center space-x-2">
                        {navItems.slice(2).map((item) => (
                            <a
                                key={item.key}
                                href={item.href}
                                className={`px-3 py-2 text-sm font-medium transition-all duration-200 hover:scale-105 ${
                                    scrolled
                                        ? "text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-100/80 dark:hover:bg-gray-800/80 rounded-lg"
                                        : "text-white/90 hover:text-white hover:bg-white/10 rounded-lg"
                                }`}
                            >
                                {t(`navbar.${item.key}`)}
                            </a>
                        ))}
                    </div>

                    {/* Right side - flex with space for language */}
                    <div className="flex-1 flex pl-8">
                        {/* Language Switcher */}
                        <select
                            value={i18n.language}
                            onChange={(e) => changeLanguage(e.target.value)}
                            className={`bg-transparent border-none text-sm font-medium cursor-pointer rounded-lg px-2 py-1 transition-all duration-200 focus-ring ${
                                scrolled
                                    ? "text-gray-700 dark:text-gray-300 hover:bg-gray-100/80 dark:hover:bg-gray-800/80"
                                    : "text-white/90 hover:bg-white/10"
                            }`}
                        >
                            <option
                                value="es"
                                className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                            >
                                ES
                            </option>
                            <option
                                value="en"
                                className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                            >
                                EN
                            </option>
                        </select>
                    </div>
                </div>

                {/* Mobile Navigation */}
                <div className="md:hidden flex items-center justify-between">
                    {/* Mobile Menu Button (Left) */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className={`p-2 rounded-lg transition-all duration-200 ${
                            scrolled
                                ? "hover:bg-gray-100 dark:hover:bg-gray-800"
                                : "hover:bg-white/10"
                        }`}
                    >
                        {isOpen ? (
                            <X
                                className={`w-6 h-6 ${
                                    scrolled
                                        ? "text-gray-600 dark:text-gray-400"
                                        : "text-white/90"
                                }`}
                            />
                        ) : (
                            <Menu
                                className={`w-6 h-6 ${
                                    scrolled
                                        ? "text-gray-600 dark:text-gray-400"
                                        : "text-white/90"
                                }`}
                            />
                        )}
                    </button>

                    {/* Center Logo/Brand */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="flex-1 flex justify-center"
                    >
                        <a
                            href="#home"
                            className={`text-xl font-bold transition-colors ${
                                scrolled
                                    ? "text-gray-900 dark:text-gray-100"
                                    : "text-white"
                            }`}
                        >
                            Mezcal Consejo
                        </a>
                    </motion.div>

                    {/* Mobile Actions (Right) */}
                    <div className="flex items-center space-x-2">
                        <button
                            onClick={toggleTheme}
                            className={`p-2 rounded-lg transition-all duration-200 ${
                                scrolled
                                    ? "hover:bg-gray-100 dark:hover:bg-gray-800"
                                    : "hover:bg-white/10"
                            }`}
                        >
                            {theme === "light" ? (
                                <Moon
                                    className={`w-5 h-5 ${
                                        scrolled
                                            ? "text-gray-600 dark:text-gray-400"
                                            : "text-white/90"
                                    }`}
                                />
                            ) : (
                                <Sun
                                    className={`w-5 h-5 ${
                                        scrolled
                                            ? "text-gray-600 dark:text-gray-400"
                                            : "text-white/90"
                                    }`}
                                />
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className={`md:hidden mt-4 py-4 rounded-lg ${
                                scrolled
                                    ? "bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border border-gray-200/50 dark:border-gray-800/50"
                                    : "bg-black/20 backdrop-blur-xl border border-white/10"
                            }`}
                        >
                            <div className="flex flex-col space-y-3 px-4">
                                {navItems.map((item) => (
                                    <a
                                        key={item.key}
                                        href={item.href}
                                        onClick={() => setIsOpen(false)}
                                        className={`px-3 py-2 text-sm font-medium transition-all duration-200 rounded-lg ${
                                            scrolled
                                                ? "text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-100/80 dark:hover:bg-gray-800/80"
                                                : "text-white/90 hover:text-white hover:bg-white/10"
                                        }`}
                                    >
                                        {t(`navbar.${item.key}`)}
                                    </a>
                                ))}
                                <div
                                    className={`flex items-center justify-between pt-3 border-t ${
                                        scrolled
                                            ? "border-gray-200 dark:border-gray-800"
                                            : "border-white/20"
                                    }`}
                                >
                                    <select
                                        value={i18n.language}
                                        onChange={(e) =>
                                            changeLanguage(e.target.value)
                                        }
                                        className={`bg-transparent border-none text-sm font-medium cursor-pointer rounded-lg px-2 py-1 ${
                                            scrolled
                                                ? "text-gray-700 dark:text-gray-300"
                                                : "text-white/90"
                                        }`}
                                    >
                                        <option
                                            value="es"
                                            className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                                        >
                                            ES
                                        </option>
                                        <option
                                            value="en"
                                            className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                                        >
                                            EN
                                        </option>
                                    </select>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </nav>
    );
};

export default Navbar;
