import { Geist, Geist_Mono } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../public/assets/css/main.css";
import "../../public/assets/vendor/bootstrap-icons/bootstrap-icons.css";
import "../../public/admin/css/sb-admin-2.min.css";
import ClientLayout from "@/components/layout/ClientLayout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "UrbanEstate | Find Your Dream Property",
  description: "Browse thousands of verified listings from trusted agents.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ClientLayout
        geistSans={geistSans.variable}
        geistMono={geistMono.variable}
      >
        {children}
      </ClientLayout>
    </html>
  );
}
