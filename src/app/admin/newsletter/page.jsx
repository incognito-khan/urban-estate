"use client";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getNewsletters,
  deleteNewsletter,
} from "@/redux/slices/newsletterSlice";
import { format } from "date-fns";
import ConfirmDialog from "@/components/ConfirmDialog";
import TopTitle from "@/components/TopTitle";

export default function NewsletterPage() {
  const dispatch = useDispatch();
  const { subscribers, loading } = useSelector((state) => state.newsletter);

  const [confirmModal, setConfirmModal] = useState({
    isOpen: false,
    id: null,
  });

  useEffect(() => {
    dispatch(getNewsletters());
  }, [dispatch]);

  const handleDelete = () => {
    if (confirmModal.id) {
      dispatch(deleteNewsletter(confirmModal.id));
      setConfirmModal({ isOpen: false, id: null });
    }
  };

  return (
    <div className="container-fluid py-4">
      <TopTitle title="Admin: Newsletter | UrbanEstate" />
      {/* Page Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h1 className="h3 mb-0 text-slate-800 fw-bold">
            Newsletter Management
          </h1>
          <p className="text-muted small mb-0">
            View and manage your newsletter subscribers.
          </p>
        </div>
        <div className="badge bg-primary-soft text-primary px-3 py-2 rounded-3 border">
          <i className="bi bi-envelope-fill me-2"></i>
          {subscribers.length} Total Subscribers
        </div>
      </div>

      {/* Newsletter Table Card */}
      <div className="card border-0 shadow-sm rounded-4 overflow-hidden">
        <div className="card-header bg-white border-bottom py-3">
          <div className="d-flex align-items-center">
            <h5 className="card-title mb-0 fw-bold text-slate-700">
              Active Subscribers
            </h5>
          </div>
        </div>
        <div className="card-body p-0">
          <div className="table-responsive">
            <table className="table table-hover align-middle mb-0">
              <thead className="bg-light text-slate-500 small uppercase fw-bold">
                <tr>
                  <th className="ps-4">Subscriber Email</th>
                  <th>Subscription Date</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody className="border-top-0">
                {loading && subscribers.length === 0 ? (
                  <tr>
                    <td colSpan="3" className="text-center py-5">
                      <div
                        className="spinner-border text-primary"
                        role="status"
                      >
                        <span className="visually-hidden">Loading...</span>
                      </div>
                    </td>
                  </tr>
                ) : subscribers.length === 0 ? (
                  <tr>
                    <td colSpan="3" className="text-center py-5 text-muted">
                      No subscribers found at the moment.
                    </td>
                  </tr>
                ) : (
                  subscribers.map((subscriber) => (
                    <tr key={subscriber.id}>
                      <td className="ps-4">
                        <div className="d-flex align-items-center">
                          <div className="avatar-circle me-3 bg-primary-soft text-primary">
                            <i className="bi bi-envelope"></i>
                          </div>
                          <div className="fw-bold text-slate-800">
                            {subscriber.email}
                          </div>
                        </div>
                      </td>
                      <td>
                        <div className="text-slate-600 small">
                          {format(
                            new Date(subscriber.createdAt),
                            "MMM d, yyyy",
                          )}
                        </div>
                        <div className="extra-small text-muted mt-1">
                          {format(new Date(subscriber.createdAt), "h:mm a")}
                        </div>
                      </td>
                      <td>
                        <div className="d-flex gap-2">
                          <button
                            className="btn btn-sm btn-outline-danger border-0 rounded-circle"
                            onClick={() =>
                              setConfirmModal({
                                isOpen: true,
                                id: subscriber.id,
                              })
                            }
                            title="Remove Subscriber"
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
        title="Remove Subscriber"
        message="Are you sure you want to remove this email from the newsletter list? This action cannot be undone."
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

        .bg-primary-soft {
          background-color: rgba(37, 99, 235, 0.08);
        }

        .avatar-circle {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.1rem;
        }

        .shadow-sm {
          box-shadow:
            0 1px 3px 0 rgba(0, 0, 0, 0.1),
            0 1px 2px 0 rgba(0, 0, 0, 0.06) !important;
        }

        .table-hover tbody tr:hover {
          background-color: rgba(37, 99, 235, 0.02);
        }
      `}</style>
    </div>
  );
}
