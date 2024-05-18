import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DecMercado",
  description: "Esté é um aplicativo demonstrativo",
  robots: "noindex",
  manifest: "/manifest.json",
  authors: [
    {
      name: "Rodrigo C. Vieira",
      url: "linkedin.com/in/rodrigo-cezar-vieira-2a8527b9",
    },
  ],
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "DecMercado",
    startupImage: [
      "/splash-screen.png"
    ],
  },
  icons: [
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '48x48',
      url: '/favicon-48.png'
    }
  ],
};

export const viewport: Viewport = {
  themeColor: "#11538C",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {

  return (
    <html lang="en">
      <body className="font-body bg-preto text-branco">
        <main className="max-w-[390px] max-h-[844px] m-auto">
          {children}
        </main>
      </body>
    </html>
  );
}
