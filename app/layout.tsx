import { Provider } from "@/utils/Providers";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <nav>
            <ul className="flex justify-between gap-2 bg-blue-500 px-4">
              <li>
                <Link href={"/"}>Home</Link>
              </li>
              <li>
                <Link href={"/about"}>About</Link>
              </li>
            </ul>
          </nav>
          {children}
        </Provider>
      </body>
    </html>
  );
}
