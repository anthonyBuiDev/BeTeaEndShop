import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import "./globals.css";

import Nav from "@/components/navigation/nav";
import { ThemeProvider } from "@/components/providers/theme-provider";

import { Toaster } from "@/components/ui/sonner";
import { cn } from "@/lib/utils";
import { Provider } from "@/utils/Providers";

const roboto = Roboto({
  weight: ["400", "500", "700", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BeTeaEnd Shop",
  description: "Everything from BeTeaEnd",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={roboto.className}>
        <Provider>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <div className="mx-auto max-w-8xl flex-grow px-6 md:px-12">
              <Nav />
              <Toaster richColors />
              {children}
            </div>
          </ThemeProvider>
        </Provider>
      </body>
    </html>
  );
}
