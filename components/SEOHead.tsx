import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const seoData = {
  tr: {
    title: 'Samet Can Ceylan | Konya Mekatronik Mühendisi - Robotik, Otomasyon & Mekanik Tasarım',
    description: 'Konya merkezli Mekatronik Mühendisi Samet Can Ceylan. Mekanik tasarım, robotik, otonom sistemler, SolidWorks, ROS, Jetson Nano, CNC, PLC programlama ve yapay zeka uzmanlığı. 2x Teknofest Finalisti. Konya mühendislik hizmetleri.',
    keywords: 'Samet Can Ceylan, Mekatronik Mühendisi, Konya Mekatronik Mühendisi, Konya Mühendis, Konya Robotik, Konya Otomasyon, SolidWorks, AutoCAD, ROS, Jetson Nano, OpenCV, CNC, PLC, Python, Teknofest, Otonom Araç, UGV, Mekanik Tasarım, 3D Baskı, Konya CNC, Konya PLC Programlama, Mekatronik Mühendisi Konya',
    ogTitle: 'Samet Can Ceylan | Konya Mekatronik Mühendisi',
    ogDescription: 'Konya merkezli Mekatronik Mühendisi. Mekanik tasarım, robotik, otonom sistemler. SolidWorks, ROS, Jetson Nano, CNC & PLC uzmanlığı. 2x Teknofest Finalisti.',
    twitterDescription: 'Konya merkezli Mekatronik Mühendisi. Robotik, CNC, PLC, AI & otonom sistemler. 2x Teknofest Finalisti.',
    locale: 'tr_TR',
  },
  en: {
    title: 'Samet Can Ceylan | Mechatronics Engineer in Konya - Robotics, Automation & Mechanical Design',
    description: 'Samet Can Ceylan: Mechatronics Engineer based in Konya, Turkey. Bridging mechanical design, robotics, and autonomous systems. SolidWorks, ROS, Jetson Nano, CNC, PLC programming, and AI expertise. 2x Teknofest Finalist.',
    keywords: 'Samet Can Ceylan, Mechatronics Engineer, Konya Mechatronics Engineer, Konya Engineer, Robotics, Automation, SolidWorks, AutoCAD, ROS, Jetson Nano, OpenCV, CNC, PLC, Python, Teknofest, Autonomous Vehicle, UGV, Mechanical Design, 3D Printing, Konya Turkey Engineer',
    ogTitle: 'Samet Can Ceylan | Mechatronics Engineer in Konya',
    ogDescription: 'Mechatronics Engineer based in Konya, Turkey. Mechanical design, robotics, autonomous systems. SolidWorks, ROS, Jetson Nano, CNC & PLC expertise. 2x Teknofest Finalist.',
    twitterDescription: 'Mechatronics Engineer in Konya. Robotics, CNC, PLC, AI & autonomous systems. 2x Teknofest Finalist.',
    locale: 'en_US',
  },
};

const SEOHead: React.FC = () => {
  const { i18n } = useTranslation();
  const lang = (i18n.language || 'tr') as 'en' | 'tr';
  const seo = seoData[lang] || seoData.tr;

  useEffect(() => {
    // Update document title
    document.title = seo.title;

    // Update html lang attribute
    document.documentElement.lang = lang;

    // Helper to update or create meta tags
    const setMeta = (attr: string, key: string, content: string) => {
      let el = document.querySelector(`meta[${attr}="${key}"]`) as HTMLMetaElement;
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    // Standard meta
    setMeta('name', 'description', seo.description);
    setMeta('name', 'keywords', seo.keywords);

    // Open Graph
    setMeta('property', 'og:title', seo.ogTitle);
    setMeta('property', 'og:description', seo.ogDescription);
    setMeta('property', 'og:locale', seo.locale);

    // Twitter
    setMeta('name', 'twitter:title', seo.ogTitle);
    setMeta('name', 'twitter:description', seo.twitterDescription);

    // Hreflang
    const updateHreflang = (hreflang: string, href: string) => {
      let link = document.querySelector(`link[hreflang="${hreflang}"]`) as HTMLLinkElement;
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', 'alternate');
        link.setAttribute('hreflang', hreflang);
        document.head.appendChild(link);
      }
      link.setAttribute('href', href);
    };

    updateHreflang('tr', 'https://sametcanceylan.com');
    updateHreflang('en', 'https://sametcanceylan.com?lang=en');
    updateHreflang('x-default', 'https://sametcanceylan.com');

  }, [lang, seo]);

  return null;
};

export default SEOHead;
