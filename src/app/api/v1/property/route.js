import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { slugify } from "@/lib/slugify";

export async function POST(request) {
  try {
    const { title, slug, price, location, type, status, images, description } =
      await request.json();

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
        status,
        images,
        description,
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
 * GET ALL PROPERTIES
 */
export async function GET() {
  try {
    const properties = await prisma.property.findMany({
      include: {
        leads: true,
      },
    });

    return NextResponse.json(
      {
        message: "Properties fetched successfully",
        data: properties,
        success: true,
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
      status,
      images,
      description,
    } = await request.json();

    if (!id) {
      return NextResponse.json(
        { error: "Property ID is required", success: false },
        { status: 400 },
      );
    }

    const property = await prisma.property.update({
      where: { id },
      data: {
        title,
        slug,
        price,
        location,
        type,
        status,
        images,
        description,
      },
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
