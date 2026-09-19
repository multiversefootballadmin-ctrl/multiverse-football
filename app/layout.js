import './globals.css';
import { LanguageProvider } from '@/lib/LanguageContext';
import GlobalHeader from '@/components/GlobalHeader';

export const metadata = {
  title: 'Multiverse Football // War Room Telemetry',
  description: 'Cross-sport tactical telemetry mapping Soccer to NFL archetypes.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#0E0F12] text-zinc-100 antialiased min-h-screen flex flex-col">
        <LanguageProvider>
          <GlobalHeader />
          <div className="flex-1">
            {children}
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}