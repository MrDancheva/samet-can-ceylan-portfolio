import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { AlertTriangle, Home } from 'lucide-react';

const NotFound: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen flex items-center justify-center px-4" style={{ backgroundColor: '#050a10' }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-lg"
      >
        <div className="flex justify-center mb-6">
          <AlertTriangle className="w-16 h-16 text-neon-orange" />
        </div>

        <h1
          className="text-7xl md:text-9xl font-bold text-neon-cyan glitch-text mb-4"
          data-text="404"
        >
          404
        </h1>

        <div className="border border-neon-cyan/30 p-6 mb-8 bg-[#0a1520]/50">
          <p className="text-neon-orange text-sm font-mono mb-2">
            ⚠ SYSTEM_ERROR: PAGE_NOT_FOUND
          </p>
          <p className="text-gray-400 text-sm">
            İstenen sayfa bulunamadı. Sistem taraması başarısız oldu.
          </p>
          <p className="text-gray-500 text-xs mt-2">
            The requested page could not be found. System scan failed.
          </p>
        </div>

        <a
          href="/"
          className="btn-tech inline-flex items-center gap-2 bg-neon-cyan text-black px-8 py-3 font-bold tracking-wider hover:bg-white transition-colors"
        >
          <Home className="w-4 h-4" />
          ANA SAYFAYA DÖN
        </a>

        <div className="mt-8 text-xs text-gray-600 font-mono">
          <p>ERR_CODE: 0x404 | STATUS: OFFLINE</p>
          <p>REDIRECT: / | RETRY: MANUAL</p>
        </div>
      </motion.div>
    </div>
  );
};

export default NotFound;
