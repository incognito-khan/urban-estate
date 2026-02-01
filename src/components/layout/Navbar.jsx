"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Properties", path: "/properties" },
    { name: "Services", path: "/services" },
    { name: "Agents", path: "/agents" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (typeof document !== "undefined") {
      document.body.classList.toggle("mobile-nav-active");
    }
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    if (typeof document !== "undefined") {
      document.body.classList.remove("mobile-nav-active");
    }
  };

  return (
    <header id="header" className="header d-flex align-items-center fixed-top">
      <div className="header-container container-fluid container-xl position-relative d-flex align-items-center justify-content-between">
        <Link
          href="/"
          className="logo d-flex align-items-center me-auto me-xl-0 text-decoration-none"
          onClick={closeMobileMenu}
        >
          <h1 className="sitename">UrbanEstate</h1>
        </Link>

        <nav
          id="navmenu"
          className={`navmenu ${isMobileMenuOpen ? "mobile-nav-active" : ""}`}
        >
          <ul>
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  href={link.path}
                  className={pathname === link.path ? "active" : ""}
                  onClick={closeMobileMenu}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <i
            className={`mobile-nav-toggle d-xl-none bi ${isMobileMenuOpen ? "bi-x" : "bi-list"}`}
            onClick={toggleMobileMenu}
          />
        </nav>

        <Link
          className="btn-getstarted"
          href="/properties"
          onClick={closeMobileMenu}
        >
          Get Started
        </Link>
      </div>
    </header>
  );
}
