"use client";

import React, { useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import { motion, useInView } from "framer-motion";
import { ShoppingBag, X, Plus, Minus, Check, ArrowRight } from "lucide-react";
import { useProducts, isValidPostalCode, Product } from "@/data/data";

const ShopSection = () => {
    const { t } = useTranslation();
    const products = useProducts();
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const featuredProduct = products[0];

    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
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

    if (!featuredProduct) {
        return null;
    }

    return (
        <>
            <section id="shop" className="section-padding bg-white">
                <div className="container-notion">
                    <div ref={ref} className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                        {/* Product Image */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.8 }}
                            className="lg:col-span-6"
                        >
                            <div className="product-image-minimal group">
                                <img
                                    src={featuredProduct.image}
                                    alt={featuredProduct.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </motion.div>

                        {/* Product Info */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="lg:col-span-6 space-section"
                        >
                            <div className="space-minimal">
                                <div className="divider-minimal mb-6"></div>
                                <span className="text-caption text-gray-500 uppercase tracking-widest">
                                    {t('shop.subtitle')}
                                </span>
                            </div>

                            <div className="space-y-6">
                                <div>
                                    <h2 className="heading-primary text-gray-900 mb-2">
                                        {featuredProduct.name}
                                    </h2>
                                    <p className="text-body-small text-brand-primary">
                                        {featuredProduct.category}
                                    </p>
                                </div>

                                <p className="text-body text-gray-600">
                                    {featuredProduct.description}
                                </p>

                                <div className="flex items-baseline space-x-2">
                                    <span className="heading-secondary text-gray-900">
                                        {formatPrice(featuredProduct.price)}
                                    </span>
                                    <span className="text-body-small text-gray-500">MXN</span>
                                </div>

                                <div className="pt-4">
                                    <button
                                        onClick={() => handleBuyClick(featuredProduct)}
                                        className="btn-primary group w-full sm:w-auto"
                                    >
                                        <ShoppingBag className="mr-2 w-4 h-4" />
                                        {t('shop.buyNow')}
                                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </div>

                                {/* Product Details - Minimal */}
                                <div className="border-t border-gray-100 pt-6 space-y-3">
                                    <div className="flex justify-between text-body-small">
                                        <span className="text-gray-500">Volumen</span>
                                        <span className="text-gray-900">750ml</span>
                                    </div>
                                    <div className="flex justify-between text-body-small">
                                        <span className="text-gray-500">Alcohol</span>
                                        <span className="text-gray-900">40% Vol.</span>
                                    </div>
                                    <div className="flex justify-between text-body-small">
                                        <span className="text-gray-500">Origen</span>
                                        <span className="text-gray-900">Oaxaca, México</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Modal - Minimal Design */}
            {showModal && selectedProduct && (
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="bg-white w-full max-w-md p-8 relative"
                    >
                        <button
                            onClick={() => setShowModal(false)}
                            className="absolute top-4 right-4 p-2 hover:bg-gray-100 transition-colors"
                        >
                            <X className="w-4 h-4" />
                        </button>

                        <div className="space-y-6">
                            <div>
                                <h3 className="heading-secondary text-gray-900 mb-2">
                                    {selectedProduct.name}
                                </h3>
                                <p className="heading-secondary text-gray-900">
                                    {formatPrice(selectedProduct.price)}
                                </p>
                            </div>

                            <div className="space-y-4">
                                <div>
                                    <label className="block text-body-small text-gray-700 mb-2">
                                        {t("postalCode.title")}
                                    </label>
                                    <div className="flex space-x-2">
                                        <input
                                            type="text"
                                            value={postalCode}
                                            onChange={(e) => setPostalCode(e.target.value)}
                                            placeholder={t("postalCode.placeholder")}
                                            className="flex-1 px-3 py-2 border border-gray-200 text-body-small focus:outline-none focus:ring-1 focus:ring-brand-primary focus:border-brand-primary"
                                        />
                                        <button
                                            onClick={handleVerifyPostalCode}
                                            className="px-4 py-2 bg-gray-900 text-white text-body-small hover:bg-gray-800 transition-colors"
                                        >
                                            {t("postalCode.verify")}
                                        </button>
                                    </div>
                                    {error && (
                                        <p className="text-red-600 text-caption mt-1">{error}</p>
                                    )}
                                    {isValidCode && (
                                        <p className="text-green-600 text-caption mt-1 flex items-center">
                                            <Check className="w-3 h-3 mr-1" />
                                            {t("postalCode.validCode", { code: postalCode })}
                                        </p>
                                    )}
                                </div>

                                {isValidCode && (
                                    <div>
                                        <label className="block text-body-small text-gray-700 mb-2">
                                            {t("postalCode.quantity")}
                                        </label>
                                        <div className="flex items-center space-x-3">
                                            <button
                                                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                                className="p-2 border border-gray-200 hover:bg-gray-50 transition-colors"
                                            >
                                                <Minus className="w-3 h-3" />
                                            </button>
                                            <span className="heading-small text-gray-900 px-4">
                                                {quantity}
                                            </span>
                                            <button
                                                onClick={() => setQuantity(quantity + 1)}
                                                className="p-2 border border-gray-200 hover:bg-gray-50 transition-colors"
                                            >
                                                <Plus className="w-3 h-3" />
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </div>

                            {isValidCode && (
                                <div className="border-t border-gray-100 pt-4">
                                    <div className="flex justify-between heading-small text-gray-900 mb-4">
                                        <span>Total:</span>
                                        <span>{formatPrice(selectedProduct.price * quantity)}</span>
                                    </div>
                                    <button className="btn-primary w-full">
                                        {t("postalCode.checkout")}
                                    </button>
                                </div>
                            )}
                        </div>
                    </motion.div>
                </div>
            )}
        </>
    );
};

export default ShopSection;
