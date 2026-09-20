'use client';

import { useEffect } from 'react';
import Script from 'next/script';

export default function AutoTranslator() {
  useEffect(() => {
    window.googleTranslateElementInit = () => {
      if (window.google && window.google.translate) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: 'en',
            includedLanguages: 'en,pt',
            autoDisplay: false,
            layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
          },
          'google_translate_element'
        );
      }
    };
  }, []);

  return (
    <>
      <div id="google_translate_element" className="fixed bottom-0 left-0 opacity-0 pointer-events-none -z-50" />
      <Script
        src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
        strategy="afterInteractive"
      />
      <style jsx global>{`
        .goog-te-banner-frame.skiptranslate,
        iframe.skiptranslate,
        .goog-te-banner-frame,
        #goog-gt-tt {
          display: none !important;
        }
        body {
          top: 0px !important;
        }
        .goog-tooltip,
        .goog-tooltip:hover {
          display: none !important;
        }
        .goog-text-highlight {
          background-color: transparent !important;
          border: none !important;
          box-shadow: none !important;
        }
        font {
          background-color: transparent !important;
          box-shadow: none !important;
        }
      `}</style>
    </>
  );
}