'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface AgeVerificationModalProps {
  onVerificationSuccess: () => void;
}

const AgeVerificationModal: React.FC<AgeVerificationModalProps> = ({ onVerificationSuccess }) => {
  const { t, i18n } = useTranslation();
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [error, setError] = useState('');

  const handleVerify = () => {
    if (!day || !month || !year) {
      setError(t('ageVerification.error.incomplete'));
      return;
    }

    const birthDate = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
    const currentDate = new Date();
    let age = currentDate.getFullYear() - birthDate.getFullYear();
    const monthDiff = currentDate.getMonth() - birthDate.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && currentDate.getDate() < birthDate.getDate())) {
      age--;
    }

    if (age >= 18) {
      localStorage.setItem('ageVerified', 'true');
      onVerificationSuccess();
    } else {
      setError(t('ageVerification.error.tooYoung'));
    }
  };

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl max-w-md w-full p-8"
      >
        <div className="text-center space-y-6">
          <Calendar className="w-16 h-16 mx-auto text-gray-900 dark:text-gray-100" />
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
              {t('ageVerification.title')}
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              {t('ageVerification.message')}
            </p>
          </div>

          <div className="space-y-6">
            <div className="grid grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  {t('ageVerification.day')}
                </label>
                <select
                  value={day}
                  onChange={(e) => setDay(e.target.value)}
                  className="w-full border border-gray-300 dark:border-gray-600 rounded-xl px-3 py-3 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus-ring appearance-none cursor-pointer"
                >
                  <option value="">{t('ageVerification.dayPlaceholder')}</option>
                  {Array.from({ length: 31 }, (_, i) => (
                    <option key={i + 1} value={i + 1}>
                      {i + 1}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  {t('ageVerification.month')}
                </label>
                <select
                  value={month}
                  onChange={(e) => setMonth(e.target.value)}
                  className="w-full border border-gray-300 dark:border-gray-600 rounded-xl px-3 py-3 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus-ring appearance-none cursor-pointer"
                >
                  <option value="">{t('ageVerification.monthPlaceholder')}</option>
                  {Array.from({ length: 12 }, (_, i) => (
                    <option key={i + 1} value={i + 1}>
                      {new Date(0, i).toLocaleString(i18n.language === 'es' ? 'es' : 'en', { month: 'long' })}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  {t('ageVerification.year')}
                </label>
                <select
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                  className="w-full border border-gray-300 dark:border-gray-600 rounded-xl px-3 py-3 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus-ring appearance-none cursor-pointer"
                >
                  <option value="">{t('ageVerification.yearPlaceholder')}</option>
                  {Array.from({ length: 100 }, (_, i) => (
                    <option key={2024 - i} value={2024 - i}>
                      {2024 - i}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            
            {error && (
              <p className="text-red-500 dark:text-red-400 text-sm text-center bg-red-50 dark:bg-red-900/20 p-3 rounded-xl">
                {error}
              </p>
            )}
            
            <button
              onClick={handleVerify}
              className="w-full bg-gray-900 dark:bg-gray-100 hover:bg-gray-800 dark:hover:bg-gray-200 text-white dark:text-gray-900 py-4 px-6 rounded-2xl font-semibold transition-colors focus-ring"
            >
              {t('ageVerification.verify')}
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AgeVerificationModal;
