"use client";

import React, { useRef } from "react";
import { useTranslation } from "react-i18next";
import { motion, useInView } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import {
    MapPin,
    User,
    Leaf,
    Cog,
    Paintbrush,
} from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const AboutSection = () => {
    const { t } = useTranslation();
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const sections = [
        {
            titleKey: "oaxaca",
            icon: <MapPin className="w-8 h-8" />,
            key: "oaxaca",
            color: "primary" as "primary",
            image: "/api/placeholder/500/400"
        },
        {
            titleKey: "expert",
            icon: <User className="w-8 h-8" />,
            key: "expert",
            color: "earth" as "earth",
            image: "/api/placeholder/500/400"
        },
        {
            titleKey: "location",
            icon: <Leaf className="w-8 h-8" />,
            key: "location",
            color: "accent" as "accent",
            image: "/api/placeholder/500/400"
        },
        {
            titleKey: "process",
            icon: <Cog className="w-8 h-8" />,
            key: "process",
            color: "primary" as "primary",
            image: "/api/placeholder/500/400"
        },
        {
            titleKey: "image",
            icon: <Paintbrush className="w-8 h-8" />,
            key: "image",
            color: "secondary" as "secondary",
            image: "/api/placeholder/500/400"
        },
    ];

    const getColorClasses = (
        color: "primary" | "secondary" | "accent" | "earth"
    ) => {
        const colorMap = {
            primary: {
                text: "text-brand-primary",
                accent: "text-brand-primary",
            },
            secondary: {
                text: "text-brand-secondary",
                accent: "text-brand-secondary",
            },
            accent: {
                text: "text-brand-accent",
                accent: "text-brand-accent",
            },
            earth: {
                text: "text-yellow-700",
                accent: "text-amber-600",
            },
        };
        return colorMap[color] || colorMap.primary;
    };

    return (
        <section
            id="about"
            className="section-padding bg-white "
        >
            <div className="container-notion">
                {/* Header Section */}
                <div ref={ref} className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 heading-primary"
                    >
                        {t("about.title")}
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto text-body"
                    >
                        {t("about.subtitle")}
                    </motion.p>
                </div>

                {/* Swiper Section */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="mb-16"
                >
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        spaceBetween={0}
                        slidesPerView={1}
                        navigation
                        pagination={{ 
                            clickable: true,
                            dynamicBullets: true
                        }}
                        autoplay={{
                            delay: 6000,
                            disableOnInteraction: false,
                        }}
                        loop={true}
                        className="about-swiper rounded-2xl overflow-hidden"
                        style={{ height: "500px" }}
                    >
                        {sections.map((section, index) => {
                            const colors = getColorClasses(section.color);
                            
                            return (
                                <SwiperSlide key={section.key}>
                                    <div className="relative h-full w-full ">
                                        {/* Content */}
                                        <div className="h-full flex items-center">
                                            <div className="container-notion section-padding">
                                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center h-full">
                                                    {/* Text Content */}
                                                    <div className="space-y-6">
                                                        {/* Title with Icon */}
                                                        <div className="flex items-center space-x-4 mb-6">
                                                            <div className={`p-3 rounded-2xl bg-white border-2 border-gray-200 ${colors.text}`}>
                                                                {section.icon}
                                                            </div>
                                                            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 heading-primary">
                                                                {t(`about.sectionTitles.${section.titleKey}`)}
                                                            </h3>
                                                        </div>

                                                        {/* Content Paragraphs */}
                                                        <div className="space-y-4 text-gray-700 leading-relaxed">
                                                            {Array.isArray(
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
                                                                                    ? `${colors.accent} italic font-medium text-lg text-accent`
                                                                                    : "text-base text-body"
                                                                            }
                                                                        >
                                                                            {paragraph}
                                                                        </p>
                                                                    )
                                                                )}
                                                        </div>

                                                        {/* Expert Quote */}
                                                        {section.key === "expert" && (
                                                            <div className="mt-8 p-6 bg-white rounded-2xl border border-gray-200">
                                                                <p className="text-gray-800 italic text-lg font-medium mb-3 text-accent">
                                                                    &quot;
                                                                    {t("about.sections.expert.quote")}
                                                                    &quot;
                                                                </p>
                                                                <p className="text-sm text-gray-600 font-semibold text-body">
                                                                    — {t("about.masterName")}
                                                                </p>
                                                            </div>
                                                        )}
                                                    </div>

                                                    {/* Image Side */}
                                                    <div className="flex justify-center lg:justify-end">
                                                        <div className="relative max-w-md w-full">
                                                            <img
                                                                src={section.image}
                                                                alt={`${t(`about.sectionTitles.${section.titleKey}`)} - Mezcal Consejo`}
                                                                className="w-full h-80 lg:h-96 object-cover rounded-2xl"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Slide Number Indicator */}
                                        <div className="absolute top-6 right-6 bg-white text-gray-800 px-3 py-1 rounded-full text-sm font-medium border border-gray-200 text-body">
                                        {index + 1} / {sections.length}
                                        </div>
                                    </div>
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                </motion.div>

                {/* Stats Section - More Compact */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.8, duration: 0.8 }}
                    className="bg-gray-50 rounded-3xl p-8"
                >
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                        <div className="space-y-2">
                            <div className="text-2xl md:text-3xl font-bold text-brand-accent heading-secondary">
                                80%
                            </div>
                            <div className="text-xs md:text-sm text-gray-600 leading-tight text-body">
                                {t("about.stats.oaxacaProduction")}
                            </div>
                        </div>
                        <div className="space-y-2">
                            <div className="text-2xl md:text-3xl font-bold text-brand-primary heading-secondary">
                                20+
                            </div>
                            <div className="text-xs md:text-sm text-gray-600 leading-tight text-body">
                                {t("about.stats.masterExperience")}
                            </div>
                        </div>
                        <div className="space-y-2">
                            <div className="text-2xl md:text-3xl font-bold text-brand-secondary heading-secondary">
                                9
                            </div>
                            <div className="text-xs md:text-sm text-gray-600 leading-tight text-body">
                                {t("about.stats.denominations")}
                            </div>
                        </div>
                        <div className="space-y-2">
                            <div className="text-2xl md:text-3xl font-bold text-yellow-700 heading-secondary">
                                40+°
                            </div>
                            <div className="text-xs md:text-sm text-gray-600 leading-tight text-body">
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
