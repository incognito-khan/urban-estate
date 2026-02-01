"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BootstrapClient from "@/components/bootstrap-client";
import ReduxProvider from "@/redux/provider";
import ToastProvider from "@/components/ToastProvider";

export default function ClientLayout({ children, geistSans, geistMono }) {
  const pathname = usePathname();
  const isAdminPath = pathname.startsWith("/admin");

  return (
    <body className={`${geistSans} ${geistMono}`}>
      <BootstrapClient />
      <ReduxProvider>
        {!isAdminPath && <Navbar />}
        {children}
        {!isAdminPath && <Footer />}
        <ToastProvider />
      </ReduxProvider>
    </body>
  );
}
