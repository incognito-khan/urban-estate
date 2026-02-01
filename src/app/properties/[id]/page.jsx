"use client";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "next/navigation";
import { getProperty } from "@/redux/slices/propertySlice";
import { addLead } from "@/redux/slices/leadSlice";
import { showError } from "@/lib/toast";
import TopTitle from "@/components/TopTitle";

export default function PropertiesDetails() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { property, loading } = useSelector((state) => state.property);
  const { loading: leadLoading } = useSelector((state) => state.lead);

  const [mainImage, setMainImage] = useState("");
  const [leadForm, setLeadForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  useEffect(() => {
    if (id) {
      dispatch(getProperty(id));
    }
  }, [id, dispatch]);

  useEffect(() => {
    if (property?.images?.length) {
      setMainImage(property.images[0]);
    }
  }, [property]);

  const handleLeadChange = (e) => {
    setLeadForm({ ...leadForm, [e.target.name]: e.target.value });
  };

  const handleLeadSubmit = async (e) => {
    e.preventDefault();
    if (!leadForm.name || !leadForm.phone) {
      showError("Name and Phone are required");
      return;
    }
    await dispatch(addLead({ ...leadForm, propertyId: id }));
    setLeadForm({ name: "", email: "", phone: "", message: "" });
  };

  if (loading && !property) {
    return (
      <div className="vh-100 d-flex justify-content-center align-items-center bg-white">
        <div className="spinner-border text-primary" />
      </div>
    );
  }

  if (!property && !loading) {
    return (
      <div className="vh-100 d-flex justify-content-center align-items-center bg-white">
        <h3 className="fw-bold text-slate-800">Property not found</h3>
      </div>
    );
  }

  return (
    <div className="premium-light-theme min-vh-100 bg-white pt-5 mt-5">
      <TopTitle
        title={
          property
            ? `${property.title} | UrbanEstate`
            : "Property Details | UrbanEstate"
        }
      />
      <main>
        <section className="py-5">
          <div className="container">
            {/* Title & Location Header */}
            <div className="mb-4">
              <div className="d-flex align-items-center gap-2 mb-2">
                <span
                  className={`badge px-3 py-2 rounded-2 fw-bold text-uppercase ${property.listingType === "RENT" ? "bg-info-soft text-info" : "bg-primary-soft text-primary"}`}
                  style={{ fontSize: "0.7rem" }}
                >
                  {property.listingType === "RENT" ? "For Rent" : "For Sale"}
                </span>
                <span
                  className="badge bg-success-soft text-success px-3 py-2 rounded-2 fw-bold text-uppercase"
                  style={{ fontSize: "0.7rem" }}
                >
                  {property.status}
                </span>
              </div>
              <h1 className="display-5 fw-800 text-slate-900 mb-2">
                {property.title}
              </h1>
              <p className="lead text-slate-500 d-flex align-items-center gap-2">
                <i className="bi bi-geo-alt-fill text-primary"></i>
                {property.location}
              </p>
            </div>

            <div className="row g-5">
              {/* Left Column: Gallery & Details */}
              <div className="col-lg-8">
                {/* Modern Gallery */}
                <div className="gallery-container overflow-hidden mb-5 bg-light">
                  <div
                    className="main-viewport position-relative rounded-4 overflow-hidden shadow-sm"
                    style={{ height: "550px" }}
                  >
                    <img
                      src={mainImage || "/assets/img/placeholder.jpg"}
                      alt={property.title}
                      className="w-100 h-100 object-fit-cover"
                    />
                    {/* Minimal Overlay instead of half-black */}
                    <div className="position-absolute top-0 start-0 m-4">
                      <div
                        className="glass-pill px-3 py-2 rounded-pill shadow-sm d-flex align-items-center gap-2"
                        style={{
                          background: "rgba(255,255,255,0.8)",
                          backdropFilter: "blur(10px)",
                        }}
                      >
                        <i className="bi bi-camera-fill text-primary"></i>
                        <span className="fw-bold text-dark small">
                          {property.images?.length || 0} Photos
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="thumbs-row d-flex gap-3 p-3 overflow-auto border-top bg-white">
                    {property.images?.map((img, idx) => (
                      <div
                        key={idx}
                        className={`thumb-card rounded-3 overflow-hidden border-2 transition-all ${mainImage === img ? "border-primary shadow-sm" : "border-transparent opacity-60"}`}
                        style={{
                          width: "100px",
                          height: "70px",
                          minWidth: "100px",
                          cursor: "pointer",
                        }}
                        onClick={() => setMainImage(img)}
                      >
                        <img
                          src={img}
                          className="w-100 h-100 object-fit-cover"
                          alt={`property-${idx}`}
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Property Description */}
                <div className="description-card p-5 rounded-4 border bg-white mb-5 shadow-sm">
                  <h3 className="fw-800 text-slate-900 mb-4 border-start border-primary border-4 ps-3">
                    Property Description
                  </h3>
                  <div className="text-slate-600 fs-5 lh-lg">
                    {property.description ? (
                      <div className="whitespace-pre-wrap">
                        {property.description}
                      </div>
                    ) : (
                      <p>
                        Welcome to this prestigious {property.type} located in
                        the heart of {property.location}. This property offers a
                        refined living experience with modern architecture and
                        premium finishes throughout.
                      </p>
                    )}
                  </div>
                </div>

                {/* Key Features Grid */}
                <div className="row g-4 mb-5">
                  {[
                    {
                      label: "Type",
                      value: property.type,
                      icon: "bi-layers",
                      color: "primary",
                    },
                    {
                      label: "Status",
                      value: property.status,
                      icon: "bi-shield-check",
                      color: "success",
                    },
                    {
                      label: "Bedrooms",
                      value: `${property.beds || 0} ${property.beds === 1 ? "Bed" : "Beds"}`,
                      icon: "bi-door-open",
                      color: "info",
                    },
                    {
                      label: "Bathrooms",
                      value: `${property.baths || 0} ${property.baths === 1 ? "Bath" : "Baths"}`,
                      icon: "bi-droplet",
                      color: "warning",
                    },
                    {
                      label: "Sqft",
                      value: `${property.sqft?.toLocaleString() || 0} sqft`,
                      icon: "bi-aspect-ratio",
                      color: "secondary",
                    },
                    {
                      label: "Location",
                      value: property.location?.split(",")[0],
                      icon: "bi-geo",
                      color: "danger",
                    },
                  ].map((feat, i) => (
                    <div className="col-md-4" key={i}>
                      <div className="feat-box p-4 rounded-4 border bg-white text-center shadow-hover">
                        <div
                          className={`icon-circle-light mb-3 mx-auto bg-${feat.color}-soft text-${feat.color}`}
                        >
                          <i className={`bi ${feat.icon}`}></i>
                        </div>
                        <h6 className="text-slate-500 small uppercase fw-bold mb-1">
                          {feat.label}
                        </h6>
                        <h5 className="text-slate-900 fw-800 mb-0 text-capitalize">
                          {feat.value}
                        </h5>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Amenities Section */}
                {(property.garage ||
                  property.swimmingPool ||
                  property.balcony ||
                  property.garden) && (
                  <div className="amenities-card p-5 rounded-4 border bg-white mb-5 shadow-sm">
                    <h3 className="fw-800 text-slate-900 mb-4 border-start border-primary border-4 ps-3">
                      Amenities
                    </h3>
                    <div className="row g-4">
                      {property.garage && (
                        <div className="col-md-6 col-lg-3">
                          <div className="d-flex align-items-center gap-3 p-3 rounded-3 bg-light border">
                            <i className="bi bi-p-square-fill text-primary fs-4"></i>
                            <span className="fw-bold">Garage</span>
                          </div>
                        </div>
                      )}
                      {property.swimmingPool && (
                        <div className="col-md-6 col-lg-3">
                          <div className="d-flex align-items-center gap-3 p-3 rounded-3 bg-light border">
                            <i className="bi bi-water text-primary fs-4"></i>
                            <span className="fw-bold">Pool</span>
                          </div>
                        </div>
                      )}
                      {property.balcony && (
                        <div className="col-md-6 col-lg-3">
                          <div className="d-flex align-items-center gap-3 p-3 rounded-3 bg-light border">
                            <i className="bi bi-window-sidebar text-primary fs-4"></i>
                            <span className="fw-bold">Balcony</span>
                          </div>
                        </div>
                      )}
                      {property.garden && (
                        <div className="col-md-6 col-lg-3">
                          <div className="d-flex align-items-center gap-3 p-3 rounded-3 bg-light border">
                            <i className="bi bi-tree-fill text-primary fs-4"></i>
                            <span className="fw-bold">Garden</span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>

              {/* Right Column: Sidebar */}
              <div className="col-lg-4">
                <div className="sticky-top" style={{ top: "120px" }}>
                  {/* Pricing Card */}
                  <div className="price-card p-4 rounded-4 border bg-white shadow-lg mb-4 text-center">
                    <div className="text-slate-500 small uppercase fw-bold mb-1">
                      Listed Price
                    </div>
                    <h2 className="display-6 fw-900 text-primary mb-0">
                      PKR {property.price?.toLocaleString()}
                    </h2>
                  </div>

                  {/* Lead Form */}
                  <div className="form-card p-4 rounded-4 border bg-white shadow-md">
                    <h4 className="fw-800 text-slate-900 mb-4 text-center">
                      Schedule a Tour
                    </h4>
                    <form onSubmit={handleLeadSubmit}>
                      <div className="mb-3">
                        <label className="form-label small fw-bold text-slate-700">
                          Full Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          className="form-control-premium"
                          placeholder="John Doe"
                          value={leadForm.name}
                          onChange={handleLeadChange}
                          required
                        />
                      </div>
                      <div className="mb-3">
                        <label className="form-label small fw-bold text-slate-700">
                          Email (Optional)
                        </label>
                        <input
                          type="email"
                          name="email"
                          className="form-control-premium"
                          placeholder="john@example.com"
                          value={leadForm.email}
                          onChange={handleLeadChange}
                        />
                      </div>
                      <div className="mb-3">
                        <label className="form-label small fw-bold text-slate-700">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          className="form-control-premium"
                          placeholder="+92 300 1234567"
                          value={leadForm.phone}
                          onChange={handleLeadChange}
                          required
                        />
                      </div>
                      <div className="mb-4">
                        <label className="form-label small fw-bold text-slate-700">
                          Message
                        </label>
                        <textarea
                          name="message"
                          className="form-control-premium"
                          rows="3"
                          placeholder="I'm interested in viewing this property..."
                          value={leadForm.message}
                          onChange={handleLeadChange}
                        ></textarea>
                      </div>
                      <button
                        type="submit"
                        className="btn btn-primary w-100 py-3 fw-bold rounded-3 shadow-sm"
                        disabled={leadLoading}
                      >
                        {leadLoading ? (
                          <span className="spinner-border spinner-border-sm me-2" />
                        ) : (
                          <i className="bi bi-calendar-check me-2" />
                        )}
                        Submit Request
                      </button>
                    </form>
                  </div>

                  {/* Confidence Badge */}
                  <div className="mt-4 p-3 rounded-4 border border-dashed text-center bg-light">
                    <p className="small text-slate-500 m-0">
                      <i className="bi bi-info-circle me-1"></i> A member of our
                      team will call you within 24 hours.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <style jsx>{`
        .premium-light-theme {
          font-family: "Outfit", sans-serif;
          color: #334155;
        }

        .fw-900 {
          font-weight: 900;
        }
        .fw-800 {
          font-weight: 800;
        }
        .fw-300 {
          font-weight: 300;
        }

        .header-clean {
          height: 80px;
          z-index: 1050;
        }

        .menu-item {
          text-decoration: none;
          color: #64748b;
          font-weight: 600;
          font-size: 0.95rem;
          transition: color 0.2s;
        }

        .menu-item:hover,
        .menu-item.active {
          color: #2563eb;
        }

        .text-slate-900 {
          color: #0f172a;
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
        .text-slate-400 {
          color: #94a3b8;
        }

        .bg-primary-soft {
          background-color: rgba(37, 99, 235, 0.08);
        }
        .bg-success-soft {
          background-color: rgba(34, 197, 94, 0.08);
        }
        .bg-danger-soft {
          background-color: rgba(239, 68, 68, 0.08);
        }

        .form-control-premium {
          display: block;
          width: 100%;
          padding: 12px 16px;
          font-size: 1rem;
          font-weight: 400;
          line-height: 1.5;
          color: #1e293b;
          background-color: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          transition: all 0.2s;
        }

        .form-control-premium:focus {
          border-color: #2563eb;
          background-color: #fff;
          outline: 0;
          box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.1);
        }

        .icon-circle-light {
          width: 50px;
          height: 50px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.25rem;
        }

        .shadow-hover {
          transition: all 0.3s;
        }

        .shadow-hover:hover {
          transform: translateY(-5px);
          shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
        }

        .footer-icon {
          color: #94a3b8;
          font-size: 1.2rem;
          transition: color 0.2s;
        }

        .footer-icon:hover {
          color: #2563eb;
        }

        .rounded-4 {
          border-radius: 1.25rem !important;
        }
        .rounded-5 {
          border-radius: 2rem !important;
        }
      `}</style>
    </div>
  );
}
