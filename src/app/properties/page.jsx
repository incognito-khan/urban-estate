"use client";

import { useEffect, Suspense } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "next/navigation";
import {
  getProperties,
  getFeaturedProperties,
} from "@/redux/slices/propertySlice";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import TopTitle from "@/components/TopTitle";

function PropertiesContent() {
  const dispatch = useDispatch();
  const searchParams = useSearchParams();
  const router = useRouter();
  const { properties, loading, pagination, featuredProperties } = useSelector(
    (state) => state.property,
  );

  useEffect(() => {
    dispatch(getFeaturedProperties());
  }, [dispatch]);

  // View state
  const [viewMode, setViewMode] = useState("grid");
  const [sortBy, setSortBy] = useState(searchParams.get("sortBy") || "newest");

  // Sidebar filters state
  const [sidebarFilters, setSidebarFilters] = useState({
    location: searchParams.get("location") || "",
    type: searchParams.get("type") || "",
    minPrice: searchParams.get("minPrice") || "",
    maxPrice: searchParams.get("maxPrice") || "",
    beds: searchParams.get("beds") || "",
    baths: searchParams.get("baths") || "",
    listingType: searchParams.get("listingType") || "",
    garage: searchParams.get("garage") === "true",
    swimmingPool: searchParams.get("swimmingPool") === "true",
    balcony: searchParams.get("balcony") === "true",
    garden: searchParams.get("garden") === "true",
  });

  // Featured properties for sidebar
  const featuredInSidebar = featuredProperties;

  useEffect(() => {
    const filters = {};
    if (searchParams.get("location"))
      filters.location = searchParams.get("location");
    if (searchParams.get("type")) filters.type = searchParams.get("type");
    if (searchParams.get("listingType"))
      filters.listingType = searchParams.get("listingType");
    if (searchParams.get("minPrice"))
      filters.minPrice = searchParams.get("minPrice");
    if (searchParams.get("maxPrice"))
      filters.maxPrice = searchParams.get("maxPrice");
    if (searchParams.get("beds")) filters.beds = searchParams.get("beds");
    if (searchParams.get("baths")) filters.baths = searchParams.get("baths");
    if (searchParams.get("garage") === "true") filters.garage = "true";
    if (searchParams.get("swimmingPool") === "true")
      filters.swimmingPool = "true";
    if (searchParams.get("balcony") === "true") filters.balcony = "true";
    if (searchParams.get("garden") === "true") filters.garden = "true";
    if (searchParams.get("page")) filters.page = searchParams.get("page");
    if (searchParams.get("sortBy")) filters.sortBy = searchParams.get("sortBy");
    filters.limit = 6; // Fixed limit for now

    dispatch(getProperties(filters));
  }, [dispatch, searchParams]);

  const applyFilters = () => {
    const params = new URLSearchParams();
    if (sidebarFilters.location)
      params.set("location", sidebarFilters.location);
    if (sidebarFilters.type && sidebarFilters.type !== "All Types")
      params.set("type", sidebarFilters.type);
    if (sidebarFilters.listingType)
      params.set("listingType", sidebarFilters.listingType);
    if (sidebarFilters.minPrice)
      params.set("minPrice", sidebarFilters.minPrice);
    if (sidebarFilters.maxPrice)
      params.set("maxPrice", sidebarFilters.maxPrice);
    if (sidebarFilters.beds) params.set("beds", sidebarFilters.beds);
    if (sidebarFilters.baths) params.set("baths", sidebarFilters.baths);
    if (sidebarFilters.garage) params.set("garage", "true");
    if (sidebarFilters.swimmingPool) params.set("swimmingPool", "true");
    if (sidebarFilters.balcony) params.set("balcony", "true");
    if (sidebarFilters.garden) params.set("garden", "true");

    router.push(`/properties?${params.toString()}`, { scroll: false });
  };

  const handlePageChange = (page) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", page);
    router.push(`/properties?${params.toString()}`, { scroll: false });
    // Scroll to top of properties section
    document
      .getElementById("properties")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setSidebarFilters((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleFilterClick = (name, value) => {
    setSidebarFilters((prev) => ({
      ...prev,
      [name]: prev[name] === value ? "" : value,
    }));
  };

  const handleSortChange = (e) => {
    const newSortBy = e.target.value;
    setSortBy(newSortBy);
    const params = new URLSearchParams(searchParams.toString());
    params.set("sortBy", newSortBy);
    params.set("page", 1); // Reset to first page on sort change
    router.push(`/properties?${params.toString()}`, { scroll: false });
  };

  const LoadingSpinner = () => (
    <div className="d-flex justify-content-center align-items-center py-5 w-100">
      <div
        className="spinner-border text-primary"
        role="status"
        style={{ width: "3rem", height: "3rem" }}
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
  return (
    <div>
      <TopTitle title="Properties | UrbanEstate" />
      <main className="main pt-5 mt-5">
        {/* Page Title */}
        <div className="page-title">
          <div className="heading">
            <div className="container">
              <div className="row d-flex justify-content-center text-center">
                <div className="col-lg-8">
                  <h1 className="heading-title">Properties</h1>
                  <p className="mb-0">
                    Odio et unde deleniti. Deserunt numquam exercitationem.
                    Officiis quo odio sint voluptas consequatur ut a odio
                    voluptatem. Sit dolorum debitis veritatis natus dolores.
                    Quasi ratione sint. Sit quaerat ipsum dolorem.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <nav className="breadcrumbs">
            <div className="container">
              <ol>
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li className="current">Properties</li>
              </ol>
            </div>
          </nav>
        </div>
        {/* End Page Title */}
        {/* Properties Section */}
        <section id="properties" className="properties section">
          <div className="container" data-aos="fade-up" data-aos-delay={100}>
            <div className="row">
              <div className="col-lg-8">
                <div className="properties-header mb-4">
                  <div className="d-flex justify-content-between align-items-center flex-wrap gap-3">
                    <div className="view-toggle d-flex gap-2">
                      <button
                        type="button"
                        className={`btn btn-outline-secondary btn-sm view-btn ${viewMode === "grid" ? "active" : ""}`}
                        onClick={() => setViewMode("grid")}
                      >
                        <i className="bi bi-grid-3x3-gap" /> Grid
                      </button>
                      <button
                        type="button"
                        className={`btn btn-outline-secondary btn-sm view-btn ${viewMode === "list" ? "active" : ""}`}
                        onClick={() => setViewMode("list")}
                      >
                        <i className="bi bi-list" /> List
                      </button>
                    </div>
                    <div className="sort-dropdown">
                      <select
                        className="form-select form-select-sm"
                        value={sortBy}
                        onChange={handleSortChange}
                      >
                        <option value="newest">Sort by: Newest</option>
                        <option value="price-low">Price: Low to High</option>
                        <option value="price-high">Price: High to Low</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div
                  className={`properties-grid view-grid ${viewMode === "grid" ? "active" : "d-none"}`}
                  data-aos="fade-up"
                  data-aos-delay={200}
                >
                  {loading ? (
                    <LoadingSpinner />
                  ) : properties.length === 0 ? (
                    <div className="alert alert-info">
                      No properties found matching your criteria.
                    </div>
                  ) : (
                    <div className="row g-4">
                      {properties.map((property) => (
                        <div key={property.id} className="col-lg-6 col-md-6">
                          <div className="property-card">
                            <div className="property-image">
                              <img
                                src={
                                  property.images?.[0] ||
                                  "assets/img/real-estate/property-exterior-1.webp"
                                }
                                alt={property.title}
                                className="img-fluid"
                              />
                              <div className="property-badges">
                                {property.isFeatured && (
                                  <span className="badge featured">
                                    Featured
                                  </span>
                                )}
                                <span className="badge for-sale">
                                  {property.listingType === "SALE"
                                    ? "For Sale"
                                    : "For Rent"}
                                </span>
                              </div>
                              <div className="property-overlay">
                                <button type="button" className="favorite-btn">
                                  <i className="bi bi-heart" />
                                </button>
                              </div>
                            </div>
                            <div className="property-content">
                              <div className="property-price">
                                ${property.price?.toLocaleString()}
                              </div>
                              <h4 className="property-title">
                                <Link href={`/properties/${property.id}`}>
                                  {property.title}
                                </Link>
                              </h4>
                              <p className="property-location">
                                <i className="bi bi-geo-alt" />{" "}
                                {property.location}
                              </p>
                              <div className="property-features">
                                <span>
                                  <i className="bi bi-door-open" />{" "}
                                  {property.beds || 0}{" "}
                                  {property.beds === 1 ? "Bed" : "Beds"}
                                </span>
                                <span>
                                  <i className="bi bi-droplet" />{" "}
                                  {property.baths || 0}{" "}
                                  {property.baths === 1 ? "Bath" : "Baths"}
                                </span>
                                {property.sqft && (
                                  <span>
                                    <i className="bi bi-aspect-ratio" />{" "}
                                    {property.sqft.toLocaleString()} sqft
                                  </span>
                                )}
                              </div>
                              <Link
                                href={`/properties/${property.id}`}
                                className="btn btn-primary w-100"
                              >
                                View Details
                              </Link>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                <div
                  className={`properties-list view-list ${viewMode === "list" ? "active" : "d-none"}`}
                  data-aos="fade-up"
                  data-aos-delay={200}
                >
                  {!loading &&
                    properties.length > 0 &&
                    properties.map((property) => (
                      <div key={property.id} className="property-list-item">
                        <div className="row align-items-center">
                          <div className="col-lg-4">
                            <div className="property-image">
                              <img
                                src={
                                  property.images?.[0] ||
                                  "assets/img/real-estate/property-exterior-1.webp"
                                }
                                alt={property.title}
                                className="img-fluid"
                              />
                              <div className="property-badges">
                                {property.isFeatured && (
                                  <span className="badge featured">
                                    Featured
                                  </span>
                                )}
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-8">
                            <div className="property-content">
                              <div className="d-flex justify-content-between align-items-start mb-2">
                                <div>
                                  <h4 className="property-title mb-1">
                                    <Link href={`/properties/${property.id}`}>
                                      {property.title}
                                    </Link>
                                  </h4>
                                  <p className="property-location mb-2">
                                    <i className="bi bi-geo-alt" />{" "}
                                    {property.location}
                                  </p>
                                </div>
                                <div className="property-price">
                                  ${property.price?.toLocaleString()}
                                </div>
                              </div>
                              <div className="mini-specs">
                                <span>
                                  <i className="bi bi-door-open" />{" "}
                                  {property.beds || 0}
                                </span>
                                <span>
                                  <i className="bi bi-droplet" />{" "}
                                  {property.baths || 0}
                                </span>
                                {property.sqft && (
                                  <span>
                                    <i className="bi bi-aspect-ratio" />{" "}
                                    {property.sqft.toLocaleString()}
                                  </span>
                                )}
                              </div>
                              <div className="d-flex justify-content-between align-items-center">
                                <div className="property-actions">
                                  <button
                                    type="button"
                                    className="btn btn-outline-secondary btn-sm me-2"
                                  >
                                    <i className="bi bi-heart" />
                                  </button>
                                  <Link
                                    href={`/properties/${property.id}`}
                                    className="btn btn-primary btn-sm"
                                  >
                                    View Details
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
                <nav className="mt-5" data-aos="fade-up" data-aos-delay={300}>
                  <ul className="pagination justify-content-center">
                    <li
                      className={`page-item ${pagination.page <= 1 ? "disabled" : ""}`}
                    >
                      <button
                        type="button"
                        className="page-link"
                        onClick={() => handlePageChange(pagination.page - 1)}
                        disabled={pagination.page <= 1}
                      >
                        Previous
                      </button>
                    </li>
                    {[...Array(pagination.totalPages)].map((_, i) => (
                      <li
                        key={`page-${i + 1}`}
                        className={`page-item ${pagination.page === i + 1 ? "active" : ""}`}
                      >
                        <button
                          type="button"
                          className="page-link"
                          onClick={() => handlePageChange(i + 1)}
                        >
                          {i + 1}
                        </button>
                      </li>
                    ))}
                    <li
                      className={`page-item ${pagination.page >= pagination.totalPages ? "disabled" : ""}`}
                    >
                      <button
                        type="button"
                        className="page-link"
                        onClick={() => handlePageChange(pagination.page + 1)}
                        disabled={pagination.page >= pagination.totalPages}
                      >
                        Next
                      </button>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="col-lg-4" data-aos="fade-up" data-aos-delay={200}>
                <div className="properties-sidebar">
                  <div className="filter-widget">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <h5 className="filter-title mb-0">Filter Properties</h5>
                      <button
                        type="button"
                        className="btn btn-link btn-sm p-0 text-decoration-none"
                        onClick={() => {
                          setSidebarFilters({
                            location: "",
                            type: "",
                            minPrice: "",
                            maxPrice: "",
                            beds: "",
                            baths: "",
                            listingType: "",
                          });
                          router.push("/properties", { scroll: false });
                        }}
                      >
                        Clear All
                      </button>
                    </div>
                    <div className="filter-section">
                      <label className="form-label">Listing Type</label>
                      <select
                        className="form-select"
                        name="listingType"
                        value={sidebarFilters.listingType}
                        onChange={handleInputChange}
                      >
                        <option value="">All</option>
                        <option value="SALE">For Sale</option>
                        <option value="RENT">For Rent</option>
                      </select>
                    </div>
                    <div className="filter-section">
                      <label className="form-label">Property Type</label>
                      <select
                        className="form-select"
                        name="type"
                        value={sidebarFilters.type}
                        onChange={handleInputChange}
                      >
                        <option value="">All Types</option>
                        <option value="House">House</option>
                        <option value="Apartment">Apartment</option>
                        <option value="Plot">Plot</option>
                      </select>
                    </div>
                    <div className="filter-section">
                      <label className="form-label">Price Range</label>
                      <div className="row g-2">
                        <div className="col-6">
                          <input
                            type="number"
                            className="form-control"
                            placeholder="Min Price"
                            name="minPrice"
                            value={sidebarFilters.minPrice}
                            onChange={handleInputChange}
                          />
                        </div>
                        <div className="col-6">
                          <input
                            type="number"
                            className="form-control"
                            placeholder="Max Price"
                            name="maxPrice"
                            value={sidebarFilters.maxPrice}
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="filter-section">
                      <label className="form-label">Bedrooms</label>
                      <div className="bedroom-filter">
                        {["Any", "1", "2", "3", "4", "5+"].map((val) => (
                          <button
                            key={`beds-${val}`}
                            type="button"
                            className={`btn btn-outline-secondary btn-sm filter-btn ${sidebarFilters.beds === (val === "Any" ? "" : val) ? "active" : ""}`}
                            onClick={() =>
                              handleFilterClick(
                                "beds",
                                val === "Any" ? "" : val,
                              )
                            }
                          >
                            {val === "Any"
                              ? "Any"
                              : val.includes("+")
                                ? val
                                : `${val}+`}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div className="filter-section">
                      <label className="form-label">Bathrooms</label>
                      <div className="bathroom-filter">
                        {["Any", "1", "2", "3", "4+"].map((val) => (
                          <button
                            key={`baths-${val}`}
                            type="button"
                            className={`btn btn-outline-secondary btn-sm filter-btn ${sidebarFilters.baths === (val === "Any" ? "" : val) ? "active" : ""}`}
                            onClick={() =>
                              handleFilterClick(
                                "baths",
                                val === "Any" ? "" : val,
                              )
                            }
                          >
                            {val === "Any"
                              ? "Any"
                              : val.includes("+")
                                ? val
                                : `${val}+`}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div className="filter-section">
                      <label className="form-label">Location</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter city or neighborhood"
                        name="location"
                        value={sidebarFilters.location}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="filter-section">
                      <label className="form-label">Features</label>
                      <div className="features-filter">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            name="garage"
                            id="garage-check"
                            checked={sidebarFilters.garage}
                            onChange={handleInputChange}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="garage-check"
                          >
                            Garage
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            name="swimmingPool"
                            id="pool-check"
                            checked={sidebarFilters.swimmingPool}
                            onChange={handleInputChange}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="pool-check"
                          >
                            Swimming Pool
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            name="balcony"
                            id="balcony-check"
                            checked={sidebarFilters.balcony}
                            onChange={handleInputChange}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="balcony-check"
                          >
                            Balcony
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            name="garden"
                            id="garden-check"
                            checked={sidebarFilters.garden}
                            onChange={handleInputChange}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="garden-check"
                          >
                            Garden
                          </label>
                        </div>
                      </div>
                    </div>
                    <button
                      type="button"
                      className="btn btn-primary w-100"
                      onClick={applyFilters}
                    >
                      Apply Filters
                    </button>
                  </div>
                  <div className="featured-properties mt-4">
                    <h5>Featured Properties</h5>
                    {featuredInSidebar.length > 0 ? (
                      featuredInSidebar.map((prop) => (
                        <div
                          key={`sidebar-feat-${prop.id}`}
                          className="featured-item"
                        >
                          <div className="row g-3 align-items-center">
                            <div className="col-5">
                              <Link href={`/properties/${prop.id}`}>
                                <img
                                  src={
                                    prop.images?.[0] ||
                                    "assets/img/real-estate/property-exterior-8.webp"
                                  }
                                  alt={prop.title}
                                  className="img-fluid rounded"
                                />
                              </Link>
                            </div>
                            <div className="col-7">
                              <h6 className="mb-1">
                                <Link
                                  href={`/properties/${prop.id}`}
                                  className="text-dark"
                                >
                                  {prop.title}
                                </Link>
                              </h6>
                              <p className="text-muted small mb-1">
                                {prop.location}
                              </p>
                              <strong className="text-primary">
                                ${prop.price?.toLocaleString()}
                              </strong>
                            </div>
                          </div>
                        </div>
                      ))
                    ) : (
                      <p className="text-muted small">
                        No featured properties available
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* /Properties Section */}
      </main>
    </div>
  );
}

export default function Properties() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PropertiesContent />
    </Suspense>
  );
}
