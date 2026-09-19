import './globals.css';
import { LanguageProvider } from '@/lib/LanguageContext';
import GlobalHeader from '@/components/GlobalHeader';

export const metadata = {
  title: 'Multiverse Football // Tactical Telemetry & NFL Archetypes',
  description: 'Translating Soccer performance into NFL positional archetypes using high-dimensional tracking telemetry.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className="bg-[#0E0F12] text-zinc-100 min-h-screen antialiased selection:bg-orange-500 selection:text-white">
        <LanguageProvider>
          <GlobalHeader />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}