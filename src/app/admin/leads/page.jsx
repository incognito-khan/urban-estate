"use client";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLeads, updateLeadStatus, delLead } from "@/redux/slices/leadSlice";
import { format } from "date-fns";
import Link from "next/link";
import ConfirmDialog from "@/components/ConfirmDialog";
import TopTitle from "@/components/TopTitle";

export default function LeadsPage() {
  const dispatch = useDispatch();
  const { leads, loading } = useSelector((state) => state.lead);

  const [confirmModal, setConfirmModal] = useState({
    isOpen: false,
    id: null,
  });

  useEffect(() => {
    dispatch(getLeads());
  }, [dispatch]);

  const handleStatusUpdate = (id, status) => {
    dispatch(updateLeadStatus({ id, status }));
  };

  const handleDelete = () => {
    if (confirmModal.id) {
      dispatch(delLead(confirmModal.id));
    }
  };

  return (
    <div className="container-fluid py-4">
      <TopTitle title="Admin: Leads | UrbanEstate" />
      {/* Page Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h1 className="h3 mb-0 text-slate-800 fw-bold">Lead Management</h1>
          <p className="text-muted small mb-0">
            Manage and track property inquiries from potential clients.
          </p>
        </div>
        <div className="badge bg-primary-soft text-primary px-3 py-2 rounded-3 border">
          <i className="bi bi-person-lines-fill me-2"></i>
          {leads.length} Total Leads
        </div>
      </div>

      {/* Leads Table Card */}
      <div className="card border-0 shadow-sm rounded-4 overflow-hidden">
        <div className="card-header bg-white border-bottom py-3">
          <div className="d-flex align-items-center">
            <h5 className="card-title mb-0 fw-bold text-slate-700">
              Recent Inquiries
            </h5>
          </div>
        </div>
        <div className="card-body p-0">
          <div className="table-responsive">
            <table className="table table-hover align-middle mb-0">
              <thead className="bg-light text-slate-500 small uppercase fw-bold">
                <tr>
                  <th className="ps-4">Client Detail</th>
                  <th>Property</th>
                  <th>Message</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody className="border-top-0">
                {loading && leads.length === 0 ? (
                  <tr>
                    <td colSpan="5" className="text-center py-5">
                      <div
                        className="spinner-border text-primary"
                        role="status"
                      >
                        <span className="visually-hidden">Loading...</span>
                      </div>
                    </td>
                  </tr>
                ) : leads.length === 0 ? (
                  <tr>
                    <td colSpan="5" className="text-center py-5 text-muted">
                      No leads found at the moment.
                    </td>
                  </tr>
                ) : (
                  leads.map((lead) => (
                    <tr key={lead.id}>
                      <td className="ps-4">
                        <div className="d-flex align-items-center">
                          <div className="avatar-circle me-3 bg-primary-soft text-primary">
                            {lead.name.charAt(0).toUpperCase()}
                          </div>
                          <div>
                            <div className="fw-bold text-slate-800">
                              {lead.name}
                            </div>
                            <div className="small text-muted d-flex align-items-center gap-2">
                              <span>
                                <i className="bi bi-telephone"></i> {lead.phone}
                              </span>
                              {lead.email && (
                                <>
                                  <span className="text-silver">|</span>
                                  <span>
                                    <i className="bi bi-envelope"></i>{" "}
                                    {lead.email}
                                  </span>
                                </>
                              )}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td>
                        {lead.property ? (
                          <Link
                            href={`/admin/properties/view/${lead.property.id}`}
                            className="text-decoration-none"
                          >
                            <div className="text-primary fw-600 small">
                              {lead.property.title}
                            </div>
                            <div className="text-muted extra-small">
                              ID: {lead.property.id.substring(0, 8)}...
                            </div>
                          </Link>
                        ) : (
                          <span className="text-danger small">
                            Property Removed
                          </span>
                        )}
                      </td>
                      <td>
                        <div
                          className="text-slate-600 small text-truncate-2"
                          style={{ maxWidth: "250px" }}
                          title={lead.message}
                        >
                          {lead.message || "No message provided."}
                        </div>
                        <div className="extra-small text-muted mt-1">
                          {format(new Date(lead.createdAt), "MMM d, h:mm a")}
                        </div>
                      </td>
                      <td>
                        <select
                          className={`form-select form-select-sm border-0 rounded-pill px-3 fw-bold ${
                            lead.status === "new"
                              ? "bg-primary-soft text-primary"
                              : lead.status === "contact"
                                ? "bg-info-soft text-info"
                                : "bg-success-soft text-success"
                          }`}
                          value={lead.status}
                          onChange={(e) =>
                            handleStatusUpdate(lead.id, e.target.value)
                          }
                          style={{ width: "130px" }}
                        >
                          <option value="new">● New</option>
                          <option value="contact">● Contacted</option>
                          <option value="sold">● Sold</option>
                        </select>
                      </td>
                      <td>
                        <div className="d-flex gap-2">
                          <button
                            className="btn btn-sm btn-outline-danger border-0 rounded-circle"
                            onClick={() =>
                              setConfirmModal({ isOpen: true, id: lead.id })
                            }
                            title="Delete Lead"
                          >
                            <i className="bi bi-trash3"></i>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <ConfirmDialog
        isOpen={confirmModal.isOpen}
        title="Delete Lead"
        message="Are you sure you want to remove this inquiry? This action cannot be undone."
        onConfirm={handleDelete}
        onCancel={() => setConfirmModal({ isOpen: false, id: null })}
      />

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
        .extra-small {
          font-size: 0.75rem;
        }
        .text-silver {
          color: #e2e8f0;
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

        .avatar-circle {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 1.1rem;
        }

        .text-truncate-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .shadow-sm {
          box-shadow:
            0 1px 3px 0 rgba(0, 0, 0, 0.1),
            0 1px 2px 0 rgba(0, 0, 0, 0.06) !important;
        }

        .table-hover tbody tr:hover {
          background-color: rgba(37, 99, 235, 0.02);
        }

        .form-select-sm {
          font-size: 0.75rem;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
}
