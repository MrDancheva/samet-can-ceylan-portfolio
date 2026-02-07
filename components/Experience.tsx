import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string;
  tags: string[];
  color: string;
}

const Experience: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [experiences, setExperiences] = useState<ExperienceItem[]>([]);

  useEffect(() => {
    fetch('/translations.json')
      .then(res => res.json())
      .then(data => {
        const currentLang = i18n.language as 'en' | 'tr';
        setExperiences(data[currentLang].experience.items);
      });
  }, [i18n.language]);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24" data-purpose="experience" id="experience">
      <div className="flex items-center gap-3 mb-12 border-b border-neon-orange/30 pb-2">
        <Briefcase className="w-5 h-5 text-neon-orange" />
        <h3 className="text-xl font-bold tracking-widest text-white">{t('experience.title')}</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15, duration: 0.5 }}
            className="relative bg-gradient-to-br from-[#0a1520] to-[#050a10] border border-white/10 hover:border-neon-cyan/50 transition-all group overflow-hidden"
          >
            {/* Accent bar */}
            <div className={`absolute top-0 left-0 w-1 h-full ${exp.color}`} />

            <div className="p-6 pl-8">
              {/* Header */}
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h4 className="text-lg font-bold text-white group-hover:text-neon-cyan transition-colors">
                    {exp.company}
                  </h4>
                  <span className="text-sm text-neon-orange font-mono">{exp.role}</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-gray-500 font-mono shrink-0 ml-4">
                  <Calendar className="w-3 h-3" />
                  {exp.period}
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-gray-400 mb-4 leading-relaxed">
                {exp.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {exp.tags.map(tag => (
                  <span
                    key={tag}
                    className="text-xs border border-white/10 px-2 py-0.5 text-gray-400 bg-white/5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
