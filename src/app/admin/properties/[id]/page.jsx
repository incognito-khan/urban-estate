"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { uploadImage } from "@/redux/slices/uploadSlice";
import { getProperty, updateProperty } from "@/redux/slices/propertySlice";
import { showError } from "@/lib/toast";
import { slugify } from "@/lib/slugify";
import { useRouter, useParams } from "next/navigation";
import TopTitle from "@/components/TopTitle";

export default function EditPropertyPage() {
  const dispatch = useDispatch();
  const router = useRouter();
  const { id } = useParams();
  const { property, loading } = useSelector((state) => state.property);

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

  useEffect(() => {
    if (id) {
      dispatch(getProperty(id));
    }
  }, [id, dispatch]);

  useEffect(() => {
    if (property && property.id === id) {
      setForm({
        title: property.title || "",
        slug: property.slug || "",
        location: property.location || "",
        type: property.type || "House",
        listingType: property.listingType || "SALE",
        status: property.status || "available",
        price: property.price ? property.price.toString() : "",
        description: property.description || "",
        beds: property.beds ? property.beds.toString() : "",
        baths: property.baths ? property.baths.toString() : "",
        sqft: property.sqft ? property.sqft.toString() : "",
        isFeatured: property.isFeatured || false,
        garage: property.garage || false,
        swimmingPool: property.swimmingPool || false,
        balcony: property.balcony || false,
        garden: property.garden || false,
      });
      setImages(
        property.images?.map((url) => ({
          url,
          preview: url,
          loading: false,
        })) || [],
      );
    }
  }, [property, id]);

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

  const handleImageUpload = async (e) => {
    const files = Array.from(e.target.files);

    const placeholders = files.map((file) => ({
      preview: URL.createObjectURL(file),
      url: null,
      loading: true,
    }));

    setImages((prev) => [...prev, ...placeholders]);

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

  const handleSubmit = async (e) => {
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
      images: images.map((img) => img.url).filter((url) => url !== null),
    };

    await dispatch(updateProperty({ id, formData: payload }));
    router.push("/admin/properties");
  };

  if (loading && !property) {
    return (
      <div className="container-fluid py-4 d-flex justify-content-center">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="container-fluid py-4">
      <TopTitle
        title={
          property
            ? `Admin: Edit ${property.title} | UrbanEstate`
            : "Admin: Edit Property | UrbanEstate"
        }
      />
      <div className="row justify-content-center">
        <div className="col-lg-9">
          <div className="card shadow-sm">
            <div className="card-body">
              <h4 className="mb-4">Edit Property</h4>

              <form onSubmit={handleSubmit}>
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
                        required
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
                      required
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

                <div className="row g-3 mb-4">
                  {images.map((img, index) => (
                    <div className="col-6 col-sm-4 col-md-3" key={index}>
                      <div
                        className="position-relative border rounded overflow-hidden w-100"
                        style={{ height: 150 }}
                      >
                        <img
                          src={img.url || img.preview}
                          className="w-100 h-100"
                          style={{
                            objectFit: "cover",
                            filter: img.loading ? "blur(4px)" : "none",
                          }}
                        />
                        {img.loading && (
                          <div className="position-absolute top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center">
                            <div className="spinner-border text-light" />
                          </div>
                        )}
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

                <div className="d-flex justify-content-end gap-2">
                  <Link href="/admin/properties" className="btn btn-secondary">
                    Cancel
                  </Link>
                  <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={loading}
                  >
                    {loading ? "Saving..." : "Save Changes"}
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
