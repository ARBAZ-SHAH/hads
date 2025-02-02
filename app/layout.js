import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "HSSD",
  description: "Haris Saeed",
  icons: {
    icon: "/HSfavicon.ico", // Correct path for the favicon
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Fallback in case metadata doesn't work */}
        <link className="rounded-full"
          rel="icon"
          href="/HSfavicon.ico?v=2" // Correct favicon path
          type="image/x-icon"
        />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
