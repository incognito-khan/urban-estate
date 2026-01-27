"use client";

import React from "react";

const ConfirmDialog = ({
  isOpen,
  title,
  message,
  onConfirm,
  onCancel,
  type = "danger",
}) => {
  if (!isOpen) return null;

  return (
    <div
      className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
      style={{
        zIndex: 9999,
        backgroundColor: "rgba(15, 23, 42, 0.4)",
        backdropFilter: "blur(8px)",
        animation: "fadeIn 0.2s ease-out",
      }}
    >
      <div
        className="bg-white rounded-4 shadow-xl border overflow-hidden"
        style={{
          maxWidth: "400px",
          width: "90%",
          animation: "slideUp 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
        }}
      >
        <div className="p-4 text-center">
          <div
            className={`mx-auto mb-3 rounded-circle d-flex align-items-center justify-content-center bg-${type}-soft text-${type}`}
            style={{ width: "60px", height: "60px", fontSize: "1.5rem" }}
          >
            <i
              className={`bi ${type === "danger" ? "bi-exclamation-triangle" : "bi-question-circle"}`}
            ></i>
          </div>
          <h4 className="fw-800 text-slate-900 mb-2">{title}</h4>
          <p className="text-slate-500 mb-0 px-2">{message}</p>
        </div>
        <div className="bg-light p-3 d-flex gap-2">
          <button
            className="btn btn-light border flex-grow-1 py-2 fw-bold text-slate-600 rounded-3"
            onClick={onCancel}
          >
            Cancel
          </button>
          <button
            className={`btn btn-${type} flex-grow-1 py-2 fw-bold rounded-3 shadow-sm`}
            onClick={() => {
              onConfirm();
              onCancel();
            }}
          >
            Confirm
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes slideUp {
          from {
            transform: translateY(20px) scale(0.95);
            opacity: 0;
          }
          to {
            transform: translateY(0) scale(1);
            opacity: 1;
          }
        }
        .bg-danger-soft {
          background-color: rgba(239, 68, 68, 0.1);
        }
        .bg-primary-soft {
          background-color: rgba(37, 99, 235, 0.1);
        }
        .text-slate-900 {
          color: #0f172a;
        }
        .text-slate-500 {
          color: #64748b;
        }
        .text-slate-600 {
          color: #475569;
        }
        .fw-800 {
          font-weight: 800;
        }
        .shadow-xl {
          box-shadow:
            0 20px 25px -5px rgba(0, 0, 0, 0.1),
            0 10px 10px -5px rgba(0, 0, 0, 0.04);
        }
      `}</style>
    </div>
  );
};

export default ConfirmDialog;
