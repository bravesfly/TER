import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "TER",
  description: "Tron Energy Rent",
};
export default async  function RootLayout({
  children,
  params: {locale}
}: Readonly<{
  children: React.ReactNode;
  params: {locale: string};
}>) {
  
  return (
    <html lang='en'>
      <body className={inter.className}><ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          </ThemeProvider></body>
    </html>
  );
}
