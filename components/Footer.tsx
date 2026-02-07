import React from 'react';
import { useTranslation } from 'react-i18next';

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-neon-cyan/30 mt-12 pb-8" data-purpose="footer">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="text-center text-gray-600 text-xs font-mono">
          © {year} Samet Can Ceylan. {t('header.status_online')}.
        </div>
      </div>
    </footer>
  );
};

export default Footer;