import React from "react";

export default function AdminSidebar({ isCollapsed, setIsCollapsed }) {
  return (
    <ul
      className={`navbar-nav bg-gradient-primary sidebar sidebar-dark accordion ${isCollapsed ? "toggled" : ""}`}
      id="accordionSidebar"
    >
      {/* Brand */}
      <a
        className="sidebar-brand d-flex align-items-center justify-content-center"
        href="/admin/dashboard"
      >
        <div className="sidebar-brand-icon rotate-n-15">
          <i className="fas fa-building"></i>
        </div>
        <div className="sidebar-brand-text mx-3">Urban Estate</div>
      </a>

      <hr className="sidebar-divider my-0" />

      {/* Dashboard */}
      <li className="nav-item">
        <a className="nav-link" href="/admin/dashboard">
          <i className="fas fa-fw fa-tachometer-alt"></i>
          <span>Dashboard</span>
        </a>
      </li>

      <hr className="sidebar-divider" />

      <div className="sidebar-heading">Manage</div>

      {/* Properties Dropdown */}
      <li className="nav-item">
        <button
          className={`nav-link collapsed btn btn-link ${isCollapsed ? "text-center w-100" : "text-left"}`}
          type="button"
          data-toggle="collapse"
          data-target="#collapseProperties"
          aria-expanded="false"
          aria-controls="collapseProperties"
        >
          <i className="fas fa-fw fa-home"></i>
          <span>Properties</span>
        </button>

        <div
          id="collapseProperties"
          className="collapse"
          aria-labelledby="headingProperties"
          data-parent="#accordionSidebar"
        >
          <div className="bg-white py-2 collapse-inner rounded">
            <a className="collapse-item" href="/admin/properties">
              All Properties
            </a>
            <a className="collapse-item" href="/admin/properties/new">
              Add Property
            </a>
          </div>
        </div>
      </li>

      {/* Leads */}
      <li className="nav-item">
        <a
          className={`nav-link ${isCollapsed ? "text-center w-100" : ""}`}
          href="/admin/leads"
        >
          <i className="fas fa-fw fa-phone"></i>
          <span>Leads</span>
        </a>
      </li>

      <hr className="sidebar-divider d-none d-md-block" />

      {/* Sidebar Toggle */}
      <div className="text-center d-none d-md-inline mt-2">
        <button
          className="rounded-circle border-0 d-flex align-items-center justify-content-center mx-auto"
          id="sidebarToggle"
          onClick={() => setIsCollapsed(!isCollapsed)}
          style={{ width: "40px", height: "40px" }}
        >
          <i
            className={`fas ${isCollapsed ? "fa-angle-right" : "fa-angle-left"} text-white`}
          ></i>
        </button>
      </div>

      <style jsx>{`
        .sidebar.toggled .nav-item .nav-link {
          text-align: center;
          width: 100%;
          padding: 0.75rem 0;
        }
        .sidebar.toggled .nav-item .nav-link i {
          margin-right: 0 !important;
        }
        .sidebar.toggled .sidebar-brand .sidebar-brand-text {
          display: none;
        }
      `}</style>
    </ul>
  );
}
