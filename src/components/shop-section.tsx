"use client";

import React, { useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import { motion, useInView } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { ShoppingBag, X, Plus, Minus, Check, ArrowRight } from "lucide-react";
import { products, isValidPostalCode, Product } from "@/data/data";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const ShopSection = () => {
    const { t } = useTranslation();
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const [selectedProduct, setSelectedProduct] = useState<Product | null>(
        null
    );
    const [showModal, setShowModal] = useState(false);
    const [postalCode, setPostalCode] = useState("");
    const [isValidCode, setIsValidCode] = useState(false);
    const [quantity, setQuantity] = useState(1);
    const [error, setError] = useState("");

    const handleBuyClick = (product: Product) => {
        setSelectedProduct(product);
        setShowModal(true);
        setPostalCode("");
        setIsValidCode(false);
        setQuantity(1);
        setError("");
    };

    const handleVerifyPostalCode = () => {
        const validation = isValidPostalCode(postalCode);
        if (validation && validation.deliveryAvailable) {
            setIsValidCode(true);
            setError("");
        } else {
            setError(t("postalCode.invalidCode"));
            setIsValidCode(false);
        }
    };

    const formatPrice = (price: number | bigint) => {
        return new Intl.NumberFormat("es-MX", {
            style: "currency",
            currency: "MXN",
        }).format(price);
    };

    return (
        <section
            id="shop"
            className="section-padding bg-white dark:bg-gray-900"
        >
            <div className="container-notion">
                <div ref={ref} className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4"
                    >
                        {t("shop.title")}
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="text-lg text-gray-600 dark:text-gray-400"
                    >
                        {t("shop.subtitle")}
                    </motion.p>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.4, duration: 0.8 }}
                >
                    <Swiper
                        modules={[Navigation, Pagination]}
                        spaceBetween={32}
                        slidesPerView={1}
                        navigation
                        pagination={{ clickable: true }}
                        breakpoints={{
                            640: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                        }}
                        className="minimal-swiper"
                    >
                        {products.map((product) => (
                            <SwiperSlide key={product.id}>
                                <div className="group bg-gray-50 dark:bg-gray-800 rounded-2xl overflow-hidden hover-lift border-subtle hover:shadow-notion-lg transition-all duration-300">
                                    <div className="relative overflow-hidden">
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                        <div className="absolute top-4 right-4 bg-brand-secondary dark:bg-gray-100 text-white dark:text-gray-900 px-3 py-1 rounded-full text-sm font-medium">
                                            {product.category}
                                        </div>
                                    </div>
                                    <div className="p-6 space-y-4">
                                        <div>
                                            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                                                {product.name}
                                            </h3>
                                            <p className="text-gray-600 dark:text-gray-400 line-clamp-2 text-sm">
                                                {product.description}
                                            </p>
                                        </div>
                                        <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                                            <span className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                                                {formatPrice(product.price)}
                                            </span>
                                            <button
                                                onClick={() =>
                                                    handleBuyClick(product)
                                                }
                                                className="inline-flex items-center px-6 py-3  bg-brand-primary text-white rounded-full font-semibold hover:bg-brand-primary-dark transition-all focus-ring"
                                            >
                                                <ShoppingBag className="w-4 h-4 mr-2" />
                                                {t("shop.buyNow")}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </motion.div>
            </div>

            {/* Modal for postal code validation */}
            {showModal && selectedProduct && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="bg-white dark:bg-gray-800 rounded-2xl max-w-md w-full overflow-hidden shadow-xl"
                    >
                        <div className="p-6">
                            <div className="flex justify-between items-center mb-6">
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                                    {selectedProduct.name}
                                </h3>
                                <button
                                    onClick={() => setShowModal(false)}
                                    className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors focus-ring"
                                >
                                    <X className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                                </button>
                            </div>

                            {!isValidCode ? (
                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                            {t("postalCode.title")}
                                        </label>
                                        <div className="flex space-x-3">
                                            <input
                                                type="text"
                                                value={postalCode}
                                                onChange={(e) =>
                                                    setPostalCode(
                                                        e.target.value
                                                    )
                                                }
                                                placeholder={t(
                                                    "postalCode.placeholder"
                                                )}
                                                className="flex-1 px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus-ring bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                                            />
                                            <button
                                                onClick={handleVerifyPostalCode}
                                                className="px-6 py-3 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 rounded-lg font-semibold hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors focus-ring"
                                            >
                                                {t("postalCode.verify")}
                                            </button>
                                        </div>
                                        {error && (
                                            <p className="text-red-600 dark:text-red-400 text-sm mt-2">
                                                {error}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            ) : (
                                <div className="space-y-6">
                                    <div className="flex items-center space-x-2 text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                                        <Check className="w-5 h-5" />
                                        <span>
                                            {t("postalCode.validCode", {
                                                code: postalCode,
                                            })}
                                        </span>
                                    </div>

                                    <div className="space-y-4">
                                        <div className="flex items-center justify-between">
                                            <span className="text-gray-700 dark:text-gray-300 font-medium">
                                                {t("postalCode.quantity")}:
                                            </span>
                                            <div className="flex items-center space-x-3">
                                                <button
                                                    onClick={() =>
                                                        setQuantity(
                                                            Math.max(
                                                                1,
                                                                quantity - 1
                                                            )
                                                        )
                                                    }
                                                    className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors focus-ring"
                                                >
                                                    <Minus className="w-4 h-4" />
                                                </button>
                                                <span className="text-xl font-semibold w-8 text-center">
                                                    {quantity}
                                                </span>
                                                <button
                                                    onClick={() =>
                                                        setQuantity(
                                                            quantity + 1
                                                        )
                                                    }
                                                    className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors focus-ring"
                                                >
                                                    <Plus className="w-4 h-4" />
                                                </button>
                                            </div>
                                        </div>

                                        <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                                            <div className="flex justify-between text-lg font-semibold">
                                                <span>Total:</span>
                                                <span className="text-gray-900 dark:text-gray-100">
                                                    {formatPrice(
                                                        selectedProduct.price *
                                                            quantity
                                                    )}
                                                </span>
                                            </div>
                                        </div>

                                        <button
                                            onClick={() => {
                                                // Handle checkout logic here
                                                alert(
                                                    "Redirigiendo al checkout..."
                                                );
                                                setShowModal(false);
                                            }}
                                            className="w-full bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 py-4 rounded-full font-semibold hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors inline-flex items-center justify-center space-x-2 focus-ring"
                                        >
                                            <span>
                                                {t("postalCode.checkout")}
                                            </span>
                                            <ArrowRight className="w-5 h-5" />
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </motion.div>
                </div>
            )}
        </section>
    );
};

export default ShopSection;
