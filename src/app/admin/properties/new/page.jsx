"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { uploadImage } from "@/redux/slices/uploadSlice";
import { addProperty } from "@/redux/slices/propertySlice";
import { showError } from "@/lib/toast";
import { slugify } from "@/lib/slugify";
import { useRouter } from "next/navigation";
import TopTitle from "@/components/TopTitle";

export default function AddPropertyPage() {
  const dispatch = useDispatch();
  const router = useRouter();
  const [form, setForm] = useState({
    title: "",
    slug: "",
    location: "",
    type: "House",
    listingType: "SALE",
    status: "available",
    price: "",
    description: "",
    beds: "",
    baths: "",
    sqft: "",
    isFeatured: false,
    garage: false,
    swimmingPool: false,
    balcony: false,
    garden: false,
  });

  const [images, setImages] = useState([]);
  // [{ url, loading }]

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (name === "title") {
      setForm((prev) => ({
        ...prev,
        title: value,
        slug: slugify(value),
      }));
    } else if (type === "checkbox") {
      setForm((prev) => ({ ...prev, [name]: checked }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  /**
   * MULTI IMAGE UPLOAD
   */
  const handleImageUpload = async (e) => {
    const files = Array.from(e.target.files);

    const placeholders = files.map((file) => ({
      preview: URL.createObjectURL(file),
      url: null,
      loading: true,
    }));

    // 1️⃣ Show all loaders immediately
    setImages((prev) => [...prev, ...placeholders]);

    // 2️⃣ Upload ONE BY ONE
    for (let i = 0; i < files.length; i++) {
      const formData = new FormData();
      formData.append("file", files[i]);

      try {
        const res = await dispatch(uploadImage(formData)).unwrap();

        setImages((prev) =>
          prev.map((img, idx) =>
            img.preview === placeholders[i].preview
              ? { ...img, url: res, loading: false }
              : img,
          ),
        );
      } catch (err) {
        setImages((prev) =>
          prev.filter((img) => img.preview !== placeholders[i].preview),
        );
      }
    }
  };

  const removeImage = (index) => {
    setImages((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!images.length) {
      showError("Upload at least one image");
      return;
    }

    const payload = {
      ...form,
      price: parseInt(form.price),
      beds: form.beds ? parseInt(form.beds) : null,
      baths: form.baths ? parseInt(form.baths) : null,
      sqft: form.sqft ? parseInt(form.sqft) : null,
      images: images.map((img) => img.url),
    };

    dispatch(addProperty({ formData: payload }));
    router.push("/admin/properties");
  };

  return (
    <div className="container-fluid py-4">
      <TopTitle title="Admin: Add Property | UrbanEstate" />
      <div className="row justify-content-center">
        <div className="col-lg-9">
          <div className="card shadow-sm">
            <div className="card-body">
              <h4 className="mb-4">Add New Property</h4>

              <form onSubmit={handleSubmit}>
                {/* BASIC INFO */}
                <div className="row g-3 mb-3">
                  {[
                    ["title", "Title"],
                    ["slug", "Slug"],
                    ["location", "Location"],
                  ].map(([name, label]) => (
                    <div className="col-md-4" key={name}>
                      <label className="form-label">{label}</label>
                      <input
                        name={name}
                        value={form[name]}
                        onChange={handleChange}
                        className="form-control"
                      />
                    </div>
                  ))}

                  <div className="col-md-4">
                    <label className="form-label">Type</label>
                    <select
                      name="type"
                      value={form.type}
                      onChange={handleChange}
                      className="form-select"
                    >
                      <option>House</option>
                      <option>Apartment</option>
                      <option>Plot</option>
                    </select>
                  </div>

                  <div className="col-md-4">
                    <label className="form-label">Listing Type</label>
                    <select
                      name="listingType"
                      value={form.listingType}
                      onChange={handleChange}
                      className="form-select"
                    >
                      <option value="SALE">For Sale</option>
                      <option value="RENT">For Rent</option>
                    </select>
                  </div>

                  <div className="col-md-4">
                    <label className="form-label">Status</label>
                    <select
                      name="status"
                      value={form.status}
                      onChange={handleChange}
                      className="form-select"
                    >
                      <option value="available">Available</option>
                      <option value="sold">Sold</option>
                    </select>
                  </div>

                  <div className="col-md-4">
                    <label className="form-label">Price</label>
                    <input
                      name="price"
                      value={form.price}
                      onChange={handleChange}
                      className="form-control"
                      type="number"
                    />
                  </div>

                  <div className="col-md-4">
                    <label className="form-label">Bedrooms</label>
                    <input
                      name="beds"
                      type="number"
                      value={form.beds}
                      onChange={handleChange}
                      className="form-control"
                    />
                  </div>

                  <div className="col-md-4">
                    <label className="form-label">Bathrooms</label>
                    <input
                      name="baths"
                      type="number"
                      value={form.baths}
                      onChange={handleChange}
                      className="form-control"
                    />
                  </div>

                  <div className="col-md-4">
                    <label className="form-label">Sqft</label>
                    <input
                      name="sqft"
                      type="number"
                      value={form.sqft}
                      onChange={handleChange}
                      className="form-control"
                    />
                  </div>

                  <div className="col-md-4 d-flex align-items-center mt-4">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="isFeatured"
                        id="isFeatured"
                        checked={form.isFeatured}
                        onChange={handleChange}
                      />
                      <label className="form-check-label" htmlFor="isFeatured">
                        Featured Property
                      </label>
                    </div>
                  </div>

                  <hr className="my-4" />
                  <h5 className="mb-3">Amenities</h5>

                  <div className="col-md-3">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="garage"
                        id="garage"
                        checked={form.garage}
                        onChange={handleChange}
                      />
                      <label className="form-check-label" htmlFor="garage">
                        Garage
                      </label>
                    </div>
                  </div>

                  <div className="col-md-3">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="swimmingPool"
                        id="swimmingPool"
                        checked={form.swimmingPool}
                        onChange={handleChange}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="swimmingPool"
                      >
                        Swimming Pool
                      </label>
                    </div>
                  </div>

                  <div className="col-md-3">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="balcony"
                        id="balcony"
                        checked={form.balcony}
                        onChange={handleChange}
                      />
                      <label className="form-check-label" htmlFor="balcony">
                        Balcony
                      </label>
                    </div>
                  </div>

                  <div className="col-md-3">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="garden"
                        id="garden"
                        checked={form.garden}
                        onChange={handleChange}
                      />
                      <label className="form-check-label" htmlFor="garden">
                        Garden
                      </label>
                    </div>
                  </div>
                  <div className="col-12">
                    <label className="form-label">Description</label>
                    <textarea
                      name="description"
                      value={form.description}
                      onChange={handleChange}
                      className="form-control"
                      rows="4"
                      placeholder="Enter property details..."
                    ></textarea>
                  </div>
                </div>

                {/* IMAGE UPLOAD */}
                <div className="mb-3">
                  <label className="form-label">Upload Images</label>
                  <input
                    type="file"
                    multiple
                    accept="image/*"
                    className="form-control"
                    onChange={handleImageUpload}
                  />
                </div>

                {/* IMAGE PREVIEW GRID */}
                <div className="row g-3 mb-4">
                  {images.map((img, index) => (
                    <div className="col-6 col-sm-4 col-md-3" key={index}>
                      <div
                        className="position-relative border rounded overflow-hidden w-100"
                        style={{ height: 150 }}
                      >
                        {/* Background image ALWAYS visible */}
                        <img
                          src={img.url || img.preview}
                          className="w-100 h-100"
                          style={{
                            objectFit: "cover",
                            filter: img.loading ? "blur(4px)" : "none",
                          }}
                        />

                        {/* Loader overlay */}
                        {img.loading && (
                          <div className="position-absolute top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center">
                            <div className="spinner-border text-light" />
                          </div>
                        )}

                        {/* Remove button */}
                        {!img.loading && (
                          <button
                            type="button"
                            onClick={() => removeImage(index)}
                            className="btn btn-sm btn-danger rounded-2 position-absolute top-0 end-0 m-1"
                          >
                            ✕
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* ACTIONS */}
                <div className="d-flex justify-content-end gap-2">
                  <Link href="/admin/properties" className="btn btn-secondary">
                    Cancel
                  </Link>
                  <button type="submit" className="btn btn-primary">
                    Save Property
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
