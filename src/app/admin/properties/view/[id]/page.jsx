"use client";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useRouter } from "next/navigation";
import { getProperty } from "@/redux/slices/propertySlice";
import Link from "next/link";
import { format } from "date-fns";
import api from "@/lib/axios";
import { showSuccess, showError } from "@/lib/toast";
import TopTitle from "@/components/TopTitle";

export default function AdminPropertyView() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const router = useRouter();
  const { property, loading } = useSelector((state) => state.property);
  const [localLeads, setLocalLeads] = useState([]);

  useEffect(() => {
    if (id) {
      dispatch(getProperty(id));
    }
  }, [id, dispatch]);

  useEffect(() => {
    if (property?.leads) {
      setLocalLeads(property.leads);
    }
  }, [property]);

  const updateLeadStatus = async (leadId, newStatus) => {
    try {
      const res = await api.patch("/lead", { id: leadId, status: newStatus });
      if (res.data.success) {
        showSuccess("Lead status updated");
        setLocalLeads((prev) =>
          prev.map((l) => (l.id === leadId ? { ...l, status: newStatus } : l)),
        );
      }
    } catch (err) {
      showError("Failed to update status");
    }
  };

  const [selectedImage, setSelectedImage] = useState(null);

  if (loading && !property) {
    return (
      <div className="container py-5 text-center">
        <div className="spinner-border text-primary" />
      </div>
    );
  }

  if (!property) {
    return (
      <div className="container py-5 text-center">
        <h3>Property not found</h3>
        <Link href="/admin/properties" className="btn btn-primary mt-3">
          Back to List
        </Link>
      </div>
    );
  }

  return (
    <div className="container-fluid py-4 position-relative">
      <TopTitle
        title={
          property
            ? `Admin: View ${property.title} | UrbanEstate`
            : "Admin: View Property | UrbanEstate"
        }
      />
      {/* Image Popup Modal */}
      {selectedImage && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
          style={{
            backgroundColor: "rgba(0,0,0,0.85)",
            zIndex: 9999,
            backdropFilter: "blur(10px)",
            cursor: "zoom-out",
          }}
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="position-relative"
            style={{ maxWidth: "90%", maxHeight: "90%" }}
          >
            <img
              src={selectedImage}
              className="img-fluid rounded-4 shadow-lg border border-secondary"
              alt="full size"
              style={{ maxHeight: "85vh", objectFit: "contain" }}
            />
            <button
              className="btn btn-dark rounded-circle position-absolute top-0 end-0 m-3 shadow"
              style={{ width: "40px", height: "40px", padding: 0 }}
              onClick={() => setSelectedImage(null)}
            >
              <i className="bi bi-x-lg"></i>
            </button>
          </div>
        </div>
      )}

      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h1 className="h3 mb-0">{property.title}</h1>
          <p className="text-muted">
            <i className="bi bi-geo-alt me-1"></i>
            {property.location}
          </p>
        </div>
        <div className="d-flex gap-2">
          <Link
            href={`/properties/${property.id}`}
            target="_blank"
            className="btn btn-outline-info"
          >
            <i className="bi bi-eye me-1"></i> Public View
          </Link>
          <Link
            href={`/admin/properties/${property.id}`}
            className="btn btn-warning"
          >
            <i className="bi bi-pencil me-1"></i> Edit Property
          </Link>
          <Link href="/admin/properties" className="btn btn-secondary">
            Back to List
          </Link>
        </div>
      </div>

      <div className="row">
        {/* Statistics and Info */}
        <div className="col-lg-4">
          <div className="card shadow-sm mb-4">
            <div className="card-header bg-white">
              <h5 className="card-title mb-0">Overview</h5>
            </div>
            <div className="card-body">
              <div className="mb-3">
                <label className="text-muted d-block small uppercase fw-bold">
                  Price
                </label>
                <div className="h4 text-primary">
                  PKR {property.price?.toLocaleString()}
                </div>
              </div>
              <div className="mb-3">
                <label className="text-muted d-block small uppercase fw-bold">
                  Status
                </label>
                <span
                  className={`badge ${property.status === "available" ? "bg-success" : "bg-danger"} text-capitalize`}
                >
                  {property.status}
                </span>
              </div>
              <div className="mb-3">
                <label className="text-muted d-block small uppercase fw-bold">
                  Type
                </label>
                <div className="fw-bold">{property.type}</div>
              </div>
              <div className="mb-3">
                <label className="text-muted d-block small uppercase fw-bold">
                  Created At
                </label>
                <div>
                  {property.createdAt
                    ? format(new Date(property.createdAt), "PPP")
                    : "N/A"}
                </div>
              </div>
              <div className="mb-0">
                <label className="text-muted d-block small uppercase fw-bold">
                  Description
                </label>
                <div className="small text-slate-600">
                  {property.description || "No description provided."}
                </div>
              </div>
            </div>
          </div>

          <div className="card shadow-sm mb-4">
            <div className="card-header bg-white">
              <h5 className="card-title mb-0">Images</h5>
            </div>
            <div className="card-body">
              <div className="row g-2">
                {property.images?.map((img, idx) => (
                  <div key={idx} className="col-4">
                    <img
                      src={img}
                      className="img-fluid rounded border cursor-pointer hover-opacity"
                      alt="property"
                      style={{
                        height: "60px",
                        width: "100%",
                        objectFit: "cover",
                        cursor: "pointer",
                      }}
                      onClick={() => setSelectedImage(img)}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Lead Management */}
        <div className="col-lg-8">
          <div className="card shadow-sm">
            <div className="card-header bg-white d-flex justify-content-between align-items-center">
              <h5 className="card-title mb-0">
                Property Leads ({localLeads.length})
              </h5>
              <Link href="/admin/leads" className="btn btn-sm btn-link">
                View All Leads
              </Link>
            </div>
            <div className="card-body p-0">
              <div className="table-responsive">
                <table className="table table-hover mb-0">
                  <thead className="table-light">
                    <tr>
                      <th>Name</th>
                      <th>Contact</th>
                      <th>Message</th>
                      <th>Status</th>
                      <th>Update Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {localLeads.length === 0 ? (
                      <tr>
                        <td colSpan="5" className="text-center py-4 text-muted">
                          No leads found for this property.
                        </td>
                      </tr>
                    ) : (
                      localLeads.map((lead) => (
                        <tr key={lead.id}>
                          <td>
                            <div className="fw-bold">{lead.name}</div>
                            <small className="text-muted">
                              {format(new Date(lead.createdAt), "MMM d, yyyy")}
                            </small>
                          </td>
                          <td>
                            <div>{lead.phone}</div>
                            <div className="small text-muted">{lead.email}</div>
                          </td>
                          <td style={{ maxWidth: "200px" }}>
                            <div className="text-truncate" title={lead.message}>
                              {lead.message}
                            </div>
                          </td>
                          <td>
                            <span
                              className={`badge ${lead.status === "new" ? "bg-primary" : lead.status === "contact" ? "bg-info" : "bg-success"}`}
                            >
                              {lead.status === "contact"
                                ? "Contacted"
                                : lead.status}
                            </span>
                          </td>
                          <td>
                            <select
                              className="form-select form-select-sm"
                              value={lead.status}
                              onChange={(e) =>
                                updateLeadStatus(lead.id, e.target.value)
                              }
                            >
                              <option value="new">New</option>
                              <option value="contact">Contacted</option>
                              <option value="sold">Sold</option>
                            </select>
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
      </div>
    </div>
  );
}
