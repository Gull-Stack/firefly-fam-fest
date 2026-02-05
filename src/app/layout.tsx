import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Firefly Fam Fest 2026 | Utah\'s Biggest Family Festival',
  description: 'Join us Saturday, May 9, 2026 in Eagle Mountain for Utah\'s largest festival created just for families. Bounce houses, food trucks, live entertainment, and more!',
  keywords: ['Firefly Fam Fest', 'Utah family festival', 'Eagle Mountain events', 'kids festival Utah', 'bounce houses', 'family fun'],
  openGraph: {
    title: 'Firefly Fam Fest 2026 | Utah\'s Biggest Family Festival',
    description: 'Grab your kiddos and head over to Utah\'s largest festival created just for families!',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Fredoka:wght@400;500;600;700&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased" style={{ fontFamily: "'Inter', sans-serif" }}>
        {/* Confetti */}
        <div className="confetti" />
        <div className="confetti" />
        <div className="confetti" />
        <div className="confetti" />
        <div className="confetti" />
        <div className="confetti" />
        <div className="confetti" />
        <div className="confetti" />
        <div className="confetti" />
        <div className="confetti" />
        
        {children}
      </body>
    </html>
  );
}
