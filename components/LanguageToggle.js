'use client';

import { useLanguage } from '@/lib/LanguageContext';

export default function LanguageToggle() {
  const { lang, changeLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-1.5 bg-[#121316] border border-zinc-700/80 rounded-xl p-1.5 shadow-md">
      {/* Botão Canadá (EN) */}
      <button
        onClick={() => changeLanguage('en')}
        className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-mono font-bold transition-all ${
          lang === 'en'
            ? 'bg-orange-600 text-white shadow-md shadow-orange-600/40 ring-1 ring-orange-400'
            : 'text-zinc-400 hover:text-white hover:bg-zinc-800/60'
        }`}
        title="English"
      >
        <svg className="w-5 h-3.5 rounded-sm object-cover shadow-sm" viewBox="0 0 640 480">
          <path fill="#f00" d="M0 0h160v480H0zM480 0h160v480H480z"/>
          <path fill="#fff" d="M160 0h320v480H160z"/>
          <path fill="#f00" d="m320 89.2 16.5 45.4 34.6-21.3-11.2 52.8 45.6 4.3-33 30.6 34.6 23.9-46.7 13.5 9 53.6-43.2-22.7-6.2 58.7-6.2-58.7-43.2 22.7 9-53.6-46.7-13.5 34.6-23.9-33-30.6 45.6-4.3-11.2-52.8 34.6 21.3z"/>
        </svg>
        <span className="tracking-wider">EN</span>
      </button>

      {/* Botão Brasil (PT) */}
      <button
        onClick={() => changeLanguage('pt')}
        className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-mono font-bold transition-all ${
          lang === 'pt'
            ? 'bg-orange-600 text-white shadow-md shadow-orange-600/40 ring-1 ring-orange-400'
            : 'text-zinc-400 hover:text-white hover:bg-zinc-800/60'
        }`}
        title="Português"
      >
        <svg className="w-5 h-3.5 rounded-sm object-cover shadow-sm" viewBox="0 0 640 480">
          <path fill="#009b3a" d="M0 0h640v480H0z"/>
          <path fill="#fedf00" d="m320 40 280 200-280 200L40 240z"/>
          <circle fill="#002776" cx="320" cy="240" r="115"/>
        </svg>
        <span className="tracking-wider">PT</span>
      </button>
    </div>
  );
}