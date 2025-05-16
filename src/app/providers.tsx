'use client';

import { useState, useEffect } from 'react';
import '../libs/i18n';
import { ThemeProvider } from '@/components/theme-provider';
import AgeVerificationModal from '@/components/age-verification-modal';

export default function Providers({ children }: { children: React.ReactNode }) {
  const [isVerified, setIsVerified] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if user has already verified age
    const ageVerified = localStorage.getItem('ageVerified');
    if (ageVerified === 'true') {
      setIsVerified(true);
    }
    setIsLoading(false);
  }, []);

  const handleVerificationSuccess = () => {
    setIsVerified(true);
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <ThemeProvider>
      {!isVerified && <AgeVerificationModal onVerificationSuccess={handleVerificationSuccess} />}
      {children}
    </ThemeProvider>
  );
}
