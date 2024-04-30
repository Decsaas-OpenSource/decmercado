import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DecMercado",
  description: "Esté é um aplicativo demonstrativo",
  robots: "noindex",
  icons: [
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      url: '/favicon.png'
    }
  ]
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
