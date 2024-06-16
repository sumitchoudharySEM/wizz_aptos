"use client";
import { Inter } from "next/font/google";
import "./globals.css";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

// Aptos Imports
import { PetraWallet } from "petra-plugin-wallet-adapter";
import { AptosWalletAdapterProvider } from "@aptos-labs/wallet-adapter-react";

const wallets = [new PetraWallet()];

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AptosWalletAdapterProvider plugins={wallets} autoConnect={true}>
        <ToastContainer />
          {children}
        </AptosWalletAdapterProvider>
      </body>
    </html>
  );
}
