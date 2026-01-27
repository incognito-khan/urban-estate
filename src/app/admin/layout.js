"use client";

import React from "react";
import AdminSidebar from "@/components/layout/admin-sidebar";
import AdminHeader from "@/components/layout/admin-header";
import "../../../public/admin/vendor/fontawesome-free/css/all.min.css";
import { usePathname } from "next/navigation";

export default function AdminLayout({ children }) {
  const [isCollapsed, setIsCollapsed] = React.useState(false);
  const pathname = usePathname();

  if (pathname === "/admin/login") {
    return children;
  }

  return (
    <div
      id="wrapper"
      className={`d-flex ${isCollapsed ? "sidebar-toggled" : ""}`}
    >
      {/* Sidebar */}
      <AdminSidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />

      {/* Main Content Area */}
      <div className="flex-grow-1" id="content-wrapper">
        <AdminHeader />

        <main className="p-4">{children}</main>
      </div>
    </div>
  );
}
