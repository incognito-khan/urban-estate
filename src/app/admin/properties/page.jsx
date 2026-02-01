"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
  getProperties,
  delProperty,
  updateProperty,
} from "@/redux/slices/propertySlice";
import { useDispatch, useSelector } from "react-redux";
import { format } from "date-fns";
import TopTitle from "@/components/TopTitle";

export default function PropertiesPage() {
  const dispatch = useDispatch();
  const { properties, loading } = useSelector((state) => state.property);

  const gettingAllProperties = async () => {
    await dispatch(getProperties());
  };

  useEffect(() => {
    gettingAllProperties();
  }, []);

  console.log(properties, "properties");

  const formatDate = (date) => {
    return format(new Date(date), "yyyy-MM-dd");
  };

  const deleteProperty = async (id) => {
    await dispatch(delProperty(id));
  };

  const handleToggleFeatured = async (property) => {
    await dispatch(
      updateProperty({
        id: property.id,
        formData: { isFeatured: !property.isFeatured },
      }),
    );
  };

  if (loading) {
    return (
      <div
        className="position-fixed top-0 start-0 vw-100 vh-100 d-flex justify-content-center align-items-center"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.4)",
          zIndex: 9999,
        }}
      >
        <div className="spinner-border text-light" />
      </div>
    );
  }

  return (
    <div className="container-fluid py-4">
      <TopTitle title="Admin: Properties | UrbanEstate" />
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="h3 mb-0">Properties</h1>
        <Link href="/admin/properties/new" className="btn btn-primary">
          + Add Property
        </Link>
      </div>

      {/* Properties Table */}
      <div className="card shadow-sm">
        <div className="card-body p-0">
          <table className="table mb-0">
            <thead className="table-light">
              <tr>
                <th>Title</th>
                <th>Location</th>
                <th>Type</th>
                <th>Price</th>
                <th>Status</th>
                <th>Featured</th>
                <th>Created</th>
                <th></th>
              </tr>
            </thead>

            <tbody>
              {properties?.map((property) => (
                <tr key={property.id}>
                  <td>{property.title}</td>
                  <td>{property.location}</td>
                  <td>{property.type}</td>
                  <td>{property.price}</td>
                  <td>{property.status}</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-link p-0 text-decoration-none"
                      onClick={() => handleToggleFeatured(property)}
                      title={
                        property.isFeatured
                          ? "Unfeature Property"
                          : "Feature Property"
                      }
                    >
                      {property.isFeatured ? (
                        <span className="badge bg-warning text-dark">
                          <i className="bi bi-star-fill me-1"></i> Featured
                        </span>
                      ) : (
                        <span className="text-muted">
                          <i className="bi bi-star me-1"></i> -
                        </span>
                      )}
                    </button>
                  </td>
                  <td>{formatDate(property.createdAt)}</td>
                  <td>
                    <Link
                      href={`/admin/properties/view/${property.id}`}
                      className="btn btn-sm btn-outline-primary me-2"
                    >
                      View
                    </Link>
                    <Link
                      href={`/admin/properties/${property.id}`}
                      className="btn btn-sm btn-outline-secondary me-2"
                    >
                      Edit
                    </Link>
                    <button
                      className="btn btn-sm btn-outline-danger"
                      onClick={() => deleteProperty(property.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
