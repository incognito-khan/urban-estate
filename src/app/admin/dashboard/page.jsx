"use client";

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDashboardStats } from "@/redux/slices/dashboardSlice";
import { format } from "date-fns";
import Link from "next/link";

export default function Dashboard() {
  const dispatch = useDispatch();
  const { stats, recentLeads, statusSummary, loading } = useSelector(
    (state) => state.dashboard,
  );

  useEffect(() => {
    dispatch(fetchDashboardStats());
  }, [dispatch]);

  if (loading && stats.totalLeads === 0) {
    return (
      <div className="container-fluid py-4 text-center">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading Dashboard...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="container-fluid py-4">
      {/* Page Title */}
      <div className="mb-4 d-flex justify-content-between align-items-center">
        <div>
          <h1 className="h3 mb-0 text-slate-800 fw-bold">
            Executive Dashboard
          </h1>
          <p className="text-muted small mb-0">
            Overview of your real estate business performance.
          </p>
        </div>
        <button
          className="btn btn-white shadow-sm btn-sm border"
          onClick={() => dispatch(fetchDashboardStats())}
        >
          <i className="bi bi-arrow-clockwise me-1"></i> Refresh
        </button>
      </div>

      {/* Stats Row */}
      <div className="row g-4 mb-4">
        <StatCard
          title="Total Leads"
          value={stats.totalLeads}
          icon="bi-people"
          color="primary"
        />
        <StatCard
          title="Total Properties"
          value={stats.totalProperties}
          icon="bi-building"
          color="info"
        />
        <StatCard
          title="New Inquiries"
          value={stats.newLeads}
          icon="bi-envelope-paper"
          color="warning"
        />
        <StatCard
          title="Closed Deals"
          value={stats.convertedLeads}
          icon="bi-check-circle"
          color="success"
        />
      </div>

      {/* Content Row */}
      <div className="row g-4">
        {/* Recent Leads */}
        <div className="col-lg-8">
          <div className="card shadow-sm border-0 rounded-4 overflow-hidden">
            <div className="card-header bg-white border-bottom py-3 d-flex justify-content-between align-items-center">
              <h6 className="m-0 fw-bold text-slate-700">
                Recent Customer Inquiries
              </h6>
              <Link
                href="/admin/leads"
                className="btn btn-sm btn-link text-decoration-none"
              >
                View All
              </Link>
            </div>
            <div className="card-body p-0">
              <div className="table-responsive">
                <table className="table hover-table align-middle mb-0">
                  <thead className="bg-light text-slate-500 extra-small fw-bold uppercase">
                    <tr>
                      <th className="ps-4">Client</th>
                      <th>Email</th>
                      <th>Status</th>
                      <th>Property</th>
                      <th className="pe-4">Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentLeads.length === 0 ? (
                      <tr>
                        <td colSpan="5" className="text-center py-4 text-muted">
                          No recent leads found.
                        </td>
                      </tr>
                    ) : (
                      recentLeads.map((lead) => (
                        <tr key={lead.id}>
                          <td className="ps-4 fs-6 fw-600 text-slate-800">
                            {lead.name}
                          </td>
                          <td className="text-muted small">
                            {lead.email || lead.phone}
                          </td>
                          <td>
                            <span
                              className={`badge rounded-pill ${
                                lead.status === "new"
                                  ? "bg-primary-soft text-primary"
                                  : lead.status === "contact"
                                    ? "bg-info-soft text-info"
                                    : "bg-success-soft text-success"
                              } px-3`}
                            >
                              {lead.status === "contact"
                                ? "Contacted"
                                : lead.status === "sold"
                                  ? "Sold"
                                  : "New"}
                            </span>
                          </td>
                          <td className="text-primary small fw-500">
                            {lead.property?.title || "Unknown"}
                          </td>
                          <td className="pe-4 text-muted extra-small">
                            {format(new Date(lead.createdAt), "MMM d, p")}
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        {/* Status Summary */}
        <div className="col-lg-4">
          <div className="card shadow-sm border-0 rounded-4 overflow-hidden">
            <div className="card-header bg-white border-bottom py-3">
              <h6 className="m-0 fw-bold text-slate-700">
                Lead Status Insight
              </h6>
            </div>
            <div className="card-body">
              {statusSummary.map((item, idx) => {
                const percentage =
                  stats.totalLeads > 0
                    ? (item.count / stats.totalLeads) * 100
                    : 0;

                return (
                  <div key={idx} className="mb-4">
                    <div className="d-flex justify-content-between mb-1">
                      <span className="small fw-600 text-slate-600">
                        {item.label}
                      </span>
                      <span className="small fw-bold text-slate-800">
                        {item.count}
                      </span>
                    </div>
                    <div
                      className="progress rounded-pill"
                      style={{ height: "8px" }}
                    >
                      <div
                        className={`progress-bar bg-${item.color}`}
                        role="progressbar"
                        style={{ width: `${percentage}%` }}
                        aria-valuenow={percentage}
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                );
              })}

              <div className="mt-4 p-3 bg-light rounded-3">
                <div className="d-flex align-items-center">
                  <div className="flex-shrink-0">
                    <i className="bi bi-info-circle text-primary fs-4"></i>
                  </div>
                  <div className="ms-3">
                    <h6 className="mb-0 small fw-bold">Conversion Tip</h6>
                    <p className="extra-small text-muted mb-0">
                      Follow up with new leads within 24 hours to increase
                      conversion rate by 60%.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .text-slate-800 {
          color: #1e293b;
        }
        .text-slate-700 {
          color: #334155;
        }
        .text-slate-600 {
          color: #475569;
        }
        .text-slate-500 {
          color: #64748b;
        }
        .fw-600 {
          font-weight: 600;
        }
        .fw-500 {
          font-weight: 500;
        }
        .extra-small {
          font-size: 0.75rem;
        }
        .bg-primary-soft {
          background-color: rgba(37, 99, 235, 0.08);
        }
        .bg-info-soft {
          background-color: rgba(14, 165, 233, 0.08);
        }
        .bg-success-soft {
          background-color: rgba(34, 197, 94, 0.08);
        }
        .hover-table tr:hover {
          background-color: #f8fafc;
        }
        .uppercase {
          text-transform: uppercase;
          letter-spacing: 0.025em;
        }
        .btn-white {
          background: white;
          border-color: #e2e8f0;
          color: #475569;
        }
        .btn-white:hover {
          background: #f8fafc;
        }
      `}</style>
    </div>
  );
}

function StatCard({ title, value, icon, color }) {
  return (
    <div className="col-xl-3 col-md-6">
      <div
        className="card shadow-sm border-0 rounded-4 overflow-hidden border-start border-4"
        style={{ borderColor: `var(--bs-${color}) !important` }}
      >
        <div className="card-body p-4">
          <div className="d-flex align-items-center">
            <div
              className={`p-3 rounded-3 bg-${color}-soft text-${color} me-3`}
            >
              <i className={`bi ${icon} fs-4`}></i>
            </div>
            <div>
              <div className="text-slate-500 extra-small fw-bold uppercase mb-1">
                {title}
              </div>
              <div className="h3 mb-0 fw-800 text-slate-800">{value}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
