import { Geist, Geist_Mono, Inter, Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/Footer";

const InterN = Inter({
  variable: "--font-Inter-sans",
  subsets: ["latin"],
});

const ManRopeN = Manrope({
  variable: "--font-Marope-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Automatizaciones con IA para crecer | Aiphier",
  description:
    "Automatiza tareas y flujos de varios pasos, integra tus sistemas y decide con analíticas en tiempo real. Consultoría, despliegue y mejora continua.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="" href="/favicon.png" />
      </head>
      <body className={`${InterN.variable} ${ManRopeN.variable} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
