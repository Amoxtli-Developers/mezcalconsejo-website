"use client";

import React, { useRef } from "react";
import { useTranslation } from "react-i18next";
import { motion, useInView } from "framer-motion";
import {
    Heart,
    Eye,
    Leaf,
    Droplets,
    MapPin,
    User,
    Cog,
    Paintbrush,
} from "lucide-react";

const AboutSection = () => {
    const { t } = useTranslation();
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const sections = [
        {
            title: "Oaxaca",
            icon: <MapPin className="w-8 h-8" />,
            key: "oaxaca",
            color: "primary" as "primary", // Red for passion/heart
        },
        {
            title: "El Experto",
            icon: <User className="w-8 h-8" />,
            key: "expert",
            color: "earth" as "earth", // Earth tones for location
        },
        {
            title: "San Baltazar Chichicápam",
            icon: <Leaf className="w-8 h-8" />,
            key: "location",
            color: "accent" as "accent", // Earth tones for location
        },
        {
            title: "El Proceso",
            icon: <Cog className="w-8 h-8" />,
            key: "process",
            color: "primary" as "primary", // Orange/amber for process
        },
        {
            title: "La Imagen",
            icon: <Paintbrush className="w-8 h-8" />,
            key: "image",
            color: "secondary" as "secondary", // Earth for artistic/creative
        },
    ];

    const getColorClasses = (
        color: "primary" | "secondary" | "accent" | "earth"
    ) => {
        const colorMap = {
            primary: {
                text: "text-brand-primary",
                bg: "bg-red-50 dark:bg-red-900/20",
                accent: "text-brand-primary",
            },
            secondary: {
                text: "text-brand-secondary",
                bg: "bg-orange-50 dark:bg-orange-900/20",
                accent: "text-brand-secondary",
            },
            accent: {
                text: "text-brand-accent",
                bg: "bg-green-50 dark:bg-green-900/20",
                accent: "text-brand-accent",
            },
            earth: {
                text: "text-yellow-700",
                bg: "bg-yellow-50 dark:bg-yellow-900/20",
                accent: "text-amber-600",
            },
        };
        return colorMap[color] || colorMap.primary;
    };

    return (
        <section
            id="about"
            className="section-padding bg-white dark:bg-gray-900"
        >
            <div className="container-notion">
                {/* Hero Section */}
                <div ref={ref} className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6"
                    >
                        {t("about.title")}
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl mx-auto"
                    >
                        {t("about.subtitle")}
                    </motion.p>
                </div>

                {/* Sections */}
                <div className="space-y-24">
                    {sections.map((section, sectionIndex) => {
                        const colors = getColorClasses(section.color);
                        const isEven = sectionIndex % 2 === 0;

                        return (
                            <motion.div
                                key={section.key}
                                initial={{ opacity: 0, y: 60 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{
                                    delay: 0.3 + sectionIndex * 0.2,
                                    duration: 0.8,
                                }}
                                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                                    !isEven ? "lg:flex-row-reverse" : ""
                                }`}
                            >
                                {/* Content */}
                                <div
                                    className={`${
                                        !isEven ? "lg:order-2" : ""
                                    } space-y-6`}
                                >
                                    <div className="flex items-center space-x-4 mb-6">
                                        <div
                                            className={`${colors.bg} p-3 rounded-2xl ${colors.text}`}
                                        >
                                            {section.icon}
                                        </div>
                                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100">
                                            {section.title}
                                        </h3>
                                    </div>

                                    <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed">
                                        {Array.isArray(
                                            t(
                                                `about.sections.${section.key}.content`,
                                                { returnObjects: true }
                                            )
                                        ) &&
                                            Array.isArray(
                                                t(
                                                    `about.sections.${section.key}.content`,
                                                    { returnObjects: true }
                                                )
                                            ) &&
                                            (
                                                t(
                                                    `about.sections.${section.key}.content`,
                                                    { returnObjects: true }
                                                ) as string[]
                                            ).map(
                                                (
                                                    paragraph: string,
                                                    index: number
                                                ) => (
                                                    <p
                                                        key={index}
                                                        className={
                                                            index === 0
                                                                ? `${colors.accent} italic font-medium text-lg`
                                                                : ""
                                                        }
                                                    >
                                                        {paragraph}
                                                    </p>
                                                )
                                            )}
                                    </div>

                                    {section.key === "expert" && (
                                        <div
                                            className={`mt-6 p-4 ${colors.bg} rounded-xl`}
                                        >
                                            <p className="text-gray-700 dark:text-gray-300 italic text-lg font-medium">
                                                "
                                                {t(
                                                    "about.sections.expert.quote"
                                                )}
                                                "
                                            </p>
                                            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                                                — Maximino Vázquez
                                            </p>
                                        </div>
                                    )}
                                </div>

                                {/* Image */}
                                <div
                                    className={`${!isEven ? "lg:order-1" : ""}`}
                                >
                                    <div className="relative overflow-hidden rounded-2xl shadow-xl">
                                        <img
                                            src={`/api/placeholder/600/400`}
                                            alt={`${section.title} - Mezcal Consejo`}
                                            className="w-full h-72 lg:h-96 object-cover transition-transform duration-500 hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Stats Section */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 1.5, duration: 0.8 }}
                    className="mt-20 bg-gray-50 dark:bg-gray-800 rounded-3xl p-8"
                >
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
                        <div className="space-y-2">
                            <div className="text-3xl font-bold text-brand-accent">
                                80%
                            </div>
                            <div className="text-sm text-gray-600 dark:text-gray-400">
                                {t("about.stats.oaxacaProduction")}
                            </div>
                        </div>
                        <div className="space-y-2">
                            <div className="text-3xl font-bold text-brand-primary">
                                20+
                            </div>
                            <div className="text-sm text-gray-600 dark:text-gray-400">
                                {t("about.stats.masterExperience")}
                            </div>
                        </div>
                        <div className="space-y-2">
                            <div className="text-3xl font-bold text-brand-secondary">
                                9
                            </div>
                            <div className="text-sm text-gray-600 dark:text-gray-400">
                                {t("about.stats.denominations")}
                            </div>
                        </div>
                        <div className="space-y-2">
                            <div className="text-3xl font-bold text-yellow-700">
                                40+°
                            </div>
                            <div className="text-sm text-gray-600 dark:text-gray-400">
                                {t("about.stats.alcoholGraduation")}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default AboutSection;
