import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portafolio Facundo Fierro",
  description: "Generado por Facu.f",

  icons: {
    icon: ["/favicon.jpg"]
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <meta name="theme-color" content="#E82E8A" />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
