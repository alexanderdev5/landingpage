import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

// Configuración de Montserrat con subsets y weights necesarios
const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "PrintWear Pro - Venta al por Mayor de Prendas Estampadas | Polos y Chompas Personalizados",
  description: "Fabricamos polos, chompas y prendas estampadas para empresas, colegios y equipos deportivos. Calidad premium, precios por volumen y entregas express en Perú.",
  keywords: "prendas estampadas, polos personalizados, chompas deportivas, venta al por mayor, uniformes empresariales, estampado textil, Perú",
  authors: [{ name: "PrintWear Pro" }],
  creator: "PrintWear Pro",
  publisher: "PrintWear Pro",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://printwearpro.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "PrintWear Pro - Venta al por Mayor de Prendas Estampadas",
    description: "Fabricamos polos, chompas y prendas estampadas para empresas, colegios y equipos deportivos. Calidad premium y precios por volumen.",
    url: "https://printwearpro.com",
    siteName: "PrintWear Pro",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "PrintWear Pro - Prendas Estampadas de Calidad",
      },
    ],
    locale: "es_PE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PrintWear Pro - Venta al por Mayor de Prendas Estampadas",
    description: "Fabricamos polos, chompas y prendas estampadas para empresas, colegios y equipos deportivos.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Agrega aquí tus verificaciones de Google Search Console, etc.
    // google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        {/* Preconnect para optimización de fuentes */}
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        
        {/* Favicon y meta tags adicionales */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon?<generated>" type="image/<generated>" sizes="<generated>" />
        <link rel="apple-touch-icon" href="/apple-touch-icon?<generated>" type="image/<generated>" sizes="<generated>" />
        
        {/* Meta tags para Perú */}
        <meta name="geo.region" content="PE" />
        <meta name="geo.placename" content="Lima" />
        <meta name="geo.position" content="-12.046374;-77.042793" />
        <meta name="ICBM" content="-12.046374, -77.042793" />
      </head>
      <body
        className={`${montserrat.className} ${montserrat.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}