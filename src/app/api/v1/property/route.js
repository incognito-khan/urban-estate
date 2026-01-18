import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { title, slug, price, location, type, status, images } =
      await request.json();

    if (!title || !slug || !price || !location || !type || !status || !images) {
      return NextResponse.json({
        error: "Missing required fields",
        status: 400,
        success: false,
      });
    }

    const property = await prisma.property.create({
      data: {
        title,
        slug,
        price,
        location,
        type,
        status,
        images,
      },
    });

    return NextResponse.json({
      message: "Property created successfully",
      status: 201,
      data: property,
      success: true,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      error: "Internal Server Error",
      status: 500,
      success: false,
    });
  }
}

export async function GET() {
  try {
    const properties = await prisma.property.findMany({
      include: {
        leads: true,
      },
    });
    return NextResponse.json({
      message: "Properties fetched successfully",
      status: 200,
      data: properties,
      success: true,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      error: "Internal Server Error",
      status: 500,
      success: false,
    });
  }
}

export async function DELETE(request) {
  try {
    const { id } = await request.json();
    const property = await prisma.property.delete({ where: { id } });
    return NextResponse.json({
      message: "Property deleted successfully",
      status: 200,
      data: property,
      success: true,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      error: "Internal Server Error",
      status: 500,
      success: false,
    });
  }
}

export async function PATCH(request) {
  try {
    const { id, title, slug, price, location, type, status, images } =
      await request.json();
    const property = await prisma.property.update({
      where: { id },
      data: { title, slug, price, location, type, status, images },
    });
    return NextResponse.json({
      message: "Property updated successfully",
      status: 200,
      data: property,
      success: true,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      error: "Internal Server Error",
      status: 500,
      success: false,
    });
  }
}
