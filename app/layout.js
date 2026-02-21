import './globals.css';

export const metadata = {
  title: 'ULTIMATE UNBLOCKER',
  description: 'A modern directory-style website providing categorized links for proxies, games, movies, AI tools, and more',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
