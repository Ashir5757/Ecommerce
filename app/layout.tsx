
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";

import { Modalprovider } from "@/providers/modal-provider";

import "./globals.css";
import { ToastProvider } from "@/providers/toast-provider";

const inter = Inter({ subsets: ["latin"] });

export const  Metadata = {
  title: "Admin Dashboard",
  description: "Admin Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={inter.className}>
        <ToastProvider/>
        <Modalprovider/>
        {children}
      </body>
    </html>
    </ClerkProvider>
  );
}
