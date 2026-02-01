import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { slugify } from "@/lib/slugify";

export async function POST(request) {
  try {
    const {
      title,
      slug,
      price,
      location,
      type,
      listingType,
      status,
      images,
      description,
      beds,
      baths,
      sqft,
      isFeatured,
      garage,
      swimmingPool,
      balcony,
      garden,
    } = await request.json();

    if (!title || !slug || !price || !location || !type || !status || !images) {
      return NextResponse.json(
        { error: "Missing required fields", success: false },
        { status: 400 },
      );
    }

    const safeSlug = slugify(slug || title);

    const existingProperty = await prisma.property.findUnique({
      where: { slug: safeSlug },
    });

    if (existingProperty) {
      return NextResponse.json(
        { error: "Property with this slug already exists", success: false },
        { status: 400 },
      );
    }

    const property = await prisma.property.create({
      data: {
        title,
        slug: safeSlug,
        price,
        location,
        type,
        listingType: listingType || "SALE",
        status,
        images,
        description,
        beds: beds ? parseInt(beds) : null,
        baths: baths ? parseInt(baths) : null,
        sqft: sqft ? parseInt(sqft) : null,
        isFeatured: isFeatured === true || isFeatured === "true",
        garage: garage === true || garage === "true",
        swimmingPool: swimmingPool === true || swimmingPool === "true",
        balcony: balcony === true || balcony === "true",
        garden: garden === true || garden === "true",
      },
    });

    return NextResponse.json(
      {
        message: "Property created successfully",
        data: property,
        success: true,
      },
      { status: 201 },
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Internal Server Error", success: false },
      { status: 500 },
    );
  }
}

/**
 * GET ALL PROPERTIES (with optional filters)
 */
export async function GET(request) {
  try {
    // Extract query parameters from URL
    const { searchParams } = new URL(request.url);
    const location = searchParams.get("location");
    const type = searchParams.get("type");
    const listingType = searchParams.get("listingType");
    const minPrice = searchParams.get("minPrice");
    const maxPrice = searchParams.get("maxPrice");
    const beds = searchParams.get("beds");
    const baths = searchParams.get("baths");
    const sortBy = searchParams.get("sortBy");

    // Build dynamic where clause
    const where = {};

    // Location filter (case-insensitive partial match)
    if (location) {
      where.location = {
        contains: location,
        mode: "insensitive",
      };
    }

    // Property type filter (exact match)
    if (type) {
      where.type = type;
    }

    // Listing type filter (exact match)
    if (listingType) {
      where.listingType = listingType;
    }

    // Price range filter
    if (minPrice || maxPrice) {
      where.price = {};
      if (minPrice) {
        where.price.gte = parseInt(minPrice);
      }
      if (maxPrice) {
        where.price.lte = parseInt(maxPrice);
      }
    }

    // Bedrooms filter
    if (beds) {
      where.beds = { gte: parseInt(beds) };
    }

    // Bathrooms filter
    if (baths) {
      where.baths = { gte: parseInt(baths) };
    }

    // Amenity filters
    const garage = searchParams.get("garage");
    if (garage === "true") where.garage = true;

    const swimmingPool = searchParams.get("swimmingPool");
    if (swimmingPool === "true") where.swimmingPool = true;

    const balcony = searchParams.get("balcony");
    if (balcony === "true") where.balcony = true;

    const garden = searchParams.get("garden");
    if (garden === "true") where.garden = true;

    // Featured filter
    const isFeatured = searchParams.get("isFeatured");
    if (isFeatured === "true") {
      where.isFeatured = true;
    }

    // Pagination
    const page = parseInt(searchParams.get("page")) || 1;
    const limit = parseInt(searchParams.get("limit")) || 6;
    const skip = (page - 1) * limit;

    // Sorting logic
    let orderBy = { createdAt: "desc" }; // Default sort
    if (sortBy === "price-low") {
      orderBy = { price: "asc" };
    } else if (sortBy === "price-high") {
      orderBy = { price: "desc" };
    } else if (sortBy === "newest") {
      orderBy = { createdAt: "desc" };
    }

    const [total, properties] = await Promise.all([
      prisma.property.count({ where }),
      prisma.property.findMany({
        where,
        skip,
        take: limit,
        orderBy,
        include: {
          leads: true,
        },
      }),
    ]);

    return NextResponse.json(
      {
        success: true,
        data: properties,
        pagination: {
          total,
          page,
          limit,
          totalPages: Math.ceil(total / limit),
        },
      },
      { status: 200 },
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Internal Server Error", success: false },
      { status: 500 },
    );
  }
}

/**
 * DELETE PROPERTY
 */
export async function DELETE(request) {
  try {
    const { id } = await request.json();

    if (!id) {
      return NextResponse.json(
        { error: "Property ID is required", success: false },
        { status: 400 },
      );
    }

    const property = await prisma.property.delete({
      where: { id },
    });

    return NextResponse.json(
      {
        message: "Property deleted successfully",
        data: property,
        success: true,
      },
      { status: 200 },
    );
  } catch (error) {
    console.error(error);

    // Prisma specific error (record not found)
    if (error.code === "P2025") {
      return NextResponse.json(
        { error: "Property not found", success: false },
        { status: 404 },
      );
    }

    return NextResponse.json(
      { error: "Internal Server Error", success: false },
      { status: 500 },
    );
  }
}

/**
 * UPDATE PROPERTY
 */
export async function PATCH(request) {
  try {
    const {
      id,
      title,
      slug,
      price,
      location,
      type,
      listingType,
      status,
      images,
      description,
      beds,
      baths,
      sqft,
      isFeatured,
      garage,
      swimmingPool,
      balcony,
      garden,
    } = await request.json();

    if (!id) {
      return NextResponse.json(
        { error: "Property ID is required", success: false },
        { status: 400 },
      );
    }

    const data = {
      title,
      slug,
      price,
      location,
      type,
      listingType,
      status,
      images,
      description,
    };

    if (beds !== undefined) data.beds = beds ? parseInt(beds) : null;
    if (baths !== undefined) data.baths = baths ? parseInt(baths) : null;
    if (sqft !== undefined) data.sqft = sqft ? parseInt(sqft) : null;
    if (isFeatured !== undefined)
      data.isFeatured = isFeatured === true || isFeatured === "true";
    if (garage !== undefined)
      data.garage = garage === true || garage === "true";
    if (swimmingPool !== undefined)
      data.swimmingPool = swimmingPool === true || swimmingPool === "true";
    if (balcony !== undefined)
      data.balcony = balcony === true || balcony === "true";
    if (garden !== undefined)
      data.garden = garden === true || garden === "true";

    const property = await prisma.property.update({
      where: { id },
      data,
    });

    return NextResponse.json(
      {
        message: "Property updated successfully",
        data: property,
        success: true,
      },
      { status: 200 },
    );
  } catch (error) {
    console.error(error);

    if (error.code === "P2025") {
      return NextResponse.json(
        { error: "Property not found", success: false },
        { status: 404 },
      );
    }

    return NextResponse.json(
      { error: "Internal Server Error", success: false },
      { status: 500 },
    );
  }
}
