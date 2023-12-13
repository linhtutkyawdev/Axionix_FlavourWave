import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ClerkProvider } from "@clerk/nextjs";
import TanstackProvider from "@/provider/tanstack-provider";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FlavorWave",
  description: "FlavourWave is backbone food provider in Myanmar.",
  keywords: [
    "FlavorWave",
    "Products",
    "myanmar",
    "food",
    "drink",
    "fruits",
    "Beverages",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ClerkProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
            storageKey="flavorWave-theme"
          >
            <TanstackProvider>
              {children}
              <Toaster />
            </TanstackProvider>
          </ThemeProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}
